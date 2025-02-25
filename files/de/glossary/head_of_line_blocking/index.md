---
title: Head-of-line-Blocking
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

Im Bereich der Rechnernetzwerke bezieht sich **Head-of-line-Blocking** (_HOL-Blocking_) auf einen Leistungsengpass, der auftritt, wenn eine Warteschlange von Paketen durch das erste Paket in der Warteschlange aufgehalten wird, obwohl andere Pakete in der Warteschlange verarbeitet werden könnten.

In HTTP/1.1 kann HOL-Blocking auftreten, wenn ein Client mehrere Anfragen an einen {{Glossary("server", "Server")}} sendet, ohne auf die Antworten zu warten. Der Server verarbeitet die Anfragen in der Reihenfolge, in der sie eingegangen sind, aber wenn die Antwort auf die erste Anfrage verzögert wird, werden auch die Antworten auf nachfolgende Anfragen verzögert. HTTP/2 löst dieses Problem durch Anfragemultiplexing, wodurch HOL-Blocking auf der Anwendungsschicht beseitigt wird, aber es existiert weiterhin auf der Transport- ({{Glossary("TCP", "TCP")}})-Schicht.

## Siehe auch

- Verwandte Glossarbegriffe
  - {{Glossary("HTTP", "HTTP")}}, {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("TCP", "TCP")}}
- [Seite befüllen: Wie Browser arbeiten](/de/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) auf Wikipedia
