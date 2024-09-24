---
title: Verlustbehaftete Kompression
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Verlustbehaftete Kompression**, oder irreversible Kompression, ist eine Datenkompressionsmethode, die ungenaue Annäherungen und partielle Datenverwerfung verwendet, um Inhalte darzustellen. Einfacher ausgedrückt: Verlustbehaftete Kompression führt dazu, dass Daten aus der ursprünglichen Datei verloren gehen, was möglicherweise zu einer Verschlechterung der Qualität führt. Der Prozess einer solchen Kompression ist irreversibel; einmal verlustbehaftet komprimierte Inhalte können nicht in ihren ursprünglichen Zustand zurückversetzt werden. Daher sollten Inhalte, die verlustbehaftet komprimiert wurden, in der Regel nicht weiter bearbeitet werden.

Verlustbehaftete Kompression wird häufig in Bildformaten wie {{glossary("JPEG")}}, {{glossary("WebP")}} und Audio- und Videoformaten wie [MP3, MP4, H.264 und anderen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) verwendet. Kompressionsmethoden wie {{glossary("WebP")}} sind in der Lage [sowohl verlustbehaftete als auch verlustfreie Kompression](https://developers.google.com/speed/webp/docs/compression) zu bieten, je nach Kompressionsstufe oder den Optionen, die Sie während der Kodierung verwenden möchten.

![Lossy compression image](2019-11-18.png)

Obwohl es keinen offensichtlichen Qualitätsunterschied zwischen den beiden obigen Bildern gibt, wurde die Größe des zweiten Bildes mithilfe verlustbehafteter Kompression erheblich reduziert.

## Siehe auch

- Verwandte Glossareinträge:
  - {{Glossary("Lossless compression")}}
