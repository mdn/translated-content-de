---
title: Lossy compression
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{GlossarySidebar}}

**Lossy-Kompression**, oder irreversible Kompression, ist eine Datenkompressionsmethode, die ungenaue Annäherungen und teilweise Datenverwerfung verwendet, um Inhalte darzustellen. Einfacher gesagt: Bei der verlustbehafteten Kompression gehen Daten aus der ursprünglichen Datei verloren, was möglicherweise eine Verschlechterung der Qualität zur Folge hat. Der Prozess einer solchen Kompression ist irreversibel; sobald die Inhalte verlustbehaftet komprimiert wurden, können sie nicht in ihren ursprünglichen Zustand zurückversetzt werden. Daher sollten Inhalte, die eine verlustbehaftete Kompression durchlaufen haben, im Allgemeinen nicht weiter bearbeitet werden.

Lossy-Kompression wird häufig in Bildformaten wie {{Glossary("JPEG", "JPEG")}}, {{Glossary("WebP", "WebP")}} und Audio- und Videoformaten wie [MP3, MP4, H.264 und anderen](/de/docs/Web/HTTP/MIME_types/Common_types) verwendet. Kompressionsmethoden wie {{Glossary("WebP", "WebP")}} sind in der Lage, [sowohl verlustbehaftete als auch verlustfreie Kompression](https://developers.google.com/speed/webp/docs/compression) durchzuführen, abhängig vom Kompressionsgrad oder den Optionen, die Sie während der Kodierung verwenden möchten.

![Lossy-Kompression Bild](2019-11-18.png)

Obwohl es keinen offensichtlichen Qualitätsunterschied zwischen den beiden Bildern oben gibt, wurde die Größe des zweiten Bildes durch verlustbehaftete Kompression erheblich reduziert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Lossless_compression", "Lossless-Kompression")}}
