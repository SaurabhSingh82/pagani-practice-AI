import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Trash2, Inbox } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface Inquiry {
  _id?: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const { t } = useTranslation();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/inquiries');
        if (!res.ok) throw new Error('Failed to fetch from server.');
        const data = await res.json();
        setInquiries(data.data || []);
      } catch (err) {
        setError('Database connection error or server offline.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInquiries();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 px-8 md:px-24 bg-pagani-black text-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h1 className="text-4xl font-orbitron font-bold text-white mb-2 tracking-wider">
                {t('nav.admin')} DASHBOARD
              </h1>
              <p className="font-rajdhani text-gray-400 tracking-widest text-sm uppercase">Lead Management System</p>
            </div>
            <div className="text-xl font-orbitron text-pagani-gold">
              TOTAL: {inquiries.length}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-8 h-8 border-2 border-pagani-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-500/50 text-red-400 p-6 rounded font-rajdhani tracking-wider">
              {error}
            </div>
          ) : inquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-500">
              <Inbox size={48} className="mb-4 text-white/10" />
              <p className="font-rajdhani text-xl tracking-wider uppercase">No inquiries found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inquiries.map((inq, idx) => (
                <div key={inq._id || idx} className="bg-carbon-gray border border-white/5 p-6 hover:border-pagani-gold/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-pagani-gold/5 blur-[20px] rounded-full point-events-none group-hover:bg-pagani-gold/20 transition-colors"></div>
                  
                  <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="font-rajdhani font-bold text-xl text-white">{inq.name}</h3>
                      <a href={`mailto:${inq.email}`} className="text-pagani-gold font-rajdhani text-sm hover:underline">{inq.email}</a>
                    </div>
                    {/* Dummy delete icon for visual completeness */}
                    <button className="text-gray-600 hover:text-red-400 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <div className="mb-6 h-24 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="font-rajdhani text-gray-400 text-sm whitespace-pre-wrap">
                      {inq.message || <span className="italic text-gray-600">No additional message provided.</span>}
                    </p>
                  </div>
                  
                  <div className="text-xs text-gray-500 font-rajdhani tracking-widest uppercase">
                    Received: {new Date(inq.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
