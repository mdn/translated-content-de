---
title: Bau eines internetverbundenen Telefons mit PeerJS
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert in der Nutzung und Entwicklung ist — das Handhaben des Signaldienstes und das Wissen, wann der richtige Endpunkt angesprochen werden muss, kann verwirrend sein. Aber es gibt gute Nachrichten: [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das all die ICE- und Signallogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. Es gibt zwei Teile von PeerJS, das clientseitige Framework und den Server.

In dieser Artikelreihe werden wir eine einfache Telefonanwendung mit PeerJS erstellen. Wir werden sowohl den Server als auch das clientseitige Framework nutzen, aber der Großteil unserer Arbeit wird sich mit der Handhabung des Client-seitigen Codes beschäftigen.

### Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits vertraut sein mit:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert](https://nodejs.org/en/download) und [Yarn](https://classic.yarnpkg.com/en/docs/install) installiert haben (die Anleitungen in den späteren Artikeln gehen von Yarn aus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager nutzen, wenn Sie es vorziehen).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt für Schritt Code folgen, haben wir auch dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen nutzen können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Peers verbinden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)

   1. [Mikrofonberechtigung erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und ausblenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Eine Peer-Verbindung herstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Einen Anruf erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Einen Anruf annehmen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Einen Anruf beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

3. [Bereitstellung und weiterführende Literatur](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
