"use client"

import { useMemo } from "react"
import { Cloud, ICloud } from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "400px", // Garante que a nuvem apareça
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export type DynamicCloudProps = {
  words: string[]
}

export function TextCloud({ words }: DynamicCloudProps) {
  const renderedWords = useMemo(() => {
    return words.map((word, index) => (
      <a
        key={index}
        href="#" // O `Cloud` precisa de links dentro dele
        style={{
          fontSize: `${Math.random() * 10 + 14}px`,
          fontWeight: "bold",
          color: "#333",
          textDecoration: "none",
        }}
        onClick={(e) => e.preventDefault()} // Evita navegação ao clicar
      >
        {word}
      </a>
    ))
  }, [words])

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {renderedWords}
    </Cloud>
  )
}
