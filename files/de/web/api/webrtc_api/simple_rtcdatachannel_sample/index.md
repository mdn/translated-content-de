---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebRTC")}}

Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist eine Funktion der [WebRTC API](/de/docs/Web/API/WebRTC_API), die es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket API](/de/docs/Web/API/WebSockets_API) gestaltet, sodass dasselbe Programmiermodell für beide verwendet werden kann.

In diesem Beispiel öffnen wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung, die zwei Elemente auf derselben Seite verbindet. Während dies offensichtlich ein konstruiertes Szenario ist, ist es nützlich, um den Ablauf der Verbindung zweier Peers zu zeigen. Wir werden die Mechanik der Verbindung und der Datenübertragung sowie des Empfangs behandeln, aber wir sparen uns die Details zur Suche und Verbindung mit einem entfernten Computer für ein anderes Beispiel auf.

## Das HTML

Zuerst werfen wir einen kurzen Blick auf das [benötigte HTML](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Hier gibt es nichts besonders Kompliziertes. Zuerst haben wir ein paar Schaltflächen zum Herstellen und Beenden der Verbindung:

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

Dann gibt es ein Feld, das das Texteingabefeld enthält, in das der Benutzer eine Nachricht eingeben kann, mit einer Schaltfläche zum Senden des eingegebenen Textes. Dieses {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

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

Schließlich gibt es das kleine Feld, in das wir die Nachrichten einfügen werden. Dieser {{HTMLElement("div")}}-Block wird der zweite Peer sein.

```html
<div class="messagebox" id="receive-box">
  <p>Messages received:</p>
</div>
```

## Der JavaScript-Code

Während Sie sich einfach [den Code selbst auf GitHub ansehen können](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js), werden wir unten die Teile des Codes überprüfen, die die Hauptarbeit leisten.

### Start

Wenn das Skript ausgeführt wird, richten wir einen [`load`](/de/docs/Web/API/Window/load_event)-Event-Listener ein, sodass unsere `startup()`-Funktion aufgerufen wird, wenn die Seite vollständig geladen ist.

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

Dies ist ziemlich einfach. Wir deklarieren Variablen und holen Referenzen zu allen Seitenelementen, auf die wir zugreifen müssen, und setzen dann [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) auf die drei Schaltflächen.

### Eine Verbindung herstellen

Wenn der Benutzer auf die Schaltfläche "Connect" klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden dies aufteilen und uns Stück für Stück ansehen, um Klarheit zu schaffen.

> [!NOTE]
> Auch wenn beide Enden unserer Verbindung auf derselben Seite sind, werden wir dasjenige, das die Verbindung startet, als "lokales" Ende bezeichnen und das andere als "entferntes" Ende.

#### Das lokale Peer einrichten

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das "lokale" Ende der Verbindung zu erstellen. Dies ist der Peer, der die Verbindungsanfrage sendet. Der nächste Schritt besteht darin, das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu erstellen, indem [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen wird, und Ereignis-Listener einzurichten, um den Kanal zu überwachen, damit wir wissen, wann er geöffnet und geschlossen ist (das heißt, wann der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig, sich daran zu erinnern, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt hat.

#### Das entfernte Peer einrichten

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, außer dass wir hier kein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) explizit erstellen müssen, da wir über den zuvor eingerichteten Kanal verbunden werden. Stattdessen richten wir einen [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis-Handler ein; dieser wird aufgerufen, wenn der Datenkanal geöffnet wird; dieser Handler erhält ein `RTCDataChannel`-Objekt; Sie werden dies unten sehen.

#### Die ICE-Kandidaten einrichten

Der nächste Schritt besteht darin, jede Verbindung mit ICE-Kandidaten-Listenern einzurichten; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, um der anderen Seite davon zu berichten.

> [!NOTE]
> In einem realen Szenario, in dem die zwei Peers nicht im gleichen Kontext laufen, ist der Prozess ein wenig komplizierter; jede Seite bietet, eine nach der anderen, eine vorgeschlagene Verbindungsweise (zum Beispiel UDP, UDP mit einem Relais, TCP usw.) an, indem sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft, und sie gehen hin und her, bis eine Einigung erzielt wird. Aber hier akzeptieren wir einfach das erste Angebot auf jeder Seite, da kein echtes Networking beteiligt ist.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um einen Ereignis-Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis zu haben.

#### Beginnen des Verbindungsversuchs

Das Letzte, was wir tun müssen, um unseren Peers zu verbinden, ist, ein Verbindungsangebot zu erstellen.

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

Lassen Sie uns dies Zeile für Zeile durchgehen und entschlüsseln, was es bedeutet.

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein {{Glossary("SDP", "SDP")}} (Session Description Protocol) Blob zu erstellen, das die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Einschränkungen, die erfüllt sein müssen, damit die Verbindung Ihren Bedürfnissen entspricht, wie z.B., ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Einschränkungen.
2. Wenn das Angebot erfolgreich erstellt wurde, übergeben wir das Blob an die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der lokalen Verbindung. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt besteht darin, den lokalen Peer mit dem entfernten zu verbinden, indem dem entfernten Peer davon berichtet wird. Dies geschieht durch Aufrufen von [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription). Jetzt kennt `remoteConnection` die Verbindung, die erstellt wird. In einer echten Anwendung wäre hierzu ein Signalisierungsserver erforderlich, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, dass es Zeit für den entfernten Peer ist zu antworten. Dies erfolgt durch Aufrufen seiner Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer). Dies erzeugt einen SDP-Blob, der die Verbindung beschreibt, die der entfernte Peer bereit und in der Lage ist, zu erstellen. Diese Konfiguration liegt irgendwo in der Schnittmenge der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie vom Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) in die `remoteConnection` gegeben. Das stellt das Ende der Verbindung des entfernten Peers her (das, für den entfernten Peer, sein lokales Ende ist. Diese Dinge können verwirrend sein, aber Sie gewöhnen sich daran). Auch dies würde normalerweise über einen Signalisierungsserver ausgetauscht.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung festgelegt, um auf den entfernten Peer zu verweisen, indem die `localConnection`'s Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird.
7. Die `catch()`-Aufrufe behandeln alle Fehler, die auftreten können.

> [!NOTE]
> Auch hier ist dieser Prozess keine Implementierung für die reale Welt; bei der normalen Nutzung gibt es zwei Codeblöcke, die auf zwei Maschinen laufen, die miteinander interagieren und die Verbindung aushandeln. Ein Nebenkanal, der üblicherweise als "Signalisierungsserver" bezeichnet wird, wird normalerweise verwendet, um die Beschreibung (die im **application/sdp**-Format vorliegt) zwischen den beiden Peers auszutauschen.

#### Handhabung der erfolgreichen Peer-Verbindung

Wenn jede Seite der Peer-to-Peer-Verbindung erfolgreich verknüpft ist, wird das entsprechende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)'s [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis ausgelöst. Diese Handler können tun, was nötig ist, aber in diesem Beispiel müssen wir nur die Benutzeroberfläche aktualisieren:

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

Alles, was wir hier tun, ist, die "Connect"-Schaltfläche zu deaktivieren, wenn der lokale Peer verbunden ist, und die "Disconnect"-Schaltfläche zu aktivieren, wenn der entfernte Peer sich verbindet.

#### Verbinden des Datenkanals

Sobald das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geöffnet ist, wird das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis an den Remote gesendet, um den Prozess des Öffnens des Datenkanals abzuschließen; dies ruft unsere `receiveChannelCallback()`-Methode auf, die folgendermaßen aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis enthält in seiner Channel-Eigenschaft eine Referenz zu einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das das Ende des entfernten Peers im Kanal darstellt. Dies wird gespeichert, und wir richten auf dem Kanal Ereignis-Listener für die Ereignisse ein, die wir behandeln möchten. Sobald dies erledigt ist, wird unsere `handleReceiveMessage()`-Methode jedes Mal aufgerufen, wenn Daten vom entfernten Peer empfangen werden, und die `handleReceiveChannelStatusChange()`-Methode wird jedes Mal aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert, damit wir reagieren können, wenn der Kanal vollständig geöffnet oder geschlossen wird.

### Umgang mit Statusänderungen des Kanals

Sowohl unsere lokalen als auch entfernten Peers verwenden eine einzige Methode, um Ereignisse zu behandeln, die auf eine Änderung des Status der Kanalverbindung hinweisen.

Wenn der lokale Peer ein "open"- oder "close"-Event erfährt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

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

Wenn sich der Status des Kanals in "open" geändert hat, bedeutet das, dass wir die Verbindung zwischen den beiden Peers vollständig hergestellt haben. Die Benutzeroberfläche wird entsprechend aktualisiert, indem das Texteingabefeld für die zu sendende Nachricht aktiviert, das Eingabefeld fokussiert wird, damit der Benutzer sofort mit dem Tippen beginnen kann, die Schaltflächen "Send" und "Disconnect" aktiviert werden, sobald sie nutzbar sind, und die "Connect"-Schaltfläche deaktiviert wird, da sie bei geöffneter Verbindung nicht benötigt wird.

Wenn sich der Status in "closed" geändert hat, tritt das Gegenteil ein: Das Eingabefeld und die "Send"-Schaltfläche werden deaktiviert, die "Connect"-Schaltfläche wird aktiviert, sodass der Benutzer eine neue Verbindung öffnen kann, wenn er dies wünscht, und die "Disconnect"-Schaltfläche deaktiviert, da sie bei fehlender Verbindung nicht nützlich ist.

Der entfernte Peer unseres Beispiels ignoriert andererseits die Statusänderungsereignisse, mit Ausnahme der Protokollierung des Ereignisses in der Konsole:

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

Wenn der Benutzer die "Send"-Schaltfläche drückt, wird die `sendMessage()`-Methode aufgerufen, die wir als Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis der Schaltfläche festgelegt haben. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht aus dem [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des Eingabefeldes geholt. Dieser wird dann an den entfernten Peer gesendet, indem [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) aufgerufen wird. Das ist alles, was dazu gehört! Der Rest dieser Methode ist nur etwas Benutzererlebnis-Süße — das Eingabefeld wird geleert und neu fokussiert, sodass der Benutzer sofort beginnen kann, eine weitere Nachricht zu tippen.

### Nachrichten empfangen

Wenn ein "message"-Ereignis im Remote-Kanal auftritt, wird unsere `handleReceiveMessage()`-Methode als Event-Handler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const textNode = document.createTextNode(event.data);

  el.appendChild(textNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt einige grundlegende {{Glossary("DOM", "DOM")}}-Injektionen durch; sie erstellt ein neues {{HTMLElement("p")}}-Element (Absatz), erstellt dann einen neuen [`Text`](/de/docs/Web/API/Text)-Knoten, der den Nachrichtentext enthält, der in der `data`-Eigenschaft des Ereignisses empfangen wird. Dieser Textknoten wird als Kind des neuen Elements hinzugefügt, das dann in den `receiveBox`-Block eingefügt wird, wodurch es im Browserfenster gezeichnet wird.

### Trennen der Peers

Wenn der Benutzer auf die "Disconnect"-Schaltfläche klickt, wird die Methode `disconnectPeers()` aufgerufen, die vorher als Handler dieser Schaltfläche festgelegt wurde.

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

Dies beginnt damit, dass jeder Peer das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) schließt, dann ähnlich jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dann werden alle gespeicherten Referenzen zu diesen Objekten auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um den Abschluss der Verbindung anzuzeigen.

## Nächste Schritte

Werfen Sie einen Blick auf den Quellcode von [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), der auf GitHub verfügbar ist.

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)-Muster.
