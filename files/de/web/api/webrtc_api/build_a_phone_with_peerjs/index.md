---
title: Ein internetfähiges Telefon mit PeerJS bauen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

Eines der Hauptprobleme von WebRTC ist, dass es ziemlich kompliziert zu benutzen und zu entwickeln ist — den Signaldienst zu handhaben und zu wissen, wann der richtige Endpunkt aufzurufen ist, kann verwirrend sein. Aber es gibt gute Nachrichten; [PeerJS](https://peerjs.com/) ist ein WebRTC-Framework, das die gesamte ICE- und Signallogik abstrahiert, sodass Sie sich auf die Funktionalität Ihrer Anwendung konzentrieren können. Es gibt zwei Teile von PeerJS, das Client-seitige Framework und den Server.

In dieser Artikelserie werden wir eine einfache Telefonanwendung mit PeerJS erstellen. Wir werden sowohl den Server als auch das Client-seitige Framework verwenden, aber der Großteil unserer Arbeit wird sich mit der Behandlung des Client-seitigen Codes beschäftigen.

### Voraussetzungen

Dies ist ein Tutorial auf mittlerem Niveau; bevor Sie es versuchen, sollten Sie bereits mit folgenden Themen vertraut sein:

- [Vanilla JavaScript](/de/docs/Web/JavaScript)
- [Node](https://nodejs.org/en)
- [Express](/de/docs/Learn/Server-side/Express_Nodejs)
- [HTML](/de/docs/Web/HTML)

Bevor Sie beginnen, sollten Sie sicherstellen, dass Sie [Node installiert](https://nodejs.org/en/download/package-manager) und [Yarn](https://classic.yarnpkg.com/en/docs/install) haben (die Anleitungen in späteren Artikeln setzen Yarn voraus, aber Sie können gerne [npm](https://docs.npmjs.com/getting-started/) oder einen anderen Manager verwenden, wenn Sie möchten).

> [!NOTE]
> Wenn Sie besser lernen, indem Sie Schritt-für-Schritt-Code folgen, haben wir dieses [Tutorial im Code](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial) bereitgestellt, das Sie stattdessen verwenden können.

### Inhaltsverzeichnis

1. [Einrichtung](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [Peers verbinden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)

   1. [Mikrofonerlaubnis erhalten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML anzeigen und ausblenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [Eine Peer-Verbindung erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [Ein Gespräch erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [Ein Gespräch beantworten](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [Ein Gespräch beenden](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

3. [Bereitstellung und weiterführende Literatur](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
