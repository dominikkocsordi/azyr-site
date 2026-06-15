import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Copy, Check, FileCode, Sparkles, X, ChevronRight, Laptop } from "lucide-react";
import { LANDING_PAGE_HTML_TEMPLATE } from "./landingPageHtmlTemplate";

export default function DownloadHtmlModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Hide developer export button in production built environments & custom/live domains
  const isProd = window.location.hostname === "azyr.app" || 
                 window.location.hostname.endsWith(".github.io") || 
                 (import.meta as any).env?.PROD;

  if (isProd) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LANDING_PAGE_HTML_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([LANDING_PAGE_HTML_TEMPLATE], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "azyr-landingpage.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <>
      {/* Floating Call-to-Download Banner */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2.5 px-5 py-3.5 bg-gradient-brand text-black rounded-full shadow-2xl font-semibold text-sm cursor-pointer border border-white/20 hover:shadow-brand-pink/20 transition-all"
        >
          <FileCode className="w-4 h-4 text-black animate-pulse" />
          <span>Als 1-File HTML exportieren</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100 overflow-hidden flex flex-col gap-6"
            >
              {/* Colorful gradient border indicator */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-950 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-neutral-900">
                    Sicherung der One-Page Datei
                  </h3>
                  <p className="text-sm text-neutral-500 font-light mt-0.5">
                    Lade die komplette, eigenständige Landingpage herunter, um sie lokal im Browser zu öffnen oder sofort online zu stellen.
                  </p>
                </div>
              </div>

              {/* Description items */}
              <div className="flex flex-col gap-3 bg-neutral-50 p-4.5 rounded-2xl border border-neutral-100">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-light">
                    <strong>100% Eigenständig:</strong> Beinhaltet alle HTML5-Strukturen, Tailwind-Klassen, responsive Raster und Icons.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-light">
                    <strong>Interaktiver Mockup-Simulator:</strong> Das iOS iPhone Widget läuft über Vanilla JavaScript vollkommen funktionsfähig!
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-light">
                    <strong>Ladezeit-optimiert:</strong> Integrierte CSS-Glows, weiche Schatten, responsive Interaktivität und Apple-Stil Weißraum.
                  </p>
                </div>
              </div>

              {/* Primary Dual Actions inside modal */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-2">
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-2xl shadow-lg transition duration-200 cursor-pointer"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      <span>Heruntergeladen!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>HTML-Datei laden</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4.5 bg-white hover:bg-neutral-50 text-neutral-850 font-bold rounded-2xl border border-neutral-300 transition duration-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span>Code kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Code kopieren</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bottom tag */}
              <div className="text-center font-mono text-[9px] text-neutral-400 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-pink" />
                <span>EXPORT_READY • NO_EXTERNAL_DEPENDENCIES_REQUIRED</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
