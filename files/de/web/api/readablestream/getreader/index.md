---
title: "ReadableStream: getReader()-Methode"
short-title: getReader()
slug: Web/API/ReadableStream/getReader
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`getReader()`**-Methode des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Interfaces erstellt einen Reader und sperrt den Stream dafür.
Während der Stream gesperrt ist, kann kein anderer Reader erworben werden, bis dieser freigegeben wird.

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
        Die Werte können sein:
        - `"byob"`, wodurch ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) erstellt wird, der lesbare Byte-Streams lesen kann (Streams, die beim Leeren der internen Stream-Puffer einen Zero-Copy-Transfer von einer zugrunde liegenden Byte-Quelle zum Reader unterstützen).
        - `undefined` (oder gar nicht angegeben — dies ist der Standard), wodurch ein [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) erstellt wird, der einzelne Chunks aus einem Stream lesen kann.

### Rückgabewert

Ein [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- oder [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Objektinstanz, abhängig vom Wert von `mode`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Moduswert nicht `"byob"` oder `undefined` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Stream, für den Sie einen Reader erstellen möchten, bereits gesperrt oder kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.
    Dies wird auch ausgelöst, wenn ein BYOB-Reader angefordert wird und der Stream-Controller kein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) ist (der Stream wurde nicht als zugrunde liegende Quelle mit [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream)).

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mit einem [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen, der mit `getReader()` erstellt wurde.
(Siehe unser [Beispiel für einen einfachen Zufallsstream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code).
Jeder Chunk wird nacheinander gelesen und in die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde. An diesem Punkt beenden wir die Rekursivfunktion und geben den gesamten Stream an einem anderen Teil der Benutzeroberfläche aus.

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
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
