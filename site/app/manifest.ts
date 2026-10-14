import type { MetadataRoute } from "next";
import { SITE } from "@/lib/conteudo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.nome,
    short_name: "FP Advocacia",
    start_url: "/",
    display: "standalone",
    background_color: "#2D2D2D",
    theme_color: "#2D2D2D",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/icone-maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
