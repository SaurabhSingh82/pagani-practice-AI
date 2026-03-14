import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message.');

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-carbon-gray border border-white/10 z-[101] p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-orbitron font-bold text-white mb-2 uppercase tracking-wider">
              Connect <span className="text-pagani-gold">Me</span>
            </h2>
            <p className="text-gray-400 font-rajdhani mb-8 tracking-widest text-sm">
              Direct connection to the atelier. Send a message.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-900/20 border border-green-500/50 p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-400" size={20} />
                </div>
                <p className="text-green-400 font-rajdhani text-lg tracking-wider">Message dispatched successfully.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-rajdhani tracking-[0.2em] text-pagani-gold mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-pagani-black border border-white/10 px-4 py-3 text-white font-rajdhani focus:outline-none focus:border-pagani-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-rajdhani tracking-[0.2em] text-pagani-gold mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-pagani-black border border-white/10 px-4 py-3 text-white font-rajdhani focus:outline-none focus:border-pagani-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-rajdhani tracking-[0.2em] text-pagani-gold mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-pagani-black border border-white/10 px-4 py-3 text-white font-rajdhani focus:outline-none focus:border-pagani-gold transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 font-rajdhani text-sm">Failed to send message. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-3 bg-pagani-gold text-pagani-black font-orbitron font-bold py-4 uppercase tracking-widest hover:bg-bright-gold transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-pagani-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
