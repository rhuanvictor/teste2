"use client";
import { fontLexend, fontDangrek, fontAcme } from "@/config/fonts";
import React, { useEffect, useState, useMemo } from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";

const TextCloudDemo: React.FC = () => {
  const [radius, setRadius] = useState(200); // Raio inicial
  const [fontScale, setFontScale] = useState(1); // Escala da fonte inicial

  // Ajusta o raio e a escala da fonte com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 250) {
        setRadius(80);
        setFontScale(0.5);
      } else if (screenWidth < 480) {
        setRadius(100);
        setFontScale(0.6);
      } else if (screenWidth < 640) {
        setRadius(150);
        setFontScale(0.8);
      } else {
        setRadius(200);
        setFontScale(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Configura o valor inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const texts = [
    "Assertividade",
    "Solução",
    "Negócios",
    "Finanças",
    "Eficiência",
    "Automação",
    "Otimização",
    "Comunicação",
    "Tecnologia",
    "Resultado"
  ];

  const gradients = [
    "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400", // "Assertividade"
    "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400", // "Solução"
    "bg-gradient-to-r from-green-600 via-green-600 to-green-400", // "Negócios"
    "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400", // "Finanças"
    "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400", // "Eficiência"
    "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400", // "Automação"
    "bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400", // "Otimização"
    "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400", // "Comunicação"
    "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400", // "Tecnologia"
    "bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600", // "Resultado"
  ];

  const baseSizes = [25, 20, 25, 25, 20, 20, 20, 20, 20, 25]; // Tamanhos base das fontes
  const sizes = baseSizes.map((size) => size * fontScale); // Aplica a escala ao tamanho da fonte

  const fonts = [
    `${fontDangrek.className}`,
    `${fontAcme.className}`,
    "font-mono",
    "font-bold",
    "font-extralight",
    "font-medium",
    "font-black",
    `${fontLexend.className}`,
    `${fontLexend.className}`,
    `${fontLexend.className}`,
  ];

  // Aplica estilos dinamicamente após o render
  useEffect(() => {
    const tags = document.querySelectorAll(".tagcloud > span");
    tags.forEach((tag, index) => {
      const element = tag as HTMLElement;
      element.classList.add("text-transparent", "bg-clip-text");

      // Adiciona o degradê corretamente
      gradients[index % gradients.length].split(" ").forEach((cls) => {
        element.classList.add(cls);
      });

      // Adiciona fonte
      element.classList.add(fonts[index % fonts.length]);

      // Aplica o tamanho da fonte com a escala
      element.style.fontSize = `${sizes[index % sizes.length]}px`;
    });
  }, [fontScale]); // Re-renderiza quando a escala da fonte muda

  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <TagCloud
        options={{
          radius: radius,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        }}
        className="tagcloud"
      >
        {texts}
      </TagCloud>
    </div>
  );
};

export default TextCloudDemo;