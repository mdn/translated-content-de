---
title: "DedicatedWorkerGlobalScope: message Ereignis"
short-title: message
slug: Web/API/DedicatedWorkerGlobalScope/message_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `message`-Ereignis wird auf einem {{domxref('DedicatedWorkerGlobalScope')}}-Objekt ausgelöst, wenn der Worker eine Nachricht von seinem Elternteil erhält (d.h. wenn das Elternteil eine Nachricht mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) sendet).

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichtensender gesendet wurden.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Ein `MessageEventSource` (was ein {{domxref("Window")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}} Objekt sein kann), das den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die Ports repräsentieren, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (wenn zutreffend, z.B. beim Kanal-Messaging oder wenn eine Nachricht an einen Shared Worker gesendet wird).

## Beispiel

Das folgende Code-Snippet zeigt die Erstellung eines {{domxref("Worker")}}-Objekts unter Verwendung des {{domxref("Worker.Worker", "Worker()")}}-Konstruktors. Nachrichten werden an den Worker gesendet, wenn sich der Wert im Formulareingabefeld `first` ändert. Ein {{domxref("Worker.message_event", "onmessage")}}-Handler ist ebenfalls vorhanden, um mit Nachrichten umzugehen, die vom Worker zurückgeschickt werden.

```js
// main.js

const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

// worker.js

self.onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Im `main.js`-Skript wird ein `onmessage`-Handler verwendet, um Nachrichten aus dem Workerskript zu bearbeiten:

```js
// main.js

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Alternativ kann das Skript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf die Nachricht hören:

```js
// worker.js

self.addEventListener("message", (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
});
```

Beachten Sie, wie im Hauptskript `onmessage` auf `myWorker` aufgerufen werden muss, während im Workerskript nur `onmessage` benötigt wird, weil der Worker effektiv der globale Gültigkeitsbereich ist ({{domxref("DedicatedWorkerGlobalScope")}}).

Für ein vollständiges Beispiel siehe unser [Einfaches dediziertes Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DedicatedWorkerGlobalScope")}}
- {{domxref("WorkerGlobalScope")}}
- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- [Verwendung von Kanal-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
