---
title: Verlustfreie Kompression
slug: Glossary/Lossless_compression
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Verlustfreie Kompression** ist eine Klasse von Datenkomprimierungsalgorithmen, die es ermöglichen, die ursprünglichen Daten perfekt aus den komprimierten Daten wiederherzustellen. Verlustfreie Kompressionsmethoden sind reversibel. Beispiele für verlustfreie Kompression sind {{glossary("GZip_compression", "gzip")}}, {{glossary("Brotli_compression", "brotli")}}, {{glossary("Zstandard compression", "Zstandard")}}, {{glossary("WebP")}} und {{glossary("PNG")}}.

{{glossary("Lossy compression", "Verlustbehaftete Kompression")}} hingegen verwendet ungenaue Annäherungen, indem einige Daten aus der Originaldatei verworfen werden, wodurch sie eine irreversible Kompressionsmethode ist.
Kompressionsmethoden wie {{glossary("WebP")}} sind in der Lage, [sowohl verlustbehaftete als auch verlustfreie Kompression](https://developers.google.com/speed/webp/docs/compression) durchzuführen, abhängig vom Komprimierungsgrad oder den Optionen, die Sie während der Kodierung verwenden möchten.

## Siehe auch

- Verwandte Glossartermine:
  - {{glossary("Lossy compression", "Verlustbehaftete Kompression")}}
