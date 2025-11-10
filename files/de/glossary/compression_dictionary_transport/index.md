---
title: Übertragung von Kompressionswörterbüchern
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Übertragung von Kompressionswörterbüchern** ist eine Methode, bei der ein gemeinsames Kompressionswörterbuch anstelle des standardmäßigen statischen Wörterbuchs in {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} verwendet wird, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

Zum Beispiel, wenn `app.v2.js` heruntergeladen wird und der Client bereits `app.v1.js` hat, kann er auf Text von `app.v1.js` als Wörterbuch verweisen und nur das Delta sowie eine kleine Menge an Referenzen zur `v1`-Datei effektiv herunterladen.

Weitere Informationen finden Sie im [Leitfaden zur Übertragung von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Siehe auch

- [Leitfaden zur Übertragung von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Verwandte Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [`<link rel="compression-dictionary">`](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurf der Spezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
