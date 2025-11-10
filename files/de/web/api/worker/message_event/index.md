---
title: "Worker: message Event"
short-title: message
slug: Web/API/Worker/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das `message`-Ereignis wird auf einem [`Worker`](/de/docs/Web/API/Worker)-Objekt ausgelöst, wenn die übergeordnete Instanz des Workers eine Nachricht von ihrem Worker erhält (d.h. wenn der Worker eine Nachricht mithilfe von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) sendet).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtenemittenten gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtenemittenten darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtenemittenten darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal verbundenen Ports darstellen, über die die Nachricht gesendet wird (wo zutreffend, z. B. beim Kanal-Messaging oder beim Senden einer Nachricht an einen gemeinsamen Worker).

## Beispiele

Dieser Code erstellt einen neuen Worker und hört Nachrichten von ihm mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab:

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.log(`Received message from worker: ${event.data}`);
});
```

Alternativ könnte er mit der `onmessage`-Ereignis-Handler-Eigenschaft abgehört werden:

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
