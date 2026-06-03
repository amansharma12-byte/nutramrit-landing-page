import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/80 border-t border-border mt-8">
      <div className="container max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Disclaimer */}
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <h4 className="font-bold text-foreground mb-2 text-sm">⚠️ Disclaimer (अस्वीकरण):</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            यह उत्पाद किसी बीमारी के इलाज, रोकथाम या निदान के लिए नहीं है। इस वेबसाइट पर दी गई जानकारी केवल शैक्षिक उद्देश्यों के लिए है और इसे चिकित्सा सलाह के रूप में नहीं लिया जाना चाहिए। कोई भी सप्लीमेंट लेने से पहले अपने डॉक्टर से परामर्श करें। परिणाम व्यक्ति-व्यक्ति पर भिन्न हो सकते हैं। इस पृष्ठ पर दिखाए गए सभी प्रशंसापत्र वास्तविक ग्राहकों के हैं, लेकिन उनके परिणाम सभी के लिए समान नहीं हो सकते।
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">
            <strong>English:</strong> This product is not intended to diagnose, treat, cure, or prevent any disease. The information provided on this website is for educational purposes only and should not be considered medical advice. Consult your doctor before taking any supplement. Results may vary from person to person. All testimonials shown are from real customers but individual results may differ.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/terms-and-conditions" className="text-primary hover:underline">
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nutramrit Shape N Slim & Slim N Fit. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
