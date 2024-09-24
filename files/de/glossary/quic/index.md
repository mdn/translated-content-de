---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**QUIC** ist ein multiplexes Transportprotokoll, das auf UDP implementiert wird. Es wird anstelle von {{Glossary("TCP")}} als Transportschicht in HTTP/3 verwendet.

QUIC wurde entwickelt, um schnellere Einrichtung und geringere Latenzzeiten für HTTP-Verbindungen bereitzustellen. Insbesondere:

- Bei TCP wird dem anfänglichen TCP-Handshake optional ein TLS-Handshake folgen, der abgeschlossen sein muss, bevor Daten übertragen werden können. Da TLS heutzutage fast überall verbreitet ist, integriert QUIC den TLS-Handshake in den initialen QUIC-Handshake, was die Anzahl der während der Einrichtung auszutauschenden Nachrichten verringert.

- HTTP/2 ist ein multiplexes Protokoll, das mehrere gleichzeitige HTTP-Transaktionen ermöglicht. Die Transaktionen werden jedoch über eine einzige TCP-Verbindung multiplexiert, was bedeutet, dass Paketverluste und anschließende Neuübertragungen auf der TCP-Ebene alle Transaktionen blockieren können. QUIC umgeht dies, indem es über UDP läuft und Paketverlusterkennung und -wiederübertragung separat für jeden Stream implementiert, was bedeutet, dass Paketverluste nur den besonderen Stream blockieren, dessen Pakete verloren gegangen sind.

## Siehe auch

- {{rfc("9000", "die QUIC-Spezifikation")}}
- {{rfc("9114", "die HTTP/3-Spezifikation")}}
