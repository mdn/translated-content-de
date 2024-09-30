---
title: "MessagePort: messageerror Ereignis"
short-title: messageerror
slug: Web/API/MessagePort/messageerror_event
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`messageerror`** Ereignis wird auf einem [`MessagePort`](/de/docs/Web/API/MessagePort) Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis ist nicht abbruchbar und unterliegt nicht dem Event-Bubbling.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichtensender gesendet wurden.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtensenders repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), die den Nachrichtensender repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort) Objekten, die die Ports repräsentieren, die mit dem Kanal verbunden sind, durch den die Nachricht gesendet wird (wo zutreffend, z.B. beim Kanal-Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Angenommen, ein Skript erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und sendet einen der Ports an einen anderen Browsing-Kontext, wie z.B. ein anderes [`<iframe>`](/de/docs/Web/HTML/Element/iframe), mit folgendem Code:

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

Das Ziel kann den Port empfangen und damit beginnen, Nachrichten und Nachrichtenfehler darauf zu empfangen, indem es folgenden Code verwendet:

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

Beachten Sie, dass der Listener [`MessagePort.start()`](/de/docs/Web/API/MessagePort/start) aufrufen muss, bevor Nachrichten an diesen Port übermittelt werden. Dies ist nur erforderlich, wenn die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird: Wenn der Empfänger stattdessen `onmessage` verwendet, wird `start()` implizit aufgerufen:

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
