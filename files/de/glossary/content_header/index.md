---
title: Inhalts-Header
slug: Glossary/Content_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

**Inhalts-Header** sind die Gruppe von [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers), die den Inhalt des Rumpfes einer HTTP-Nachricht beschreiben, nachdem jegliche Nachrichtenrahmen im Rumpf entfernt wurden.
Sie beschreiben speziell die Eigenschaften des {{Glossary("HTTP_Content", "Nachrichteninhalts")}}, der in einer bestimmten Nachricht _während des Transports_ übermittelt wird, wie die Länge des Inhalts, die Transportkodierung, welcher Teil der Ressource in den Daten getragen wird (bei mehrteiligen Nachrichten) und Integritätsprüfungen der Nachricht.
Sie unterscheiden sich von den {{Glossary("Representation_header", "Repräsentations-Headern")}}, die die Kodierung, den Medientyp, die Sprache und andere Eigenschaften der Ressource beschreiben und es ermöglichen, die zugrunde liegenden Daten zu interpretieren.

Diese Header wurden in {{RFC("7231")}} als "Payload-Header" definiert, werden aber jetzt als "Inhalts-Header" bezeichnet, da Daten, die in HTTP/2- und HTTP/3-Frame-Nutzdaten enthalten sind, Header-Daten, Rumpfdaten oder andere Steuerinformationen sein könnten.
Spätere HTTP-Spezifikationen erwähnen keine "Inhalts-Header" oder erweitern die Liste der relevanten Header, aber die Semantik bleibt dieselbe, so dass diese Art der Klassifizierung von Headern weiterhin nützlich ist.

> [!NOTE]
> Es gibt einige Überschneidungen zwischen Inhalts-Headern und {{Glossary("Representation_header", "Repräsentations-Headern")}}.

Diese Header können sowohl in HTTP-Anfrage- als auch in HTTP-Antwortnachrichten vorhanden sein und umfassen:

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## Siehe auch

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Repräsentations-Header")}}
  - {{Glossary("HTTP_Content", "HTTP-Inhalt")}}
- [RFC 9110, Abschnitt 6.4.1: Inhaltssemantik](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), speziell [Anhang B.3.: Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, Abschnitt 3.3: Nutzlast-Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
