---
title: Head-of-line Blocking
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Im Bereich der Computernetzwerke bezieht sich **Head-of-line Blocking** (_HOL Blocking_) auf einen Leistungsengpass, der auftritt, wenn eine Warteschlange von Paketen durch das erste Paket in der Reihe blockiert wird, obwohl andere Pakete in der Warteschlange verarbeitet werden könnten.

In HTTP/1.1 kann HOL Blocking auftreten, wenn ein Client mehrere Anfragen an einen {{Glossary("server", "Server")}} sendet, ohne auf die Antworten zu warten. Der Server verarbeitet die Anfragen der Reihe nach, aber wenn die Antwort auf die erste Anfrage verzögert wird, sind auch die Antworten auf die nachfolgenden Anfragen verzögert. HTTP/2 adressiert dieses Problem durch Anfragemultiplexing, wodurch HOL Blocking auf der Anwendungsebene beseitigt wird, jedoch besteht es weiterhin auf der Transportebene ({{Glossary("TCP", "TCP")}}).

## Siehe auch

- Verwandte Glossarbegriffe
  - {{Glossary("HTTP", "HTTP")}}, {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("TCP", "TCP")}}
- [Aufbau der Seite: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line Blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) auf Wikipedia
