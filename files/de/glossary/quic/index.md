---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**QUIC** ist ein multiplexes Transportprotokoll, das auf UDP implementiert ist. Es wird anstelle von {{Glossary("TCP", "TCP")}} als Transportschicht in HTTP/3 verwendet.

QUIC wurde entwickelt, um schnellere Verbindungen und geringere Latenzzeiten für HTTP-Verbindungen bereitzustellen. Insbesondere:

- Bei TCP wird auf das anfängliche TCP-Handshake optional ein TLS-Handshake gefolgt, der abgeschlossen sein muss, bevor Daten übertragen werden können. Da TLS heutzutage nahezu allgegenwärtig ist, integriert QUIC das TLS-Handshake in das anfängliche QUIC-Handshake, wodurch die Anzahl der Nachrichten, die während des Aufbaus ausgetauscht werden müssen, reduziert wird.

- HTTP/2 ist ein multiplexes Protokoll, das mehrere gleichzeitige HTTP-Transaktionen ermöglicht. Die Transaktionen werden jedoch über eine einzelne TCP-Verbindung multiplexiert, was bedeutet, dass Paketverluste und anschließende Neuübertragungen auf der TCP-Ebene alle Transaktionen blockieren können. QUIC umgeht dies, indem es über UDP läuft und Paketverlusterkennung und Neuübertragung separat für jeden Stream implementiert, sodass Paketverluste nur den spezifischen Stream blockieren, dessen Pakete verloren gegangen sind.

## Siehe auch

- {{rfc("9000", "die QUIC-Spezifikation")}}
- {{rfc("9114", "die HTTP/3-Spezifikation")}}
