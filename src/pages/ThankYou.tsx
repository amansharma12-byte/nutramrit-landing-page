import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  useEffect(() => {
    // Redirect to home if accessed directly without form submission
    if (!formData) {
      navigate("/");
      return;
    }

    // Track Meta Pixel Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Nutramrit Shape N Slim & Slim N Fit',
        content_category: 'Weight Loss',
        value: 1999,
        currency: 'INR'
      });
    }
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-secondary flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-card rounded-2xl shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-success to-emerald-500 p-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 animate-pulse">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-bold mb-2">🎉 Appointment Booked!</h1>
          <p className="text-white/90">आपकी Doctor से FREE Consultation बुक हो गई है</p>
        </div>

        {/* Order Details */}
        <div className="p-6 space-y-6">
          <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-foreground border-b border-border pb-2">📋 आपकी Details:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">नाम:</span>
                <span className="font-medium text-foreground">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">फ़ोन:</span>
                <span className="font-medium text-foreground">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">वर्तमान Weight:</span>
                <span className="font-medium text-foreground">{formData.weight} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Target:</span>
                <span className="font-medium text-foreground">{formData.targetWeight} kg कम करना है</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pincode:</span>
                <span className="font-medium text-foreground">{formData.pincode}</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
            <p className="font-bold text-foreground text-center">Nutramrit Shape N Slim & Slim N Fit</p>
          </div>

          {/* Next Steps */}
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-700">
            <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">📞 अगला कदम:</h3>
            <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
              <li>✅ हमारी टीम 24 घंटे में आपको call करेगी</li>
              <li>✅ Doctor FREE Consultation देंगे</li>
              <li>✅ Cash on Delivery available है</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => navigate("/")}
            >
              <Home className="w-4 h-4 mr-2" />
              Home पर वापस जाएं
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
