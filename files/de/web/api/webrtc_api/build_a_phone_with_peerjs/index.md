---
title: Ein internetfähiges Telefon mit PeerJS bauen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: f20e6e3ea01fe15f7d95420e43d199432f4ea8c4
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert zu verwenden und zu entwickeln ist - das Handling des Signaldienstes und das Wissen, wann der richtige Endpunkt aufgerufen werden muss, kann verwirrend sein. Aber es gibt gute Nachrichten; [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte Ice- und Signalisierungslogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. PeerJS besteht aus zwei Teilen, dem Client-seitigen Framework und dem Server.

In dieser Artikelreihe erstellen wir eine einfache Telefonanwendung mit PeerJS. Wir verwenden sowohl den Server als auch das Client-seitige Framework, aber der Großteil unserer Arbeit wird sich mit der Bearbeitung des Client-seitigen Codes befassen.

### Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits mit Folgendem vertraut sein:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert](https://nodejs.org/en/download) und [Yarn](https://classic.yarnpkg.com/en/docs/install) installiert haben (die Anleitungen in späteren Artikeln setzen Yarn voraus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie das bevorzugen).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt-für-Schritt-Code folgen, haben wir dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Den Server bauen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server)
3. [Verbindung der Peers](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)
   1. [Berechtigung für das Browser-Mikrofon erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und verbergen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Erstellen einer Peer-Verbindung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Ein Gespräch erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Ein Gespräch annehmen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Ein Gespräch beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
