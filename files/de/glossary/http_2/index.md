---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**HTTP/2** ist eine große Überarbeitung des [HTTP-Netzwerkprotokolls](/de/docs/Web/HTTP/Basics_of_HTTP).

Die Hauptziele von HTTP/2 sind die Reduzierung der {{glossary("latency","Latenz")}} durch vollständiges Multiplexing von Anfragen und Antworten, die Minimierung des Protokollaufwands durch effiziente Kompression von HTTP-Headerfeldern und die Unterstützung von Anforderungspriorisierung und Server-Push.

HTTP/2 modifiziert die Anwendungskonzepte von HTTP in keiner Weise. Alle grundlegenden Konzepte von HTTP 1.1, wie HTTP-Methoden, Statuscodes, URIs und Headerfelder, bleiben erhalten. Stattdessen ändert HTTP/2, wie die Daten formatiert (gerahmt) und zwischen Client und Server transportiert werden; beide verwalten den gesamten Prozess und verbergen die Anwendungskomplexität innerhalb der neuen Rahmenschicht. Dadurch können alle bestehenden Anwendungen ohne Modifikation ausgeliefert werden.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{glossary("HTTP")}}
  - {{glossary("Latency")}}
