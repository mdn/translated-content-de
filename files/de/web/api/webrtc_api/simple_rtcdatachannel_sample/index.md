---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("WebRTC")}}

Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist ein Feature der [WebRTC API](/de/docs/Web/API/WebRTC_API), das es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket API](/de/docs/Web/API/WebSockets_API) gestaltet, sodass dasselbe Programmiermodell für beide verwendet werden kann.

In diesem Beispiel werden wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung zwischen zwei Elementen auf derselben Seite herstellen. Auch wenn das offensichtlich ein konstruiertes Szenario ist, ist es nützlich, um den Ablauf der Verbindung zwischen zwei Peers zu demonstrieren. Wir werden die Mechanik der Realisierung der Verbindung sowie des Sendens und Empfangens von Daten behandeln, aber die Details zum Auffinden und Verbinden mit einem entfernten Computer in einem anderen Beispiel aufbewahren.

## Das HTML

Zuerst werfen wir einen schnellen Blick auf das [HTML, das benötigt wird](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Es enthält nichts besonders Kompliziertes. Zuerst haben wir ein paar Buttons zum Herstellen und Schließen der Verbindung:

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

Dann gibt es ein Feld, das das Texteingabefeld enthält, in das der Benutzer eine Nachricht zum Übertragen eingeben kann, mit einem Button zum Senden des eingegebenen Textes. Dieses {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

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

Während Sie sich [den Code selbst auf GitHub ansehen können](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js), überprüfen wir unten die Teile des Codes, die die Hauptarbeit leisten.

### Der Start

Wenn das Skript ausgeführt wird, richten wir einen [`load`](/de/docs/Web/API/Window/load_event)-Event-Listener ein, sodass unsere `startup()`-Funktion aufgerufen wird, sobald die Seite vollständig geladen ist.

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

  connectButton.addEventListener("click", connectPeers);
  disconnectButton.addEventListener("click", disconnectPeers);
  sendButton.addEventListener("click", sendMessage);
}
```

Das ist ziemlich einfach. Wir deklarieren Variablen und greifen auf alle Seiten-Elemente zu, die wir benötigen, und setzen dann [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) für die drei Buttons.

### Eine Verbindung herstellen

Wenn der Benutzer auf den Button "Connect" klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden das aufbrechen und schrittweise betrachten, um Klarheit zu schaffen.

> [!NOTE]
> Auch wenn beide Enden unserer Verbindung auf derselben Seite sein werden, werden wir das Ende, das die Verbindung initiiert, als "lokal" bezeichnen und das andere als "entferntes" Ende.

#### Den lokalen Peer einrichten

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das "lokale" Ende der Verbindung zu erstellen. Das ist der Peer, der die Verbindungsanfrage sendet. Der nächste Schritt ist, das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Aufrufen von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) zu erstellen und Event-Listener einzurichten, um den Kanal zu überwachen, damit wir wissen, wann er geöffnet und geschlossen wird (das heißt, wann der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig zu beachten, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt hat.

#### Den entfernten Peer einrichten

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, außer dass wir nicht explizit selbst ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellen müssen, da wir über den oben etablierten Kanal verbunden werden. Stattdessen richten wir einen [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Event-Handler ein; dieser wird aufgerufen, wenn der Datenkanal geöffnet wird; dieser Handler wird ein `RTCDataChannel`-Objekt empfangen; das sehen Sie unten.

#### Die ICE-Kandidaten einrichten

Der nächste Schritt besteht darin, jede Verbindung mit ICE-Kandidaten-Listenern einzurichten; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, den die andere Seite erfahren soll.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im selben Kontext laufen, ist der Prozess etwas komplexer; jede Seite bietet nacheinander einen Vorschlag für eine Verbindungsart an (zum Beispiel UDP, UDP mit Relay, TCP usw.) durch das Aufrufen von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate), und sie machen so lange weiter, bis eine Einigung erzielt wird. Aber hier akzeptieren wir einfach das erste Angebot auf jeder Seite, da keine tatsächliche Netzwerkarbeit beteiligt ist.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um einen Event-Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event zu haben.

#### Den Verbindungsversuch starten

Das Letzte, was wir tun müssen, um den Verbindungsvorgang der Peers zu starten, ist ein Verbindungsangebot zu erstellen.

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

Lassen Sie uns das Zeile für Zeile durchgehen und entschlüsseln, was es bedeutet.

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein {{Glossary("SDP", "SDP")}} (Session Description Protocol)-Blob zu erstellen, das die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Beschränkungen, die zur Erfüllung Ihrer Bedürfnisse für die Verbindung erfüllt sein müssen, wie zum Beispiel, ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Einschränkungen.
2. Wenn das Angebot erfolgreich erstellt wurde, übergeben wir das Blob an die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der lokalen Verbindung. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt ist, den lokalen Peer mit dem entfernten zu verbinden, indem wir den entfernten Peer darüber informieren. Dies geschieht, indem [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird. Jetzt weiß die `remoteConnection` über die verbindende Verbindung Bescheid. In einer realen Anwendung würde dies einen Signalisierungsserver erfordern, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, es ist Zeit, dass der entfernte Peer antwortet. Dies geschieht durch Aufrufen seiner Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer). Dadurch wird ein SDP-Blob generiert, das die Verbindung beschreibt, die der entfernte Peer bereit und in der Lage ist, zu etablieren. Diese Konfiguration liegt irgendwo in der Union der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie in die remoteConnection durch Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben. Das stellt das Ende der Verbindung des entfernten Peers her (das, für den entfernten Peer, ist sein lokales Ende. Das kann verwirrend sein, aber man gewöhnt sich daran). Normalerweise würde dies wiederum über einen Signalisierungsserver ausgetauscht werden.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung auf den entfernten Peer gesetzt, indem die lokale Verbindung durch Aufrufen von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) konfiguriert wird.
7. Die `catch()`-Aufrufe führen eine Routine aus, die etwaige auftretende Fehler behandelt.

> [!NOTE]
> Noch einmal, dieser Prozess ist keine reale Implementierung; in der normalen Anwendung gibt es zwei Codeblöcke, die auf zwei Maschinen laufen, interagieren und die Verbindung verhandeln. Ein Nebenkanal, üblicherweise als "Signalisierungsserver" bezeichnet, wird normalerweise verwendet, um die Beschreibung (die im **application/sdp**-Format vorliegt) zwischen den beiden Peers auszutauschen.

#### Erfolgreiche Peer-Verbindung behandeln

Wenn jede Seite der Peer-to-Peer-Verbindung erfolgreich verbunden ist, wird das entsprechende [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event von der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst. Diese Handler können alles Nötige tun, aber in diesem Beispiel müssen wir nur die Benutzeroberfläche aktualisieren:

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

Das Einzige, was wir hier tun, ist, den "Connect"-Button zu deaktivieren, wenn der lokale Peer verbunden ist, und den "Disconnect"-Button zu aktivieren, wenn der entfernte Peer sich verbindet.

#### Den Datenkanal verbinden

Sobald die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) offen ist, wird das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Event an den entfernten Peer gesendet, um den Prozess des Öffnens des Datenkanals abzuschließen; dies ruft unsere `receiveChannelCallback()`-Methode auf, die folgendermaßen aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Event enthält in seiner Eigenschaft `channel` einen Verweis auf ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das das entfernte Ende des Kanals darstellt. Dies wird gespeichert, und wir richten auf dem Kanal Event-Listener für die Events ein, die wir behandeln möchten. Sobald dies getan ist, wird unsere Methode `handleReceiveMessage()` jedes Mal aufgerufen, wenn Daten vom entfernten Peer empfangen werden, und die Methode `handleReceiveChannelStatusChange()` wird aufgerufen, wann immer sich der Verbindungsstatus des Kanals ändert, damit wir reagieren können, wenn der Kanal vollständig geöffnet und geschlossen wird.

### Kanalstatus-Änderungen behandeln

Sowohl unsere lokalen als auch entfernten Peers verwenden eine einzige Methode, um Events zu behandeln, die eine Änderung des Status der Kanalverbindung anzeigen.

Wenn der lokale Peer ein Open- oder Close-Event erlebt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

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

Wenn sich der Status des Kanals zu "open" geändert hat, deutet das darauf hin, dass wir die Verbindung zwischen den beiden Peers vollständig hergestellt haben. Die Benutzeroberfläche wird entsprechend aktualisiert, indem das Texteingabefeld für die zu sendenden Nachrichten aktiviert, das Eingabefeld fokussiert, sodass der Benutzer sofort mit dem Tippen beginnen kann, die "Send"- und "Disconnect"-Buttons aktiviert, da sie nun nutzbar sind, und der "Connect"-Button deaktiviert wird, da er bei offener Verbindung nicht benötigt wird.

Wenn sich der Status in "closed" geändert hat, erfolgt die umgekehrte Aktionen: das Eingabefeld und der "Send"-Button werden deaktiviert, der "Connect"-Button wird aktiviert, sodass der Benutzer eine neue Verbindung öffnen kann, wenn er dies möchte, und der "Disconnect"-Button wird deaktiviert, da er bei fehlender Verbindung nicht nützlich ist.

Der Remote-Peer unseres Beispiels hingegen ignoriert die Statusänderungsereignisse, außer dass das Ereignis im Konsolenprotokoll vermerkt wird:

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      `Receive channel's status has changed to ${receiveChannel.readyState}`,
    );
  }
}
```

Die Methode `handleReceiveChannelStatusChange()` erhält als Parameter das aufgetretene Ereignis; dies wird ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) sein.

### Nachrichten senden

Wenn der Benutzer den "Send"-Button drückt, wird die Methode `sendMessage()` aufgerufen, die wir als Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Event des Buttons definiert haben. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht aus dem Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds abgerufen. Dieser wird dann an den entfernten Peer gesendet, indem [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) aufgerufen wird. Das ist alles! Der Rest dieser Methode ist nur etwas Benutzerfreundlichkeit — das Eingabefeld wird geleert und neu fokussiert, so dass der Benutzer sofort mit dem Tippen einer weiteren Nachricht beginnen kann.

### Nachrichten empfangen

Wenn ein "message"-Event auf dem entfernten Kanal auftritt, wird unsere `handleReceiveMessage()`-Methode als Event-Handler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const textNode = document.createTextNode(event.data);

  el.appendChild(textNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt eine grundlegende {{Glossary("DOM", "DOM")}}-Injection durch; sie erstellt ein neues {{HTMLElement("p")}} (Absatz)-Element, dann eine neue [`Text`](/de/docs/Web/API/Text)-Node, die den Nachrichtentext enthält, der in der `data`-Eigenschaft des Events empfangen wird. Diese Text-Node wird als Kind des neuen Elements angefügt, das dann in den `receiveBox`-Block eingefügt wird, wodurch es im Browserfenster gezeichnet wird.

### Die Peers trennen

Wenn der Benutzer auf den "Disconnect"-Button klickt, wird die Methode `disconnectPeers()`, die zuvor als Handler für diesen Button festgelegt wurde, aufgerufen.

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

Dies beginnt damit, jeden [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Peers zu schließen, dann auf ähnliche Weise jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dann werden alle gespeicherten Verweise auf diese Objekte auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um zu reflektieren, dass die Verbindung geschlossen wurde.

## Nächste Schritte

Werfen Sie einen Blick auf den [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel)-Quellcode, der auf GitHub verfügbar ist.

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)-Muster.
