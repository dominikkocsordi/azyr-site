export const LANDING_PAGE_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>azyr.app — Produktivität, die aufatmen lässt.</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            peach: '#FF9E7D',
                            pink: '#FF7DB2',
                            violet: '#B084F9',
                            lavender: '#C29BFF',
                        }
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #030303;
            color: #e4e4e7;
            overflow-x: hidden;
        }
        .font-display {
            font-family: 'Outfit', sans-serif;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
        .text-gradient {
            background: linear-gradient(135deg, #FF9E7D 10%, #FF7DB2 50%, #B084F9 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
        }
        .bg-gradient-brand {
            background: linear-gradient(135deg, #FF9E7D 0%, #FF7DB2 50%, #B084F9 100%);
        }
        
        .glass-panel-dark {
            background: rgba(18, 18, 22, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8);
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            will-change: transform;
        }
        
        .glow-blob {
            filter: blur(90px);
            -webkit-filter: blur(90px);
            opacity: 0.15;
            pointer-events: none;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            will-change: transform, filter;
        }
    </style>
</head>
<body class="selection:bg-brand-pink/20 selection:text-brand-pink">

    <!-- Glowing background highlights -->
    <div class="absolute top-[8%] left-1/4 w-96 h-96 glow-blob bg-brand-violet rounded-full"></div>
    <div class="absolute top-[12%] right-1/4 w-96 h-96 glow-blob bg-brand-pink rounded-full"></div>
    <div class="absolute top-[50%] left-1/3 w-[30rem] h-[30rem] glow-blob bg-brand-peach rounded-full"></div>

    <!-- HEADER / NAVIGATION -->
    <header class="sticky top-0 z-50 transition-all duration-300 w-full bg-black/75 backdrop-blur-md border-b border-white/[0.06]" id="site-header">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" class="flex items-center gap-3 group">
                <div class="relative w-8.5 h-8.5 rounded-xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                    <img src="logo.png" alt="Azyr Logo" class="w-full h-full object-cover">
                </div>
                <span class="font-display font-medium text-lg tracking-tight hover:opacity-85 text-white transition">azyr.app</span>
            </a>
            
            <nav class="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/5 px-2 py-1.5 rounded-full shadow-sm">
                <a href="#features" class="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">Features</a>
                <a href="#privacy" class="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">Datenschutz</a>
                <a href="#faq" class="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">FAQ</a>
            </nav>

            <div class="flex items-center">
                <a href="#download" class="inline-flex items-center justify-center text-xs font-bold px-4.5 py-2.5 bg-white text-black hover:bg-zinc-100 rounded-full transition">
                    App gratis laden
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative pt-12 pb-20 md:pt-20 md:pb-32">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <!-- Hero Left: Copy & CTA -->
                <div class="lg:col-span-7 flex flex-col items-start gap-6 text-left">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.06] border border-white/[0.08] rounded-full">
                        <i class="fa-solid fa-sparkles text-brand-pink animate-pulse text-xs"></i>
                        <span class="text-[10px] font-bold text-gradient uppercase tracking-wider">Premium iOS-Konzept</span>
                    </div>

                    <h1 class="font-display font-black text-4xl sm:text-5xl md:text-6.5xl tracking-tight text-white leading-[1.05] max-w-2xl">
                        Produktivität, die <span class="text-gradient">aufatmen</span> lässt.
                    </h1>

                    <p class="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                        Keine endlosen Listen, kein künstlicher Druck. Azyr lenkt deinen Fokus auf das Wesentliche – nacheinander, Karte für Karte. Vollständig privat auf deines iPhones Neural Engine verarbeitet.
                    </p>

                    <!-- Download Buttons -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
                        <a href="#download" class="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black rounded-2xl hover:bg-zinc-100 transition shadow-xl active:scale-98">
                            <i class="fa-brands fa-apple text-xl"></i>
                            <div class="text-left leading-none">
                                <p class="text-[9px] uppercase text-black/50 tracking-wider">Download für</p>
                                <p class="text-base font-bold font-display mt-0.5">Apple iOS</p>
                            </div>
                        </a>
                        <a href="#features" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition">
                            <span class="text-sm font-semibold">Features ausprobieren</span>
                            <i class="fa-solid fa-arrow-right text-xs text-zinc-400"></i>
                        </a>
                    </div>

                    <!-- Visual badges -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.08] w-full max-w-xl">
                        <div>
                            <span class="text-[10px] text-zinc-500 block font-mono">DABENHOHET</span>
                            <span class="text-xs font-bold text-gradient block mt-1 uppercase tracking-wider">Zero-Server</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-zinc-500 block font-mono">LOCALE KI</span>
                            <span class="text-xs font-bold text-zinc-300 block mt-1">100% On-Device Neural</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-zinc-500 block font-mono">SPEICHERUNG</span>
                            <span class="text-xs font-bold text-zinc-300 block mt-1">Apple CloudKit Sync</span>
                        </div>
                    </div>
                </div>

                <!-- Hero Right: Static Mockup -->
                <div class="lg:col-span-5 flex justify-center items-center relative">
                    <div class="absolute -inset-10 bg-brand-pink/5 rounded-full filter blur-2xl pointer-events-none"></div>
                    
                    <div class="relative w-full max-w-[325px] aspect-[9/19] bg-[#09090b] rounded-[48px] p-2.5 shadow-2xl border-[6px] border-zinc-800 flex flex-col overflow-hidden select-none">
                        <!-- Notch -->
                        <div class="absolute top-0 left-1/3 right-1/3 h-5 bg-zinc-800 rounded-b-xl z-50"></div>
                        
                        <!-- Simulated Screen Body -->
                        <div class="relative w-full h-full rounded-[38px] overflow-hidden bg-[#000000]">
                            <img src="IMG_8669.PNG" onerror="if (this.src.includes('IMG_8669.PNG')) { this.src = 'IMG_8669.png'; } else if (this.src.includes('IMG_8669.png')) { this.src = 'logo.png'; }" alt="Azyr App Screenshot" class="w-full h-full object-cover rounded-[38px]" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- QUICK STATS BAR -->
    <section class="bg-white/[0.02] border-y border-white/[0.06] py-10 relative z-10">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="flex flex-col items-center">
                    <span class="text-gradient font-display font-black text-3xl sm:text-3.5xl">Kein Server</span>
                    <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Datenhoheit zu 100%</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-gradient font-display font-black text-3xl sm:text-3.5xl">0% Druck</span>
                    <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Keine stressigen Streaks</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-gradient font-display font-black text-3xl sm:text-3.5xl">CoreML Local</span>
                    <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Smarter Breakdown lokaler KIs</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-gradient font-display font-black text-3xl sm:text-3.5xl">iCloud</span>
                    <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">Voll verschlüsselte Sync</span>
                </div>
            </div>
        </div>
    </section>

    <!-- INTERACTIVE APPMOCKUP SHOWCASE -->
    <section class="py-20 md:py-28 relative z-10 bg-black/40 border-b border-white/[0.06]" id="features">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-[10px] font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/5 px-4 py-1.5 rounded-full inline-block">
                    LIVE-STEUERUNG
                </span>
                <h2 class="font-display font-black text-3xl sm:text-4xl md:text-5.5xl tracking-tight text-white mt-4 leading-tight">
                    Erlebe kognitive Balance in Aktion.
                </h2>
                <p class="text-zinc-400 font-light text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
                    Klicke links auf die vier Säulen des minimalen Arbeitens, um den interaktiven iOS-Simulator direkt im Browser gesteuert zu erleben.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Control Cards -->
                <div class="lg:col-span-7 flex flex-col gap-4">
                    
                    <button id="feat-btn-deck" onclick="selectUsp('deck')" class="text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer bg-neutral-900/55 border-brand-pink/30 shadow-[0_0_25px_rgba(255,125,178,0.06)]">
                        <div class="w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center border bg-brand-pink border-brand-pink/25 text-black">
                            <i class="fa-solid fa-layer-group text-lg"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                                <span>1. Das Guided Deck</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Isotropischer Fokus</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                                Keine Textwüsten mehr. Azyr zeigt immer nur *eine* Aufgabe bildschirmfüllend als Premium-Karte an. Swipe nach rechts: Erledigt. Swipe nach links: Später. Keine Entscheidungslähmung, nur pure Aktion.
                            </p>
                        </div>
                    </button>

                    <button id="feat-btn-mosaic" onclick="selectUsp('mosaic')" class="text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer bg-transparent border-white/[0.03]">
                        <div class="w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center border bg-neutral-900 border-white/5 text-zinc-400">
                            <i class="fa-solid fa-palette text-lg"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                                <span>2. Mosaics</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Befriedigend frei von Druck</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                                Keine stressigen Streaks, die bei Krankheit abreißen. Wer eine Aufgabe erledigt, dreht direkt auf der Karte eine Mosaik-Kachel um. So baust du mit jeder kleinen Tat wunderschöne, visuelle Kunstwerke auf. Ein Belohnungssystem, das Dopamin liefert, statt Druck zu machen.
                            </p>
                        </div>
                    </button>

                    <button id="feat-btn-breakdown" onclick="selectUsp('breakdown')" class="text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer bg-transparent border-white/[0.03]">
                        <div class="w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center border bg-neutral-900 border-white/5 text-zinc-400">
                            <i class="fa-solid fa-bolt text-lg"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                                <span>3. On-Device KI & Smart Breakdown</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Lokale Intelligenz</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                                Überwältigt von einer großen Aufgabe? Ein Tippen, und Apples lokale KI zerschneidet den Brocken automatisch in winzige, machbare Mikroschritte. Datum und Verben werden beim Tippen intelligent erkannt – komplett ohne Cloud-Anbindung.
                            </p>
                        </div>
                    </button>

                    <button id="feat-btn-privacy" onclick="selectUsp('privacy')" class="text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer bg-transparent border-white/[0.03]">
                        <div class="w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center border bg-neutral-900 border-white/5 text-zinc-400">
                            <i class="fa-solid fa-map-pin text-lg"></i>
                        </div>
                        <div>
                            <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-2">
                                <span>4. Zero-Server Privacy & Geofencing</span>
                                <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono font-medium">Verschlüsselter nativer Sync</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-xs sm:text-sm mt-1.5 leading-normal">
                                Die App läuft 100% lokal. Aufgaben synchronisieren sich über Apples eigene Erinnerungen-App. Durch lokales Geofencing weiß die App, ob du auf der Arbeit oder Zuhause bist, und schiebt automatisch die richtige Karte nach vorne. Keine Tracker.
                            </p>
                        </div>
                    </button>

                </div>

                <!-- Right Simulator Widget -->
                <div class="lg:col-span-5 flex justify-center items-center relative">
                    
                    <!-- Sim Toast Alert -->
                    <div id="sim-toast" class="hidden absolute top-8 left-6 right-6 bg-gradient-brand text-black font-semibold text-[11px] py-2.5 px-3.5 rounded-xl text-center shadow-2xl z-50 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-sparkles animate-spin text-black"></i>
                        <span id="sim-toast-text">Haptisches Feedback ausgelöst!</span>
                    </div>

                    <!-- Simulator shell -->
                    <div class="relative w-full max-w-[330px] aspect-[9/19] bg-[#070709] rounded-[52px] p-3.5 shadow-2.5xl border-[8px] border-[#1e1e24] flex flex-col overflow-hidden">
                        
                        <!-- Notch -->
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-[#1e1e24] rounded-b-2xl z-50 flex items-center justify-between px-3">
                          <div class="w-2 h-2 bg-black rounded-full"></div>
                          <div class="w-8 h-1 bg-black rounded-full"></div>
                        </div>

                        <!-- Content wrapper -->
                        <div class="relative z-10 flex flex-col h-full text-white font-sans text-xs pt-2">
                            
                            <!-- iOS status panel -->
                            <div class="flex justify-between items-center text-[9px] font-bold text-zinc-400 px-1.5 pt-0.5 pb-2">
                                <span>09:41</span>
                                <div class="flex items-center gap-1">
                                    <i class="fa-solid fa-signal text-zinc-400 text-[8px]"></i>
                                    <i class="fa-solid fa-wifi text-zinc-400 text-[8px]"></i>
                                    <div class="w-4 h-2 border border-zinc-500 rounded-[2.5px] p-0.5 flex items-center">
                                        <div class="bg-emerald-500 h-full w-full rounded-[0.5px]"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- SCREEN 1: Guided Deck -->
                            <div id="sim-screen-deck" class="flex flex-col gap-3 flex-1 justify-between">
                                <div class="flex flex-col text-left">
                                    <div class="flex justify-between items-center mt-1">
                                        <span class="text-[10px] uppercase tracking-widest text-[#B084F9] font-bold font-mono">Guided Deck</span>
                                        <span class="text-[9px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20 px-2 rounded-full font-bold">Aktiv</span>
                                    </div>
                                    <h3 class="font-display font-black text-2.5xl tracking-tight text-white leading-none mt-2">Fokus</h3>
                                    <span class="text-[9px] text-zinc-500 mt-0.5">Eine Aufgabe nach der anderen</span>
                                </div>

                                <div class="relative flex-1 flex items-center justify-center px-1 my-2">
                                    <div id="deck-card-elm" class="w-full bg-[#111114] border border-white/10 rounded-[28px] p-5 pt-6 shadow-2xl flex flex-col justify-between aspect-[1/1.05] transition-all duration-300">
                                        <div class="flex flex-col text-left">
                                            <span class="text-[8.5px] uppercase font-bold tracking-widest text-brand-pink font-mono">Priorität</span>
                                            <h4 id="deck-card-title" class="font-display font-black text-sm text-zinc-100 mt-2 leading-snug">
                                                "Schnittstellen-Architektur aufskizzieren"
                                            </h4>
                                        </div>
                                        <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.04] text-[10px] text-zinc-500 font-light">
                                            <span class="flex items-center gap-1">
                                                <i class="fa-regular fa-clock text-zinc-600"></i>
                                                <span id="deck-card-time">45 Min</span>
                                            </span>
                                            <span id="deck-card-ctx" class="font-semibold text-brand-peach">📍 Büro-Fokus</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="grid grid-cols-2 gap-3 pb-2">
                                        <button onclick="swipeDeck('left')" class="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold py-3 rounded-2xl border border-white/5 cursor-pointer text-center text-[10px] flex items-center justify-center gap-1.5">
                                            <span>Später</span><span class="opacity-40">↩</span>
                                        </button>
                                        <button onclick="swipeDeck('right')" class="bg-white hover:bg-zinc-100 text-black font-extrabold py-3 rounded-2xl cursor-pointer text-center text-[10px] flex items-center justify-center gap-1.5 shadow-lg">
                                            <span>Erledigt</span><span class="text-emerald-600 font-bold">✓</span>
                                        </button>
                                    </div>
                                    <span class="text-[8px] text-zinc-600 text-center block mb-2">Klicke zum swipen und fülle das Mosaik.</span>
                                </div>
                            </div>

                            <!-- SCREEN 2: Mosaics -->
                            <div id="sim-screen-mosaic" class="hidden flex flex-col gap-3 flex-1 justify-between">
                                <div class="flex flex-col text-left">
                                    <div class="flex justify-between items-center mt-1">
                                        <h3 class="font-display font-black text-2xl tracking-tight text-white leading-none">Mosaike</h3>
                                        <span class="text-[10px] font-bold text-zinc-500 font-mono">JUNI 2026</span>
                                    </div>
                                    <span class="text-[9px] text-zinc-400 mt-1">Streaks stressen. Fortschritt inspiriert.</span>
                                </div>

                                <div class="bg-[#111114] border border-white/[0.04] p-3 rounded-[24px] shadow-xl my-1 flex-1 flex flex-col justify-between">
                                    <div class="flex justify-between items-center border-b border-white/[0.03] pb-2 text-[9px] text-zinc-500">
                                        <span>Tippe Kacheln zum Wenden</span>
                                        <span id="mosaic-count-label" class="font-bold text-zinc-300">19 von 36 gelegt</span>
                                    </div>

                                    <div id="mosaic-grid-container" class="grid grid-cols-6 gap-1.5 p-1.5 bg-black/65 rounded-xl border border-white/[0.03] my-3">
                                        <!-- Will populate dynamically -->
                                    </div>

                                    <div class="bg-zinc-950/40 p-2 text-[10px] rounded-lg border border-white/5 text-center leading-tight">
                                        <span class="font-medium text-brand-peach block">Keine kaputten Streaks</span>
                                        <span class="text-zinc-500 text-[8.5px] mt-0.5 block">Kreative Fortschritte ohne Druck.</span>
                                    </div>
                                </div>

                                <div class="pb-1 text-center">
                                    <button onclick="resetMosaicHtml()" class="text-zinc-600 hover:text-zinc-400 text-[8.5px] font-semibold underline cursor-pointer">Mosaik zurücksetzen</button>
                                </div>
                            </div>

                            <!-- SCREEN 3: Smart Breakdown -->
                            <div id="sim-screen-breakdown" class="hidden flex flex-col gap-3 flex-1 justify-between text-left">
                                <div>
                                    <span class="text-[9px] font-bold text-brand-violet uppercase tracking-wider font-mono">100% OFF-LINE KI</span>
                                    <h3 class="font-display font-black text-2.5xl tracking-tight text-[#e4e4e7] leading-none mt-1">Smart Breakdown</h3>
                                </div>

                                <div class="bg-[#111114] border border-white/[0.05] p-4 rounded-[24px] flex-1 flex flex-col justify-between shadow-2xl my-1">
                                    <div>
                                        <div class="text-[9px] text-zinc-550 font-bold uppercase font-mono tracking-wider">Aufgabe:</div>
                                        <h4 class="font-display font-black text-sm text-white mt-1 leading-snug">
                                            "Marketing-Präsentation ausarbeiten"
                                        </h4>
                                        <span class="text-[8.5px] bg-brand-violet/15 text-brand-violet px-2 py-0.5 rounded-full font-bold inline-block mt-2">
                                            Local Intel Engine
                                        </span>
                                    </div>

                                    <div id="is-breaking-container" class="my-3 flex-1 flex flex-col justify-center">
                                        <p class="text-[10px] text-zinc-500 text-center leading-normal font-light">
                                            Zerlege diesen Block mit lokaler KI völlig datensicher in kleine Mikroschritte.
                                        </p>
                                    </div>

                                    <button id="breakdown-action-btn" onclick="triggerBreakdownHtml()" class="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-extrabold py-3.5 rounded-2xl cursor-pointer text-center text-[10px] flex items-center justify-center gap-1 shadow-lg">
                                        <span>✨ Smart Breakdown</span>
                                    </button>
                                </div>
                            </div>

                            <!-- SCREEN 4: Privacy & Geofence -->
                            <div id="sim-screen-privacy" class="hidden flex flex-col gap-3 flex-1 justify-between text-left">
                                <div>
                                    <span class="text-[9px] font-bold text-brand-peach uppercase tracking-wider font-mono">Zero Server Tracker</span>
                                    <h3 class="font-display font-black text-2.5xl tracking-tight text-white leading-none mt-1">Integration</h3>
                                </div>

                                <div class="bg-[#111114] border border-white/[0.04] p-3.5 rounded-[24px] flex-1 flex flex-col justify-between shadow-xl my-1">
                                    <div class="relative h-28 bg-black/60 rounded-xl overflow-hidden border border-white/[0.03] flex items-center justify-center">
                                        <div class="absolute w-24 h-24 rounded-full border border-blue-500/10 animate-pulse"></div>
                                        <div class="absolute w-16 h-16 rounded-full border border-blue-500/15"></div>
                                        
                                        <div class="absolute flex flex-col items-center">
                                            <span class="relative flex h-2 w-2">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                            </span>
                                            <span class="text-[7.5px] text-zinc-400 font-mono mt-1 px-1 py-0.2 bg-black border border-white/5 rounded font-semibold">CORELOCATION_OFFICE</span>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-1.5 mt-2">
                                        <div id="ctx-office-card" onclick="setSimLoc('office')" class="p-2 rounded-xl border border-blue-500/20 bg-blue-500/5 text-white flex items-center justify-between cursor-pointer">
                                            <div class="flex items-center gap-1.5">
                                                <span>💼</span>
                                                <span class="text-[10px] font-bold">Im Büro (150m)</span>
                                            </div>
                                            <span class="text-[7.5px] bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold">Aktiv</span>
                                        </div>

                                        <div id="ctx-home-card" onclick="setSimLoc('home')" class="p-2 rounded-xl border border-white/5 bg-zinc-900/40 text-white flex items-center justify-between cursor-pointer opacity-55">
                                            <div class="flex items-center gap-1.5">
                                                <span>🏡</span>
                                                <span class="text-[10px] font-bold">Zuhause (100m)</span>
                                            </div>
                                            <span id="label-home-ctx" class="hidden text-[7.5px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">Aktiv</span>
                                        </div>
                                    </div>

                                    <p class="text-[8.5px] text-zinc-500 leading-snug text-center pt-2">
                                        Apple iCloud Sync & Erinnerungen. Keine Cloud Tracker.
                                    </p>
                                </div>
                            </div>

                            <!-- MENU ACCENT BAR -->
                            <div class="mt-auto mb-1 z-20 flex justify-center w-full px-0.5">
                                <div class="bg-[#121215]/90 backdrop-blur-md border border-white/[0.08] rounded-full p-1.5 w-full flex justify-between items-center shadow-xl">
                                    
                                    <button onclick="selectUsp('deck')" id="bar-tab-deck" class="flex-1 py-1 px-0.5 rounded-full flex flex-col items-center gap-0.5 bg-[#25252b] text-white font-extrabold cursor-pointer">
                                        <i class="fa-solid fa-layer-group text-[#FF8BB8] text-[9px]"></i>
                                        <span class="text-[7px]">Deck</span>
                                    </button>

                                    <button onclick="selectUsp('mosaic')" id="bar-tab-mosaic" class="flex-1 py-1 px-0.5 rounded-full flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300 cursor-pointer">
                                        <i class="fa-solid fa-palette text-[9px]"></i>
                                        <span class="text-[7px]">Mosaike</span>
                                    </button>

                                    <button onclick="selectUsp('breakdown')" id="bar-tab-breakdown" class="flex-1 py-1 px-0.5 rounded-full flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300 cursor-pointer">
                                        <i class="fa-solid fa-bolt text-[9px]"></i>
                                        <span class="text-[7px]">Smart KI</span>
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- DETAILED FEATURES CARD BENTO GRID -->
    <section class="py-24 relative z-10" id="usps-details">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7DB2] bg-brand-pink/5 px-3.5 py-1.5 rounded-full">
                    SÄULEN DER APP
                </span>
                <h2 class="font-display font-black text-3.5xl md:text-5xl tracking-tight text-white mt-4 leading-tight">
                    Die 4 Säulen von Azyr.
                </h2>
                <p class="text-zinc-500 font-light text-sm sm:text-base mt-3 leading-relaxed">
                    Jedes Feature von Azyr wurde entworfen, um kognitiven Ballast abzubauen. Wir machen Technologie, die nicht stört, sondern beruhigt.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                <!-- Card 1: Das Guided Deck -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-pink/20 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-pink text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                            <i class="fa-solid fa-layer-group text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">
                            Das "Guided Deck" (Fokus statt Listen-Panik)
                        </h3>
                        <p class="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                            Keine Textwüsten mehr. Azyr zeigt immer nur *eine* Aufgabe bildschirmfüllend als Premium-Karte an. Swipe nach rechts: Erledigt. Swipe nach links: Später. Keine Entscheidungslähmung, nur pure Aktion.
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-pink font-semibold">ZERO_DECISION_PARALYSIS</span>
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">SINGLE_CARD_FOCUS</span>
                    </div>
                </div>

                <!-- Card 2: Mosaics -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-peach/20 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-peach text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                            <i class="fa-solid fa-palette text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">
                            Mosaics (Gamification ohne Druck)
                        </h3>
                        <p class="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                            Keine stressigen Streaks, die bei Krankheit abreißen. Wer eine Aufgabe erledigt, dreht direkt auf der Karte eine Mosaik-Kachel um. So bauen Nutzer mit jeder kleinen Tat wunderschöne, visuelle Kunstwerke auf. Ein Belohnungssystem, das Dopamin liefert, statt Druck zu machen.
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-peach font-semibold">ZERO_PRESSURE_STREAKS</span>
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400">CREATIVE_PROGRESS_BOARDS</span>
                    </div>
                </div>

                <!-- Card 3: On-Device KI -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-violet/20 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-violet text-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                            <i class="fa-solid fa-bolt text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">
                            On-Device KI & Smart Breakdown
                        </h3>
                        <p class="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                            Überwältigt von einer großen Aufgabe? Ein Tippen, und Apples lokale KI zerschneidet den Brocken automatisch in winzige, machbare Mikroschritte. Datum und Verben werden beim Tippen intelligent erkannt – komplett ohne Cloud-Anbindung.
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-violet font-semibold">APPLE_NEURAL_ENGINE</span>
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 font-semibold">100% OFFLINE_PROCESSING</span>
                    </div>
                </div>

                <!-- Card 4: Zero-Server & Geofencing -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden group hover:border-brand-lavender/20 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-lavender text-black rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition">
                            <i class="fa-solid fa-map-pin text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">
                            Zero-Server Privacy & Geofencing
                        </h3>
                        <p class="text-zinc-400 font-light mt-3 text-xs sm:text-sm leading-relaxed">
                            Die App läuft 100% lokal. Aufgaben synchronisieren sich über Apples eigene Erinnerungen-App. Durch lokales Geofencing weiß die App, ob du auf der Arbeit oder Zuhause bist, und schiebt automatisch die richtige Karte nach vorne. Deine Daten verlassen niemals dein iPhone.
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-6 border-t border-white/[0.05] pt-4">
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-lavender font-semibold">CORELOCATION_GEOFENCES</span>
                        <span class="text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 font-semibold">LOCAL_REMINDERS_SYNC</span>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- PRIVACY BY DESIGN: ZERO-SERVER-ARCHITEKTUR -->
    <section class="py-24 bg-black border-y border-white/[0.06] relative overflow-hidden z-10" id="privacy">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16 flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-white/5 text-white border border-white/10 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <i class="fa-solid fa-lock text-brand-pink text-lg"></i>
                </div>
                <span class="text-xs font-mono font-bold tracking-wider text-brand-pink uppercase">KOMPROMISSLOSE DATENSICHERHEIT</span>
                <h2 class="font-display font-black text-3.5xl sm:text-5xl tracking-tight leading-tight mt-1">
                    Zero-Server-Architektur.<br>
                    <span class="text-gradient">Was auf dem iPhone passiert, bleibt dort.</span>
                </h2>
                <p class="text-zinc-550 font-light mt-3 max-w-xl text-center text-sm">
                    Wir hosten keinen Server, tracken keine Benutzeraktivitäten und speichern keine Aufgaben. Deine private Produktivität geht niemanden außer dir selbst etwas an.
                </p>
            </div>

            <div class="bg-white/[0.02] border border-white/[0.08] p-8 md:p-12 rounded-[32px] backdrop-blur-xl">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
                  
                    <div class="md:col-span-7 flex flex-col gap-6 justify-between text-left">
                        <div class="flex flex-col gap-3">
                            <h3 class="font-display font-semibold text-lg text-white flex items-center gap-2.5">
                                <i class="fa-solid fa-database text-brand-peach"></i>
                                <span>Lokal an Ort und Stelle</span>
                            </h3>
                            <p class="text-zinc-400 font-light leading-relaxed text-xs sm:text-sm">
                                Sowohl deine Spracheingaben, dein Geofencing, als auch deine Notizen werden zu 100% lokal on-device verarbeitet. Keine Standorte, keine Cookies und keine Cloud-Tracking Scripts.
                            </p>
                        </div>
                        
                        <div class="h-[1px] bg-white/[0.08] w-full"></div>
                        
                        <div class="flex flex-col gap-3">
                            <h3 class="font-display font-semibold text-lg text-white flex items-center gap-2.5">
                                <i class="fa-solid fa-shield-halved text-brand-violet"></i>
                                <span>Integrierter Apple iCloud Sync</span>
                            </h3>
                            <p class="text-zinc-400 font-light leading-relaxed text-xs sm:text-sm">
                                Sämtliche Backups und der automatische Abgleich zwischen Mac, iPad und iPhone laufen unkompliziert über deine private, komplett verschlüsselte iCloud (CloudKit). Keine Drittanbieter-Registrierung nötig.
                            </p>
                        </div>
                    </div>

                    <!-- Right graphics -->
                    <div class="md:col-span-5 bg-zinc-950/60 border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                        <div class="flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                            <span>AES_256_ACTIVE</span>
                            <span class="text-brand-pink font-bold">● CLOUDKIT SYNCED</span>
                        </div>

                        <div class="my-6 flex flex-col items-center justify-center gap-3">
                            <div class="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center relative bg-black/40">
                                <i class="fa-solid fa-lock text-gradient text-lg animate-pulse"></i>
                            </div>
                            <span class="text-[10px] font-mono tracking-widest text-[#FF7DB2] font-bold uppercase">Zero Third Parties</span>
                        </div>

                        <div class="text-[9px] font-mono text-brand-violet bg-brand-violet/10 p-2 rounded-xl border border-brand-violet/20 text-center leading-normal">
                            Keine künstlichen Subscriptions für externe Cloud-KIs nötig.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="py-20 md:py-28 relative z-10" id="faq">
        <div class="max-w-4xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-[10px] font-bold uppercase tracking-widest text-brand-peach bg-brand-peach/10 border border-brand-peach/20 px-3.5 py-1.5 rounded-full inline-block">
                    HÄUFIGE FRAGEN
                </span>
                <h2 class="font-display font-black text-3.5xl sm:text-4xl tracking-tight text-white mt-4 leading-tight">
                    Häufig gestellte Fragen (FAQ).
                </h2>
            </div>

            <div class="flex flex-col gap-4">
                
                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaqIndex(0)" class="w-full text-left px-6 py-5 flex justify-between items-center font-display font-bold text-sm sm:text-base md:text-lg text-zinc-100 hover:text-brand-pink transition cursor-pointer">
                        <span>Wie schützt mich das Guided Deck vor Stress im Alltag?</span>
                        <i id="faq-chevron-0" class="fa-solid fa-chevron-down text-zinc-500 text-sm transition"></i>
                    </button>
                    <div id="faq-ans-0" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-xs sm:text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Indem es dich vor der sogenannten 'Analysis Paralysis' bewahrt. Anstatt dich mit einer endlosen, bedrohlichen Liste zu konfrontieren, isoliert Azyr immer nur eine einzige Aufgabe als Premium-Karte auf dem Bildschirm. Du entscheidest sofort: Jetzt erledigen (Swipe rechts) oder später anpacken (Swipe links). Keine Ablenkung, nur reine Fokussierung.
                    </div>
                </div>

                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaqIndex(1)" class="w-full text-left px-6 py-5 flex justify-between items-center font-display font-bold text-sm sm:text-base md:text-lg text-zinc-100 hover:text-brand-pink transition cursor-pointer">
                        <span>Warum brechen meine Mosaik-Kunstwerke nicht ab, wenn ich krank bin?</span>
                        <i id="faq-chevron-1" class="fa-solid fa-chevron-down text-zinc-500 text-sm transition"></i>
                    </button>
                    <div id="faq-ans-1" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-xs sm:text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Weil Azyr auf stressige Streaks verzichtet. Wer krank ist, macht einfach Pause. Wenn du zurückkehrst, baust du an deinem begonnenen Mosaik-Kunstwerk weiter. Jede erledigte Aufgabe schaltet eine farbige Kachel frei. So belohnst du dich visuell ohne künstliche Verlust-Angst.
                    </div>
                </div>

                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaqIndex(2)" class="w-full text-left px-6 py-5 flex justify-between items-center font-display font-bold text-sm sm:text-base md:text-lg text-zinc-100 hover:text-brand-pink transition cursor-pointer">
                        <span>Läuft die Smart-Breakdown KI wirklich ohne Internetverbindung?</span>
                        <i id="faq-chevron-2" class="fa-solid fa-chevron-down text-zinc-500 text-sm transition"></i>
                    </button>
                    <div id="faq-ans-2" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-xs sm:text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Ja, zu 100%. Azyr nutzt die lokale Apple CoreML-Technologie und die Neural Engine deines iPhones. Deine Sätze werden direkt auf dem nativen Prozessor analysiert. Wir senden keine Texte an Server, weshalb die Aufteilung auch im Flugmodus funktioniert und deine Privatsphäre absolut intakt bleibt.
                    </div>
                </div>

                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaqIndex(3)" class="w-full text-left px-6 py-5 flex justify-between items-center font-display font-bold text-sm sm:text-base md:text-lg text-zinc-100 hover:text-brand-pink transition cursor-pointer">
                        <span>Wie funktioniert die Synchronisation ohne eigenen Server?</span>
                        <i id="faq-chevron-3" class="fa-solid fa-chevron-down text-zinc-500 text-sm transition"></i>
                    </button>
                    <div id="faq-ans-3" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-xs sm:text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Azyr synchronisiert deine Aufgaben direkt über Apples eigene, iCloud-basierte Erinnerungen-Schnittstelle. Es gibt keine Drittanbieter-Registrierung und keinen externen Datenbankserver. Deine Daten reisen ausschließlich verschlüsselt in deiner persönlichen iCloud-Umgebung.
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- STORE DOWNLOAD CTA -->
    <section class="py-24 relative overflow-hidden z-10 border-t border-white/[0.06]" id="download">
        <div class="absolute inset-0 bg-black"></div>
        <div class="absolute -top-48 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-pink/5 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div class="max-w-2xl mx-auto flex flex-col items-center gap-6">
                
                <div class="relative w-22 h-22 rounded-[25px] bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/15 shadow-2xl group mb-4">
                    <img src="logo.png" alt="Azyr Logo" class="w-full h-full object-cover">
                </div>

                <span class="text-[10px] font-mono font-bold tracking-widest text-[#FF7DB2] bg-brand-pink/10 border border-brand-pink/20 px-3.5 py-1.5 rounded-full uppercase">
                    HOL DIR DEINE ZEIT ZURÜCK
                </span>
                <h2 class="font-display font-black text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-none">
                    Azyr für iOS herunterladen.
                </h2>
                <p class="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
                    Azyr ist komplett frei von externen Trackern, Benutzerkonten und monatlichen Abogebühren. Installiere dir deinen lokalen Begleiter kostenlos auf deinem Gerät.
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center">
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer noopener" class="inline-flex items-center justify-center gap-3.5 px-8 py-4.5 bg-white text-black font-semibold rounded-2xl w-full sm:w-auto shadow-2xl transition hover:scale-[1.02] active:scale-[0.98]">
                        <i class="fa-brands fa-apple text-2xl"></i>
                        <div class="text-left leading-none text-black">
                            <p class="text-[9px] uppercase font-bold text-black/60 tracking-wider">Laden im App Store für</p>
                            <p class="text-lg font-black font-display mt-0.5">iPhone & iPad</p>
                        </div>
                    </a>
                </div>

                <div class="flex flex-wrap justify-center gap-6 text-[10px] text-zinc-500 mt-8 border-t border-white/[0.08] pt-6 w-full font-mono uppercase tracking-wider font-bold">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-400"></i> Kein Abonnement</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-400"></i> Verschlüsselter iCloud Sync</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-400"></i> Kein Daten-Tracking</span>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-black border-t border-white/[0.06] py-16 text-xs text-zinc-500 relative z-10">
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/[0.06] pb-10 mb-10">
                
                <div class="flex flex-col gap-3 text-left">
                    <div class="flex items-center gap-2.5">
                        <div class="relative w-6 h-6 rounded bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10">
                            <img src="logo.png" alt="Azyr Logo" class="w-full h-full object-cover">
                        </div>
                        <span class="font-display font-bold text-sm text-white tracking-tight">Azyr</span>
                    </div>
                    <p class="max-w-xs font-light text-zinc-600 leading-normal">
                        Ein privates On-Device Produktivitätsprojekt von Dominik Kocsordi. Entwickelt für kognitive Balance und einen stressfreien Arbeitsalltag.
                    </p>
                </div>

                <div class="flex flex-col gap-2 text-left">
                    <span class="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Support & Feedback</span>
                    <button onclick="navigator.clipboard.writeText('hello@azyr.app'); alert('hello@azyr.app kopiert!');" class="flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition focus:outline-none cursor-pointer">
                        <span>hello@azyr.app</span>
                        <span class="text-[9px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5 font-mono">
                            Kopieren
                        </span>
                    </button>
                </div>

                <div class="flex flex-wrap gap-x-8 gap-y-3">
                    <a href="#" class="font-medium text-zinc-400 hover:text-white transition">Impressum</a>
                    <a href="#" class="font-medium text-zinc-400 hover:text-white transition">Datenschutz</a>
                    <a href="#" class="font-medium text-zinc-400 hover:text-white transition">Nutzungsbedingungen</a>
                </div>

            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
                <span>&copy; <span id="current-year">2026</span> azyr.app / Dominik Kocsordi. Alle Rechte vorbehalten.</span>
                <span>Konstruiert im Einklang mit den Apple Human Interface Guidelines.</span>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE SIMULATOR SCRIPT LOGIC -->
    <script>
        document.getElementById('current-year').innerText = new Date().getFullYear();

        // State Machine
        let activeUspKey = 'deck';
        let deckIndex = 0;
        let swipeInAction = false;
        let revealedTiles = [0, 1, 2, 3, 5, 6, 7, 10, 12, 13, 14, 15, 18, 19, 23, 24, 25, 29, 30];
        let breakingDownState = 0; // 0: Init, 1: Loading, 2: Done
        let currentLoc = 'office';

        const DECK_CARDS = [
            { title: "Schnittstellen-Architektur aufskizzieren", time: "45 Min", context: "📍 Büro-Fokus" },
            { title: "Apple-Review Feedback einarbeiten", time: "30 Min", context: "💻 Design" },
            { title: "Steuerbelege in iCloud ablegen", time: "15 Min", context: "💼 Routine" },
            { title: "Atemübung am Abend machen", time: "10 Min", context: "🌿 Erholung" }
        ];

        // 1. Selector logic
        function selectUsp(key) {
            activeUspKey = key;
            
            // Toggle Active tabs content
            ['deck', 'mosaic', 'breakdown', 'privacy'].forEach(k => {
                const screen = document.getElementById('sim-screen-' + k);
                const tabBtn = document.getElementById('bar-tab-' + k);
                const sideBtn = document.getElementById('feat-btn-' + k);
                
                if (k === key) {
                    if (screen) screen.classList.remove('hidden');
                    if (tabBtn) tabBtn.className = "flex-1 py-1 px-0.5 rounded-full flex flex-col items-center gap-0.5 bg-[#25252b] text-white font-extrabold cursor-pointer";
                    if (sideBtn) sideBtn.className = "text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer bg-neutral-900/55 border-brand-pink/30 shadow-[0_0_25px_rgba(255,125,178,0.06)]";
                } else {
                    if (screen) screen.classList.add('hidden');
                    if (tabBtn) tabBtn.className = "flex-1 py-1 px-0.5 rounded-full flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300 cursor-pointer";
                    if (sideBtn) sideBtn.className = "text-left p-6 rounded-2xl transition-all duration-300 border text-white flex gap-5 items-start cursor-pointer bg-transparent border-white/[0.03]";
                }
            });

            if (key === 'mosaic') {
                renderMosaicGridHtml();
            }
        }

        // 2. Deck Swiping
        function swipeDeck(direction) {
            if (swipeInAction) return;
            swipeInAction = true;

            const card = document.getElementById('deck-card-elm');
            
            if (direction === 'left') {
                card.style.transform = 'translateX(-120px) rotate(-8deg)';
                card.style.opacity = '0';
                triggerSimToast("Karte zurückgestellt: Später erledigen ↩");
            } else {
                card.style.transform = 'translateX(120px) rotate(8deg)';
                card.style.opacity = '0';
                
                // Add mosaic tile completion
                const rand = Math.floor(Math.random() * 36);
                if (!revealedTiles.includes(rand)) revealedTiles.push(rand);
                
                triggerSimToast("Haptisches Feedback: Kachel aufgedeckt! 🎨");
            }

            setTimeout(() => {
                deckIndex = (deckIndex + 1) % DECK_CARDS.length;
                document.getElementById('deck-card-title').innerText = '"' + DECK_CARDS[deckIndex].title + '"';
                document.getElementById('deck-card-time').innerText = DECK_CARDS[deckIndex].time;
                document.getElementById('deck-card-ctx').innerText = DECK_CARDS[deckIndex].context;
                
                card.style.transform = 'scale(0.9) translateY(15px)';
                
                setTimeout(() => {
                    card.style.transform = 'scale(1) translateY(0px)';
                    card.style.opacity = '1';
                    swipeInAction = false;
                }, 150);
            }, 600);
        }

        // 3. Mosaic Visual builder inside simulator
        function renderMosaicGridHtml() {
            const grid = document.getElementById('mosaic-grid-container');
            const countLabel = document.getElementById('mosaic-count-label');
            countLabel.innerText = revealedTiles.length + " von 36 gelegt";

            let output = '';
            for (let i = 0; i < 36; i++) {
                const isRevealed = revealedTiles.includes(i);
                let tileColor = "bg-[#141416] border border-white/[0.02]";
                if (isRevealed) {
                    const row = Math.floor(i / 6);
                    if (row === 0) tileColor = "bg-[#FF9E7D] shadow-[0_0_8px_rgba(255,158,125,0.25)]";
                    else if (row === 1) tileColor = "bg-[#FF7DB2] shadow-[0_0_8px_rgba(255,125,178,0.25)]";
                    else if (row === 2) tileColor = "bg-[#B084F9] shadow-[0_0_8px_rgba(176,132,249,0.25)]";
                    else tileColor = "bg-[#C29BFF] shadow-[0_0_8px_rgba(194,155,255,0.25)]";
                }
                output += '<div onclick="toggleTileHtml(' + i + ')" class="aspect-square rounded-sm cursor-pointer transition-all duration-350 ' + tileColor + '"></div>';
            }
            grid.innerHTML = output;
        }

        function toggleTileHtml(idx) {
            if (revealedTiles.includes(idx)) {
                revealedTiles = revealedTiles.filter(t => t !== idx);
            } else {
                revealedTiles.push(idx);
                triggerSimToast("Kachel platziert. Ästhetischer Fortschritt wächst.");
            }
            renderMosaicGridHtml();
        }

        function resetMosaicHtml() {
            revealedTiles = [0, 1, 2, 3, 5, 6, 7, 10, 12, 13, 14, 15, 18, 19, 23, 24, 25, 29, 30];
            renderMosaicGridHtml();
        }

        // 4. Smart Breakdown HTML Animation Emulation
        function triggerBreakdownHtml() {
            const container = document.getElementById('is-breaking-container');
            const actionBtn = document.getElementById('breakdown-action-btn');

            container.innerHTML = '<div class="flex flex-col items-center justify-center gap-2 text-center py-4">' +
                '<div class="w-8 h-8 rounded-full border-2 border-t-[#B084F9] border-r-[#FF7DB2] animate-spin"></div>' +
                '<span class="text-[9px] font-mono text-zinc-400">Analysiere Verben & Daten...</span>' +
                '</div>';
            
            actionBtn.style.display = 'none';

            setTimeout(() => {
                container.innerHTML = '<div class="flex flex-col gap-2 pt-2">' +
                    '<span class="text-[8.5px] font-bold text-zinc-500 uppercase font-mono tracking-widest mb-1">Miku-Tasks:</span>' +
                    '<div onclick="toggleStepHtml(this)" class="flex items-center gap-2.5 bg-black/45 p-2 rounded-xl border border-white/5 cursor-pointer">' +
                      '<div class="w-4 h-4 rounded border border-zinc-700 flex items-center justify-center"></div>' +
                      '<span class="text-[10px] text-zinc-200">Gliederung auf Papier kritzeln</span>' +
                    '</div>' +
                    '<div onclick="toggleStepHtml(this)" class="flex items-center gap-2.5 bg-black/45 p-2 rounded-xl border border-white/5 cursor-pointer">' +
                      '<div class="w-4 h-4 rounded border border-zinc-700 flex items-center justify-center"></div>' +
                      '<span class="text-[10px] text-zinc-200">Erste 3 Folien grob aufbauen</span>' +
                    '</div>' +
                    '<div onclick="toggleStepHtml(this)" class="flex items-center gap-2.5 bg-black/45 p-2 rounded-xl border border-white/5 cursor-pointer">' +
                      '<div class="w-4 h-4 rounded border border-zinc-700 flex items-center justify-center"></div>' +
                      '<span class="text-[10px] text-zinc-200 font-normal">Zahlen und Fakten einpflegen</span>' +
                    '</div>' +
                    '<button onclick="resetBreakdownHtml()" class="w-full bg-zinc-900 border border-white/5 text-zinc-400 font-bold py-2 rounded-xl cursor-pointer text-center text-[9px] mt-2">Zurücksetzen</button>' +
                    '</div>';
                
                triggerSimToast("Apple On-Device KI: 3 Mikroschritte erstellt ✨");
            }, 1600);
        }

        function toggleStepHtml(el) {
            const box = el.querySelector('div');
            const text = el.querySelector('span');

            if (box.classList.contains('bg-brand-violet')) {
                box.className = "w-4 h-4 rounded border border-zinc-700 flex items-center justify-center";
                box.innerHTML = '';
                text.className = "text-[10px] text-zinc-200";
            } else {
                box.className = "w-4 h-4 rounded bg-brand-violet border-brand-violet flex items-center justify-center text-black text-[9px]";
                box.innerHTML = '<i class="fa-solid fa-check text-black text-[8px]"></i>';
                text.className = "text-[10px] line-through text-zinc-550";
            }
        }

        function resetBreakdownHtml() {
            const container = document.getElementById('is-breaking-container');
            const actionBtn = document.getElementById('breakdown-action-btn');

            container.innerHTML = '<p class="text-[10px] text-zinc-500 text-center leading-normal font-light">Zerlege diesen Block mit lokaler KI völlig datensicher in kleine Mikroschritte.</p>';
            actionBtn.style.display = 'flex';
        }

        // 5. Geofencing local switch
        function setSimLoc(loc) {
            currentLoc = loc;
            const cardOffice = document.getElementById('ctx-office-card');
            const cardHome = document.getElementById('ctx-home-card');
            const labelHome = document.getElementById('label-home-ctx');

            if (loc === 'office') {
                cardOffice.className = "p-2 rounded-xl border border-blue-500/20 bg-blue-500/5 text-white flex items-center justify-between cursor-pointer";
                cardHome.className = "p-2 rounded-xl border border-white/5 bg-zinc-900/40 text-white flex items-center justify-between cursor-pointer opacity-55";
                triggerSimToast("Kontext: Im Büro. Zeige geschäftliche Karten.");
            } else {
                cardHome.className = "p-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-white flex items-center justify-between cursor-pointer";
                cardOffice.className = "p-2 rounded-xl border border-white/5 bg-zinc-900/40 text-white flex items-center justify-between cursor-pointer opacity-55";
                triggerSimToast("Kontext: Zurück zuhause. Zeige entspannte Karten.");
            }
        }

        // Toast Alert HTML Emulator helper
        function triggerSimToast(msg) {
            const toast = document.getElementById('sim-toast');
            document.getElementById('sim-toast-text').innerText = msg;
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 2500);
        }

        // Faq collapsible panel toggle
        function toggleFaqIndex(idx) {
            const panel = document.getElementById('faq-ans-' + idx);
            const icon = document.getElementById('faq-chevron-' + idx);
            
            if (panel.classList.contains('hidden')) {
                panel.classList.remove('hidden');
                icon.className = "fa-solid fa-chevron-up text-brand-pink text-sm transition";
            } else {
                panel.classList.add('hidden');
                icon.className = "fa-solid fa-chevron-down text-zinc-500 text-sm transition";
            }
        }

        // Setup onload
        window.addEventListener('DOMContentLoaded', () => {
            renderMosaicGridHtml();
        });
    </script>
</body>
</html>`;
