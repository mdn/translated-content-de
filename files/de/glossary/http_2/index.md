---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: a0a4a3a87561e731449a6e85efcb66c99a746e9b
---

{{GlossarySidebar}}

**HTTP/2** ist eine bedeutende Überarbeitung des [HTTP-Netzwerkprotokolls](/de/docs/Web/HTTP).

Die Hauptziele von HTTP/2 sind die Reduzierung der {{Glossary("latency", "Latenz")}} und des {{Glossary("head_of_line_blocking", "Head-of-Line-Blockings")}}, indem vollständiges Anforderungs- und Antwortmultiplexing ermöglicht wird, die Minimierung des Protokoll-Overheads durch effiziente Komprimierung von HTTP-Headerfeldern (HPACK) und die Unterstützung der Priorisierung von Anfragen.

HTTP/2 führte auch einen Mechanismus namens Server Push ein, der es einem Server ermöglichte, Ressourcen an einen Client zu senden, in der Erwartung, dass der Client sie sehr bald benötigen würde.
Server Push erwies sich in der Praxis als schwierig zu implementieren und wurde aus den meisten großen Browser-Engines entfernt.
Es wurde durch alternative Methoden wie [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) und {{HTTPStatus("103", "103 Early hints")}} ersetzt.

HTTP/2 verändert nicht die Semantik von HTTP, was bedeutet, dass die grundlegenden Konzepte von HTTP/1.1, wie Methoden, Statuscodes, URIs und Headerfelder, gleich bleiben.
Stattdessen verändert HTTP/2 die Art und Weise, wie die Daten formatiert (gerahmt) und zwischen Client und Server transportiert werden, wobei beide den gesamten Prozess steuern und die Protokollkomplexität innerhalb einer Framing-Schicht verbergen.
Als Ergebnis können alle bestehenden Anwendungen ohne Änderungen über das Protokoll bereitgestellt werden.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Latency", "Latenz")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) auf Wikipedia
