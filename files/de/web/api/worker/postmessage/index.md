---
title: "Worker: postMessage() Methode"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`postMessage()`**-Methode der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle sendet eine Nachricht an den Worker. Der erste Parameter sind die Daten, die an den Worker gesendet werden sollen. Die Daten können jedes JavaScript-Objekt sein, das vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verarbeitet werden kann.

Die [`Worker`](/de/docs/Web/API/Worker) `postMessage()`-Methode leitet an die [`MessagePort`](/de/docs/Web/API/MessagePort) [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Methode weiter, die eine Aufgabe in der Ereignisschleife hinzufügt, die zum empfangenden [`MessagePort`](/de/docs/Web/API/MessagePort) gehört.

Der `Worker` kann Informationen an den Thread zurücksenden, der ihn erstellt hat, indem er die [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Methode verwendet.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameter

- `message`

  - : Das Objekt, das an den Worker gesendet werden soll; dies wird im `data`-Feld im Event platziert, das an das [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)-Ereignis geliefert wird. Dies kann jeder Wert oder jedes JavaScript-Objekt sein, das vom [structured clone](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus verarbeitet werden kann, einschließlich zyklischer Referenzen.

    Der `message`-Parameter ist obligatorisch. Wenn die an den Worker zu übergebenden Daten unwichtig sind, muss `null` oder `undefined` explizit übergeben werden.

- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) zur Übertragung des Eigentums an den Zielort. Das Eigentum dieser Objekte wird der Empfangsseite übergeben, und sie sind auf der sendenden Seite nicht mehr verwendbar. Diese übertragbaren Objekte sollten an die Nachricht angehängt werden; andernfalls würden sie verschoben, aber eigentlich nicht auf der Empfangsseite zugänglich sein.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Eigenschaften enthält:
    - `transfer` {{optional_inline}}
      - : Hat die gleiche Bedeutung wie der `transfer`-Parameter.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Wenn einer der beiden Formulareingaben (`first` und `second`) ihre Werte ändern, rufen `change`-Ereignisse `postMessage()` auf, um den Wert beider Eingaben an den aktuellen Worker zu senden.

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

> [!NOTE] > `postMessage()` kann nur ein einziges Objekt gleichzeitig senden. Wie oben gezeigt, können Sie ein Array senden, wenn Sie mehrere Werte übergeben möchten.

### Transferbeispiel

Dieses minimale Beispiel lässt `main` ein `ArrayBuffer` erstellen und an `myWorker` übertragen, und dann `myWorker` es zurück an `main` senden, wobei die Größe in jedem Schritt geloggt wird.

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

#### Ausgabe geloggt

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` reduziert sich auf 0, nachdem das `ArrayBuffer` übertragen wurde. Für ein ausgefeilteres vollständiges funktionierendes Beispiel für die Übertragung von `ArrayBuffer`, siehe dieses Firefox-Demo-Add-on: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle, zu der sie gehört.
