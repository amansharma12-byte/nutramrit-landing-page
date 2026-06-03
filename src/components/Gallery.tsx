import img1 from "@/assets/gallery/img1.png";
import img2 from "@/assets/gallery/img2.png";
import img3 from "@/assets/gallery/img3.png";
import img4 from "@/assets/gallery/img4.png";
import img5 from "@/assets/gallery/img5.png";
import img6 from "@/assets/gallery/img6.png";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="px-4 py-6 space-y-4">
      <h3 className="text-xl font-bold text-center text-foreground">हमारे कस्टमर की रियल फोटोज</h3>
      
      <div className="flex flex-col gap-4">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Customer transformation ${index + 1}`}
            className="w-full max-w-md mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
