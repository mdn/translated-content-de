---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time
l10n:
  sourceCommit: f796ce2e42e778743c5e961135cf4841d8a9b7c4
---

**Round Trip Time** (**RTT**) ist die Zeitspanne, die benötigt wird, um ein Datenpaket zu einem Ziel zu senden und die Zeit, die benötigt wird, um eine Empfangsbestätigung dieses Pakets am Ausgangspunkt zurückzuerhalten. Die RTT zwischen einem Netzwerk und einem Server kann mit dem `ping`-Befehl bestimmt werden.

```bash
ping example.com
```

Dies wird in etwa Folgendes ausgeben:

```plain
PING example.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- example.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

Im obigen Beispiel wird die durchschnittliche Round Trip Time in der letzten Zeile als 26,8ms angezeigt.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB)
  - {{Glossary("Latency", "Latency")}}
