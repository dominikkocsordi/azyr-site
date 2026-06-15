import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ChevronDown, 
  Lock, 
  ShieldCheck, 
  Check, 
  Download, 
  ArrowRight, 
  Palette, 
  ListTodo, 
  Zap, 
  CalendarDays, 
  Gift, 
  Globe, 
  Flame, 
  ShieldAlert,
  HelpCircle,
  Smartphone,
  Star
} from "lucide-react";
import InteractiveAppMockup from "./components/InteractiveAppMockup";
import DownloadHtmlModal from "./components/DownloadHtmlModal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Kostet Azyr etwas oder gibt es Abos?",
    answer: "Azyr ist aktuell in der Alpha-Phase komplett kostenlos und werbefrei nutzbar. Sämtliche Kernfunktionen wie Timeline-Planung, Gewohnheiten und das visuelle Mosaik-Board stehen dir unbegrenzt gratis zur Verfügung. Für die Zukunft sind optionale Premium-Erweiterungen über ein faires Abonnement-Modell geplant, wobei die bereits existierenden Kernfunktionen so weit wie möglich kostenfrei bleiben."
  },
  {
    question: "Wie funktioniert der bidirektionale Kalender-Sync?",
    answer: "Nachdem du Azyr berechtigt hast, liest die App deine iOS-Kalendereinträge direkt lokal auf deinem Gerät aus. Termine werden reserviert, und Azyr plant davor und danach Pufferzeiten ein. Änderungen in deinem Kalender spiegeln sich in Echtzeit in der Azyr-Timeline wider – und umgekehrt."
  },
  {
    question: "Gibt es Azyr bald auch für Android?",
    answer: "Azyr ist als komplett native iOS-App konzipiert, um maximale Performance, erstklassiges Haptik-Feedback mit der Taptic Engine und datenschutzkonforme iCloud-Integrationen zu garantieren. Eine Android-Version ist derzeit nicht in Planung, da dies mit den Kernprinzipien der lokalen Datenhaltung kollidieren würde."
  }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Handle transparent to blurred dynamic header trans
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@azyr.app");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-brand-pink/20 selection:text-brand-pink overflow-x-hidden relative">
      
      {/* Absolute Decorative Glowing Background Blobs */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] glow-blob bg-brand-peach rounded-full z-0 translate-y-[-10%] select-none"></div>
      <div className="absolute top-[45rem] right-10 w-[550px] h-[550px] glow-blob bg-brand-pink rounded-full z-0 translate-y-[-20%] select-none"></div>
      <div className="absolute top-[110rem] left-1/4 w-[600px] h-[600px] glow-blob bg-brand-violet rounded-full z-0 select-none"></div>
      <div className="absolute top-[170rem] right-10 w-[500px] h-[500px] glow-blob bg-brand-lavender rounded-full z-0 select-none"></div>

      {/* HEADER NAVIGATION */}
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/40 shadow-sm" : "bg-transparent border-b border-transparent"}`}>
        <div id="navigation-bar" className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9.5 h-9.5 rounded-xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10 shadow-sm">
              {/* Optional logo.png placeholder - overrides CSS icon when uploaded */}
              <img 
                src="logo.png" 
                alt="Azyr Logo" 
                className="absolute inset-0 w-full h-full object-cover hidden z-20" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                onLoad={(e) => { 
                  e.currentTarget.classList.remove('hidden'); 
                  const sib1 = e.currentTarget.nextElementSibling as HTMLElement;
                  const sib2 = sib1?.nextElementSibling as HTMLElement;
                  if (sib1) sib1.style.display = 'none';
                  if (sib2) sib2.style.display = 'none';
                }}
              />
              <div className="w-7 h-7 rounded-full border-[3px] border-t-brand-peach border-r-brand-pink border-b-brand-violet border-l-brand-lavender animate-spin" style={{ animationDuration: "16s" }}></div>
              <div className="absolute inset-1.5 bg-neutral-950 rounded-lg flex items-center justify-center">
                <span className="text-xs font-black text-gradient font-display">A</span>
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-neutral-900">azyr.app</span>
          </a>

          <nav className="hidden md:flex items-center gap-1.5 bg-white/60 backdrop-blur-xl border border-white/60 px-2 py-1.5 rounded-full shadow-sm">
            <a href="#features" className="px-4.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-full transition">Features</a>
            <a href="#datenschutz" className="px-4.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-full transition">Datenschutz</a>
            <a href="#faq" className="px-4.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-full transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#store-download" 
              className="inline-flex items-center justify-center text-xs font-bold px-4.5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full transition-all shadow-sm active:scale-98"
            >
              App gratis laden
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 z-10" id="hero-sec">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-brand/10 border border-brand-pink/20 rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-pink animate-pulse" />
                <span className="text-[10px] font-bold text-gradient uppercase tracking-wider">Erlebe die Leichtigkeit von iOS 19</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6.5xl tracking-tight text-neutral-950 leading-[1.08]"
              >
                Produktivität, die <br className="hidden md:block" />
                deinen <span className="text-gradient">Rhythmus</span> versteht.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-xl"
              >
                Azyr verbindet tägliche Gewohnheiten und flexible Aufgaben in einem fließenden, visuellen System. Entwickelt für deine biologische Energie — nicht nur für deinen Kalender.
              </motion.p>

              {/* Call to action group */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              >
                <a 
                  href="#store-download" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-900 rounded-2xl shadow-xl hover:shadow-black/10 transition-all duration-200 active:scale-98"
                >
                  <Smartphone className="w-5 h-5 text-white" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] uppercase text-white/50 tracking-wider block">Download im</span>
                    <span className="text-base font-bold font-display mt-0.5 block">App Store</span>
                  </div>
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-800 rounded-2xl border border-neutral-200 shadow-sm transition-all"
                >
                  <span className="font-semibold text-sm">Mehr erfahren</span>
                </a>
              </motion.div>

              {/* Social proof trust details */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-neutral-200/50 w-full"
              >
                <div>
                  <span className="text-xs text-neutral-400 block font-mono">STATUS</span>
                  <span className="text-xs font-bold text-gradient block mt-0.5 uppercase tracking-wide">Azyr Alpha</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-mono">ENDE-ZU-ENDE</span>
                  <span className="text-xs font-bold text-neutral-700 block mt-0.5">iCloud verschlüsselt</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xs text-neutral-400 block font-mono">100% PRIVATE</span>
                  <span className="text-xs font-bold text-neutral-700 block mt-0.5">Ohne Registrierung</span>
                </div>
              </motion.div>
            </div>

            {/* Right Static Showcase (REPLACED SIMULATOR) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="absolute -inset-4 bg-gradient-brand opacity-15 rounded-full filter blur-3xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.2 }}
                className="w-full max-w-[340px]"
              >
                {/* Clean, static iOS-Style Showcase Frame representing the app beautifully */}
                <div className="relative w-full aspect-[9/19] bg-[#0c0c0e] rounded-[52px] p-3.5 shadow-2xl border-[8px] border-[#1e1e24] flex flex-col overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-[#1e1e24] rounded-b-xl z-50"></div>
                  
                  {/* Grid background gradients inside screen */}
                  <div className="absolute inset-0 bg-[#0c0c0e] z-0 overflow-hidden rounded-[38px]">
                    <div className="absolute -top-20 -left-16 w-44 h-44 rounded-full bg-brand-peach/10 blur-[30px] pointer-events-none"></div>
                    <div className="absolute top-40 -right-16 w-44 h-44 rounded-full bg-brand-pink/10 blur-[30px] pointer-events-none"></div>
                    <div className="absolute bottom-16 -left-20 w-48 h-48 rounded-full bg-brand-violet/15 blur-[40px] pointer-events-none"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full text-white font-sans text-[13px] pt-4 px-2">
                    {/* App mock header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10">
                          <div className="w-5 h-5 rounded-full border-2 border-t-brand-peach border-r-brand-pink border-b-brand-violet border-l-brand-lavender" />
                        </div>
                        <div>
                          <span className="text-[10px] text-white/50 block leading-none">azyrmosaic</span>
                          <span className="font-display font-bold text-xs">Azyr Workspace</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-gradient-to-r from-brand-peach/10 to-brand-pink/10 border border-brand-pink/20 px-2 py-0.5 rounded-full text-[10px] font-bold text-brand-pink">
                        🔥 12d Streak
                      </div>
                    </div>

                    {/* Static Visual Mosaic Board representation */}
                    <div className="bg-white/5 border border-white/5 p-3 rounded-2xl mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-wide text-white/60">WOLKEN-RASTER</span>
                        <span className="text-[10px] text-brand-violet font-semibold">18 / 36 Kacheln</span>
                      </div>
                      
                      {/* Fixed gorgeous gradient grid representing the user progress */}
                      <div className="grid grid-cols-6 gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
                        {Array.from({ length: 36 }).map((_, i) => {
                          let tileColor = "bg-neutral-800/60";
                          if (i < 18) {
                            const row = Math.floor(i / 6);
                            if (row === 0) tileColor = "bg-brand-peach opacity-95";
                            else if (row === 1) tileColor = "bg-brand-pink opacity-95";
                            else tileColor = "bg-brand-violet opacity-95";
                          }
                          return (
                            <div 
                              key={i} 
                              className={`aspect-square rounded-md transition-all relative overflow-hidden ${tileColor}`}
                            >
                              {i < 18 && <div className="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Today's Tasks Presentation Card */}
                    <div className="bg-[#121216] border border-white/5 rounded-2xl p-3 flex flex-col gap-2">
                      <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block">Tagesordnung und biologischer Energiefluss</span>
                      
                      {/* Static Task Items */}
                      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg text-white/50 border border-transparent">
                        <div className="w-3.5 h-3.5 rounded-md bg-gradient-brand flex items-center justify-center text-black shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[4]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-medium truncate line-through">Design Feedback einpflegen</p>
                          <span className="text-[8px] opacity-60">Routine • 09:30</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg border border-white/5 text-white">
                        <div className="w-3.5 h-3.5 rounded-md border border-white/30 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-medium truncate">Azyr-Projekt starten</p>
                          <span className="text-[8px] text-brand-pink font-bold">⚡ High Focus • 11:30</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg border border-white/5 text-white">
                        <div className="w-3.5 h-3.5 rounded-md border border-white/30 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-medium truncate">Mails & Support klären</p>
                          <span className="text-[8px] text-brand-peach font-bold">🔋 Low Focus • 14:00</span>
                        </div>
                      </div>
                    </div>

                    {/* Smart insights snippet */}
                    <div className="mt-4 bg-gradient-to-r from-brand-violet/10 to-brand-lavender/10 border border-brand-violet/15 p-2 px-3 rounded-xl text-[10px] text-white/90 leading-normal">
                      <p className="font-semibold text-brand-lavender">🧠 Zeigarnik-Empfehlung</p>
                      <p className="mt-0.5 text-white/75 text-[9px]">Unerledigte Dinge blockieren deinen Arbeitsspeicher. Notiere sie jetzt in Azyr!</p>
                    </div>

                    {/* Bottom visual Lock bar */}
                    <div className="mt-auto mb-2 bg-[#1b1b24] p-2 rounded-xl border border-white/10 flex items-center justify-between text-[10px]">
                      <span className="font-bold">Gratis & iCloud verschlüsselt</span>
                      <span className="text-brand-pink font-mono text-[9px] uppercase tracking-widest font-bold">iOS Native</span>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK VALUE FACTS BAR */}
      <section className="bg-white/40 backdrop-blur-md border-y border-neutral-100 py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-extrabold text-3.5xl">Kein Server</span>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Sicherer Offline-Ansatz</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-extrabold text-3.5xl">100% Local</span>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Kein Tracking oder Spam</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-extrabold text-3.5xl">iOS Native</span>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Apple Human Interface</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-extrabold text-3.5xl">Mosaik UX</span>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Wöchentliches Gemälde</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION WITH BENTO GRID (German Copies) */}
      <section className="py-20 md:py-28 relative z-10" id="features">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/5 px-3.5 py-1.5 rounded-full">DIE REVOLUTION</span>
            <h2 className="font-display font-extrabold text-3.5xl md:text-5xl tracking-tight text-neutral-950 mt-4 leading-tight">
              Alles, was du brauchst, um im Fluss zu bleiben.
            </h2>
            <p className="text-neutral-500 font-light text-base md:text-lg mt-3 leading-relaxed">
              Verabschiede dich von starren, entmutigenden To-Do-Listen. Azyr respektiert deine Gehirnphysiologie und veranschaulicht Erfolge mit stilvoller Belohnungspsychologie.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Card 1: Mosaic Tracking (Large Card - 7 Cols) */}
            <div className="md:col-span-7 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] group transition-card">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-peach/20 rounded-full filter blur-2xl group-hover:bg-brand-peach/30 transition" />
              <div>
                <div className="w-12 h-12 bg-neutral-950 rounded-2xl flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105">
                  <Palette className="w-6 h-6 text-brand-peach" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-neutral-900 tracking-tight">Mosaic-Tracking</h3>
                <p className="text-neutral-600 font-light mt-3 leading-relaxed text-sm md:text-base">
                  Erledigte Gewohnheiten und To-Dos enthüllen Kachel für Kachel dein ganz persönliches, farbenprächtiges Wochen-Mosaik. Dein täglicher Fleiß wird zu einem stolzen Kunstwerk. Fortschritt, den man wirklich sehen kann.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">VISUELLER REIZ</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">SPIELERISCHER REWARD</span>
              </div>
            </div>

            {/* Card 2: Habits & To-Dos (5 Cols) */}
            <div className="md:col-span-5 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] group transition-card">
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-brand-pink/20 rounded-full filter blur-2xl group-hover:bg-brand-pink/30 transition" />
              <div>
                <div className="w-12 h-12 bg-neutral-950 rounded-2xl flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105">
                  <ListTodo className="w-6 h-6 text-brand-pink" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-neutral-900 tracking-tight">Habits & To-Dos</h3>
                <p className="text-neutral-600 font-light mt-3 leading-relaxed text-sm md:text-base">
                  Keine künstliche Trennung von Lebensbereichen mehr. Wiederkehrende Routinen und spontane To-Dos verschmelzen in einer einzigen, harmonischen Tagesliste.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-pink-50 text-brand-pink border border-pink-100">INTEGRIERTER WORKSPACE</span>
              </div>
            </div>

            {/* Card 3: Energy planning (5 Cols) */}
            <div className="md:col-span-5 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] group transition-card">
              <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-brand-violet/20 rounded-full filter blur-2xl group-hover:bg-brand-violet/30 transition" />
              <div>
                <div className="w-12 h-12 bg-neutral-950 rounded-2xl flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105">
                  <Zap className="w-6 h-6 text-brand-violet" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-neutral-900 tracking-tight">Energie-basiertes Planen</h3>
                <p className="text-neutral-600 font-light mt-3 leading-relaxed text-sm md:text-base">
                  Teile deine Aufgaben nach Energieaufwand ein: <strong className="font-semibold">High Focus</strong>, <strong class="font-semibold">Low Focus</strong> oder <strong class="font-semibold">Routine</strong>. Azyr platziert sie automatisch in deine biologisch perfekten Konzentrationskurven.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-violet-50 text-brand-violet border border-purple-100">BIOLOGISCHE PEAKS</span>
              </div>
            </div>

            {/* Card 4: Calendar Integration (7 Cols) */}
            <div className="md:col-span-7 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] group transition-card">
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand-lavender/20 rounded-full filter blur-2xl group-hover:bg-brand-lavender/30 transition" />
              <div>
                <div className="w-12 h-12 bg-neutral-950 rounded-2xl flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105">
                  <CalendarDays className="w-6 h-6 text-brand-lavender" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-neutral-900 tracking-tight">Apple Kalender-Integration</h3>
                <p className="text-neutral-600 font-light mt-3 leading-relaxed text-sm md:text-base">
                  Voller Zwei-Wege-Sync mit dem iCloud Kalender. Azyr blockiert bestehende Zeiten automatisch und schlägt dir stressfreie Pufferzeiten davor und danach vor, um Burnout proaktiv zu verhindern.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-brand-violet border border-purple-100">STRESSFREIE PUFFER</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-green-50 text-emerald-700 border border-emerald-100">LOCAL CACHE ONLY</span>
              </div>
            </div>

            {/* Card 5: Reward mechanism (6 Cols) */}
            <div className="md:col-span-6 glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[190px] group transition-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-neutral-900">Psychologisches Belohnungssystem</h3>
                  <p className="text-neutral-500 font-light mt-2 leading-relaxed text-xs sm:text-sm">
                    Schließe Farbspalten deines Mosaiks ab, um spannende psychologische Pillen, verhaltenstherapeutische Empfehlungen und fundierte Ratschläge zu Fokus-Maximierung direkt freizuschalten.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6: Cognitive peace (6 Cols) */}
            <div className="md:col-span-6 glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[190px] group transition-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center text-brand-peach shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-neutral-900">Kognitive Entlastung (Keine Ablenkung)</h3>
                  <p className="text-neutral-500 font-light mt-2 leading-relaxed text-xs sm:text-sm">
                    Azyr verzichtet bewusst auf störende Pop-ups, Gamification-Überflutung oder künstliche Animationen. Die App bleibt ein ruhiges, klares Werkzeug für deine alltägliche Balance und echte Geistesruhe.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRIVACY & EXTREME TRUST SECTION (Luxury Dark Glassmorphism Mode) */}
      <section className="py-24 bg-[#0a0a0c] text-white relative overflow-hidden z-10" id="datenschutz">
        
        {/* Subtle radial gradients in dark layout */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#0a0a0c] to-black opacity-90 z-0"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-brand-violet/10 rounded-full filter blur-[110px] pointer-events-none"></div>
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-brand-pink/10 rounded-full filter blur-[110px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <motion.div 
              whileHover={{ rotate: 12 }}
              className="w-14 h-14 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 mb-4 cursor-pointer"
            >
              <Lock className="w-7 h-7 text-black stroke-[2.5]" />
            </motion.div>
            <span className="text-xs font-bold font-mono tracking-wider text-brand-pink uppercase">KOMPROMISSLOSE PRIVATSPHÄRE</span>
            <h2 className="font-display font-extrabold text-3.5xl sm:text-5xl tracking-tight leading-tight mt-1.5">
              Deine Daten gehören dir.<br />
              <span className="text-gradient">Und nur dir.</span>
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              <div className="md:col-span-7 flex flex-col gap-6 justify-between text-left">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-red-400" />
                    Keine fremden Server
                  </h3>
                  <p className="text-neutral-400 font-light leading-relaxed text-xs sm:text-sm">
                    Azyr speichert deine Notizen, Absichten oder Kalenderdaten niemals auf externen Servern. Es gibt kein Tracking, keine Tracking-Skripte und absolut keine Registrierung. Deine Privatsphäre bleibt unangetastet.
                  </p>
                </div>
                
                <div className="h-[1px] bg-white/10 w-full" />
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    iCloud Ende-zu-Ende Sync
                  </h3>
                  <p className="text-neutral-400 font-light leading-relaxed text-xs sm:text-sm">
                    Deine Daten synchronisieren nahtlos über deine persönliche Apple-iCloud, exklusiv geschützt durch deine eigene Apple-ID. Weder Apple noch wir als Entwickler haben zu irgendeinem Zeitpunkt Zugriff darauf.
                  </p>
                </div>
              </div>

              {/* Right graphical representation of iCloud Lockbox */}
              <div className="md:col-span-5 bg-black/40 border border-white/5 p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                  <span>AES_256_ACTIVE</span>
                  <span className="text-emerald-400 font-bold animate-pulse">● LOCAL_LOCKED</span>
                </div>
                
                <div className="my-6 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-transparent border-t-brand-pink animate-spin" style={{ animationDuration: "5s" }}></div>
                    <Lock className="w-6 h-6 text-gradient" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-pink font-bold uppercase">CloudKit Synced</span>
                </div>

                <div className="text-[9px] font-mono text-brand-lavender bg-brand-lavender/10 p-2.5 rounded-xl border border-brand-lavender/20 text-center leading-none">
                  Entwickelt nach Apple Human Interface Guidelines
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (With beautiful React collapsible state) */}
      <section className="py-20 md:py-28 relative z-10" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-peach bg-brand-peach/10 px-3.5 py-1.5 rounded-full inline-block">HÄUFIGE FRAGEN</span>
            <h2 className="font-display font-extrabold text-3.5xl sm:text-4xl tracking-tight text-neutral-950 mt-4 leading-tight">
              Alles, was du zu Azyr wissen möchtest.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isSelected = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isSelected ? "bg-white shadow-md border-brand-pink/20 scale-[1.01]" : ""}`}
                >
                  <button 
                    onClick={() => setActiveFaq(isSelected ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-display font-extrabold text-sm sm:text-base md:text-lg focus:outline-none text-neutral-900 hover:text-brand-pink transition cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isSelected ? "rotate-180 text-brand-pink" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-neutral-600 font-light leading-relaxed text-xs sm:text-sm md:text-base border-t border-neutral-100/50 pt-3">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA CONVERSION SECTION (App Store badge + interactive download widget) */}
      <section className="relative py-24 overflow-hidden z-10" id="store-download">
        <div className="absolute inset-0 bg-neutral-950"></div>
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-pink/15 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            
            {/* App Icon badge */}
            <div className="relative w-20 h-20 rounded-3xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/20 shadow-xl shadow-brand-pink/10 group mb-4">
              <img 
                src="logo.png" 
                alt="Azyr Logo" 
                className="absolute inset-0 w-full h-full object-cover hidden z-20" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                onLoad={(e) => { 
                  e.currentTarget.classList.remove('hidden'); 
                  const sib1 = e.currentTarget.nextElementSibling as HTMLElement;
                  const sib2 = sib1?.nextElementSibling as HTMLElement;
                  if (sib1) sib1.style.display = 'none';
                  if (sib2) sib2.style.display = 'none';
                }}
              />
              <div className="w-16 h-16 rounded-full border-[6px] border-t-brand-peach border-r-brand-pink border-b-brand-violet border-l-brand-lavender animate-spin" style={{ animationDuration: "14s" }}></div>
              <div className="absolute inset-2 bg-neutral-950 rounded-[20px] flex items-center justify-center">
                <span className="text-xl font-black text-gradient font-display">Az</span>
              </div>
            </div>

            <span className="text-xs font-extrabold font-mono tracking-widest text-brand-pink bg-brand-pink/10 px-3.5 py-1.5 rounded-full uppercase">CONVERSION BOOST</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-none">
              Starte noch heute in deinen Rhythmus.
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base md:text-lg mt-2">
              Azyr ist für alle, die ihren täglichen Fokus steigern möchten, ohne sich in starren Checklisten zu verlieren. Probiere es kostenlos aus und finde deine perfekte Balance.
            </p>

            {/* Apple App store download badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-brand hover:opacity-90 transition rounded-2xl w-full sm:w-auto shadow-xl group border border-white/10"
              >
                <Smartphone className="w-6 h-6 text-black stroke-[2]" />
                <div className="text-left leading-none text-black">
                  <p className="text-[9px] uppercase font-semibold text-black/60 tracking-wider">Erhalten im App Store für</p>
                  <p className="text-lg font-extrabold font-display mt-0.5">iPhone & iPad</p>
                </div>
              </motion.a>
            </div>

            {/* Trust symbols */}
            <div className="flex flex-wrap justify-center gap-6 text-[10px] text-neutral-500 mt-8 font-mono border-t border-white/10 pt-6 w-full uppercase tracking-wider font-bold">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />Vollständig kostenlos</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />Sicherer iCloud-Sync</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />Keine externen Tracker</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-50 border-t border-neutral-100 py-16 text-xs text-neutral-500 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-neutral-200/50 pb-10 mb-10">
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded bg-neutral-950 flex items-center justify-center overflow-hidden">
                  <img 
                    src="logo.png" 
                    alt="Azyr Logo" 
                    className="absolute inset-0 w-full h-full object-cover hidden z-20" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    onLoad={(e) => { 
                      e.currentTarget.classList.remove('hidden'); 
                      const sib1 = e.currentTarget.nextElementSibling as HTMLElement;
                      if (sib1) sib1.style.display = 'none';
                    }}
                  />
                  <span className="text-[9px] font-bold text-gradient">A</span>
                </div>
                <span className="font-display font-bold text-sm text-neutral-800 tracking-tight">azyr.app</span>
              </div>
              <p className="max-w-xs font-light text-neutral-400 leading-normal">
                Ein privates Projekt von Dominik Kocsordi. Minimalistisch gestaltete Benutzeroberflächen für kognitive Balance und gesunden biologischen Fokus.
              </p>
            </div>

            {/* Interactive copy email / Support links */}
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Support & Kontakt</span>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 font-semibold text-neutral-600 hover:text-black transition focus:outline-none cursor-pointer"
              >
                <span>hello@azyr.app</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 border border-neutral-200">
                  {copiedEmail ? "Kopiert!" : "Kopieren"}
                </span>
              </button>
            </div>

            {/* Links group */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#" className="font-semibold text-neutral-600 hover:text-black transition">Impressum</a>
              <a href="#" className="font-semibold text-neutral-600 hover:text-black transition">Datenschutz</a>
              <a href="#" className="font-semibold text-neutral-600 hover:text-black transition">Nutzungsbedingungen</a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-400">
            <span>&copy; {new Date().getFullYear()} azyr.app / Dominik Kocsordi. Alle Rechte vorbehalten.</span>
            <span>Entwickelt in Übereinstimmung mit den Apple Human Interface Guidelines.</span>
          </div>
        </div>
      </footer>

      {/* STATIC SINGLE-FILE HTML DOWNLOAD UTILITY MODAL */}
      <DownloadHtmlModal />

    </div>
  );
}
