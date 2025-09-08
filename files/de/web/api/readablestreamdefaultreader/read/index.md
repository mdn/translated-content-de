---
title: "ReadableStreamDefaultReader: read() Methode"
short-title: read()
slug: Web/API/ReadableStreamDefaultReader/read
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`** Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das Zugriff auf den nächsten Chunk in der internen Warteschlange des Streams bietet.

## Syntax

```js-nolint
read()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das basierend auf dem Zustand des Streams ein Ergebnis erfüllt/ablehnt.
Die verschiedenen Möglichkeiten sind wie folgt:

- Wenn ein Chunk verfügbar ist, wird das Promise mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Promise mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Promise mit dem entsprechenden Fehler abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader`, der Stream hat keinen Besitzer, oder [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) wird aufgerufen (wenn eine ausstehende Leseanforderung vorhanden ist).

## Beispiele

### Beispiel 1 - einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Nutzung der API, aber versucht nicht, mit Komplikationen wie Stream-Chunks umzugehen, die beispielsweise nicht an Zeilenenden enden.

In diesem Beispiel ist `stream` ein zuvor erstellter benutzerdefinierter `ReadableStream`.
Er wird unter Verwendung eines mit `getReader()` erstellten [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen.
(sehen Sie sich unser [Einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code an).
Jeder Chunk wird nacheinander gelesen und als Array von UTF-8-Bytes an die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde, woraufhin wir aus der rekursiven Funktion zurückkehren und den gesamten Stream in einem anderen Teil der Benutzeroberfläche ausgeben.

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() returns a promise that fulfills
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

### Beispiel 2 - Text zeilenweise verarbeiten

Dieses Beispiel zeigt, wie Sie eine Textdatei abrufen und als Stream von Textzeilen verarbeiten könnten.
Es behandelt Stream-Chunks, die nicht an Zeilenenden enden, und die Umwandlung von `Uint8Array` in Zeichenfolgen.

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk, { stream: true }) : "";

  let re = /\r?\n/g;
  let startIndex = 0;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substring(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk =
        remainder + (chunk ? utf8Decoder.decode(chunk, { stream: true }) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substring(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader) Konstruktor
- [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams)
