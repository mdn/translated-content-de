---
title: "ReadableStream: tee()-Methode"
short-title: tee()
slug: Web/API/ReadableStream/tee
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`tee()`**-Methode der
[`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle [teilt](https://streams.spec.whatwg.org/#tee-a-readable-stream) den aktuellen lesbaren Stream und gibt ein
Array mit zwei Elementen zurück, das die beiden resultierenden Zweige als
neue [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanzen enthält.

Dies ist nützlich, um zwei Lesern zu ermöglichen, einen Stream nacheinander oder gleichzeitig,
vielleicht mit unterschiedlichen Geschwindigkeiten, zu lesen.
Zum Beispiel könnte dies in einem ServiceWorker nützlich sein, wenn Sie eine
Antwort vom Server abrufen und sie an den Browser streamen, aber auch an den
ServiceWorker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Ein geteilter Stream signalisiert teilweisen Rückstau mit der Rate des _schnelleren_ Verbrauchers
der beiden `ReadableStream`-Zweige,
und ungelesene Daten werden intern im langsamer konsumierten `ReadableStream` ohne Begrenzung oder Rückstau im Puffer gespeichert.
Das heißt, wenn _beide_ Zweige ein ungelesenes Element in ihrer internen Warteschlange haben,
dann wird die interne Warteschlange des Controllers des ursprünglichen `ReadableStream` beginnen sich zu füllen,
und sobald seine [`desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) ≤ 0
oder die des Byte-Stream-Controllers [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) ≤ 0,
wird der Controller aufhören, `pull(controller)` auf der
an [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) übergebenen zugrundeliegenden Quelle aufzurufen.
Wenn nur ein Zweig konsumiert wird, wird der gesamte Körper im Speicher gespeichert.
Daher sollten Sie die eingebaute `tee()` nicht verwenden, um sehr große Streams
parallel mit unterschiedlichen Geschwindigkeiten zu lesen.
Suchen Sie stattdessen nach einer Implementierung, die den Rückstau vollständig
an die Geschwindigkeit des _langsamer_ konsumierten Zweiges anpasst.

Um den Stream abzubrechen, müssen Sie dann beide resultierenden Zweige abbrechen. Das Teilen eines Streams
wird ihn generell für die Dauer sperren, um zu verhindern, dass andere Leser ihn sperren.

## Syntax

```js-nolint
tee()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}}, das zwei [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanzen enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Quellstream kein `ReadableStream` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter Stream geteilt und dann werden beide
resultierenden Streams (enthalten in zwei Mitgliedern eines generierten Arrays) an eine
Funktion übergeben, die die Daten aus den beiden Streams liest und die Chunks jedes Streams
nacheinander an verschiedenen Teilen der Benutzeroberfläche ausgibt. Siehe [einfaches Tee-Beispiel](https://mdn.github.io/dom-examples/streams/simple-tee-example/) für den vollständigen Code.

```js
function teeStream() {
  const teedOff = stream.tee();
  fetchStream(teedOff[0], list2);
  fetchStream(teedOff[1], list3);
}

function fetchStream(stream, list) {
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
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list.appendChild(listItem);

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
- [Einen Stream teilen](/de/docs/Web/API/Streams_API/Using_readable_streams#teeing_a_stream)
