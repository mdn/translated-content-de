---
title: "ReadableStream: getReader()-Methode"
short-title: getReader()
slug: Web/API/ReadableStream/getReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`getReader()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle erstellt einen Reader und sperrt den Stream dafür. Solange der Stream gesperrt ist, kann kein anderer Reader erworben werden, bis dieser freigegeben wird.

## Syntax

```js-nolint
getReader()
getReader(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `mode` {{optional_inline}}

      - : Eine Eigenschaft, die den Typ des zu erstellenden Readers angibt.
        Mögliche Werte sind:

        - `"byob"`, was zur Erstellung eines [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) führt, der lesbare Byte-Ströme lesen kann (Ströme, die die Null-Kopie-Übertragung von einer zugrunde liegenden Byte-Quelle zum Reader unterstützen, wenn interne Stream-Puffer leer sind).
        - `undefined` (oder gar nicht angegeben — das ist der Standard), was zur Erstellung eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) führt, der einzelne Brocken aus einem Stream lesen kann.

### Rückgabewert

Ein Objektinstanz vom Typ [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) oder [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), abhängig vom `mode`-Wert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der bereitgestellte Moduswert nicht `"byob"` oder `undefined` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Stream, für den Sie einen Reader erstellen möchten, bereits gesperrt ist oder kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.
    Dies wird auch ausgelöst, wenn ein BYOB-Reader angefordert wird und der Stream-Controller kein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) ist (der Stream wurde nicht [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) als zugrunde liegende Quelle mit [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type)).

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mithilfe eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen, der mit `getReader()` erstellt wurde.
(Siehe unser [Einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code).
Jeder Brocken wird nacheinander gelesen und in die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde, woraufhin wir aus der rekursiven Funktion austreten und den gesamten Stream in einem anderen Teil der Benutzeroberfläche ausgeben.

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
      para.textContent = value;
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

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von lesbaren Byte-Strömen](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
