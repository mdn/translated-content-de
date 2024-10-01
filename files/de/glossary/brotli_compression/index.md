---
title: Brotli-Komprimierung
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Brotli** ist ein universeller verlustfreier Komprimierungsalgorithmus. Er komprimiert Daten mithilfe einer modernen Variante des [Lempel-Ziv-Codecs](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) LZ77, der [Huffman-Kodierung](https://rosettacode.org/wiki/Huffman_coding) und der Modellierung zweiter Ordnung, wodurch ein Kompressionsverhältnis erreicht wird, das vergleichbar mit den besten derzeit verfügbaren universellen Komprimierungsmethoden ist.

Brotli bietet bessere Kompressionsverhältnisse als {{Glossary("GZip_compression", "gzip")}} und Geschwindigkeiten, die mit [deflate](https://en.wikipedia.org/wiki/Deflate) vergleichbar sind. Jedoch ist die Brotli-Komprimierung langsamer als die Gzip-Komprimierung, daher könnte gzip eine bessere Option sein, wenn es um die Komprimierung von {{Glossary("Cache", "nicht-cachebaren")}} Inhalten geht.

Brotli ist mit den meisten modernen Browsern kompatibel, aber Sie sollten eine Fallback-Lösung in Betracht ziehen.

## Siehe auch

- Verwandte Glossareinträge:
  - {{Glossary("Lossless_compression", "Verlustfreie Komprimierung")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Komprimierung")}}
  - {{Glossary("Gzip_compression", "Gzip-Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [brotli.org](https://brotli.org/)
- [Brotli GitHub Repository](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) auf Wikipedia
- [Brotli auf Caniuse](https://caniuse.com/#feat=brotli)
