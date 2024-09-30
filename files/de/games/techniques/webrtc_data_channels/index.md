---
title: WebRTC Datenkanäle
slug: Games/Techniques/WebRTC_data_channels
l10n:
  sourceCommit: 1807880849aac9898e04e78605f31b29c6f4da21
---

{{GamesSidebar}}

Die [WebRTC](/de/docs/Web/API/WebRTC_API) (Web Real-Time Communications) API ist hauptsächlich für ihre Unterstützung von Audio- und Videokommunikation bekannt; sie bietet jedoch auch Peer-to-Peer-Datenkanäle. Dieser Artikel erklärt mehr darüber und zeigt Ihnen, wie Sie Bibliotheken verwenden können, um Datenkanäle in Ihrem Spiel zu implementieren.

## Was ist ein Datenkanal?

Ein WebRTC-Datenkanal ermöglicht es Ihnen, Text- oder Binärdaten über eine aktive Verbindung zu einem Peer zu senden. Im Kontext eines Spiels ermöglicht dies den Spielern, Daten miteinander zu teilen, sei es Text-Chat oder Spielstatusinformationen. Datenkanäle gibt es in zwei Varianten.

**Zuverlässige Kanäle** garantieren, dass Nachrichten, die Sie senden, beim anderen Peer in der gleichen Reihenfolge ankommen, in der sie gesendet wurden. Dies ist vergleichbar mit einem TCP-Socket.

**Unzuverlässige Kanäle** bieten keine solchen Garantien; Nachrichten sind nicht garantiert, in einer bestimmten Reihenfolge anzukommen, und es ist tatsächlich nicht einmal garantiert, dass sie überhaupt ankommen. Dies ist vergleichbar mit einem UDP-Socket.

Wir haben [Dokumentation zur Nutzung von WebRTC](/de/docs/Web/API/WebRTC_API). Dieser Artikel wird jedoch einige Bibliotheken nutzen, die die Arbeit vereinfachen können, und Möglichkeiten zeigen, wie man Abstraktionen verwenden kann, um Implementierungsunterschiede zwischen Browsern zu umgehen. Hoffentlich werden diese Unterschiede im Laufe der Zeit verschwinden.

## Originaldokumentinformationen

- Autor(en): Alan Kligman
- Quellartikel: [WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- Andere Mitwirkende: Robert Nyman
- Urheberrechtsinformationen: Alan Kligman, 2013
