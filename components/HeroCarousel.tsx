import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/images/RP_Web_Banner-1.png', alt: 'Banner 1'},
  { imgUrl: '/assets/images/RP_Web_Banner-2.png', alt: 'Banner 2'},
  { imgUrl: '/assets/images/RP_Web_Banner-3.png', alt: 'Banner 3'},
  { imgUrl: '/assets/images/RP_Web_Banner-4.png', alt: 'Banner 4'},
  { imgUrl: '/assets/images/RP_Web_Banner-5.png', alt: 'Banner 5'},
  { imgUrl: '/assets/images/RP_Web_Banner-6.png', alt: 'Banner 6'},
  { imgUrl: '/assets/images/RP_Web_Banner-7-1280x720.png', alt: 'Banner 7'},
  { imgUrl: '/assets/images/RP_Web_Banner-8.png', alt: 'Banner 8'},
  { imgUrl: '/assets/images/RP_Web_Banner-9-1080x608.png', alt: 'Banner 9'},
];

const HeroCarousel = () => {
  return (
    <div className="hidden md:block flex-grow max-w-[700px] h-[600px] order-first md:order-last">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        className="w-full h-full rounded-[40px]"
      >
        {heroImages.map((image) => (
          <Image
            key={image.imgUrl}
            src={image.imgUrl}
            alt={image.alt}
            width={700}
            height={600}
            className="object-cover w-full h-full rounded-[40px]"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
