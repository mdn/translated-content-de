---
title: Verlustbehaftete Kompression
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Verlustbehaftete Kompression**, oder irreversible Kompression, ist eine Datenkomprimierungsmethode, die ungenaue Annäherungen und das Verwerfen von Teilinformationen verwendet, um Inhalte darzustellen. Einfacher ausgedrückt: Verlustbehaftete Kompression führt dazu, dass Daten aus der ursprünglichen Datei verloren gehen, was möglicherweise zu einer Verschlechterung der Qualität führt. Der Prozess einer solchen Kompression ist irreversibel; einmal verlustbehaftet komprimierte Inhalte können nicht in ihren ursprünglichen Zustand zurückversetzt werden. Daher sollten Inhalte, die einer verlustbehafteten Kompression unterzogen wurden, im Allgemeinen nicht weiter bearbeitet werden.

Verlustbehaftete Kompression wird weit verbreitet in Bildformaten wie [JPEG](/de/docs/Glossary/JPEG), [WebP](/de/docs/Glossary/WebP) und Audio- und Videoformaten wie [MP3, MP4, H.264 und anderen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) verwendet. Komprimierungsmethoden wie [WebP](/de/docs/Glossary/WebP) sind in der Lage, [sowohl verlustbehaftete als auch verlustfreie Kompression](https://developers.google.com/speed/webp/docs/compression) abhängig vom Kompressionslevel oder den Optionen, die Sie beim Codieren verwenden möchten, durchzuführen.

![Verlustbehaftete Komprimierungsabbildung](2019-11-18.png)

Obwohl es keinen offensichtlichen Qualitätsunterschied zwischen den beiden obigen Bildern gibt, wurde die Größe des zweiten Bildes durch verlustbehaftete Kompression erheblich reduziert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Lossless-Kompression](/de/docs/Glossary/Lossless_compression)
