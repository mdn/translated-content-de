---
title: TTL
slug: Glossary/TTL
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Time To Live (TTL) kann sich entweder auf die Lebensdauer eines Pakets in einem Netzwerk oder auf die Ablaufzeit von zwischengespeicherten Daten beziehen.

## Netzwerke

Im Bereich der Netzwerke ist die TTL, die im Paket eingebettet ist, normalerweise als Anzahl von Hops oder als Ablaufzeitstempel definiert, nach der das Paket verworfen wird. Dies bietet eine Möglichkeit, Netzwerküberlastungen zu vermeiden, indem Pakete freigegeben werden, die zu lange im Netzwerk unterwegs waren.

## Zwischenspeicherung

Im Kontext der Zwischenspeicherung zeigt TTL (als vorzeichenloser 32-Bit-Integer), als Teil des {{Glossary("Response header", "HTTP-Response-Headers")}} oder der {{Glossary("DNS")}}-Abfrage, die Zeitspanne in Sekunden an, während derer die Ressource vom Anforderer zwischengespeichert werden kann.

## Siehe auch

- [TTL](https://en.wikipedia.org/wiki/Time_to_live) auf Wikipedia
- [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181#section-8) auf IETF
- [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035) auf IETF
