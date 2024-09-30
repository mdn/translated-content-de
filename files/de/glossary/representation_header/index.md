---
title: Representation header
slug: Glossary/Representation_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

Ein **Representation Header** (oder 'Representation Metadata') ist ein [HTTP-Header](/de/docs/Glossary/HTTP_header), der beschreibt, wie die im Nachrichtentext enthaltenen Daten interpretiert werden sollen.

Zum Beispiel können die Inhalte in einer bestimmten Nachricht für den Transport codiert sein, die gesamte Ressource könnte in einem bestimmten Medientyp wie XML, JSON, HTML oder Markdown formatiert sein, lokalisiert in eine bestimmte geschriebene Sprache oder geografische Region, und/oder unter Verwendung eines bestimmten Algorithmus komprimiert sein. Die Representation Headers ermöglichen es, die zugrunde liegenden Daten zu extrahieren und zu verstehen. Die zugrunde liegende Ressource ist in jedem Fall semantisch dieselbe, aber ihre Darstellung ist unterschiedlich.

Während Repräsentationen unterschiedliche Formen von Ressourcen sind, können Repräsentationen selbst auch in verschiedenen Formen übertragen werden: in HTTP-Nachrichtenrahmen (vgl. z.B. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), als bestimmter Oktettstrom (vgl. z.B. {{HTTPHeader("Content-Range")}}), abgeleitet von der _ausgewählten Repräsentation_.

Clients geben während der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) (unter Verwendung von `Accept-*` Headers) die bevorzugten Formate an, die sie empfangen möchten, und die Representation Headers informieren den Client über das Format der _ausgewählten Repräsentation_, die sie erhalten haben.

Representation Headers können sowohl in HTTP-Anfrage- als auch in Antwortnachrichten mit verschiedenen Methoden vorhanden sein. Wenn sie als Antwort auf eine `HEAD`-Anfrage gesendet werden, beschreiben sie die Darstellung des Inhaltskörpers, der _gewählt_ würde, wenn die Ressource mit einer `GET`-Anfrage angefordert würde.

Zu den Representation Headers gehören:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validatoren, die in [bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) verwendet werden, wie zum Beispiel:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Representation Headers schließen sich nicht gegenseitig mit [Content Headers](/de/docs/Glossary/Content_header) aus.

## Siehe auch

- [RFC 9110, Abschnitt 3.2: Repräsentationen](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - [Content Header](/de/docs/Glossary/Content_header)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
- {{HTTPHeader("Digest")}} {{Deprecated_Inline}}, {{HTTPHeader("Want-Digest")}} {{Deprecated_Inline}}
