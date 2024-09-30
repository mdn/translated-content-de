---
title: "ReadableStreamDefaultReader: read() Methode"
short-title: read()
slug: Web/API/ReadableStreamDefaultReader/read
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`** Methode des [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Interfaces gibt ein {{jsxref("Promise")}} zurück, das Zugriff auf das nächste Stück im internen Warteschlangen des Streams bietet.

## Syntax

```js-nolint
read()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das je nach Zustand des Streams mit einem Ergebnis erfüllt/abgelehnt wird. Die verschiedenen Möglichkeiten sind wie folgt:

- Wenn ein Stück verfügbar ist, wird das Promise mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Promise mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Promise mit dem entsprechenden Fehler abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader`, der Stream hat keinen Besitzer, oder [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) wird aufgerufen (wenn es eine ausstehende Leseanforderung gibt).

## Beispiele

### Beispiel 1 - Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende API-Nutzung, versucht jedoch nicht, mit Komplikationen wie zum Beispiel Stream-Stücken, die nicht an Zeilengrenzen enden, umzugehen.

In diesem Beispiel ist `stream` ein zuvor erstellter benutzerdefinierter `ReadableStream`. Er wird mit einem [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) gelesen, der mit `getReader()` erstellt wurde. (siehe unser [Einfaches Zufallsstrombeispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Jedes Stück wird nacheinander gelesen und als Array von UTF-8-Bytes in die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen ist, woraufhin wir aus der rekursiven Funktion austreten und den gesamten Stream in einem anderen Teil der UI ausdrucken.

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

### Beispiel 2 - Text zeilenweise behandeln

Dieses Beispiel zeigt, wie Sie möglicherweise eine Textdatei abrufen und als Strom von Textzeilen behandeln. Es befasst sich mit Stream-Stücken, die nicht an Zeilengrenzen enden, und mit der Umwandlung von `Uint8Array` in Zeichenketten.

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk, { stream: true }) : "";

  let re = /\r\n|\n|\r/gm;
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
