---
title: Ein internetfähiges Telefon mit PeerJS erstellen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert ist, es zu verwenden und damit zu entwickeln – die Verwaltung des Signalisierungsdienstes und zu wissen, wann der richtige Endpunkt aufgerufen werden muss, kann verwirrend werden. Aber es gibt gute Neuigkeiten; [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte ICE- und Signalisierungslogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. PeerJS besteht aus zwei Teilen: dem Client-seitigen Framework und dem Server.

In dieser Artikelreihe erstellen wir eine einfache Telefonanwendung mit PeerJS. Wir verwenden sowohl das Server- als auch das Client-seitige Framework, aber der Großteil unserer Arbeit wird mit der Verarbeitung des Client-seitigen Codes zu tun haben.

## Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits vertraut sein mit:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert haben](https://nodejs.org/en/download) und [Yarn](https://classic.yarnpkg.com/en/docs/install) (die Anleitungen in den späteren Artikeln gehen von Yarn aus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie es bevorzugen).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt-für-Schritt-Code folgen, haben wir auch dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen nutzen können.

### Inhaltsverzeichnis

1. [Setup](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Den Server erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server)
3. [Die Peers verbinden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)
   1. [Berechtigung für das Mikrofon des Browsers erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und verbergen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Eine Peer-Verbindung erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Ein Gespräch initiieren](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Ein Gespräch annehmen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Ein Gespräch beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
