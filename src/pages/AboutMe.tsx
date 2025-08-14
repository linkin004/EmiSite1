
export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary-foreground mb-6">About Me</h1>
      <div className="bg-card p-8 rounded-lg shadow-lg border border-purple-500">
        <p className="text-lg text-muted-foreground mb-4">
          Hello! I'm [Your Name], and I'm passionate about education and helping students of all ages discover the joy of learning. With [Number] years of experience in teaching, I've had the privilege of working with diverse groups of learners, from [Age Group 1] to [Age Group 2].
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          My goal is to create engaging and accessible educational content that supports both in-class learning and independent study. I believe that every student has unique strengths, and my resources are designed to cater to different learning styles.
        </p>
        <p className="text-lg text-muted-foreground">
          Beyond teaching, I enjoy [Your Hobbies/Interests]. I'm always looking for new ways to make learning fun and effective, and I'm excited to share my resources with you!
        </p>
      </div>
    </div>
  );
}
