---
title: "Worker: message-Ereignis"
short-title: message
slug: Web/API/Worker/message_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das `message`-Ereignis wird auf einem [`Worker`](/de/docs/Web/API/Worker)-Objekt ausgelöst, wenn die übergeordnete Umgebung des Workers eine Nachricht von ihm empfängt (d.h. wenn der Worker eine Nachricht mit [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) sendet).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Dieser Code erstellt einen neuen Worker und empfängt dessen Nachrichten mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.log(`Received message from worker: ${event.data}`);
});
```

Alternativ können Sie die Nachrichten über die Event-Handler-Eigenschaft `onmessage` empfangen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmessage` hinzugefügte Event-Listener ersetzt werden:

```js
const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
};
```

Der Worker sendet Nachrichten mit [`self.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage):

```js
// static/scripts/worker.js

self.postMessage("I'm alive!");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/Worker/messageerror_event).
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage).
