---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{GlossarySidebar}}

**HTTP/2** ist eine bedeutende Überarbeitung des [HTTP-Netzwerkprotokolls](/de/docs/Web/HTTP).

Die Hauptziele von HTTP/2 sind die Verringerung der {{Glossary("latency", "Latenz")}} und des Head-of-Line-Blockings durch die Ermöglichung vollständiger Anfrage- und Antwort-Multiplexing, die Minimierung des Protokoll-Overheads durch effiziente Kompression der HTTP-Headerfelder und die Unterstützung von Anfrage-Priorisierung und Server-Push.

HTTP/2 ändert die Semantik von HTTP nicht, was bedeutet, dass die Kernkonzepte, die in HTTP/1.1 gefunden werden, wie Methoden, Statuscodes, URIs und Headerfelder, gleich bleiben. Stattdessen verändert HTTP/2 die Art und Weise, wie die Daten formatiert (gerahmt) und zwischen dem Client und dem Server transportiert werden, wobei beide den gesamten Prozess verwalten und die Protokollkomplexität innerhalb einer Rahmenstruktur verbergen. Dadurch können alle bestehenden Anwendungen ohne Änderung über das Protokoll bereitgestellt werden.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Latency", "Latenz")}}
