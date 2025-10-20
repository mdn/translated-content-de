---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

**QUIC** ist ein multiplexierter Transportprotokoll, das auf {{Glossary("UDP", "UDP")}} implementiert ist. Es wird anstelle von {{Glossary("TCP", "TCP")}} als Transportschicht in {{Glossary("HTTP_3", "HTTP/3")}} verwendet.

QUIC wurde entwickelt, um schnellere Einrichtung und geringere {{Glossary("latency", "Latenz")}} für {{Glossary("HTTP", "HTTP")}}-Verbindungen zu bieten. Insbesondere:

- Bei TCP folgt auf den initialen TCP-Handshake optional ein TLS-Handshake, der abgeschlossen werden muss, bevor Daten übertragen werden können. Da TLS mittlerweile fast allgegenwärtig ist, integriert QUIC den TLS-Handshake in den initialen QUIC-Handshake, wodurch die Anzahl der beim Setup ausgetauschten Nachrichten verringert wird.

- HTTP/2 ist ein multiplexiertes Protokoll, das mehrere gleichzeitige HTTP-Transaktionen ermöglicht. Die Transaktionen werden jedoch über eine einzelne TCP-Verbindung multiplexiert, was bedeutet, dass Paketverluste und anschließende Neuübertragungen auf der TCP-Schicht alle Transaktionen blockieren können. QUIC vermeidet dies, indem es über UDP läuft und Paketerkennung und Neuübertragung separat für jeden Stream implementiert, was bedeutet, dass Paketverluste nur den bestimmten Stream blockieren, dessen Pakete verloren gingen.

## Siehe auch

- Verwandte Glossarbegriffe
  - {{Glossary("HTTP", "HTTP")}}, {{Glossary("HTTP_2", "HTTP/2")}}, {{Glossary("HTTP_3", "HTTP/3")}}
  - {{Glossary("TCP", "TCP")}}, {{Glossary("UDP", "UDP")}}
  - {{Glossary("Latency", "Latenz")}}, {{Glossary("head_of_line_blocking", "Head-of-line blocking")}}
- {{rfc("9000", "die QUIC-Spezifikation")}}
- {{rfc("9114", "die HTTP/3-Spezifikation")}}
