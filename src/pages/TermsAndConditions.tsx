import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          वापस जाएं
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-6">Terms & Conditions (नियम और शर्तें)</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. स्वीकृति</h2>
            <p className="text-muted-foreground">
              इस वेबसाइट का उपयोग करके, आप इन नियमों और शर्तों से बाध्य होने के लिए सहमत हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया इस साइट का उपयोग न करें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. उत्पाद जानकारी</h2>
            <p className="text-muted-foreground">
              हम अपने उत्पादों की सटीक जानकारी प्रदान करने का प्रयास करते हैं। हालांकि, हम इस बात की गारंटी नहीं देते कि उत्पाद विवरण, मूल्य या अन्य सामग्री पूर्ण और त्रुटि-मुक्त है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. ऑर्डर और भुगतान</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>सभी ऑर्डर स्वीकृति के अधीन हैं</li>
              <li>मूल्य बिना पूर्व सूचना के बदल सकते हैं</li>
              <li>Cash on Delivery (COD) उपलब्ध है</li>
              <li>डिलीवरी 3-7 कार्य दिवसों में होती है</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. रिटर्न और रिफंड</h2>
            <p className="text-muted-foreground">
              उत्पाद प्राप्त होने के 7 दिनों के भीतर, यदि उत्पाद क्षतिग्रस्त या दोषपूर्ण है, तो आप रिटर्न के लिए संपर्क कर सकते हैं। खोले गए या उपयोग किए गए उत्पादों पर रिटर्न लागू नहीं है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. स्वास्थ्य अस्वीकरण</h2>
            <p className="text-muted-foreground">
              यह उत्पाद एक आहार पूरक है और किसी बीमारी के इलाज, रोकथाम या निदान के लिए नहीं है। उत्पाद का उपयोग करने से पहले अपने चिकित्सक से परामर्श करें। गर्भवती या स्तनपान कराने वाली महिलाओं को डॉक्टर की सलाह लेनी चाहिए।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. परिणाम अस्वीकरण</h2>
            <p className="text-muted-foreground">
              वेबसाइट पर दिखाए गए परिणाम वास्तविक ग्राहकों के हैं। हालांकि, व्यक्तिगत परिणाम भिन्न हो सकते हैं और इसकी कोई गारंटी नहीं है। वजन घटाने के परिणाम आहार, व्यायाम और व्यक्तिगत मेटाबॉलिज्म पर निर्भर करते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. बौद्धिक संपदा</h2>
            <p className="text-muted-foreground">
              इस वेबसाइट पर सभी सामग्री, छवियां, लोगो और टेक्स्ट हमारी संपत्ति हैं और कॉपीराइट द्वारा संरक्षित हैं। बिना अनुमति के किसी भी सामग्री का उपयोग वर्जित है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">8. दायित्व की सीमा</h2>
            <p className="text-muted-foreground">
              हम किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए उत्तरदायी नहीं होंगे जो इस वेबसाइट या उत्पाद के उपयोग से उत्पन्न हो।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">9. शासी कानून</h2>
            <p className="text-muted-foreground">
              ये नियम और शर्तें भारत के कानूनों द्वारा शासित होंगी। कोई भी विवाद भारतीय न्यायालयों के अधिकार क्षेत्र में आएगा।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">10. संपर्क</h2>
            <p className="text-muted-foreground">
              किसी भी प्रश्न या चिंता के लिए, कृपया हमसे WhatsApp पर संपर्क करें।
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

export default TermsAndConditions;
