import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Flame, Zap, Compass, Battery, RefreshCw, Calendar, Sparkles, Sliders, ChevronRight, Lock } from "lucide-react";

interface Task {
  id: string;
  titleDE: string;
  titleEN: string;
  category: "high" | "low" | "routine";
  time: string;
  done: boolean;
}

const INITIAL_TASKS: Task[] = [
  { id: "1", titleDE: "Konzept für Next-Gen UI erstellen", titleEN: "Design next-gen UI concept", category: "high", time: "09:00 - 11:30", done: false },
  { id: "2", titleDE: "Code Refactoring & Unit Tests", titleEN: "Code refactoring & unit tests", category: "high", time: "11:30 - 13:00", done: false },
  { id: "3", titleDE: "E-Mails & Admin-Aufgaben", titleEN: "Reply to emails & admin tasks", category: "low", time: "14:00 - 14:45", done: true },
  { id: "4", titleDE: "Design-Feedback einpflegen", titleEN: "Integrate typography feedback", category: "low", time: "15:00 - 15:45", done: false },
  { id: "5", titleDE: "30 min Bewegung & Stretching", titleEN: "30 min movement & stretching", category: "routine", time: "17:00 - 17:30", done: true },
  { id: "6", titleDE: "Azyr Habit-Log führen", titleEN: "Log habits on Azyr calendar", category: "routine", time: "21:30 - 21:40", done: false },
];

