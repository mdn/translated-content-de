---
title: "ReadableStream: getReader()-Methode"
short-title: getReader()
slug: Web/API/ReadableStream/getReader
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`getReader()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle erstellt einen Reader und sperrt den Stream für diesen. Solange der Stream gesperrt ist, kann kein anderer Reader erworben werden, bis dieser freigegeben wird.

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
        - `"byob"`, was die Erstellung eines [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) zur Folge hat, der lesbare Byte-Streams lesen kann (Streams, die eine Zero-Copy-Übertragung von einer zugrunde liegenden Byte-Quelle zum Reader unterstützen, wenn interne Stream-Puffer leer sind).
        - `undefined` (oder gar nicht angegeben — dies ist der Standardwert), was die Erstellung eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zur Folge hat, der einzelne Chunks aus einem Stream lesen kann.

### Rückgabewert

Eine Instanz eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) oder [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Objekts, abhängig vom Wert des `mode`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn der angegebene `mode`-Wert nicht `"byob"` oder `undefined` ist.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn der Stream, für den Sie versuchen, einen Reader zu erstellen, bereits gesperrt ist oder nicht ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist. Dies wird auch geworfen, wenn ein BYOB-Reader angefordert wird und der Stream-Controller kein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) ist (der Stream wurde nicht als zugrunde liegende Quelle mit [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) konstruiert).

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mit einem mit `getReader()` erstellten [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen. (siehe unser Beispiel für einen [einfachen zufälligen Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Jeder Chunk wird nacheinander gelesen und in die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde. Zu diesem Zeitpunkt verlassen wir die rekursive Funktion und geben den gesamten Stream an einem anderen Teil der Benutzeroberfläche aus.

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

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor
- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
- [Verwendung von Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von Readable Byte Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
