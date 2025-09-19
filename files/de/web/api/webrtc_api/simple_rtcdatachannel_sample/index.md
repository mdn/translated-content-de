---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebRTC")}}

Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist ein Feature der [WebRTC API](/de/docs/Web/API/WebRTC_API), das Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket API](/de/docs/Web/API/WebSockets_API) gestaltet, sodass dasselbe Programmiermodell für beide verwendet werden kann.

In diesem Beispiel werden wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung herstellen, die zwei Elemente auf derselben Seite verbindet. Obwohl dies offensichtlich ein konstruiertes Szenario ist, ist es nützlich, um den Ablauf der Verbindung von zwei Peers zu demonstrieren. Wir werden die Mechanik der Verbindungserstellung und des Datenversands und -empfangs behandeln, aber die Details zum Auffinden und Verbinden mit einem entfernten Rechner sparen wir uns für ein anderes Beispiel auf.

## Das HTML

Zuerst werfen wir einen kurzen Blick auf das [erforderliche HTML](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/index.html). Es gibt hier nichts unglaublich Kompliziertes. Zuerst haben wir ein paar Schaltflächen, um die Verbindung herzustellen und zu beenden:

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

Dann gibt es ein Feld, das das Texteingabefeld enthält, in das der Benutzer eine Nachricht eingeben kann, die übertragen werden soll, mit einer Schaltfläche zum Senden des eingegebenen Textes. Dieses {{HTMLElement("div")}} wird der erste Peer im Kanal sein.

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

Während Sie den [Code selbst auf GitHub ansehen können](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js), werden wir unten die Teile des Codes besprechen, die die Hauptarbeit leisten.

### Starten

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

Das ist ziemlich unkompliziert. Wir deklarieren Variablen und greifen auf alle Seitenelemente zu, auf die wir zugreifen müssen, und setzen dann [event listeners](/de/docs/Web/API/EventTarget/addEventListener) auf die drei Schaltflächen.

### Eine Verbindung herstellen

Wenn der Benutzer auf die "Connect"-Schaltfläche klickt, wird die Methode `connectPeers()` aufgerufen. Wir werden dies ein wenig aufbrechen und genauer betrachten, um Klarheit zu schaffen.

> [!NOTE]
> Auch wenn beide Enden unserer Verbindung auf derselben Seite sein werden, werden wir dasjenige, das die Verbindung herstellt, als "lokal" bezeichnen und das andere als "remote".

