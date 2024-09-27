---
title: Representation Header
slug: Glossary/Representation_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

Ein **Representation Header** (oder 'representation metadata') ist ein [HTTP Header](/de/docs/Glossary/HTTP_header), der beschreibt, wie die im Nachrichteninhalt enthaltenen Daten interpretiert werden sollen.

Zum Beispiel könnten die Inhalte einer bestimmten Nachricht für den Transport codiert sein, die gesamte Ressource könnte als ein bestimmter Medientyp formatiert sein, wie z. B. XML, JSON, HTML oder Markdown, in einer bestimmten Sprache oder geografischen Region lokalisiert und/oder mit einem bestimmten Algorithmus komprimiert sein.
Die Representation Headers erlauben es, die zugrunde liegenden Daten zu extrahieren und zu verstehen.
Die zugrunde liegende Ressource ist in jedem Fall semantisch gleich, aber ihre Darstellung ist unterschiedlich.

Während Darstellungen unterschiedliche Formen von Ressourcen sind, können Darstellungen selbst auch in verschiedenen Formen übertragen werden: als HTTP-Nachrichtenrahmen (siehe z.B. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), ein bestimmter Oktettstrom (siehe z.B. {{HTTPHeader("Content-Range")}}), abgeleitet von der _ausgewählten Darstellung_.

Clients geben die Formate an, die sie während der [Content Negotiation](/de/docs/Web/HTTP/Content_negotiation) bevorzugen (mithilfe von `Accept-*` Headers), und die Representation Headers teilen dem Client das Format der _ausgewählten Darstellung_ mit, die sie erhalten haben.

Representation Headers können sowohl in HTTP-Anfrage- als auch in HTTP-Antwortnachrichten mit verschiedenen Methoden vorhanden sein.
Wenn sie als Antwort auf eine `HEAD`-Anfrage gesendet werden, beschreiben sie die Darstellungsart des Inhalts, die _ausgewählt_ werden würde, wenn die Ressource mit einer `GET`-Anfrage angefordert würde.

Representation Headers umfassen:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validatoren, die in [bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) verwendet werden, wie z.B.:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Representation Headers schließen sich nicht gegenseitig mit [Content Headers](/de/docs/Glossary/Content_header) aus.

## Siehe auch

- [RFC 9110, Abschnitt 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste aller HTTP Headers](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - [Content Header](/de/docs/Glossary/Content_header)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
- {{HTTPHeader("Digest")}} {{Deprecated_Inline}}, {{HTTPHeader("Want-Digest")}} {{Deprecated_Inline}}
