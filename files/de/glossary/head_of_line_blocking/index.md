---
title: Head-of-line-Blockierung
short-title: HOL blocking
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: aa751052a9d07bdf29274fbb216f2d6d13993c11
---

Im Bereich der Computernetzwerke bezieht sich die **Head-of-line-Blockierung** (_HOL-Blockierung_) auf einen Leistungsengpass, der auftritt, wenn eine Warteschlange von Paketen durch das erste Paket in der Warteschlange blockiert wird, obwohl andere Pakete in der Warteschlange bearbeitet werden könnten.

In HTTP/1.1 tritt die HOL-Blockierung auf, wenn ein Client mehrere Anfragen an einen {{Glossary("server", "Server")}} über eine bestimmte TCP-Verbindung sendet und eine Antwort auf dieser Verbindung aus irgendeinem Grund verzögert wird — etwa durch Netzwerküberlastung, {{Glossary("TCP_slow_start", "TCP-Slow-Start")}} oder durch Probleme während der Übertragung. HTTP/1.1-Anfragen werden pro TCP-Verbindung nacheinander gesendet, sodass eine Verzögerung beim Empfang einer Antwort den nächsten Anfrage-Antwort-Austausch blockiert.

Ein Mechanismus namens _HTTP-Pipelining_ versuchte, dieses Problem zu umgehen, indem ein Client mehrere Anfragen absendete, ohne auf Antworten zu warten. In der Praxis erwies sich Pipelining jedoch als schwierig umzusetzen, daher wird dieser Mechanismus selten, wenn überhaupt, verwendet, und die meisten Browser unterstützen ihn nicht mehr.

HTTP/2 behebt die HOL-Blockierungsprobleme in HTTP/1.1 durch Anfrage-_Multiplexing_. Multiplexing erlaubt es einer einzigen TCP-Verbindung, Anfragen und Antworten in nummerierten Streams zu verflechten. Ein Client kann viele Anfragen über eine einzige Verbindung senden, ohne auf frühere Antworten zu warten. Es ist zu beachten, dass, obwohl die HOL-Blockierung in HTTP/2 behoben wurde, sie auf der Transportebene ({{Glossary("TCP", "TCP")}}) immer noch ein Problem darstellt.

## Siehe auch

- Verwandte Glossarbegriffe
  - {{Glossary("HTTP", "HTTP")}}, {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("TCP", "TCP")}}
- [Die Seite füllen: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) auf Wikipedia