#### Lokalen Peer einrichten

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt ist die Erstellung des "lokalen" Endes der Verbindung. Dies ist der Peer, der die Verbindungsanfrage senden wird. Der nächste Schritt besteht darin, das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu erstellen, indem [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen wird, und Event-Listener für den Kanal einzurichten, damit wir wissen, wann er geöffnet und geschlossen wird (das heißt, wann der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt ist).

Es ist wichtig zu beachten, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt hat.

#### Remote-Peer einrichten

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, außer dass wir kein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) explizit erstellen müssen, da wir über den oben eingerichteten Kanal verbunden werden. Stattdessen richten wir einen [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Event-Handler ein; dieser wird aufgerufen, wenn der Datenkanal geöffnet wird; dieser Handler erhält ein `RTCDataChannel`-Objekt; das werden Sie unten sehen.

#### ICE-Kandidaten einrichten

Der nächste Schritt besteht darin, jede Verbindung mit ICE-Kandidaten-Listenern auszustatten; diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, um die andere Seite darüber zu informieren.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im selben Kontext laufen, ist der Prozess etwas umfangreicher; jede Seite bietet, eine nach der anderen, eine vorgeschlagene Verbindungsart an (zum Beispiel UDP, UDP mit einem Relay, TCP usw.), indem [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufgerufen wird, und sie gehen hin und her, bis eine Einigung erzielt wird. Aber hier akzeptieren wir einfach das erste Angebot auf jeder Seite, da kein echtes Netzwerk beteiligt ist.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) so, dass sie einen Event-Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event hat.

#### Verbindungsvorgang starten

Der letzte Schritt, den wir tun müssen, um die Verbindung unserer Peers zu beginnen, ist das Erstellen eines Verbindungsangebots.

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

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein {{Glossary("SDP", "SDP")}} (Session Description Protocol)-Blob zu erstellen, das die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Einschränkungen, die für die Verbindung erfüllt werden müssen, um Ihre Anforderungen zu erfüllen, wie zum Beispiel, ob die Verbindung Audio, Video oder beides unterstützen sollte. In unserem einfachen Beispiel haben wir keine Einschränkungen.
2. Wenn das Angebot erfolgreich erstellt wurde, leiten wir das Blob an die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der lokalen Verbindung weiter. Dies konfiguriert das lokale Ende der Verbindung.
3. Der nächste Schritt besteht darin, den lokalen Peer mit dem Remote-Peer zu verbinden, indem wir dem Remote-Peer davon berichten. Dies geschieht durch Aufrufen von [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription). Nun kennt `remoteConnection` die Verbindung, die aufgebaut wird. In einer echten Anwendung wäre dafür ein Signalisierungsserver erforderlich, um das Beschreibungsobjekt auszutauschen.
4. Nun ist es an der Zeit, dass der Remote-Peer antwortet. Dies geschieht, indem er seine Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft. Dies erzeugt ein SDP-Blob, das die Verbindung beschreibt, die der Remote-Peer bereit und in der Lage ist zu erstellen. Diese Konfiguration liegt irgendwo in der Schnittmenge der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie durch Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) in `remoteConnection` übergeben. Das stellt das Ende der "remote" Verbindung dar (was, für den Remote-Peer, sein lokales Ende ist. Das Zeug kann verwirrend sein, aber man gewöhnt sich daran). Auch hier würde dies normalerweise über einen Signalisierungsserver ausgetauscht werden.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung so eingestellt, dass sie auf den Remote-Peer verweist, indem die lokale Verbindung [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird.
7. Die `catch()`-Aufrufe behandeln Routinen, die Fehler verwalten, die auftreten.

> [!NOTE]
> Nochmals, dieser Prozess ist keine echte Implementierung; im normalen Gebrauch gibt es zwei Code-Stücke, die auf zwei Maschinen laufen und die Verbindung interagieren und aushandeln. Ein Seitenkanal, der oft als "Signalisierungsserver" bezeichnet wird, wird normalerweise verwendet, um die Beschreibung (die sich in **application/sdp**-Form befindet) zwischen den beiden Peers auszutauschen.

#### Umgang mit erfolgreicher Peer-Verbindung

Sobald jedes Ende der Peer-to-Peer-Verbindung erfolgreich verbunden ist, wird das entsprechende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-`icecandidate`-Event ausgelöst. Diese Handler können tun, was benötigt wird, aber in diesem Beispiel müssen wir lediglich die Benutzeroberfläche aktualisieren:

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

Das Einzige, was wir hier tun, ist, die "Connect"-Schaltfläche zu deaktivieren, wenn der lokale Peer verbunden ist, und die "Disconnect"-Schaltfläche zu aktivieren, wenn der Remote-Peer verbunden ist.

#### Datenkanal verbinden

Sobald die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geöffnet ist, wird das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Event an den Remote gesendet, um den Prozess des Öffnens des Datenkanals abzuschließen; dies ruft unsere `receiveChannelCallback()`-Methode auf, die folgendermaßen aussieht:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Event beinhaltet in seiner Kanal-Eigenschaft eine Referenz auf ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt, das das Remote-Ende des Kanals repräsentiert. Dieses wird gespeichert, und wir setzen auf dem Kanal Event-Listener für die Events ein, die wir behandeln möchten. Nachdem dies geschehen ist, wird unsere `handleReceiveMessage()`-Methode jedes Mal aufgerufen, wenn Daten vom Remote-Peer empfangen werden, und die `handleReceiveChannelStatusChange()`-Methode wird aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert, sodass wir reagieren können, wenn der Kanal vollständig geöffnet oder geschlossen wird.

### Umgang mit Statusänderungen des Kanals

Sowohl unser lokaler als auch unser Remote-Peer verwenden eine einzige Methode, um auf Events zu reagieren, die eine Statusänderung der Kanalverbindung anzeigen.

Wenn der lokale Peer ein Öffnungs- oder Schließevent erfährt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

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

Wenn sich der Status des Kanals auf "offen" geändert hat, zeigt dies an, dass wir die Verbindung zwischen den beiden Peers abgeschlossen haben. Die Benutzeroberfläche wird entsprechend aktualisiert, indem das Texteingabefeld für die zu sendende Nachricht aktiviert wird, das Eingabefeld fokussiert, damit der Benutzer sofort mit der Eingabe beginnen kann, die Schaltflächen "Senden" und "Trennen" aktiviert, da sie jetzt verwendbar sind, und die "Connect"-Schaltfläche deaktiviert wird, da sie nicht benötigt wird, wenn die Verbindung geöffnet ist.

Wenn sich der Status auf "geschlossen" geändert hat, erfolgt der gegenteilige Satz von Aktionen: das Eingabefeld und die "Senden"-Schaltfläche werden deaktiviert, die "Connect"-Schaltfläche wird aktiviert, sodass der Benutzer eine neue Verbindung öffnen kann, wenn er möchte, und die "Trennen"-Schaltfläche wird deaktiviert, da sie nicht nützlich ist, wenn keine Verbindung besteht.

Unser Beispiels-Remote-Peer ignoriert hingegen die Statusänderungsereignisse, abgesehen von der Protokollierung des Ereignisses in der Konsole:

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      `Receive channel's status has changed to ${receiveChannel.readyState}`,
    );
  }
}
```

Die `handleReceiveChannelStatusChange()`-Methode erhält als Eingabeparameter das aufgetretene Event; dies wird ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent) sein.

### Nachrichten senden

Wenn der Benutzer die "Senden"-Schaltfläche drückt, wird die Methode `sendMessage()`, die wir als Event-Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Event der Schaltfläche festgelegt haben, aufgerufen. Diese Methode ist einfach genug:

```js
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zunächst wird der Text der Nachricht aus dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des Eingabefeldes abgerufen. Dieser Text wird dann an den Remote-Peer gesendet, indem [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) aufgerufen wird. Das ist alles! Der Rest dieser Methode ist nur etwas User-Experience-Verbesserung — das Eingabefeld wird geleert und neu fokussiert, damit der Benutzer sofort mit der Eingabe einer weiteren Nachricht beginnen kann.

