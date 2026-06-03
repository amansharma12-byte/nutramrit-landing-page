import { ArrowDown } from "lucide-react";

const StickyOrderButton = () => {
  const scrollToQuiz = () => {
    const quizElement = document.getElementById('quiz-section');
    if (quizElement) {
      quizElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky-cta">
      <button
        onClick={scrollToQuiz}
        className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold py-3 px-6 rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 animate-bounce-soft border-2 border-yellow-400"
      >
        📋 Appointment बुक करें
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default StickyOrderButton;
