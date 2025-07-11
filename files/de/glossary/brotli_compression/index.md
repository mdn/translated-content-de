---
title: Brotli-Komprimierung
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Brotli** ist ein universeller verlustfreier Kompressionsalgorithmus. Er komprimiert Daten mithilfe einer Kombination aus einer modernen Variante des [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) LZ77-Algorithmus, [Huffman-Codierung](https://rosettacode.org/wiki/Huffman_coding) und der Kontextmodellierung zweiter Ordnung, was ein Kompressionsverhältnis bietet, das mit den derzeit besten verfügbaren universellen Kompressionsmethoden vergleichbar ist.

Brotli bietet bessere Kompressionsverhältnisse als {{Glossary("GZip_compression", "gzip")}} und Geschwindigkeiten, die mit [deflate](https://en.wikipedia.org/wiki/Deflate) vergleichbar sind. Allerdings ist die Brotli-Komprimierung langsamer als die Gzip-Komprimierung, daher kann gzip die bessere Option sein, wenn es darum geht, {{Glossary("Cache", "nicht cachefähige")}} Inhalte zu komprimieren.

Brotli ist mit den meisten modernen Browsern kompatibel, aber Sie sollten eventuell eine Fallback-Option in Betracht ziehen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [brotli.org](https://brotli.org/)
- [Brotli GitHub-Repository](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) auf Wikipedia
- [Brotli auf Caniuse](https://caniuse.com/#feat=brotli)
