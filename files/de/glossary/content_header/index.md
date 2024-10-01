---
title: Content header
slug: Glossary/Content_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

**Content headers** sind die Gruppe von [HTTP-Headern](/de/docs/Web/HTTP/Headers), die den Inhalt des Körpers einer HTTP-Nachricht beschreiben, nachdem jegliche Nachrichtenstrukturierung im Körper entfernt wurde. Sie beschreiben speziell die Eigenschaften des {{Glossary("HTTP_Content", "Nachrichteninhalts")}}, der in einer bestimmten Nachricht _während des Transports_ übermittelt wird, wie z.B. die Länge des Inhalts, die Transportcodierung, welcher Teil der Ressource in den Daten enthalten ist (bei mehrteiligen Nachrichten) und Integritätsprüfungen der Nachricht. Sie unterscheiden sich von den {{Glossary("Representation_header", "Darstellungs-Headern")}}, die die Codierung, den Medientyp, die Sprache und andere Eigenschaften der Ressource beschreiben und die Interpretation der zugrunde liegenden Daten ermöglichen.

Diese Header wurden in {{RFC("7231")}} als "Payload headers" definiert, werden jetzt aber als "Content headers" bezeichnet, da Daten, die in HTTP/2- und HTTP/3-Frame-Payloads enthalten sind, Header-Daten, Körperdaten oder andere Steuerinformationen sein könnten. Spätere HTTP-Spezifikationen erwähnen keine "Content headers" oder erweitern die Liste der relevanten Header, aber die Semantik bleibt die gleiche, sodass diese Klassifizierung der Header weiterhin nützlich ist.

> [!NOTE]
> Es gibt einige Überschneidungen zwischen Content-Headern und {{Glossary("Representation_header", "Darstellungs-Headern")}}.

Diese Header können sowohl in HTTP-Anfragen als auch in Antwortnachrichten vorhanden sein und umfassen:

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## Siehe auch

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Darstellungs-Header")}}
  - {{Glossary("HTTP_Content", "HTTP-Inhalt")}}
- [RFC 9110, Abschnitt 6.4.1: Inhaltssemantik](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), speziell [Anhang B.3.: Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, Abschnitt 3.3: Semantik der Nutzlast](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
