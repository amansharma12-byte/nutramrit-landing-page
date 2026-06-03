import BreakingNewsBanner from "@/components/BreakingNewsBanner";
import HeroHeadline from "@/components/HeroHeadline";
import MainStory from "@/components/MainStory";
import TurningPoint from "@/components/TurningPoint";
import JourneyResults from "@/components/JourneyResults";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import QuizSection from "@/components/QuizSection";
import SocialProof from "@/components/SocialProof";
import Reviews from "@/components/Reviews";
import StickyOrderButton from "@/components/StickyOrderButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="container max-w-3xl mx-auto pb-20">
          <BreakingNewsBanner />
          <HeroHeadline />
          <MainStory />
          <TurningPoint />
          <JourneyResults />
          <FAQ />
          <Gallery />
          <QuizSection />
          <SocialProof />
          <Reviews />
          <CTABanner />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyOrderButton />
    </>
  );
};

export default Index;
