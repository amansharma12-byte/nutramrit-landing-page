import breakingNews from "@/assets/breaking-news.png";

const BreakingNewsBanner = () => {
  return (
    <div className="w-full">
      <img 
        src={breakingNews} 
        alt="Breaking News Banner" 
        className="w-full max-w-2xl mx-auto"
      />
    </div>
  );
};

export default BreakingNewsBanner;
