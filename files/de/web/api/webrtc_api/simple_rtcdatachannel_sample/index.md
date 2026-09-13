---
title: Ein einfaches RTCDataChannel-Beispiel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
l10n:
  sourceCommit: 0ba5558949798bd3f8f7633354664fedaa62578e
---

{{DefaultAPISidebar("WebRTC")}}

Die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist eine Funktion der [WebRTC API](/de/docs/Web/API/WebRTC_API), mit der Sie einen Kanal zwischen zwei Peers öffnen können, über den Sie beliebige Daten senden und empfangen können. Die API ähnelt absichtlich der [WebSocket API](/de/docs/Web/API/WebSockets_API), sodass für beide dasselbe Programmiermodell verwendet werden kann.

In diesem Beispiel öffnen wir eine [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Verbindung, die zwei Elemente auf derselben Seite verbindet. Obwohl dies offensichtlich ein konstruiertes Szenario ist, eignet es sich gut, um den Ablauf beim Verbinden zweier Peers zu demonstrieren. Wir behandeln die Mechanik zum Herstellen der Verbindung sowie zum Senden und Empfangen von Daten, sparen uns jedoch die Details zum Auffinden und Verbinden mit einem entfernten Computer für ein anderes Beispiel auf.

## Das HTML

Sehen wir uns zunächst kurz das benötigte HTML an. Hier gibt es nichts besonders Kompliziertes. Zuerst haben wir einige Schaltflächen zum Herstellen und Schließen der Verbindung:

```html live-sample___simple-data-channel
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

Dann gibt es einen Bereich, der das Texteingabefeld enthält, in das der Benutzer eine zu übertragende Nachricht eingeben kann, sowie eine Schaltfläche zum Senden des eingegebenen Textes. Dieses {{HTMLElement("div")}} ist der erste Peer im Kanal.

```html live-sample___simple-data-channel
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

Schließlich gibt es den kleinen Bereich, in den wir die Nachrichten einfügen. Dieser {{HTMLElement("div")}}-Block ist der zweite Peer.

```html live-sample___simple-data-channel
<div class="messagebox" id="receive-box">
  <p>Messages received:</p>
</div>
```

```css hidden live-sample___simple-data-channel
body {
  font-family: sans-serif;
}

.messagebox {
  margin-block: 1rem;
}

input {
  box-sizing: border-box;
  max-width: 100%;
}

#receive-box {
  border: 1px solid gray;
  padding: 0.5rem;
  height: 8rem;
  overflow: auto;
  overflow-wrap: anywhere;
}
```

## Der JavaScript-Code

Im Folgenden betrachten wir die Teile des Codes, die die eigentliche Arbeit erledigen.

### Starten

Wenn das Skript ausgeführt wird, richten wir einen Event-Listener für [`load`](/de/docs/Web/API/Window/load_event) ein, sodass unsere Funktion `startup()` aufgerufen wird, sobald die Seite vollständig geladen ist.

```js live-sample___simple-data-channel
let connectButton = null;
let disconnectButton = null;
let sendButton = null;
let messageInputBox = null;
let receiveBox = null;

let localConnection = null; // RTCPeerConnection for our "local" connection
let remoteConnection = null; // RTCPeerConnection for the "remote"

let sendChannel = null; // RTCDataChannel for the local (sender)
let receiveChannel = null; // RTCDataChannel for the remote (receiver)
let disconnecting = false;

window.addEventListener("load", startup);

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

Dies ist recht unkompliziert. Wir deklarieren Variablen und holen Referenzen auf alle Seitenelemente, auf die wir zugreifen müssen, und setzen dann [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) auf die drei Schaltflächen.

### Herstellen einer Verbindung

Wenn der Benutzer auf die Schaltfläche „Connect“ klickt, wird die Funktion `connectPeers()` aufgerufen. Sie deaktiviert die Schaltfläche während des Verbindungsaufbaus, um einen weiteren Verbindungsversuch zu verhindern. Zur besseren Übersicht unterteilen wir dies und betrachten es Schritt für Schritt.

> [!NOTE]
> Obwohl sich beide Enden unserer Verbindung auf derselben Seite befinden, bezeichnen wir das Ende, das die Verbindung startet, als „lokal“ und das andere Ende als „entfernt“.

```js live-sample___simple-data-channel
async function connectPeers() {
  connectButton.disabled = true;
```

#### Den lokalen Peer einrichten

```js live-sample___simple-data-channel
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

Der erste Schritt besteht darin, das „lokale“ Ende der Verbindung zu erstellen. Dies ist der Peer, der die Verbindungsanfrage sendet. Der nächste Schritt besteht darin, den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Aufrufen von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) zu erstellen und Event-Listener einzurichten, um den Kanal zu überwachen. So wissen wir, wann er geöffnet und geschlossen wird, also wann der Kanal innerhalb dieser Peer-Verbindung verbunden oder getrennt wird.

Es ist wichtig zu beachten, dass jedes Ende des Kanals sein eigenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt besitzt.

#### Den entfernten Peer einrichten

```js live-sample___simple-data-channel
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

Das entfernte Ende wird ähnlich eingerichtet, außer dass wir nicht selbst explizit einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellen müssen, da wir über den oben eingerichteten Kanal verbunden werden. Stattdessen richten wir einen Event-Handler für [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) ein. Dieser wird aufgerufen, wenn der Datenkanal geöffnet wird; der Handler erhält ein `RTCDataChannel`-Objekt, wie Sie weiter unten sehen werden.

#### Die ICE-Kandidaten einrichten

Der nächste Schritt besteht darin, jede Verbindung mit Listenern für ICE-Kandidaten einzurichten. Diese werden aufgerufen, wenn es einen neuen ICE-Kandidaten gibt, über den die andere Seite informiert werden muss.

> [!NOTE]
> In einem realen Szenario, in dem die beiden Peers nicht im selben Kontext ausgeführt werden, ist der Vorgang etwas aufwendiger. Jede Seite schlägt nacheinander eine Verbindungsmöglichkeit vor, beispielsweise UDP, UDP mit einem Relay, TCP usw., indem sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft. Dies geschieht abwechselnd, bis eine Einigung erzielt wird. Hier akzeptieren wir jedoch einfach auf jeder Seite das erste Angebot, da kein tatsächliches Netzwerk beteiligt ist.

```js live-sample___simple-data-channel
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Wir konfigurieren jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit einem Event-Handler für das Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

#### Den Verbindungsversuch starten

Das Letzte, was wir tun müssen, um mit dem Verbinden unserer Peers zu beginnen, ist das Erstellen eines Verbindungsangebots.

```js live-sample___simple-data-channel
try {
  const offer = await localConnection.createOffer();
  await localConnection.setLocalDescription(offer);
  await remoteConnection.setRemoteDescription(localConnection.localDescription);
  const answer = await remoteConnection.createAnswer();
  await remoteConnection.setLocalDescription(answer);
  await localConnection.setRemoteDescription(remoteConnection.localDescription);
} catch (error) {
  handleCreateDescriptionError(error);
}
```

```js hidden live-sample___simple-data-channel
}
```

Jedes `await` wartet, bis die jeweilige Operation abgeschlossen ist, bevor mit dem nächsten Schritt fortgefahren wird. Gehen wir dies Zeile für Zeile durch und entschlüsseln, was es bedeutet.

1. Zuerst rufen wir die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um einen {{Glossary("SDP", "SDP")}}-Blob (Session Description Protocol) zu erstellen, der die Verbindung beschreibt, die wir herstellen möchten. Diese Methode akzeptiert optional ein Objekt mit Bedingungen, die erfüllt sein müssen, damit die Verbindung Ihren Anforderungen entspricht, etwa ob die Verbindung Audio, Video oder beides unterstützen soll. In unserem einfachen Beispiel haben wir keine Bedingungen.
2. Wenn das Angebot erfolgreich erstellt wurde, übergeben wir den Blob an die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der lokalen Verbindung. Dadurch wird das lokale Ende der Verbindung konfiguriert.
3. Der nächste Schritt besteht darin, den lokalen Peer mit dem entfernten Peer zu verbinden, indem der entfernte Peer darüber informiert wird. Dies geschieht durch Aufrufen von [`remoteConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription). Nun kennt `remoteConnection` die Verbindung, die aufgebaut wird. In einer realen Anwendung wäre hierfür ein Signalisierungsserver erforderlich, um das Beschreibungsobjekt auszutauschen.
4. Das bedeutet, dass es Zeit für die Antwort des entfernten Peers ist. Er tut dies durch Aufrufen seiner Methode [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer). Dadurch wird ein SDP-Blob generiert, der die Verbindung beschreibt, die der entfernte Peer herstellen kann und möchte. Diese Konfiguration liegt irgendwo in der Vereinigungsmenge der Optionen, die beide Peers unterstützen können.
5. Sobald die Antwort erstellt wurde, wird sie durch Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) an die remoteConnection übergeben. Dadurch wird das Ende der Verbindung des entfernten Peers eingerichtet, das für den entfernten Peer sein lokales Ende ist. Das kann verwirrend sein, aber man gewöhnt sich daran. Auch dies würde normalerweise über einen Signalisierungsserver ausgetauscht.
6. Schließlich wird die Remote-Beschreibung der lokalen Verbindung durch Aufrufen von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) von localConnection auf den entfernten Peer gesetzt.
7. Der `catch`-Block ruft eine Routine auf, die alle Fehler behandelt, die im `try`-Block auftreten.

> [!NOTE]
> Auch dieser Prozess ist keine reale Implementierung. Bei normaler Verwendung laufen zwei Codeabschnitte auf zwei Computern, die miteinander interagieren und die Verbindung aushandeln. Ein Seitenkanal, üblicherweise „Signalisierungsserver“ genannt, wird normalerweise verwendet, um die Beschreibung, die im Format **application/sdp** vorliegt, zwischen den beiden Peers auszutauschen.

#### Verbindungsfehler behandeln

Wenn das Erstellen oder Anwenden einer Beschreibung fehlschlägt, protokollieren wir den Fehler, schließen die Peer-Verbindungen und aktivieren die Schaltfläche „Connect“, damit der Benutzer es erneut versuchen kann. Fehler beim Hinzufügen von ICE-Kandidaten werden ebenfalls protokolliert:

```js live-sample___simple-data-channel
function handleCreateDescriptionError(error) {
  console.log(`Unable to establish a connection: ${error.toString()}`);
  localConnection?.close();
  remoteConnection?.close();
  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;
  connectButton.disabled = false;
}

function handleAddCandidateError() {
  console.log("Oh noes! addICECandidate failed!");
}
```

Das `open`-Ereignis des Kanals aktiviert die Schaltflächen „Send“ und „Disconnect“, wie unten unter [Änderungen des Kanalstatus behandeln](#änderungen_des_kanalstatus_behandeln) beschrieben.

#### Den Datenkanal verbinden

Sobald die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geöffnet ist, wird das Ereignis [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) an den entfernten Peer gesendet, um den Vorgang zum Öffnen des Datenkanals abzuschließen. Dadurch wird unsere Methode `receiveChannelCallback()` aufgerufen, die wie folgt aussieht:

```js live-sample___simple-data-channel
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

Das Ereignis [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) enthält in seiner Eigenschaft `channel` eine Referenz auf einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), der das Ende des Kanals des entfernten Peers darstellt. Diese wird gespeichert, und wir richten auf dem Kanal Event-Listener für die Ereignisse ein, die wir behandeln möchten. Sobald dies geschehen ist, wird unsere Methode `handleReceiveMessage()` jedes Mal aufgerufen, wenn der entfernte Peer Daten empfängt, und die Methode `handleReceiveChannelStatusChange()` wird jedes Mal aufgerufen, wenn sich der Verbindungsstatus des Kanals ändert. So können wir reagieren, wenn der Kanal vollständig geöffnet wird und wenn er geschlossen wird.

### Änderungen des Kanalstatus behandeln

Sowohl unser lokaler als auch unser entfernter Peer verwenden eine einzelne Methode zur Behandlung von Ereignissen, die eine Änderung des Status der Kanalverbindung anzeigen.

Wenn beim lokalen Peer ein Open- oder Close-Ereignis auftritt, wird die Methode `handleSendChannelStatusChange()` aufgerufen:

```js live-sample___simple-data-channel
function handleSendChannelStatusChange(event) {
  const state = event.currentTarget.readyState;
  console.log(`Send channel's status has changed to ${state}`);

  const open = state === "open" && !disconnecting;
  messageInputBox.disabled = !open;
  sendButton.disabled = !open;
  disconnectButton.disabled = !open;
  connectButton.disabled = open || disconnecting;
  if (open) {
    messageInputBox.focus();
  }
}
```

Wenn sich der Status des Kanals in „open“ geändert hat, zeigt dies an, dass wir die Verbindung zwischen den beiden Peers hergestellt haben. Wenn `disconnecting` auf `true` gesetzt ist, lassen wir alles deaktiviert. Andernfalls wird die Benutzeroberfläche entsprechend aktualisiert: Das Texteingabefeld für die zu sendende Nachricht wird aktiviert und fokussiert, sodass der Benutzer sofort mit der Eingabe beginnen kann. Die Schaltflächen „Send“ und „Disconnect“ werden aktiviert, da sie nun verwendet werden können, und die Schaltfläche „Connect“ wird deaktiviert, da sie bei geöffneter Verbindung nicht benötigt wird.

Wenn sich der Status in „closed“ geändert hat, tritt die entgegengesetzte Folge von Aktionen ein: Das Eingabefeld und die Schaltfläche „Send“ werden deaktiviert, die Schaltfläche „Connect“ wird aktiviert, damit der Benutzer bei Bedarf eine neue Verbindung öffnen kann, und die Schaltfläche „Disconnect“ wird deaktiviert, da sie nicht nützlich ist, wenn keine Verbindung besteht. Auch hier überschreibt das Flag `disconnecting` dies und hält alles deaktiviert. Während einer expliziten Trennung aktiviert `disconnectPeers()` die Schaltfläche „Connect“, nachdem beide Kanäle geschlossen wurden und die Bereinigung abgeschlossen ist.

Der entfernte Peer unseres Beispiels ignoriert dagegen die Ereignisse zur Statusänderung, mit Ausnahme der Protokollierung des Ereignisses in der Konsole:

```js live-sample___simple-data-channel
function handleReceiveChannelStatusChange(event) {
  console.log(
    `Receive channel's status has changed to ${event.currentTarget.readyState}`,
  );
}
```

Die Methode `handleReceiveChannelStatusChange()` erhält als Eingabeparameter das aufgetretene Ereignis. Dies ist ein [`Event`](/de/docs/Web/API/Event), dessen `currentTarget` der Kanal ist.

### Nachrichten senden

Wenn der Benutzer die Schaltfläche „Send“ drückt, wird die Methode sendMessage(), die wir als Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis der Schaltfläche eingerichtet haben, aufgerufen. Diese Methode ist einfach genug:

```js live-sample___simple-data-channel
function sendMessage() {
  const message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Zuerst wird der Text der Nachricht aus dem Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds abgerufen. Dieser wird dann durch Aufrufen von [`sendChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) an den entfernten Peer gesendet. Das ist alles! Der Rest dieser Methode ist nur etwas Komfort für die Benutzererfahrung: Das Eingabefeld wird geleert und erneut fokussiert, sodass der Benutzer sofort mit der Eingabe einer weiteren Nachricht beginnen kann.

### Nachrichten empfangen

Wenn auf dem entfernten Kanal ein „message“-Ereignis auftritt, wird unsere Methode `handleReceiveMessage()` als Event-Handler aufgerufen.

```js live-sample___simple-data-channel
function handleReceiveMessage(event) {
  const el = document.createElement("p");
  const textNode = document.createTextNode(event.data);

  el.appendChild(textNode);
  receiveBox.appendChild(el);
}
```

Diese Methode führt eine grundlegende {{Glossary("DOM", "DOM")}}-Injection durch. Sie erstellt ein neues {{HTMLElement("p")}}-Element (Absatz) und dann einen neuen [`Text`](/de/docs/Web/API/Text)-Knoten, der den Nachrichtentext enthält, der in der Eigenschaft `data` des Ereignisses empfangen wird. Dieser Textknoten wird als Kind an das neue Element angehängt, das dann in den Block `receiveBox` eingefügt wird, wodurch es im Browserfenster angezeigt wird.

### Die Peers trennen

Wenn der Benutzer auf die Schaltfläche „Disconnect“ klickt, wird die Methode `disconnectPeers()` aufgerufen, die zuvor als Handler dieser Schaltfläche festgelegt wurde.

```js live-sample___simple-data-channel
async function disconnectPeers() {
  if (disconnecting) {
    return;
  }
  disconnecting = true;
  connectButton.disabled = true;
  disconnectButton.disabled = true;
  sendButton.disabled = true;
  messageInputBox.disabled = true;

  function waitForClose(channel) {
    if (!channel || channel.readyState === "closed") {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      channel.addEventListener("close", resolve, { once: true });
    });
  }

  const closed = Promise.all([
    waitForClose(sendChannel),
    waitForClose(receiveChannel),
  ]);
  sendChannel?.close();
  receiveChannel?.close();
  // This sample has no timeout: if a close event never arrives,
  // cleanup remains pending and the controls stay disabled.
  // This shouldn't happen in practice.
  await closed;

  // Keep the peer connections alive until both channel close events have fired.
  localConnection?.close();
  remoteConnection?.close();
  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;

  // Update user interface elements

  disconnecting = false;
  connectButton.disabled = false;
  messageInputBox.value = "";
}
```

Der Aufruf von [`close()`](/de/docs/Web/API/RTCDataChannel/close) startet ein asynchrones Herunterfahren. Die Funktion `disconnectPeers()` wartet auf die `close`-Ereignisse beider Kanäle, bevor sie die zugrunde liegenden Peer-Verbindungen schließt und die Referenzen löscht. Ein sofortiges Schließen der Peer-Verbindungen kann diesen Vorgang unterbrechen und verhindern, dass die Handler für den Kanalstatus ausgeführt werden. Die Steuerelemente bleiben während des Herunterfahrens deaktiviert, sodass der Benutzer keine neue Verbindung starten kann, die diese Variablen überschreiben würde, bevor die Bereinigung abgeschlossen ist.

## Ergebnis

Klicken Sie auf „Connect“, geben Sie eine Nachricht ein und klicken Sie auf „Send“, um sie im Empfangsbereich anzuzeigen. Klicken Sie auf „Disconnect“, um die Verbindung zu schließen. Anschließend können Sie erneut eine Verbindung herstellen, um weitere Nachrichten zu senden.

{{EmbedLiveSample("simple-data-channel", "100%", 360)}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
- Das Muster [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation).
