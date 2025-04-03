---
title: Nutzdatentyp-Header
slug: Glossary/Payload_header
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Ein **Nutzdatentyp-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der Informationen über die Nutzdaten beschreibt, die für den sicheren Transport und die Rekonstruktion der ursprünglichen Ressourcen-{{Glossary("Representation_header", "Darstellung")}} aus einer oder mehreren Nachrichten relevant sind. Dazu gehören Informationen wie die Länge der Nachrichtennutzdaten, welcher Teil der Ressource in diesen Nutzdaten enthalten ist (für eine mehrteilige Nachricht), jede zur Übertragung angewandte Kodierung, Integritätsprüfungen der Nachricht usw.

Nutzdatentyp-Header können sowohl in HTTP-Anfrage- als auch in HTTP-Antwortnachrichten vorhanden sein (d.h. in jeder Nachricht, die Nutzdaten trägt).

Zu den Nutzdatentyp-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}}, und {{HTTPHeader("Transfer-Encoding")}}.

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation_header", "Darstellungs-Header")}}

- [RFC 7231, Abschnitt 3.3: Nutzdaten-Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
