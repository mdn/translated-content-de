---
title: "DedicatedWorkerGlobalScope: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `messageerror`-Ereignis wird auf einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Lauschen Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `messageerror`:

```js
// worker.js

self.addEventListener("messageerror", (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
});
```

Das Gleiche mit der Event-Handler-Eigenschaft `onmessageerror` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmessageerror` hinzugefügte Event-Listener ersetzt werden):

```js
// worker.js

self.onmessageerror = (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- Zugehöriges Ereignis: [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- [Channel Messaging verwenden](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
