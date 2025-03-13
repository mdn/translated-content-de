---
title: Verlustbehaftete Kompression
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

**Verlustbehaftete Kompression**, oder irreversible Kompression, ist eine Datenkompressionsmethode, die ungenaue Annäherungen und teilweise Datenverwerfung verwendet, um Inhalte darzustellen. Einfacher ausgedrückt: Verlustbehaftete Kompression führt dazu, dass Daten aus der ursprünglichen Datei verloren gehen, was möglicherweise zu einer Qualitätsminderung führt. Der Prozess einer solchen Kompression ist irreversibel; sobald eine verlustbehaftete Kompression des Inhalts durchgeführt wurde, kann der Inhalt nicht in seinen ursprünglichen Zustand zurückversetzt werden. Daher sollte Inhalt, der einer verlustbehafteten Kompression unterzogen wurde, im Allgemeinen nicht weiter bearbeitet werden.

Verlustbehaftete Kompression wird häufig in Bildformaten wie {{Glossary("JPEG", "JPEG")}}, {{Glossary("WebP", "WebP")}} und Audio- und Videoformaten wie [MP3, MP4, H.264 und anderen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) verwendet. Kompressionsmethoden wie {{Glossary("WebP", "WebP")}} sind in der Lage, [sowohl verlustbehaftete als auch verlustfreie Kompression](https://developers.google.com/speed/webp/docs/compression) je nach der gewählten Kompressionsstufe oder den Optionen, die Sie bei der Kodierung verwenden möchten, anzuwenden.

![Verlustbehaftete Kompression Bild](2019-11-18.png)

Obwohl es keinen offensichtlichen Qualitätsunterschied zwischen den beiden obigen Bildern gibt, wurde die Größe des zweiten Bildes durch verlustbehaftete Kompression erheblich reduziert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
