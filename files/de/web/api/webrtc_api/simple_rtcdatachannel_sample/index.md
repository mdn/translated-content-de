---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("WebRTC")}}

Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist eine Funktion der [WebRTC API](/de/docs/Web/API/WebRTC_API), mit der Sie einen Kanal zwischen zwei Peers öffnen können, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich dem [WebSocket API](/de/docs/Web/API/WebSockets_API) ähnlich, sodass für beide das gleiche Programmiermodell verwendet werden kann.

In diesem Beispiel werden wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung zwischen zwei Elementen auf derselben Seite herstellen. Obwohl dies offensichtlich ein konstruiertes Szenario ist, ist es nützlich, um den Ablauf der Verbindung zweier Peers zu demonstrieren. Wir werden die Mechanik der Verbindungsherstellung und der Datenübertragung sowie des Empfangs behandeln, die Details zur Lokalisierung und Verbindung zu einem entfernten Computer sparen wir uns jedoch für ein anderes Beispiel auf.

## Das HTML

Werfen wir zunächst einen kurzen Blick auf das [HTML, das benötigt wird](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Es gibt hier nichts unglaublich Kompliziertes. Zuerst haben wir ein paar Tasten zum Herstellen und Beenden der Verbindung:

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

Dann gibt es ein Feld, das das Text-Eingabefeld enthält, in das der Benutzer eine Nachricht eingeben kann, die gesendet werden soll, mit einem Button zum Senden des eingegebenen Textes. Dieses {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

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

Während Sie sich einfach [den Code selbst auf GitHub ansehen können](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js), werden wir unten die Teile des Codes besprechen, die die Hauptarbeit leisten.

### Das Startup

Wenn das Skript ausgeführt wird, richten wir einen [`load`](/de/docs/Web/API/Window/load_event)-Ereignislistener ein, damit, sobald die Seite vollständig geladen ist, unsere `startup()`-Funktion aufgerufen wird.

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

Dies ist recht einfach. Wir deklarieren Variablen und greifen auf alle Seitenelemente zu, auf die wir zugreifen müssen, und setzen dann [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) auf die drei Buttons.

### Verbindung herstellen

Wenn der Benutzer auf die Schaltfläche "Verbinden" klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden dies aufteilen und uns den Code schrittweise der Klarheit halber ansehen.

> [!NOTE]
> Obwohl sich beide Enden unserer Verbindung auf derselben Seite befinden, bezeichnen wir das, das die Verbindung herstellt, als das "lokale" Ende und das andere als das "entfernte" Ende.

#### Einrichtung des lokalen Peers

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das "lokale" Ende der Verbindung einzurichten. Dies ist der Peer, der die Verbindungsanfrage senden wird. Der nächste Schritt besteht darin, das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu erstellen, indem [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen und Event-Listener eingerichtet werden, um den Kanal zu überwachen, damit wir wissen, wann es geöffnet und geschlossen wird (d. h., wenn der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig im Hinterkopf zu behalten, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt hat.

#### Einrichtung des entfernten Peers

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, außer dass wir nicht explizit ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) selbst erstellen müssen, da wir durch das oben erstellte Kanal verbunden werden. Stattdessen richten wir einen [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Event-Handler ein; dieser wird aufgerufen, wenn der Datenkanal geöffnet wird; dieser Handler erhält ein `RTCDataChannel`-Objekt, wie Sie unten sehen werden.

#### Einrichtung der ICE-Kandidaten

Der nächste Schritt besteht darin, jede Verbindung mit ICE-Kandidaten-Listenern einzurichten; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, um der anderen Seite darüber zu informieren.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im gleichen Kontext laufen, ist der Prozess etwas komplizierter; jede Seite bietet, nacheinander, einen Vorschlag, wie sie sich verbinden können (z. B. UDP, UDP mit einem Relay, TCP, usw.) durch den Aufruf von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate), und sie wechseln sich ab, bis eine Einigung erzielt wird. Aber hier akzeptieren wir einfach das erste Angebot auf jeder Seite, da keine tatsächliche Vernetzung beteiligt ist.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jedes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um einen Event-Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis zu besitzen.

#### Start des Verbindungsversuchs

Die letzte Sache, die wir tun müssen, um unsere Peers zu verbinden, ist das Erstellen eines Verbindungsangebots.

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

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um einen [SDP](/de/docs/Glossary/SDP) (Session Description Protocol) Blob zu erstellen, der die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Einschränkungen, die erfüllt werden müssen, damit die Verbindung Ihren Anforderungen entspricht, wie z. B. ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Einschränkungen.
2. Wenn das Angebot erfolgreich erstellt wird, übergeben wir den Blob an die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der lokalen Verbindung. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt besteht darin, den lokalen Peer mit dem entfernten zu verbinden, indem man ihm darüber informiert. Dies geschieht durch den Aufruf von [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription). Jetzt kennt die `remoteConnection` die Verbindung, die aufgebaut wird. In einer realen Anwendung wäre dafür ein Signalisierungsserver erforderlich, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, dass es an der Zeit ist, dass der entfernte Peer antwortet. Dies geschieht durch den Aufruf seiner Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer). Dies generiert einen SDP-Blob, der die Verbindung beschreibt, die der entfernte Peer bereit und in der Lage ist zu etablieren. Diese Konfiguration liegt irgendwo in der Schnittmenge der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie in die `remoteConnection` durch den Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben. Dies stellt das Ende der Verbindung des entfernten (das für den entfernten Peer sein lokales Ende ist) her. Das kann verwirrend sein, aber man gewöhnt sich daran. Wiederum würde dies normalerweise durch einen Signalisierungsserver ausgetauscht.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung gesetzt, um auf den entfernten Peer zu verweisen, indem die Methode `RTCPeerConnection.setRemoteDescription()` von `localConnection` aufgerufen wird.
7. Die `catch()`-Aufrufe aktivieren eine Routine, die alle aufgetretenen Fehler behandelt.

> [!NOTE]
> Auch dieser Prozess ist keine realitätsnahe Umsetzung; im normalen Gebrauch gibt es zwei Codeblöcke, die auf zwei Maschinen laufen, die miteinander interagieren und die Verbindung aushandeln. Ein Nebenkanal, oft als "Signalisierungsserver" bezeichnet, wird normalerweise verwendet, um die Beschreibung (die in **application/sdp**-Form vorliegt) zwischen den beiden Peers auszutauschen.

#### Behandlung erfolgreicher Peer-Verbindungen

Wenn jede Seite der Peer-to-Peer-Verbindung erfolgreich verknüpft ist, wird das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis des entsprechenden [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst. Diese Handler können tun, was auch immer nötig ist, aber in diesem Beispiel müssen wir nur die Benutzeroberfläche aktualisieren:

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

Das Einzige, das wir hier tun, ist den "Verbinden"-Button zu deaktivieren, wenn der lokale Peer verbunden ist, und den "Trennen"-Button zu aktivieren, wenn der entfernte Peer verbunden ist.

#### Verbindung des Datenkanals

Sobald die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geöffnet ist, wird das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis an den entfernten Peer gesandt, um den Prozess des Öffnens des Datenkanals abzuschließen; dies ruft unsere `receiveChannelCallback()`-Methode auf, die so aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis enthält in seiner Kanal-Eigenschaft eine Referenz zu einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das das Ende des entfernten Peers des Kanals darstellt. Dies wird gespeichert, und wir richten auf dem Kanal Event-Listener für die Ereignisse ein, die wir handhaben möchten. Sobald dies geschehen ist, wird unsere `handleReceiveMessage()`-Methode jedes Mal aufgerufen, wenn der entfernte Peer Daten empfängt, und die `handleReceiveChannelStatusChange()`-Methode wird aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert, um zu reagieren, wenn der Kanal vollständig geöffnet oder geschlossen wird.

### Behandlung von Kanalstatusänderungen

Sowohl unsere lokalen als auch entfernten Peers verwenden eine einzige Methode, um Ereignisse zu behandeln, die eine Änderung des Status der Kanalverbindung anzeigen.

Wenn der lokale Peer ein offenes oder geschlossenes Ereignis erlebt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

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

Wenn sich der Status des Kanals in "geöffnet" geändert hat, zeigt dies an, dass wir die Verbindung zwischen den beiden Peers beendet haben. Die Benutzeroberfläche wird dementsprechend aktualisiert, indem das Text-Eingabefeld für die zu sendende Nachricht aktiviert, das Eingabefeld fokussiert, damit der Benutzer sofort mit der Eingabe beginnen kann, die "Senden"- und "Trennen"-Buttons aktiviert werden, da sie nun verwendbar sind und der "Verbinden"-Button deaktiviert wird, da er nicht benötigt wird, wenn die Verbindung geöffnet ist.

Wenn sich der Status in "geschlossen" geändert hat, erfolgt die gegenteilige Aktion: das Eingabefeld und der "Senden"-Button werden deaktiviert, der "Verbinden"-Button wird aktiviert, sodass der Benutzer bei Bedarf eine neue Verbindung öffnen kann, und der "Trennen"-Button wird deaktiviert, da er nicht nützlich ist, wenn keine Verbindung besteht.

Der entfernte Peer unseres Beispiels ignoriert hingegen die Statusänderungsevents, außer dass er das Ereignis in die Konsole protokolliert:

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

### Senden von Nachrichten

Wenn der Benutzer den "Senden"-Button drückt, wird die Methode `sendMessage()` aufgerufen, die wir als Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis des Buttons festgelegt haben. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht aus dem [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des Eingabefelds geholt. Dieser wird dann an den entfernten Peer gesendet, indem [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) aufgerufen wird. Das ist alles! Der Rest dieser Methode ist nur etwas Benutzererfahrungssüße – das Eingabefeld wird geleert und neu fokussiert, damit der Benutzer sofort mit der Eingabe einer weiteren Nachricht beginnen kann.

### Empfangen von Nachrichten

Wenn ein "Nachricht"-Ereignis auf dem entfernten Kanal auftritt, wird unsere Methode `handleReceiveMessage()` als Ereignishandler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt eine grundlegende [DOM](/de/docs/Glossary/DOM)-Injection durch; sie erstellt ein neues {{HTMLElement("p")}} (Absatz)-Element, dann einen neuen [`Text`](/de/docs/Web/API/Text)-Knoten, der den Nachrichtentext enthält, der im `data`-Eigenschaft des Ereignisses empfangen wird. Dieser Textknoten wird als Kind des neuen Elements angehängt, das dann in den `receiveBox`-Block eingefügt wird und dadurch dazu führt, dass er im Browserfenster gezeichnet wird.

### Trennen der Peers

Wenn der Benutzer auf die Schaltfläche "Trennen" klickt, wird die zuvor als Handler für diese Schaltfläche festgelegte Methode `disconnectPeers()` aufgerufen.

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

Dies beginnt mit dem Schließen des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) jedes Peers, dann auf ähnliche Weise jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dann werden alle gespeicherten Referenzen zu diesen Objekten auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um widerzuspiegeln, dass die Verbindung geschlossen wurde.

## Nächste Schritte

Werfen Sie einen Blick auf den Quellcode von [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), der auf GitHub verfügbar ist.

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das [Perfekte Verhandlungs](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)-Muster.
