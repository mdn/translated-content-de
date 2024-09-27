---
title: Content header
slug: Glossary/Content_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

**Content headers** sind die Gruppe von [HTTP-Headern](/de/docs/Web/HTTP/Headers), die den Inhalt des Körpers einer HTTP-Nachricht beschreiben, nachdem jegliche Nachrichtenrahmung im Körper entfernt wurde. Sie beschreiben speziell die Eigenschaften des [Nachrichteninhalts](/de/docs/Glossary/HTTP_Content), der in einer bestimmten Nachricht _während des Transports_ vermittelt wird, wie die Länge des Inhalts, die Transportcodierung, welcher Teil der Ressource in den Daten übertragen wird (bei Multi-Part-Nachrichten) und Integritätsprüfungen der Nachricht. Sie unterscheiden sich von den [Darstellungs-Headern](/de/docs/Glossary/Representation_header), die die Codierung, den Medientyp, die Sprache und andere Merkmale der Ressource beschreiben und die Interpretation der zugrunde liegenden Daten ermöglichen.

Diese Header wurden in {{RFC("7231")}} als "Payload-Header" definiert, werden aber jetzt als "Content-Header" bezeichnet, da Daten, die in HTTP/2- und HTTP/3-Frame-Payloads enthalten sind, Headerdaten, Körperdaten oder andere Steuerinformationen sein könnten. Spätere HTTP-Spezifikationen erwähnen keine "Content-Header" oder erweitern die Liste der relevanten Header, aber die Semantik bleibt gleich, daher ist diese Klassifizierung der Header weiterhin nützlich.

> [!NOTE]
> Es gibt einige Überschneidungen zwischen Content-Headern und [Darstellungs-Headern](/de/docs/Glossary/Representation_header).

Diese Header können in sowohl HTTP-Request- als auch Antwortnachrichten vorhanden sein und umfassen:

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## Siehe auch

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - [Darstellungs-Header](/de/docs/Glossary/Representation_header)
  - [HTTP-Inhalt](/de/docs/Glossary/HTTP_Content)
- [RFC 9110, Abschnitt 6.4.1: Inhaltliche Semantik](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), insbesondere [Anhang B.3.: Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, Abschnitt 3.3: Payload Semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
