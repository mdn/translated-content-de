---
title: "ReadableStreamDefaultReader: read() Methode"
short-title: read()
slug: Web/API/ReadableStreamDefaultReader/read
l10n:
  sourceCommit: bccce51ad7f3fd5e5ff7e4231b6391a000c8faf6
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`** Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das Zugriff auf das nächste Stück in der internen Warteschlange des Streams bietet.

## Syntax

```js-nolint
read()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das abhängig vom Zustand des Streams erfüllt/abgelehnt wird.
Die verschiedenen Möglichkeiten sind wie folgt:

- Wenn ein Stück verfügbar ist, wird das Promise mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Promise mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Promise mit dem entsprechenden Fehler abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader`, der Stream hat keinen Besitzer, oder [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) wird aufgerufen (wenn eine ausstehende Leseanforderung vorhanden ist).

## Beispiele

### Beispiel 1 - einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Nutzung der API, versucht jedoch nicht, mit Komplikationen wie Stream-Chunks umzugehen, die nicht an Zeilengrenzen enden, zum Beispiel.

In diesem Beispiel ist `stream` ein zuvor erstellter benutzerdefinierter `ReadableStream`.
Er wird mit einem [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen, der mit `getReader()` erstellt wurde.
(Siehe unser [Einfaches zufälliges Stream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den gesamten Code).
Jedes Stück wird nacheinander gelesen und der Benutzeroberfläche als ein Array von UTF-8 Bytes ausgegeben, bis der Stream zu Ende gelesen ist. Dann verlassen wir die rekursive Funktion und geben den gesamten Stream an einem anderen Teil der Benutzeroberfläche aus.

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

### Beispiel 2 - Zeilenweises Handhaben von Text

Dieses Beispiel zeigt, wie Sie möglicherweise eine Textdatei abrufen und als Stream von Textzeilen verarbeiten könnten.
Es geht mit Stream-Chunks um, die nicht an Zeilengrenzen enden, und mit der Umwandlung von `Uint8Array` zu Strings.

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
      let remainder = chunk.substr(startIndex);
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
    yield chunk.substr(startIndex);
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
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
