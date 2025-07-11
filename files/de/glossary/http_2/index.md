---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**HTTP/2** ist eine bedeutende Überarbeitung des [HTTP-Netzwerkprotokolls](/de/docs/Web/HTTP).

Die Hauptziele von HTTP/2 sind die Reduzierung von {{Glossary("latency", "Latenz")}} und {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}} durch die Ermöglichung der vollständigen Anforderungs- und Antwortmultiplexierung, die Minimierung des Protokollaufwands durch effiziente Komprimierung der HTTP-Headerfelder (HPACK) und die Unterstützung der Anforderungspriorisierung.

HTTP/2 führte auch einen Mechanismus namens Server Push ein, der es einem Server ermöglichte, einem Client Ressourcen zu senden, in der Erwartung, dass der Client sie sehr bald benötigen würde.
Server Push erwies sich in der Praxis als schwierig zu implementieren und wurde aus den meisten größeren Browser-Engines entfernt.
Es wurde durch alternative Methoden wie [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) und {{HTTPStatus("103", "103 Early hints")}} ersetzt.

HTTP/2 ändert die Semantik von HTTP nicht, was bedeutet, dass die in HTTP/1.1 gefundenen Kernkonzepte wie Methoden, Statuscodes, URIs und Headerfelder gleich bleiben.
Stattdessen ändert HTTP/2, wie die Daten formatiert (gerahmt) und zwischen dem Client und dem Server transportiert werden. Beide verwalten den gesamten Prozess und verbergen die Protokollkomplexität innerhalb einer Framing-Schicht.
Infolgedessen können alle vorhandenen Anwendungen ohne Modifikation über das Protokoll bereitgestellt werden.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Latency", "Latenz")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) auf Wikipedia
