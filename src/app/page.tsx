import Image from "next/image";
import ios from "@/app/assets/ios-1.png";
import android from "@/app/assets/android-1.png";
import appStore from "@/app/assets/app-store.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">YourDailyMinute</div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition">How It Works</a>
            <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
            <a href="#download" className="hover:text-primary transition">Download</a>
          </nav>
          <a href="#download" className="btn-primary">Download Now</a>
        </div>
      </header>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary/30 opacity-80 animate-mesh"></div>
        
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/30 filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/3 w-72 h-72 rounded-full bg-secondary/40 filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm text-primary font-medium text-sm mb-2">
                Self-reflection made simple ✨
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Express yourself
              </h1>
              <p className="text-xl md:text-2xl font-medium text-primary/90 mt-4 max-w-lg">
                An app for the people who find it difficult to express themself
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://apps.apple.com/us/app/your-daily-minute/id6738890503?uo=2&partnerId=11&at=1001l5Uo"
                  className="group btn-primary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span>Download on iOS</span>
                </a>
                <a href="#how-it-works" className="backdrop-blur-sm border border-primary/20 bg-white/30 text-primary px-8 py-3 rounded-full hover:bg-white/50 transition">
                  See how it works
                </a>
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-2 text-primary/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"></path>
                    <path d="m4.93 10.93 2.83-2.83"></path>
                    <path d="M2 18h4"></path>
                    <path d="m16.24 8.1 2.83-2.83"></path>
                    <path d="M22 18h-4"></path>
                    <circle cx="12" cy="18" r="4"></circle>
                  </svg>
                  <span>AI-powered insights</span>
                </div>
                <div className="flex items-center gap-2 text-primary/70 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                  <span>Private & secure</span>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl"></div>
              <div className="relative p-4">
                <Image
                  src={ios}
                  alt="YourDailyMinute App"
                  width={380}
                  height={760}
                  className="relative mx-auto"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                      <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                      <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                      <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl">60s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Features You&apos;ll <span className="text-primary">Love</span>
          </h2>
          <p className="text-center text-lg max-w-2xl mx-auto mb-16">
            Experience the power of daily reflection with these powerful tools designed to help you express yourself effortlessly.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          How <span className="text-primary">It Works</span>
        </h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-16">
          Start your journey to better self-awareness in just three simple steps.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="step-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">{index + 1}</div>
              <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src={android}
                alt="Analytics Dashboard"
                height={550}
                priority
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                AI-Powered <span className="text-primary">Insights</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our advanced AI analyzes your daily reflections to provide meaningful insights about your emotions and thought patterns.
              </p>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white shadow"
                  >
                    <div className="text-2xl text-primary">{insight.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{insight.title}</h3>
                      <p className="text-gray-600 text-sm">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our <span className="text-primary">Users Say</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-card p-8 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </section>

      <section id="download" className="gradient-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Journey of
            <span className="text-primary"> Self-Discovery</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Download the app today and begin your journey to better self-awareness with just one minute a day.
          </p>
          <div className="flex justify-center mb-12">
            <a href="https://apps.apple.com/us/app/your-daily-minute/id6738890503?uo=2&partnerId=11&at=1001l5Uo">
              <Image
                src={appStore}
                alt="App Store"
                width={180}
                height={60}
              />
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src={ios}
              alt="YourDailyMinute App"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold text-primary">YourDailyMinute</div>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-gray-600 hover:text-primary transition"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 hover:text-primary transition"
              >
                Terms of Service
              </Link>
              <a 
                href="mailto:uttkarsh.dav@gmail.com" 
                className="text-gray-600 hover:text-primary transition"
              >
                Contact
              </a>
            </div>
            <div className="text-gray-600">
              © {new Date().getFullYear()} Your Daily Minute. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Video Reflection",
    description: "Capture your thoughts in just 60 seconds of video, no journaling skills needed",
    icon: "🎥",
  },
  {
    title: "AI Sentiment Analysis",
    description: "Our AI identifies emotions and key moments in your reflections",
    icon: "🧠",
  },
  {
    title: "Personalized Insights",
    description: "Discover patterns and gain perspective on your thoughts over time",
    icon: "✨",
  },
];

const steps = [
  {
    title: "Record Your Daily Minute",
    description: "Just press record and speak for 60 seconds about your day, thoughts, or feelings",
  },
  {
    title: "Review AI-Generated Insights",
    description: "Our AI analyzes your reflection and provides meaningful insights about your emotions",
  },
  {
    title: "Track Your Growth Over Time",
    description: "Watch your emotional journey unfold day by day with easy-to-understand visualizations",
  },
];

const insights = [
  {
    title: "Emotion Tracking",
    description: "Identify patterns in your emotional responses over time",
    icon: "📊",
  },
  {
    title: "Key Themes",
    description: "Discover recurring topics and themes in your daily reflections",
    icon: "🔑",
  },
  {
    title: "Growth Visualization",
    description: "See your personal growth journey with beautiful visualizations",
    icon: "📈",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    title: "Busy Professional",
    quote: "Your Daily Minute helped me process my thoughts during a challenging time at work. Just one minute a day has made a huge difference in my self-awareness.",
  },
  {
    name: "Michael T.",
    title: "Student",
    quote: "I've never been good at journaling, but recording quick videos is so much easier! The AI insights have helped me understand my stress patterns during exam periods.",
  },
];