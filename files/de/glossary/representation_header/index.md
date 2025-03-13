---
title: Representation-Header
slug: Glossary/Representation_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein **Representation-Header** (oder 'Repräsentations-Metadaten') ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der beschreibt, wie die im Nachrichtentext enthaltenen Daten interpretiert werden sollen.

Beispielsweise könnten die Inhalte in einer bestimmten Nachricht für den Transport codiert sein, die gesamte Ressource könnte als ein bestimmter Medientyp wie XML, JSON, HTML oder Markdown formatiert, in eine bestimmte Schriftsprache oder geografische Region lokalisiert und/oder mit einem bestimmten Algorithmus komprimiert sein. Die Representation-Header ermöglichen es, die zugrunde liegenden Daten zu extrahieren und zu verstehen. Die zugrunde liegende Ressource ist in jedem Fall semantisch gleich, aber ihre Darstellung ist unterschiedlich.

Während Darstellungen verschiedene Formen von Ressourcen sind, können Darstellungen selbst auch in verschiedenen Formen übertragen werden: ein HTTP-Nachrichtenrahmen (siehe z.B. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), ein bestimmter Strom von Oktetten (siehe z.B. {{HTTPHeader("Content-Range")}}), abgeleitet aus der _ausgewählten Darstellung_.

Clients spezifizieren die Formate, die sie während der [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) (mithilfe von `Accept-*`-Headern) erhalten möchten, und die Representation-Header informieren den Client über das Format der _ausgewählten Darstellung_, die sie erhalten haben.

Representation-Header können in sowohl HTTP-Anfrage- als auch -Antwortnachrichten mit verschiedenen Methoden vorhanden sein. Wenn sie als Antwort auf eine `HEAD`-Anfrage gesendet werden, beschreiben sie die Inhaltsdarstellung des Körpers, die _gewählt werden würde_, wenn die Ressource mit einer `GET`-Anfrage angefordert würde.

Representation-Header beinhalten:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validatoren, die in [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) verwendet werden, wie z.B.:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Representation-Header sind nicht gegenseitig exklusiv mit {{Glossary("Content_header", "Inhaltsheadern")}}.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Content_header", "Inhaltsheader")}}
- [RFC 9110, Abschnitt 3.2: Darstellungen](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
