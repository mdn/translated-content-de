---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{DefaultAPISidebar("WebRTC")}}

Das {{domxref("RTCDataChannel")}}-Interface ist eine Funktion der [WebRTC API](/de/docs/Web/API/WebRTC_API), die es Ihnen ermöglicht, zwischen zwei Peers einen Kanal zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket API](/de/docs/Web/API/WebSockets_API) gestaltet, sodass dasselbe Programmiermodell für beide verwendet werden kann.

In diesem Beispiel werden wir eine {{domxref("RTCDataChannel")}}-Verbindung zwischen zwei Elementen auf derselben Seite öffnen. Während dies offensichtlich ein konstruiertes Szenario ist, ist es nützlich, um den Ablauf des Verbindens zweier Peers zu demonstrieren. Wir werden die Mechanik des Verbindens und Übertragens sowie Empfangens von Daten abdecken, aber die Teile über das Auffinden und Verbinden mit einem entfernten Computer sparen wir uns für ein anderes Beispiel auf.

## Das HTML

Zuerst werfen wir einen kurzen Blick auf das [erforderliche HTML](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Es ist nichts unglaublich Kompliziertes dabei. Zuerst haben wir ein paar Buttons zum Herstellen und Trennen der Verbindung:

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

Dann gibt es ein Feld, das das Texteingabefeld enthält, in das der Benutzer eine Nachricht eingeben kann, um sie zu übertragen, mit einem Button zum Senden des eingegebenen Textes. Diese {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

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

Während Sie sich den [Code selbst auf GitHub](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js) ansehen können, werden wir unten die Teile des Codes überprüfen, die die eigentliche Arbeit erledigen.

### Starten

Wenn das Skript ausgeführt wird, richten wir einen {{domxref("Window/load_event", "load")}}-Event-Listener ein, sodass unsere `startup()`-Funktion aufgerufen wird, sobald die Seite vollständig geladen ist.

```js
let connectButton = null;
let disconnectButton = null;
let sendButton = null;
let messageInputBox = null;
let receiveBox = null;

let localConnection = null; // RTCPeerConnection für unsere "lokale" Verbindung
let remoteConnection = null; // RTCPeerConnection für die "entfernte"

let sendChannel = null; // RTCDataChannel für den lokalen (Sender)
let receiveChannel = null; // RTCDataChannel für den entfernten (Empfänger)

function startup() {
  connectButton = document.getElementById("connectButton");
  disconnectButton = document.getElementById("disconnectButton");
  sendButton = document.getElementById("sendButton");
  messageInputBox = document.getElementById("message");
  receiveBox = document.getElementById("receivebox");

  // Event-Listener für Benutzeroberflächen-Widgets festlegen

  connectButton.addEventListener("click", connectPeers, false);
  disconnectButton.addEventListener("click", disconnectPeers, false);
  sendButton.addEventListener("click", sendMessage, false);
}
```

Das ist ziemlich einfach. Wir deklarieren Variablen und holen Referenzen zu allen Seitenelementen, die wir benötigen, und setzen dann [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) für die drei Buttons.

### Eine Verbindung herstellen

Wenn der Benutzer auf den "Connect"-Button klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden diese Methode aufteilen und sie Stück für Stück betrachten, um Klarheit zu schaffen.

> [!NOTE]
> Auch wenn beide Enden unserer Verbindung auf derselben Seite sind, werden wir das, das die Verbindung startet, als das "lokale" erklären, und das andere als das "entfernte" Ende.

#### Das lokale Peer einrichten

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das "lokale" Ende der Verbindung zu erstellen. Dies ist das Peer, das die Verbindungsanfrage sendet. Der nächste Schritt ist die Erstellung des {{domxref("RTCDataChannel")}} durch den Aufruf von {{domxref("RTCPeerConnection.createDataChannel()")}} und die Einrichtung von Event-Listenern zur Überwachung des Kanals, damit wir wissen, wann er geöffnet und geschlossen wird (das heißt, wenn der Kanal in dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig zu beachten, dass jedes Ende des Kanals sein eigenes {{domxref("RTCDataChannel")}}-Objekt hat.

#### Das entfernte Peer einrichten

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, außer dass wir hier kein {{domxref("RTCDataChannel")}} explizit selbst erstellen müssen, da wir über den oben eingerichteten Kanal verbunden werden. Stattdessen richten wir einen {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}-Event-Handler ein; dieser wird aufgerufen, wenn der Datenkanal geöffnet ist; dieser Handler wird ein `RTCDataChannel`-Objekt empfangen; Sie werden das unten sehen.

#### ICE-Kandidaten einrichten

Der nächste Schritt ist, jede Verbindung mit ICE-Kandidaten-Listenern einzurichten; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, um dem anderen Ende darüber Bescheid zu sagen.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im selben Kontext laufen, ist der Prozess ein bisschen komplizierter; jede Seite bietet einen vorgeschlagenen Verbindungsweg an (zum Beispiel UDP, UDP mit einem Relay, TCP usw.), indem sie {{domxref("RTCPeerConnection.addIceCandidate()")}} aufruft, und sie gehen hin und her, bis eine Einigung erreicht ist. Aber hier akzeptieren wir einfach das erste Angebot auf jeder Seite, da keine tatsächliche Vernetzung beteiligt ist.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jedes {{domxref("RTCPeerConnection")}}, um einen Event-Handler für das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Event zu haben.

#### Den Verbindungsversuch starten

Das Letzte, was wir tun müssen, um die Verbindung unserer Peers zu beginnen, ist ein Verbindungsangebot zu erstellen.

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

Gehen wir das Zeile für Zeile durch und entschlüsseln, was das bedeutet.

1. Zuerst rufen wir die Methode {{domxref("RTCPeerConnection.createOffer()")}} auf, um ein {{Glossary("SDP")}} (Session Description Protocol)-Blob zu erstellen, das die Verbindung beschreibt, die wir erstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Einschränkungen, die erfüllt sein müssen, damit die Verbindung Ihren Anforderungen entspricht, z.B. ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Einschränkungen.
2. Wenn das Angebot erfolgreich erstellt wurde, geben wir das Blob an die Methode {{domxref("RTCPeerConnection.setLocalDescription()")}} der lokalen Verbindung weiter. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt ist das Verbinden des lokalen Peers mit dem entfernten, indem wir dem entfernten Peer darüber informieren. Dies geschieht durch den Aufruf von {{domxref("RTCPeerConnection.setRemoteDescription()", "remoteConnection.setRemoteDescription()")}}. Jetzt kennt die `remoteConnection` die Verbindung, die aufgebaut wird. In einer realen Anwendung würde dies einen Signalisierungsserver erfordern, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, es ist an der Zeit, dass der entfernte Peer antwortet. Er tut dies durch den Aufruf seiner Methode {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}}. Dies generiert ein SDP-Blob, das die Verbindung beschreibt, die der entfernte Peer bereit und in der Lage ist, aufzubauen. Diese Konfiguration liegt irgendwo in der Schnittmenge der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie in die `remoteConnection` durch den Aufruf von {{domxref("RTCPeerConnection.setLocalDescription()")}} übermittelt. Das etabliert das Ende der Verbindung des entfernten Peers (das für den entfernten Peer sein lokales Ende ist. Diese Sachen können verwirrend sein, aber man gewöhnt sich daran). Auch dies würde normalerweise durch einen Signalisierungsserver ausgetauscht.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung gesetzt, um sich auf den entfernten Peer zu beziehen, indem die {{domxref("RTCPeerConnection.setRemoteDescription()")}} der lokalen Verbindung aufgerufen wird.
7. Die `catch()`-Anrufe rufen eine Routine auf, die alle auftretenden Fehler behandelt.

> [!NOTE]
> Noch einmal, dieser Prozess ist keine realistische Implementierung; im normalen Gebrauch gibt es zwei Codeblöcke, die auf zwei Maschinen laufen, interagieren und die Verbindung aushandeln. Ein Nebenkanal, der üblicherweise als "Signalisierungsserver" bezeichnet wird, wird normalerweise verwendet, um die Beschreibung (die in **application/sdp**-Form ist) zwischen den beiden Peers auszutauschen.

#### Erfolgreiche Peer-Verbindung handhaben

Wenn jede Seite der Peer-to-Peer-Verbindung erfolgreich verbunden ist, wird das entsprechende {{domxref("RTCPeerConnection")}}'s {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Event ausgelöst. Diese Handler können tun, was notwendig ist, aber in diesem Beispiel müssen wir nur die Benutzeroberfläche aktualisieren:

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

Das Einzige, was wir hier tun, ist den "Connect"-Button zu deaktivieren, wenn der lokale Peer verbunden ist und den "Disconnect"-Button zu aktivieren, wenn der entfernte Peer verbindet.

#### Den Datenkanal verbinden

Sobald das {{domxref("RTCPeerConnection")}} geöffnet ist, wird das {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}-Event an den Remote gesendet, um den Datenkanal zu öffnen. Dies ruft unsere Methode `receiveChannelCallback()` auf, die folgendermaßen aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}-Event enthält in seiner Channel-Eigenschaft einen Verweis auf ein {{domxref("RTCDataChannel")}}, das das Ende des Kanals des entfernten Peers darstellt. Dies wird gespeichert und wir setzen auf diesem Kanal Event-Listener für die Events, die wir handhaben wollen. Sobald dies erledigt ist, wird unsere Methode `handleReceiveMessage()` jedes Mal aufgerufen, wenn Daten vom entfernten Peer empfangen werden, und die Methode `handleReceiveChannelStatusChange()` wird jedes Mal aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert, sodass wir reagieren können, wenn der Kanal vollständig geöffnet wird und wenn er geschlossen wird.

### Umgang mit Statusänderungen des Kanals

Sowohl unsere lokalen als auch entfernten Peers verwenden eine einzige Methode zur Handhabung von Ereignissen, die eine Änderung im Status der Verbindung des Kanals anzeigen.

Wenn beim lokalen Peer ein Öffnungs- oder Schließereignis auftritt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

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

Wenn sich der Zustand des Kanals in "open" geändert hat, bedeutet das, dass wir den Link zwischen den beiden Peers vollständig hergestellt haben. Die Benutzeroberfläche wird entsprechend aktualisiert, indem das Texteingabefeld für die zu sendende Nachricht aktiviert wird, das Eingabefeld fokussiert wird, sodass der Benutzer sofort mit dem Schreiben beginnen kann, die Buttons "Send" und "Disconnect" aktiviert werden, da sie jetzt benutzt werden können, und der Button "Connect" deaktiviert wird, da er nicht mehr benötigt wird, wenn die Verbindung geöffnet ist.

Wenn sich der Zustandswechsel in "closed" geändert hat, geschieht das Gegenteil: Das Eingabefeld und der "Send"-Button werden deaktiviert, der "Connect"-Button wird aktiviert, sodass der Benutzer eine neue Verbindung herstellen kann, wenn er dies wünscht, und der "Disconnect"-Button wird deaktiviert, da er bei keiner bestehenden Verbindung nicht nützlich ist.

Das Beispiel des entfernten Peers in unserer Demo hingegen ignoriert die Statusänderungsereignisse, mit Ausnahme des Loggens des Ereignisses in der Konsole:

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      `Receive channel's status has changed to ${receiveChannel.readyState}`,
    );
  }
}
```

Die Methode `handleReceiveChannelStatusChange()` erhält als Eingabeparameter das aufgetretene Ereignis; dies wird ein {{domxref("RTCDataChannelEvent")}} sein.

### Nachrichten senden

Wenn der Benutzer den "Send"-Button drückt, wird die von uns als Handler für das {{domxref("Element/click_event", "click")}}-Event des Buttons eingerichtete Methode `sendMessage()` aufgerufen. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht von der [`value`](/de/docs/Web/HTML/Element/input#value)-Eigenschaft des Eingabefelds abgerufen. Dann wird diese Nachricht an den entfernten Peer durch den Aufruf von {{domxref("RTCDataChannel.send", "sendChannel.send()")}} gesendet. Das ist alles, was es dazu zu sagen gibt! Der Rest dieser Methode ist nur etwas Benutzererfahrungssüße – das Eingabefeld wird geleert und erneut fokussiert, damit der Benutzer sofort mit dem Schreiben einer weiteren Nachricht beginnen kann.

### Nachrichten empfangen

Wenn ein "message"-Event im Remote-Kanal auftritt, wird unsere `handleReceiveMessage()`-Methode als Event-Handler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt einige grundlegende {{Glossary("DOM")}}-Injection durch; sie erstellt ein neues {{HTMLElement("p")}} (Paragraphen-)Element und erstellt dann einen neuen {{domxref("Text")}}-Knoten, der den Nachrichtentext enthält, der in der `data`-Eigenschaft des Ereignisses empfangen wird. Dieser Textknoten wird als Kind des neuen Elements hinzugefügt, das dann in den `receiveBox`-Block eingefügt wird, wodurch er im Browserfenster gezeichnet wird.

### Peers trennen

Wenn der Benutzer auf den "Disconnect"-Button klickt, wird die Methode `disconnectPeers()` aufgerufen, die zuvor als Handler für diesen Button festgelegt wurde.

```js
function disconnectPeers() {
  // Das RTCDataChannel schließen, falls sie geöffnet sind.

  sendChannel.close();
  receiveChannel.close();

  // Die RTCPeerConnections schließen

  localConnection.close();
  remoteConnection.close();

  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;

  // Benutzeroberflächenelemente aktualisieren

  connectButton.disabled = false;
  disconnectButton.disabled = true;
  sendButton.disabled = true;

  messageInputBox.value = "";
  messageInputBox.disabled = true;
}
```

Dies beginnt mit dem Schließen jedes Peers {{domxref("RTCDataChannel")}}, dann werden ebenso jedes {{domxref("RTCPeerConnection")}} geschlossen. Anschließend werden alle gespeicherten Referenzen auf diese Objekte auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um zu reflektieren, dass die Verbindung geschlossen wurde.

## Nächste Schritte

Werfen Sie einen Blick auf den [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel) Quellcode, verfügbar auf GitHub.

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das Muster [Perfekte Verhandlung](/de/docs/Web/API/WebRTC_API/Perfect_negotiation).
