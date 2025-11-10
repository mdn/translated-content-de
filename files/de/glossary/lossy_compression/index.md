---
title: Verlustbehaftete Kompression
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Verlustbehaftete Kompression**, oder irreversible Kompression, ist eine Datenkomprimierungsmethode, die ungenaue Annäherungen und das Verwerfen von Teilinformationen verwendet, um Inhalte darzustellen. Einfacher ausgedrückt: Verlustbehaftete Kompression führt dazu, dass Daten aus der ursprünglichen Datei verloren gehen, was möglicherweise zu einer Verschlechterung der Qualität führt. Der Prozess einer solchen Kompression ist irreversibel; einmal verlustbehaftet komprimierte Inhalte können nicht in ihren ursprünglichen Zustand zurückversetzt werden. Daher sollten Inhalte, die eine verlustbehaftete Kompression durchlaufen haben, im Allgemeinen nicht weiter bearbeitet werden.

Verlustbehaftete Kompression wird häufig in Bildformaten wie {{Glossary("JPEG", "JPEG")}}, {{Glossary("WebP", "WebP")}} und Audio-/Videoformaten wie [MP3, MP4, H.264 und anderen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) verwendet. Komprimierungsmethoden wie {{Glossary("WebP", "WebP")}} können [sowohl verlustbehaftete als auch verlustfreie Kompression](https://developers.google.com/speed/webp/docs/compression) je nach Kompressionsgrad oder den Optionen, die Sie während der Kodierung verwenden möchten, durchführen.

![Lossy compression image](2019-11-18.png)

Obwohl es keinen offensichtlichen Qualitätsunterschied zwischen den beiden obigen Bildern gibt, wurde die Größe des zweiten Bildes signifikant durch verlustbehaftete Kompression reduziert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
