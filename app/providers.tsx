"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);

  // Garantir que a renderização ocorra apenas no cliente
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Retorna null enquanto o código estiver sendo renderizado no servidor
    return null;
  }

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
