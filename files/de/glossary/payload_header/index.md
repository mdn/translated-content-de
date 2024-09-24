---
title: Payload-Header
slug: Glossary/Payload_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Payload-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der die Payload-Informationen in Bezug auf den sicheren Transport und die Rekonstruktion der ursprünglichen Ressource {{Glossary("Representation header", "Repräsentation")}} aus einer oder mehreren Nachrichten beschreibt. Dazu gehören Informationen wie die Länge des Nachrichten-Payloads, welcher Teil der Ressource in diesem Payload transportiert wird (bei einer Mehrteilnachricht), welche Kodierung für den Transport angewendet wurde, Integritätsprüfungen der Nachricht usw.

Payload-Header können sowohl in HTTP-Anfrage- als auch Antwortnachrichten vorhanden sein (d. h. in jeder Nachricht, die Payload-Daten trägt).

Die Payload-Header beinhalten: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}} und {{HTTPHeader("Transfer-Encoding")}}.

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header")}}

- [RFC 7231, Abschnitt 3.3: Payload-Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
