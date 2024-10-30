---
title: "MessagePort: message-Ereignis"
short-title: message
slug: Web/API/MessagePort/message_event
l10n:
  sourceCommit: ec8d6cfcaae740f7dfad264b797eebe448085a2b
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`message`**-Ereignis wird bei einem [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt ausgelöst, wenn eine Nachricht auf diesem Kanal ankommt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array, das alle [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die zusammen mit der Nachricht gesendet wurden, in Reihenfolge.

## Beispiele

Angenommen, ein Skript erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und sendet einen der Ports an einen anderen Browsing-Kontext, wie z.B. ein anderes [`<iframe>`](/de/docs/Web/HTML/Element/iframe), mit einem Code wie diesem:

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

Das Ziel kann den Port empfangen und beginnen, mit einem Code wie diesem darauf Nachrichten zu empfangen:

```js
window.addEventListener("message", (event) => {
  const myPort = event.ports[0];

  myPort.addEventListener("message", (event) => {
    received.textContent = event.data;
  });

  myPort.start();
});
```

Beachten Sie, dass der Listener [`MessagePort.start()`](/de/docs/Web/API/MessagePort/start) aufrufen muss, bevor Nachrichten an diesen Port zugestellt werden. Dies ist nur erforderlich, wenn die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwendet wird: Wenn der Empfänger stattdessen `onmessage` verwendet, wird `start()` implizit aufgerufen:

```js
window.addEventListener("message", (event) => {
  const myPort = event.ports[0];

  myPort.onmessage = (event) => {
    received.textContent = event.data;
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/MessagePort/messageerror_event).
- [Verwendung von Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
