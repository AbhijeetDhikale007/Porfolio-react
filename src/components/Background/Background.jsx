import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Background() {
  const canvas2Ref = useRef(null);
  const frames = {
    currentIndex: 0,
    maxIndex: 6,
  };
  const images = [];
  let imagesLoaded = 0;

  useEffect(() => {
    const canvas = canvas2Ref.current;
    const context = canvas.getContext('2d');

    const preloadImages = () => {
      for (let i = 1; i <= frames.maxIndex; i++) {
        // const imageUrl = `/Frames/frame_${i.toString().padStart(4, '0')}.jpeg`;
        // const imageUrl = `/Frames2/frame_${i.toString().padStart(4, '0')}.png`;
        // const imageUrl = `/Frames3/frame_${i.toString().padStart(4, '0')}.jpg`;
        // const imageUrl = `/Frames4/frame_${i.toString().padStart(4, '0')}.jpg`;

        const imageUrl = `/Wallpaper/Wallpaper_${i.toString()}.jpg`;

        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex) {
            loadImage(frames.currentIndex);
            console.log('Loaded');
            startAnimation();
          }
        };

        images.push(img);
      }
    };

    const loadImage = (index) => {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;

        const newWidth = img.width * scaleX;
        const newHeight = img.height * scaleY;

        const offSetX = (canvas.width - newWidth) / 2;
        const offSetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(img, offSetX, offSetY, newWidth, newHeight);

        frames.currentIndex = index;
      }
    };

    const startAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          // trigger: 'Background',
          start: 'top top',
          scrub: 2,
          end: 'bottom bottom'
        },
      });

       // Animate images coming from the right side
      // tl.fromTo(canvas, { x: window.innerWidth }, { x: 0, duration: 1, ease: "power2.inOut" });

      tl.to(frames, {
        currentIndex: frames.maxIndex,
        ease: "linear",
        onUpdate: () => {
          loadImage(Math.floor(frames.currentIndex));
        },
      });
    };

    preloadImages();

    window.addEventListener('resize', () => {
      loadImage(Math.floor(frames.currentIndex));
    });

    return () => {
      window.removeEventListener('resize', () => {
        loadImage(Math.floor(frames.currentIndex));
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <canvas className='fixed z--1 width-100 top-0 left-0' ref={canvas2Ref} />
}