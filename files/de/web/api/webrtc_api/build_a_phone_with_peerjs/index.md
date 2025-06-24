---
title: Bau eines internetverbundenen Telefons mit PeerJS
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert zu verwenden und zu entwickeln ist – der Umgang mit dem Signaldienst und das Wissen, wann der richtige Endpunkt aufgerufen werden muss, kann verwirrend sein. Aber es gibt gute Nachrichten; [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte ICE- und Signallogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. PeerJS besteht aus zwei Teilen, dem clientseitigen Framework und dem Server.

In dieser Artikelreihe erstellen wir eine einfache Telefonanwendung mit PeerJS. Wir werden sowohl den Server als auch das clientseitige Framework verwenden, aber die meiste Arbeit wird mit der Handhabung des clientseitigen Codes zu tun haben.

### Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits mit folgenden Dingen vertraut sein:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert](https://nodejs.org/en/download) und [Yarn](https://classic.yarnpkg.com/en/docs/install) (die Anweisungen in späteren Artikeln gehen von Yarn aus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie das bevorzugen).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt-für-Schritt-Code verfolgen, haben wir dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Peers verbinden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)

   1. [Mikrofon-Berechtigung erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und verbergen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Eine Peer-Verbindung erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Einen Anruf tätigen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Einen Anruf annehmen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Einen Anruf beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

3. [Bereitstellung und Weiterführende Lektüre](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
