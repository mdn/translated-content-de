---
title: Bau eines internetfähigen Telefons mit PeerJS
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC besteht darin, dass es ziemlich kompliziert zu verwenden und zu entwickeln ist. Die Handhabung des Signalisierungsdienstes und das Wissen, wann der richtige Endpunkt aufgerufen werden soll, kann verwirrend sein. Aber es gibt gute Nachrichten: [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte Ice- und Signalisierungslogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. PeerJS besteht aus zwei Teilen, dem clientseitigen Framework und dem Server.

In dieser Artikelserie werden wir eine einfache Telefonanwendung mit PeerJS erstellen. Wir verwenden sowohl den Server als auch das clientseitige Framework, aber die meiste Arbeit wird sich mit der Handhabung des clientseitigen Codes beschäftigen.

### Voraussetzungen

Dies ist ein Tutorial für fortgeschrittene Benutzer; bevor Sie es versuchen, sollten Sie sich bereits mit folgenden Themen wohlfühlen:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert](https://nodejs.org/en/download/package-manager) und [Yarn](https://classic.yarnpkg.com/en/docs/install) installiert haben (die Anweisungen in den späteren Artikeln gehen davon aus, dass Sie Yarn verwenden, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie möchten).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie einem Schritt-für-Schritt-Code folgen, haben wir auch dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Verbinden von Peers](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)

   1. [Mikrofonberechtigung erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und ausblenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Erstellen einer Peer-Verbindung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Erstellen eines Anrufs](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Einen Anruf annehmen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Einen Anruf beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

3. [Bereitstellung und weiterführende Literatur](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
