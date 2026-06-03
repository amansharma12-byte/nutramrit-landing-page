import cm1 from "@/assets/reviews/cm1.jpg";
import cm2 from "@/assets/reviews/cm2.jpg";
import cm3 from "@/assets/reviews/cm3.jpg";
import cm4 from "@/assets/reviews/cm4.jpg";
import cm5 from "@/assets/reviews/cm5.jpg";
import cm6 from "@/assets/reviews/cm6.jpg";
import in3 from "@/assets/reviews/in3.jpg";
import foto3 from "@/assets/reviews/foto3.jpg";
import foto4 from "@/assets/reviews/foto4.jpg";
import comment3 from "@/assets/reviews/comment3.jpg";
import comment6 from "@/assets/reviews/comment6.jpg";
import avat4 from "@/assets/reviews/avat4.jpg";
import autoAva from "@/assets/reviews/autoAva.jpg";
import avat6 from "@/assets/reviews/avat6.jpg";
import avat7 from "@/assets/reviews/avat7.jpg";
import avat8 from "@/assets/reviews/avat8.jpg";
import avat9 from "@/assets/reviews/avat9.jpg";

interface Review {
  name: string;
  date: string;
  image: string;
  review: string;
  resultImage?: string;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      name: "सुनीता देवी, पटना",
      date: "20.12.2025",
      image: cm1,
      review: "शुरू में मुझे भी विश्वास नहीं था। लेकिन 2 महीने में 8 किलो कम हुआ। अब सब पूछते हैं क्या किया!"
    },
    {
      name: "रीना शर्मा, जयपुर",
      date: "18.12.2025",
      image: cm2,
      review: "मेरी बहन ने suggest किया था। पहले हफ्ते कुछ नहीं हुआ, लेकिन 3rd week से difference दिखने लगा। अब 2 महीने हो गए, 6 किलो कम।"
    },
    {
      name: "प्रिया गुप्ता, लखनऊ",
      date: "15.12.2025",
      image: cm3,
      review: "Honestly बताऊं तो पहले doubt था। पर doctor ने समझाया कैसे काम करता है। अब 45 दिन हो गए, 5 kg कम हुआ।"
    },
    {
      name: "मीना कुमारी, दिल्ली",
      date: "12.12.2025",
      image: cm4,
      review: "मैं 52 साल की हूं। Thyroid भी है। फिर भी इसने काम किया। धीरे धीरे 4 किलो कम हुआ 6 weeks में।"
    },
    {
      name: "अंजलि वर्मा, मेरठ",
      date: "10.12.2025",
      image: cm5,
      review: "बहुत products try किए पहले। ये actually काम करता है। बस regular लेना पड़ता है।"
    },
    {
      name: "कविता सिंह, वाराणसी",
      date: "08.12.2025",
      image: cm6,
      review: "मेरा weight 78 था, अब 71 है। 3 महीने लगे। Slow है पर real results हैं।"
    },
    {
      name: "निधि, सूरत",
      date: "05.12.2025",
      image: in3,
      review: "पहले महीने में 3 किलो ही कम हुआ। मैंने सोचा काम नहीं कर रहा। पर दूसरे महीने में 5 किलो और गया!",
      resultImage: foto3
    },
    {
      name: "शालिनी, बेंगलुरु",
      date: "02.12.2025",
      image: comment3,
      review: "मैं nursing mother हूं। Doctor से पूछ कर लिया। कोई side effect नहीं हुआ और energy level improve हुआ।"
    },
    {
      name: "पूनम, चंडीगढ़",
      date: "28.11.2025",
      image: comment6,
      review: "Office में बैठी रहती हूं सारा दिन। Exercise का time नहीं। फिर भी 2 months में 7 kg कम।"
    },
    {
      name: "ममता, भोपाल",
      date: "25.11.2025",
      image: avat4,
      review: "Genuine product है। बस धैर्य रखना पड़ता है। एक दो हफ्ते में miracle की उम्मीद मत करो।"
    },
    {
      name: "गीता, प्रयागराज",
      date: "22.11.2025",
      image: autoAva,
      review: "मेरी बेटी की शादी है 4 महीने बाद। उसी tension में शुरू किया। अब तक 9 किलो कम। बहुत खुश हूं।",
      resultImage: foto4
    },
    {
      name: "सरोज, अहमदाबाद",
      date: "18.11.2025",
      image: avat6,
      review: "पहले fake लगा था। लेकिन friend ने recommend किया तो try किया। Genuinely काम करता है।"
    },
    {
      name: "आशा, इंदौर",
      date: "15.11.2025",
      image: avat7,
      review: "मेरे husband को भी दिया। दोनों का weight कम हो रहा है। Family pack ले लो अगले बार।"
    },
    {
      name: "रेखा, कानपुर",
      date: "12.11.2025",
      image: avat8,
      review: "Delivery जल्दी आ गई। Product genuine है। अभी 1 महीना हुआ है, 4 किलो कम।"
    },
    {
      name: "सविता, नोएडा",
      date: "10.11.2025",
      image: avat9,
      review: "कई साल से try कर रही थी weight कम करने का। Finally कुछ मिला जो actually काम करता है।"
    }
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <h3 className="text-xl font-bold text-center text-foreground">टिप्पणियाँ (Reviews):</h3>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-card border border-border p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <img 
                src={review.image} 
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-foreground mt-2 text-sm leading-relaxed">{review.review}</p>
                {review.resultImage && (
                  <img 
                    src={review.resultImage}
                    alt="Result"
                    className="mt-3 w-full max-w-xs rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
