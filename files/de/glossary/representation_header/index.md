---
title: Repräsentationsheader
slug: Glossary/Representation_header
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{GlossarySidebar}}

Ein **Repräsentationsheader** (oder 'Repräsentationsmetadaten') ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der beschreibt, wie die im Nachrichtentext enthaltenen Daten zu interpretieren sind.

Zum Beispiel könnten die Inhalte in einer bestimmten Nachricht für den Transport kodiert sein, die gesamte Ressource könnte als ein bestimmter Medientyp wie XML, JSON, HTML oder Markdown formatiert, in eine bestimmte geschriebene Sprache oder geografische Region lokalisiert und/oder unter Verwendung eines bestimmten Algorithmus komprimiert sein. Die Repräsentationsheader ermöglichen es, die zugrunde liegenden Daten zu extrahieren und zu verstehen. Die zugrunde liegende Ressource bleibt semantisch in jedem Fall gleich, jedoch unterscheidet sich ihre Darstellung.

Während Repräsentationen unterschiedliche Formen von Ressourcen sind, können sie selbst auch in verschiedenen Formen übertragen werden: als HTTP-Nachrichtenrahmen (siehe z.B. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), ein bestimmter Oktettstrom (siehe z.B. {{HTTPHeader("Content-Range")}}), abgeleitet aus der _ausgewählten Repräsentation_.

Clients spezifizieren die Formate, die sie bevorzugen, während der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) (unter Verwendung von `Accept-*` Headern), und die Repräsentationsheader informieren den Client über das Format der _ausgewählten Repräsentation_, die sie erhalten haben.

Repräsentationsheader können sowohl in HTTP-Anfrage- als auch in Antwortnachrichten mit verschiedenen Methoden vorhanden sein. Wenn sie als Antwort auf eine `HEAD`-Anfrage gesendet werden, beschreiben sie die Inhaltsrepräsentation des Körpers, die _ausgewählt würde_, wenn die Ressource mit einer `GET`-Anfrage angefordert würde.

Repräsentationsheader umfassen:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validierer, die in [Bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) verwendet werden, wie:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Repräsentationsheader schließen sich nicht gegenseitig mit {{Glossary("Content_header", "Inhaltsheadern")}} aus.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Content_header", "Inhaltsheader")}}
- [RFC 9110, Abschnitt 3.2: Repräsentationen](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
