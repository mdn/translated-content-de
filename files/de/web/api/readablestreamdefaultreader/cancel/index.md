---
title: "ReadableStreamDefaultReader: cancel() Methode"
short-title: cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`** Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Durch das Aufrufen dieser Methode signalisiert ein Verbraucher sein Desinteresse am Stream.

`cancel()` wird verwendet, wenn Sie mit dem Stream vollständig fertig sind und keine weiteren Daten daraus benötigen, selbst wenn es noch Warteschlangen gibt, die darauf warten, gelesen zu werden. Diese Daten gehen verloren, nachdem `cancel` aufgerufen wurde, und der Stream ist nicht mehr lesbar. Um diese Daten trotzdem zu lesen und den Stream nicht vollständig loszuwerden, würden Sie [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) verwenden.

> [!NOTE]
> Wenn der Leser aktiv ist, verhält sich die
> `cancel()` Methode genauso wie die für den zugehörigen Stream
> ([`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein humanlesbarer Grund für die Stornierung. Dieser Wert wird möglicherweise verwendet oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit dem im `reason`
Parameter angegebenen Wert erfüllt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader`, oder der Stream
    hat keinen Besitzer.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter
`ReadableStream` mit einem [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen, der mit `getReader()` erstellt wurde. (Dieser Code basiert auf unserem [einfachen Zufallsstrombeispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/)). Jeder Chunk wird nacheinander gelesen und in der Benutzeroberfläche ausgegeben, bis der
Stream fertig gelesen ist. An diesem Punkt beenden wir die rekursive Funktion und geben den gesamten Stream an einem anderen Teil der Benutzeroberfläche aus.

Wenn der Stream fertig ist (`if (done)`), führen wir `reader.cancel()` aus,
um den Stream abzubrechen, was signalisiert, dass wir ihn nicht mehr benötigen.

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

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader) Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
