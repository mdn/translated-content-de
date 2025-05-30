---
title: "Worker: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`postMessage()`** Methode des [`Worker`](/de/docs/Web/API/Worker)-Interfaces sendet eine Nachricht an den Worker. Der erste Parameter ist die Daten, die an den Worker gesendet werden sollen. Diese Daten können jedes JavaScript-Objekt sein, das durch den [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden kann.

Die [`Worker`](/de/docs/Web/API/Worker) `postMessage()` Methode delegiert an die [`MessagePort`](/de/docs/Web/API/MessagePort) [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) Methode, die eine Aufgabe in der Ereignisschleife des empfangenden [`MessagePort`](/de/docs/Web/API/MessagePort) hinzufügt.

Der `Worker` kann Informationen an den Thread zurücksenden, der ihn erstellt hat, indem er die [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) Methode verwendet.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das dem Worker übermittelt werden soll; dies wird im `data`-Feld des an das [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event) Ereignis gelieferten Ereignisses sein. Dies kann jeder Wert oder ein JavaScript-Objekt sein, das vom [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet wird, einschließlich zyklischer Referenzen.

    Der `message` Parameter ist obligatorisch. Wenn die an den Worker zu übermittelnden Daten unwichtig sind, muss `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), deren Eigentum übertragen werden soll. Das Eigentum dieser Objekte wird auf die Zielseite übertragen und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten der Nachricht angehängt werden; andernfalls würden sie verschoben, aber auf der empfangenden Seite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer` Parameter.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts unter Verwendung des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors. Wenn einer der beiden Formulareingaben (`first` und `second`) ihre Werte ändern, rufen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse `postMessage()` auf, um den Wert beider Eingaben an den aktuellen Worker zu senden.

```js
const myWorker = new Worker("worker.js");

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Ein vollständiges Beispiel finden Sie in unserem [einfachen Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([Beispiel ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Hinweis:** `postMessage()` kann nur ein einzelnes Objekt gleichzeitig senden. Wie oben zu sehen, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

### Übertragungsbeispiel

Dieses Minimalbeispiel lässt `main` ein `ArrayBuffer` erstellen und an `myWorker` übertragen, dann lässt es `myWorker` zurück an `main` übertragen, wobei die Größe bei jedem Schritt protokolliert wird.

#### main.js Code

```js
// create worker
const myWorker = new Worker("myWorker.js");

// listen for myWorker to transfer the buffer back to main
myWorker.addEventListener("message", (msg) => {
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
self.onmessage = (msg) => {
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

#### Ausgegebene Protokolle

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` wird nach der Übertragung des `ArrayBuffer` zu 0. Ein anspruchsvolleres vollständiges funktionierendes Beispiel für die Übertragung von `ArrayBuffer` finden Sie in diesem Firefox-Demo-Add-on: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Worker`](/de/docs/Web/API/Worker) Interface, zu dem es gehört.
