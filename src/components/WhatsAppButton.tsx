import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917042714900";
  const message = encodeURIComponent("नमस्ते! मुझे Nutramrit Shape N Slim & Slim N Fit के बारे में जानकारी चाहिए।");
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-4 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 animate-bounce-soft"
      aria-label="WhatsApp पर बात करें"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </button>
  );
};

export default WhatsAppButton;
