---
title: "ReadableStream: tee() Methode"
short-title: tee()
slug: Web/API/ReadableStream/tee
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`tee()`** Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream) Schnittstelle [verzweigt](https://streams.spec.whatwg.org/#tee-a-readable-stream) den aktuellen lesbaren Stream und gibt ein zweielementiges Array zurück, das die beiden resultierenden Zweige als neue [`ReadableStream`](/de/docs/Web/API/ReadableStream) Instanzen enthält.

Dies ist nützlich, um zwei Lesern zu ermöglichen, einen Stream nacheinander oder gleichzeitig zu lesen, möglicherweise mit unterschiedlichen Geschwindigkeiten. Zum Beispiel könnten Sie dies in einem ServiceWorker tun, wenn Sie eine Antwort vom Server abrufen und an den Browser streamen, aber auch an den ServiceWorker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal verbraucht werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Ein verzweigter Stream signalisiert teilweise den Rückdruck in der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden `ReadableStream`-Zweige, und nicht gelesene Daten werden intern auf dem langsamer konsumierten `ReadableStream` ohne Begrenzung oder Rückdruck in einer Warteschlange eingeordnet. Das heißt, wenn _beide_ Zweige ein ungelesenes Element in ihrer internen Warteschlange haben, wird die interne Warteschlange des Controllers des ursprünglichen `ReadableStream` gefüllt, und sobald seine [`desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) ≤ 0 oder der Byte-Stream-Controller [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) ≤ 0 ist, stoppt der Controller das Aufrufen von `pull(controller)` auf der übergeordneten Quelle, die an [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben wurde. Wenn nur ein Zweig konsumiert wird, wird der gesamte Körper im Speicher eingeordnet. Daher sollten Sie die eingebaute `tee()` nicht verwenden, um sehr große Streams parallel mit unterschiedlichen Geschwindigkeiten zu lesen. Suchen Sie stattdessen nach einer Implementierung, die den Rückdruck vollständig auf die Geschwindigkeit des _langsamer_ konsumierten Zweiges ausübt.

Um den Stream zu beenden, müssen Sie dann beide resultierenden Zweige abbrechen. Das Verzweigen eines Streams wird diesen in der Regel für die Dauer sperren, was verhindert, dass andere Leser ihn sperren.

## Syntax

```js-nolint
tee()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}}, das zwei [`ReadableStream`](/de/docs/Web/API/ReadableStream) Instanzen enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Quellstream kein `ReadableStream` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter Stream verzweigt, dann werden beide resultierenden Streams (die in zwei Elementen eines generierten Arrays enthalten sind) an eine Funktion übergeben, die die Daten aus den beiden Streams liest und die einzelnen Datenblöcke jedes Streams sequentiell an einem anderen Teil der Benutzeroberfläche ausgibt. Sehen Sie sich das [einfache Verzweigungsexample](https://mdn.github.io/dom-examples/streams/simple-tee-example/) für den vollständigen Code an.

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

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [Verzweigung eines Streams](/de/docs/Web/API/Streams_API/Using_readable_streams#teeing_a_stream)
