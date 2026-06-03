const FAQ = () => {
  const faqs = [
    {
      question: "क्या इसे पुरुष (Men) भी ले सकते हैं?",
      answer: "जी हाँ, यह फार्मूला महिलाओं और पुरुषों दोनों के मेटाबॉलिज्म पर समान रूप से काम करता है।"
    },
    {
      question: "क्या इसका कोई साइड इफेक्ट है?",
      answer: "नहीं, यह प्राकृतिक घटकों (Natural Ingredients) से बना है।"
    }
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <h2 className="section-heading">❓ अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-muted p-4 rounded-lg">
            <p className="font-bold text-foreground">Q: {faq.question}</p>
            <p className="text-foreground mt-2">A: {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
