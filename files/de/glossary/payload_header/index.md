---
title: Payload header
slug: Glossary/Payload_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **payload header** ist ein [HTTP-Header](/de/docs/Glossary/HTTP_header), der die Payload-Informationen in Bezug auf sicheren Transport und Wiederherstellung der ursprünglichen Ressourcen-[Repräsentation](/de/docs/Glossary/Representation_header) aus einer oder mehreren Nachrichten beschreibt. Dies umfasst Informationen wie die Länge der Nachrichten-Payload, welcher Teil der Ressource in dieser Payload enthalten ist (für eine mehrteilige Nachricht), jede Kodierung, die für den Transport angewendet wurde, Integritätsprüfungen der Nachricht, usw.

Payload-Header können sowohl in HTTP-Anfrage- als auch in HTTP-Antwortnachrichten vorhanden sein (d.h. in jeder Nachricht, die Payload-Daten trägt).

Zu den Payload-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}} und {{HTTPHeader("Transfer-Encoding")}}.

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - [Repräsentation-Header](/de/docs/Glossary/Representation_header)

- [RFC 7231, Abschnitt 3.3: Payload-Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
