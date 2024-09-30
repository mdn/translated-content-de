---
title: Brotli-Komprimierung
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Brotli** ist ein universeller verlustfreier Komprimierungsalgorithmus. Er komprimiert Daten mithilfe einer modernen Variante des [Lempel-Ziv-Codecs](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) LZ77, der [Huffman-Kodierung](https://rosettacode.org/wiki/Huffman_coding) und der Modellierung zweiter Ordnung, wodurch ein Kompressionsverhältnis erreicht wird, das vergleichbar mit den besten derzeit verfügbaren universellen Komprimierungsmethoden ist.

Brotli bietet bessere Kompressionsverhältnisse als [gzip](/de/docs/Glossary/GZip_compression) und Geschwindigkeiten, die mit [deflate](https://en.wikipedia.org/wiki/Deflate) vergleichbar sind. Jedoch ist die Brotli-Komprimierung langsamer als die Gzip-Komprimierung, daher könnte gzip eine bessere Option sein, wenn es um die Komprimierung von [nicht-cachebaren](/de/docs/Glossary/Cache) Inhalten geht.

Brotli ist mit den meisten modernen Browsern kompatibel, aber Sie sollten eine Fallback-Lösung in Betracht ziehen.

## Siehe auch

- Verwandte Glossareinträge:
  - [Verlustfreie Komprimierung](/de/docs/Glossary/Lossless_compression)
  - [Verlustbehaftete Komprimierung](/de/docs/Glossary/Lossy_compression)
  - [Gzip-Komprimierung](/de/docs/Glossary/Gzip_compression)
  - [Zstandard-Komprimierung](/de/docs/Glossary/Zstandard_compression)
- [brotli.org](https://brotli.org/)
- [Brotli GitHub Repository](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) auf Wikipedia
- [Brotli auf Caniuse](https://caniuse.com/#feat=brotli)
