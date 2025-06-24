---
title: Payload-Header
slug: Glossary/Payload_header
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Ein **Payload-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der Informationen über den Payload beschreibt, die für den sicheren Transport und die Rekonstruktion der ursprünglichen Ressourcen-{{Glossary("Representation_header", "Repräsentation")}} aus einer oder mehreren Nachrichten relevant sind. Dies umfasst Informationen wie die Länge des Nachrichten-Payloads, welcher Teil der Ressource in diesem Payload enthalten ist (für eine mehrteilige Nachricht), jede für den Transport angewendete Kodierung, Integritätsprüfungen der Nachricht usw.

Payload-Header können sowohl in HTTP-Anfrage- als auch in Antwortnachrichten vorhanden sein (d.h. in jeder Nachricht, die Payload-Daten überträgt).

Zu den Payload-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}} und {{HTTPHeader("Transfer-Encoding")}}.

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation_header", "Repräsentations-Header")}}

- [RFC 7231, Abschnitt 3.3: Payload Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
