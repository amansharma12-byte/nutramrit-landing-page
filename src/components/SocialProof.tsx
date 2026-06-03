import insta1 from "@/assets/social/insta1.png";
import insta2 from "@/assets/social/insta2.png";
import insta3 from "@/assets/social/insta3.png";
import insta4 from "@/assets/social/insta4.png";
import insta5 from "@/assets/social/insta5.png";
import insta6 from "@/assets/social/insta6.png";

const SocialProof = () => {
  const images = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <div className="px-4 py-6 space-y-4">
      <h3 className="text-xl font-bold text-center text-foreground">Social Proof</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Instagram proof ${index + 1}`}
            className="w-full rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
