---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

**Round Trip Time** (**RTT**) ist die Zeitdauer, die ein Datenpaket benötigt, um zu einem Ziel gesendet zu werden, plus die Zeit, die benötigt wird, um eine Bestätigung dieses Pakets wieder am Ursprungsort zu empfangen. Die RTT zwischen einem Netzwerk und einem Server kann mit dem `ping`-Befehl ermittelt werden.

```bash
ping example.com
```

Dies wird etwa folgende Ausgabe erzeugen:

```plain
PING example.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

Im obigen Beispiel wird die durchschnittliche Rundlaufzeit in der letzten Zeile mit 26,8 ms angezeigt.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB)
  - {{Glossary("Latency", "Latenz")}}
