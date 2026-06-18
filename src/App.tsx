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
  Zap, 
  Smartphone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Database, 
  X, 
  Layers,
  HelpCircle,
  Info
} from "lucide-react";
import DownloadHtmlModal from "./components/DownloadHtmlModal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Wie schützt mich das Guided Deck vor Stress im Alltag?",
    answer: "Indem es dich vor der sogenannten 'Analysis Paralysis' bewahrt. Anstatt dich mit einer endlosen, bedrohlichen Liste zu konfrontieren, isoliert Azyr immer nur eine einzige Aufgabe als Premium-Karte auf dem Bildschirm. Du entscheidest sofort: Jetzt erledigen (Swipe rechts) oder später anpacken (Swipe links). Keine Ablenkung, nur reine Fokussierung."
  },
  {
    question: "Warum brechen meine Mosaik-Kunstwerke nicht ab, wenn ich krank bin?",
    answer: "Weil Azyr auf stressige Streaks verzichtet. Wer krank ist, macht einfach Pause. Wenn du zurückkehrst, baust du an deinem begonnenen Mosaik-Kunstwerk weiter. Jede erledigte Aufgabe schaltet eine farbige Kachel frei. So belohnst du dich visuell ohne künstliche Verlust-Angst."
  },
  {
    question: "Läuft die Smart-Breakdown KI wirklich ohne Internetverbindung?",
    answer: "Ja, zu 100%. Azyr nutzt die lokale Apple CoreML-Technologie und die Neural Engine deines iPhones. Deine Sätze werden direkt auf dem nativen Prozessor analysiert. Wir senden keine Texte an Server, weshalb die Aufteilung auch im Flugmodus funktioniert und deine Privatsphäre absolut intakt bleibt."
  },
  {
    question: "Wie funktioniert die Synchronisation ohne eigenen Server?",
    answer: "Azyr synchronisiert deine Aufgaben direkt über Apples eigene, iCloud-basierte Erinnerungen-Schnittstelle. Es gibt keine Drittanbieter-Registrierung und keinen externen Datenbankserver. Deine Daten reisen ausschließlich verschlüsselt in deiner persönlichen iCloud-Umgebung."
  }
];

interface DeckCard {
  id: number;
  title: string;
  context: string;
  duration: string;
}

