---
title: Anzeigen und Verbergen von HTML
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html
l10n:
  sourceCommit: 810f6895496d1525bb7800abfef363d6c1da9bb8
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}

Gut, Sie haben die Mikrofonberechtigungen eingerichtet. Der nächste Schritt besteht darin, sicherzustellen, dass jeder Nutzer weiß, was seine Peer-ID ist, damit sie Verbindungen herstellen können. Das PeerJS-Framework bietet uns eine Menge Event-Listener, die wir beim vorher erstellten Peer aufrufen können.

1. Verwenden Sie das `open`-Event, um einen Listener zu erstellen, der die Peer-ID anzeigt, wenn es geöffnet ist. Fügen Sie den folgenden Code am Ende von `script.js` hinzu:

   ```js
   peer.on("open", () => {
     window.caststatus.textContent = `Your device ID is: ${peer.id}`;
   });
   ```

   Hier ersetzen Sie den Text im HTML-Element mit der ID `caststatus`.

2. Versuchen Sie, die App in Ihrem Browser neu zu laden. Anstelle von `connecting...`, sollten Sie `Your device ID is: <peer ID>` sehen.

   ![Ein cremefarbener Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'Your device ID is: 3b77' steht direkt darunter und 'please use headphones!' darunter. Anschließend folgt ein großer dunkelgrüner Button mit 'Call', geschrieben in derselben cremefarbenen Farbe des Hintergrunds.](app_showing_device_id.png)

3. Während Sie hier sind, können Sie auch einige Funktionen erstellen, um verschiedene Inhalte anzuzeigen und zu verbergen, die Sie später verwenden werden. Es gibt zwei Funktionen, die Sie erstellen sollten, `showCallContent()` und `showConnectedContent()`. Diese Funktionen sind dafür verantwortlich, den Anruf-Button und die Auflegen-Buttons sowie Audioelemente bei Bedarf anzuzeigen.

   ```js
   const audioContainer = document.querySelector(".call-container");

   // Displays the call button and peer ID
   function showCallContent() {
     window.caststatus.textContent = `Your device ID is: ${peer.id}`;
     callBtn.hidden = false;
     audioContainer.hidden = true;
   }

   // Displays the audio controls and correct copy
   function showConnectedContent() {
     window.caststatus.textContent = "You're connected";
     callBtn.hidden = true;
     audioContainer.hidden = false;
   }
   ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}
