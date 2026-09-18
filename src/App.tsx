import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import SitemapSection from "./components/SitemapSection";

// Path to assets
const BRAND_LOGO = "/images/logo_sera.png";
const CAREERS_URL = "https://rh.seracacau.com.br";

export default function App() {
  const requirements = [
    "Capacidade de fazer perguntas estratégicas que evidenciam o valor da Será Cacau",
    "Condução natural da conversa para o pedido de fechamento ao final da reunião.",
    "Experiência prévia em vendas",
    "Domínio de contorno de objeções clássicas",
    "Inconformismo positivo e proatividade constante para otimizar suas taxas de conversão.",
    "Indispensável ter um computador e uma boa câmera",
    "Ter disponibilidade de horário para 4 ou 5 calls diárias"
  ];

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-support selection:text-brand-dark font-sans antialiased overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="grain-overlay" />

      {/* HEADER COM LOGO */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border/60 py-3.5 md:py-4 transition-all">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start">
          <a href="#" className="flex items-center group" aria-label="Será Cacau">
            <img 
              src={BRAND_LOGO} 
              alt="Será Cacau" 
              className="h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
            />
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* DOBRA 1: HEADLINE + BOTÃO (QUERO FAZER PARTE)                             */}
      {/* Ocupa a tela inteira no mobile (min-h-[calc(100vh-65px)]) para a 2ª parte */}
      {/* aparecer somente com scroll                                              */}
      {/* ========================================================================= */}
      <section 
        id="hero" 
        className="relative min-h-[calc(100dvh-65px)] md:min-h-[80vh] flex flex-col items-center justify-center py-12 md:py-24 bg-gradient-to-b from-white via-brand-bg-sec/25 to-white border-b border-brand-border/40"
      >
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-8 sm:space-y-10 my-auto">
          {/* HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 18 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-brand-dark leading-[1.18] md:leading-[1.12] tracking-tight font-normal max-w-4xl mx-auto"
          >
            Buscamos um <span className="italic font-light text-brand-accent">Closer de Alta Performance</span> para liderar o fechamento de grandes contas na Será Cacau.
          </motion.h1>

          {/* BOTÃO PRINCIPAL (QUERO FAZER PARTE) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-4 pt-2 flex flex-col items-center justify-center w-full sm:w-auto"
          >
            <a
              href={CAREERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-hero-quero-fazer-parte"
              className="w-full sm:w-auto group relative px-8 sm:px-10 py-4 sm:py-5 bg-brand-dark text-white font-medium rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-brand-accent hover:scale-[1.01] shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center space-x-3"
            >
              <span className="font-sans font-semibold tracking-wide text-center">QUERO FAZER PARTE</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
            </a>
            
            <p className="text-xs text-brand-muted font-sans flex items-center justify-center text-center gap-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shrink-0"></span>
              Vagas limitadas · Análise e retorno da liderança em até 24 horas
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DOBRA 2: QUEM ESTAMOS BUSCANDO (MAPA DO PERFIL DO CLOSER IDEAL) + BOTÃO   */}
      {/* ========================================================================= */}
      <section 
        id="quem-estamos-buscando" 
        className="py-20 md:py-28 bg-white border-b border-brand-border/60"
      >
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Cabeçalho da Dobra 2 */}
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark leading-tight font-normal">
              QUEM ESTAMOS BUSCANDO
            </h2>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-accent font-medium">
              (O Mapa do Perfil do Closer Ideal)
            </p>
          </div>

          {/* LISTA DE REQUISITOS DO CLOSER */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-brand-bg-sec/40 border border-brand-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start space-x-3.5 p-3.5 bg-white rounded-2xl border border-brand-border/80 shadow-xs"
                  >
                    <div className="p-1 rounded-full bg-brand-accent/10 text-brand-accent mt-0.5 shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-sm sm:text-base text-brand-dark font-sans font-medium leading-relaxed">
                      {req}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTÃO DA DOBRA 2 (((BOTÃO))) */}
          <div className="pt-4 text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href={CAREERS_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-dobra2-quero-fazer-parte"
                className="group relative px-10 py-5 bg-brand-accent hover:bg-brand-accent/90 text-white font-medium rounded-full text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer inline-flex items-center justify-center space-x-3"
              >
                <span className="font-sans font-semibold tracking-wide">QUERO FAZER PARTE DA SERÁ CACAU</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SITEMAP                                                                   */}
      {/* ========================================================================= */}
      <SitemapSection />
    </div>
  );
}
