import metabolism from "@/assets/metabolism.png";
import productCombo from "@/assets/product-combo.png";
import indianWomanTraditional from "@/assets/indian-woman-traditional.png";

const TurningPoint = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <h2 className="section-heading">💡 THE TURNING POINT (डॉक्टर का सीक्रेट)</h2>
      
      <p className="text-foreground leading-relaxed">
        लेकिन तभी उनकी मुलाकात उनके पुराने कॉलेज फ्रेंड डॉ. शर्मा से हुई। उन्होंने कविता की रिपोर्ट देखी और हंसने लगे।
      </p>

      <blockquote className="blockquote-green">
        उन्होंने कहा: "कविता, तुम गलत तरीके से मेहनत कर रही हो। तुम्हारी समस्या 'खाना' नहीं है। तुम्हारी समस्या यह है कि 30 की उम्र के बाद तुम्हारा <strong>'मेटाबॉलिज्म' (Metabolism) सो गया है।</strong>"
      </blockquote>

      <p className="text-foreground leading-relaxed">
        <strong>मेटाबॉलिज्म क्या है?</strong> इसे आप शरीर की "भट्टी" समझिये। जैसे-जैसे उम्र बढ़ती है, यह भट्टी धीमी हो जाती है और शरीर खाने को पचाने के बजाय उसे चर्बी (Fat) के रूप में पेट और कमर पर जमा करने लगता है।
      </p>

      <div className="text-center">
        <img 
          src={indianWomanTraditional} 
          alt="Happy Indian Woman Weight Loss Success" 
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>

      <h2 className="section-heading">🔬 THE SCIENCE (Nutramrit Shape N Slim & Slim N Fit क्यों काम करता है?)</h2>

      <div className="flex justify-center mb-4">
        <img 
          src={productCombo} 
          alt="Nutramrit Shape N Slim & Slim N Fit Combo Pack" 
          className="w-full max-w-md mx-auto rounded-lg drop-shadow-lg"
        />
      </div>

      <p className="text-foreground leading-relaxed">
        डॉक्टर ने कविता को <strong>Nutramrit Shape N Slim & Slim N Fit</strong> इस्तेमाल करने की सलाह दी। यह 100% आयुर्वेदिक विज्ञान पर आधारित है, जिसमें दो मुख्य प्राकृतिक तत्व हैं:
      </p>

      <div className="space-y-4 bg-secondary/50 p-4 rounded-lg">
        <div>
          <h4 className="font-bold text-primary">🌿 Green Coffee Bean Extract:</h4>
          <p className="text-foreground">
            यह आपकी 'सोयी हुई' मेटाबॉलिज्म की भट्टी को फिर से जला देता है। इससे आपका शरीर बैठे-बैठे भी कैलोरी बर्न करने लगता है।
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary">🥑 Garcinia Cambogia:</h4>
          <p className="text-foreground">
            यह 'भूख' को कंट्रोल करता है। इसे लेने के बाद आपको बार-बार मीठा या तला हुआ खाने का मन नहीं करता।
          </p>
        </div>
      </div>

      {/* Highlighted CTA for Doctor Appointment */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary p-6 rounded-xl text-center mt-6 animate-pulse">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
          🩺 अभी Doctor से FREE Consultation बुक करें!
        </h3>
        <p className="text-foreground mb-4">Expert guidance के साथ अपनी weight loss journey शुरू करें</p>
        <button 
          onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-accent text-primary-foreground font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all hover:scale-105"
        >
          👉 Appointment Book करें
        </button>
      </div>
    </div>
  );
};

export default TurningPoint;
