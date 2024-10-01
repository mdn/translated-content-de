---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("WebRTC")}}

Die [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle ist eine Funktion der [WebRTC API](/de/docs/Web/API/WebRTC_API), die es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich zur [WebSocket API](/de/docs/Web/API/WebSockets_API), sodass dasselbe Programmiermodell für beide verwendet werden kann.

In diesem Beispiel werden wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung herstellen, die zwei Elemente auf derselben Seite verknüpft. Auch wenn dies offensichtlich eine konstruierte Situation ist, ist es nützlich, um den Ablauf der Verbindung von zwei Peers zu demonstrieren. Wir werden die Mechaniken der Verbindungserstellung und des Datenübermittelns und -empfangens behandeln, aber die Details zum Auffinden und Verbinden mit einem entfernten Computer bleiben einem anderen Beispiel vorbehalten.

## Das HTML

Zuerst werfen wir einen kurzen Blick auf das [notwendige HTML](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Es gibt hier nichts unglaublich Kompliziertes. Zuerst haben wir ein paar Schaltflächen zum Herstellen und Schließen der Verbindung:

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

Dann gibt es ein Feld, das das Texteingabefeld enthält, in das der Benutzer eine Nachricht eingeben kann, die gesendet werden soll, mit einer Schaltfläche, um den eingegebenen Text zu senden. Dieses {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

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
<div class="messagebox" id="receivebox">
  <p>Messages received:</p>
</div>
```

## Der JavaScript-Code

Während Sie sich den [Code selbst auf GitHub ansehen können](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js), werden wir unten die Teile des Codes überprüfen, die die Hauptlast tragen.

### Starten

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
  receiveBox = document.getElementById("receivebox");

  // Set event listeners for user interface widgets

  connectButton.addEventListener("click", connectPeers, false);
  disconnectButton.addEventListener("click", disconnectPeers, false);
  sendButton.addEventListener("click", sendMessage, false);
}
```

Das ist ziemlich einfach. Wir deklarieren Variablen und holen uns Referenzen zu allen Seitenelementen, auf die wir zugreifen müssen, und setzen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) auf die drei Schaltflächen.

### Eine Verbindung herstellen

Wenn der Benutzer auf die "Connect"-Schaltfläche klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden das für die Klarheit aufteilen und Stück für Stück betrachten.

> [!NOTE]
> Auch wenn beide Enden unserer Verbindung auf derselben Seite sind, werden wir das Ende, das die Verbindung initiieren, als das "lokale" bezeichnen, und das andere als das "entfernte" Ende.

#### Das lokale Peer einrichten

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das "lokale" Ende der Verbindung zu erstellen. Dies ist der Peer, der die Verbindungsanfrage sendet. Der nächste Schritt besteht darin, das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Aufrufen von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) zu erstellen und Ereignislistener einzurichten, um den Kanal zu überwachen, damit wir wissen, wann er geöffnet und geschlossen wird (d. h. wann der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig zu beachten, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt hat.

#### Das entfernte Peer einrichten

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, mit der Ausnahme, dass wir hier nicht explizit einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellen müssen, da wir über den oben hergestellten Kanal verbunden werden. Stattdessen richten wir einen [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignishandler ein, der aufgerufen wird, wenn der Datenkanal geöffnet ist; dieser Handler wird ein `RTCDataChannel`-Objekt empfangen, das Sie unten sehen werden.

#### Die ICE-Kandidaten einrichten

Der nächste Schritt ist, jede Verbindung mit ICE-Kandidatenlistenern einzurichten; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, von dem die andere Seite erfahren muss.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im selben Kontext laufen, ist der Vorgang etwas komplizierter; jede Seite liefert nacheinander einen Vorschlag zur Verbindung (z. B. UDP, UDP mit einem Relais, TCP usw.) durch den Aufruf von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) und sie gehen hin und her, bis eine Einigung erzielt wird. Aber hier nehmen wir einfach das erste Angebot auf jeder Seite an, da keine echte Vernetzung stattfindet.

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

Das letzte, was wir tun müssen, um unsere Peers zu verbinden, ist, ein Verbindungsangebot zu erstellen.

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

Lassen Sie uns Zeile für Zeile durchgehen und dekodieren, was es bedeutet.

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um einen {{Glossary("SDP", "SDP")}} (Session Description Protocol) Blob zu erstellen, der die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Einschränkungen, die für die Verbindung erfüllt werden müssen, um Ihren Anforderungen zu genügen, z. B. ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Einschränkungen.
2. Wenn das Angebot erfolgreich erstellt wird, geben wir den Blob zur lokalen Verbindungsmethode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) weiter. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt besteht darin, das lokale Peer mit dem entfernten zu verbinden, indem wir das entfernte Peer darüber informieren. Dies geschieht durch Aufruf von [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription). Jetzt weiß die `remoteConnection` über die Verbindung, die aufgebaut wird. In einer echten Anwendung wäre dazu ein Signaliserungsserver erforderlich, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, dass es Zeit für das entfernte Peer ist, zu antworten. Dies geschieht durch Aufrufen seiner Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer). Dies erzeugt einen SDP-Blob, der die Verbindung beschreibt, die das entfernte Peer bereit und in der Lage ist, herzustellen. Diese Konfiguration liegt irgendwo im Bereich der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie in die remoteConnection eingespeist, indem [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird. Das stellt das Ende der Verbindung des entfernten Peers her (das aus Sicht des entfernten Peers dessen lokales Ende ist. Diese Dinge können verwirrend sein, aber man gewöhnt sich daran). Auch dies wird normalerweise über einen Signalisierungsserver ausgetauscht.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung so eingestellt, dass sie auf das entfernte Peer verweist, indem die lokaleConnection mit [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird.
7. Die `catch()`-Aufrufe rufen eine Routine auf, die alle auftretenden Fehler behandelt.

> [!NOTE]
> Noch einmal: Dieser Prozess stellt keine reale Implementierung dar. Im normalen Gebrauch gibt es zwei Code-Brocken, die auf zwei Maschinen laufen und miteinander interagieren und die Verbindung aushandeln. Ein Nebenkanal, der allgemein als "Signaliserungsserver" bezeichnet wird, wird üblicherweise verwendet, um die Beschreibung (die in **application/sdp**-Form vorliegt) zwischen den beiden Peers auszutauschen.

#### Handhabung einer erfolgreichen Peer-Verbindung

Sobald jede Seite der Peer-to-Peer-Verbindung erfolgreich verknüpft ist, wird das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis des entsprechenden [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst. Diese Handler können alles Mögliche tun, aber in diesem Beispiel müssen wir nur die Benutzeroberfläche aktualisieren:

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

Das einzige, was wir hier tun, ist die Schaltfläche "Connect" zu deaktivieren, wenn das lokale Peer verbunden ist, und die Schaltfläche "Disconnect" zu aktivieren, wenn das entfernte Peer verbunden ist.

#### Den Datenkanal verbinden

Sobald die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geöffnet ist, wird das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis an das entfernte Peer gesendet, um den Prozess des Öffnens des Datenkanals abzuschließen; dies ruft unsere `receiveChannelCallback()`-Methode auf, die folgendermaßen aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis enthält in seiner channel-Eigenschaft einen Verweis auf ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das das Ende des entfernten Peers im Kanal darstellt. Dies wird gespeichert und wir richten auf dem Kanal Ereignislistener für die Ereignisse ein, die wir handhaben möchten. Sobald dies geschehen ist, wird unsere `handleReceiveMessage()`-Methode jedes Mal aufgerufen, wenn Daten vom entfernten Peer empfangen werden, und die Methode `handleReceiveChannelStatusChange()` wird aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert, damit wir reagieren können, wenn der Kanal vollständig geöffnet oder geschlossen ist.

### Den Kanalstatus ändern

Sowohl unsere lokalen als auch entfernten Peers verwenden eine einzige Methode, um Ereignisse zu behandeln, die eine Änderung im Verbindungsstatus des Kanals anzeigen.

Wenn das lokale Peer ein offenes oder geschlossenes Ereignis erfährt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

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

Wenn sich der Status des Kanals auf "open" geändert hat, bedeutet das, dass wir die Verbindung zwischen den beiden Peers hergestellt haben. Die Benutzeroberfläche wird entsprechend aktualisiert, indem das Texteingabefeld für die zu sendende Nachricht aktiviert und in den Fokus gerückt wird, damit der Benutzer sofort zu tippen beginnen kann, indem die Tasten "Send" und "Disconnect" aktiviert werden, da sie jetzt verwendbar sind, und durch Deaktivieren der "Connect"-Taste, da sie nicht benötigt wird, wenn die Verbindung geöffnet ist.

Wenn sich der Status auf "closed" geändert hat, tritt das entgegengesetzte Set von Aktionen ein: Das Eingabefeld und die "Send"-Taste werden deaktiviert, die "Connect"-Taste wird aktiviert, sodass der Benutzer eine neue Verbindung öffnen kann, falls er dies wünscht, und die "Disconnect"-Taste wird deaktiviert, da sie nicht nützlich ist, wenn keine Verbindung besteht.

Das entfernte Peer unseres Beispiels ignoriert dagegen die Statusänderungsereignisse und protokolliert das Ereignis nur in der Konsole:

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

Wenn der Benutzer die Schaltfläche "Send" drückt, wird die Methode `sendMessage()` aufgerufen, die wir als Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis der Schaltfläche eingerichtet haben. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht aus dem [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des Eingabefelds geholt. Dieser wird dann an das entfernte Peer gesendet, indem [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) aufgerufen wird. Das ist alles! Der Rest dieser Methode ist nur etwas Benutzerschnittstellen-Erlebnis – das Eingabefeld wird geleert und wieder in den Fokus gerückt, damit der Benutzer sofort eine neue Nachricht eintippen kann.

### Nachrichten empfangen

Wenn ein "message"-Ereignis im entfernten Kanal auftritt, wird unsere Methode `handleReceiveMessage()` als Ereignishandler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt eine grundlegende {{Glossary("DOM", "DOM")}}-Injection durch; sie erstellt ein neues {{HTMLElement("p")}} (Absatz)-Element, dann wird ein neuer [`Text`](/de/docs/Web/API/Text)-Knoten mit dem Nachrichtentext erzeugt, der in der `data`-Eigenschaft des Ereignisses empfangen wird. Dieser Textknoten wird als Kind des neuen Elements angehängt, welches dann in den `receiveBox`-Block eingefügt wird, wodurch es im Browserfenster gezeichnet wird.

### Die Peers trennen

Wenn der Benutzer die "Disconnect"-Schaltfläche drückt, wird die Methode `disconnectPeers()` aufgerufen, die zuvor als Handler für diese Schaltfläche festgelegt wurde.

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

Dies beginnt damit, dass jedes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) jedes Peers geschlossen wird, dann wird ähnlich jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen. Dann werden alle gespeicherten Referenzen auf diese Objekte auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um den Abschluss der Verbindung anzuzeigen.

## Nächste Schritte

Werfen Sie einen Blick auf den Quellcode von [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), der auf GitHub verfügbar ist.

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das [Perfekte Verhandlungsmuster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation).
