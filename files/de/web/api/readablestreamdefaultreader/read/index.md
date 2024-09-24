---
title: "ReadableStreamDefaultReader: read()-Methode"
short-title: read()
slug: Web/API/ReadableStreamDefaultReader/read
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`**-Methode der {{domxref("ReadableStreamDefaultReader")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das Zugriff auf den nächsten Block in der internen Warteschlange des Streams bietet.

## Syntax

```js-nolint
read()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das je nach Zustand des Streams erfüllt bzw. abgelehnt wird.
Die verschiedenen Möglichkeiten sind wie folgt:

- Wenn ein Block verfügbar ist, wird das Promise mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Promise mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Promise mit dem entsprechenden Fehler abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader`, der Stream hat keinen Besitzer oder {{domxref("ReadableStreamDefaultReader.releaseLock()")}} wird aufgerufen (wenn eine ausstehende Leseanforderung besteht).

## Beispiele

### Beispiel 1 - einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung der API, behandelt jedoch keine Komplikationen wie z. B. Stream-Blöcke, die nicht an Zeilenenden enden.

In diesem Beispiel ist `stream` ein zuvor erstellter benutzerdefinierter `ReadableStream`.
Er wird mithilfe eines {{domxref("ReadableStreamDefaultReader")}} gelesen, der mit `getReader()` erstellt wurde.
(Siehe unser [einfaches Beispiel für einen zufälligen Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code).
Jeder Block wird nacheinander eingelesen und als Array von UTF-8-Bytes in die Benutzeroberfläche ausgegeben, bis der Strom vollständig gelesen wurde. Dann verlassen wir die rekursive Funktion und drucken den gesamten Stream an einer anderen Stelle der Benutzeroberfläche aus.

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() gibt ein Promise zurück, das erfüllt wird,
  // wenn ein Wert empfangen wurde
  reader.read().then(function processText({ done, value }) {
    // Result-Objekte enthalten zwei Eigenschaften:
    // done  - true, wenn der Stream Ihnen bereits alle seine Daten gegeben hat.
    // value - einige Daten. Immer undefined, wenn done true ist.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    // value für fetch-Streams ist ein Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Lesen Sie noch etwas mehr und rufen Sie diese Funktion erneut auf
    return reader.read().then(processText);
  });
}
```

### Beispiel 2 - Text zeilenweise verarbeiten

Dieses Beispiel zeigt, wie Sie eine Textdatei abrufen und als Stream von Textzeilen verarbeiten könnten.
Es behandelt Stream-Blöcke, die nicht an Zeilenenden enden, und die Umwandlung von `Uint8Array` in Strings.

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
    // die letzte Zeile endete nicht mit einem Zeilenumbruchzeichen
    yield chunk.substr(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
