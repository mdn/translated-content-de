---
title: Bau eines internetfähigen Telefons mit PeerJS
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert zu verwenden und zu entwickeln ist – der Umgang mit dem Signalisierungsdienst und das Wissen, wann der richtige Endpunkt aufgerufen werden muss, kann verwirrend sein. Aber es gibt eine gute Nachricht: [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte Eis-und-Signalisierungslogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. PeerJS besteht aus zwei Teilen, dem Client-Framework und dem Server.

In dieser Artikelserie werden wir eine einfache Telefonanwendung mit PeerJS erstellen. Wir werden sowohl den Server als auch das Client-Framework verwenden, jedoch wird der Großteil unserer Arbeit die Bearbeitung des Client-Codes umfassen.

## Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits vertraut sein mit:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert](https://nodejs.org/en/download) und [Yarn](https://classic.yarnpkg.com/en/docs/install) haben (die Anleitungen in späteren Artikeln gehen von der Verwendung von Yarn aus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie dies bevorzugen).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt-für-Schritt-Code befolgen, haben wir Ihnen auch dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Erstellung des Servers](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server)
3. [Verbinden der Peers](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)
   1. [Abrufen der Mikrofonberechtigung des Browsers](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und ausblenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Erstellen einer Peer-Verbindung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Erstellen eines Anrufs](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Anruf beantworten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Anruf beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
