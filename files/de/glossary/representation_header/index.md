---
title: Representation Header
slug: Glossary/Representation_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Representation Header** (oder "Representation Metadata") ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der beschreibt, wie die im Nachrichtentext enthaltenen Daten interpretiert werden sollen.

Zum Beispiel könnte der Inhalt einer bestimmten Nachricht für den Transport kodiert sein, die gesamte Ressource könnte als ein bestimmter Medientyp wie XML, JSON, HTML oder Markdown formatiert, in eine bestimmte geschriebene Sprache oder geografische Region lokalisiert und/oder mit einem bestimmten Algorithmus komprimiert sein. Die Representation Header ermöglichen es, die zugrunde liegenden Daten zu extrahieren und zu verstehen. Die zugrunde liegende Ressource ist in jedem Fall semantisch gleich, aber ihre Darstellung ist unterschiedlich.

Während Darstellungen verschiedene Formen von Ressourcen sind, können Darstellungen selbst auch in verschiedenen Formen übertragen werden: ein HTTP-Nachrichtenrahmen (vgl. z.B. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), ein bestimmter Oktettstrom (vgl. z.B. {{HTTPHeader("Content-Range")}}), abgeleitet von der _gewählten Darstellung_.

Clients geben während der [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) (über `Accept-*` Header) die Formate an, die sie bevorzugen. Die Representation Header teilen dem Client das Format der _gewählten Darstellung_ mit, die sie erhalten haben.

Representation Header können sowohl in HTTP-Anfrage- als auch Antwortnachrichten mit verschiedenen Methoden vorhanden sein. Wenn sie als Antwort auf eine `HEAD`-Anfrage gesendet werden, beschreiben sie die Darstellung des Inhalts, die _gewählt würde_, wenn die Ressource mit einer `GET`-Anfrage angefordert worden wäre.

Zu den Representation Headern gehören:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validatoren, die in [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) verwendet werden, wie:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Representation Header sind nicht gegenseitig ausschließend mit {{Glossary("Content_header", "Inhalts-Headern")}}.

## Siehe auch

- Verwandte Glossartermine:
  - {{Glossary("Content_header", "Inhalts-Header")}}
- [RFC 9110, Abschnitt 3.2: Repräsentationen](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
