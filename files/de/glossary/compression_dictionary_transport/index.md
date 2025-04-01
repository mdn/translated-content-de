---
title: Kompressionswörterbuch-Transport
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{GlossarySidebar}}

**Kompressionswörterbuch-Transport** ist eine Methode, bei der ein gemeinsames Kompressionswörterbuch verwendet wird, anstatt des standardmäßigen statischen Wörterbuchs in der {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

Beispielsweise kann beim Herunterladen von `app.v2.js`, wenn der Client bereits `app.v1.js` hat, auf Texte daraus verwiesen werden, indem es als Wörterbuch verwendet wird. Dadurch muss im Wesentlichen nur das Delta und eine kleine Menge an Verweisen auf die `v1`-Datei heruntergeladen werden.

Lesen Sie den [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

## Siehe auch

- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Verwandte Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Attributes/rel/compression-dictionary) - {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurfsspezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
