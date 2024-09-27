---
title: Erstellen einer Peer-Verbindung
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call")}}

Als Nächstes möchten Sie sicherstellen, dass Ihre Benutzer eine Möglichkeit haben, sich mit ihren Peers zu verbinden. Um zwei Peers zu verbinden, benötigen Sie die Peer-ID eines der beiden.

1. Lassen Sie uns eine Variable erstellen, um die ID zu speichern, und eine Funktion, um den Benutzer aufzufordern, diese einzugeben, die wir später aufrufen werden. Fügen Sie dies am Ende von `script.js` hinzu:

   ```js
   let code;
   function getStreamCode() {
     code = window.prompt("Please enter the sharing code");
   }
   ```

   Die Methode [`window.prompt()`](/de/docs/Web/API/Window/prompt) bietet eine bequeme Möglichkeit, die relevante Peer-ID zu erhalten — Sie können diese verwenden, wenn Sie die Peer-ID erfassen möchten, die zur Erstellung der Verbindung benötigt wird.

2. Mit dem PeerJS-Framework möchten Sie den `localPeer` mit dem `remotePeer` verbinden. PeerJS stellt uns die `connect()`-Funktion zur Verfügung, die eine Peer-ID benötigt, um eine Verbindung herzustellen. Fügen Sie diesen Block unter Ihrem vorherigen Code ein:

   ```js
   let conn;
   function connectPeers() {
     conn = peer.connect(code);
   }
   ```

3. Wenn eine Verbindung erstellt wird, verwenden wir das `on('connection')` des PeerJS-Frameworks, um die ID des Remote-Peers festzulegen und die Verbindung zu öffnen. Die Funktion für diesen Listener akzeptiert ein `connection`-Objekt, das eine Instanz des `DataConnection`-Objekts ist (welches ein Wrapper um WebRTCs [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist); innerhalb dieser Funktion möchten Sie es einer Variablen zuweisen. Erstellen Sie die Variable erneut außerhalb der Funktion, damit Sie sie später zuweisen können. Fügen Sie das Folgende unter Ihrem vorherigen Code hinzu:

   ```js
   peer.on("connection", (connection) => {
     conn = connection;
   });
   ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call")}}
