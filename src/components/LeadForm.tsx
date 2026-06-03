import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  targetWeight: string;
  healthIssue: string;
  address: string;
}

interface QuizAnswers {
  goal?: string;
  age?: string;
  weight?: string;
}

const LeadForm = ({ quizAnswers }: { quizAnswers?: QuizAnswers }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    targetWeight: "",
    healthIssue: "",
    address: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Phone number: only allow digits, max 10
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Check if form is valid for enabling button
  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.phone.length === 10 &&
    formData.targetWeight.length > 0 &&
    formData.address.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.targetWeight || !formData.address) {
      toast({
        title: "Error",
        description: "कृपया सभी फ़ील्ड भरें",
        variant: "destructive"
      });
      return;
    }

    if (formData.phone.length < 10) {
      toast({
        title: "Error",
        description: "कृपया सही फ़ोन नंबर दर्ज करें",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxznRP2THN9IagjoDNjd8CgSQUalhISvsebNNu6q6V1FZjI_dCtlN1q6DTKlD5h59kM-w/exec";

      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        targetWeight: formData.targetWeight,
        healthIssue: formData.healthIssue,
        address: formData.address,
        quiz_lakshya: quizAnswers?.goal ?? "",
        quiz_umar: quizAnswers?.age ?? "",
        quiz_vajan: quizAnswers?.weight ?? "",
        product: "Nutramrit Shape N Slim & Slim N Fit",
        source: window.location.href
      });

      await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      // Redirect to Thank You page with form data
      navigate("/thank-you", { state: { formData } });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "कुछ गलत हो गया। कृपया दोबारा कोशिश करें।",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-secondary/50 to-secondary p-6 rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-center text-foreground">🩺 Doctor से FREE Consultation बुक करें</h2>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-lg border-2 border-green-300 dark:border-green-700">
        <div className="text-center space-y-3">
          <p className="text-lg font-bold text-success">🩺 Doctor Consultation शामिल है</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">✅ FSSAI Certified</span>
            <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">✅ 100% Natural</span>
            <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">🚚 Free Delivery</span>
            <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">💳 Cash on Delivery</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">👤 आपका नाम *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="अपना पूरा नाम दर्ज करें"
            className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">📞 फ़ोन नंबर *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10 अंकों का मोबाइल नंबर"
            maxLength={10}
            className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">🎯 कितना वजन कम करना है (kg) *</label>
          <select
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
            className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          >
            <option value="">चुनें...</option>
            <option value="10-15kg">10-15 kg</option>
            <option value="15-20kg">15-20 kg</option>
            <option value="20kg+">20 kg से ज़्यादा</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">🏥 कोई हेल्थ इश्यू है?</label>
          <select
            name="healthIssue"
            value={formData.healthIssue}
            onChange={handleChange}
            className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">चुनें...</option>
            <option value="none">कोई नहीं</option>
            <option value="diabetes">डायबिटीज (Sugar)</option>
            <option value="bp">हाई ब्लड प्रेशर</option>
            <option value="thyroid">थायराइड</option>
            <option value="pcos">PCOS/PCOD</option>
            <option value="joint">जोड़ों में दर्द</option>
            <option value="other">अन्य</option>
          </select>
        </div>


        <div>
          <label className="block text-sm font-medium text-foreground mb-1">🏠 पूरा पता (Address) *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="घर नंबर, गली, शहर, राज्य, पिनकोड"
            rows={3}
            className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className={`w-full font-bold py-5 px-6 rounded-lg text-xl shadow-green transition-all border-4 border-yellow-400 ${
            isFormValid 
              ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-[1.02] animate-pulse-scale" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
              प्रोसेसिंग...
            </span>
          ) : (
            <>
              📋 Appointment बुक करें
              <span className="block text-sm font-normal mt-1">FREE Consultation + 50% OFF</span>
            </>
          )}
        </button>

        <p className="text-center text-sm text-muted-foreground">
          🚚 Free Delivery | 💯 100% Genuine Product
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
