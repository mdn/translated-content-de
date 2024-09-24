---
title: Repräsentationsheader
slug: Glossary/Representation_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

Ein **Repräsentationsheader** (oder 'Repräsentationsmetadaten') ist ein {{glossary("HTTP_header", "HTTP-Header")}}, der beschreibt, wie die im Nachrichtentext enthaltenen Daten interpretiert werden sollen.

Zum Beispiel könnte der Inhalt einer bestimmten Nachricht zur Übertragung kodiert sein, die gesamte Ressource könnte als ein bestimmter Medientyp wie XML, JSON, HTML oder Markdown formatiert sein, auf eine bestimmte Sprache oder geografische Region lokalisiert und/oder mit einem bestimmten Algorithmus komprimiert sein. Die Repräsentationsheader ermöglichen es, die zugrunde liegenden Daten zu extrahieren und zu verstehen. Die zugrundeliegende Ressource bleibt in jedem Fall semantisch gleich, aber ihre Darstellung ist unterschiedlich.

Während Repräsentationen verschiedene Formen von Ressourcen sind, können Repräsentationen selbst auch in verschiedenen Formen übertragen werden: als HTTP-Nachrichtenrahmen (vgl. z.B. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), ein bestimmter Strom von Oktetten (vgl. z.B. {{HTTPHeader("Content-Range")}}), abgeleitet von der _ausgewählten Repräsentation_.

Clients spezifizieren die Formate, die sie während der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) (unter Verwendung von `Accept-*` Headern) bevorzugen, und die Repräsentationsheader informieren den Client über das Format der _ausgewählten Repräsentation_, die sie erhalten haben.

Repräsentationsheader können in sowohl HTTP-Anfrage- als auch Antwortnachrichten mit verschiedenen Methoden vorhanden sein. Wenn sie als Antwort auf eine `HEAD`-Anfrage gesendet werden, beschreiben sie die Darstellung des Inhalts, die _ausgewählt würde_, wenn die Ressource mit einer `GET`-Anfrage angefordert worden wäre.

Repräsentationsheader umfassen:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validatoren, die in [bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) verwendet werden, wie z.B.:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Repräsentationsheader schließen sich nicht gegenseitig mit {{Glossary("Content header", "Inhalts-Header")}} aus.

## Siehe auch

- [RFC 9110, Abschnitt 3.2: Repräsentationen](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Content header")}}
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
- {{HTTPHeader("Digest")}} {{Deprecated_Inline}}, {{HTTPHeader("Want-Digest")}} {{Deprecated_Inline}}
