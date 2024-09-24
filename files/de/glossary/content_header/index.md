---
title: Inhalts-Header
slug: Glossary/Content_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

**Inhalts-Header** sind die Gruppe von [HTTP-Headern](/de/docs/Web/HTTP/Headers), die den Inhalt des Körpers einer HTTP-Nachricht beschreiben, nachdem jegliche Nachrichteneinrahmung im Körper entfernt wurde. Sie beschreiben speziell die Eigenschaften des {{Glossary("HTTP Content", "Nachrichteninhalts")}}, das in einer bestimmten Nachricht _während des Transports_ übermittelt wird, wie die Länge des Inhalts, die Transportkodierung, welcher Teil der Ressource in den Daten enthalten ist (bei Mehrfach-Nachrichten) und die Integritätsprüfungen der Nachricht. Sie unterscheiden sich von den {{Glossary("Representation header", "Repräsentations-Headern")}}, die die Kodierung, den Medientyp, die Sprache und andere Merkmale der Ressource beschreiben und ermöglichen, die zugrunde liegenden Daten zu interpretieren.

Diese Header wurden in {{RFC("7231")}} als "Payload-Header" definiert, werden jetzt jedoch als "Content-Header" bezeichnet, da Daten, die in HTTP/2- und HTTP/3-Frame-Payloads enthalten sind, Header-Daten, Körper-Daten oder andere Steuerinformationen sein könnten. Spätere HTTP-Spezifikationen erwähnen "Content-Header" nicht oder erweitern die Liste der relevanten Header, aber die Semantik bleibt dieselbe, sodass diese Klassifizierung von Headern weiterhin nützlich ist.

> [!NOTE]
> Es gibt einige Überschneidungen zwischen Inhalts-Headern und {{Glossary("Representation header", "Repräsentations-Headern")}}.

Diese Header können sowohl in HTTP-Anfrage- als auch in Antwortnachrichten vorhanden sein und umfassen:

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## Siehe auch

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP Content")}}
- [RFC 9110, Abschnitt 6.4.1: Inhaltssemantik](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), insbesondere [Appendix B.3.: Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, Abschnitt 3.3: Payload Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
