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
    setTimeout(() => setCopiedEmail(false), 2050);
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
                  href="#usps-details" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition"
                >
                  <span className="font-semibold text-sm">Features ansehen</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Quiet specifications metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.08] w-full max-w-xl">
                <div>
                  <span className="text-[10px] text-zinc-500 block font-mono">DATENHOHEIT</span>
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

            {/* Right Column (Elegant Static Phone Wireframe with Image background) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="absolute -inset-10 bg-brand-pink/5 rounded-full filter blur-[100px] pointer-events-none" />
              
              <div className="relative w-full max-w-[325px] aspect-[9/19] bg-[#070709] rounded-[48px] p-2.5 shadow-2.5xl border-[6px] border-zinc-800 flex flex-col overflow-hidden select-none">
                {/* iPhone Simulated Island Notch */}
                <div className="absolute top-0 left-1/3 right-1/3 h-5 bg-zinc-800 rounded-b-xl z-50"></div>

                {/* Simulated Screen Body */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#000000]">
                  <img 
                    src="IMG_8669.PNG" 
                    onError={(e) => {
                      if (e.currentTarget.src.includes('IMG_8669.PNG')) {
                        e.currentTarget.src = "IMG_8669.png";
                      } else if (e.currentTarget.src.includes('IMG_8669.png')) {
                        e.currentTarget.src = "logo.png";
                      }
                    }}
                    alt="Azyr App Screenshot" 
                    className="w-full h-full object-cover rounded-[38px]" 
                    referrerPolicy="no-referrer"
                  />
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

      {/* DETAILED FEATURES CARD BENTO GRID */}
      <section className="py-24 relative z-10 bg-black/30 border-b border-white/[0.06]" id="features">
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
