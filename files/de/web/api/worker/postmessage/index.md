---
title: "Worker: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`postMessage()`**-Methode des [`Worker`](/de/docs/Web/API/Worker)-Interfaces sendet eine Nachricht an den Worker. Der erste Parameter ist die zu sendenden Daten an den Worker. Die Daten können jedes JavaScript-Objekt sein, das durch den [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden kann.

Die [`Worker`](/de/docs/Web/API/Worker) `postMessage()`-Methode delegiert an die [`MessagePort`](/de/docs/Web/API/MessagePort) [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Methode, die eine Aufgabe in der Ereignisschleife hinzufügt, die dem empfangenden [`MessagePort`](/de/docs/Web/API/MessagePort) entspricht.

Der `Worker` kann Informationen zurück an den Thread senden, der ihn erzeugt hat, mithilfe der [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Methode.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker übermittelt werden soll; es wird im `data` Feld im Event erscheinen, das an das [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event) Event geliefert wird. Dies kann jeder Wert oder jedes JavaScript-Objekt sein, das durch den [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Algorithmus verarbeitet wird, einschließlich zyklischer Referenzen.

    Der `message`-Parameter ist obligatorisch. Wenn die an den Worker zu übergebenden Daten unwichtig sind, muss `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), um die Eigentümerschaft zu übertragen. Das Eigentum an diesen Objekten wird auf die Empfängerseite übertragen und sie sind auf der sendenden Seite nicht mehr nutzbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber auf der Empfängerseite nicht tatsächlich zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat dieselbe Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts unter Verwendung des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors. Wenn sich der Wert eines der beiden Formulareingaben (`first` und `second`) ändert, rufen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse `postMessage()` auf, um den Wert beider Eingaben an den aktuellen Worker zu senden.

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

> **Hinweis:** `postMessage()` kann nur ein einzelnes Objekt auf einmal senden. Wie oben gezeigt, können Sie, wenn Sie mehrere Werte übergeben möchten, ein Array senden.

### Übertragungsbeispiel

Dieses minimalistische Beispiel lässt den `main` ein `ArrayBuffer` erstellen und an `myWorker` übertragen, anschließend überträgt `myWorker` es zurück an `main`, wobei die Größe bei jedem Schritt geloggt wird.

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

#### Geloggte Ausgabe

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` wird nach der Übertragung des `ArrayBuffer` zu 0. Für ein anspruchsvolleres, vollständig funktionierendes Beispiel zur Übertragung von `ArrayBuffer`, schauen Sie sich dieses Firefox-Demo-Add-On an: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Worker`](/de/docs/Web/API/Worker)-Interface, zu dem es gehört.
