---
title: "ReadableStreamDefaultReader: cancel()-Methode"
short-title: cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`**-Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Der Aufruf dieser Methode signalisiert einem Verbraucher das Desinteresse am Stream.

`cancel()` wird verwendet, wenn Sie den Stream vollständig abgeschlossen haben und keine weiteren Daten mehr benötigen, auch wenn es noch wartende Chunks gibt, die gelesen werden müssen. Diese Daten gehen verloren, nachdem `cancel()` aufgerufen wurde, und der Stream ist nicht mehr lesbar. Um diese Chunks trotzdem zu lesen und den Stream nicht vollständig zu beenden, würden Sie [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) verwenden.

> [!NOTE]
> Wenn der Reader aktiv ist, verhält sich die `cancel()`-Methode genauso wie die des zugehörigen Streams ([`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein für Menschen lesbarer Grund für die Abbruche. Dieser Wert kann verwendet werden oder auch nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem im `reason`-Parameter angegebenen Wert erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader`, oder der Stream hat keinen Eigentümer.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mithilfe eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen, der mit `getReader()` erstellt wurde. (Dieser Code basiert auf unserem [einfachen Zufallsstream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/)). Jeder Chunk wird nacheinander gelesen und in der Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde. An diesem Punkt verlassen wir die rekursive Funktion und geben den gesamten Stream in einem anderen Teil der Benutzeroberfläche aus.

Wenn der Stream beendet ist (`if (done)`), führen wir `reader.cancel()` aus, um den Stream abzubrechen und zu signalisieren, dass wir ihn nicht mehr benötigen.

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      reader.cancel();
      para.textContent = result;
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)-Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
