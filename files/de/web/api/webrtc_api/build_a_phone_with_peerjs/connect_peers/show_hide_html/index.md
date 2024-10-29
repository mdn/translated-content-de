---
title: Anzeigen und Ausblenden von HTML
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}

Gut, Sie haben die Mikrofonberechtigungen eingerichtet. Der nächste Schritt ist sicherzustellen, dass jeder Benutzer weiß, was seine Peer-ID ist, damit er Verbindungen herstellen kann. Das peerJS-Framework bietet uns eine Reihe von Ereignis-Listenern, die wir an dem Peer aufrufen können, den wir zuvor erstellt haben.

1. Lassen Sie uns das `open`-Ereignis verwenden, um einen Listener zu erstellen, der die Peer-ID anzeigt, wenn sie geöffnet ist. Fügen Sie folgenden Code am Ende von `script.js` hinzu:

   ```js
   peer.on("open", () => {
     document.getElementById("cast-status").textContent =
       `Your device ID is: ${peer.id}`;
   });
   ```

2. Versuchen Sie, die App in Ihrem Browser neu zu laden. Anstelle von `connecting...` sollten Sie `Your device ID is: <peer ID>` sehen.

   ![Ein cremiger Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'Your device ID is: 3b77' steht direkt darunter und 'please use headphones!' darunter. Weiterhin ein großer dunkelgrüner Button mit 'Call', geschrieben in der gleichen Cremefarbe wie der Hintergrund.](app_showing_device_id.png)

3. Während Sie hier sind, können Sie auch einige Funktionen erstellen, um verschiedene Inhalte anzuzeigen und auszublenden, die Sie später verwenden werden. Sie sollten zwei Funktionen erstellen, `showCallContent()` und `showConnectedContent()`. Diese Funktionen sind dafür verantwortlich, den Anruf-Button und den Aufleg-Button sowie Audio-Elemente anzuzeigen, wenn dies angemessen ist.

   ```js
   const audioContainer = document.querySelector(".call-container");

   // Displays the call button and peer ID
   function showCallContent() {
     document.getElementById("cast-status").textContent =
       `Your device ID is: ${peer.id}`;
     callBtn.hidden = false;
     audioContainer.hidden = true;
   }

   // Displays the audio controls and correct copy
   function showConnectedContent() {
     document.getElementById("cast-status").textContent = "You're connected";
     callBtn.hidden = true;
     audioContainer.hidden = false;
   }
   ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}
