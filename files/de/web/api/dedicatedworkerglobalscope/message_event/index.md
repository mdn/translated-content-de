---
title: "DedicatedWorkerGlobalScope: message Ereignis"
short-title: message
slug: Web/API/DedicatedWorkerGlobalScope/message_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `message` Ereignis wird auf einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt ausgelöst, wenn der Worker eine Nachricht von seinem Elternteil erhält (d.h. wenn das Elternteil eine Nachricht mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) sendet).

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
  - : Die von dem Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtensenders repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [`Window`](/de/docs/Web/API/Window), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtensender repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports repräsentieren, die mit dem Kanal verbunden sind, durch den die Nachricht gesendet wird (wo zutreffend, z.B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiel

Der folgende Code-Schnipsel zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Nachrichten werden an den Worker gesendet, wenn sich der Wert im Formulareingabefeld `first` ändert. Ein [`onmessage`](/de/docs/Web/API/Worker/message_event)-Handler ist ebenfalls vorhanden, um Nachrichten zu bearbeiten, die vom Worker zurückgesendet werden.

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

Im `main.js`-Skript wird ein `onmessage`-Handler verwendet, um Nachrichten aus dem Worker-Skript zu bearbeiten:

```js
// main.js

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Alternativ kann das Skript für die Nachricht das [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
// worker.js

self.addEventListener("message", (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
});
```

Beachten Sie, wie im Hauptskript `onmessage` auf `myWorker` aufgerufen werden muss, während innerhalb des Worker-Skripts einfach `onmessage` ausreicht, da der Worker effektiv den globalen Gültigkeitsbereich ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)) darstellt.

Für ein vollständiges Beispiel siehe unser [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- [Verwendung von Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
