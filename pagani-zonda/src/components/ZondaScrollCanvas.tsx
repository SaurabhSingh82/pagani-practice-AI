import { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface ZondaScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function ZondaScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: ZondaScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const paddedIndex = i.toString().padStart(3, '0');
      const img = new Image();
      img.src = `${imageFolderPath}/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [totalFrames, imageFolderPath]);

  // Draw frame on canvas
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ensure the image exists and is loaded
    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // High DPI support
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    // Only configure size if it has changed to prevent clearing state constantly
    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      ctx.scale(dpr, dpr);
    }

    // Clear canvas
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Object-fit contain logic
    const hRatio = displayWidth / img.width;
    const vRatio = displayHeight / img.height;
    const ratio = Math.min(hRatio, vRatio);
    
    const centerShift_x = (displayWidth - img.width * ratio) / 2;
    const centerShift_y = (displayHeight - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0-1) to frame index (0-239)
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(latest * totalFrames))
    );
    drawFrame(frameIndex);
  });

  // Handle Resize and initial draw
  useEffect(() => {
    const handleResize = () => {
      // Re-draw current frame on resize
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(scrollYProgress.get() * totalFrames))
      );
      drawFrame(frameIndex);
    };

    window.addEventListener('resize', handleResize);
    // Draw initial if first frame is loaded
    if (images.length > 0 && images[0].complete) {
      drawFrame(0);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [images]); // Images dependency so initial draw happens once they are loaded

  return (
    <div className="absolute inset-0 w-full h-full bg-pagani-black flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-contain"
      />
      {/* Loading Indicator */}
      {imagesLoaded < totalFrames && (
        <div className="absolute bottom-10 left-10 text-white font-orbitron text-sm">
          LOADING SEQUENCE... {Math.round((imagesLoaded / totalFrames) * 100)}%
        </div>
      )}
    </div>
  );
}
