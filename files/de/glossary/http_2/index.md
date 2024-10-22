---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: bd48972c8a9c2acf3b8fa6e41248d0952eb0c406
---

{{GlossarySidebar}}

**HTTP/2** ist eine bedeutende Überarbeitung des [HTTP-Netzwerkprotokolls](/de/docs/Web/HTTP).

Die Hauptziele von HTTP/2 sind es, die {{Glossary("latency", "Latenz")}} und das Head-of-Line-Blocking zu reduzieren, indem vollständiges Anfordern und Antworten-Multiplexing ermöglicht wird, den Protokoll-Overhead durch effiziente Komprimierung von HTTP-Headerfeldern (HPACK) zu minimieren und die Unterstützung für Anforderungspriorisierung bereitzustellen.

HTTP/2 führte auch einen Mechanismus namens Server Push ein, der es einem Server ermöglichte, Ressourcen an einen Client zu senden, in der Erwartung, dass der Client sie sehr bald benötigen würde. Server Push erwies sich in der Praxis als schwierig zu implementieren und wurde aus den meisten wichtigen Browser-Engines entfernt. Er wurde durch alternative Methoden wie [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) und {{HTTPStatus("103", "103 Early hints")}} ersetzt.

HTTP/2 ändert nicht die Semantik von HTTP, was bedeutet, dass die Kernkonzepte von HTTP/1.1, wie Methoden, Statuscodes, URIs und Header-Felder, gleich bleiben. Stattdessen ändert HTTP/2, wie die Daten formatiert (gerahmt) und zwischen Client und Server transportiert werden, wobei beide den gesamten Prozess verwalten und die Protokollkomplexität innerhalb einer Rahmenschicht verbergen. Dadurch können alle bestehenden Anwendungen ohne Änderungen über das Protokoll bereitgestellt werden.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Latency", "Latenz")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) auf Wikipedia
