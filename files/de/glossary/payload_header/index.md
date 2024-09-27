---
title: Payload-Header
slug: Glossary/Payload_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Payload-Header** ist ein [HTTP-Header](/de/docs/Glossary/HTTP_header), der Informationen über den Payload beschreibt, die für den sicheren Transport und die Rekonstruktion der ursprünglichen Ressourcen-[Repräsentation](/de/docs/Glossary/Representation_header) aus einer oder mehreren Nachrichten relevant sind. Dies umfasst Informationen wie die Länge des Nachrichten-Payloads, welcher Teil der Ressource in diesem Payload enthalten ist (bei einer mehrteiligen Nachricht), jegliche für den Transport angewandte Kodierungen, Integritätsprüfungen der Nachricht usw.

Payload-Header können sowohl in HTTP-Anfrage- als auch Antwortnachrichten vorhanden sein (d.h. in jeder Nachricht, die Payload-Daten überträgt).

Zu den Payload-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}} und {{HTTPHeader("Transfer-Encoding")}}.

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - [Repräsentation-Header](/de/docs/Glossary/Representation_header)

- [RFC 7231, Abschnitt 3.3: Payload-Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
