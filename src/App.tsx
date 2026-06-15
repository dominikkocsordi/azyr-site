import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ChevronDown, 
  Lock, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Palette, 
  ListTodo, 
  Zap, 
  CalendarDays, 
  Gift, 
  Flame, 
  ShieldAlert,
  Smartphone,
  MapPin,
  Clock,
  Sliders,
  ChevronRight,
  Database,
  Cpu,
  Infinity,
  X,
  HelpCircle
} from "lucide-react";
import DownloadHtmlModal from "./components/DownloadHtmlModal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Wie schützt mich der Reality-Check vor Überplanung?",
    answer: "Azyr analysiert vollautomatisch deine lokalen Apple Kalender-Termine direkt auf dem Gerät. Wenn du Aufgaben mit einer geschätzten Dauer von 4 Stunden einträgst, aber dein Kalender zwischen den Meetings am Tag nur ein Zeitfenster von 2 Stunden hergibt, warnt dich die App proaktiv. Du wirst sanft darauf hingewiesen, dass deine Pläne unrealistisch sind, bevor du in die Überlastung läufst."
  },
  {
    question: "Wie funktioniert das Geofencing, ohne dass meine Standortdaten geteilt werden?",
    answer: "Azyr nutzt die native On-Device Geofencing-Technologie von iOS (CoreLocation API). Die Definition deiner Arbeits- und Wohnorte sowie die Abfragen, wo du dich gerade aufhältst, laufen zu 100% lokal auf dem Hauptprozessor deines iPhones. Es gibt keinen Analytics-Server, der Standorte aufzeichnet oder an Werbepartner sendet."
  },
  {
    question: "Wie funktioniert der Synchronisationsprozess über iCloud?",
    answer: "Deine Daten werden verschlüsselt in deiner persönlichen iCloud abgelegt (Apple CloudKit). Das bedeutet, dass deine Aufgaben auf all deinen Apple-Geräten wie iPhone, iPad und Mac synchronisiert werden können, ohne dass du ein separates Benutzerkonto erstellen musst. Weder wir noch Dritte haben jemals physikalischen Zugriff auf diese Cloud-Nischen."
  },
  {
    question: "Gibt es Abonnements oder laufende API-Kosten?",
    answer: "Nein, es gibt keine monatlichen Subscriptions. Da Azyr vollständig On-Device arbeitet, fallen für uns keine teuren Serverkosten für Rechenleistung an. Das geben wir direkt an dich weiter: Du lädst die App einmalig herunter und nutzt sie unbegrenzt."
  }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Core USP selector state for interactive showcase
  const [activeUsp, setActiveUsp] = useState<"reality" | "geofence" | "focus" | "mosaic">("reality");

  // Interactive state inside Simulated Phone Frame
  // USP 1 (Reality Check)
  const [realityTasks, setRealityTasks] = useState([
    { id: "r1", title: "Landingpage-Design finalisieren", duration: 3, moved: false },
    { id: "r2", title: "Entwickler-Schnittstelle testen", duration: 2, moved: false }
  ]);
  const [realityOptimized, setRealityOptimized] = useState(false);

  // USP 2 (Geofencing)
  const [currentLocation, setCurrentLocation] = useState<"home" | "office">("office");
  const officeTasks = [
    { id: "o1", title: "Kunden-Präsentation halten", done: false },
    { id: "o2", title: "Projektbericht ausdrucken", done: false },
    { id: "o3", title: "Team-Protokoll schreiben", done: true }
  ];
  const homeTasks = [
    { id: "h1", title: "30 Min. Dehnen & Atemübungen", done: false },
    { id: "h2", title: "Fachlektüre: Mindful Tech", done: false },
    { id: "h3", title: "Gesundes Abendessen kochen", done: true }
  ];

  // USP 3 (Zen Focus Modus)
  const [focusTimerActive, setFocusTimerActive] = useState(false);
  const [focusTimeLeft, setFocusTimeLeft] = useState(1500); // 25 Min

  // USP 4 (Mosaics)
  const [mosaicTasks, setMosaicTasks] = useState([
    { id: "m1", title: "iCloud-Sync aktivieren", done: false, matchedTile: 18 },
    { id: "m2", title: "CoreLocation freigeben", done: false, matchedTile: 19 },
    { id: "m3", title: "Erste Tagesaufgabe abschließen", done: true, matchedTile: 12 }
  ]);
  const [revealedTiles, setRevealedTiles] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10, 11,
    12, 13, 14, 15
  ]);
  const [showCelebrationToast, setShowCelebrationToast] = useState(false);

  // Handle dynamic header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zen Timer ticking emulation
  useEffect(() => {
    let interval: any = null;
    if (focusTimerActive) {
      interval = setInterval(() => {
        setFocusTimeLeft((prev) => (prev > 0 ? prev - 1 : 1500));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [focusTimerActive]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@azyr.app");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRealityOptimize = () => {
    setRealityOptimized(true);
    setRealityTasks(prev => 
      prev.map(t => t.id === "r1" ? { ...t, moved: true } : t)
    );
    setShowCelebrationToast(true);
    setTimeout(() => setShowCelebrationToast(false), 3000);
  };

  const handleResetReality = () => {
    setRealityOptimized(false);
    setRealityTasks([
      { id: "r1", title: "Landingpage-Design finalisieren", duration: 3, moved: false },
      { id: "r2", title: "Entwickler-Schnittstelle testen", duration: 2, moved: false }
    ]);
  };

  const handleToggleMosaicTask = (id: string, matchedTile: number) => {
    setMosaicTasks(prev => 
      prev.map(t => {
        if (t.id === id) {
          const nextState = !t.done;
          if (nextState) {
            setRevealedTiles(prevTiles => [...prevTiles, matchedTile]);
            setShowCelebrationToast(true);
            setTimeout(() => setShowCelebrationToast(false), 3000);
          } else {
            setRevealedTiles(prevTiles => prevTiles.filter(tile => tile !== matchedTile));
          }
          return { ...t, done: nextState };
        }
        return t;
      })
    );
  };

  const getMosaicTileColor = (idx: number) => {
    const isRevealed = revealedTiles.includes(idx);
    if (!isRevealed) return "bg-[#18181c] border border-white/[0.04]";
    
    // Rows dictate clean pastel neon colors
    const row = Math.floor(idx / 6);
    if (row === 0) return "bg-brand-peach shadow-[0_0_12px_rgba(255,158,125,0.4)]";
    if (row === 1) return "bg-brand-pink shadow-[0_0_12px_rgba(255,125,178,0.4)]";
    if (row === 2) return "bg-brand-violet shadow-[0_0_12px_rgba(176,132,249,0.4)]";
    return "bg-brand-lavender shadow-[0_0_12px_rgba(194,155,255,0.4)]";
  };

  const formatTimerTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#e4e4e7] font-sans selection:bg-brand-pink/20 selection:text-brand-pink overflow-x-hidden relative">
      
      {/* Optimized radial background glow bounds - purely CSS layout to prevent slow rendering */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-violet/10 filter blur-[90px] transform translate3d(0,0,0)" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-pink/10 filter blur-[90px] transform translate3d(0,0,0)" />
      </div>

      <div className="absolute top-[120rem] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-peach/5 filter blur-[100px] transform translate3d(0,0,0)" />
        <div className="absolute top-40 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-violet/5 filter blur-[100px] transform translate3d(0,0,0)" />
      </div>

      {/* HEADER NAVIGATION */}
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled ? "bg-black/75 backdrop-blur-md border-b border-white/[0.06] shadow-2xl" : "bg-transparent border-b border-transparent"}`}>
        <div id="navigation-bar" className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8.5 h-8.5 rounded-xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="logo.png" 
                alt="Azyr Logo" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-white group-hover:opacity-80 transition">azyr.app</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/5 px-1.5 py-1 rounded-full backdrop-blur-md">
            <a href="#features" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-all">Features</a>
            <a href="#datenschutz" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-all">Datenschutz</a>
            <a href="#faq" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-all">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#store-download" 
              className="inline-flex items-center justify-center text-xs font-semibold px-4.5 py-2.5 bg-white hover:bg-zinc-100 text-black rounded-full transition-all active:scale-98 shadow-md"
            >
              App gratis laden
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 z-10" id="hero-sec">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.06] border border-white/[0.08] rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-brand-pink animate-pulse" />
                <span className="text-[10px] font-bold text-gradient uppercase tracking-wider">Premium iOS-Produktivität</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6.5xl tracking-tight text-white leading-[1.05] max-w-2xl">
                Produktivität, die deinen <span className="text-gradient">Rhythmus</span> versteht.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                Azyr ist kein Micromanagement-Tool. Sondern ein loakler, mitdenkender Begleiter, der durch absolute Reduktion, smarte iOS-Integration und einen 100% datenschutzkonformen On-Device-Ansatz deine tatsächliche Zeit schützt.
              </p>

              {/* Download Buttons / Apple Store badgeless button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
                <a 
                  href="#store-download" 
                  className="inline-flex items-center justify-center gap-3.5 px-8 py-3.5 bg-white text-black hover:bg-zinc-100 rounded-2xl transition-all duration-200 active:scale-98 shadow-xl"
                >
                  <Smartphone className="w-5 h-5 text-black" />
                  <div className="text-left leading-none">
                    <span className="text-[8.5px] uppercase text-black/50 tracking-wider block">Download für</span>
                    <span className="text-base font-bold font-display mt-0.5 block">Apple iOS</span>
                  </div>
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 shadow-sm transition-all"
                >
                  <span className="font-medium text-sm">Features entdecken</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Social Proof Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.08] w-full max-w-xl">
                <div>
                  <span className="text-[10px] text-zinc-500 block font-mono">ON-DEVICE</span>
                  <span className="text-xs font-bold text-gradient block mt-1 uppercase tracking-wider">Zero-Server</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block font-mono">DATESCHUTZ</span>
                  <span className="text-xs font-bold text-zinc-300 block mt-1">100% iCloud E2E</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-zinc-500 block font-mono">USER INTERFACE</span>
                  <span className="text-xs font-bold text-zinc-300 block mt-1">Apple Native Design</span>
                </div>
              </div>
            </div>

            {/* Right Static Frame representing device mockup (Dynamic in Interactive Showcase below) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="absolute -inset-10 bg-brand-pink/5 rounded-full filter blur-[100px] pointer-events-none" />
              
              <div className="relative w-full max-w-[325px] aspect-[9/19] bg-[#09090b] rounded-[48px] p-3 shadow-2xl border-[6px] border-zinc-800 flex flex-col overflow-hidden select-none">
                {/* Simulated Notch */}
                <div className="absolute top-0 left-1/3 right-1/3 h-5 bg-zinc-800 rounded-b-xl z-50"></div>

                {/* Inner backgrounds */}
                <div className="absolute inset-0 bg-transparent z-0 overflow-hidden rounded-[38px]">
                  <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-brand-peach/10 blur-[25px] pointer-events-none" />
                  <div className="absolute top-44 -right-16 w-36 h-36 rounded-full bg-brand-pink/10 blur-[25px] pointer-events-none" />
                  <div className="absolute bottom-16 -left-20 w-44 h-44 rounded-full bg-brand-violet/15 blur-[35px] pointer-events-none" />
                </div>

                <div className="relative z-10 flex flex-col h-full text-white font-sans text-xs pt-4 px-2">
                  <div className="flex justify-between items-center mb-4 mt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
                        <img 
                          src="logo.png" 
                          alt="Azyr Logo" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-500 block leading-none">azyrmosaic</span>
                        <span className="font-display font-medium text-xs scale-95 tracking-wide text-zinc-200">Azyr On-Device</span>
                      </div>
                    </div>
                    <span className="text-[9px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20 px-2 py-0.5 rounded-full font-bold">
                      🔥 12 Tage Streak
                    </span>
                  </div>

                  {/* Top Preview Widget */}
                  <div className="bg-zinc-950/80 border border-white/5 p-3 rounded-2xl mb-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">AKTUELL IM FOKUS</span>
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-ping" />
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0 mt-0.5">
                        <Zap className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-zinc-100 leading-tight">Mosaics Design Konzept abschließen</p>
                        <p className="text-[9px] text-zinc-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 text-zinc-500" />
                          <span>Heute verbleibend: 1 Std. 15 Min.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mosaic board small visual */}
                  <div className="bg-zinc-950/40 border border-white/5 p-3 rounded-2xl mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">DEIN MOSAIC RASTER</span>
                      <span className="text-[10px] font-bold text-white/80">16 / 36</span>
                    </div>

                    <div className="grid grid-cols-6 gap-1.5 bg-black/50 p-1.5 rounded-xl border border-white/5">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`aspect-square rounded-sm ${
                            i < 16 
                              ? i % 3 === 0 
                                ? "bg-brand-peach shadow-[0_0_6px_rgba(255,158,125,0.2)]"
                                : i % 3 === 1
                                  ? "bg-brand-pink shadow-[0_0_6px_rgba(255,125,178,0.2)]"
                                  : "bg-brand-violet shadow-[0_0_6px_rgba(176,132,249,0.2)]"
                              : "bg-[#141416]"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* CoreLocation tag */}
                  <div className="bg-[#121215] border border-white/5 p-2 px-3 rounded-xl flex items-center gap-2 mt-auto mb-2 text-[9px] text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-brand-peach" />
                    <span>Kontext: Büro erkannt (Aufgabenliste geswitcht)</span>
                  </div>

                  <div className="bg-zinc-900 border border-white/[0.08] p-2 rounded-xl text-center text-[9px] text-zinc-500 flex items-center justify-center gap-1.5 mb-1">
                    <Lock className="w-3 h-3 text-brand-pink" />
                    <span>Daten verschlüsselt in deiner iCloud</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK VALUE FACTS BAR */}
      <section className="bg-white/[0.02] border-y border-white/[0.06] py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">Kein Server</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Maximale Datenhoheit</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">CoreLocation</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Lokales Geofencing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">Zen Fokus</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Intelligenter Block-Timer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">Mosaics UX</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Gamification ohne Druck</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE APPMOCKUP SHOWCASE (CENTRAL COMPONENT) */}
      <section className="py-20 md:py-28 relative z-10 bg-black/40 border-b border-white/[0.06]" id="features">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/10 border border-brand-pink/20 px-3.5 py-1.5 rounded-full inline-block">
              LIVE-STEUERUNG
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5.5xl tracking-tight text-white mt-4 leading-tight">
              Entdecke Azyr in Aktion.
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base md:text-lg mt-3 select-none leading-relaxed">
              Klicke links auf die 4 Kern-Features, um die Benutzeroberfläche der iOS-App direkt im interaktiven iPhone-Simulator gesteuert zu erleben.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left USP Selector Grid */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* USP 1: Reality Check */}
              <button 
                onClick={() => { setActiveUsp("reality"); handleResetReality(); }}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "reality" 
                    ? "bg-neutral-900/55 border-brand-pink/30 shadow-[0_0_25px_rgba(255,125,178,0.06)]" 
                    : "bg-transparent border-white/[0.04]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "reality" ? "bg-brand-pink border-brand-pink/25 text-black" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <CalendarDays className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>1. Der Reality-Check</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Nie wieder Überlastung</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Azyr liest lokal deinen Kalender aus. Wenn du 5 Stunden Aufgaben planst, aber nur 2 Stunden freie Lücke zwischen Meetings besitzt, warnt dich die App proaktiv. Schütze dich aktiv vor Burnout.
                  </p>
                </div>
              </button>

              {/* USP 2: Geofencing & Kontext */}
              <button 
                onClick={() => setActiveUsp("geofence")}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "geofence" 
                    ? "bg-neutral-900/55 border-brand-peach/30 shadow-[0_0_25px_rgba(255,158,125,0.06)]" 
                    : "bg-transparent border-white/[0.04]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "geofence" ? "bg-brand-peach border-brand-peach/25 text-black" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>2. Geofencing & Kontext</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Der richtige Ort</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Orte vollautomatisch filtern. Durch lokales CoreLocation-Geofencing blendet die App die passende Aufgabenliste ein, je nachdem ob du im Büro oder Zuhause bist. Ohne Ablenkung, alles lokal verarbeitet.
                  </p>
                </div>
              </button>

              {/* USP 3: Zen Focus Mode */}
              <button 
                onClick={() => setActiveUsp("focus")}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "focus" 
                    ? "bg-neutral-900/55 border-brand-violet/30 shadow-[0_0_25px_rgba(176,132,249,0.06)]" 
                    : "bg-transparent border-white/[0.04]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "focus" ? "bg-brand-violet border-brand-violet/25 text-white" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <Sliders className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>3. Zen Focus-Modus</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">One Thing at a Time</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Ein schwebender Fokus-Button blendet alles andere aus. Das Telefon zeigt nur deine aktuelle Tagespriorität bildschirmfüllend mit einem beruhigenden, 25-minütigen Haptik-Timer an. Kein Stress, nur Fokus.
                  </p>
                </div>
              </button>

              {/* USP 4: Mosaics */}
              <button 
                onClick={() => setActiveUsp("mosaic")}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "mosaic" 
                    ? "bg-neutral-900/55 border-brand-lavender/30 shadow-[0_0_25px_rgba(194,155,255,0.06)]" 
                    : "bg-transparent border-white/[0.04]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "mosaic" ? "bg-brand-lavender border-brand-lavender/25 text-black" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <Palette className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>4. Mosaics</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Gamification, die entspannt</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Verabschiede dich von Druck erzeugenden ungelösten To-Do Ketten. Mit jedem Abschluss einer Aufgabe dreht sich eine Mosaik-Raster-Kachel elegant um und enthüllt Schritt für Schritt ein Wochenkunstwerk.
                  </p>
                </div>
              </button>

            </div>

            {/* Right Interactive Simulator Column */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              
              {/* Dynamic toast alert */}
              <AnimatePresence>
                {showCelebrationToast && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute top-8 left-6 right-6 bg-gradient-brand text-black font-semibold text-xs py-3 px-4 rounded-xl text-center shadow-lg pointer-events-none z-50 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4.5 h-4.5 text-black animate-spin" />
                    <span>{activeUsp === "reality" ? "Plan optimiert! Burnout geschützt ✨" : "Haptisches Kachel-Feedback ausgelöst! Mosaik wächst 🎨"}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* iPhone 16 Pro Style Simulator container */}
              <div className="relative w-full max-w-[335px] aspect-[9/19] bg-[#0c0c0e] rounded-[52px] p-3.5 shadow-2.5xl border-[8px] border-[#1f1f25] flex flex-col overflow-hidden">
                
                {/* Notch / Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5.5 w-30 bg-[#1f1f25] rounded-b-2xl z-50 flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 bg-black rounded-full" />
                  <div className="w-10 h-1 bg-black rounded-full" />
                </div>

                {/* Subtler radial backgrounds specifically per state */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[38px]">
                  {activeUsp === "reality" && <div className="absolute top-1/4 left-1/4 w-36 h-36 rounded-full bg-brand-pink/15 blur-[25px] active-scale" />}
                  {activeUsp === "geofence" && <div className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full bg-brand-peach/15 blur-[25px]" />}
                  {activeUsp === "focus" && <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-brand-violet/15 blur-[30px]" />}
                  {activeUsp === "mosaic" && <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-brand-lavender/15 blur-[30px]" />}
                </div>

                {/* Simulated Content Frame */}
                <div className="relative z-10 flex flex-col h-full text-white font-sans text-xs pt-4 px-2">
                  
                  {/* Lock details */}
                  <div className="flex justify-between items-center text-[9px] text-zinc-500 font-mono tracking-wider pt-2 border-b border-white/[0.04] pb-2 mb-3">
                    <span>AZYR O/S V1.9</span>
                    <span className="text-emerald-400 font-bold">● ON-DEVICE SECURE</span>
                  </div>

                  {/* --------------------- USP 1 View: Reality Check --------------------- */}
                  {activeUsp === "reality" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5">
                          <CalendarDays className="w-4.5 h-4.5 text-brand-pink" />
                          <span className="font-display font-medium text-xs text-zinc-300">Tagesbilanz-Check</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-normal">
                          Lokal ausgelesene Kalenderfreiräume werden direkt mit geschätzten Taskzeiten verrechnet.
                        </p>

                        {/* Calendar Visual Blocks */}
                        <div className="bg-zinc-950/80 p-2.5 rounded-xl border border-white/5 flex flex-col gap-1.5 mt-1">
                          <div className="flex justify-between text-[8.5px] text-zinc-500 font-bold uppercase tracking-wider">
                            <span>Apple Kalender</span>
                            <span>Frei: 4 Std.</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="flex-1 bg-zinc-800 text-zinc-400 py-1.5 px-2 rounded font-mono text-[9px] leading-tight">
                              Team-Sync<br/><span className="text-[8px] opacity-60">10:00 - 12:00</span>
                            </div>
                            <div className="flex-1 bg-zinc-800 text-zinc-400 py-1.5 px-2 rounded font-mono text-[9px] leading-tight">
                              Review<br/><span className="text-[8px] opacity-60://">14:00 - 16:00</span>
                            </div>
                          </div>
                        </div>

                        {/* Tasks visually showing overlap */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[8.5px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Geplante Aufgaben</span>
                          
                          {realityTasks.map(t => (
                            <div 
                              key={t.id} 
                              className={`p-2.5 rounded-xl border flex items-center justify-between transition-all duration-500 ${
                                t.moved 
                                  ? "bg-zinc-950/30 border-white/[0.02] text-zinc-600 scale-95" 
                                  : "bg-zinc-900 border-white/5 text-zinc-200"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <Check className={`w-3.5 h-3.5 ${t.moved ? "text-zinc-600" : "text-zinc-500"}`} />
                                <span className={`text-[10.5px] ${t.moved ? "line-through" : ""}`}>{t.title}</span>
                              </div>
                              <span className="text-[9px] font-mono py-0.5 px-1 bg-zinc-800/80 rounded border border-white/5">{t.duration}h</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Warning or success visualization */}
                      <div className="mt-auto mb-2 flex flex-col gap-2">
                        {!realityOptimized ? (
                          <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl text-[9.5px] text-amber-300 leading-normal">
                            <p className="font-semibold flex items-center gap-1.5">
                              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 mt-0.5" />
                              <span>Überplanung gewarnt!</span>
                            </p>
                            <p className="mt-0.5 opacity-80 font-light">
                              Du besitzt 5h Aufgaben bei unberührten 4h Kalender-Lücken. Burnoutgefahr!
                            </p>
                          </div>
                        ) : (
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-[9.5px] text-emerald-400 leading-normal">
                            <p className="font-semibold flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Plan ausgeglichen!</span>
                            </p>
                            <p className="mt-0.5 opacity-80 font-light">
                              Landingpage-Task auf morgen verschoben. Du bleibst voll im Wohlfühlbereich.
                            </p>
                          </div>
                        )}

                        {!realityOptimized ? (
                          <button 
                            onClick={handleRealityOptimize}
                            className="bg-brand-pink text-black font-extrabold text-[10.5px] py-2 px-3 rounded-xl transition hover:opacity-90 active:scale-98 text-center cursor-pointer"
                          >
                            Tagesplan optimieren ✨
                          </button>
                        ) : (
                          <button 
                            onClick={handleResetReality}
                            className="bg-zinc-800 text-zinc-300 font-bold text-[10px] py-1.5 px-2 rounded-xl transition hover:bg-zinc-700 text-center cursor-pointer"
                          >
                            Zurücksetzen
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* --------------------- USP 2 View: Geofencing & Kontext --------------------- */}
                  {activeUsp === "geofence" && (
                    <div className="flex flex-col gap-3.5 flex-1 justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4.5 h-4.5 text-brand-peach" />
                          <span className="font-display font-medium text-xs text-zinc-300 leading-none">Kontext-Filter</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-normal">
                          Geofencing erkennt deinen Aufenthaltsort lokal und sortiert nicht relevante To-Dos unbemerkt aus.
                        </p>

                        {/* Interactive Geofence Buttons */}
                        <div className="grid grid-cols-2 gap-2 p-1 bg-black/50 border border-white/5 rounded-xl mt-1">
                          <button 
                            onClick={() => setCurrentLocation("office")}
                            className={`py-2 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                              currentLocation === "office" ? "bg-brand-peach text-black" : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <Sliders className="w-3.5 h-3.5" />
                            <span>🏢 Büro</span>
                          </button>
                          <button 
                            onClick={() => setCurrentLocation("home")}
                            className={`py-2 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                              currentLocation === "home" ? "bg-brand-peach text-black" : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <Sliders className="w-3.5 h-3.5" />
                            <span>🏠 Zuhause</span>
                          </button>
                        </div>

                        {/* Switchable Task List */}
                        <div className="flex flex-col gap-2 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                              {currentLocation === "office" ? "Lokale Liste: Büro" : "Lokale Liste: Zuhause"}
                            </span>
                            <span className="text-[9px] text-brand-peach font-bold">Radius: 50m</span>
                          </div>

                          <div className="flex flex-col gap-2" id="context-task-list">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={currentLocation}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col gap-2"
                              >
                                {(currentLocation === "office" ? officeTasks : homeTasks).map(task => (
                                  <div 
                                    key={task.id}
                                    className={`p-2.5 bg-zinc-900 border border-white/5 rounded-xl flex items-center gap-2.5 ${
                                      task.done ? "opacity-45" : ""
                                    }`}
                                  >
                                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                                      task.done ? "bg-brand-peach border-brand-peach text-black" : "border-white/20"
                                    }`}>
                                      {task.done && <Check className="w-3 h-3 stroke-[3]" />}
                                    </div>
                                    <span className={`text-[10.5px] ${task.done ? "line-through text-zinc-500" : "text-zinc-200"}`}>{task.title}</span>
                                  </div>
                                ))}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>

                      {/* Lock notice */}
                      <div className="bg-zinc-950/80 p-2.5 rounded-xl border border-white/5 text-[9px] text-zinc-400 flex items-center gap-2 mt-auto mb-2 text-center">
                        <Lock className="w-3 h-3 text-brand-peach shrink-0" />
                        <span>CoreLocation Geodaten verbleiben absolut ungestört auf deinem Hauptprozessor.</span>
                      </div>
                    </div>
                  )}

                  {/* --------------------- USP 3 View: Zen Focus Modus --------------------- */}
                  {activeUsp === "focus" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between">
                      <div className="flex flex-col gap-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <Sliders className="w-4 h-4 text-brand-violet" />
                          <span className="font-display font-medium text-xs text-zinc-300">Zen Focus-Modus</span>
                        </div>
                        <p className="text-[10px] text-zinc-400">
                          Konzentriere dich auf die wichtigste Aufgabe des Tages. Keine Ablenkungen, keine Listen.
                        </p>
                      </div>

                      {/* Timer Circular visual representation */}
                      <div className="relative my-4 flex flex-col items-center justify-center">
                        <div className="w-30 h-30 rounded-full border border-white/5 bg-zinc-950/50 flex flex-col items-center justify-center relative">
                          {/* Pulsing ring during ticking focus */}
                          {focusTimerActive && (
                            <div className="absolute inset-2 rounded-full border border-transparent border-t-brand-violet animate-spin" style={{ animationDuration: "3s" }} />
                          )}
                          <span className="font-mono text-xl font-bold tracking-tight text-zinc-100">
                            {formatTimerTime(focusTimeLeft)}
                          </span>
                          <span className="text-[8px] uppercase tracking-widest text-brand-violet mt-1">Focus</span>
                        </div>
                      </div>

                      {/* Single Primary Target Visual */}
                      <div className="bg-zinc-900 border border-brand-violet/20 p-3 rounded-2xl text-center flex flex-col gap-1 shadow-md">
                        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">DEINE EINZIGE AUFGABE</span>
                        <p className="text-[11px] font-bold text-zinc-100">Mindfulness Design Concept entwerfen</p>
                      </div>

                      {/* Control buttons */}
                      <div className="mt-auto mb-2 flex gap-2">
                        <button 
                          onClick={() => setFocusTimerActive(!focusTimerActive)}
                          className={`w-full py-2 px-3 rounded-xl font-bold text-[10.5px] text-center transition cursor-pointer active:scale-98 ${
                            focusTimerActive ? "bg-zinc-800 text-zinc-300" : "bg-brand-violet text-white shadow-lg shadow-brand-violet/10"
                          }`}
                        >
                          {focusTimerActive ? "Fokus pausieren" : "Fokus-Timer starten"}
                        </button>
                        {focusTimeLeft !== 1500 && (
                          <button 
                            onClick={() => { setFocusTimerActive(false); setFocusTimeLeft(1500); }}
                            className="bg-zinc-950/40 hover:bg-zinc-800 px-3 rounded-xl border border-white/5 text-[9.5px] cursor-pointer"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* --------------------- USP 4 View: Mosaics --------------------- */}
                  {activeUsp === "mosaic" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5">
                          <Palette className="w-4.5 h-4.5 text-brand-lavender" />
                          <span className="font-display font-medium text-xs text-zinc-300 leading-none">Visuelles Mosaic-Board</span>
                        </div>
                        <p className="text-[10px] text-zinc-400">
                          Schließe deine täglichen Pflichten ab und wandle unvollständige Absichten in wunderschöne Mosaik-Kacheln um.
                        </p>

                        {/* Interactive Grid representing mosaic */}
                        <div className="grid grid-cols-6 gap-1 bg-black/60 p-2 rounded-xl mt-1.5 border border-white/5">
                          {Array.from({ length: 36 }).map((_, idx) => (
                            <div 
                              key={idx}
                              className={`h-5 rounded-md transition-all duration-300 relative overflow-hidden ${getMosaicTileColor(idx)}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Completion Task List */}
                      <div className="flex flex-col gap-1.5 mt-2">
                        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">CHECKLISTE</span>
                        
                        <div className="flex flex-col gap-1.5">
                          {mosaicTasks.map(t => (
                            <button 
                              key={t.id}
                              onClick={() => handleToggleMosaicTask(t.id, t.matchedTile)}
                              className={`w-full p-2 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                                t.done ? "bg-zinc-950/40 border-white/[0.02] text-zinc-500" : "bg-zinc-900 border-white/5 hover:border-white/10 text-zinc-200"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                                  t.done ? "bg-brand-lavender border-brand-lavender text-black" : "border-white/20"
                                }`}>
                                  {t.done && <Check className="w-3.5 h-3.5 stroke-[3] text-black" />}
                                </div>
                                <span className={`text-[10px] leading-none ${t.done ? "line-through" : ""}`}>{t.title}</span>
                              </div>
                              <span className="text-[8.5px] font-mono opacity-50">Kachel {t.matchedTile}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Reward box */}
                      <div className="bg-zinc-950/80 p-2 px-2.5 rounded-xl border border-white/5 text-[9px] text-zinc-400 mt-2 mb-1">
                        <span className="text-brand-lavender font-extrabold uppercase tracking-wide">🧠 Reward:</span>
                        <span className="ml-1 opacity-90">Kein Streak-Zwang. Fortschritt wird zu Ästhetik.</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* THE 4 USPs CARD DETAIL BENTO GRID */}
      <section className="py-24 relative z-10" id="usps-details">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7DB2] bg-brand-pink/5 px-3.5 py-1.5 rounded-full">
              SÄULEN DER APP
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5xl tracking-tight text-white mt-4 leading-tight">
              Die 4 Säulen von Azyr.
            </h2>
            <p className="text-zinc-500 font-light text-sm sm:text-base mt-3 leading-relaxed">
              Jedes Feature von Azyr wurde entworfen, um kognitiven Ballast abzubauen. Wir machen Technologie, die nicht stört, sondern befreit.
            </p>
          </div>

          {/* Bento Grid layout with detailed 4 USPs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* USP 1 Card: Reality Check */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-pink/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-pink text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <CalendarDays className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Der Reality-Check (Kalenderanalyse)
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Azyr vergleicht geplante Tasks vorab mit deinen tatsächlichen Termin-Slots aus dem Apple Kalender. Wenn du 4 Stunden an To-Dos planst, aber nur 2 Stunden Meeting-Pause hast, warnt dich die App proaktiv. Das schützt vor unrealistischer Arbeitsbelastung und Burnout.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-pink">STRESSPREVENTION</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">CALENDAR OVERLAP</span>
              </div>
            </div>

            {/* USP 2 Card: Geofencing */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-peach/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-peach text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Geofencing & Kontext-Listen
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Durch lokales CoreLocation-Geofencing schaltet die App vollautomatisch deine relevante Tasks-Routine um. Büro-To-Dos erlöschen, sobald du dein Zuhause betrittst, und umgekehrt. Das sorgt für klaren Kopf ohne manuelle Listen-Verschiebungen.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-peach">CORELOCATION NATIVE</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">100% LOCALLY STORED</span>
              </div>
            </div>

            {/* USP 3 Card: Zen Focus Mode */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-violet/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-violet text-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <Sliders className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Zen Focus-Modus (Timer Integration)
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Ein schwebender Fokus-Button blendet die gesamte To-Do-Liste aus und zeigt nur noch die voraussichtlich wichtigste Kernaufgabe bildschirmfüllend mit einem beruhigenden, 25-minütigen Haptik-Countdowntimer an. Eliminere Multitasking gänzlich aus deinem Arbeitsalltag.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-violet">POMODORO REDEFINED</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">STILL ACTIVE</span>
              </div>
            </div>

            {/* USP 4 Card: Mosaics */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-lavender/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-lavender text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <Palette className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Mosaics (Erfolgsgestalter)
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Vergiss frustrierendes Streak-Fehlverhalten. Mit jeder geschafften Aufgabe kippt hunderprozentig geräuscharm eine Kachel um und enthüllt allmählich ein individuelles visuelles Farbkunstwerk auf deinem iPhone. Ästhetische Motivation, die dich beruhigt.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-lavender">GAMIFICATION REDEFINED</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">NO REPLAY CHAINS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRIVACY BY DESIGN: ZERO-SERVER-ARCHITEKTUR (LUXURY SECTION) */}
      <section className="py-24 bg-black border-y border-white/[0.06] relative overflow-hidden z-10" id="datenschutz">
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] pointer-events-none select-none z-0 overflow-hidden opacity-30">
          <div className="absolute top-0 right-10 w-[400px] h-[400px] rounded-full bg-brand-violet/5 filter blur-[90px] transform translate3d(0,0,0)" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-brand-peach/5 filter blur-[90px] transform translate3d(0,0,0)" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/5 text-white border border-white/10 rounded-2xl flex items-center justify-center mb-4 shadow-xl">
              <Lock className="w-6 h-6 text-brand-pink" />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-brand-pink uppercase">KOMPROMISSLOSE PRIVATSPHÄRE</span>
            <h2 className="font-display font-black text-3.5xl sm:text-5xl tracking-tight leading-tight mt-1">
              Zero-Server-Architektur.<br />
              <span className="text-gradient">Was auf dem iPhone passiert, bleibt dort.</span>
            </h2>
            <p className="text-zinc-500 font-light mt-3 max-w-xl text-center text-sm">
              Wir hosten keinen Server, tracken keine Benutzeraktivitäten und speichern keine Tasks. Deine private Produktivität geht niemanden außer dir selbst etwas an.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.08] p-8 md:p-12 rounded-[32px] backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
              
              <div className="md:col-span-7 flex flex-col gap-6 justify-between text-left">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2.5">
                    <Database className="w-5 h-5 text-brand-peach" />
                    <span>Lokal an Ort und Stelle</span>
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-xs sm:text-sm">
                    Sowohl deine Spracheingaben, dein Geofencing, als auch deine Notizen werden zu 100% lokal on-device verarbeitet. Keine Standorte, keine Cookies und keine Cloud-Tracking Scripts.
                  </p>
                </div>
                
                <div className="h-[1px] bg-white/[0.08] w-full" />
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-brand-violet" />
                    <span>Integrierter Apple iCloud Sync</span>
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-xs sm:text-sm">
                    Sämtliche Backups und der automatische Abgleich zwischen Mac, iPad und iPhone laufen unkompliziert über deine private, komplett verschlüsselte iCloud (CloudKit). Keine Drittanbieter-Registrierung nötig.
                  </p>
                </div>
              </div>

              {/* Right Graphical Locker representing security architecture */}
              <div className="md:col-span-5 bg-zinc-950/60 border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>AES_256_ACTIVE</span>
                  <span className="text-brand-pink font-bold">● CLOUDKIT SYNCED</span>
                </div>

                <div className="my-6 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center relative bg-black/40">
                    <Lock className="w-5.5 h-5.5 text-gradient animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#FF7DB2] font-bold uppercase">Zero Third Parties</span>
                </div>

                <div className="text-[9px] font-mono text-brand-violet bg-brand-violet/10 p-2 rounded-xl border border-brand-violet/20 text-center leading-normal">
                  Keine künstlichen Subscriptions für externe Cloud-KIs nötig.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION (Dark theme collapsible) */}
      <section className="py-20 md:py-28 relative z-10" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-peach bg-brand-peach/10 border border-brand-peach/20 px-3.5 py-1.5 rounded-full inline-block">
              HÄUFIGE FRAGEN
            </span>
            <h2 className="font-display font-black text-3.5xl sm:text-4xl tracking-tight text-white mt-4 leading-tight">
              Häufig gestellte Fragen (FAQ).
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isSelected = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-zinc-900/60 border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected ? "bg-zinc-900 border-white/10 scale-[1.01] shadow-2xl" : "border-white/[0.04]"
                  }`}
                >
                  <button 
                    onClick={() => setActiveFaq(isSelected ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-display font-bold text-sm sm:text-base md:text-lg focus:outline-none text-zinc-100 hover:text-brand-pink transition-all cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isSelected ? "rotate-180 text-brand-pink" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-zinc-400 font-light leading-relaxed text-xs sm:text-sm md:text-base border-t border-white/[0.04] pt-3">
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

      {/* FINAL CTA CONVERSION SECTION */}
      <section className="relative py-24 overflow-hidden z-10 border-t border-white/[0.06]" id="store-download">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-pink/10 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            
            {/* Pulsing App Icon Frame */}
            <div className="relative w-22 h-22 rounded-[25px] bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/15 shadow-2xl group mb-4">
              <img 
                src="logo.png" 
                alt="Azyr Logo" 
                className="w-full h-full object-cover" 
              />
            </div>

            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF7DB2] bg-brand-pink/10 border border-brand-pink/20 px-3.5 py-1.5 rounded-full uppercase">
              HOL DIR DIE FREIHEIT ZURÜCK
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-none">
              Produktivität, die aufatmen lässt.
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base mt-2">
              Azyr ist komplett frei von Tracking, Benutzerkonten und monatlichen Gebühren. Installiere dir deinen lokalen Begleiter noch heute kostenlos im App Store.
            </p>

            {/* Apple App Store widget */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-3.5 px-8 py-4.5 bg-white text-black font-semibold rounded-2xl w-full sm:w-auto shadow-2xl group"
              >
                <Smartphone className="w-6 h-6 text-black" />
                <div className="text-left leading-none text-black">
                  <p className="text-[9px] uppercase font-bold text-black/60 tracking-wider">Laden im App Store für</p>
                  <p className="text-lg font-black font-display mt-0.5">iPhone & iPad</p>
                </div>
              </motion.a>
            </div>

            {/* Trust markers */}
            <div className="flex flex-wrap justify-center gap-6 text-[10px] text-zinc-500 mt-8 font-mono border-t border-white/[0.08] pt-6 w-full uppercase tracking-wider font-bold">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" />Keine Subscriptions</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" />100% iCloud Backup</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" />Kein Daten-Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/[0.06] py-16 text-xs text-zinc-500 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/[0.06] pb-10 mb-10">
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <div className="relative w-6 h-6 rounded bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10">
                  <img 
                    src="logo.png" 
                    alt="Azyr Logo" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <span className="font-display font-bold text-sm text-white tracking-tight">azyr.app</span>
              </div>
              <p className="max-w-xs font-light text-zinc-500 leading-normal">
                Ein privates On-Device Produktivitätsprojekt von Dominik Kocsordi. Entwickelt für kognitive Balance und gesunden, biologisch ausgewogenen Arbeitsalltag.
              </p>
            </div>

            {/* Interactive Support Mail Button */}
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Support & Feedback</span>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition focus:outline-none cursor-pointer"
              >
                <span>hello@azyr.app</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5 font-mono">
                  {copiedEmail ? "Kopiert!" : "Kopieren"}
                </span>
              </button>
            </div>

            {/* Links group */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#" className="font-medium text-zinc-400 hover:text-white transition">Impressum</a>
              <a href="#" className="font-medium text-zinc-400 hover:text-white transition">Datenschutz</a>
              <a href="#" className="font-medium text-zinc-400 hover:text-white transition">Nutzungsbedingungen</a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
            <span>&copy; {new Date().getFullYear()} azyr.app / Dominik Kocsordi. Alle Rechte vorbehalten.</span>
            <span>Konstruiert im Einklang mit den Apple Human Interface Guidelines.</span>
          </div>
        </div>
      </footer>

      {/* EXPORT ONE-FILE HTML MODAL DIALOG */}
      <DownloadHtmlModal />

    </div>
  );
}
