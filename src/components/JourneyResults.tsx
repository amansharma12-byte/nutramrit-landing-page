const JourneyResults = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <h2 className="section-heading">🗓️ कविता की 4 हफ़्तों की जर्नी (परिणाम)</h2>

      <div className="space-y-4">
        <div className="bg-info/10 border-l-4 border-info p-4 rounded-r-lg">
          <h4 className="font-bold text-info">🔵 पहला हफ्ता (Week 1):</h4>
          <p className="text-foreground">मुझे एनर्जी बहुत महसूस होने लगी। मेरा पेट हल्का लगने लगा।</p>
        </div>

        <div className="bg-info/10 border-l-4 border-info p-4 rounded-r-lg">
          <h4 className="font-bold text-info">🔵 दूसरा हफ्ता (Week 2):</h4>
          <p className="text-foreground">मेरे पुराने कुर्ते थोड़े ढीले हो रहे हैं। मेरी 'क्रेविंग' (Craving) खत्म हो गई।</p>
        </div>

        <div className="bg-success-light border-l-4 border-success p-4 rounded-r-lg">
          <h4 className="font-bold text-success">🔵 चौथा हफ्ता (Week 4):</h4>
          <p className="text-foreground">"यह चमत्कार जैसा था! मेरी पुरानी जींस फिट आ गई। मैंने बिना भूखा रहे अपना पुराना फिगर वापस पा लिया था।"</p>
        </div>
      </div>

      <h2 className="section-heading">🏆 क्यों भारतीय इसे पसंद कर रहे हैं?</h2>

      <ul className="space-y-3">
        <li className="flex items-start gap-3 bg-secondary/50 p-3 rounded-lg">
          <span className="text-xl">✅</span>
          <div>
            <strong className="text-primary">कोई साइड इफेक्ट नहीं:</strong>
            <span className="text-foreground"> यह 100% हर्बल है।</span>
          </div>
        </li>
        <li className="flex items-start gap-3 bg-secondary/50 p-3 rounded-lg">
          <span className="text-xl">✅</span>
          <div>
            <strong className="text-primary">कोई कठिन डाइट नहीं:</strong>
            <span className="text-foreground"> घर का खाना खाते हुए वजन कम करें।</span>
          </div>
        </li>
        <li className="flex items-start gap-3 bg-secondary/50 p-3 rounded-lg">
          <span className="text-xl">✅</span>
          <div>
            <strong className="text-primary">समय की बचत:</strong>
            <span className="text-foreground"> जिम में घंटों पसीना बहाने की जरूरत नहीं।</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default JourneyResults;
