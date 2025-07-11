---
title: Nutzlast-Header
slug: Glossary/Payload_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Nutzlast-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der die Informationen zur Nutzlast beschreibt, die für den sicheren Transport und die Rekonstruktion der ursprünglichen Ressourcen-{{Glossary("Representation_header", "Repräsentation")}} aus einer oder mehreren Nachrichten erforderlich sind. Dazu gehören Informationen wie die Länge der Nachrichten-Nutzlast, welcher Teil der Ressource in dieser Nutzlast übertragen wird (bei einer Mehrteil-Nachricht), jede für den Transport angewandte Kodierung, Überprüfungen der Nachrichtenintegrität usw.

Nutzlast-Header können sowohl in HTTP-Anfrage- als auch in Antwortnachrichten vorhanden sein (d.h. in jeder Nachricht, die Nutzlastdaten enthält).

Zu den Nutzlast-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}} und {{HTTPHeader("Transfer-Encoding")}}.

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation_header", "Repräsentations-Header")}}

- [RFC 7231, Abschnitt 3.3: Nutzlastsemantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
