---
title: WebRTC-Datenkanäle
slug: Games/Techniques/WebRTC_data_channels
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Die [WebRTC](/de/docs/Web/API/WebRTC_API) (Web Real-Time Communications) API ist vor allem für ihre Unterstützung von Audio- und Video-Kommunikation bekannt, bietet jedoch auch Peer-to-Peer-Datenkanäle an. Dieser Artikel erklärt mehr darüber und zeigt Ihnen, wie Sie Bibliotheken nutzen können, um Datenkanäle in Ihrem Spiel zu implementieren.

## Was ist ein Datenkanal?

Ein WebRTC-Datenkanal ermöglicht es Ihnen, Text- oder Binärdaten über eine aktive Verbindung an einen Peer zu senden. Im Kontext eines Spiels können Spieler somit Daten miteinander austauschen, sei es Textchat oder Spielstatusinformationen. Datenkanäle gibt es in zwei Varianten.

**Zuverlässige Kanäle** garantieren, dass die gesendeten Nachrichten beim anderen Peer in der gleichen Reihenfolge ankommen, in der sie gesendet wurden. Dies ist vergleichbar mit einem TCP-Socket.

**Unzuverlässige Kanäle** bieten keine solchen Garantien; es wird nicht garantiert, dass Nachrichten in einer bestimmten Reihenfolge oder überhaupt ankommen. Dies ist vergleichbar mit einem UDP-Socket.

Wir haben eine [Dokumentation zur Nutzung von WebRTC](/de/docs/Web/API/WebRTC_API). In diesem Artikel werden jedoch einige Bibliotheken genutzt, die die Arbeit vereinfachen können, und es werden Wege aufgezeigt, wie man mit Abstraktion um Implementierungsunterschiede zwischen den Browsern herumarbeiten kann. Hoffentlich werden diese Unterschiede im Laufe der Zeit natürlich verblassen.

## Originaldokumentinformationen

- Autor(en): Alan Kligman
- Herkunftsartikel: [WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- Weitere Mitwirkende: Robert Nyman
- Urheberrechtsinformationen: Alan Kligman, 2013
