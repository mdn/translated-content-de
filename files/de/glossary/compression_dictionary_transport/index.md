---
title: Kompressionswörterbuch-Transport
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: c7f9d9087cccd99d4e72cdf5488b7a4bc6963740
---

{{GlossarySidebar}}

**Kompressionswörterbuch-Transport** ist eine Methode zur Verwendung eines gemeinsamen Kompressionswörterbuchs anstelle des standardmäßigen statischen Wörterbuchs in {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}, um die Transportgröße von HTTP-Antworten erheblich zu reduzieren.

Beispielsweise, wenn `app.v2.js` heruntergeladen wird und der Client bereits `app.v1.js` hat, kann dieser Text daraus referenzieren, indem er es als Wörterbuch verwendet und effektiv nur das Delta und eine kleine Menge an Verweisen auf die `v1`-Datei herunterlädt.

Weitere Informationen finden Sie im [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Siehe auch

- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Verwandte Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Attributes/rel/compression-dictionary)- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfsspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
