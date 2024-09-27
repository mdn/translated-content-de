---
title: "Worker: postMessage()-Methode"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`postMessage()`**-Methode der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter sind die Daten, die an den Worker gesendet werden sollen. Die Daten können beliebige JavaScript-Objekte sein, die vom [structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden können.

Die [`Worker`](/de/docs/Web/API/Worker) `postMessage()`-Methode delegiert an die [`MessagePort`](/de/docs/Web/API/MessagePort) [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Methode, die eine Aufgabe in der Ereignisschleife hinzufügt, die dem empfangenden [`MessagePort`](/de/docs/Web/API/MessagePort) entspricht.

Der `Worker` kann Informationen an den Thread zurücksenden, der ihn mit der [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Methode gesendet hat.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker geliefert werden soll; es wird im `data`-Feld in dem Ereignis enthalten sein, das an das [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)-Ereignis geliefert wird. Dies kann ein beliebiger Wert oder ein JavaScript-Objekt sein, das vom [structured clone algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet wird, einschließlich zyklischer Referenzen.

    Der `message`-Parameter ist obligatorisch. Falls die an den Worker zu übergebenden Daten nicht wichtig sind, muss explizit `null` oder `undefined` übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum zu übertragen ist. Das Eigentum an diesen Objekten wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese transferierbaren Objekte sollten der Nachricht angehängt werden; andernfalls würden sie verschoben, aber auf der Empfangsseite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts unter Verwendung des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors. Wenn sich die Werte eines der beiden Formulareingaben (`first` und `second`) ändern, lösen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse `postMessage()` aus, um den Wert beider Eingaben an den aktuellen Worker zu senden.

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

> **Note:** `postMessage()` kann nur ein einzelnes Objekt gleichzeitig senden. Wie oben gezeigt, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

### Transfer-Beispiel

Dieses minimale Beispiel lässt `main` ein `ArrayBuffer` erstellen und an `myWorker` übertragen, dann lässt es `myWorker` zurück an `main` übertragen, wobei die Größe bei jedem Schritt protokolliert wird.

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

`byteLength` geht auf 0, nachdem das `ArrayBuffer` übertragen wurde. Für ein anspruchsvolleres, vollständig funktionierendes Beispiel der `ArrayBuffer`-Übertragung, siehe dieses Firefox-Demo-Add-on: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle, zu der sie gehört.
