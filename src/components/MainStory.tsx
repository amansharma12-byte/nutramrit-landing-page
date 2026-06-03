import maintop from "@/assets/maintop.png";
import m1 from "@/assets/m1.jpg";

const MainStory = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <div className="text-center">
        <img 
          src={maintop} 
          alt="एक महिला तनाव में डाइनिंग टेबल पर बैठी है" 
          className="w-full max-w-xl mx-auto rounded-lg"
        />
        <p className="text-sm text-muted-foreground mt-2 italic">
          (रिश्तेदार के ताने और बढ़ते वजन ने कविता को तनाव में डाल दिया था)
        </p>
      </div>

      <blockquote className="blockquote-green">
        "मुझे मेरे आलू परांठे और चाय से प्यार है। मैं उबली हुई सब्जियां खाकर जिंदा नहीं रह सकती।"
      </blockquote>

      <p className="text-foreground leading-relaxed">
        यह कहानी सिर्फ पुणे की 34 वर्षीय कविता की नहीं, बल्कि हर उस भारतीय महिला की है जो घर और ऑफिस की जिम्मेदारियों के बीच खुद को भूल गई है।
      </p>

      <p className="text-foreground leading-relaxed">
        कविता बताती हैं, "शादी से पहले मैं पतली थी, लेकिन बच्चे होने के बाद मेरा वजन बढ़ता गया। सबसे बुरा तब लगता था जब मैं किसी शादी या फंक्शन में जाती थी।"
      </p>

      <blockquote className="blockquote-orange">
        "वहां रिश्तेदार और आंटी अक्सर ताना मारते थे— 'अरे बेटा, तुम तो काफी हेल्दी (मोटी) हो गई हो!'। मुझे लगता था कि शायद मेरे नसीब में ही मोटा होना लिखा था।"
      </blockquote>

      <h3 className="text-xl font-bold text-foreground">❌ उसने सब कुछ करके देख लिया:</h3>
      
      <ul className="space-y-2">
        <li className="emoji-bullet">
          <span>❌</span>
          <span>चावल और रोटी खाना छोड़ दिया (कमजोरी आ गई, वजन कम नहीं हुआ)।</span>
        </li>
        <li className="emoji-bullet">
          <span>❌</span>
          <span>कड़वे करेले और लौकी का जूस पिया (कोई फायदा नहीं)।</span>
        </li>
        <li className="emoji-bullet">
          <span>❌</span>
          <span>सुबह 5 बजे उठकर दौड़ना शुरू किया (घुटनों में दर्द हो गया)।</span>
        </li>
      </ul>

      <div className="text-center">
        <img 
          src={m1} 
          alt="वजन घटाने की कोशिश" 
          className="w-full max-w-md mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default MainStory;
