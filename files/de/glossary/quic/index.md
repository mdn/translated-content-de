---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**QUIC** ist ein multiplexes Transportprotokoll, das auf UDP implementiert ist. Es wird anstelle von [TCP](/de/docs/Glossary/TCP) als Transportschicht in HTTP/3 verwendet.

QUIC wurde entwickelt, um schnellere Verbindungen und geringere Latenzzeiten für HTTP-Verbindungen bereitzustellen. Insbesondere:

- Bei TCP folgt auf das anfängliche TCP-Handshake optional ein TLS-Handshake, der abgeschlossen sein muss, bevor Daten übertragen werden können. Da TLS mittlerweile fast allgegenwärtig ist, integriert QUIC den TLS-Handshake in das anfängliche QUIC-Handshake, wodurch die Anzahl der Nachrichten, die während des Setups ausgetauscht werden müssen, reduziert wird.

- HTTP/2 ist ein multiplexes Protokoll, das mehrere gleichzeitige HTTP-Transaktionen ermöglicht. Die Transaktionen werden jedoch über eine einzelne TCP-Verbindung multiplexiert, was bedeutet, dass Paketverluste und anschließende Neuübertragungen auf TCP-Ebene alle Transaktionen blockieren können. QUIC vermeidet dies, indem es über UDP läuft und Paketverlusterkennung und Neuübertragung für jeden Stream separat implementiert, was bedeutet, dass Paketverluste nur den jeweiligen Stream blockieren, dessen Pakete verloren gingen.

## Siehe auch

- {{rfc("9000", "die QUIC-Spezifikation")}}
- {{rfc("9114", "die HTTP/3-Spezifikation")}}
