---
title: "Worker: Methode postMessage()"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: 01b039d4aea1e02848e90999a0e0536d25e2fc2a
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`postMessage()`** Methode der [`Worker`](/de/docs/Web/API/Worker) Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter ist die Daten, die an den Worker gesendet werden sollen. Diese Daten können jedes JavaScript-Objekt sein, das vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden kann.

Die [`Worker`](/de/docs/Web/API/Worker) `postMessage()` Methode delegiert an die [`MessagePort`](/de/docs/Web/API/MessagePort) [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) Methode, welche eine Aufgabe in die Ereignisschleife einfügt, die dem empfangenden [`MessagePort`](/de/docs/Web/API/MessagePort) entspricht.

Der `Worker` kann Informationen an den Thread zurücksenden, der ihn erzeugt hat, mithilfe der [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) Methode.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker geliefert werden soll; dies wird im `data` Feld im Ereignis, das an das [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event) Ereignis geliefert wird, enthalten sein. Dies kann jeder Wert oder JavaScript-Objekt sein, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Algorithmus verarbeitet wird, einschließlich zyklischer Referenzen.

    Der `message` Parameter ist obligatorisch. Wenn die Daten, die an den Worker übergeben werden sollen, unwichtig sind, muss `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum an diesen Objekten wird der Zielseite übergeben und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten mit der Nachricht verbunden werden; andernfalls würden sie verschoben, aber auf der Empfangsseite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeabschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker) Objekts mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktors. Wenn eine der beiden Formulareingaben (`first` und `second`) geändert wird, lösen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse `postMessage()` aus, um den Wert beider Eingaben an den aktuellen Worker zu senden.

```js
const myWorker = new Worker("worker.js");

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Für ein vollständiges Beispiel siehe unser [einfaches Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([Beispiel ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` kann nur ein einziges Objekt auf einmal senden. Wie oben zu sehen ist, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

### Transfer-Beispiel

Dieses minimale Beispiel lässt `main` ein `ArrayBuffer` erstellen und an `myWorker` übertragen, dann lässt `myWorker` es zurück an `main` übertragen, wobei die Größe bei jedem Schritt protokolliert wird.

#### Haupt.js Code

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

#### Ausgabe protokolliert

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` wird nach der Übertragung des `ArrayBuffer` zu 0. Für ein komplexeres, vollständig funktionierendes Beispiel der `ArrayBuffer` Übertragung, siehe dieses Firefox-Demo-Addon: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Worker`](/de/docs/Web/API/Worker) Schnittstelle, zu der sie gehört.
