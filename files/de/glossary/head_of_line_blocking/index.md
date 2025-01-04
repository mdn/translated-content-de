---
title: Head-of-line Blocking
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: a0a4a3a87561e731449a6e85efcb66c99a746e9b
---

{{GlossarySidebar}}

Im Computer-Netzwerkbereich bezieht sich **head-of-line blocking** (_HOL blocking_) auf einen Performance-Engpass, der auftritt, wenn eine Warteschlange von Paketen durch das erste Paket in der Warteschlange aufgehalten wird, obwohl andere Pakete in der Warteschlange verarbeitet werden könnten.

In HTTP/1.1 kann HOL Blocking auftreten, wenn ein Client mehrere Anfragen an einen {{Glossary("server", "Server")}} sendet, ohne auf die Antworten zu warten. Der Server verarbeitet die Anfragen der Reihe nach, aber wenn die Antwort auf die erste Anfrage verzögert ist, sind auch die Antworten auf die nachfolgenden Anfragen verzögert. HTTP/2 behebt dieses Problem durch Anfrage-Multiplexing und eliminiert HOL Blocking in der Anwendungsschicht, aber es existiert immer noch auf der Transportebene ({{Glossary("TCP", "TCP")}}).

## Siehe auch

- Verwandte Glossarbegriffe
  - {{Glossary("HTTP", "HTTP")}}, {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("TCP", "TCP")}}
- [Die Seite füllen: wie Browser arbeiten](/de/docs/Web/Performance/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) auf Wikipedia
