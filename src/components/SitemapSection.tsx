import { ArrowUpRight, MapPin, Mail, Phone, ShieldCheck, Heart, Sparkles } from "lucide-react";

interface SitemapSectionProps {
  onOpenApplication?: () => void;
}

export default function SitemapSection({ onOpenApplication: _onOpenApplication }: SitemapSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="sitemap" className="bg-brand-dark text-white border-t border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sitemap Header / Brand Summary */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-2xl tracking-wider uppercase font-light text-white">
                SERÁ CACAU
              </span>
            </div>
            <p className="text-sm text-gray-400 font-sans font-light max-w-lg">
              Cacau 100% puro da Bahia com base agroflorestal. Conectando pessoas e negócios à verdadeira vida além do café.
            </p>
          </div>
        </div>

        {/* Sitemap Grid / Contato Direto */}
        <div className="pt-6 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
          <div className="text-xs text-gray-400 font-sans space-y-1">
            <p className="font-mono text-gray-300">Canais de Contato:</p>
            <p>WhatsApp: (73) 99818-8177 · E-mail: contato@seracacau.com.br</p>
          </div>
        </div>

        {/* Sitemap Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-sans gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Será Cacau Alimentos Ltda. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-mono text-gray-400">
            <span>Privacidade & LGPD</span>
            <span>·</span>
            <span>Seleção Ética e Transparente</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