### Nachrichten empfangen

Wenn ein "message"-Event im Remote-Kanal auftritt, wird unsere `handleReceiveMessage()`-Methode als Event-Handler aufgerufen.

```js
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const textNode = document.createTextNode(event.data);

  el.appendChild(textNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt eine grundlegende {{Glossary("DOM", "DOM")}}-Injection durch; sie erstellt ein neues {{HTMLElement("p")}}-Element (Absatz) und erzeugt dann einen neuen [`Text`](/de/docs/Web/API/Text)-Knoten, der den Nachrichtentext enthält, der in der `data`-Eigenschaft des Events empfangen wird. Dieser Textknoten wird als Kind des neuen Elements angefügt, das dann in den `receiveBox`-Block eingefügt wird, wodurch es im Browserfenster gezeichnet wird.

### Die Peers trennen

Wenn der Benutzer auf die "Trennen"-Schaltfläche klickt, wird die zuvor als Event-Handler dieser Schaltfläche festgelegte Methode `disconnectPeers()` aufgerufen.

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

Dies beginnt mit dem Schließen jedes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Peers und ähnlich jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dann werden alle gespeicherten Referenzen auf diese Objekte auf `null` gesetzt, um eine versehentliche Wiederverwendung zu vermeiden, und die Benutzeroberfläche wird aktualisiert, um den Umstand widerzuspiegeln, dass die Verbindung geschlossen wurde.

## Nächste Schritte

Werfen Sie einen Blick auf den Quellcode des [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), der auf GitHub verfügbar ist.

## Siehe auch

- [Signalübertragung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)-Pattern.
