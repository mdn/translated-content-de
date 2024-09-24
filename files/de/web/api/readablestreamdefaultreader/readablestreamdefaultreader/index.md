---
title: "ReadableStreamDefaultReader: ReadableStreamDefaultReader() Konstruktor"
short-title: ReadableStreamDefaultReader()
slug: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStreamDefaultReader()`**-Konstruktor erstellt und gibt eine Instanz des `ReadableStreamDefaultReader`-Objekts zurück.

> [!NOTE]
> Im Allgemeinen würden Sie diesen Konstruktor nicht manuell verwenden; stattdessen würden Sie die Methode {{domxref("ReadableStream.getReader()")}} verwenden.

## Syntax

```js-nolint
new ReadableStreamDefaultReader(stream)
```

### Parameter

- `stream`
  - : Der zu lesende {{domxref("ReadableStream")}}.

### Rückgabewert

Eine Instanz des {{domxref("ReadableStreamDefaultReader")}}-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `stream`-Parameter kein {{domxref("ReadableStream")}} ist oder bereits für das Lesen durch einen anderen Leser gesperrt ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mithilfe eines mit `getReader()` erstellten {{domxref("ReadableStreamDefaultReader")}} gelesen. (siehe unser [Einfaches Zufallsstrombeispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Jeder Block wird der Reihe nach gelesen und an die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde. Zu diesem Zeitpunkt kehren wir aus der rekursiven Funktion zurück und geben den gesamten Stream an einem anderen Teil der Benutzeroberfläche aus.

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

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- {{domxref("ReadableStreamDefaultController")}}
