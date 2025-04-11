---
title: Ein einfaches Beispiel für RTCDataChannel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("WebRTC")}}

Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist eine Funktionalität der [WebRTC API](/de/docs/Web/API/WebRTC_API), die es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich der [WebSocket API](/de/docs/Web/API/WebSockets_API) ähnlich, sodass dasselbe Programmiermodell verwendet werden kann.

In diesem Beispiel werden wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung zwischen zwei Elementen auf derselben Seite herstellen. Auch wenn das offensichtlich ein konstruiertes Szenario ist, ist es nützlich, um den Ablauf der Verbindung von zwei Peers zu demonstrieren. Wir werden die Mechanik der Herstellung der Verbindung und des Übertragens und Empfangens von Daten abdecken, aber die Details zur Standortbestimmung und Verbindung zu einem entfernten Computer sparen wir für ein anderes Beispiel auf.

## Das HTML

Werfen wir zunächst einen kurzen Blick auf das [erforderliche HTML](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Hier gibt es nichts unglaublich Kompliziertes. Zuerst haben wir ein paar Buttons für die Herstellung und das Schließen der Verbindung:

```html
<button id="connectButton" name="connectButton" class="buttonleft">
  Connect
</button>
<button
  id="disconnectButton"
  name="disconnectButton"
  class="buttonright"
  disabled>
  Disconnect
</button>
```

Dann gibt es ein Feld, das das Texteingabefeld enthält, in das der Benutzer eine Nachricht zum Übertragen eingeben kann, sowie einen Button zum Senden des eingegebenen Textes. Dieses {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

```html
<div class="messagebox">
  <label for="message"
    >Enter a message:
    <input
      type="text"
      name="message"
      id="message"
      placeholder="Message text"
      inputmode="latin"
      size="60"
      maxlength="120"
      disabled />
  </label>
  <button id="sendButton" name="sendButton" class="buttonright" disabled>
    Send
  </button>
</div>
```

Schließlich gibt es noch das kleine Feld, in das wir die Nachrichten einfügen werden. Dieser {{HTMLElement("div")}}-Block wird der zweite Peer sein.

```html
<div class="messagebox" id="receive-box">
  <p>Messages received:</p>
</div>
```

## Der JavaScript-Code

Während Sie sich den [Code selbst auf GitHub ansehen können](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js), werden wir unten die Teile des Codes besprechen, die die Hauptarbeit leisten.

### Aufstarten

Wenn das Skript ausgeführt wird, richten wir einen [`load`](/de/docs/Web/API/Window/load_event)-Ereignislistener ein, sodass unsere `startup()`-Funktion aufgerufen wird, sobald die Seite vollständig geladen ist.

```js
let connectButton = null;
let disconnectButton = null;
let sendButton = null;
let messageInputBox = null;
let receiveBox = null;

let localConnection = null; // RTCPeerConnection for our "local" connection
let remoteConnection = null; // RTCPeerConnection for the "remote"

let sendChannel = null; // RTCDataChannel for the local (sender)
let receiveChannel = null; // RTCDataChannel for the remote (receiver)

function startup() {
  connectButton = document.getElementById("connectButton");
  disconnectButton = document.getElementById("disconnectButton");
  sendButton = document.getElementById("sendButton");
  messageInputBox = document.getElementById("message");
  receiveBox = document.getElementById("receive-box");

  // Set event listeners for user interface widgets

  connectButton.addEventListener("click", connectPeers, false);
  disconnectButton.addEventListener("click", disconnectPeers, false);
  sendButton.addEventListener("click", sendMessage, false);
}
```

Dies ist ziemlich einfach. Wir deklarieren Variablen und holen Referenzen zu allen Seitenelementen, auf die wir zugreifen müssen, und richten dann [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) für die drei Buttons ein.

### Eine Verbindung herstellen

Wenn der Benutzer auf die Schaltfläche "Connect" klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden dies aufteilen und genauer betrachten, um Klarheit zu schaffen.

> [!NOTE]
> Obwohl beide Enden unserer Verbindung auf derselben Seite sind, werden wir dasjenige, das die Verbindung herstellt, als "lokal" bezeichnen und das andere als "entferntes" Ende.

#### Den lokalen Peer einrichten

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das "lokale" Ende der Verbindung zu erstellen. Dies ist der Peer, der die Verbindungsanforderung sendet. Der nächste Schritt besteht darin, den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Aufrufen von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) zu erstellen und Ereignislistener einzurichten, um den Kanal zu überwachen, sodass wir wissen, wann er geöffnet und geschlossen wird (das heißt, wann der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig, im Hinterkopf zu behalten, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt hat.

#### Den entfernten Peer einrichten

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, mit dem Unterschied, dass wir nicht explizit selbst einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellen müssen, da wir über den oben aufgebauten Kanal verbunden werden. Stattdessen richten wir einen [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignishandler ein; dieser wird aufgerufen, wenn der Datenkanal geöffnet wird; dieser Handler erhält ein `RTCDataChannel`-Objekt; dies sehen Sie unten.

#### Die ICE-Kandidaten einrichten

Der nächste Schritt besteht darin, jede Verbindung mit ICE-Kandidaten-Listenern zu versehen; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, über den die andere Seite informiert werden muss.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im selben Kontext laufen, ist der Prozess etwas umfangreicher; jede Seite bietet, nacheinander, eine vorgeschlagene Methode zur Verbindung an (zum Beispiel UDP, UDP mit einem Relay, TCP usw.) durch das Aufrufen von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate), und sie gehen hin und her, bis eine Einigung erzielt wird. Aber hier akzeptieren wir einfach das erste Angebot auf jeder Seite, da keine tatsächliche Vernetzung involviert ist.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) so, dass sie einen Ereignishandler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis hat.

#### Den Verbindungsversuch starten

Das Letzte, was wir tun müssen, um unsere Peers miteinander zu verbinden, ist ein Verbindungsangebot zu erstellen.

```js
localConnection
  .createOffer()
  .then((offer) => localConnection.setLocalDescription(offer))
  .then(() =>
    remoteConnection.setRemoteDescription(localConnection.localDescription),
  )
  .then(() => remoteConnection.createAnswer())
  .then((answer) => remoteConnection.setLocalDescription(answer))
  .then(() =>
    localConnection.setRemoteDescription(remoteConnection.localDescription),
  )
  .catch(handleCreateDescriptionError);
```

Gehen wir dies Zeile für Zeile durch und entschlüsseln, was es bedeutet.

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein {{Glossary("SDP", "SDP")}} (Session Description Protocol)-Blob zu erstellen, das die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Beschränkungen, die für die Verbindung erfüllt werden müssen, um Ihren Bedürfnissen gerecht zu werden, zum Beispiel, ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Beschränkungen.
2. Wenn das Angebot erfolgreich erstellt wurde, übergeben wir das Blob an die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der lokalen Verbindung. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt besteht darin, den lokalen Peer mit dem entfernten zu verbinden, indem wir dem entfernten Peer mitteilen. Dies geschieht, indem [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird. Nun weiß die `remoteConnection` von der Verbindung, die gerade aufgebaut wird. In einer echten Anwendung wäre dazu ein Signalisierungsserver erforderlich, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, dass es Zeit ist, dass der entfernte Peer antwortet. Dazu ruft er seine Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) auf. Dies erzeugt ein Blob von SDP, das die Verbindung beschreibt, die der entfernte Peer bereit und in der Lage ist, herzustellen. Diese Konfiguration liegt irgendwo in der Schnittmenge der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie in die `remoteConnection` übergeben, indem [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird. Das stellt das Ende der entfernten Verbindung her (das für den entfernten Peer sein lokales Ende ist. Diese Dinge können verwirrend sein, aber man gewöhnt sich daran). Auch dies würde normalerweise über einen Signalisierungsserver ausgetauscht.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung eingestellt, um sich auf den entfernten Peer zu beziehen, indem `localConnection`'s [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird.
7. Die `catch()`-Aufrufe behandeln Routinefehler, die auftreten können.

> [!NOTE]
> Noch einmal: Dieser Prozess ist keine Realwelt-Implementierung; bei normaler Nutzung laufen zwei Codechunks auf zwei Maschinen, die gemeinsam interagieren und die Verbindung aushandeln. Ein Seitenkanal, der üblicherweise als "Signalisierungsserver" bezeichnet wird, wird normalerweise verwendet, um die Beschreibung (die im **application/sdp**-Format vorliegt) zwischen den beiden Peers auszutauschen.

#### Erfolgreiche Peer-Verbindung verarbeiten

Sobald jede Seite der Peer-to-Peer-Verbindung erfolgreich verbunden ist, wird das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis des entsprechenden [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst. Diese Handler können tun, was immer notwendig ist, aber in diesem Beispiel müssen wir nur die Benutzeroberfläche aktualisieren:

```js
function handleCreateDescriptionError(error) {
  console.log(`Unable to create an offer: ${error.toString()}`);
}

function handleLocalAddCandidateSuccess() {
  connectButton.disabled = true;
}

function handleRemoteAddCandidateSuccess() {
  disconnectButton.disabled = false;
}

function handleAddCandidateError() {
  console.log("Oh noes! addICECandidate failed!");
}
```

Das Einzige, was wir hier tun, ist, die Schaltfläche "Connect" zu deaktivieren, wenn der lokale Peer verbunden ist, und die Schaltfläche "Disconnect" zu aktivieren, wenn der entfernte Peer verbindet.

#### Den Datenkanal verbinden

Sobald die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geöffnet ist, wird das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis an die Remote gesendet, um den Vorgang des Öffnens des Datenkanals abzuschließen; dies ruft unsere Methode `receiveChannelCallback()` auf, die so aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis enthält in seiner `channel`-Eigenschaft eine Referenz auf ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das das entfernte Ende des Kanals darstellt. Dies wird gespeichert, und wir richten auf dem Kanal Ereignislistener für die Ereignisse ein, die wir behandeln möchten. Sobald dies geschehen ist, wird unsere Methode `handleReceiveMessage()` jedes Mal aufgerufen, wenn Daten vom entfernten Peer empfangen werden, und die Methode `handleReceiveChannelStatusChange()` wird jedes Mal aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert, damit wir reagieren können, wenn der Kanal vollständig geöffnet oder geschlossen ist.

### Kanalstatusänderungen behandeln

Sowohl unsere lokalen als auch entfernten Peers verwenden eine einzige Methode zur Behandlung von Ereignissen, die eine Änderung des Status der Kanalverbindung anzeigen.

Wenn der lokale Peer ein Öffnungs- oder Schließereignis erlebt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

```js
function handleSendChannelStatusChange(event) {
  if (sendChannel) {
    const state = sendChannel.readyState;

    if (state === "open") {
      messageInputBox.disabled = false;
      messageInputBox.focus();
      sendButton.disabled = false;
      disconnectButton.disabled = false;
      connectButton.disabled = true;
    } else {
      messageInputBox.disabled = true;
      sendButton.disabled = true;
      connectButton.disabled = false;
      disconnectButton.disabled = true;
    }
  }
}
```

Wenn sich der Status des Kanals auf "offen" geändert hat, bedeutet dies, dass wir die Verbindung zwischen den beiden Peers vollständig aufgebaut haben. Die Benutzeroberfläche wird entsprechend aktualisiert, indem das Texteingabefeld für die Nachricht, die gesendet werden soll, aktiviert, das Eingabefeld fokussiert, damit der Benutzer sofort zu tippen beginnen kann, die "Send"- und "Disconnect"-Schaltflächen aktiviert werden, da sie jetzt verwendbar sind, und die "Connect"-Schaltfläche deaktiviert wird, da sie nicht benötigt wird, wenn die Verbindung offen ist.

Wenn sich der Status auf "geschlossen" geändert hat, erfolgt die gegenteilige Aktion: das Eingabefeld und die "Send"-Schaltfläche werden deaktiviert, die "Connect"-Schaltfläche wird aktiviert, sodass der Benutzer, wenn er möchte, eine neue Verbindung herstellen kann, und die "Disconnect"-Schaltfläche wird deaktiviert, da sie keinen Nutzen hat, wenn keine Verbindung besteht.

Der entfernte Peer unseres Beispiels ignoriert andererseits die Ereignisse zur Statusänderung, außer er protokolliert das Ereignis in der Konsole:

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      `Receive channel's status has changed to ${receiveChannel.readyState}`,
    );
  }
}
```

Die Methode `handleReceiveChannelStatusChange()` erhält als Eingabeparameter das aufgetretene Ereignis; dies wird ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) sein.

### Nachrichten senden

Wenn der Benutzer die "Send"-Schaltfläche drückt, wird die Methode `sendMessage()` aufgerufen, die wir als Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis der Schaltfläche eingerichtet haben. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht aus dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des Eingabefelds geholt. Dieser wird dann an den entfernten Peer gesendet, indem [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) aufgerufen wird. Das ist alles! Der Rest dieser Methode ist nur etwas Benutzerfreundlichkeit: das Eingabefeld wird geleert und neu fokussiert, sodass der Benutzer sofort eine weitere Nachricht eingeben kann.

### Nachrichten empfangen

Wenn ein "message"-Ereignis auf dem entfernten Kanal auftritt, wird unsere Methode `handleReceiveMessage()` als Ereignishandler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const textNode = document.createTextNode(event.data);

  el.appendChild(textNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt einige grundlegende {{Glossary("DOM", "DOM")}}-Injektionen durch; sie erstellt ein neues {{HTMLElement("p")}} (Absatz)-Element, erstellt dann einen neuen [`Text`](/de/docs/Web/API/Text)-Knoten, der den Nachrichtentext enthält, der im `data`-Eigenschaft des Ereignisses empfangen wird. Dieser Textknoten wird als Kind des neuen Elements angehängt, das dann in den `receiveBox`-Block eingefügt wird, was dazu führt, dass es im Browserfenster gezeichnet wird.

### Die Peers trennen

Wenn der Benutzer die "Disconnect"-Schaltfläche anklickt, wird die Methode `disconnectPeers()` aufgerufen, die vorher als Handler dieser Schaltfläche eingerichtet wurde.

```js
function disconnectPeers() {
  // Close the RTCDataChannels if they're open.

  sendChannel.close();
  receiveChannel.close();

  // Close the RTCPeerConnections

  localConnection.close();
  remoteConnection.close();

  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;

  // Update user interface elements

  connectButton.disabled = false;
  disconnectButton.disabled = true;
  sendButton.disabled = true;

  messageInputBox.value = "";
  messageInputBox.disabled = true;
}
```

Dies beginnt damit, dass jeder Peer seine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) schließt, dann auf ähnliche Weise jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dann werden alle gespeicherten Referenzen zu diesen Objekten auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um widerzuspiegeln, dass die Verbindung geschlossen wurde.

## Nächste Schritte

Werfen Sie einen Blick auf den Quellcode des Projekts [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), verfügbar auf GitHub.

## Siehe auch

- [Signaling und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das [Perfekte Verhandlungs](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)-Muster.