export default function InteractiveAppMockup() {
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const [activeTab, setActiveTab] = useState<"today" | "mosaic" | "energy">("today");
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [selectedEnergyFilter, setSelectedEnergyFilter] = useState<"all" | "high" | "low" | "routine">("all");
  const [streakCount, setStreakCount] = useState(12);
  const [mosaicFilledCount, setMosaicFilledCount] = useState(14);
  const [showCelebration, setShowCelebration] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id === id) {
          const updatedDone = !t.done;
          if (updatedDone) {
            setStreakCount(s => s + 1);
            setMosaicFilledCount(m => m + 1);
            // Show confetti/celebration burst
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 2000);
          } else {
            setStreakCount(s => Math.max(12, s - 1));
            setMosaicFilledCount(m => Math.max(14, m - 1));
          }
          return { ...t, done: updatedDone };
        }
        return t;
      })
    );
  };

  // Grid pattern coordinates for rainbow gradient mockup
  // The colors map Peach -> Pink -> Purple -> Lavender
  const getGridColor = (index: number) => {
    const isFilled = index < mosaicFilledCount;
    if (!isFilled) return "bg-gray-100 dark:bg-zinc-800/60";
    
    // Gradient coloring according to rows
    const row = Math.floor(index / 6);
    if (row === 0) return "bg-brand-peach";
    if (row === 1) return "bg-brand-pink";
    if (row === 2) return "bg-brand-violet";
    return "bg-brand-lavender";
  };

  const filteredTasks = tasks.filter(t => {
    if (selectedEnergyFilter === "all") return true;
    return t.category === selectedEnergyFilter;
  });

  return (
    <div id="interactive-simulator" className="relative mx-auto max-w-[360px] w-full aspect-[9/19] bg-[#0c0c0e] rounded-[55px] p-3.5 shadow-2xl border-[10px] border-[#1e1e24] flex flex-col overflow-hidden select-none">
      
      {/* Notch / Dynamic Island simulation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#1e1e24] rounded-b-2xl z-50 flex items-center justify-between px-3">
        <div className="w-2.5 h-2.5 bg-[#09090b] rounded-full"></div>
        <div className="w-12 h-1 bg-[#09090b] rounded-full"></div>
      </div>

      {/* Background glow in the simulated phone screen */}
      <div className="absolute inset-0 bg-[#0c0c0e] z-0 overflow-hidden rounded-[42px]">
        <div className="absolute -top-24 -left-20 w-48 h-48 rounded-full bg-brand-peach/10 blur-[40px] pointer-events-none"></div>
        <div className="absolute top-48 -right-20 w-48 h-48 rounded-full bg-brand-pink/10 blur-[40px] pointer-events-none"></div>
        <div className="absolute bottom-20 -left-24 w-52 h-52 rounded-full bg-brand-violet/15 blur-[50px] pointer-events-none"></div>
      </div>

      {/* Simulated Device content */}
      <div className="relative z-10 flex flex-col h-full text-white font-sans text-sm mt-3 pt-2">
        
        {/* Status Bar info */}
        <div className="flex justify-between items-center px-4 mb-3 text-[11px] font-semibold tracking-tight text-white/50">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 3.1zM12 21c4.97 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61L12 20.9z"/></svg>
            <Battery className="w-3.5 h-3.5 text-white/60" />
          </div>
        </div>

        {/* Dynamic Interactive Language Selector & Control bar inside simulation */}
        <div className="flex justify-between items-center px-4 py-1.5 bg-white/5 rounded-full mx-2 mb-2 border border-white/5">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] text-white/60 font-mono tracking-wider">AZYR O/S V1.2</span>
          </div>
          <div className="flex bg-white/10 rounded-lg p-0.5" id="simulation-lang-toggle">
            <button 
              onClick={() => setLang("DE")} 
              className={`text-[9px] font-bold px-2 py-0.5 rounded transition ${lang === "DE" ? "bg-white text-black" : "text-white/70"}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLang("EN")} 
              className={`text-[9px] font-bold px-2 py-0.5 rounded transition ${lang === "EN" ? "bg-white text-black" : "text-white/70"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Header App Menu */}
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Elegant 3D Arc Logo inside simulator */}
            <div className="relative w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10">
              <div className="w-6 h-6 rounded-full border-4 border-t-brand-peach border-r-brand-pink border-b-brand-violet border-l-brand-lavender animate-spin" style={{ animationDuration: "12s" }}></div>
              <div className="absolute inset-1.5 bg-neutral-950 rounded-lg flex items-center justify-center">
                <span className="text-[10px] font-bold text-gradient font-display">A</span>
              </div>
            </div>
            <div>
              <h4 className="font-display font-medium text-xs text-white/50 leading-none">Your Space</h4>
              <h3 className="font-display font-bold text-base bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Azyr</h3>
            </div>
          </div>

          {/* Interactive Streak Counter */}
          <div className="flex items-center gap-1 bg-gradient-to-r from-brand-peach/10 to-brand-pink/10 border border-brand-pink/20 px-2.5 py-1 rounded-full">
            <Flame className="w-3.5 h-3.5 text-brand-pink animate-pulse" />
            <span className="text-xs font-bold text-brand-pink">{streakCount}d</span>
          </div>
        </div>

        {/* Navigation Tabs in App View */}
        <div className="flex justify-around border-b border-white/5 mt-2 px-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`text-xs pb-2 font-medium relative transition ${activeTab === "today" ? "text-white" : "text-white/40"}`}
          >
            {lang === "DE" ? "Heute" : "Today"}
            {activeTab === "today" && (
              <motion.div layoutId="app-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("mosaic")}
            className={`text-xs pb-2 font-medium relative transition ${activeTab === "mosaic" ? "text-white" : "text-white/40"}`}
          >
            {lang === "DE" ? "Mosaik" : "Mosaic"}
            {activeTab === "mosaic" && (
              <motion.div layoutId="app-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("energy")}
            className={`text-xs pb-2 font-medium relative transition ${activeTab === "energy" ? "text-white" : "text-white/40"}`}
          >
            {lang === "DE" ? "Rhythmus" : "Focus"}
            {activeTab === "energy" && (
              <motion.div layoutId="app-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-full" />
            )}
          </button>
        </div>

        {/* Celebration Particle banner */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-28 left-4 right-4 bg-gradient-brand p-2 rounded-xl text-center shadow-lg pointer-events-none z-30"
            >
              <div className="flex items-center justify-center gap-1 text-black font-extrabold text-[10px] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>{lang === "DE" ? "Mosaik vergrößert!" : "Mosaic Unveiled!"}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Workspace Views */}
        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col relative z-10" style={{ scrollbarWidth: "none" }}>
          
          {activeTab === "today" && (
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between text-[11px] text-white/50 bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-brand-peach" />
                  <span>{lang === "DE" ? "Sync mit Kalender aktiv" : "iCloud Calendar Sync connected"}</span>
                </div>
                <span className="font-bold text-[10px] text-emerald-400">100%</span>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-xs tracking-wide text-white/40 flex items-center justify-between">
                  <span>{lang === "DE" ? "PLANER & HABITS" : "PLANNER & HABITS"}</span>
                  <span className="text-[10px] text-brand-pink">{tasks.filter(t => t.done).length}/{tasks.length} {lang === "DE" ? "erledigt" : "done"}</span>
                </h4>

                <div className="flex flex-col gap-2">
                  <AnimatePresence mode="popLayout">
                    {tasks.map((task) => (
                      <motion.div 
                        key={task.id}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        onClick={() => toggleTask(task.id)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                          task.done 
                          ? "bg-white/5 border-white/5 text-white/40" 
                          : "bg-[#16161b] border-white/10 text-white hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4.5 h-4.5 rounded-md flex items-center justify-center transition-all ${
                            task.done 
                              ? "bg-gradient-brand text-black" 
                              : "border border-white/30"
                          }`}>
                            {task.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <span className={`text-[12px] font-medium leading-tight ${task.done ? "line-through text-white/30" : "text-white"}`}>
                              {lang === "DE" ? task.titleDE : task.titleEN}
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              {task.category === "high" && <Zap className="w-2.5 h-2.5 text-brand-pink fill-current" />}
                              {task.category === "low" && <Battery className="w-2.5 h-2.5 text-brand-peach" />}
                              {task.category === "routine" && <RefreshCw className="w-2.5 h-2.5 text-brand-lavender animate-spin" style={{ animationDuration: "14s" }} />}
                              <span className="text-[9px] text-white/40 font-mono">{task.time}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Tap hint */}
              <div className="text-center text-[10px] text-white/30 py-1.5 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-peach animate-pulse" />
                <span>{lang === "DE" ? "Klicke To-Dos, um Mosaik freizuschalten!" : "Tap tasks to unlock more Mosaic tiles!"}</span>
              </div>
            </div>
          )}

          {activeTab === "mosaic" && (
            <div className="flex flex-col gap-3 flex-1 justify-between">
              
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-brand-pink" />
                    <span className="font-display font-bold text-xs uppercase tracking-wide">{lang === "DE" ? "Dein Fortschritt-Raster" : "Your Focus Grid"}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-violet">{mosaicFilledCount} / 36 {lang === "DE" ? "Kacheln" : "Tiles"}</span>
                </div>
                
                {/* 6x6 Mosaic tracking layout */}
                <div className="grid grid-cols-6 gap-2 bg-[#0c0c0e] p-2.5 rounded-xl border border-white/5 select-none" id="mosaic-grid">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{ scale: i < mosaicFilledCount ? [0.8, 1.05, 1] : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`h-7.5 rounded-md flex items-center justify-center transition-all duration-500 relative overflow-hidden ${getGridColor(i)}`}
                    >
                      {i < mosaicFilledCount && (
                        <div className="absolute inset-0 bg-white/10 mix-blend-overlay animate-pulse"></div>
                      )}
                      
                      {/* Highlight key milestones on the mosaic */}
                      {i === 5 && (
                        <Sparkles className={`w-3.5 h-3.5 ${i < mosaicFilledCount ? "text-white" : "text-white/20"}`} />
                      )}
                      {i === 11 && (
                        <Flame className={`w-3.5 h-3.5 ${i < mosaicFilledCount ? "text-white" : "text-white/20"}`} />
                      )}
                      {i === 23 && (
                        <Zap className={`w-3.5 h-3.5 ${i < mosaicFilledCount ? "text-white" : "text-white/20"}`} />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Psychology tip unlocked box */}
              <div className="bg-gradient-to-r from-brand-violet/10 to-brand-lavender/10 border border-brand-violet/20 p-3 rounded-2xl">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-violet animate-spin" style={{ animationDuration: "12s" }} />
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-brand-lavender">{lang === "DE" ? "TIPP FREIGESCHALTET" : "COGNITIVE PILL"}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-white/80">
                  {lang === "DE" 
                    ? "Der Zeigarnik-Effekt: Unvollständige Aufgaben erzeugen kognitive Spannung. Das visuelle Raster befriedigt dein Gehirn sofort!"
                    : "The Zeigarnik Effect: Incomplete loops drain energy. Satisfy your visual reward pathway with responsive Mosaic cells."
                  }
                </p>
                <div className="mt-2 text-[9px] font-mono text-white/40 flex items-center justify-between">
                  <span>Level 1 unlocked</span>
                  <span className="text-brand-pink font-semibold">12.06.2026</span>
                </div>
              </div>

            </div>
          )}

          {activeTab === "energy" && (
            <div className="flex flex-col gap-3 flex-1">
              
              <div className="bg-white/5 border border-white/5 p-2 rounded-2xl">
                <p className="text-[11px] text-white/70 leading-relaxed text-center">
                  {lang === "DE"
                    ? "Azyr plant Tasks nicht starr nach Uhrzeit, sondern matcht die Aufgabe mit deiner natürlichen Fokus-Kurve."
                    : "Azyr syncs flexible task pools with your biological peaks to maximize productivity without exhausting your mind."
                  }
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex gap-1.5 py-1 z-10" id="simulation-filter-pills">
                {(["all", "high", "low", "routine"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedEnergyFilter(filter)}
                    className={`text-[9px] font-bold px-2 py-1.5 rounded-full border transition-all uppercase tracking-wider ${
                      selectedEnergyFilter === filter
                        ? "bg-white border-white text-black"
                        : "bg-[#121216] border-white/10 text-white/60 hover:text-white"
                    }`}
                  >
                    {filter === "all" && (lang === "DE" ? "Alle" : "All")}
                    {filter === "high" && "⚡ High"}
                    {filter === "low" && "🔋 Low"}
                    {filter === "routine" && "🔄 Routine"}
                  </button>
                ))}
              </div>

              {/* Filtered task results inside view */}
              <div className="flex flex-col gap-1.5">
                <AnimatePresence mode="popLayout">
                  {filteredTasks.map((t) => (
                    <motion.div
                      key={t.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-2 bg-[#141419] border border-white/5 rounded-xl flex justify-between items-center"
                    >
                      <div>
                        <h5 className="text-[11px] font-bold">{lang === "DE" ? t.titleDE : t.titleEN}</h5>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            t.category === "high" ? "bg-brand-pink/20 text-brand-pink" : 
                            t.category === "low" ? "bg-brand-peach/20 text-brand-peach" : 
                            "bg-brand-lavender/20 text-brand-lavender"
                          }`}>
                            {t.category === "high" ? "High Focus" : t.category === "low" ? "Low Focus" : "Routine"}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-white/40">{t.time.split(" - ")[0]}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          )}

        </div>

        {/* Lock Banner representing free Trial / App Store transition */}
        <div className="bg-[#1a1a24] p-2.5 rounded-2xl mx-3 mb-3 border border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-neutral-800 flex items-center justify-center">
              <Lock className="w-3.5 h-3.5 text-brand-peach" />
            </div>
            <div>
              <p className="font-bold leading-none">{lang === "DE" ? "Kostenlos starten" : "Start your trial"}</p>
              <p className="text-[9px] text-white/50">{lang === "DE" ? "Keine Registrierung erforderlich" : "No registered account needed"}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-white/40" />
        </div>

      </div>
    </div>
  );
}
