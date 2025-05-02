---
title: "BroadcastChannel: message event"
short-title: message
slug: Web/API/BroadcastChannel/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

Das **`message`**-Ereignis der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle wird ausgelöst, wenn eine Nachricht auf diesem Kanal eingeht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine _message event source_, die entweder ein {{Glossary("WindowProxy", "WindowProxy")}}, ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt ist, das den Nachrichtensender darstellt.
- [`ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, das die mit dem Kanal verbundenen Ports darstellt, durch den die Nachricht gesendet wird (sofern zutreffend, z. B. bei der Kanalnachrichtenübermittlung oder beim Senden einer Nachricht an einen gemeinsam genutzten Worker).

## Beispiele

In diesem Beispiel gibt es einen "Sender" {{HTMLElement("iframe")}}, der den Inhalt eines {{HTMLElement("textarea")}} sendet, wenn der Benutzer auf einen Knopf klickt. Es gibt zwei "Empfänger"-Iframes, die auf die Broadcast-Nachricht hören und das Ergebnis in ein {{HTMLElement("div")}}-Element schreiben.

### Sender

```html hidden
<h1>Sender</h1>
<label for="message">Type a message to broadcast:</label><br />
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Broadcast message</button>
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
<h1>Receiver 1</h1>
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
<h1>Receiver 2</h1>
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

- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event).
