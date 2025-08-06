import FadeIn from '@/components/FadeIn';

const AvailableBadge = () => {
  return (
    <FadeIn delay={0.1}>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-urgent-pulse">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-primary">Available Immediately</span>
        <span className="text-xs text-muted-foreground">• Response &lt;4hrs</span>
      </div>
    </FadeIn>
  );
};

export default AvailableBadge;