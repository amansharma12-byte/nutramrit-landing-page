import { useState } from "react";

import LeadForm from "./LeadForm";

interface QuizState {
  step: number;
  answers: {
    goal?: string;
    age?: string;
    height?: string;
    weight?: string;
  };
  isChecking: boolean;
  isApproved: boolean;
}

const QuizSection = () => {
  const [quiz, setQuiz] = useState<QuizState>({
    step: 1,
    answers: {},
    isChecking: false,
    isApproved: false
  });

  const handleAnswer = (key: keyof QuizState['answers'], value: string) => {
    setQuiz(prev => ({
      ...prev,
      answers: { ...prev.answers, [key]: value },
      step: prev.step + 1
    }));

    if (quiz.step === 4) {
      setQuiz(prev => ({ ...prev, isChecking: true }));
      setTimeout(() => {
        setQuiz(prev => ({ ...prev, isChecking: false, isApproved: true }));
      }, 2000);
    }
  };

  const QuizButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="w-full p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all rounded-xl font-bold text-left text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] border-2 border-green-400"
    >
      {children}
    </button>
  );

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Main CTA Banner */}
      <div id="lead-form-section" className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-center space-y-4 border-4 border-yellow-400 shadow-2xl animate-pulse-scale">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
          🎯 50% OFF + FREE Doctor Consultation
        </h2>
        <p className="text-primary-foreground/90 text-lg">
          नीचे फॉर्म भरें और अपना Discount Claim करें!
        </p>
        <div className="flex justify-center">
          <span className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-lg animate-bounce">
            👇 अभी फॉर्म भरें 👇
          </span>
        </div>
      </div>

      <div id="quiz-section" className="relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-md opacity-80 animate-pulse"></div>
        
        <div className="relative bg-card border-4 border-yellow-400 p-6 rounded-2xl space-y-4 shadow-[0_0_40px_rgba(234,179,8,0.4)]">
          {/* Header Badge */}
          <div className="flex justify-center -mt-10 mb-2">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-black px-8 py-3 rounded-full text-base shadow-[0_4px_20px_rgba(234,88,12,0.5)] animate-bounce border-2 border-yellow-300">
              🔥 LIMITED TIME OFFER 🔥
            </span>
          </div>
          
          <h2 className="text-3xl font-black text-center bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
            🎯 50% डिस्काउंट पात्रता क्विज़
          </h2>
          <p className="text-center text-foreground font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 py-3 rounded-xl border-2 border-yellow-300 shadow-inner">
            👇 अभी फॉर्म भरें और 50% डिस्काउंट पाएं
          </p>

          {!quiz.isApproved && !quiz.isChecking && (
            <>
              {quiz.step === 1 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-lg">Step 1: आपका लक्ष्य</h4>
                  <div className="space-y-3">
                    <QuizButton onClick={() => handleAnswer('goal', 'belly')}>
                      🏃‍♀️ पेट की चर्बी कम करना
                    </QuizButton>
                    <QuizButton onClick={() => handleAnswer('goal', 'overall')}>
                      🔥 पूरे शरीर का वजन कम करना
                    </QuizButton>
                  </div>
                </div>
              )}

              {quiz.step === 2 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-lg">Step 2: आपकी उम्र</h4>
                  <div className="space-y-3">
                    <QuizButton onClick={() => handleAnswer('age', '18-30')}>✨ 18–30</QuizButton>
                    <QuizButton onClick={() => handleAnswer('age', '30-50')}>⭐ 30–50</QuizButton>
                    <QuizButton onClick={() => handleAnswer('age', '50+')}>💫 50+</QuizButton>
                  </div>
                </div>
              )}

              {quiz.step === 3 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-lg">Step 3: आपकी लंबाई (Height)</h4>
                  <div className="space-y-3">
                    <QuizButton onClick={() => handleAnswer('height', '<4ft')}>📏 Less than 4 ft</QuizButton>
                    <QuizButton onClick={() => handleAnswer('height', '4-5ft')}>📏 4 ft - 5 ft</QuizButton>
                    <QuizButton onClick={() => handleAnswer('height', '5-6ft')}>📏 5 ft - 6 ft</QuizButton>
                    <QuizButton onClick={() => handleAnswer('height', '>6ft')}>📏 Above 6 ft</QuizButton>
                  </div>
                </div>
              )}

              {quiz.step === 4 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-lg">Step 4: आपका वजन (Weight)</h4>
                  <div className="space-y-3">
                    <QuizButton onClick={() => handleAnswer('weight', '<40kg')}>⚖️ Less than 40 kg</QuizButton>
                    <QuizButton onClick={() => handleAnswer('weight', '40-60kg')}>⚖️ 40 - 60 kg</QuizButton>
                    <QuizButton onClick={() => handleAnswer('weight', '60-80kg')}>⚖️ 60 - 80 kg</QuizButton>
                    <QuizButton onClick={() => handleAnswer('weight', '>80kg')}>⚖️ Above 80 kg</QuizButton>
                  </div>
                </div>
              )}
            </>
          )}

          {quiz.isChecking && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-lg font-medium text-foreground">Checking Eligibility...</p>
            </div>
          )}

          {quiz.isApproved && (
            <div className="text-center space-y-4">
              <div className="bg-success-light p-6 rounded-xl">
                <p className="text-3xl mb-2">🎉</p>
                <h3 className="text-2xl font-bold text-success">Approved!</h3>
                <p className="text-foreground mt-2">आप 50% डिस्काउंट के लिए योग्य हैं</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {quiz.isApproved && (
        <div className="border-4 border-primary rounded-xl p-2 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="bg-primary text-primary-foreground text-center py-3 rounded-t-lg -mt-2 -mx-2 mb-4">
            <p className="font-bold text-lg">👇 यहाँ अपनी Details भरें 👇</p>
          </div>
          <LeadForm quizAnswers={quiz.answers} />
        </div>
      )}

      {/* Trust Building Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-bold text-center text-foreground">
          ✅ 50,000+ लोगों ने भरोसा किया
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card p-3 rounded-lg text-center shadow-sm">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Natural & Safe</p>
          </div>
          <div className="bg-card p-3 rounded-lg text-center shadow-sm">
            <p className="text-2xl font-bold text-primary">FSSAI</p>
            <p className="text-xs text-muted-foreground">Certified Product</p>
          </div>
          <div className="bg-card p-3 rounded-lg text-center shadow-sm">
            <p className="text-2xl font-bold text-primary">4.8⭐</p>
            <p className="text-xs text-muted-foreground">Customer Rating</p>
          </div>
          <div className="bg-card p-3 rounded-lg text-center shadow-sm">
            <p className="text-2xl font-bold text-primary">COD</p>
            <p className="text-xs text-muted-foreground">Available</p>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-primary/20">
          <p className="text-center text-sm text-foreground">
            🔒 <span className="font-semibold">आपकी जानकारी 100% सुरक्षित है</span>
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            हम आपकी Privacy का पूरा ध्यान रखते हैं
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>🚚 Free Delivery</span>
          <span>•</span>
          <span>💳 Cash On Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
