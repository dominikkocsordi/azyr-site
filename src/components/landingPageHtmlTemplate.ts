export const LANDING_PAGE_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azyr — Produktivität, die deinen Rhythmus versteht.</title>
    <!-- Tailwind CSS Play CDN -->
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Custom styles integration */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #fbfbfd;
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
        }
        .bg-gradient-brand {
            background: linear-gradient(135deg, #FF9E7D 0%, #FF7DB2 50%, #B084F9 100%);
        }
        .bg-gradient-brand-hover {
            background: linear-gradient(135deg, #FFAE93 0%, #FF99C2 50%, #C09DFF 100%);
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 1px 0 rgba(255, 255, 255, 0.8) inset;
        }
        .glow-blob {
            filter: blur(130px);
            opacity: 0.35;
            mix-blend-mode: multiply;
            pointer-events: none;
        }
        /* Reveal-on-scroll container utility */
        .reveal-element {
            opacity: 0;
            transform: translateY(24px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-element.active {
            opacity: 1;
            transform: translateY(0);
        }
        /* Custom interactive UI animations */
        .ios-notch {
            height: 24px;
            width: 128px;
            background: #1e1e24;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 50;
        }
    </style>
</head>
<body class="text-neutral-900 selection:bg-purple-100 selection:text-purple-900">

    <!-- Absolute Background Glow Elements -->
    <div class="absolute top-20 left-10 w-96 h-96 glow-blob bg-brand-peach rounded-full"></div>
    <div class="absolute top-[40rem] right-10 w-[30rem] h-[30rem] glow-blob bg-brand-pink rounded-full"></div>
    <div class="absolute top-[100rem] left-1/4 w-[35rem] h-[35rem] glow-blob bg-brand-violet rounded-full"></div>
    <div class="absolute top-[160rem] right-10 w-96 h-96 glow-blob bg-brand-lavender rounded-full"></div>

    <!-- HEADER / NAVIGATION -->
    <header class="sticky top-0 z-50 transition-all duration-300 w-full" id="site-header">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" class="flex items-center gap-2 group">
                <!-- Core brand logo -->
                <div class="relative w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10 shadow-sm">
                    <!-- Optional logo.png placeholder - overrides CSS icon when uploaded -->
                    <img 
                        src="logo.png" 
                        alt="Azyr Logo" 
                        style="display: none;"
                        class="absolute inset-0 w-full h-full object-cover z-20" 
                        onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none'; if(this.nextElementSibling && this.nextElementSibling.nextElementSibling) this.nextElementSibling.nextElementSibling.style.display='none';"
                        onerror="this.style.display='none';"
                    />
                    <div class="w-7 h-7 rounded-full border-4 border-t-brand-peach border-r-brand-pink border-b-brand-violet border-l-brand-lavender animate-[spin_15s_linear_infinite]"></div>
                    <div class="absolute inset-1.5 bg-neutral-950 rounded-lg flex items-center justify-center">
                        <span class="text-xs font-bold text-gradient font-display">A</span>
                    </div>
                </div>
                <span class="font-display font-bold text-xl tracking-tight hover:opacity-85 transition">azyr.app</span>
            </a>
            
            <nav class="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-xl border border-white/60 px-2 py-1.5 rounded-full shadow-sm">
                <a href="#features" class="px-4 py-1.5 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-full transition">Features</a>
                <a href="#privacy" class="px-4 py-1.5 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-full transition">Datenschutz</a>
                <a href="#faq" class="px-4 py-1.5 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-full transition">FAQ</a>
            </nav>

            <div class="flex items-center gap-3">
                <a href="#download" class="hidden sm:inline-flex items-center justify-center text-sm font-semibold px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition shadow-sm">
                    App laden
                </a>
                <!-- Mobile Menu Button -->
                <button class="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-neutral-200" id="mobile-menu-btn">
                    <i class="fa-solid fa-bars text-neutral-700 text-sm"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer menu -->
        <div class="hidden md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-neutral-200/50 p-6 shadow-xl flex flex-col gap-4" id="mobile-menu">
            <a href="#features" class="mobile-nav-link text-base font-medium py-2 border-b border-neutral-100 text-neutral-700">Features</a>
            <a href="#privacy" class="mobile-nav-link text-base font-medium py-2 border-b border-neutral-100 text-neutral-700">Datenschutz & iCloud</a>
            <a href="#faq" class="mobile-nav-link text-base font-medium py-2 border-b border-neutral-100 text-neutral-700">Häufige Fragen</a>
            <a href="#download" class="mobile-nav-link bg-gradient-brand text-white text-center font-bold py-3 rounded-2xl">Jetzt kostenlos laden</a>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative pt-6 pb-20 md:pt-12 md:pb-28">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Hero Left: Copy & CTA -->
                <div class="lg:col-span-7 flex flex-col items-start gap-6 text-left">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-brand/10 border border-brand-pink/20 rounded-full">
                        <i class="fa-solid fa-sparkles text-brand-pink animate-pulse text-xs"></i>
                        <span class="text-xs font-bold text-gradient uppercase tracking-wide">Brandneu im iOS App Store</span>
                    </div>

                    <h1 class="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-950 leading-[1.1]">
                        Produktivität, die deinen <span class="text-gradient">Rhythmus</span> versteht.
                    </h1>

                    <p class="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-xl">
                        Azyr verbindet deine täglichen Gewohnheiten und flexiblen Aufgaben in einem wunderschönen, fließenden Kreislauf. Entwickelt, um deine Energie zu steuern — nicht nur deine Fristen.
                    </p>

                    <!-- Download Buttons -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        <a href="#download" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:bg-neutral-900 transition-all shadow-lg active:scale-98">
                            <i class="fa-brands fa-apple text-2xl"></i>
                            <div class="text-left leading-none">
                                <p class="text-[10px] uppercase text-white/50 tracking-wider">Download im</p>
                                <p class="text-[17px] font-bold font-display mt-0.5">App Store</p>
                            </div>
                        </a>
                    </div>

                    <!-- Visual badges / App Store context -->
                    <div class="flex flex-wrap items-center gap-8 mt-4 pt-4 border-t border-neutral-100 w-full">
                        <div class="flex items-center gap-2 text-xs">
                            <i class="fa-solid fa-flask text-brand-pink"></i>
                            <span class="font-bold text-gradient uppercase tracking-wide">Azyr Alpha-Phase</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-500">
                            <i class="fa-solid fa-shield-halved text-brand-violet"></i>
                            <span>100% Sicherer iCloud-Sync</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-500">
                            <i class="fa-solid fa-user-lock text-brand-pink"></i>
                            <span>Keine Registrierung</span>
                        </div>
                    </div>
                              <!-- Hero Right: Static iOS-Style Mockup Card -->
                <div class="lg:col-span-5 flex justify-center items-center relative animate-[float_10s_ease-in-out_infinite]">
                    <!-- Absolute halo background for phone -->
                    <div class="absolute -inset-10 bg-[#FF7DB2]/15 rounded-full filter blur-3xl pointer-events-none"></div>
                    
                    <div class="relative w-full max-w-[340px] aspect-[9/19] bg-[#0c0c0e] rounded-[52px] p-3.5 shadow-2xl border-[8px] border-[#1e1e24] flex flex-col overflow-hidden select-none">
                        <!-- Notch -->
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-[#1e1e24] rounded-b-xl z-50"></div>
                        
                        <!-- Grid background gradients inside screen -->
                        <div class="absolute inset-0 bg-[#0c0c0e] z-0 overflow-hidden rounded-[38px]">
                            <div class="absolute -top-20 -left-16 w-44 h-44 rounded-full bg-[#FF9E7D]/10 blur-[30px] pointer-events-none"></div>
                            <div class="absolute top-40 -right-16 w-44 h-44 rounded-full bg-[#FF7DB2]/10 blur-[30px] pointer-events-none"></div>
                            <div class="absolute bottom-16 -left-20 w-48 h-48 rounded-full bg-[#B084F9]/15 blur-[40px] pointer-events-none"></div>
                        </div>

                        <div class="relative z-10 flex flex-col h-full text-white font-sans text-[13px] pt-4 px-2">
                            <!-- App mock header -->
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center gap-2">
                                    <div class="relative w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/10">
                                        <div class="w-5 h-5 rounded-full border-2 border-t-[#FF9E7D] border-r-[#FF7DB2] border-b-[#B084F9] border-l-[#C29BFF]"></div>
                                    </div>
                                    <div>
                                        <span class="text-[10px] text-white/50 block leading-none">azyrmosaic</span>
                                        <span class="font-display font-bold text-xs">Azyr Workspace</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-1 bg-gradient-to-r from-[#FF9E7D]/10 to-[#FF7DB2]/10 border border-[#FF7DB2]/20 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#FF7DB2]">
                                    🔥 12d Streak
                                </div>
                            </div>

                            <!-- Static Visual Mosaic Board representation -->
                            <div class="bg-white/5 border border-white/5 p-3 rounded-2xl mb-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-[10px] uppercase font-bold tracking-wide text-white/60">WOLKEN-RASTER</span>
                                    <span class="text-[10px] text-[#B084F9] font-semibold">18 / 36 Kacheln</span>
                                </div>
                                
                                <!-- Fixed gorgeous gradient grid representing the user progress -->
                                <div class="grid grid-cols-6 gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
                                    <div class="aspect-square rounded-md bg-[#FF9E7D] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF9E7D] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF9E7D] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF9E7D] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF9E7D] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF9E7D] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    
                                    <div class="aspect-square rounded-md bg-[#FF7DB2] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF7DB2] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF7DB2] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF7DB2] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF7DB2] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#FF7DB2] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>

                                    <div class="aspect-square rounded-md bg-[#B084F9] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#B084F9] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#B084F9] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#B084F9] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#B084F9] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>
                                    <div class="aspect-square rounded-md bg-[#B084F9] opacity-95 relative overflow-hidden"><div class="absolute inset-0 bg-white/15 mix-blend-overlay animate-pulse"></div></div>

                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>

                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                    <div class="aspect-square rounded-md bg-neutral-800/60"></div>
                                </div>
                            </div>

                            <!-- Today's Tasks Presentation Card -->
                            <div class="bg-[#121216] border border-white/5 rounded-2xl p-3 flex flex-col gap-2">
                                <span class="text-[9px] uppercase tracking-wider text-white/40 font-bold block">Tagesordnung</span>
                                
                                <div class="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg text-white/50 border border-transparent">
                                    <div class="w-3.5 h-3.5 rounded-md bg-gradient-brand flex items-center justify-center text-black shrink-0">
                                        <i class="fa-solid fa-check text-[8px]"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-[11px] font-medium truncate line-through">Design Feedback einpflegen</p>
                                        <span class="text-[8px] opacity-60">Routine • 09:30</span>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg border border-white/5 text-white">
                                    <div class="w-3.5 h-3.5 rounded-md border border-white/30 shrink-0"></div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-[11px] font-medium truncate">Azyr-Projekt starten</p>
                                        <span class="text-[8px] text-[#FF7DB2] font-bold">⚡ High Focus • 11:30</span>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg border border-[#303030] text-white">
                                    <div class="w-3.5 h-3.5 rounded-md border border-white/30 shrink-0"></div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-[11px] font-medium truncate">Mails & Support klären</p>
                                        <span class="text-[8px] text-[#FF9E7D] font-bold">🔋 Low Focus • 14:00</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Smart insights snippet -->
                            <div class="mt-4 bg-gradient-to-r from-[#B084F9]/10 to-[#C29BFF]/10 border border-[#B084F9]/15 p-2 px-3 rounded-xl text-[10px] text-white/90 leading-normal">
                                <p class="font-semibold text-[#C29BFF]">🧠 Zeigarnik-Empfehlung</p>
                                <p class="mt-0.5 text-white/75 text-[9px]">Unerledigte Dinge blockieren deinen Arbeitsspeicher. Notiere sie jetzt in Azyr!</p>
                            </div>

                            <!-- Bottom visual Lock bar -->
                            <div class="mt-auto mb-2 bg-[#1b1b24] p-2 rounded-xl border border-white/10 flex items-center justify-between text-[10px]">
                                <span class="font-bold">Gratis & iCloud verschlüsselt</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 2: THE 3D CONCEPT EXPLAINER BAR -->
    <section class="border-y border-neutral-100 bg-white/50 backdrop-blur-md">
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 class="font-display font-bold text-3xl sm:text-4xl text-gradient">Zéro</h3>
                    <p class="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-1">Registrierungszwang</p>
                </div>
                <div>
                    <h3 class="font-display font-bold text-3xl sm:text-4xl text-gradient">100%</h3>
                    <p class="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-1">iCloud-Verschlüsselt</p>
                </div>
                <div>
                    <h3 class="font-display font-bold text-3xl sm:text-4xl text-gradient">iOS Native</h3>
                    <p class="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-1">Apple Guidelines</p>
                </div>
                <div>
                    <h3 class="font-display font-bold text-3xl sm:text-4xl text-gradient">Visual</h3>
                    <p class="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-1">Mosaik-Belohnungen</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURES BENTO GRID SECTION (Highlighted Grid Cards) -->
    <section id="features" class="py-20 md:py-28 relative">
        <div class="max-w-6xl mx-auto px-6">
            
            <!-- Section Header -->
            <div class="text-center max-w-2xl mx-auto mb-16 reveal-element" id="features-header">
                <span class="text-xs font-bold font-mono uppercase tracking-widest text-brand-pink bg-brand-pink/5 px-3 py-1 rounded-full">Die Kerntechnologien</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-950 mt-4">
                    Alles, was du brauchst, um im Fluss zu bleiben.
                </h2>
                <p class="text-neutral-600 mt-4 leading-relaxed font-light">
                    Verabschiede dich von endlosen, einschüchternden Checklisten. Azyr stellt ein System vor, das deine Psychologie respektiert und Erfolge visualisiert.
                </p>
            </div>

            <!-- Bento Grid Layout -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                <!-- Card 1: Mosaic Tracking (Large Card, 7 columns) -->
                <div class="md:col-span-7 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group reveal-element">
                    <!-- Subtle background glow -->
                    <div class="absolute -right-16 -top-16 w-48 h-48 bg-brand-peach/15 rounded-full filter blur-2xl group-hover:bg-brand-peach/25 transition"></div>
                    <div>
                        <div class="w-12 h-12 bg-neutral-950 text-white rounded-2xl flex items-center justify-center shadow-md mb-6">
                            <i class="fa-solid fa-palette text-lg text-brand-peach"></i>
                        </div>
                        <h3 class="font-display font-bold text-2xl text-neutral-900 tracking-tight">Mosaic-Tracking</h3>
                        <p class="text-neutral-600 font-light mt-3 leading-relaxed">
                            Erledigte Gewohnheiten und To-Dos enthüllen Schritt für Schritt eine Mosaik-Kachel im eleganten Pixelraster. Jede abgeschlossene Kachel bringt dich dem fertigen Wochengemälde näher. Fortschritt wird zu Kunst.
                        </p>
                    </div>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">Visueller Ansporn</span>
                        <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">Wöchentliche Kunstwerke</span>
                    </div>
                </div>

                <!-- Card 2: Habits & To-Dos (5 columns) -->
                <div class="md:col-span-5 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group reveal-element">
                    <div class="absolute -left-16 -bottom-16 w-44 h-44 bg-brand-pink/15 rounded-full filter blur-2xl group-hover:bg-brand-pink/25 transition"></div>
                    <div>
                        <div class="w-12 h-12 bg-neutral-950 text-white rounded-2xl flex items-center justify-center shadow-md mb-6">
                            <i class="fa-solid fa-list-check text-lg text-brand-pink"></i>
                        </div>
                        <h3 class="font-display font-bold text-2xl text-neutral-900 tracking-tight">Habits & To-Dos</h3>
                        <p class="text-neutral-600 font-light mt-3 leading-relaxed">
                            Keine Trennung von Pflicht und Kür mehr. Deine wiederkehrenden Gewohnheiten verschmelzen nahtlos mit spontanen To-Dos in einem einheitlichen Workspace für deinen Tag.
                        </p>
                    </div>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-pink-50 text-brand-pink border border-pink-100">Unified View</span>
                    </div>
                </div>

                <!-- Card 3: Energie-basiertes Planen (5 columns) -->
                <div class="md:col-span-5 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group reveal-element">
                    <div class="absolute -right-16 -bottom-16 w-44 h-44 bg-brand-violet/15 rounded-full filter blur-2xl group-hover:bg-brand-violet/25 transition"></div>
                    <div>
                        <div class="w-12 h-12 bg-neutral-950 text-white rounded-2xl flex items-center justify-center shadow-md mb-6">
                            <i class="fa-solid fa-bolt text-lg text-brand-violet"></i>
                        </div>
                        <h3 class="font-display font-bold text-2xl text-neutral-900 tracking-tight">Energie-basiertes Planen</h3>
                        <p class="text-neutral-600 font-light mt-3 leading-relaxed">
                            Statt dich starr an Zeitzonen zu ketten, sortierst du Aufgaben nach benötigtem Fokus: <strong class="font-semibold">High Focus</strong>, <strong class="font-semibold">Low Focus</strong> oder <strong class="font-semibold">Routine</strong>. Azyr platziert sie automatisch in dein optimales Leistungs-Zeitfenster.
                        </p>
                    </div>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-violet-50 text-brand-violet border border-purple-100">Rhythmus-Matching</span>
                    </div>
                </div>

                <!-- Card 4: Kalender-Integration (7 columns) -->
                <div class="md:col-span-7 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group reveal-element">
                    <div class="absolute -left-16 -top-16 w-48 h-48 bg-brand-lavender/15 rounded-full filter blur-2xl group-hover:bg-brand-lavender/25 transition"></div>
                    <div>
                        <div class="w-12 h-12 bg-neutral-950 text-white rounded-2xl flex items-center justify-center shadow-md mb-6">
                            <i class="fa-solid fa-calendar-days text-lg text-brand-lavender"></i>
                        </div>
                        <h3 class="font-display font-bold text-2xl text-neutral-900 tracking-tight">Bidirektionaler Kalender-Sync</h3>
                        <p class="text-neutral-600 font-light mt-3 leading-relaxed">
                            Vollständiger Abgleich in beide Richtungen mit Apple Calendar. Azyr blockiert wichtige Zeiten und schaut automatisch nach intelligenten, stressfreien Pufferzeiten, um Überlastung proaktiv zu verhindern.
                        </p>
                    </div>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-brand-violet border border-purple-100">Smart Blocking</span>
                        <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-green-50 text-emerald-700 border border-emerald-100">Local Only DB</span>
                    </div>
                </div>

                <!-- Card 5: Belohnungssystem (6 columns) -->
                <div class="md:col-span-6 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group reveal-element">
                    <div>
                        <div class="w-11 h-11 bg-neutral-950 text-white rounded-xl flex items-center justify-center shadow-md mb-6">
                            <i class="fa-solid fa-brain text-md text-brand-pink"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-neutral-900">Psychologisches Belohnungssystem</h3>
                        <p class="text-neutral-500 font-light mt-2 leading-relaxed text-sm">
                            Schließe Reihen deines Mosaiks ab, um wissenschaftlich fundierte Fakten, Verhaltens-Tricks und psychologische Quick-Pills freizuschalten, die dir helfen, deine Willenskraft ohne Kampf zu maximieren.
                        </p>
                    </div>
                </div>

                <!-- Card 6: Cognitive peace (6 columns) -->
                <div class="md:col-span-6 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group reveal-element">
                    <div>
                        <div class="w-11 h-11 bg-neutral-950 text-white rounded-xl flex items-center justify-center shadow-md mb-6">
                            <i class="fa-solid fa-wand-magic-sparkles text-md text-brand-peach"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-neutral-900">Kognitive Entlastung (Keine Ablenkung)</h3>
                        <p class="text-neutral-500 font-light mt-2 leading-relaxed text-sm">
                            Azyr verzichtet bewusst auf störende Pop-ups, Gamification-Überflutung oder künstliche Animationen. Die App bleibt ein ruhiges, klares Werkzeug für deine alltägliche Balance und echte Geistesruhe.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 3: PRIVACY & SECURITY SECTION (Ultra Trusted Card Design) -->
    <section id="privacy" class="py-20 bg-[#0c0c0e] text-white relative overflow-hidden">
        <!-- Floating star vector effects inside dark privacy view -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#0c0c0e] to-black"></div>
        <div class="absolute -bottom-48 -right-48 w-96 h-96 bg-brand-violet/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div class="absolute -top-48 -left-48 w-96 h-96 bg-brand-pink/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-12 flex flex-col items-center gap-3">
                <div class="w-14 h-14 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 animate-[pulse_3s_infinite]">
                    <i class="fa-solid fa-lock text-black text-xl"></i>
                </div>
                <span class="text-xs font-bold font-mono text-brand-pink uppercase tracking-widest mt-3">100% Datenschutz</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mt-1">
                    Deine Daten gehören dir.<br><span class="text-gradient">Und nur dir.</span>
                </h2>
            </div>

            <!-- Sleek Glassmorphism Board explaining details of security model -->
            <div class="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    <div class="flex flex-col gap-6 justify-between">
                        <div class="flex flex-col gap-3">
                            <h3 class="font-display font-bold text-xl text-white flex items-center gap-2">
                                <i class="fa-solid fa-server text-red-400 text-sm"></i>
                                Kein Server, kein Tracking
                            </h3>
                            <p class="text-neutral-400 font-light leading-relaxed text-sm">
                                Azyr speichert deine Passwörter, Kalenderdaten oder Absichten niemals auf fremden Servern. Es gibt keine externe Cloud, keine Tracking-Skripte und vor allem: absolut keine Registrierung.
                            </p>
                        </div>
                        <div class="h-[1px] bg-white/10 w-full my-1"></div>
                        <div class="flex flex-col gap-3">
                            <h3 class="font-display font-bold text-xl text-white flex items-center gap-2">
                                <i class="fa-solid fa-cloud text-brand-lavender text-sm"></i>
                                E2E iCloud Synchronisation
                            </h3>
                            <p class="text-neutral-400 font-light leading-relaxed text-sm">
                                Verwende dein iPhone und iPad parallel: Dein Daten-Sync läuft flüssig über deine persönliche Apple-iCloud, vollkommen Ende-zu-Ende-verschlüsselt. Niemand — nicht einmal wir Designer — kann jemals hineinsehen.
                            </p>
                        </div>
                    </div>

                    {/* Right side graphical representation of locally locked database */}
                    <div class="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                        <div class="flex justify-between items-center text-[10px] font-mono text-white/40">
                            <span>CRYPTO_LOCK: SECURE</span>
                            <span class="text-emerald-400 animate-pulse">● LOCAL_SYNCED</span>
                        </div>
                        
                        <div class="my-6 flex flex-col items-center justify-center gap-3">
                            <div class="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative">
                                <div class="absolute inset-0 rounded-full border border-transparent border-t-brand-peach animate-spin" style="animation-duration: 4s;"></div>
                                <i class="fa-solid fa-shield text-3xl text-gradient"></i>
                            </div>
                            <span class="text-xs font-mono tracking-widest text-neutral-400 font-bold">SHA-256 ENCRYPTED</span>
                        </div>

                        <div class="text-[9.5px] font-mono text-brand-violet bg-brand-violet/10 p-2.5 rounded-lg border border-brand-violet/20 text-center leading-none">
                            Keine Drittanbieter-Frameworks integriert.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- FAQ SECTION WITH ACCORDION -->
    <section id="faq" class="py-20 md:py-28">
        <div class="max-w-4xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16 reveal-element" id="faq-header">
                <span class="text-xs font-bold font-mono uppercase tracking-widest text-brand-peach bg-brand-peach/10 px-3 py-1 rounded-full">Häufig gestellte Fragen</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-950 mt-4">
                    Alles, was du zur App wissen möchtest.
                </h2>
            </div>

            <!-- Accordion container -->
            <div class="flex flex-col gap-4">
                
                <!-- FAQ 1 -->
                <div class="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaq(1)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-extrabold text-base md:text-lg focus:outline-none text-neutral-900 hover:text-brand-pink transition">
                        <span>Kostet Azyr etwas oder gibt es Abos?</span>
                        <i class="fa-solid fa-chevron-down text-neutral-400 text-sm transition-transform duration-300" id="faq-icon-1"></i>
                    </button>
                    <div id="faq-answer-1" class="hidden px-6 pb-6 text-neutral-600 font-light leading-relaxed text-sm md:text-base border-t border-neutral-100/50 pt-3">
                        Azyr ist aktuell in der Alpha-Phase komplett kostenlos und werbefrei nutzbar. Sämtliche Kernfunktionen wie Timeline-Planung, Gewohnheiten und das visuelle Mosaik-Board stehen dir unbegrenzt gratis zur Verfügung. Für die Zukunft sind optionale Premium-Erweiterungen über ein faires Abonnement-Modell geplant, wobei die bereits existierenden Kernfunktionen so weit wie möglich kostenfrei bleiben.
                    </div>
                </div>

                <!-- FAQ 2 -->
                <div class="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaq(2)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-extrabold text-base md:text-lg focus:outline-none text-neutral-900 hover:text-brand-pink transition">
                        <span>Wie funktioniert der bidirektionale Kalender-Sync?</span>
                        <i class="fa-solid fa-chevron-down text-neutral-400 text-sm transition-transform duration-300" id="faq-icon-2"></i>
                    </button>
                    <div id="faq-answer-2" class="hidden px-6 pb-6 text-neutral-600 font-light leading-relaxed text-sm md:text-base border-t border-neutral-100/50 pt-3">
                        Nachdem du Azyr berechtigt hast, liest die App deine iOS-Kalendereinträge direkt lokal auf deinem Gerät aus. Termine werden reserviert, und Azyr plant davor und danach Pufferzeiten ein. Änderungen in deinem Kalender spiegeln sich in Echtzeit in der Azyr-Timeline wider – und umgekehrt.
                    </div>
                </div>

                <!-- FAQ 3 -->
                <div class="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
                    <button onclick="toggleFaq(3)" class="w-full text-left px-6 py-5 flex items-center justify-between font-display font-extrabold text-base md:text-lg focus:outline-none text-neutral-900 hover:text-brand-pink transition">
                        <span>Gibt es Azyr bald auch für Android?</span>
                        <i class="fa-solid fa-chevron-down text-neutral-400 text-sm transition-transform duration-300" id="faq-icon-3"></i>
                    </button>
                    <div id="faq-answer-3" class="hidden px-6 pb-6 text-neutral-600 font-light leading-relaxed text-sm md:text-base border-t border-neutral-100/50 pt-3">
                        Azyr ist als komplett native iOS-App konzipiert, um maximale Performance, erstklassiges Haptik-Feedback mit der Taptic Engine und datenschutzkonforme iCloud-Integrationen zu garantieren. Eine Android-Version ist derzeit nicht in Planung, da dies mit den Kernprinzipien der lokalen Datenhaltung kollidieren würde.
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 4: FINAL CTA & CONVERSION BOOSTER (Extrem modern) -->
    <section id="download" class="relative py-24 overflow-hidden">
        <div class="absolute inset-0 bg-neutral-950"></div>
        <div class="absolute -top-48 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-pink/15 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div class="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div class="max-w-2xl mx-auto flex flex-col items-center gap-6">
                <!-- Glowing launcher emblem -->
                <div class="relative w-20 h-20 rounded-3xl bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/20 shadow-xl shadow-brand-pink/10 group mb-4">
                    <!-- Optional logo.png placeholder - overrides CSS icon when uploaded -->
                    <img 
                        src="logo.png" 
                        alt="Azyr Logo" 
                        style="display: none;"
                        class="absolute inset-0 w-full h-full object-cover z-20" 
                        onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none'; if(this.nextElementSibling && this.nextElementSibling.nextElementSibling) this.nextElementSibling.nextElementSibling.style.display='none';"
                        onerror="this.style.display='none';"
                    />
                    <div class="w-16 h-16 rounded-full border-[6px] border-t-brand-peach border-r-brand-pink border-b-brand-violet border-l-brand-lavender animate-[spin_10s_linear_infinite]"></div>
                    <div class="absolute inset-2.5 bg-neutral-950 rounded-[18px] flex items-center justify-center">
                        <span class="text-xl font-black text-gradient font-display">Az</span>
                    </div>
                </div>

                <span class="text-xs font-bold font-mono tracking-widest text-brand-pink bg-brand-pink/10 px-3 py-1 rounded-full uppercase">Letzter Schritt</span>
                <h2 class="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                    Starte noch heute in deinen Rhythmus.
                </h2>
                <p class="text-neutral-400 font-light leading-relaxed text-base sm:text-lg mt-2">
                    Azyr ist für alle, die produktiv sein wollen, ohne sich in unendlichen Checklisten zu verlieren. Probiere es kostenlos aus und transformiere deine Energie.
                </p>

                <!-- Ultimate Download Link Badge -->
                <div class="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center">
                    <a href="https://apple.com/app-store" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-brand hover:opacity-90 transition rounded-2xl w-full sm:w-auto shadow-xl group hover:scale-[1.02] duration-300">
                        <i class="fa-brands fa-apple text-2xl text-black"></i>
                        <div class="text-left leading-none text-black">
                            <p class="text-[9px] uppercase font-semibold text-black/60 tracking-wider">Erhalten im App Store für</p>
                            <p class="text-lg font-extrabold font-display mt-0.5">iPhone & iPad</p>
                        </div>
                    </a>
                </div>

                <div class="flex flex-wrap justify-center gap-6 text-xs text-neutral-500 mt-6 font-mono border-t border-white/10 pt-6 w-full">
                    <span><i class="fa-solid fa-circle-check text-emerald-400 mr-1.5"></i>KOSTENLOS STARTEN</span>
                    <span><i class="fa-solid fa-circle-check text-emerald-400 mr-1.5"></i>VOLLSTÄNDIG GRATIS</span>
                    <span><i class="fa-solid fa-circle-check text-emerald-400 mr-1.5"></i>KEINE TRACKER</span>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER SECTION (Clean and Apple-like) -->
    <footer class="bg-neutral-50 border-t border-neutral-100 py-16 text-xs text-neutral-500">
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-neutral-200/50 pb-8 mb-8">
                
                <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <div class="relative w-6 h-6 rounded bg-neutral-950 flex items-center justify-center overflow-hidden">
                            <!-- Optional logo.png placeholder - overrides CSS icon when uploaded -->
                            <img 
                                src="logo.png" 
                                alt="Azyr Logo" 
                                style="display: none;"
                                class="absolute inset-0 w-full h-full object-cover z-20" 
                                onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none';"
                                onerror="this.style.display='none';"
                            />
                            <span class="text-[9px] font-bold text-gradient">A</span>
                        </div>
                        <span class="font-display font-bold text-sm text-neutral-800">azyr.app</span>
                    </div>
                    <p class="max-w-xs font-light text-neutral-400 leading-normal">
                        Ein privates Projekt von Dominik Kocsordi. Minimalistisch gestaltete Benutzeroberflächen für kognitive Balance und gesunden Fokus.
                    </p>
                </div>

                <!-- Footer Links list -->
                <div class="flex flex-wrap gap-x-8 gap-y-3">
                    <a href="#" class="font-semibold text-neutral-600 hover:text-black transition">Impressum</a>
                    <a href="#" class="font-semibold text-neutral-600 hover:text-black transition">Datenschutz</a>
                    <a href="#" class="font-semibold text-neutral-600 hover:text-black transition">Kontakt</a>
                    <a href="#" class="font-semibold text-neutral-600 hover:text-black transition">Nutzungsbedingungen</a>
                </div>

            </div>

            <!-- Legalese block -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-400">
                <span>&copy; 2026 azyr.app / Dominik Kocsordi. Alle Rechte vorbehalten.</span>
                <span>Designed in lockstep with iOS Human Interface Guidelines.</span>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE SIMULATOR CLIENT-SIDE RECONCILIATION LOGIC -->
    <script>

        // On document ready
        window.addEventListener('DOMContentLoaded', () => {
            initAnimationsOnScroll();

            // Setup Header change on scroll
            window.addEventListener('scroll', () => {
                const header = document.getElementById('site-header');
                if (window.scrollY > 40) {
                    header.classList.add('bg-white/80', 'backdrop-blur-xl', 'border-b', 'border-neutral-200/50', 'shadow-sm');
                } else {
                    header.classList.remove('bg-white/80', 'backdrop-blur-xl', 'border-b', 'border-neutral-200/50', 'shadow-sm');
                }
            });

            // Toggle Mobile menu
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Close mobile menu on nav link click
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });
        });





        // Accordion functionality for general FAQs
        function toggleFaq(num) {
            const answer = document.getElementById('faq-answer-' + num);
            const icon = document.getElementById('faq-icon-' + num);
            const panel = answer.parentElement;

            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
                panel.classList.add('bg-white', 'shadow-md', 'scale-102', 'border-brand-pink/20');
            } else {
                answer.classList.add('hidden');
                icon.classList.remove('rotate-180');
                panel.classList.remove('bg-white', 'shadow-md', 'scale-102', 'border-brand-pink/20');
            }
        }

        // Intelligente Slide-in-Scroll Animations logic
        function initAnimationsOnScroll() {
            const reveals = document.querySelectorAll('.reveal-element');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(r => observer.observe(r));
        }
    </script>
</body>
</html>
`;
