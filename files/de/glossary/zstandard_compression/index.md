---
title: Zstandard compression
slug: Glossary/Zstandard_compression
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

**Zstandard** ist ein universeller verlustfreier Kompressionsalgorithmus.

Zstandard, oder in Kurzform `zstd`, ist ein schneller verlustfreier Kompressionsalgorithmus, der auf Echtzeit-Kompressionsszenarien mit zlib-Niveau und besseren Kompressionsverhältnissen abzielt. Er wird durch eine sehr schnelle Entropiestufe unterstützt, bereitgestellt von der [Huff0 und FSE Bibliothek](https://github.com/Cyan4973/FiniteStateEntropy). Er bietet oft bessere Kompressionsverhältnisse als {{Glossary("Brotli_compression", "Brotli")}} bei vergleichbaren CPU-Kosten, oder bessere CPU-Kosten bei gleichwertigen Kompressionsverhältnissen.

Für die Browser-Kompatibilität siehe [Content-Encoding: Browser-Kompatibilität](/de/docs/Web/HTTP/Headers/Content-Encoding#browser_compatibility).

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Kompression")}}
- [Zstandard RFC](https://datatracker.ietf.org/doc/html/rfc8878)
- [Zstandard Homepage](https://facebook.github.io/zstd/)
- [Zstandard GitHub-Repository](https://github.com/facebook/zstd)
- [Zstandard](https://en.wikipedia.org/wiki/Zstandard) auf Wikipedia
- [Zstandard auf Caniuse](https://caniuse.com/#feat=zstandard)
