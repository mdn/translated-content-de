---
title: "ReadableStreamDefaultReader: ReadableStreamDefaultReader() Konstruktor"
short-title: ReadableStreamDefaultReader()
slug: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStreamDefaultReader()`**
Konstruktor erstellt und gibt eine Instanz eines `ReadableStreamDefaultReader`-Objekts zurück.

> [!NOTE]
> In der Regel würden Sie diesen Konstruktor nicht manuell verwenden; stattdessen
> würden Sie die Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) verwenden.

## Syntax

```js-nolint
new ReadableStreamDefaultReader(stream)
```

### Parameter

- `stream`
  - : Der [`ReadableStream`](/de/docs/Web/API/ReadableStream), der gelesen werden soll.

### Rückgabewert

Eine Instanz des [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft einen Fehler, wenn der übergebene `stream`-Parameter kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist,
    oder er bereits von einem anderen Reader zum Lesen gesperrt ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter
`ReadableStream` mithilfe eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
gelesen, der mit `getReader()` erstellt wird. (siehe unser [Einfaches Zufallsstrombeispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Jeder Chunk wird nacheinander gelesen und in der Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde. Dann verlassen wir die rekursive Funktion und geben den gesamten Stream in einem anderen Teil der Benutzeroberfläche aus.

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

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
