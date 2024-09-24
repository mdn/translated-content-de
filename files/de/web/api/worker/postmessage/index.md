---
title: "Worker: Methode postMessage()"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`postMessage()`**-Methode der {{domxref("Worker")}}-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter ist die zu sendenden Daten an den Worker. Die Daten können beliebige JavaScript-Objekte sein, die vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden können.

Die `postMessage()`-Methode von {{domxref("Worker")}} führt zur {{domxref("MessagePort")}}-{{domxref("MessagePort.postMessage", "postMessage()")}}-Methode, die eine Aufgabe in der Ereignisschleife hinzufügt, die dem empfangenden {{domxref("MessagePort")}} entspricht.

Der `Worker` kann Informationen zurück an den Thread senden, der ihn gestartet hat, indem er die {{domxref("DedicatedWorkerGlobalScope.postMessage")}}-Methode verwendet.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker übermittelt werden soll; dies befindet sich im `data`-Feld im Ereignis, das an das {{domxref("DedicatedWorkerGlobalScope.message_event", "message")}}-Ereignis zugestellt wird. Dies kann jeder Wert oder jedes JavaScript-Objekt sein, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus verarbeitet wird, einschließlich zyklischer Referenzen.

    Der `message`-Parameter ist obligatorisch. Wenn die an den Worker zu übermittelnden Daten unwichtig sind, muss `null` oder `undefined` ausdrücklich übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird an die Zielseite übergeben und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie zwar verschoben, sind aber tatsächlich nicht auf der Empfängerseite zugänglich.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines {{domxref("Worker")}}-Objekts mit dem {{domxref("Worker.Worker", "Worker()")}}-Konstruktor. Wenn einer der beiden Formulareingaben (`first` und `second`) ihre Werte ändern, lösen {{domxref("HTMLElement/change_event", "change")}}-Ereignisse `postMessage()` aus, um den Wert beider Eingaben an den aktuellen Worker zu senden.

```js
const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [einfaches Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([Beispiel ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` kann nur ein einzelnes Objekt auf einmal senden. Wie oben zu sehen, können Sie mehrere Werte übergeben, indem Sie ein Array senden.

### Transfer-Beispiel

Dieses Minimalbeispiel lässt `main` einen `ArrayBuffer` erstellen und ihn an `myWorker` übertragen, dann lässt es `myWorker` ihn an `main` zurück übertragen, wobei die Größe bei jedem Schritt protokolliert wird.

#### main.js Code

```js
// create worker
const myWorker = new Worker("myWorker.js");

// listen for myWorker to transfer the buffer back to main
myWorker.addEventListener("message", function handleMessageFromWorker(msg) {
  console.log("message from worker received in main:", msg);

  const bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength,
  );
});

// create the buffer
const myBuf = new ArrayBuffer(8);

console.log(
  "buf.byteLength in main BEFORE transfer to worker:",
  myBuf.byteLength,
);

// send myBuf to myWorker and transfer the underlying ArrayBuffer
myWorker.postMessage(myBuf, [myBuf]);

console.log(
  "buf.byteLength in main AFTER transfer to worker:",
  myBuf.byteLength,
);
```

#### myWorker.js Code

```js
// listen for main to transfer the buffer to myWorker
self.onmessage = function handleMessageFromMain(msg) {
  console.log("message from main received in worker:", msg);

  const bufTransferredFromMain = msg.data;

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength,
  );

  // send buf back to main and transfer the underlying ArrayBuffer
  self.postMessage(bufTransferredFromMain, [bufTransferredFromMain]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength,
  );
};
```

#### Protokollierte Ausgabe

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` wird nach der Übertragung des `ArrayBuffer` auf 0 gesetzt. Für ein ausführlicheres vollständiges Arbeitsbeispiel der `ArrayBuffer`-Übertragung siehe dieses Firefox-Demo-Add-On: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Worker")}}-Schnittstelle, zu der sie gehört.
