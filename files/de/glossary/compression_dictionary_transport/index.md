---
title: Komprimierungswörterbuch Transport
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

**Komprimierungswörterbuch Transport** ist eine Methode, um ein gemeinsames Komprimierungswörterbuch zu verwenden, anstatt das standardmäßige statische Wörterbuch bei {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}, um die Transportgröße von HTTP-Antworten drastisch zu reduzieren.

Zum Beispiel, wenn `app.v2.js` heruntergeladen wird und der Client bereits `app.v1.js` hat, können Sie auf den Text davon verweisen, indem Sie es als Wörterbuch verwenden und effektiv nur das Delta und eine kleine Menge an Verweisen auf die `v1` Datei herunterladen.

Siehe den [Komprimierungswörterbuch Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

## Siehe auch

- [Komprimierungswörterbuch Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Verwandte Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [&lt;link rel=&quot;compression-dictionary&quot;&gt;](/de/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Entwurf der Spezifikation](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
