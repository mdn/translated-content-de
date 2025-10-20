---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

**HTTP/2** ist eine wichtige Überarbeitung des [HTTP-Netzwerkprotokolls](/de/docs/Web/HTTP).

Die Hauptziele von HTTP/2 sind die Reduzierung von {{Glossary("latency", "Latenz")}} und {{Glossary("head_of_line_blocking", "Head-of-line blocking")}}, durch die Ermöglichung von vollständigem Multiplexing von Anfragen und Antworten und die Unterstützung der Anfragenpriorisierung, sowie die Minimierung des Protokoll-Overheads durch effiziente Kompression von HTTP-Header-Feldern (HPACK).

HTTP/2 hat auch einen Mechanismus namens Server Push eingeführt, der es einem Server ermöglicht, Ressourcen an einen Client zu senden, in der Erwartung, dass der Client diese sehr bald benötigt. Server Push erwies sich in der Praxis als schwierig zu implementieren und wurde aus den meisten großen Browser-Engines entfernt. Er wurde durch alternative Methoden wie [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) und {{HTTPStatus("103", "103 Early hints")}} ersetzt.

HTTP/2 ändert nicht die Semantik von HTTP, was bedeutet, dass die Kernkonzepte, die in HTTP/1.1 gefunden werden, wie Methoden, Statuscodes, URIs und Header-Felder, unverändert bleiben. Stattdessen ändert HTTP/2 die Art und Weise, wie die Daten formatiert (gerahmt) und zwischen Client und Server transportiert werden, wobei beide den gesamten Prozess verwalten und die Protokollkomplexität innerhalb einer Framing-Schicht verborgen wird. Infolgedessen können alle bestehenden Anwendungen über das Protokoll ohne Änderungen bereitgestellt werden.

## Siehe auch

- [HTTP](/de/docs/Web/HTTP) auf MDN
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Latency", "Latenz")}}, {{Glossary("head_of_line_blocking", "Head-of-line blocking")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) auf Wikipedia
