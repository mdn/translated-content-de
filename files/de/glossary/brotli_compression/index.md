---
title: Brotli-Komprimierung
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Brotli** ist ein universeller verlustfreier Komprimierungsalgorithmus. Er komprimiert Daten unter Verwendung einer modernen Variante des [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) LZ77-Algorithmus, [Huffman-Kodierung](https://rosettacode.org/wiki/Huffman_coding) und der Kontextmodellierung zweiter Ordnung und bietet ein Kompressionsverhältnis, das mit den besten derzeit verfügbaren universellen Komprimierungsmethoden vergleichbar ist.

Brotli bietet bessere Kompressionsverhältnisse als {{glossary("GZip_compression", "gzip")}} und Geschwindigkeiten, die mit [deflate](https://en.wikipedia.org/wiki/Deflate) vergleichbar sind. Allerdings ist die Brotli-Komprimierung langsamer als die Gzip-Komprimierung, daher kann gzip die bessere Option sein, wenn nicht zwischenzuspeichernde Inhalte komprimiert werden.

Brotli ist mit den meisten modernen Browsern kompatibel, aber Sie sollten eventuell eine Rückfalloption in Betracht ziehen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Lossless compression")}}
  - {{glossary("Lossy compression")}}
  - {{Glossary("Gzip compression")}}
  - {{Glossary("Zstandard compression")}}
- [brotli.org](https://brotli.org/)
- [Brotli GitHub Repository](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) auf Wikipedia
- [Brotli auf Caniuse](https://caniuse.com/#feat=brotli)
