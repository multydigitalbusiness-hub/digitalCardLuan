import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Save, 
  MessageCircle, 
  Globe, 
  Mail, 
  ExternalLink,
  User
} from 'lucide-react';

const NebulaBackground = () => (
  <div className="nebula-container">
    <div className="nebula-cloud nebula-cloud-1" />
    <div className="nebula-cloud nebula-cloud-2" />
    <div className="nebula-cloud nebula-cloud-3" />
    {/* Stars */}
    <div className="absolute inset-0 opacity-30">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 'px',
            height: Math.random() * 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  </div>
);

interface LinkItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color?: string;
  download?: string;
}

const LinkItem = ({ href, icon, label, color, download }: LinkItemProps) => (
  <motion.a
    href={href}
    target={download ? undefined : "_blank"}
    rel={download ? undefined : "noopener noreferrer"}
    download={download}
    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    whileTap={{ scale: 0.98 }}
    className="relative flex items-center justify-center w-full h-12 rounded-full glass-effect text-white group transition-all duration-300"
  >
    <div className={`absolute left-3 p-1.5 rounded-full ${color || 'bg-white/10'} flex items-center justify-center`}>
      {React.cloneElement(icon as React.ReactElement, { size: 18 })}
    </div>
    <span className="font-medium tracking-tight text-center text-[11px] sm:text-xs uppercase px-10 whitespace-nowrap">
      {label}
    </span>
    <ExternalLink size={14} className="absolute right-4 opacity-0 group-hover:opacity-30 transition-opacity" />
  </motion.a>
);

export default function App() {
  // Configurações dos links - Substitua pelos links reais se necessário
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Luan Pedro
ORG:SEO Local
TEL;TYPE=CELL:+5585981407037
EMAIL:contato@luanpedro.com.br
END:VCARD`;

  const links = [
    {
      href: "https://wa.link/5roel3", // Link do WhatsApp atualizado
      icon: <MessageCircle size={24} className="text-[#25D366]" />,
      label: "WhatsApp",
      color: "bg-[#25D366]/10"
    },
    {
      href: "tel:+5585981407037", // Número de telefone atualizado
      icon: <Phone size={24} className="text-blue-500" />,
      label: "Ligar",
      color: "bg-blue-500/10"
    },
    {
      href: `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`,
      icon: <Save size={24} className="text-amber-400" />,
      label: "Salvar Contato",
      color: "bg-amber-400/10",
      download: "LuanPedro.vcf"
    },
    {
      href: "https://multyland-zypczm6k.manus.space/",
      icon: <Globe size={24} className="text-blue-400" />,
      label: "Site Oficial",
      color: "bg-blue-400/10"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 font-sans">
      <NebulaBackground />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[340px] sm:max-w-md glass-effect rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        
        <header className="mb-6">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="relative inline-block"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mx-auto mb-4 sm:mb-6 bg-white/5 flex items-center justify-center">
              {/* Tentando carregar a imagem, se falhar mostra um ícone */}
              <img 
                src={`${import.meta.env.BASE_URL}luanPedro.webp`} 
                alt="Luan Pedro" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-white/20"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>';
                }}
              />
            </div>
          </motion.div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
            Luan Pedro
          </h1>
          <p className="text-blue-200/80 font-light leading-snug text-sm sm:text-base">
            Especialista em SEO Local<br />
            <span className="text-white/60 italic text-[11px] sm:text-sm">
              "Faço sua empresa ser encontrada por quem está por perto"
            </span>
          </p>
        </header>

        <div className="space-y-3 mb-8">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <LinkItem {...link} />
            </motion.div>
          ))}
        </div>

        <footer className="pt-8 border-t border-white/10 flex flex-col items-center gap-2">
          <p className="text-white/40 text-[10px] tracking-widest uppercase">
            &copy; 2026 Desenvolvido por
          </p>
          <img 
            src={`${import.meta.env.BASE_URL}logoMulty.webp`} 
            alt="Multy Digital" 
            className="h-6 opacity-60 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const text = document.createElement('span');
              text.className = 'text-white/40 text-xs font-bold tracking-wider';
              text.innerText = 'MULTY DIGITAL';
              (e.target as HTMLImageElement).parentElement?.appendChild(text);
            }}
          />
        </footer>
      </motion.main>
    </div>
  );
}
