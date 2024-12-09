import Image from "next/image";
import ios from "@/app/assets/ios-1.png";
import android from "@/app/assets/android-1.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Your Daily
              <span className="text-primary"> Minute</span>
            </h1>
            <p className="text-xl text-gray-300">
              Record one-minute video journals, improve daily, and unlock insights through AI-powered analysis
            </p>
            <div className="flex gap-4">
              <a
                href="#download"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition"
              >
                Download Now
              </a>
              <Link
                href="/privacy"
                className="border border-gray-light px-8 py-3 rounded-full hover:bg-gray-light transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <Image
              src={ios}
              alt="YourDailyMinute App"
              width={400}
              height={800}
              className="relative mx-auto"
              priority
            />
          </div>
        </div>
      </header>

      <section className="bg-gray-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Understand Your Emotions Through
            <span className="text-primary"> AI</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-background hover:bg-gray-light transition"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How <span className="text-primary">It Works</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative p-6 rounded-2xl bg-gray-dark"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-dark py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="max-w-xl space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get AI Powered
                <span className="text-primary"> Insights</span>, Daily
              </h2>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/5"
                  >
                    <div className="w-6 h-6 mt-1 text-primary">{insight.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{insight.title}</h3>
                      <p className="text-gray-300 text-sm">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative ml-8">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <Image
                src={android}
                alt="Analytics Dashboard"
                height={550}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Privacy <span className="text-primary">Focused</span>
          </h2>
          <p className="text-xl text-gray-300">
            Your privacy is our top priority. All videos are processed and stored locally on your device.
            Nothing ever leaves your phone without your explicit consent.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {privacyFeatures.map((feature) => (
              <div key={feature.title} className="p-4">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-dark py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300">
              © {new Date().getFullYear()} Your Daily Minute. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-gray-300 hover:text-primary transition"
              >
                Privacy Policy
              </Link>
              <a 
                href="/terms" 
                className="text-gray-300 hover:text-primary transition"
              >
                Terms of Service
              </a>
              <a 
                href="mailto:uttkarsh.dav@gmail.com" 
                className="text-gray-300 hover:text-primary transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Daily Video Journal",
    description: "Record one-minute reflections of your day with ease",
    icon: "📹",
  },
  {
    title: "AI Analysis",
    description: "Get instant insights into your emotional patterns",
    icon: "🤖",
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and stored safely",
    icon: "🔒",
  },
];

const steps = [
  {
    title: "Record Daily",
    description: "Take just one minute each day to record yourself. Share your thoughts, goals, or reflections about your day.",
  },
  {
    title: "Build Consistency",
    description: "Maintain your streak by recording daily. Watch your progress grow on the calendar view and stay motivated.",
  },
  {
    title: "Track Progress",
    description: "Review your past recordings to see how you've grown. Your journey of self-improvement is documented one minute at a time.",
  },
];

const insights = [
  {
    icon: "📊",
    title: "Sentiment Analysis",
    description: "Get detailed breakdowns of your emotional patterns throughout your entries.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description: "Monitor your journey with intuitive visualizations and statistics.",
  },
  {
    icon: "🎯",
    title: "Confidence Metrics",
    description: "Understanding the certainty of AI analysis for better self-awareness.",
  },
];

const privacyFeatures = [
  {
    icon: "🔒",
    title: "Local Storage",
    description: "All your videos are stored securely on your device.",
  },
  {
    icon: "🛡️",
    title: "Offline Processing",
    description: "AI analysis happens directly on your device.",
  },
  {
    icon: "✨",
    title: "Your Data, Your Control",
    description: "Complete control over your personal information.",
  },
];