const INITIAL_DECK_CARDS: DeckCard[] = [
  { id: 1, title: "Schnittstellen-Architektur skizzieren", context: "📍 Büro-Fokus", duration: "45 Min" },
  { id: 2, title: "Apple-Review Feedback einarbeiten", context: "💻 Design", duration: "30 Min" },
  { id: 3, title: "Steuerbelege in iCloud ablegen", context: "💼 Routine", duration: "15 Min" },
  { id: 4, title: "Atemübung am Abend machen", context: "🌿 Erholung", duration: "10 Min" }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Active USP state inside Interactive Simulator
  const [activeUsp, setActiveUsp] = useState<"deck" | "mosaic" | "breakdown" | "privacy">("deck");

  // USP 1: Guided Deck Swipe simulator state
  const [deckCards, setDeckCards] = useState<DeckCard[]>(INITIAL_DECK_CARDS);
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);

  // USP 2: Mosaics visual toggles
  const [revealedTiles, setRevealedTiles] = useState<number[]>([
    0, 1, 2, 3, 5, 6, 7, 10, 12, 13, 14, 15, 18, 19, 23, 24, 25, 29, 30
  ]);
  const [showCelebrationToast, setShowCelebrationToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // USP 3: Smart Breakdown simulation
  const [isBreakingDown, setIsBreakingDown] = useState(false);
  const [breakdownComplete, setBreakdownComplete] = useState(false);
  const [breakdownSteps, setBreakdownSteps] = useState([
    { id: "b1", text: "Gliederung auf Papier kritzeln", done: false },
    { id: "b2", text: "Erste 3 Folien grob aufbauen", done: false },
    { id: "b3", text: "Zahlen und Fakten einpflegen", done: false }
  ]);

  // USP 4: Geofencing local area
  const [localLocation, setLocalLocation] = useState<"office" | "home">("office");

  // Track page scroll to style header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UI Event Handlers
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@azyr.app");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Deck Swipe triggers
  const triggerSwipe = (direction: "left" | "right") => {
    if (swipeDirection) return; // Prevent double trigger
    setSwipeDirection(direction);
    
    // Trigger consequences
    if (direction === "right") {
      // Simulate task completion: add tile to mosaic
      const randomTile = Math.floor(Math.random() * 36);
      if (!revealedTiles.includes(randomTile)) {
        setRevealedTiles(prev => [...prev, randomTile]);
      }
      setToastMessage("Haptisches Feedback: Kachel aufgedeckt! 🎨");
    } else {
      setToastMessage("Karte zurückgestellt: Später erledigen ↩");
    }

    setShowCelebrationToast(true);
    setTimeout(() => setShowCelebrationToast(false), 2500);

    setTimeout(() => {
      setCurrentDeckIndex(prev => (prev + 1) % deckCards.length);
      setSwipeDirection(null);
    }, 3000);
  };

  // Toggle Mosaic Tile manual trigger
  const handleToggleTile = (idx: number) => {
    if (revealedTiles.includes(idx)) {
      setRevealedTiles(prev => prev.filter(t => t !== idx));
    } else {
      setRevealedTiles(prev => [...prev, idx]);
      setToastMessage("Kachel platziert. Ästhetischer Fortschritt wächst.");
      setShowCelebrationToast(true);
      setTimeout(() => setShowCelebrationToast(false), 2000);
    }
  };

  // Trigger Smart Breakdown mockup loader
  const handleTriggerBreakdown = () => {
    setIsBreakingDown(true);
    setBreakdownComplete(false);
    setTimeout(() => {
      setIsBreakingDown(false);
      setBreakdownComplete(true);
      setToastMessage("Apple On-Device KI: 3 Mikroschritte erstellt ✨");
      setShowCelebrationToast(true);
      setTimeout(() => setShowCelebrationToast(false), 2000);
    }, 1800);
  };

  const handleToggleBreakdownStep = (id: string) => {
    setBreakdownSteps(prev => 
      prev.map(step => step.id === id ? { ...step, done: !step.done } : step)
    );
  };

  const getMosaicColor = (idx: number) => {
    const isRevealed = revealedTiles.includes(idx);
    if (!isRevealed) return "bg-zinc-900 border border-white/[0.03]";
    
    // Map rows to premium colors
    const row = Math.floor(idx / 6);
    if (row === 0) return "bg-brand-peach shadow-[0_0_12px_rgba(255,158,125,0.35)]";
    if (row === 1) return "bg-brand-pink shadow-[0_0_12px_rgba(255,125,178,0.35)]";
    if (row === 2) return "bg-brand-violet shadow-[0_0_12px_rgba(176,132,249,0.35)]";
    return "bg-brand-lavender shadow-[0_0_12px_rgba(194,155,255,0.35)]";
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#e4e4e7] font-sans selection:bg-brand-pink/20 selection:text-brand-pink overflow-x-hidden relative">
      
      {/* Background radial soft glows */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-violet/5 filter blur-[110px] transform translate3d(0,0,0)" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-pink/5 filter blur-[110px] transform translate3d(0,0,0)" />
      </div>

      <div className="absolute top-[110rem] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-peach/5 filter blur-[120px] transform translate3d(0,0,0)" />
        <div className="absolute top-30 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-violet/5 filter blur-[120px] transform translate3d(0,0,0)" />
      </div>

      {/* HEADER */}
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/[0.06] shadow-xl" : "bg-transparent border-b border-transparent"}`}>
        <div id="navigation-bar" className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center overflow-hidden border border-white/10 shadow-md">
              <img 
                src="logo.png" 
                alt="Azyr Logo" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-white group-hover:opacity-80 transition">azyr.app</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-full backdrop-blur-md">
            <a href="#features" className="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">Features</a>
            <a href="#datenschutz" className="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">Datenschutz</a>
            <a href="#faq" className="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">FAQ</a>
          </nav>

          <div className="flex items-center">
            <a 
              href="#store-download" 
              className="inline-flex items-center justify-center text-xs font-bold px-4.5 py-2.5 bg-white hover:bg-zinc-100 text-black rounded-full transition shadow-md"
            >
              App gratis laden
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-28 md:pb-32 z-10" id="hero-sec">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Copy */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
                <span className="text-[10px] font-bold text-gradient uppercase tracking-widest">Premium iOS-Konzept</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.05] max-w-2xl">
                Produktivität, die <span className="text-gradient">aufatmen</span> lässt.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg">
                Keine endlosen Listen, kein künstlicher Druck. Azyr lenkt deinen Fokus auf das Wesentliche – nacheinander, Karte für Karte. Vollständig privat auf deines iPhones Neural Engine verarbeitet.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
                <a 
                  href="#store-download" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black hover:bg-zinc-100 rounded-2xl transition duration-200 active:scale-98 shadow-lg"
                >
                  <Smartphone className="w-5 h-5 text-black" />
                  <div className="text-left leading-none">
                    <span className="text-[8.5px] uppercase text-black/50 tracking-wider block">Kostenlos laden</span>
                    <span className="text-base font-bold font-display mt-0.5 block">Für iOS & iPad</span>
                  </div>
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition"
                >
                  <span className="font-semibold text-sm">Features ausprobieren</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Quiet specifications metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.08] w-full max-w-xl">
                <div>
                  <span className="text-[10px] text-zinc-500 block font-mono">DATENHOHET</span>
                  <span className="text-xs font-bold text-gradient block mt-1 uppercase tracking-wider">Zero-Server</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block font-mono">LOCALE KI</span>
                  <span className="text-xs font-semibold text-zinc-300 block mt-1">100% On-Device Neural</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-zinc-500 block font-mono">SPEICHERUNG</span>
                  <span className="text-xs font-semibold text-zinc-300 block mt-1">Apple CloudKit Sync</span>
                </div>
              </div>
            </div>

            {/* Right Column (Elegant Static Phone Wireframe) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="absolute -inset-10 bg-brand-pink/5 rounded-full filter blur-[100px] pointer-events-none" />
              
              <div className="relative w-full max-w-[325px] aspect-[9/19] bg-[#070709] rounded-[48px] p-3 shadow-2xl border-[6px] border-zinc-800 flex flex-col overflow-hidden select-none">
                {/* iPhone Simulated Island Notch */}
                <div className="absolute top-0 left-1/3 right-1/3 h-5 bg-zinc-800 rounded-b-xl z-50"></div>

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
                        <span className="font-display font-medium text-xs tracking-wide text-zinc-200">Azyr Task Deck</span>
                      </div>
                    </div>
                    <span className="text-[9px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20 px-2 py-0.5 rounded-full font-bold">
                      🔥 Ruhe & Fokus
                    </span>
                  </div>

                  {/* Single Floating Card representing Guided Deck */}
                  <div className="bg-zinc-950/90 border border-white/10 p-5 rounded-3xl mt-4 relative shadow-2xl flex flex-col gap-6 justify-between flex-1 min-h-[180px] border-l-brand-pink border-l-2">
                    <div className="flex flex-col text-left">
                      <div className="flex items-center justify-between text-zinc-550 text-[9px] font-bold tracking-wider uppercase">
                        <span>Aktuelle Karte</span>
                        <span className="text-brand-pink font-mono">1 von 4</span>
                      </div>
                      <h4 className="font-display font-black text-lg text-white mt-3 leading-tight select-none">
                        Marketing-Konzept deines Premium-Launches finalisieren
                      </h4>
                      <p className="text-[10px] text-zinc-400 mt-2 flex items-center gap-1 font-light">
                        <MapPin className="w-3.5 h-3.5 text-brand-peach" />
                        <span>📍 Büro-Aktivierung</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/[0.04]">
                      <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-center text-zinc-400 text-[10px]">
                        Später ↩
                      </div>
                      <div className="p-2 rounded-xl bg-white text-black font-extrabold text-center text-[10px]">
                        Erledigt ✓
                      </div>
                    </div>
                  </div>

                  {/* Small Mosaic Tracker */}
                  <div className="bg-zinc-950/40 border border-white/5 p-3.5 rounded-2xl mb-4 mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">DEIN MOSAIC RASTER</span>
                      <span className="text-[9px] font-bold text-white/50">19 / 36</span>
                    </div>

                    <div className="grid grid-cols-6 gap-1.5 bg-black/50 p-1.5 rounded-xl border border-white/5">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`aspect-square rounded-sm ${
                            i < 19 
                              ? i % 4 === 0 
                                ? "bg-brand-peach shadow-[0_0_6px_rgba(255,158,125,0.25)]"
                                : i % 4 === 1
                                  ? "bg-brand-pink shadow-[0_0_6px_rgba(255,125,178,0.25)]"
                                  : "bg-brand-violet shadow-[0_0_6px_rgba(176,132,249,0.25)]"
                              : "bg-[#141416]"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#121215] border border-white/5 p-2 px-3 rounded-xl flex items-center justify-center gap-1.5 mb-2 text-[9px] text-zinc-500">
                    <Lock className="w-3.5 h-3.5 text-brand-pink" />
                    <span>Aufgaben laufen nativerweise über Apple</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS BAR */}
      <section className="bg-white/[0.02] border-y border-white/[0.06] py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">Kein Server</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Datenhoheit zu 100%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">0% Druck</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Keine stressigen Streaks</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">CoreML Local</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Smarter Breakdown lokaler KIs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gradient font-display font-black text-3.5xl">iCloud</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Voll verschlüsselte Sync</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE APPMOCKUP SHOWCASE */}
      <section className="py-20 md:py-28 relative z-10 bg-black/40 border-b border-white/[0.06]" id="features">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/5 px-4 py-1.5 rounded-full inline-block">
              LIVE-STEUERUNG
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5.5xl tracking-tight text-white mt-4 leading-tight">
              Erlebe kognitive Balance in Aktion.
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base md:text-lg mt-3 select-none leading-relaxed">
              Klicke links auf die vier Säulen des minimalen Arbeitens, um den interaktiven iOS-Simulator direkt im Browser gesteuert zu erleben.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Interactive Cards) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* Feature 1: Guided Deck */}
              <button 
                onClick={() => { setActiveUsp("deck"); }}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "deck" 
                    ? "bg-neutral-900/55 border-brand-pink/30 shadow-[0_0_25px_rgba(255,125,178,0.06)]" 
                    : "bg-transparent border-white/[0.03]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "deck" ? "bg-brand-pink border-brand-pink/25 text-black" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <Layers className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>1. Das Guided Deck</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Isotropischer Fokus</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Keine Textwüsten mehr. Azyr zeigt immer nur *eine* Aufgabe bildschirmfüllend als Premium-Karte an. Swipe nach rechts: Erledigt. Swipe nach links: Später. Keine Entscheidungslähmung, nur pure Aktion.
                  </p>
                </div>
              </button>

              {/* Feature 2: Mosaics */}
              <button 
                onClick={() => { setActiveUsp("mosaic"); }}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "mosaic" 
                    ? "bg-neutral-900/55 border-brand-peach/30 shadow-[0_0_25px_rgba(255,158,125,0.06)]" 
                    : "bg-transparent border-white/[0.03]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "mosaic" ? "bg-brand-peach border-brand-peach/25 text-black" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <Palette className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>2. Mosaics</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Befriedigend frei von Druck</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Keine stressigen Streaks, die bei Krankheit abreißen. Wer eine Aufgabe erledigt, dreht direkt auf der Karte eine Mosaik-Kachel um. So baust du mit jeder kleinen Tat wunderschöne, visuelle Kunstwerke auf. Ein Belohnungssystem, das Dopamin liefert, statt Druck zu machen.
                  </p>
                </div>
              </button>

              {/* Feature 3: On-Device KI */}
              <button 
                onClick={() => { setActiveUsp("breakdown"); }}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "breakdown" 
                    ? "bg-neutral-900/55 border-brand-violet/30 shadow-[0_0_25px_rgba(176,132,249,0.06)]" 
                    : "bg-transparent border-white/[0.03]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "breakdown" ? "bg-brand-violet border-brand-violet/25 text-white" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <Zap className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>3. On-Device KI & Smart Breakdown</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Lokale Intelligenz</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Überwältigt von einer großen Aufgabe? Ein Tippen, und Apples lokale KI zerschneidet den Brocken automatisch in winzige, machbare Mikroschritte. Datum und Verben werden beim Tippen intelligent erkannt – komplett ohne Cloud-Anbindung.
                  </p>
                </div>
              </button>

              {/* Feature 4: Zero-Server Privacy */}
              <button 
                onClick={() => { setActiveUsp("privacy"); }}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer hover:bg-neutral-900/30 ${
                  activeUsp === "privacy" 
                    ? "bg-neutral-900/55 border-brand-lavender/30 shadow-[0_0_25px_rgba(194,155,255,0.06)]" 
                    : "bg-transparent border-white/[0.03]"
                }`}
              >
                <div className={`w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center border transition ${
                  activeUsp === "privacy" ? "bg-brand-lavender border-brand-lavender/25 text-black" : "bg-neutral-900 border-white/5 text-zinc-400"
                }`}>
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                    <span>4. Zero-Server Privacy & Geofencing</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Verschlüsselter nativer Sync</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                    Die App läuft 100% lokal. Aufgaben synchronisieren sich über Apples eigene Erinnerungen-App. Durch lokales Geofencing weiß die App, ob du auf der Arbeit oder Zuhause bist, und schiebt automatisch die richtige Karte nach vorne. Keine Tracker.
                  </p>
                </div>
              </button>

            </div>

            {/* Right Column (Highly Responsive Phone Simulator with Vanilla-interactive transitions) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              
              {/* Floating Dynamic toast inside Simulator */}
              <AnimatePresence>
                {showCelebrationToast && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute top-8 left-6 right-6 bg-gradient-brand text-black font-semibold text-[11px] py-2.5 px-3.5 rounded-xl text-center shadow-2xl pointer-events-none z-50 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-black animate-spin" />
                    <span>{toastMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* simulated phone shell container */}
              <div id="simulated-phone-widget" className="relative w-full max-w-[335px] aspect-[9/19] bg-[#070709] rounded-[52px] p-3.5 shadow-2.5xl border-[8px] border-[#1e1e24] flex flex-col overflow-hidden">
                
                {/* Simulated Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-[#1e1e24] rounded-b-2xl z-50 flex items-center justify-between px-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <div className="w-8 h-1 bg-black rounded-full" />
                </div>

                {/* Subtler gradient lighting per active state */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[38px]">
                  {activeUsp === "deck" && <div className="absolute top-1/4 left-1/4 w-36 h-36 rounded-full bg-brand-pink/15 blur-[25px]" />}
                  {activeUsp === "mosaic" && <div className="absolute top-1/3 left-1/2 w-36 h-36 rounded-full bg-brand-peach/15 blur-[25px]" />}
                  {activeUsp === "breakdown" && <div className="absolute bottom-1/4 left-10 w-36 h-36 rounded-full bg-brand-violet/15 blur-[30px]" />}
                  {activeUsp === "privacy" && <div className="absolute top-10 right-10 w-36 h-36 rounded-full bg-brand-lavender/15 blur-[30px]" />}
                </div>

                {/* Internal UI Shell wrapper */}
                <div className="relative z-10 flex flex-col h-full text-white font-sans text-xs pt-2">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[9px] font-bold text-zinc-400 px-1.5 pt-0.5 pb-2 select-none">
                    <span>09:41</span>
                    <div className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current text-zinc-400"><path d="M2 22h20V2z"/></svg>
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-none stroke-current stroke-3 text-zinc-400"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <div className="w-4 h-2 border border-zinc-500 rounded-[2px] p-0.5 flex items-center">
                        <div className="bg-[#50c878] h-full w-full rounded-[0.5px]" />
                      </div>
                    </div>
                  </div>

                  {/* --------------------- LIVE STATE 1: Guided Deck Swipe --------------------- */}
                  {activeUsp === "deck" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between select-none">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] uppercase tracking-widest text-[#B084F9] font-bold">Guided Deck</span>
                          <span className="text-[9px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20 px-2.5 py-0.5 rounded-full font-bold">Aktiv</span>
                        </div>
                        <h3 className="font-display font-black text-2.5xl tracking-tight text-white leading-none mt-2.5">Fokus</h3>
                        <span className="text-[9px] text-zinc-500 block mt-0.5">Nacheinander abarbeiten</span>
                      </div>

                      {/* Card stacked deck effect */}
                      <div className="relative flex-1 flex items-center justify-center px-1 my-2">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentDeckIndex}
                            initial={{ scale: 0.92, opacity: 0, y: 15 }}
                            animate={{ 
                              scale: 1, 
                              opacity: 1, 
                              y: 0,
                              x: swipeDirection === "left" ? -120 : swipeDirection === "right" ? 120 : 0,
                              rotate: swipeDirection === "left" ? -8 : swipeDirection === "right" ? 8 : 0
                            }}
                            exit={{ scale: 0.92, opacity: 0, y: -15 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="w-full bg-[#111114] border border-white/10 rounded-[28px] p-5 pt-6 shadow-2xl flex flex-col justify-between aspect-[1/1.05]"
                          >
                            <div className="flex flex-col text-left">
                              <span className="text-[8.5px] uppercase font-bold tracking-widest text-brand-pink font-mono">Priorität</span>
                              <h4 className="font-display font-black text-base text-zinc-100 mt-2 leading-snug">
                                "{deckCards[currentDeckIndex].title}"
                              </h4>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.04] text-[10px] text-zinc-500 font-light">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-zinc-600" />
                                <span>{deckCards[currentDeckIndex].duration}</span>
                              </span>
                              <span className="font-semibold text-brand-peach">{deckCards[currentDeckIndex].context}</span>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        {/* Visual background cards styling under current */}
                        <div className="absolute bottom-1 left-3 right-3 h-10 bg-zinc-950/80 border border-white/[0.04] rounded-[24px] z-[-1] scale-95" />
                        <div className="absolute bottom-[-4px] left-6 right-6 h-10 bg-zinc-950/40 border border-white/[0.02] rounded-[24px] z-[-2] scale-90" />
                      </div>

                      {/* Action buttons triggers */}
                      <div className="pb-2">
                        <div className="grid grid-cols-2 gap-3">
                          <button 
                            onClick={() => triggerSwipe("left")}
                            className="bg-zinc-900/90 hover:bg-zinc-850 active:scale-97 text-zinc-300 font-bold py-3.5 rounded-2xl border border-white/5 cursor-pointer text-center text-[10px] flex items-center justify-center gap-1.5"
                          >
                            <span>Später</span>
                            <span className="opacity-40">↩</span>
                          </button>
                          <button 
                            onClick={() => triggerSwipe("right")}
                            className="bg-white hover:bg-zinc-100 active:scale-97 text-black font-extrabold py-3.5 rounded-2xl cursor-pointer text-center text-[10px] flex items-center justify-center gap-1.5 shadow-lg"
                          >
                            <span>Erledigt</span>
                            <span className="text-emerald-600">✓</span>
                          </button>
                        </div>
                        <span className="text-[8px] text-zinc-600 text-center block mt-2">Klicke zum swipen und fülle das Mosaik.</span>
                      </div>
                    </div>
                  )}

                  {/* --------------------- LIVE STATE 2: Mosaics Gamification --------------------- */}
                  {activeUsp === "mosaic" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between select-none">
                      <div className="flex flex-col pr-1 text-left">
                        <div className="flex justify-between items-center mt-1">
                          <h3 className="font-display font-black text-2xl tracking-tight text-white leading-none">Mosaike</h3>
                          <span className="text-[10px] font-bold text-zinc-500 font-mono">JUNI 2026</span>
                        </div>
                        <span className="text-[9px] text-zinc-400 mt-1">Streaks stressen. Fortschritt inspiriert.</span>
                      </div>

                      {/* Interactive click-grid for interactive entertainment */}
                      <div className="bg-[#111114]/90 border border-white/[0.04] p-3 rounded-[24px] shadow-xl my-1 flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-center border-b border-white/[0.03] pb-2 text-[9px] text-zinc-500">
                          <span>Klicke Kacheln zum Wenden</span>
                          <span className="font-bold text-zinc-300">{revealedTiles.length} von 36 gelegt</span>
                        </div>

                        {/* Interactive Grid */}
                        <div className="grid grid-cols-6 gap-1.5 p-1.5 bg-black/60 rounded-xl border border-white/[0.03] my-3">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleToggleTile(i)}
                              className={`aspect-square rounded-[3px] transition-all duration-300 cursor-pointer ${getMosaicColor(i)}`}
                            />
                          ))}
                        </div>

                        <div className="bg-zinc-950/40 p-2 text-[10px] rounded-lg border border-white/5 text-center leading-tight">
                          <span className="font-medium text-brand-peach block">Keine kaputten Streaks mehr</span>
                          <span className="text-zinc-500 text-[8.5px] mt-0.5 block">Gestalte dein visuelles Bild ohne Druck.</span>
                        </div>
                      </div>

                      <div className="pb-1 text-center">
                        <button 
                          onClick={() => setRevealedTiles([0,1,2,3,5,6,7,10,12,13,14,15,18,19,23,24,25,29,30])}
                          className="text-zinc-600 hover:text-zinc-400 text-[8.5px] font-semibold cursor-pointer underline"
                        >
                          Mosaik zurücksetzen
                        </button>
                      </div>
                    </div>
                  )}

                  {/* --------------------- LIVE STATE 3: On-Device KI breakdown --------------------- */}
                  {activeUsp === "breakdown" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between select-none text-left">
                      <div>
                        <span className="text-[9px] font-bold text-brand-violet uppercase tracking-wider font-mono">100% OFF-LINE KI</span>
                        <h3 className="font-display font-black text-2.5xl tracking-tight text-white leading-none mt-1">Smart Breakdown</h3>
                      </div>

                      <div className="bg-[#111114] border border-white/[0.05] p-4.5 rounded-[24px] flex-1 flex flex-col justify-between shadow-2xl my-1">
                        <div>
                          <div className="text-[9px] text-zinc-550 font-bold uppercase font-mono tracking-wider">Großer Brocken</div>
                          <h4 className="font-display font-black text-sm text-white mt-1 leading-snug">
                            "Marketing-Präsentation ausarbeiten"
                          </h4>
                          <span className="text-[8.5px] bg-brand-violet/15 text-brand-violet px-2 py-0.5 rounded-full font-bold inline-block mt-2">
                            Apple Neural Engine
                          </span>
                        </div>

                        {/* Interactive UI Action Area */}
                        <div className="my-3 flex-1 flex flex-col justify-center">
                          <AnimatePresence mode="wait">
                            {isBreakingDown ? (
                              <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center gap-2.5 text-center py-4"
                              >
                                <div className="w-8 h-8 rounded-full border-2 border-t-brand-violet border-r-brand-pink animate-spin" />
                                <span className="text-[9.5px] font-mono text-zinc-400">Analysiere Verben & Daten...</span>
                              </motion.div>
                            ) : breakdownComplete ? (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col gap-2 pt-2"
                              >
                                <span className="text-[8.5px] font-bold tracking-widest text-zinc-500 uppercase font-mono mb-1">Miku-Tasks:</span>
                                {breakdownSteps.map(step => (
                                  <div 
                                    key={step.id} 
                                    onClick={() => handleToggleBreakdownStep(step.id)}
                                    className="flex items-center gap-2.5 bg-black/45 p-2 rounded-xl border border-white/5 cursor-pointer hover:border-white/10 transition-colors"
                                  >
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${
                                      step.done ? "bg-brand-violet border-brand-violet text-white" : "border-zinc-700"
                                    }`}>
                                      {step.done && <Check className="w-3 h-3 text-black stroke-[3]" />}
                                    </div>
                                    <span className={`text-[10px] leading-tight transition ${step.done ? "line-through text-zinc-550" : "text-zinc-200"}`}>
                                      {step.text}
                                    </span>
                                  </div>
                                ))}
                              </motion.div>
                            ) : (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-4"
                              >
                                <p className="text-[10px] text-zinc-500 font-light leading-normal">
                                  Lass dich nicht einschüchtern. Zerlege diesen Block mit lokaler KI völlig datensicher in kleine Mikroschritte.
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Trigger button */}
                        {!isBreakingDown && !breakdownComplete && (
                          <button 
                            onClick={handleTriggerBreakdown}
                            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-95 text-white font-extrabold py-3.5 rounded-2xl cursor-pointer text-center text-[10px] flex items-center justify-center gap-1 shadow-lg shadow-pink-500/10"
                          >
                            <span>✨ Smart Breakdown</span>
                          </button>
                        )}

                        {breakdownComplete && (
                          <button 
                            onClick={() => { setBreakdownComplete(false); setBreakdownSteps(steps => steps.map(s => ({ ...s, done: false }))); }}
                            className="w-full bg-zinc-900 border border-white/5 text-zinc-400 font-bold py-2.5 rounded-xl cursor-pointer text-center text-[9px] hover:text-white transition"
                          >
                            Zurücksetzen
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* --------------------- LIVE STATE 4: Geofencing & Sync --------------------- */}
                  {activeUsp === "privacy" && (
                    <div className="flex flex-col gap-3 flex-1 justify-between select-none text-left">
                      <div>
                        <span className="text-[9px] font-bold text-brand-peach uppercase tracking-wider font-mono">Zero Server Tracker</span>
                        <h3 className="font-display font-black text-2.5xl tracking-tight text-white leading-none mt-1">Integration</h3>
                      </div>

                      <div className="bg-[#111114] border border-white/[0.04] p-3.5 rounded-[24px] flex-1 flex flex-col justify-between shadow-xl my-1 relative overflow-hidden">
                        
                        {/* Radar geofence visual */}
                        <div className="relative h-28 bg-black/60 rounded-xl overflow-hidden border border-white/[0.03] flex items-center justify-center">
                          <div className="absolute w-24 h-24 rounded-full border border-blue-500/10 animate-pulse" />
                          <div className="absolute w-16 h-16 rounded-full border border-blue-500/15" />
                          <div className="absolute w-8 h-8 rounded-full border border-blue-400/20" />
                          
                          {/* Pulsing GPS node */}
                          <div className="absolute flex flex-col items-center">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            </span>
                            <span className="text-[7.5px] text-zinc-400 font-mono mt-1 px-1.5 py-0.5 rounded bg-black/80 font-semibold border border-white/5">CORELOCATION_OFFICE</span>
                          </div>

                          <div className="absolute top-1.5 left-1.5 text-[7px] text-zinc-500 font-mono">
                            NATIVE_GEO_TRIGGERS
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 mt-2">
                          <div className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                            localLocation === "office" ? "bg-blue-500/5 border-blue-500/20 text-white" : "bg-zinc-900/40 border-white/5 opacity-55"
                          }`} onClick={() => { setLocalLocation("office"); setToastMessage("Kontext: Im Büro. Zeige geschäftliche Karten."); setShowCelebrationToast(true); setTimeout(() => setShowCelebrationToast(false), 2000); }}>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs">💼</span>
                              <span className="text-[10px] font-bold">Im Büro (Radius 150m)</span>
                            </div>
                            {localLocation === "office" && <span className="text-[7.5px] bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold">Aktiv</span>}
                          </div>

                          <div className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                            localLocation === "home" ? "bg-emerald-500/5 border-emerald-500/20 text-white" : "bg-zinc-900/40 border-white/5 opacity-55"
                          }`} onClick={() => { setLocalLocation("home"); setToastMessage("Kontext: Zurück zuhause. Zeige entspannte Karten."); setShowCelebrationToast(true); setTimeout(() => setShowCelebrationToast(false), 2000); }}>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs">🏡</span>
                              <span className="text-[10px] font-bold">Zuhause (Radius 100m)</span>
                            </div>
                            {localLocation === "home" && <span className="text-[7.5px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">Aktiv</span>}
                          </div>
                        </div>

                        <p className="text-[8.5px] text-zinc-500 leading-snug text-center pt-2 font-light">
                          Verschlüsselt über Apple Erinnerungen & iCloud. Keine Tracker, keine Server.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 3-Tab Floating Simulator Controller Menu */}
                  <div className="mt-auto mb-1 z-20 flex justify-center w-full px-0.5">
                    <div className="bg-[#121215]/90 backdrop-blur-md border border-white/[0.08] rounded-full p-1.5 w-full flex justify-between items-center shadow-xl select-none">
                      
                      {/* Tab 1: Guided Deck */}
                      <button 
                        onClick={() => { setActiveUsp("deck"); }}
                        className={`flex-1 py-1.5 px-0.5 rounded-full flex flex-col items-center gap-0.5 transition cursor-pointer ${
                          activeUsp === "deck" ? "bg-[#25252b] text-white font-extrabold" : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        <Layers className={`w-3.8 h-3.8 ${activeUsp === "deck" ? "text-[#FF8BB8]" : "text-zinc-500"}`} />
                        <span className="text-[7px]">Deck</span>
                      </button>

                      {/* Tab 2: Mosaike */}
                      <button 
                        onClick={() => { setActiveUsp("mosaic"); }}
                        className={`flex-1 py-1.5 px-0.5 rounded-full flex flex-col items-center gap-0.5 transition cursor-pointer ${
                          activeUsp === "mosaic" ? "bg-[#25252b] text-white font-extrabold" : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        <Palette className={`w-3.8 h-3.8 ${activeUsp === "mosaic" ? "text-brand-peach" : "text-zinc-500"}`} />
                        <span className="text-[7px]">Mosaike</span>
                      </button>

                      {/* Tab 3: KI Breakdown */}
                      <button 
                        onClick={() => { setActiveUsp("breakdown"); }}
                        className={`flex-1 py-1.5 px-0.5 rounded-full flex flex-col items-center gap-0.5 transition cursor-pointer ${
                          activeUsp === "breakdown" ? "bg-[#25252b] text-white font-extrabold" : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        <Zap className={`w-3.8 h-3.8 ${activeUsp === "breakdown" ? "text-brand-violet" : "text-zinc-500"}`} />
                        <span className="text-[7px]">Smart KI</span>
                      </button>

                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED FEATURES CARD BENTO GRID */}
      <section className="py-24 relative z-10" id="usps-details">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7DB2] bg-brand-pink/5 px-3.5 py-1.5 rounded-full">
              SÄULEN DER APP
            </span>
            <h2 className="font-display font-black text-3.5xl md:text-5xl tracking-tight text-white mt-4 leading-tight">
              Die 4 Säulen von Azyr.
            </h2>
            <p className="text-zinc-550 font-light text-sm sm:text-base mt-3 leading-relaxed">
              Jedes Feature von Azyr wurde entworfen, um kognitiven Ballast abzubauen. Wir machen Technologie, die nicht stört, sondern beruhigt.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Card 1: Das Guided Deck */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-pink/20 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-pink text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                  <Layers className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Das "Guided Deck" (Fokus statt Listen-Panik)
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Keine Textwüsten mehr. Azyr zeigt immer nur *eine* Aufgabe bildschirmfüllend als Premium-Karte an. Swipe nach rechts: Erledigt. Swipe nach links: Später. Keine Entscheidungslähmung, nur pure Aktion.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-pink">ZERO_DECISION_PARALYSIS</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">SINGLE_CARD_FOCUS</span>
              </div>
            </div>

            {/* Card 2: Mosaics */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-peach/20 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-peach text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                  <Palette className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Mosaics (Gamification ohne Druck)
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Keine stressigen Streaks, die bei Krankheit abreißen. Wer eine Aufgabe erledigt, dreht direkt auf der Karte eine Mosaik-Kachel um. So bauen Nutzer mit jeder kleinen Tat wunderschöne, visuelle Kunstwerke auf. Ein Belohnungssystem, das Dopamin liefert, statt Druck zu machen.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-peach">ZERO_PRESSURE_STREAKS</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">CREATIVE_PROGRESS_BOARDS</span>
              </div>
            </div>

            {/* Card 3: On-Device KI */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-violet/20 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-violet text-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                  <Zap className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  On-Device KI & Smart Breakdown
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Überwältigt von einer großen Aufgabe? Ein Tippen, und Apples lokale KI zerschneidet den Brocken automatisch in winzige, machbare Mikroschritte. Datum und Verben werden beim Tippen intelligent erkannt – komplett ohne Cloud-Anbindung.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-violet">APPLE_NEURAL_ENGINE</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">100% OFFLINE_PROCESSING</span>
              </div>
            </div>

            {/* Card 4: Zero-Server & Geofencing */}
            <div className="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-lavender/20 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-brand-lavender text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Zero-Server Privacy & Geofencing
                </h3>
                <p className="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                  Die App läuft 100% lokal. Aufgaben synchronisieren sich über Apples eigene Erinnerungen-App. Durch lokales Geofencing weiß die App, ob du auf der Arbeit oder Zuhause bist, und schiebt automatisch die richtige Karte nach vorne. Deine Daten verlassen niemals dein iPhone.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-lavender">CORELOCATION_GEOFENCES</span>
                <span className="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">LOCAL_REMINDERS_SYNC</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRIVACY BY DESIGN: ZERO-SERVER-ARCHITEKTUR */}
      <section className="py-24 bg-black border-y border-white/[0.06] relative overflow-hidden z-10" id="datenschutz">
        
        {/* Decorative canvas lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] pointer-events-none select-none z-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-10 w-[400px] h-[400px] rounded-full bg-brand-violet/5 filter blur-[90px] transform translate3d(0,0,0)" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-brand-peach/5 filter blur-[90px] transform translate3d(0,0,0)" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/5 text-white border border-white/10 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Lock className="w-6 h-6 text-brand-pink" />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-brand-pink uppercase">KOMPROMISSLOSE DATENSICHERHEIT</span>
            <h2 className="font-display font-black text-3.5xl sm:text-5xl tracking-tight leading-tight mt-1">
              Zero-Server-Architektur.<br />
              <span className="text-gradient">Was auf dem iPhone passiert, bleibt dort.</span>
            </h2>
            <p className="text-zinc-500 font-light mt-3 max-w-xl text-center text-sm">
              Wir hosten keinen Server, tracken keine Benutzeraktivitäten und speichern keine Aufgaben. Deine private Produktivität geht niemanden außer dir selbst etwas an.
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

              {/* Right graphical architectural locker representation */}
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

      {/* FAQ SECTION */}
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

      {/* FINAL CTA CONVERSION */}
      <section className="relative py-24 overflow-hidden z-10 border-t border-white/[0.06]" id="store-download">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-pink/5 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            
            {/* Custom high-contrast app icon element */}
            <div className="relative w-22 h-22 rounded-[25px] bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/15 shadow-2xl group mb-4">
              <img 
                src="logo.png" 
                alt="Azyr Logo" 
                className="w-full h-full object-cover" 
              />
            </div>

            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF7DB2] bg-brand-pink/10 border border-brand-pink/20 px-3.5 py-1.5 rounded-full uppercase">
              HOL DIR DEINE ZEIT ZURÜCK
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-none">
              Azyr für iOS herunterladen.
            </h2>
            <p className="text-zinc-455 font-light leading-relaxed text-sm sm:text-base mt-2">
              Azyr ist komplett frei von externen Trackern, Benutzerkonten und monatlichen Abogebühren. Installiere dir deinen lokalen Begleiter kostenlos auf deinem Gerät.
            </p>

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

            <div className="flex flex-wrap justify-center gap-6 text-[10px] text-zinc-500 mt-8 font-mono border-t border-white/[0.08] pt-6 w-full uppercase tracking-wider font-bold">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" />Kein Abonnement</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400 stroke-[3]" />Verschlüsselter iCloud Sync</span>
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
                <span className="font-display font-bold text-sm text-white tracking-tight">Azyr</span>
              </div>
              <p className="max-w-xs font-light text-zinc-600 leading-normal">
                Ein privates On-Device Produktivitätsprojekt von Dominik Kocsordi. Entwickelt für kognitive Balance und einen stressfreien Arbeitsalltag.
              </p>
            </div>

            {/* Support button click and clipboard capture */}
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

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#" className="font-medium text-zinc-400 hover:text-white transition">Impressum</a>
              <a href="#" className="font-medium text-zinc-400 hover:text-white transition">Datenschutz</a>
              <a href="#" className="font-medium text-zinc-400 hover:text-white transition">Nutzungsbedingungen</a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-650">
            <span>&copy; {new Date().getFullYear()} azyr.app / Dominik Kocsordi. Alle Rechte vorbehalten.</span>
            <span>Konstruiert im Einklang mit den Apple Human Interface Guidelines.</span>
          </div>
        </div>
      </footer>

      {/* FLOATING EXPORT TRIGGER */}
      <DownloadHtmlModal />

    </div>
  );
}
