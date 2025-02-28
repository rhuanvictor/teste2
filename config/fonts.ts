import { Lexend as FontLexend, Fira_Code as FontMono, Inter as FontSans, Dangrek as FontDangrek, Acme as FontAcme } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLexend = FontLexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const fontDangrek = FontDangrek ({
  subsets: ["latin"],
  variable: "--font-dangrek",
  weight: [ '400'], // Adiciona os pesos desejados
});

export const fontAcme= FontAcme ({
  subsets: ["latin"],
  variable: "--font-acme",
  weight: [ '400'], // Adiciona os pesos desejados
});
