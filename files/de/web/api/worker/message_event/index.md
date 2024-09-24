---
title: "Worker: Nachrichtenereignis"
short-title: Nachricht
slug: Web/API/Worker/message_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das `message`-Ereignis wird auf einem {{domxref('Worker')}}-Objekt ausgelöst, wenn der übergeordnete Prozess des Workers eine Nachricht von seinem Worker erhält (d. h. wenn der Worker eine Nachricht mit [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) sendet).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (das ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}} Objekt sein kann), das den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal assoziierten Ports darstellen, über den die Nachricht gesendet wird (falls zutreffend, z. B. beim Channel-Messaging oder beim Senden einer Nachricht an einen Shared-Worker).

## Beispiele

Dieser Code erstellt einen neuen Worker und hört auf Nachrichten davon mit Hilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.log(`Received message from worker: ${event.data}`);
});
```

Alternativ könnte es mit der `onmessage`-Ereignis-Handler-Eigenschaft lauschen:

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
