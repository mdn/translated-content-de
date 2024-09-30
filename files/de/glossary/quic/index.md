---
title: QUIC
slug: Glossary/QUIC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**QUIC** ist ein multiplexed Transportprotokoll, das auf UDP implementiert ist. Es wird anstelle von [TCP](/de/docs/Glossary/TCP) als Transportschicht in HTTP/3 verwendet.

QUIC wurde entwickelt, um schnellere Einrichtung und geringere Latenzzeiten für HTTP-Verbindungen zu bieten. Insbesondere:

- Bei TCP wird dem anfänglichen TCP-Handshake optional ein TLS-Handshake nachgeschaltet, der abgeschlossen sein muss, bevor Daten übertragen werden können. Da TLS mittlerweile nahezu allgegenwärtig ist, integriert QUIC den TLS-Handshake in den anfänglichen QUIC-Handshake, wodurch die Anzahl der Nachrichten, die während der Einrichtung ausgetauscht werden müssen, reduziert wird.

- HTTP/2 ist ein multiplexed Protokoll, das gleichzeitige HTTP-Transaktionen ermöglicht. Allerdings werden die Transaktionen über eine einzelne TCP-Verbindung multiplexed, was bedeutet, dass Paketverluste und nachfolgende Neuübertragungen auf der TCP-Schicht alle Transaktionen blockieren können. QUIC vermeidet dies, indem es über UDP läuft und Paketverlusterkennung und Neuübertragung separat für jeden Stream implementiert, was bedeutet, dass Paketverluste nur den Stream blockieren, dessen Pakete verloren gegangen sind.

## Siehe auch

- {{rfc("9000", "die QUIC-Spezifikation")}}
- {{rfc("9114", "die HTTP/3-Spezifikation")}}
