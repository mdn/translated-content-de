---
title: "MessagePort: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/MessagePort/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`messageerror`**-Ereignis wird bei einem [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt ausgelöst, wenn es eine Nachricht erhält, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und löst sich nicht nach oben (bubbelt nicht).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichten-Emitter gesendet wurden.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichten-Emitters repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichten-Emitter repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array, das alle [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die mit der Nachricht in Reihenfolge gesendet wurden.

## Beispiele

Angenommen, ein Skript erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und sendet einen der Ports an einen anderen Browsing-Kontext, wie zum Beispiel ein anderes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), mit einem Code wie diesem:

```js
const channel = new MessageChannel();
const myPort = channel.port1;
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";

const messageControl = document.querySelector("#message");
const channelMessageButton = document.querySelector("#channel-message");

channelMessageButton.addEventListener("click", () => {
  myPort.postMessage(messageControl.value);
});

targetFrame.postMessage("init", targetOrigin, [channel.port2]);
```

Das Ziel kann den Port empfangen und beginnen, Nachrichten und Nachrichtenfehler darauf zu hören, mit einem Code wie diesem:

```js
window.addEventListener("message", (event) => {
  const myPort = event.ports[0];

  myPort.addEventListener("message", (event) => {
    received.textContent = event.data;
  });

  myPort.addEventListener("messageerror", (event) => {
    console.error(event.data);
  });

  myPort.start();
});
```

Beachten Sie, dass der Listener [`MessagePort.start()`](/de/docs/Web/API/MessagePort/start) aufrufen muss, bevor Nachrichten an diesen Port gesendet werden. Dies ist nur nötig, wenn die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwendet wird: Wenn der Empfänger stattdessen `onmessage` verwendet, wird `start()` implizit aufgerufen:

```js
window.addEventListener("message", (event) => {
  const myPort = event.ports[0];

  myPort.onmessage = (event) => {
    received.textContent = event.data;
  };

  myPort.onmessageerror = (event) => {
    console.error(event.data);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`message`](/de/docs/Web/API/MessagePort/message_event).
- [Verwendung von Channel Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
