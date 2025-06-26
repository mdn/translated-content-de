---
title: Aufbau eines internetverbundenen Telefons mit PeerJS
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert zu verwenden und zu entwickeln ist – der Umgang mit dem Signalisierungsdienst und das Wissen, wann der richtige Endpunkt aufgerufen werden muss, kann verwirrend sein. Aber es gibt auch gute Nachrichten; [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte ICE- und Signalisierungslogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. PeerJS besteht aus zwei Teilen, dem clientseitigen Framework und dem Server.

In dieser Artikelreihe werden wir eine einfache Telefonanwendung mit PeerJS erstellen. Wir werden sowohl den Server als auch das clientseitige Framework verwenden, aber der Großteil unserer Arbeit wird in der Bearbeitung des clientseitigen Codes bestehen.

### Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie sich bereits mit folgenden Themen vertraut gemacht haben:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert haben](https://nodejs.org/en/download) und [Yarn](https://classic.yarnpkg.com/en/docs/install) (die Anleitungen in späteren Artikeln gehen von Yarn aus, aber Sie können auch gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie möchten).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt-für-Schritt-Code befolgen, haben wir dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) zur Verfügung gestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Den Server aufbauen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server)
3. [Die Peers verbinden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)

   1. [Berechtigung für das Mikrofon im Browser erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und ausblenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Eine Peer-Verbindung erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Einen Anruf erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Einen Anruf beantworten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Einen Anruf beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

4. [Bereitstellung und weiterführende Literatur](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
