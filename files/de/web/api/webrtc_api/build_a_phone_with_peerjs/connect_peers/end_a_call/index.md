---
title: Einen Anruf beenden
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call
l10n:
  sourceCommit: f20e6e3ea01fe15f7d95420e43d199432f4ea8c4
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs")}}

Das Letzte, was Sie sicherstellen möchten, ist, dass Ihre Anrufer eine Möglichkeit haben, einen Anruf zu beenden. Der eleganteste Weg, dies zu tun, besteht darin, die Verbindung mit der `close()`-Funktion zu schließen, was Sie in einem Ereignislistener für die Auflege-Schaltfläche tun können.

1. Fügen Sie das Folgende an das Ende Ihrer `script.js`-Datei hinzu:

   ```js
   const hangUpBtn = document.querySelector(".hangup-btn");
   hangUpBtn.addEventListener("click", () => {
     conn.close();
     showCallContent();
   });
   ```

2. Wenn die Verbindung geschlossen wurde, möchten Sie auch den korrekten HTML-Inhalt anzeigen, sodass Sie einfach Ihre `showCallContent()`-Funktion aufrufen können. Innerhalb des `call`-Ereignisses möchten Sie auch sicherstellen, dass der entfernte Browser aktualisiert wird. Um dies zu erreichen, fügen Sie einen weiteren Ereignislistener innerhalb des `peer.on('call', (stream) => { }`-Ereignislisteners innerhalb des Bedingungsblocks hinzu.

   ```js
   conn.on("close", () => {
     showCallContent();
   });
   ```

   Auf diese Weise werden, wenn die Person, die den Anruf initiiert hat, zuerst auf "Auflegen" klickt, beide Browser trotzdem mit dem neuen Status aktualisiert.

3. Testen Sie Ihre App erneut und versuchen Sie, einen Anruf zu beenden.

> [!NOTE]
> Das `on('close')`-Ereignis, das bei der `conn`-Variable aufgerufen wird, ist in Firefox noch nicht verfügbar; das bedeutet nur, dass in Firefox jeder Anrufer individuell auflegen muss.

> [!WARNING]
> Die Art, wie wir derzeit alles codiert haben, bedeutet, dass wenn eine Verbindung geschlossen wird, beide Browser **nur** aktualisiert werden, wenn die Person, die den Anruf gestartet hat, zuerst auf "Auflegen" drückt. Wenn die Person, die den Anruf beantwortet hat, zuerst auf "Auflegen" klickt, muss der andere Anrufer ebenfalls auf "Auflegen" klicken, um den korrekten HTML-Inhalt zu sehen.

Damit sind wir mit dem Projekt fertig!
Als Nächstes könnten Sie [es bei einem Hosting-Anbieter, der Node.js-Projekte unterstützt, bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment).

## Siehe auch

- [PeerJS](https://peerjs.com/)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [PeerJS Server](https://github.com/peers/peerjs-server)
- [Ein ähnliches Videotutorial mit Video](https://www.youtube.com/watch?v=OOrBcpwelPY)
- [Das Code-Tutorial](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial)

{{PreviousMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs")}}
