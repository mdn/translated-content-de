---
title: WebRTC-Datenkanäle
slug: Games/Techniques/WebRTC_data_channels
l10n:
  sourceCommit: 1807880849aac9898e04e78605f31b29c6f4da21
---

{{GamesSidebar}}

Die [WebRTC](/de/docs/Web/API/WebRTC_API) (Web Real-Time Communications) API ist hauptsächlich für ihre Unterstützung von Audio- und Video-Kommunikation bekannt; jedoch bietet sie auch Peer-to-Peer-Datenkanäle. Dieser Artikel erklärt mehr darüber und zeigt Ihnen, wie Sie Bibliotheken verwenden können, um Datenkanäle in Ihrem Spiel zu implementieren.

## Was ist ein Datenkanal?

Ein WebRTC-Datenkanal ermöglicht es Ihnen, Text- oder Binärdaten über eine aktive Verbindung zu einem Peer zu senden. Im Kontext eines Spiels können Spieler damit Daten aneinander senden, sei es für Text-Chat oder Spielstatusinformationen. Datenkanäle gibt es in zwei Varianten.

**Zuverlässige Kanäle** garantieren, dass die von Ihnen gesendeten Nachrichten beim anderen Peer ankommen und zwar in der gleichen Reihenfolge, in der sie gesendet wurden. Dies ist analog zu einem TCP-Socket.

**Unzuverlässige Kanäle** machen keine derartigen Garantien; Nachrichten sind nicht garantiert in einer bestimmten Reihenfolge anzukommen und tatsächlich ist auch nicht garantiert, dass sie überhaupt ankommen. Dies ist analog zu einem UDP-Socket.

Wir haben [Dokumentation zur Verwendung von WebRTC](/de/docs/Web/API/WebRTC_API). Dieser Artikel wird jedoch einige Bibliotheken nutzen, die die Arbeit vereinfachen können und wird Wege aufzeigen, Abstraktionen zu verwenden, um Implementierungsunterschiede zwischen Browsern zu überbrücken. Natürlich hoffen wir, dass diese Unterschiede mit der Zeit verschwinden.

## Originaldokumentinformationen

- Autor(en): Alan Kligman
- Quellartikel: [WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- Weitere Mitwirkende: Robert Nyman
- Urheberrechtsinformationen: Alan Kligman, 2013
