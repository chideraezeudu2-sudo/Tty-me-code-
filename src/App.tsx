import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  ChevronRight, 
  Github, 
  Chrome, 
  Check, 
  Zap,
} from "lucide-react";
import { FEATURES, PRICING, STEPS } from "./constants";
import { TerminalDemo } from "./components/TerminalDemo";
import { GlassCard } from "./components/GlassCard";
import { Button } from "./components/Button";

// --- Nav Component ---
const Nav = ({ onAuth }: { onAuth: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Terminal className="text-neon-orange" size={24} />
        <span className="font-display text-xl font-bold tracking-tight text-white">tty.live</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-whisper-blue">
        <a href="#features" className="hover:text-neon-orange transition-colors">Features</a>
        <a href="#pricing" className="hover:text-neon-orange transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Docs</a>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onAuth} className="text-sm font-medium hover:text-white transition-colors cursor-pointer text-whisper-blue">Log in</button>
        <Button onClick={onAuth} variant="orange" className="shadow-orange-glow">
          Start Free Trial
        </Button>
      </div>
    </div>
  </nav>
);

// --- Auth Page Component ---
const AuthPage = ({ onBack }: { onBack: () => void; key?: string }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-midnight-abyss/95 backdrop-blur-xl flex items-center justify-center p-6"
  >
    <div className="auth-card w-full max-w-md p-8 relative">
      <button onClick={onBack} className="absolute top-6 right-6 text-whisper-blue hover:text-white cursor-pointer">
        <ChevronRight size={24} className="rotate-180" />
      </button>
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="text-neon-orange" size={32} />
          <span className="font-display text-2xl font-bold text-white">tty.live</span>
        </div>
        <h1 className="text-2xl font-display font-bold text-white mb-2">Welcome back</h1>
        <p className="text-whisper-blue">Start your 7-day free trial now.</p>
      </div>

      <div className="space-y-4">
        <Button variant="glass" className="w-full h-11">
          <Github size={18} /> Continue with GitHub
        </Button>
        <Button variant="glass" className="w-full h-11">
          <Chrome size={18} /> Continue with Google
        </Button>
        
        <div className="flex items-center gap-4 py-4">
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-[10px] text-interstellar-gray uppercase tracking-widest font-bold">or email</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-arctic-mist mb-1.5 ml-1">Email address</label>
            <input type="email" placeholder="dev@tty.live" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-neon-orange outline-none transition-all placeholder:text-whisper-blue/50 h-11 backdrop-blur-md" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-arctic-mist mb-1.5 ml-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-neon-orange outline-none transition-all placeholder:text-whisper-blue/50 h-11 backdrop-blur-md" />
          </div>
          <Button variant="orange" className="w-full mt-2 h-11 shadow-orange-glow">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [view, setView] = useState<"landing" | "auth">("landing");

  return (
    <div className="min-h-screen bg-midnight-abyss">
      <AnimatePresence mode="wait">
        {view === "auth" ? (
          <AuthPage key="auth" onBack={() => setView("landing")} />
        ) : (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <Nav onAuth={() => setView("auth")} />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-neon-orange/10 blur-[120px] rounded-full -z-10" />
              <div className="max-w-7xl mx-auto text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight leading-[1.1]"
                >
                  Share your terminal. <br />
                  <span className="text-neon-orange">Instantly.</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-comet mb-10 max-w-2xl mx-auto leading-relaxed font-sans"
                >
                  Zero-latency terminal sharing. Run one command, get a link, 
                  and let anyone watch your work live in their browser.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                >
                  <Button onClick={() => setView("auth")} variant="orange" className="px-8 h-11 text-base shadow-orange-glow">
                    Start Free Trial <ChevronRight size={18} />
                  </Button>
                  <Button variant="glass" className="px-8 h-11 text-base">
                    See It Live
                  </Button>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs text-interstellar-gray"
                >
                  7-day free trial. Card required. Cancel anytime.
                </motion.p>
              </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="py-20 px-6">
              <div className="max-w-4xl mx-auto">
                <TerminalDemo />
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 px-6">
              <div className="max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-3xl font-display font-bold text-white mb-4">Powerful features for devs</h2>
                <p className="text-comet">Built for pair programming, debugging, and teaching.</p>
              </div>
              <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURES.map((feature, i) => (
                  <GlassCard key={i} delay={i * 0.1}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-neon-orange/10 rounded-lg text-neon-orange">
                        <feature.icon size={24} />
                      </div>
                      {feature.isPro && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-neon-orange px-2 py-0.5 rounded-md text-white">Pro</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-display">{feature.title}</h3>
                    <p className="text-sm text-azure-glow leading-relaxed">{feature.description}</p>
                  </GlassCard>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-32 px-6 bg-white/[0.01]">
              <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-white mb-4">Simple pricing</h2>
                <p className="text-comet">Choose the plan that fits your workflow.</p>
              </div>
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                {PRICING.map((plan, i) => (
                  <div key={i} className={`p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${i === 1 ? 'border-neon-orange bg-neon-orange/5 shadow-orange-glow' : 'border-white/10 bg-white/5'} relative overflow-hidden backdrop-blur-sm`}>
                    {i === 1 && <div className="absolute top-0 right-0 bg-neon-orange text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">Most Popular</div>}
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-whisper-blue text-sm">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-arctic-mist">
                          <Check size={16} className="text-neon-orange shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => setView("auth")} variant={i === 1 ? "orange" : "glass"} className="w-full h-11 sm:h-12">
                      Start Free Trial
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5 bg-midnight-abyss">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <Terminal className="text-neon-orange" size={20} />
                  <span className="font-display font-bold text-white">tty.live</span>
                </div>
                <div className="flex gap-8 text-sm text-azure-glow">
                  <a href="#" className="hover:text-white">Privacy</a>
                  <a href="#" className="hover:text-white">Terms</a>
                  <a href="#" className="hover:text-white">Twitter</a>
                </div>
                <div className="text-xs text-interstellar-gray">
                  © 2026 tty.live. All rights reserved.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
