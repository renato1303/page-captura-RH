import { useState, useRef, useEffect, useId, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Send, 
  DollarSign, 
  Sparkles,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { CloserApplicationForm } from "../types";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState<CloserApplicationForm>({
    name: "",
    email: "",
    whatsapp: "",
    linkedinOrSocial: "",
    experienceYears: "1 a 3 anos",
    biggestDealOrResult: "",
    motivation: "",
    videoLink: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Form field unique IDs for accessibility
  const nameInputId = useId();
  const emailInputId = useId();
  const whatsappInputId = useId();
  const linkedinInputId = useId();
  const experienceSelectId = useId();
  const biggestDealInputId = useId();
  const motivationInputId = useId();
  const videoInputId = useId();

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMsg("");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 150);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      setErrorMsg("Por favor, preencha nome, e-mail e WhatsApp para podermos avaliar sua candidatura.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate registration submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleSendViaWhatsApp = () => {
    const message = `*Candidatura Closer Será Cacau*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A` +
      `*E-mail:* ${encodeURIComponent(formData.email)}%0A` +
      `*Experiência:* ${encodeURIComponent(formData.experienceYears)}%0A` +
      `*LinkedIn:* ${encodeURIComponent(formData.linkedinOrSocial || "Não informado")}%0A` +
      `*Maior Fechamento:* ${encodeURIComponent(formData.biggestDealOrResult || "Não informado")}%0A` +
      `*Motivação:* ${encodeURIComponent(formData.motivation || "Não informado")}%0A` +
      `*Vídeo:* ${encodeURIComponent(formData.videoLink || "Não informado")}`;

    // Abre conversa oficial de recrutamento Será Cacau
    window.open(`https://wa.me/5573998188177?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          id="closer-application-modal" 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-brand-border/80 overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-brand-dark text-white px-6 py-5 sm:px-8 sm:py-6 flex items-start justify-between border-b border-white/10">
              <div className="space-y-1 pr-6">
                <div className="inline-flex items-center space-x-2 bg-brand-accent/20 text-brand-accent border border-brand-accent/30 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
                  <Sparkles size={12} />
                  <span>Vaga Closer B2B · Processo Seletivo</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-medium text-white tracking-tight">
                  Candidatura: Closer de Alta Performance
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 font-sans font-light">
                  Preencha seus dados para nossa equipe analisar seu perfil comercial.
                </p>
              </div>
              <button
                onClick={onClose}
                id="btn-close-application-modal"
                className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                aria-label="Fechar formulário"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm font-sans">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome Completo */}
                    <div className="space-y-1.5">
                      <label htmlFor={nameInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono">
                        Nome Completo *
                      </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="name"
                        id={nameInputId}
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor={whatsappInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono">
                        WhatsApp (com DDD) *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        id={whatsappInputId}
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(DDD) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* E-mail */}
                    <div className="space-y-1.5">
                      <label htmlFor={emailInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono">
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id={emailInputId}
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all"
                      />
                    </div>

                    {/* LinkedIn ou Perfil Profissional */}
                    <div className="space-y-1.5">
                      <label htmlFor={linkedinInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono">
                        LinkedIn ou Instagram Comercial
                      </label>
                      <input
                        type="text"
                        name="linkedinOrSocial"
                        id={linkedinInputId}
                        value={formData.linkedinOrSocial}
                        onChange={handleChange}
                        placeholder="linkedin.com/in/seuperfil"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Anos de Experiência */}
                  <div className="space-y-1.5">
                    <label htmlFor={experienceSelectId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono">
                      Tempo de Experiência em Fechamento de Vendas (Closer / B2B)
                    </label>
                    <select
                      name="experienceYears"
                      id={experienceSelectId}
                      value={formData.experienceYears}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all cursor-pointer"
                    >
                      <option value="Menos de 1 ano">Menos de 1 ano (Iniciante determinado)</option>
                      <option value="1 a 3 anos">1 a 3 anos (Já fecho com consistência)</option>
                      <option value="3 a 5 anos">3 a 5 anos (Experiência sólida B2B / High Ticket)</option>
                      <option value="Mais de 5 anos">Mais de 5 anos (Especialista em fechamento)</option>
                    </select>
                  </div>

                  {/* Maior Fechamento ou Recorde */}
                  <div className="space-y-1.5">
                    <label htmlFor={biggestDealInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono flex items-center justify-between">
                      <span>Qual foi seu maior fechamento ou mês de vendas?</span>
                      <span className="text-gray-400 font-normal lowercase">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      name="biggestDealOrResult"
                      id={biggestDealInputId}
                      value={formData.biggestDealOrResult}
                      onChange={handleChange}
                      placeholder="Ex: R$ 85.000 em um mês / Contrato de R$ 40k para empório"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all"
                    />
                  </div>

                  {/* Motivação */}
                  <div className="space-y-1.5">
                    <label htmlFor={motivationInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono">
                      Por que você quer ser o Closer da Será Cacau?
                    </label>
                    <textarea
                      name="motivation"
                      id={motivationInputId}
                      rows={3}
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Conte brevemente o que te atraiu na nossa oportunidade e produto..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Link de Apresentação em Vídeo */}
                  <div className="space-y-1.5">
                    <label htmlFor={videoInputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-dark font-mono flex items-center justify-between">
                      <span>Link do Vídeo de Apresentação (Loom / Drive / Youtube)</span>
                      <span className="text-brand-accent font-normal lowercase">Diferencial</span>
                    </label>
                    <input
                      type="url"
                      name="videoLink"
                      id={videoInputId}
                      value={formData.videoLink}
                      onChange={handleChange}
                      placeholder="https://www.loom.com/share/..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-sec/30 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white text-sm transition-all"
                    />
                    <p className="text-[11px] text-gray-500 font-sans">
                      Candidatos que enviam um pitch rápido de 1 a 2 minutos recebem prioridade imediata na triagem.
                    </p>
                  </div>

                  {/* Botões de Ação */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="btn-submit-closer-application"
                      className="flex-1 px-6 py-3.5 bg-brand-dark text-white rounded-full text-sm font-medium hover:bg-brand-accent transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processando candidatura...</span>
                      ) : (
                        <>
                          <span>Enviar Candidatura</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      id="btn-whatsapp-closer-application"
                      className="px-5 py-3.5 border border-brand-border text-brand-dark hover:bg-brand-bg-sec rounded-full text-sm font-medium transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <MessageCircle size={16} className="text-green-600" />
                      <span>Falar via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Sucesso na Inscrição */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-medium text-brand-dark">
                      Candidatura Recebida com Sucesso!
                    </h3>
                    <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                      Obrigado pelo seu interesse, <strong>{formData.name}</strong>. Nossa liderança comercial analisará suas informações e entrará em contato via WhatsApp nas próximas 24 horas.
                    </p>
                  </div>

                  <div className="p-4 bg-brand-bg-sec/50 border border-brand-border rounded-xl text-left max-w-md mx-auto space-y-2 text-xs">
                    <div className="font-mono uppercase font-semibold text-brand-dark flex items-center justify-between">
                      <span>Próximas Etapas:</span>
                      <span className="text-brand-accent">Etapa 1 de 4</span>
                    </div>
                    <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                      <li>Triagem de perfil e currículo comercial</li>
                      <li>Alinhamento inicial via WhatsApp ou chamada rápida</li>
                      <li>Roleplay simulado de fechamento de produto Será Cacau</li>
                      <li>Proposta e início imediato das reuniões</li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-3 bg-green-700 text-white rounded-full text-sm font-medium hover:bg-green-800 transition-colors inline-flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                    >
                      <MessageCircle size={16} />
                      <span>Acelerar pelo WhatsApp</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 border border-brand-border text-brand-dark rounded-full text-sm font-medium hover:bg-brand-bg-sec transition-colors cursor-pointer"
                    >
                      Fechar
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
