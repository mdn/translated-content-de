---
title: Kompressionswörterbuch-Transport
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: 4c0588c10b4266b8a87a1f80d93e8f99eabc1a4e
---

{{GlossarySidebar}}

**Kompressionswörterbuch-Transport** ist eine Methode, ein gemeinsames Kompressionswörterbuch anstelle des standardmäßigen statischen Wörterbuchs in der {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} zu verwenden, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

Zum Beispiel, wenn `app.v2.js` heruntergeladen wird und der Client bereits `app.v1.js` hat, kann er Text daraus referenzieren, indem er es als Wörterbuch verwendet. So muss effektiv nur das Delta und eine kleine Menge an Verweisen auf die Datei `v1` heruntergeladen werden.

Weitere Informationen finden Sie im [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Siehe auch

- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
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
