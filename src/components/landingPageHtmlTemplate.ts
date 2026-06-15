export const LANDING_PAGE_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azyr — Produktivität, die deinen Rhythmus versteht.</title>
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
        
        /* Hardware accelerated compose classes for perfect Safari and Chrome rendering */
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
                <span class="font-display font-bold text-lg tracking-tight hover:opacity-85 text-white transition">azyr.app</span>
            </a>
            
            <nav class="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/5 px-2 py-1.5 rounded-full shadow-sm">
                <a href="#features" class="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">Features</a>
                <a href="#privacy" class="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">Datenschutz</a>
                <a href="#faq" class="px-4 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition">FAQ</a>
            </nav>

            <div class="flex items-center gap-3">
                <a href="#download" class="inline-flex items-center justify-center text-xs font-bold px-4.5 py-2.5 bg-white text-black hover:bg-zinc-100 rounded-full transition">
                    App laden
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
                        <span class="text-[10px] font-bold text-gradient uppercase tracking-wider">Premium iOS-Produktivität</span>
                    </div>

                    <h1 class="font-display font-black text-4xl sm:text-5xl md:text-6.5xl tracking-tight text-white leading-[1.05] max-w-2xl">
                        Produktivität, die deinen <span class="text-gradient">Rhythmus</span> versteht.
                    </h1>

                    <p class="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                        Azyr ist kein Micromanagement-Tool. Sondern ein lokaler, mitdenkender Begleiter, der durch absolute Reduktion, smarte iOS-Integration und einen 100% datenschutzkonformen On-Device-Ansatz deine tatsächliche Zeit schützt.
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
                            <span class="text-sm font-semibold">Features entdecken</span>
                            <i class="fa-solid fa-arrow-right text-xs text-zinc-400"></i>
                        </a>
                    </div>

                    <!-- Visual badges -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.08] w-full max-w-xl">
                        <div>
                            <span class="text-[10px] text-zinc-500 block font-mono">ON-DEVICE</span>
                            <span class="text-xs font-bold text-gradient block mt-1 uppercase tracking-wider">Zero-Server</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-zinc-500 block font-mono">DATENSCHUTZ</span>
                            <span class="text-xs font-bold text-zinc-300 block mt-1">100% iCloud E2E</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-zinc-500 block font-mono">USER INTERFACE</span>
                            <span class="text-xs font-bold text-zinc-300 block mt-1">Apple Native Design</span>
                        </div>
                    </div>
                </div>

                <!-- Hero Right: Static Mockup -->
                <div class="lg:col-span-5 flex justify-center items-center relative">
                    <div class="absolute -inset-10 bg-brand-pink/5 rounded-full filter blur-2xl pointer-events-none"></div>
                    
                    <div class="relative w-full max-w-[325px] aspect-[9/19] bg-[#09090b] rounded-[48px] p-3 shadow-2xl border-[6px] border-zinc-800 flex flex-col overflow-hidden select-none">
                        <!-- Notch -->
                        <div class="absolute top-0 left-1/3 right-1/3 h-5 bg-zinc-800 rounded-b-xl z-50"></div>
                        
                        <div class="relative z-10 flex flex-col h-full text-white font-sans text-xs pt-4 px-2">
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
                                        <img src="logo.png" alt="Azyr Logo" class="w-full h-full object-cover">
                                    </div>
                                    <div>
                                        <span class="text-[9px] text-zinc-500 block leading-none">azyrmosaic</span>
                                        <span class="font-display font-medium text-xs scale-95 tracking-wide text-zinc-200">Azyr On-Device</span>
                                    </div>
                                </div>
                                <span class="text-[9px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20 px-2 py-0.5 rounded-full font-bold">
                                    🔥 12 Tage Streak
                                </span>
                            </div>

                            <!-- Top Preview Box -->
                            <div class="bg-zinc-950/80 border border-white/5 p-3 rounded-2xl mb-3 flex flex-col gap-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">AKTUELL IM FOKUS</span>
                                    <span class="w-1.5 h-1.5 bg-brand-pink rounded-full animate-pulse"></span>
                                </div>
                                <div class="flex items-start gap-2">
                                    <div class="w-4 h-4 rounded bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0 mt-0.5">
                                        <i class="fa-solid fa-bolt text-[9px]"></i>
                                    </div>
                                    <div>
                                        <p class="text-[11px] font-semibold text-zinc-100 leading-tight">Mosaics Design Konzept abschließen</p>
                                        <p class="text-[9px] text-zinc-400 mt-0.5">Heute verbleibend: 1 Std. 15 Min.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Mosaic Board Visual -->
                            <div class="bg-zinc-950/40 border border-white/5 p-3 rounded-2xl mb-3">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">DEIN MOSAIC RASTER</span>
                                    <span class="text-[10px] font-bold text-white/80">16 / 36</span>
                                </div>

                                <div class="grid grid-cols-6 gap-1.5 bg-black/50 p-1.5 rounded-xl border border-white/5">
                                    <!-- 36 items -->
                                    <script>
                                        for (let i = 0; i < 36; i++) {
                                            let tileClass = "aspect-square rounded-sm ";
                                            if (i < 16) {
                                                if (i % 3 === 0) tileClass += "bg-[#FF9E7D]";
                                                else if (i % 3 === 1) tileClass += "bg-[#FF7DB2]";
                                                else tileClass += "bg-[#B084F9]";
                                            } else {
                                                tileClass += "bg-[#141416]";
                                            }
                                            document.write('<div class="' + tileClass + '"></div>');
                                        }
                                    </script>
                                </div>
                            </div>

                            <!-- Context Location status -->
                            <div class="bg-[#121215] border border-white/5 p-2 px-3 rounded-xl flex items-center gap-2 mt-auto mb-2 text-[9px] text-zinc-400">
                                <i class="fa-solid fa-map-pin text-brand-peach"></i>
                                <span>Kontext: Büro erkannt (Aufgabenliste geswitcht)</span>
                            </div>

                            <div class="bg-zinc-900 border border-white/[0.08] p-2 rounded-xl text-center text-[9px] text-zinc-500 flex items-center justify-center gap-1.5 mb-1">
                                <i class="fa-solid fa-lock text-brand-pink text-[9px]"></i>
                                <span>Daten verschlüsselt in deiner iCloud</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- VALUE BAR -->
    <section class="bg-white/[0.02] border-y border-white/[0.06] py-10">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 class="font-display font-black text-3xl sm:text-4xl text-gradient">Kein Server</h3>
                    <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Sicherer Offline-Ansatz</p>
                </div>
                <div>
                    <h3 class="font-display font-black text-3xl sm:text-4xl text-gradient">100% Local</h3>
                    <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Kein Tracking</p>
                </div>
                <div>
                    <h3 class="font-display font-black text-3xl sm:text-4xl text-gradient">iOS Native</h3>
                    <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Apple Human Interface</p>
                </div>
                <div>
                    <h3 class="font-display font-black text-3xl sm:text-4xl text-gradient">Mosaik UX</h3>
                    <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Gamification entspannt</p>
                </div>
            </div>
        </div>
    </section>

    <!-- INTERACTIVE APP SHOWCASE EXPLAINER -->
    <section class="py-20 md:py-28 bg-black/40 border-b border-white/[0.06]" id="features">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#FF7DB2] bg-brand-pink/10 border border-brand-pink/20 px-3.5 py-1.5 rounded-full inline-block">
                    LIVE-STEUERUNG
                </span>
                <h2 class="font-display font-black text-3.5xl md:text-5.5xl tracking-tight text-white mt-4 leading-tight">
                    Entdecke Azyr in Aktion.
                </h2>
                <p class="text-zinc-400 font-light text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
                    Klicke links auf die 4 Kern-Features, um die Benutzeroberfläche der iOS-App direkt im Simulator gesteuert zu erleben.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Buttons -->
                <div class="lg:col-span-7 flex flex-col gap-4">
                    
                    <!-- Reality check button -->
                    <button onclick="siteSelectUsp('reality')" class="site-usp-btn text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 items-start bg-neutral-900/55 border-brand-pink/30 shadow-[0_0_20px_rgba(255,125,178,0.06)]" id="usp-btn-reality">
                        <div class="w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center bg-brand-pink text-black text-lg">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                                <span>1. Der Reality-Check</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono">Plan-Analyse</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-[13px] mt-1.5 leading-normal">
                                Azyr vergleicht geplante Tasks vorab mit deinen tatsächlichen Termin-Slots aus dem Apple Kalender. Warnt proaktiv bei 2.5h Überplanung.
                            </p>
                        </div>
                    </button>

                    <!-- Geofencing button -->
                    <button onclick="siteSelectUsp('geofence')" class="site-usp-btn text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 items-start bg-transparent border-white/[0.04]" id="usp-btn-geofence">
                        <div class="w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center bg-neutral-900 text-zinc-400 text-lg">
                            <i class="fa-solid fa-map-pin"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                                <span>2. Geofencing & Kontext</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono">Orts-Filter</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-[13px] mt-1.5 leading-normal">
                                Durch lokales CoreLocation-Geofencing blendet die App die passende Aufgabenliste ein, je nachdem ob du im Büro oder Zuhause bist.
                            </p>
                        </div>
                    </button>

                    <!-- Zen focus button -->
                    <button onclick="siteSelectUsp('focus')" class="site-usp-btn text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 items-start bg-transparent border-white/[0.04]" id="usp-btn-focus">
                        <div class="w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center bg-neutral-900 text-zinc-400 text-lg">
                            <i class="fa-solid fa-sliders"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                                <span>3. Zen Focus-Modus</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono">Fokus-Timer</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-[13px] mt-1.5 leading-normal">
                                Blendet die gesamte To-Do-Liste aus und zeigt nur noch die voraussichtlich wichtigste Kernaufgabe mit einem beruhigenden, 25-minütigen Haptik-Timer.
                            </p>
                        </div>
                    </button>

                    <!-- Mosaics button -->
                    <button onclick="siteSelectUsp('mosaic')" class="site-usp-btn text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 items-start bg-transparent border-white/[0.04]" id="usp-btn-mosaic">
                        <div class="w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center bg-neutral-900 text-zinc-400 text-lg">
                            <i class="fa-solid fa-palette"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                                <span>4. Mosaics</span>
                                <span class="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full font-mono">Visual-Reward</span>
                            </h3>
                            <p class="text-zinc-400 font-light text-[13px] mt-1.5 leading-normal">
                                Mit jedem Abschluss einer Tagesaufgabe kippt eine Kachel im Pixelraster um und enthüllt nach und nach ein wunderschönes visuelles Wochengemälde.
                            </p>
                        </div>
                    </button>

                </div>

                <!-- Right Simulator Frame -->
                <div class="lg:col-span-5 flex justify-center items-center relative">
                    <!-- Toast alert -->
                    <div id="sim-toast" class="absolute top-8 left-6 right-6 bg-gradient-brand text-black font-semibold text-xs py-3 px-4 rounded-xl text-center shadow-lg pointer-events-none z-50 flex items-center justify-center gap-2 hidden">
                        <i class="fa-solid fa-sparkles animate-spin"></i>
                        <span id="sim-toast-text">Tagesplan optimiert! Burnout geschützt ✨</span>
                    </div>

                    <div class="relative w-full max-w-[335px] aspect-[9/19] bg-[#0c0c0e] rounded-[52px] p-3.5 shadow-2xl border-[8px] border-[#1f1f25] flex flex-col overflow-hidden">
                        
                        <!-- Notch -->
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 h-5.5 w-30 bg-[#1f1f25] rounded-b-2xl z-50 flex items-center justify-between px-3">
                            <div class="w-2 h-2 bg-black rounded-full"></div>
                            <div class="w-10 h-1 bg-black rounded-full"></div>
                        </div>

                        <!-- Inner Screen Content -->
                        <div class="relative z-10 flex flex-col h-full text-white font-sans text-xs pt-4 px-2">
                            
                            <div class="flex justify-between items-center text-[9px] text-zinc-500 font-mono tracking-wider pt-2 border-b border-white/[0.04] pb-2 mb-3">
                                <span>AZYR O/S V1.9</span>
                                <span class="text-emerald-400 font-bold">● ON-DEVICE SECURE</span>
                            </div>

                            <!-- SCREEN VIEWS -->
                            
                            <!-- 1. Reality Check View -->
                            <div id="view-reality" class="sim-view flex flex-col gap-3 flex-1 justify-between">
                                <div class="flex flex-col gap-2.5">
                                    <div class="flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-brand-pink text-sm"></i>
                                        <span class="font-display font-medium text-xs text-zinc-300">Tagesbilanz-Check</span>
                                    </div>
                                    <p class="text-[10px] text-zinc-400">Kalenderfreiräume werden direkt mit geschätzten Taskzeiten verrechnet.</p>
                                    
                                    <div class="bg-zinc-950/80 p-2.5 rounded-xl border border-white/5 flex flex-col gap-1.5">
                                        <div class="flex justify-between text-[8px] text-zinc-500 font-bold uppercase tracking-wider">
                                            <span>Kalender-Lücken</span>
                                            <span>Frei: 4 Std.</span>
                                        </div>
                                        <div class="flex gap-1">
                                            <div class="flex-1 bg-zinc-800 text-zinc-400 py-1 px-1.5 rounded text-[8.5px]">Team-Sync<br><span class="text-[7.5px] opacity-60">10:00-12:00</span></div>
                                            <div class="flex-1 bg-zinc-800 text-zinc-400 py-1 px-1.5 rounded text-[8.5px]">Review<br><span class="text-[7.5px] opacity-60">14:00-16:00</span></div>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-1.5">
                                        <span class="text-[8px] font-mono text-zinc-500 tracking-widest mt-1">GEPLANTE TASKS</span>
                                        <div class="p-2.5 rounded-xl border border-white/5 bg-zinc-900 flex justify-between items-center" id="task-r1">
                                            <span>Landingpage finalisieren</span>
                                            <span class="text-[9px] font-mono py-0.5 px-1 bg-zinc-800 rounded">3h</span>
                                        </div>
                                        <div class="p-2.5 rounded-xl border border-white/5 bg-zinc-900 flex justify-between items-center">
                                            <span>Schnittstellen testen</span>
                                            <span class="text-[9px] font-mono py-0.5 px-1 bg-zinc-800 rounded">2h</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto mb-2 flex flex-col gap-2">
                                    <div id="sim-reality-warning" class="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl text-[9.5px] text-amber-300">
                                        <i class="fa-solid fa-triangle-exclamation text-amber-450 mr-1.5"></i>
                                        <strong>2.5h überplanter Tagesplan!</strong> Burnoutgefahr proaktiv erkannt.
                                    </div>
                                    <button onclick="simOptimizeReality()" id="btn-optimize-reality" class="bg-[#FF7DB2] text-black font-extrabold text-[10.5px] py-2 px-3 rounded-xl hover:opacity-90 transition">
                                        Tagesplan optimieren ✨
                                    </button>
                                </div>
                            </div>

                            <!-- 2. Geofence View -->
                            <div id="view-geofence" class="sim-view flex flex-col gap-3 flex-1 justify-between hidden">
                                <div class="flex flex-col gap-2.5">
                                    <div class="flex items-center gap-1.5">
                                        <i class="fa-solid fa-map-pin text-brand-peach text-sm"></i>
                                        <span class="font-display font-medium text-xs text-zinc-300">Kontext-Filter</span>
                                    </div>
                                    <p class="text-[10px] text-zinc-400">Sortiert nicht relevante Aufgaben automatisch basierend auf deinem Standort aus.</p>
                                    
                                    <div class="grid grid-cols-2 gap-2 p-1 bg-black/50 border border-white/5 rounded-xl">
                                        <button onclick="simSetContext('office')" id="btn-context-office" class="py-1.5 px-2 rounded-lg text-xs font-bold bg-brand-peach text-black">🏢 Büro</button>
                                        <button onclick="simSetContext('home')" id="btn-context-home" class="py-1.5 px-2 rounded-lg text-xs font-bold text-zinc-400">🏠 Zuhause</button>
                                    </div>

                                    <div class="flex flex-col gap-1.5 mt-2">
                                        <span class="text-[8px] font-mono text-zinc-500 tracking-wider" id="context-list-title">BÜRO TASKS (3)</span>
                                        <div id="context-tasks-container" class="flex flex-col gap-1.5">
                                            <!-- Managed by Script -->
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-zinc-950/80 p-2.5 rounded-xl border border-white/5 text-[9px] text-zinc-500 flex items-center gap-2 mt-auto mb-2 text-center">
                                    <i class="fa-solid fa-lock text-brand-peach"></i>
                                    <span>CoreLocation Geodaten verbleiben exklusiv auf deinem Endgerät.</span>
                                </div>
                            </div>

                            <!-- 3. Focus View -->
                            <div id="view-focus" class="sim-view flex flex-col gap-3 flex-1 justify-between hidden">
                                <div class="flex flex-col gap-3 text-center">
                                    <div class="flex items-center justify-center gap-1.5">
                                        <i class="fa-solid fa-heart-pulse text-brand-violet text-sm"></i>
                                        <span class="font-display font-medium text-xs text-zinc-300">Zen Focus-Modus</span>
                                    </div>
                                    <p class="text-[10px] text-zinc-400">Eliminiere Multitasking vollständig aus deinem Arbeitsalltag.</p>
                                </div>

                                <div class="flex justify-center items-center my-4">
                                    <div class="w-28 h-28 rounded-full border border-white/5 bg-zinc-950/50 flex flex-col items-center justify-center relative">
                                        <div class="absolute inset-2 rounded-full border border-transparent border-t-brand-violet animate-spin"></div>
                                        <span class="font-mono text-lg font-bold" id="sim-timer-val">24:59</span>
                                        <span class="text-[8px] uppercase tracking-wider text-brand-violet mt-1">Focus Mode</span>
                                    </div>
                                </div>

                                <div class="bg-zinc-900 border border-brand-violet/25 p-3 rounded-xl text-center">
                                    <span class="text-[8px] font-mono text-zinc-500 block">DEINE EINZIGE PRIO</span>
                                    <p class="text-[11px] font-bold text-zinc-200 mt-1">Mindfulness Design Concept entwerfen</p>
                                </div>

                                <button onclick="simToggleTimer()" id="btn-toggle-timer" class="w-full py-2 px-3 rounded-xl bg-brand-violet text-white font-bold text-[10.5px] mt-auto mb-2 shadow-lg shadow-brand-violet/10">
                                    Fokus Pause
                                </button>
                            </div>

                            <!-- 4. Mosaic View -->
                            <div id="view-mosaic" class="sim-view flex flex-col gap-3 flex-1 justify-between hidden">
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center gap-1.5">
                                        <i class="fa-solid fa-palette text-brand-lavender text-sm"></i>
                                        <span class="font-display font-medium text-xs text-zinc-300">Wochen-Mosaic</span>
                                    </div>
                                    <p class="text-[10px] text-zinc-400">Verwandle geschaffte Pflichten haptisch in pixelgenaue Mosaik-Kacheln.</p>
                                    
                                    <div class="grid grid-cols-6 gap-1 bg-black/60 p-1.5 rounded-xl border border-white/5" id="sim-mosaic-grid">
                                        <!-- Inside JS script -->
                                    </div>
                                </div>

                                <div class="flex flex-col gap-1.5 mt-1">
                                    <span class="text-[8px] font-mono text-zinc-500">TÄGLICHE TASKS</span>
                                    <button onclick="simCheckMosaicTask(1)" id="sim-mtask-1" class="w-full p-2 rounded-xl text-left border border-white/5 bg-zinc-900 flex justify-between items-center text-[10px]">
                                        <span class="flex items-center gap-1.5"><div class="w-3.5 h-3.5 rounded border border-white/20" id="sim-mcheck-1"></div> iCloud aktivieren</span>
                                        <span class="font-mono text-zinc-500 text-[8px]">Tile 18</span>
                                    </button>
                                    <button onclick="simCheckMosaicTask(2)" id="sim-mtask-2" class="w-full p-2 rounded-xl text-left border border-white/5 bg-zinc-900 flex justify-between items-center text-[10px]">
                                        <span class="flex items-center gap-1.5"><div class="w-3.5 h-3.5 rounded border border-white/20" id="sim-mcheck-2"></div> Geolocation freigeben</span>
                                        <span class="font-mono text-zinc-500 text-[8px]">Tile 19</span>
                                    </button>
                                </div>

                                <div class="bg-zinc-950/80 p-2 rounded-xl text-[9px] text-zinc-400 mt-auto mb-2 text-center">
                                    Fortschritt wird zu Ästhetik. Kein Streak-Zwang.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- THE 4 USPs DETAILS BENTO GRID -->
    <section class="py-24" id="details">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7DB2] bg-brand-pink/5 px-3 py-1.5 rounded-full">Säulen der App</span>
                <h2 class="font-display font-black text-3.5xl md:text-5xl tracking-tight text-white mt-4">
                    Die 4 Säulen von Azyr.
                </h2>
                <p class="text-zinc-500 mt-3 font-light leading-relaxed">
                    Jedes Feature von Azyr wurde entworfen, um kognitiven Ballast abzubauen. Wir machen Technologie, die nicht stört, sondern befreit.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                <!-- USP 1 Detail -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-pink text-black rounded-2xl flex items-center justify-center shadow-lg mb-6">
                            <i class="fa-solid fa-calendar-days text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">Der Reality-Check (Tagesbilanz)</h3>
                        <p class="text-zinc-400 font-light mt-3 leading-relaxed text-sm">
                            Azyr vergleicht geplante Tasks vorab mit deinen tatsächlichen Termin-Slots aus dem Apple Kalender. Wenn du 4 Stunden an To-Dos planst, aber nur 2 Stunden Meeting-Pause hast, warnt dich die App proaktiv. Das schützt vor unrealistischer Arbeitsbelastung und Burnout.
                        </p>
                    </div>
                    <div class="flex gap-2 mt-6 border-t border-white/[0.05] pt-4 text-[10px] uppercase font-mono font-bold">
                        <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-pink">STRESSPREVENTION</span>
                    </div>
                </div>

                <!-- USP 2 Detail -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-peach text-black rounded-2xl flex items-center justify-center shadow-lg mb-6">
                            <i class="fa-solid fa-map-pin text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">Geofencing & Kontext-Listen</h3>
                        <p class="text-zinc-400 font-light mt-3 leading-relaxed text-sm">
                            Durch lokales CoreLocation-Geofencing schaltet die App vollautomatisch deine relevante Tasks-Routine um. Büro-To-Dos erlöschen, sobald du dein Zuhause betrittst, und umgekehrt. Das sorgt für klaren Kopf ohne manuelle Listen-Verschiebungen.
                        </p>
                    </div>
                    <div class="flex gap-2 mt-6 border-t border-white/[0.05] pt-4 text-[10px] uppercase font-mono font-bold">
                        <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-peach">CORELOCATION NATIVE</span>
                    </div>
                </div>

                <!-- USP 3 Detail -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-violet text-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
                            <i class="fa-solid fa-bolt text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">Zen Focus-Modus (Timer-Integration)</h3>
                        <p class="text-zinc-400 font-light mt-3 leading-relaxed text-sm">
                            Ein schwebender Fokus-Button blendet die gesamte To-Do-Liste aus und zeigt nur noch die voraussichtlich wichtigste Kernaufgabe mit einem beruhigenden, 25-minütigen Haptik-Timer an. Eliminere Multitasking gänzlich aus deinem Arbeitsalltag.
                        </p>
                    </div>
                    <div class="flex gap-2 mt-6 border-t border-white/[0.05] pt-4 text-[10px] uppercase font-mono font-bold">
                        <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-violet">POMODORO REDEFINED</span>
                    </div>
                </div>

                <!-- USP 4 Detail -->
                <div class="md:col-span-6 bg-zinc-950/60 border border-white/[0.05] rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-11 h-11 bg-brand-lavender text-black rounded-2xl flex items-center justify-center shadow-lg mb-6">
                            <i class="fa-solid fa-palette text-lg"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-white tracking-tight">Mosaics (Erfolgsgestalter)</h3>
                        <p class="text-zinc-400 font-light mt-3 leading-relaxed text-sm">
                            Vergiss frustrierendes Streak-Fehlverhalten. Mit jeder geschafften Aufgabe kippt hunderprozentig geräuscharm eine Kachel um und enthüllt allmählich ein individuelles visuelles Farbkunstwerk auf deinem iPhone. Ästhetische Motivation, die dich beruhigt.
                        </p>
                    </div>
                    <div class="flex gap-2 mt-6 border-t border-white/[0.05] pt-4 text-[10px] uppercase font-mono font-bold">
                        <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-brand-lavender">GAMIFICATION REDEFINED</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- PRIVACY BY DESIGN: ZERO SERVER -->
    <section id="privacy" class="py-24 bg-black border-y border-white/[0.06] relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16 flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <i class="fa-solid fa-lock text-[#FF7DB2]"></i>
                </div>
                <span class="text-xs font-mono font-bold text-brand-pink uppercase tracking-widest">KOMPROMISSLOSE PRIVATSPHÄRE</span>
                <h2 class="font-display font-black text-3.5xl sm:text-5xl tracking-tight text-white mt-1">
                    Zero-Server-Architektur.<br>
                    <span class="text-gradient">Was auf dem iPhone passiert, bleibt dort.</span>
                </h2>
                <p class="text-zinc-500 font-light mt-3 max-w-xl text-center text-sm">
                    Wir hosten keinen Server, tracken keine Benutzeraktivitäten und speichern keine Tasks. Deine private Produktivität geht niemanden außer dir selbst etwas an.
                </p>
            </div>

            <div class="bg-white/[0.02] border border-white/[0.08] p-8 md:p-12 rounded-[32px] backdrop-blur-xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    
                    <div class="flex flex-col gap-6 justify-between">
                        <div class="flex flex-col gap-3">
                            <h3 class="font-display font-semibold text-white text-lg flex items-center gap-2">
                                <i class="fa-solid fa-house-laptop text-brand-peach text-sm"></i>
                                Lokal an Ort und Stelle
                            </h3>
                            <p class="text-zinc-400 text-sm leading-relaxed font-light">
                                Sowohl deine Spracheingaben, dein Geofencing, als auch deine Notizen werden zu 100% lokal on-device verarbeitet. Keine Standorte, keine Cookies und keine Cloud-Tracking Scripts.
                            </p>
                        </div>
                        <div class="h-[1px] bg-white/[0.08] w-full"></div>
                        <div class="flex flex-col gap-3">
                            <h3 class="font-display font-semibold text-white text-lg flex items-center gap-2">
                                <i class="fa-solid fa-cloud text-brand-violet text-sm"></i>
                                Integrierter Apple iCloud Sync
                            </h3>
                            <p class="text-zinc-400 text-sm leading-relaxed font-light">
                                Sämtliche Backups und der automatische Abgleich zwischen Mac, iPad und iPhone laufen unkompliziert über deine private, komplett verschlüsselte iCloud (CloudKit). Keine Drittanbieter-Registrierung nötig.
                            </p>
                        </div>
                    </div>

                    <div class="bg-zinc-950/60 border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                        <div class="flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                            <span>AES_256_ACTIVE</span>
                            <span class="text-brand-pink font-bold">● CLOUDKIT SYNCED</span>
                        </div>

                        <div class="my-6 flex flex-col items-center justify-center gap-3">
                            <div class="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-black/40">
                                <i class="fa-solid fa-lock text-gradient text-xl animate-pulse"></i>
                            </div>
                            <span class="text-[10px] font-mono tracking-widest text-[#FF7DB2] font-bold uppercase">Zero Third Parties</span>
                        </div>

                        <p class="text-[9px] font-mono text-brand-violet bg-brand-violet/10 p-2 rounded-xl border border-[#B084F9]/20 text-center leading-normal">
                            Keine künstlichen Subscriptions für externe Cloud-KIs nötig.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- FAQ SECTION WITH COLLAPSIBLE -->
    <section id="faq" class="py-20 md:py-28">
        <div class="max-w-4xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs font-bold font-mono tracking-widest uppercase text-brand-peach bg-brand-peach/10 border border-brand-peach/10 px-3 py-1 rounded-full">Häufige Fragen</span>
                <h2 class="font-display font-black text-3.5xl sm:text-4xl text-white mt-4">
                    Häufig gestellte Fragen (FAQ).
                </h2>
            </div>

            <div class="flex flex-col gap-4">
                
                <!-- FAQ Item 1 -->
                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden">
                    <button onclick="toggleFaqIndex(1)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-bold text-base md:text-lg text-white hover:text-brand-pink transition-all">
                        <span>Wie schützt mich der Reality-Check vor Überplanung?</span>
                        <i class="fa-solid fa-chevron-down text-zinc-500 text-sm transition" id="faq-chevron-1"></i>
                    </button>
                    <div id="faq-ans-1" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Azyr analysiert vollautomatisch deine lokalen Apple Kalender-Termine direkt auf dem Gerät. Wenn du Aufgaben mit einer geschätzten Dauer von 4 Stunden einträgst, aber dein Kalender zwischen den Meetings am Tag nur ein Zeitfenster von 2 Stunden hergibt, warnt dich die App proaktiv. Du wirst sanft darauf hingewiesen, dass deine Pläne unrealistisch sind, bevor du in die Überlastung läufst.
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden">
                    <button onclick="toggleFaqIndex(2)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-bold text-base md:text-lg text-white hover:text-brand-pink transition-all">
                        <span>Wie funktioniert das Geofencing, ohne meine Daten zu teilen?</span>
                        <i class="fa-solid fa-chevron-down text-zinc-500 text-sm transition" id="faq-chevron-2"></i>
                    </button>
                    <div id="faq-ans-2" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Azyr nutzt die native On-Device Geofencing-Technologie von iOS (CoreLocation API). Die Definition deiner Arbeits- und Wohnorte sowie die Abfragen, wo du dich gerade aufhältst, laufen zu 100% lokal auf dem Hauptprozessor deines iPhones. Es gibt keinen Analytics-Server, der Standorte aufzeichnet oder an Werbepartner sendet.
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden">
                    <button onclick="toggleFaqIndex(3)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-bold text-base md:text-lg text-white hover:text-brand-pink transition-all">
                        <span>Wie funktioniert der Synchronisationsprozess über iCloud?</span>
                        <i class="fa-solid fa-chevron-down text-zinc-500 text-sm transition" id="faq-chevron-3"></i>
                    </button>
                    <div id="faq-ans-3" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Deine Daten werden verchlüsselt in deiner persönlichen iCloud abgelegt (Apple CloudKit). Das bedeutet, dass deine Aufgaben auf all deinen Apple-Geräten wie iPhone, iPad und Mac synchronisiert werden können, ohne dass du ein separates Benutzerkonto erstellen musst. Weder wir noch Dritte haben jemals physikalischen Zugriff auf diese Cloud-Nischen.
                    </div>
                </div>

                <!-- FAQ Item 4 -->
                <div class="bg-zinc-900/60 border border-white/[0.04] rounded-2xl overflow-hidden">
                    <button onclick="toggleFaqIndex(4)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-bold text-base md:text-lg text-white hover:text-brand-pink transition-all">
                        <span>Gibt es Abonnements oder laufende API-Kosten?</span>
                        <i class="fa-solid fa-chevron-down text-zinc-500 text-sm transition" id="faq-chevron-4"></i>
                    </button>
                    <div id="faq-ans-4" class="hidden px-6 pb-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base border-t border-white/[0.04] pt-3">
                        Nein, es gibt keine monatlichen Subscriptions. Da Azyr vollständig On-Device arbeitet, fallen für uns keine teuren Serverkosten für Rechenleistung an. Das geben wir direkt an dich weiter: Du lädst die App einmalig herunter und nutzt sie unbegrenzt.
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FINAL CTA -->
    <section id="download" class="relative py-24 border-t border-white/[0.06] overflow-hidden">
        <div class="absolute inset-0 bg-black"></div>
        <div class="absolute -top-48 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-pink/10 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div class="max-w-2xl mx-auto flex flex-col items-center gap-6">
                
                <div class="relative w-22 h-22 rounded-[25px] bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/15 shadow-2xl group mb-4">
                    <img src="logo.png" alt="Azyr Logo" class="w-full h-full object-cover">
                </div>

                <span class="text-[10px] font-mono font-bold tracking-widest text-[#FF7DB2] bg-brand-pink/10 border border-[#FF7DB2]/20 px-3.5 py-1.5 rounded-full">
                    HOL DIR DIE FREIHEIT ZURÜCK
                </span>
                <h2 class="font-display font-black text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-none animate-pulse">
                    Produktivität, die aufatmen lässt.
                </h2>
                <p class="text-zinc-400 font-light leading-relaxed text-sm sm:text-base mt-2">
                    Azyr ist komplett frei von Tracking, Benutzerkonten und monatlichen Gebühren. Installiere dir deinen lokalen Begleiter noch heute kostenlos im App Store.
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center">
                    <a href="https://apps.apple.com" target="_blank" class="inline-flex items-center justify-center gap-3.5 px-8 py-4.5 bg-white text-black font-semibold rounded-2xl w-full sm:w-auto shadow-2xl">
                        <i class="fa-brands fa-apple text-2xl"></i>
                        <div class="text-left leading-none text-black">
                            <p class="text-[9px] uppercase font-bold text-black/60 tracking-wider">Laden im App Store für</p>
                            <p class="text-lg font-black font-display mt-0.5">iPhone & iPad</p>
                        </div>
                    </a>
                </div>

                <div class="flex flex-wrap justify-center gap-6 text-[10px] text-zinc-500 mt-8 font-mono border-t border-white/[0.08] pt-6 w-full uppercase tracking-wider font-bold">
                    <span><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>Keine Subscriptions</span>
                    <span><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>100% iCloud Backup</span>
                    <span><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>Kein Daten-Tracking</span>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-black border-t border-white/[0.06] py-16 text-xs text-zinc-500 relative z-10">
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/[0.06] pb-10 mb-10">
                
                <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="relative w-6 h-6 rounded bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
                            <img src="logo.png" alt="Azyr Logo" class="w-full h-full object-cover">
                        </div>
                        <span class="font-display font-bold text-sm text-white tracking-tight">azyr.app</span>
                    </div>
                    <p class="max-w-xs font-light text-zinc-500 leading-normal">
                        Ein privates On-Device Produktivitätsprojekt von Dominik Kocsordi. Entwickelt für kognitive Balance und gesunden, biologisch ausgewogenen Arbeitsalltag.
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <span class="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Support & Feedback</span>
                    <a href="mailto:hello@azyr.app" class="font-semibold text-zinc-300 hover:text-white transition">hello@azyr.app</a>
                </div>

                <div class="flex flex-wrap gap-x-8 gap-y-3">
                    <a href="#" class="font-medium text-zinc-400 hover:text-white transition">Impressum</a>
                    <a href="#" class="font-medium text-zinc-400 hover:text-white transition">Datenschutz</a>
                    <a href="#" class="font-medium text-zinc-400 hover:text-white transition">Nutzungsbedingungen</a>
                </div>

            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
                <span>&copy; 2026 azyr.app / Dominik Kocsordi. Alle Rechte vorbehalten.</span>
                <span>Konstruiert im Einklang mit den Apple Human Interface Guidelines.</span>
            </div>
        </div>
    </footer>


    <!-- INTERACTIVE STATES CLIENT SCRIPTS (SIMULATION LOGIC) -->
    <script>
        // Active states objects
        let activeUsp = 'reality';
        let realityOptimized = false;
        let currentLocation = 'office';
        let focusTimerActive = true;
        let focusTimeLeft = 1499;
        let focusTimerInterval = null;
        let revealedTiles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        let mtask1 = false;
        let mtask2 = false;

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

        // 1. Selector tab handler
        function siteSelectUsp(uspKey) {
            activeUsp = uspKey;
            
            // Toggle highlight selector buttons on page
            document.querySelectorAll('.site-usp-btn').forEach(btn => {
                btn.className = "site-usp-btn text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 items-start bg-transparent border-white/[0.04]";
                const iconBox = btn.querySelector('.w-11');
                if(iconBox) {
                    iconBox.className = "w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center bg-neutral-900 text-zinc-400 text-lg";
                }
            });
            
            const activeBtn = document.getElementById('usp-btn-' + uspKey);
            if(activeBtn) {
                let accentColor = "brand-pink";
                let borderColor = "border-brand-pink/30";
                let shadowColor = "shadow-[0_0_20px_rgba(255,125,178,0.06)]";
                if(uspKey === 'geofence') { accentColor = "bg-brand-peach text-black"; borderColor = "border-brand-peach/30"; shadowColor = "shadow-[0_0_20px_rgba(255,158,125,0.06)]"; }
                else if(uspKey === 'focus') { accentColor = "bg-brand-violet text-white"; borderColor = "border-brand-violet/30"; shadowColor = "shadow-[0_0_20px_rgba(176,132,249,0.06)]"; }
                else if(uspKey === 'mosaic') { accentColor = "bg-brand-lavender text-black"; borderColor = "border-brand-lavender/30"; shadowColor = "shadow-[0_0_20px_rgba(194,155,255,0.06)]"; }
                else { accentColor = "bg-brand-pink text-black"; }

                activeBtn.className = "site-usp-btn text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 items-start bg-neutral-900/55 " + borderColor + " " + shadowColor;
                const activeIconBox = activeBtn.querySelector('.w-11');
                if(activeIconBox) {
                    activeIconBox.className = "w-11 h-11 rounded-1.5xl shrink-0 flex items-center justify-center text-lg " + accentColor;
                }
            }

            // Toggle screens
            document.querySelectorAll('.sim-view').forEach(view => view.classList.add('hidden'));
            const matchedView = document.getElementById('view-' + uspKey);
            if(matchedView) {
                matchedView.classList.remove('hidden');
            }

            // Init timers if needed
            if(uspKey === 'focus') {
                startFocusTimerEmulation();
            } else {
                stopFocusTimerEmulation();
            }
        }

        // 2. Reality optimization triggers
        function simOptimizeReality() {
            realityOptimized = true;
            document.getElementById('task-r1').className = "p-2.5 rounded-xl border border-white/[0.02] bg-zinc-950/30 text-zinc-600 scale-95 transition-all duration-500";
            document.getElementById('sim-reality-warning').innerHTML = '<i class="fa-solid fa-circle-check text-emerald-400 mr-1.5"></i><strong>Plan ausgeglichen!</strong> Landingpage-Task auf morgen verschoben.';
            document.getElementById('sim-reality-warning').className = "bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-[9.5px] text-emerald-400 transition-all";
            document.getElementById('btn-optimize-reality').className = "bg-zinc-800 text-zinc-400 font-bold text-[10px] py-1.5 px-2 rounded-xl transition cursor-pointer text-center";
            document.getElementById('btn-optimize-reality').innerText = "Regulärer Rhythmus aktiv";
            document.getElementById('btn-optimize-reality').disabled = true;

            // Trigger toast
            triggerSimToast("Burnout geschützt! Plan ausgeglichen ✨");
        }

        // 3. Geofence toggle logic
        function simSetContext(contextKey) {
            currentLocation = contextKey;
            
            const btnOffice = document.getElementById('btn-context-office');
            const btnHome = document.getElementById('btn-context-home');
            
            if(contextKey === 'office') {
                btnOffice.className = "py-1.5 px-2 rounded-lg text-xs font-bold bg-brand-peach text-black";
                btnHome.className = "py-1.5 px-2 rounded-lg text-xs font-bold text-zinc-400";
                document.getElementById('context-list-title').innerText = "BÜRO TASKS (3)";
            } else {
                btnHome.className = "py-1.5 px-2 rounded-lg text-xs font-bold bg-brand-peach text-black";
                btnOffice.className = "py-1.5 px-2 rounded-lg text-xs font-bold text-zinc-400";
                document.getElementById('context-list-title').innerText = "ZUHAUSE TASKS (3)";
            }

            renderGeofenceTasks();
        }

        function renderGeofenceTasks() {
            const container = document.getElementById('context-tasks-container');
            const collection = currentLocation === 'office' ? officeTasks : homeTasks;
            let output = '';

            collection.forEach(task => {
                const checkedClass = task.done ? 'bg-brand-peach border-brand-peach text-black' : 'border-white/20';
                const crossTextClass = task.done ? 'line-through text-zinc-500' : 'text-zinc-200';
                const opacityClass = task.done ? 'opacity-45' : '';
                const checkedIcon = task.done ? '<i class="fa-solid fa-check text-[8.5px] text-black"></i>' : '';

                output += '<div class="p-2.5 bg-zinc-900 border border-white/5 rounded-xl flex items-center gap-2.5 ' + opacityClass + '">' +
                            '<div class="w-4 h-4 rounded flex items-center justify-center border ' + checkedClass + '">' + checkedIcon + '</div>' +
                            '<span class="text-[10.5px] ' + crossTextClass + '">' + task.title + '</span>' +
                          '</div>';
            });

            container.innerHTML = output;
        }

        // 4. Zen focus Timer logic
        function startFocusTimerEmulation() {
            stopFocusTimerEmulation();
            focusTimerActive = true;
            focusTimerInterval = setInterval(() => {
                if(focusTimeLeft > 0) {
                    focusTimeLeft--;
                    document.getElementById('sim-timer-val').innerText = formatTimerSeconds(focusTimeLeft);
                } else {
                    focusTimeLeft = 1500;
                }
            }, 1000);
        }

        function stopFocusTimerEmulation() {
            focusTimerActive = false;
            clearInterval(focusTimerInterval);
        }

        function simToggleTimer() {
            const btn = document.getElementById('btn-toggle-timer');
            if(focusTimerActive) {
                stopFocusTimerEmulation();
                btn.className = "w-full py-2 px-3 rounded-xl bg-brand-violet text-white font-bold text-[10.5px] mt-auto mb-2 shadow-lg";
                btn.innerText = "Fokus fortsetzen";
            } else {
                startFocusTimerEmulation();
                btn.className = "w-full py-2 px-3 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-[10.5px] mt-auto mb-2";
                btn.innerText = "Fokus Pause";
            }
        }

        function formatTimerSeconds(secs) {
            let m = Math.floor(secs / 60);
            let s = secs % 60;
            return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        }

        // 5. Mosaic grid logic
        function renderMosaicGrid() {
            const grid = document.getElementById('sim-mosaic-grid');
            let output = '';
            for (let i = 0; i < 36; i++) {
                const isRevealed = revealedTiles.includes(i);
                let tileColor = "bg-[#18181c] border border-white/[0.04]";
                if(isRevealed) {
                    const row = Math.floor(i / 6);
                    if (row === 0) tileColor = "bg-brand-peach shadow-[0_0_8px_rgba(255,158,125,0.25)]";
                    else if (row === 1) tileColor = "bg-brand-pink shadow-[0_0_8px_rgba(255,125,178,0.25)]";
                    else if (row === 2) tileColor = "bg-brand-violet shadow-[0_0_8px_rgba(176,132,249,0.25)]";
                    else tileColor = "bg-brand-lavender shadow-[0_0_8px_rgba(194,155,255,0.25)]";
                }
                output += '<div class="h-5 rounded-md transition-all duration-300 ' + tileColor + '"></div>';
            }
            grid.innerHTML = output;
        }

        function simCheckMosaicTask(num) {
            let completed = false;
            let tileIdx = num === 1 ? 18 : 19;
            const btn = document.getElementById('sim-mtask-' + num);
            const checkbox = document.getElementById('sim-mcheck-' + num);

            if(num === 1) {
                mtask1 = !mtask1; completed = mtask1;
            } else {
                mtask2 = !mtask2; completed = mtask2;
            }

            if(completed) {
                btn.className = "w-full p-2 rounded-xl text-left border border-white/[0.02] bg-zinc-950/40 text-zinc-500 scale-[0.98] transition-all duration-300";
                checkbox.className = "w-3.5 h-3.5 rounded bg-brand-lavender border-brand-lavender flex items-center justify-center text-black text-[9px]";
                checkbox.innerHTML = '<i class="fa-solid fa-check text-black"></i>';
                if(!revealedTiles.includes(tileIdx)) revealedTiles.push(tileIdx);
                
                triggerSimToast("Haptisches Feedback: Kachel " + tileIdx + " aufgedeckt! 🎨");
            } else {
                btn.className = "w-full p-2 rounded-xl text-left border border-white/5 bg-zinc-900 flex justify-between items-center text-[10px] transition-all";
                checkbox.className = "w-3.5 h-3.5 rounded border border-white/20";
                checkbox.innerHTML = '';
                revealedTiles = revealedTiles.filter(t => t !== tileIdx);
            }

            renderMosaicGrid();
        }

        // Toast alert helper
        function triggerSimToast(text) {
            const toast = document.getElementById('sim-toast');
            document.getElementById('sim-toast-text').innerText = text;
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }

        // Accordion index toggle
        function toggleFaqIndex(idx) {
            const ans = document.getElementById('faq-ans-' + idx);
            const icon = document.getElementById('faq-chevron-' + idx);
            if(ans.classList.contains('hidden')) {
                ans.classList.remove('hidden');
                icon.className = "fa-solid fa-chevron-up text-brand-pink text-sm transition";
            } else {
                ans.classList.add('hidden');
                icon.className = "fa-solid fa-chevron-down text-zinc-500 text-sm transition";
            }
        }

        // On document loads initialization
        window.addEventListener('DOMContentLoaded', () => {
            renderGeofenceTasks();
            renderMosaicGrid();
        });
    </script>
</body>
</html>`;
