---
title: Anzeigen und Verstecken von HTML
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html
l10n:
  sourceCommit: 810f6895496d1525bb7800abfef363d6c1da9bb8
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}

Gut, Sie haben die Mikrofonberechtigungen eingerichtet. Der nächste Schritt besteht darin, sicherzustellen, dass jeder Benutzer seine Peer-ID kennt, sodass Verbindungen hergestellt werden können. Das PeerJS-Framework bietet eine Reihe von Ereignislistenern, die wir auf dem früher erstellten Peer aufrufen können.

1. Lassen Sie uns das `open`-Ereignis verwenden, um einen Listener zu erstellen, der die Peer-ID anzeigt, sobald es geöffnet wird. Fügen Sie den folgenden Code am Ende von `script.js` hinzu:

   ```js
   peer.on("open", () => {
     window.caststatus.textContent = `Your device ID is: ${peer.id}`;
   });
   ```

   Hier ersetzen Sie den Text im HTML-Element mit der ID `caststatus`.

2. Versuchen Sie, die App in Ihrem Browser neu zu laden. Anstelle von `connecting...` sollten Sie `Your device ID is: <peer ID>` sehen.

   ![Ein cremefarbener Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'Your device ID is: 3b77' befindet sich unmittelbar darunter und 'please use headphones!' noch weiter unten. Darauf folgt ein großer, dunkelgrüner Button mit 'Call', geschrieben in derselben cremefarbenen Hintergrundfarbe.](app_showing_device_id.png)

3. Während Sie dabei sind, können Sie auch gleich einige Funktionen erstellen, um verschiedene Inhalte anzuzeigen und zu verstecken, die Sie später verwenden werden. Es gibt zwei Funktionen, die Sie erstellen sollten: `showCallContent()` und `showConnectedContent()`. Diese Funktionen sind dafür verantwortlich, den Anrufbutton anzuzeigen sowie den Auflegebutton und die Audioelemente bei Bedarf einzublenden.

   ```js
   const audioContainer = document.querySelector(".call-container");

   // Zeigt den Anrufbutton und die Peer-ID an
   function showCallContent() {
     window.caststatus.textContent = `Your device ID is: ${peer.id}`;
     callBtn.hidden = false;
     audioContainer.hidden = true;
   }

   // Zeigt die Audiosteuerungen und den korrekten Text an
   function showConnectedContent() {
     window.caststatus.textContent = "You're connected";
     callBtn.hidden = true;
     audioContainer.hidden = false;
   }
   ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}
