---
title: Head-of-line-Blocking
short-title: HOL blocking
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

In der Computernetzwerktechnik bezieht sich **Head-of-line-Blocking** (_HOL-Blocking_) auf einen Leistungsengpass, der auftritt, wenn eine Warteschlange von {{Glossary("packet", "Paketen")}} durch das erste Paket in der Warteschlange aufgehalten wird, obwohl andere Pakete in der Warteschlange verarbeitet werden könnten.

In HTTP/1.1 werden Anfragen auf einer einzelnen {{Glossary("TCP", "TCP")}}-Verbindung normalerweise nacheinander gesendet – eine neue Anfrage kann nicht über die Verbindung gestellt werden, während auf eine Antwort auf die vorherige Anfrage gewartet wird.
Dies kann zu HOL-Blocking-Problemen führen, selbst wenn mehrere TCP-Verbindungen zwischen dem Client und dem Server bestehen.

HTTP/1.1 definiert ein optionales Feature namens _HTTP-Pipelining_, das erfolglos versuchte, das HOL-Blocking zu umgehen, indem es ermöglichte, Anfragen zu senden, ohne auf frühere Antworten zu warten.
Unglücklicherweise bedeutet das Design von HTTP/1.1, dass Antworten in der gleichen Reihenfolge zurückgegeben werden müssen, in der die Anfragen empfangen wurden, sodass HOL-Blocking immer noch auftreten kann, wenn das Abschließen einer Anfrage lange dauert.
Netzwerkbedingungen wie Staus, Paketverlust (und die daraus resultierenden TCP-Neuübertragungen) oder {{Glossary("TCP_slow_start", "TCP Slow Start")}} können ebenfalls die Übertragung verzögern und dazu führen, dass spätere Antworten durch frühere blockiert werden.

{{Glossary("HTTP_2", "HTTP/2")}} reduziert das HOL-Blocking auf Anwendungsebene durch die Einführung von _Multiplexing_ von Anfragen und Antworten.
Mit dieser Funktion können mehrere Anfragen und Antworten über eine einzige TCP-Verbindung mithilfe unabhängig nummerierter Streams ineinander verschachtelt werden, und die Stream-Priorisierung hilft dem Server zu entscheiden, welche Streams zuerst gesendet werden sollen.
Paketverluste auf der Transportschicht können dennoch HOL-Blocking über Streams hinweg verursachen, da HTTP/2 über TCP läuft – ein verlorenes TCP-Segment kann alle Streams auf dieser Verbindung blockieren, bis die verlorenen Daten erneut übertragen werden.

{{Glossary("HTTP_3", "HTTP/3")}} beseitigt das HOL-Blocking auf der Transportschicht, indem es {{Glossary("QUIC", "QUIC")}} über {{Glossary("UDP", "UDP")}} verwendet, und somit existiert das HOL-Problem bei HTTP nicht mehr.
QUIC bietet mehrere unabhängige Streams mit verlustspezifischer Wiederherstellung, sodass Paketverlust nur den Stream betrifft, in dem er auftritt, anstatt die gesamte Verbindung. Dies beseitigt das TCP-HOL-Problem.

## Siehe auch

- Verwandte Glossarbegriffe
  - {{Glossary("HTTP", "HTTP")}}, {{Glossary("HTTP_2", "HTTP/2")}}, {{Glossary("HTTP_3", "HTTP/3")}}
  - {{Glossary("TCP", "TCP")}}, {{Glossary("QUIC", "QUIC")}}, {{Glossary("UDP", "UDP")}}
- [Das Befüllen der Seite: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) auf Wikipedia
