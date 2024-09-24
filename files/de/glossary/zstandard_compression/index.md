---
title: Zstandard-Kompression
slug: Glossary/Zstandard_compression
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Zstandard** ist ein Allzweck-Algorithmus für verlustfreie Kompression.

Zstandard, oder in der Kurzform `zstd`, ist ein schneller verlustfreier Kompressionsalgorithmus, der auf Echtzeitkompressionsszenarien mit zlib-Niveau und besseren Kompressionsraten abzielt. Er wird durch eine sehr schnelle Entropie-Stufe unterstützt, die von der [Huff0 und FSE Bibliothek](https://github.com/Cyan4973/FiniteStateEntropy) bereitgestellt wird. Oft bietet er bessere Kompressionsraten als {{glossary("Brotli_compression", "brotli")}} bei gleichwertigen CPU-Kosten oder bessere CPU-Kosten bei gleichwertigen Kompressionsraten.

Für die Unterstützung durch Browser, siehe [Content-Encoding: Browser-Kompatibilität](/de/docs/Web/HTTP/Headers/Content-Encoding#browser_compatibility).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Lossless compression")}}
  - {{glossary("Lossy compression")}}
  - {{glossary("Brotli compression")}}
  - {{glossary("Gzip compression")}}
- [Zstandard RFC](https://datatracker.ietf.org/doc/html/rfc8878)
- [Zstandard Startseite](https://facebook.github.io/zstd/)
- [Zstandard GitHub Repository](https://github.com/facebook/zstd)
- [Zstandard](https://en.wikipedia.org/wiki/Zstandard) auf Wikipedia
- [Zstandard bei Caniuse](https://caniuse.com/#feat=zstandard)
