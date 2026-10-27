---
title: "DedicatedWorkerGlobalScope: message-Ereignis"
short-title: message
slug: Web/API/DedicatedWorkerGlobalScope/message_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Das `message`-Ereignis wird auf einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt ausgelöst, wenn der Worker eine Nachricht von seinem übergeordneten Kontext empfängt (d.h. wenn dieser eine Nachricht mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) sendet).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

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

## Beispiel

Der folgende Codeausschnitt zeigt, wie mit dem Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) ein [`Worker`](/de/docs/Web/API/Worker)-Objekt erstellt wird. Wenn sich der Wert im Formulareingabefeld `first` ändert, werden Nachrichten an den Worker gesendet. Außerdem ist ein [`onmessage`](/de/docs/Web/API/Worker/message_event)-Handler vorhanden, der die vom Worker zurückgesendeten Nachrichten verarbeitet.

```js
// main.js

const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Der Worker weist seinem globalen Gültigkeitsbereich einen `onmessage`-Handler zu (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onmessage` hinzugefügte Event-Listener ersetzt werden):

```js
// worker.js

self.onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Alternativ kann das Worker-Skript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf die Nachricht lauschen:

```js
// worker.js

self.addEventListener("message", (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
});
```

Beachten Sie, dass `onmessage` im Hauptskript auf `myWorker` definiert werden muss. Innerhalb des Worker-Skripts genügt dagegen `onmessage`, da der Worker selbst den globalen Gültigkeitsbereich ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)) darstellt.

Ein vollständiges Beispiel finden Sie unter [Einfaches Beispiel für einen Dedicated Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([Dedicated Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)
- [Channel Messaging verwenden](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
