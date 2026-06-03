import doctorConsultation from "@/assets/doctor-consultation.png";

const CTABanner = () => {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 py-10 relative">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 blur-3xl"></div>
      
      <div className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 p-8 rounded-3xl text-center space-y-5 border-4 border-yellow-300 shadow-[0_0_60px_rgba(234,179,8,0.5)] animate-pulse-glow">
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-300 rounded-tl-xl"></div>
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-300 rounded-tr-xl"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-300 rounded-bl-xl"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-300 rounded-br-xl"></div>

        {/* Doctor Consultation Image */}
        <div className="flex justify-center mb-4">
          <img 
            src={doctorConsultation} 
            alt="Doctor Consultation" 
            className="w-full max-w-sm mx-auto rounded-xl shadow-lg border-4 border-yellow-300"
          />
        </div>

        {/* Badge */}
        <div className="inline-block bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-sm animate-bounce shadow-lg">
          🔥 LIMITED TIME OFFER 🔥
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
          🎁 आज ही अपना <span className="text-yellow-300 underline decoration-wavy">50% Discount</span> Claim करें!
        </h2>
        
        <p className="text-white/95 text-xl font-semibold">
          🩺 Doctor से FREE Consultation + 🚚 FREE Delivery
        </p>
        
        <button
          onClick={scrollToQuiz}
          className="w-full max-w-md mx-auto bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 hover:from-yellow-300 hover:to-yellow-200 text-black font-black py-5 px-10 rounded-full text-2xl shadow-[0_8px_30px_rgba(234,179,8,0.6)] transition-all hover:scale-110 flex items-center justify-center gap-3 animate-bounce border-4 border-white"
        >
          👆 अभी फॉर्म भरें 👆
        </button>

        <div className="flex flex-wrap items-center justify-center gap-4 text-white text-base font-medium">
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✅ 50,000+ Happy Customers</span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✅ FSSAI Certified</span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">✅ 100% Natural</span>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
