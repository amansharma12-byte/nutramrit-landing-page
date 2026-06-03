import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          वापस जाएं
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy (गोपनीयता नीति)</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. परिचय</h2>
            <p className="text-muted-foreground">
              Nutramrit Shape N Slim & Slim N Fit में आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. एकत्रित जानकारी</h2>
            <p className="text-muted-foreground">हम निम्नलिखित जानकारी एकत्र कर सकते हैं:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>नाम और संपर्क जानकारी (फोन नंबर, पता)</li>
              <li>स्वास्थ्य संबंधी जानकारी (वजन, स्वास्थ्य समस्याएं)</li>
              <li>डिलीवरी पता और पिनकोड</li>
              <li>ब्राउज़िंग डेटा और कुकीज़</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. जानकारी का उपयोग</h2>
            <p className="text-muted-foreground">आपकी जानकारी का उपयोग इन उद्देश्यों के लिए किया जाता है:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>आपके ऑर्डर को प्रोसेस और डिलीवर करना</li>
              <li>Doctor consultation के लिए संपर्क करना</li>
              <li>उत्पाद और सेवाओं में सुधार करना</li>
              <li>ग्राहक सहायता प्रदान करना</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. जानकारी की सुरक्षा</h2>
            <p className="text-muted-foreground">
              हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय करते हैं। हम आपकी जानकारी को बिना आपकी सहमति के किसी तीसरे पक्ष को नहीं बेचते या साझा नहीं करते।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. कुकीज़</h2>
            <p className="text-muted-foreground">
              हमारी वेबसाइट कुकीज़ का उपयोग करती है ताकि आपको बेहतर अनुभव प्रदान किया जा सके। आप अपने ब्राउज़र सेटिंग्स में कुकीज़ को अक्षम कर सकते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. आपके अधिकार</h2>
            <p className="text-muted-foreground">आपके पास निम्नलिखित अधिकार हैं:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>अपनी जानकारी देखने का अधिकार</li>
              <li>अपनी जानकारी सही करवाने का अधिकार</li>
              <li>अपनी जानकारी हटाने का अधिकार</li>
              <li>मार्केटिंग संचार से ऑप्ट-आउट करने का अधिकार</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. संपर्क करें</h2>
            <p className="text-muted-foreground">
              गोपनीयता संबंधी किसी भी प्रश्न के लिए, कृपया हमसे WhatsApp पर संपर्क करें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">8. नीति में बदलाव</h2>
            <p className="text-muted-foreground">
              हम समय-समय पर इस नीति को अपडेट कर सकते हैं। कोई भी बदलाव इस पृष्ठ पर प्रकाशित किया जाएगा।
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              अंतिम अपडेट: दिसंबर 2025
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
