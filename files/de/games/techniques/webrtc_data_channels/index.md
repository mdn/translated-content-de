---
title: WebRTC-Datenkanäle
slug: Games/Techniques/WebRTC_data_channels
l10n:
  sourceCommit: 1807880849aac9898e04e78605f31b29c6f4da21
---

{{GamesSidebar}}

Die [WebRTC](/de/docs/Web/API/WebRTC_API) (Web Real-Time Communications) API ist hauptsächlich für ihre Unterstützung für Audio- und Video-Kommunikation bekannt; jedoch bietet sie auch Peer-to-Peer-Datenkanäle. Dieser Artikel erklärt mehr darüber und zeigt Ihnen, wie Sie Bibliotheken verwenden können, um Datenkanäle in Ihrem Spiel zu implementieren.

## Was ist ein Datenkanal?

Ein WebRTC-Datenkanal ermöglicht es Ihnen, Text- oder Binärdaten über eine aktive Verbindung an einen Peer zu senden. Im Kontext eines Spiels können Spieler so Daten austauschen, sei es ein Text-Chat oder Spielstatusinformationen. Datenkanäle kommen in zwei Varianten.

**Zuverlässige Kanäle** gewährleisten, dass die von Ihnen gesendeten Nachrichten beim anderen Peer ankommen und zwar in der Reihenfolge, in der sie gesendet wurden. Dies ist vergleichbar mit einem TCP-Socket.

**Unzuverlässige Kanäle** garantieren keinerlei solcher Zusicherungen; Nachrichten sind nicht garantiert in einer bestimmten Reihenfolge und sogar überhaupt anzukommen. Dies ist vergleichbar mit einem UDP-Socket.

Wir haben [Dokumentation zur Verwendung von WebRTC](/de/docs/Web/API/WebRTC_API). Dieser Artikel wird jedoch einige Bibliotheken nutzen, die die Arbeit erleichtern können, und wird Möglichkeiten aufzeigen, Abstraktion zu verwenden, um Implementierungsunterschiede zwischen Browsern zu umgehen. Hoffentlich werden diese Unterschiede natürlich mit der Zeit verblassen.

## Originaldokumentinformationen

- Autor(en): Alan Kligman
- Quellartikel: [WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- Weitere Mitwirkende: Robert Nyman
- Urheberrechtsinformationen: Alan Kligman, 2013
