"use client";

import { useEffect, useRef } from "react";

export default function NextParticleComponent() {
  const imgRef = useRef<HTMLImageElement>(null);
  const initializedRef = useRef(false); // Garantir que a inicialização ocorra apenas uma vez

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/nextparticle.min.js"; // Certifique-se de que o caminho está correto
    script.async = true;

    script.onload = () => {
      if ((window as any).NextParticle) {
        const img = imgRef.current;

        if (img) {
          // Define a imagem como invisível inicialmente
          img.style.opacity = "0";

          // Verifica se o NextParticle não foi inicializado
          if (!initializedRef.current) {
            initializedRef.current = true; // Marca como inicializado

            if (img.complete && img.naturalWidth > 0) {
              initializeNextParticle(img);
            } else {
              // Espera o carregamento da imagem
              img.onload = () => {
                if (img.naturalWidth > 0) {
                  initializeNextParticle(img);
                } else {
                  console.error("A imagem não tem dimensões válidas.");
                }
              };

              // Trata erros de carregamento da imagem
              img.onerror = () => {
                console.error("Erro ao carregar a imagem.");
              };
            }
          }
        } else {
          console.error("Elemento da imagem não encontrado.");
        }
      } else {
        console.error("NextParticle não foi carregado corretamente.");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Função para inicializar o NextParticle
  const initializeNextParticle = (img: HTMLImageElement) => {
    try {
      const nextParticle = new (window as any).NextParticle(img);
      nextParticle.particleGap = 2;
      nextParticle.noise = 30;
      nextParticle.mouseForce = 30;
      nextParticle.size = Math.max(window.innerWidth, window.innerHeight);
      nextParticle.colorize = false;
      nextParticle.tint = "#FF00FF";
      nextParticle.start();

      // Torna a imagem visível após a inicialização do NextParticle
      img.style.opacity = "1";
    } catch (error) {
      console.error("Erro ao inicializar o NextParticle:", error);
    }
  };

  return (
    <div className="particle-container">
      <img
        ref={imgRef}
        id="logo"
        data-init-position="random"
        data-init-direction="random"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
        alt="Logo"
        style={{ opacity: 0 }} // Define a imagem como invisível inicialmente
      />
    </div>
  );
}
