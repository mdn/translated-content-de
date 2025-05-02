---
title: "DedicatedWorkerGlobalScope: message event"
short-title: message
slug: Web/API/DedicatedWorkerGlobalScope/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `message`-Ereignis wird auf einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt ausgelöst, wenn der Worker eine Nachricht von seinem Elternteil erhält (d.h. wenn das Elternteil eine Nachricht mittels [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) sendet).

Dieses Ereignis ist nicht abbruchsicher und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
  - : Die Daten, die vom Nachrichtensender gesendet wurden.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein [`Window`](/de/docs/Web/API/Window), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), das den Nachrichtensender darstellt.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal assoziiert sind, durch den die Nachricht gesendet wird (wo zutreffend, z. B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen gemeinsamen Worker).

## Beispiel

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Nachrichten werden an den Worker übergeben, wenn sich der Wert im Formulareingabefeld `first` ändert. Ein [`onmessage`](/de/docs/Web/API/Worker/message_event)-Handler ist ebenfalls vorhanden, um Nachrichten zu bearbeiten, die vom Worker zurückgesendet werden.

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

Alternativ kann das Skript auf die Nachricht mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) lauschen:

```js
// worker.js

self.addEventListener("message", (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
});
```

Beachten Sie, dass im Hauptskript `onmessage` auf `myWorker` aufgerufen werden muss, während im Worker-Skript nur `onmessage` benötigt wird, da der Worker effektiv der globale Kontext ist ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)).

Ein vollständiges Beispiel finden Sie in unserem [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

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
