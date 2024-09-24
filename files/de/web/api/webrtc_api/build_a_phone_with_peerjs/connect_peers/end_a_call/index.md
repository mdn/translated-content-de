---
title: Einen Anruf beenden
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading")}}

Sie sind fast fertig! Das Letzte, was Sie tun möchten, ist sicherzustellen, dass Ihre Anrufer eine Möglichkeit haben, einen Anruf zu beenden. Der eleganteste Weg, dies zu tun, ist die Verbindung mit der `close()`-Funktion zu schließen, was Sie in einem Ereignis-Listener für die Auflege-Schaltfläche tun können.

1. Fügen Sie Folgendes am Ende Ihrer `script.js`-Datei hinzu:

   ```js
   const hangUpBtn = document.querySelector(".hangup-btn");
   hangUpBtn.addEventListener("click", () => {
     conn.close();
     showCallContent();
   });
   ```

2. Wenn die Verbindung geschlossen wurde, möchten Sie auch den korrekten HTML-Inhalt anzeigen, sodass Sie einfach Ihre `showCallContent()`-Funktion aufrufen können. Innerhalb des `call`-Ereignisses möchten Sie auch sicherstellen, dass der entfernte Browser aktualisiert wird. Um dies zu erreichen, fügen Sie einen weiteren Ereignis-Listener innerhalb des `peer.on('call', (stream) => { }`-Ereignis-Listeners im bedingten Block hinzu.

   ```js
   conn.on("close", () => {
     showCallContent();
   });
   ```

   Auf diese Weise werden, wenn die Person, die den Anruf initiiert hat, zuerst auf "Auflegen" klickt, beide Browser mit dem neuen Zustand aktualisiert.

3. Testen Sie Ihre App erneut und versuchen Sie, einen Anruf zu beenden.

> [!NOTE]
> Das `on('close')`-Ereignis, das auf der `conn`-Variable aufgerufen wird, ist in Firefox noch nicht verfügbar; das bedeutet einfach, dass in Firefox jeder Anrufer individuell auflegen muss.

> [!WARNING]
> Die Art und Weise, wie wir die Dinge derzeit kodiert haben, bedeutet, dass, wenn eine Verbindung geschlossen wird, beide Browser **nur** aktualisiert werden, wenn die Person, die den Anruf gestartet hat, zuerst auf "Auflegen" drückt. Wenn die Person, die den Anruf angenommen hat, zuerst auf "Auflegen" klickt, muss auch der andere Anrufer auf "Auflegen" klicken, um das korrekte HTML zu sehen.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading")}}
