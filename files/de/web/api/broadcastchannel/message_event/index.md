---
title: "BroadcastChannel: message Ereignis"
short-title: message
slug: Web/API/BroadcastChannel/message_event
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`message`** Ereignis der {{domxref("BroadcastChannel")}} Schnittstelle wird ausgelöst, wenn eine Nachricht auf diesem Kanal eintrifft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })
onmessage = (event) => { }
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichtensender gesendet wurden.
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtensenders repräsentiert.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : Eine _Nachrichtenereignisquelle_, die entweder ein {{glossary("WindowProxy")}}, ein {{domxref("MessagePort")}} oder ein {{domxref("ServiceWorker")}} Objekt darstellt, das den Nachrichtensender repräsentiert.
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}} Objekten, die die Ports darstellen, die mit dem Kanal assoziiert sind, durch den die Nachricht gesendet wird (wo zutreffend, z.B. im Kanalnachrichtenverkehr oder beim Senden einer Nachricht an einen gemeinsamen Worker).

## Beispiele

In diesem Beispiel gibt es einen "Sender" {{HTMLElement("iframe")}}, der den Inhalt einer {{HTMLElement("textarea")}} überträgt, wenn der Benutzer auf eine Schaltfläche klickt. Es gibt zwei "Empfänger"-Iframes, die auf die Broadcast-Nachricht hören und das Ergebnis in ein {{HTMLElement("div")}} Element schreiben.

### Sender

```html hidden
<h1>Sender</h1>
<label for="message">Geben Sie eine Nachricht ein, die gesendet werden soll:</label><br />
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Nachricht senden</button>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 150px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}

textarea {
  padding: 0.2rem;
}

label,
br {
  margin: 0.5rem 0;
}

button {
  vertical-align: top;
  height: 1.5rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
const messageControl = document.querySelector("#message");
const broadcastMessageButton = document.querySelector("#broadcast-message");

broadcastMessageButton.addEventListener("click", () => {
  channel.postMessage(messageControl.value);
});
```

### Empfänger 1

```html hidden
<h1>Empfänger 1</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### Empfänger 2

```html hidden
<h1>Empfänger 2</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### Ergebnis

{{ EmbedLiveSample('Sender', '100%', 220) }}

{{ EmbedLiveSample('Receiver_1', '100%', 160) }}

{{ EmbedLiveSample('Receiver_2', '100%', 160) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("BroadcastChannel/messageerror_event", "messageerror")}}.
