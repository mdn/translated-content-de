---
title: Aufbau eines internetfähigen Telefons mit PeerJS
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert zu verwenden und zu entwickeln ist — den Signalisierungsdienst zu handhaben und zu wissen, wann der richtige Endpunkt aufgerufen werden muss, kann verwirrend sein. Aber es gibt gute Nachrichten; [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte Ice- und Signalisierungslogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. Es gibt zwei Teile von PeerJS, das Framework für die Client-Seite und den Server.

In dieser Artikelserie erstellen wir eine einfache Telefonanwendung mit PeerJS. Wir verwenden sowohl den Server als auch das Client-Seiten-Framework, aber die meiste Arbeit wird darin bestehen, den Client-seitigen Code zu bearbeiten.

### Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits mit folgenden Themen vertraut sein:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert haben](https://nodejs.org/en/download/package-manager) und [Yarn](https://classic.yarnpkg.com/en/docs/install) (die Anleitungen in späteren Artikeln gehen von Yarn aus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie es bevorzugen).

> [!NOTE]
> Falls Sie besser lernen, indem Sie einem Schritt-für-Schritt-Code folgen, haben wir dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Verbindung von Peers](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)

   1. [Mikrofonberechtigung erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und verbergen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Eine Peer-Verbindung erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Einen Anruf erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Einen Anruf beantworten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Einen Anruf beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

3. [Bereitstellung und weiterführende Literatur](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
