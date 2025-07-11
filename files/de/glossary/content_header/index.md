---
title: Inhaltsheader
slug: Glossary/Content_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Inhaltsheader** sind die Gruppe von [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers), die den Inhalt des Körpers einer HTTP-Nachricht beschreiben, nachdem die Rahmenbedingungen aus dem Körper entfernt wurden. Sie beschreiben speziell die Eigenschaften des {{Glossary("HTTP_Content", "Nachrichteninhalts")}}, der in einer bestimmten Nachricht _während des Transports_ übermittelt wird, wie z.B. die Länge des Inhalts, die Transportkodierung, welcher Teil der Ressource in den Daten enthalten ist (für Mehrteilnachrichten) und Prüfungen der Nachrichtenintegrität. Sie unterscheiden sich von den {{Glossary("Representation_header", "Repräsentations-Headern")}}, die die Kodierung, den Medientyp, die Sprache und andere Merkmale der Ressource beschreiben und die Interpretation der zugrunde liegenden Daten ermöglichen.

Diese Header wurden in {{RFC("7231")}} als "Payload-Header" definiert, werden jetzt jedoch als "Inhaltsheader" bezeichnet, da Daten, die in HTTP/2- und HTTP/3-Frame-Payloads enthalten sind, Header-Daten, Körpersdaten oder andere Steuerinformationen sein könnten. Spätere HTTP-Spezifikationen erwähnen keine „Inhaltsheader“ mehr oder erweitern die Liste der relevanten Header, aber die Semantik bleibt dieselbe, sodass diese Klassifizierung der Header weiterhin nützlich ist.

> [!NOTE]
> Es gibt einige Überschneidungen zwischen Inhaltsheadern und {{Glossary("Representation_header", "Repräsentations-Headern")}}.

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
- [RFC 7231, Abschnitt 3.3: Payload-Semantik](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
