---
title: "MessagePort: message-Ereignis"
short-title: message
slug: Web/API/MessagePort/message_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

Das **`message`**-Ereignis wird auf einem [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt ausgelöst, wenn auf diesem Kanal eine Nachricht eintrifft.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Angenommen, ein Skript erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und sendet einen der Ports an einen anderen Browsing-Kontext, beispielsweise an ein anderes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe). Dazu könnte es folgenden Code verwenden:

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

Der Zielkontext kann den Port empfangen und mit folgendem Code auf Nachrichten und Nachrichtenfehler an diesem Port warten:

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

Beachten Sie, dass der Listener [`MessagePort.start()`](/de/docs/Web/API/MessagePort/start) aufrufen muss, bevor Nachrichten an diesen Port zugestellt werden. Dies ist nur bei Verwendung der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erforderlich: Verwendet der Empfänger stattdessen `onmessage`, wird `start()` implizit aufgerufen. Das folgende Beispiel verwendet `onmessage` und `onmessageerror`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmessage` und `onmessageerror` hinzugefügte Ereignis-Listener ersetzt werden:

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

- Verwandtes Ereignis: [`messageerror`](/de/docs/Web/API/MessagePort/messageerror_event).
- [Channel Messaging verwenden](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
