---
title: "ReadableStream: tee()-Methode"
short-title: tee()
slug: Web/API/ReadableStream/tee
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`tee()`**-Methode der {{domxref("ReadableStream")}}-Schnittstelle [verzweigt](https://streams.spec.whatwg.org/#tee-a-readable-stream) den aktuellen lesbaren Stream und gibt ein Array mit zwei Elementen zurück, das die beiden resultierenden Zweige als neue {{domxref("ReadableStream")}}-Instanzen enthält.

Dies ist nützlich, um zwei Lesern das sequentielle oder gleichzeitige Lesen eines Streams zu ermöglichen, möglicherweise mit unterschiedlichen Geschwindigkeiten. Beispielsweise könnten Sie dies in einem ServiceWorker tun, wenn Sie eine Antwort vom Server abrufen und sie an den Browser streamen, aber auch in den ServiceWorker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann, benötigen Sie dafür zwei Kopien.

Ein verzweigter Stream wird partiell den Rückstau im Tempo des _schnelleren_ Verbrauchers der beiden `ReadableStream`-Zweige signalisieren, und unverarbeitete Daten werden intern in der langsamer konsumierten `ReadableStream`-Instanz ohne Begrenzung oder Rückstau eingereiht. Das heißt, wenn _beide_ Zweige ein ungelesenes Element in ihrer internen Warteschlange haben, wird die interne Warteschlange des ursprünlichen `ReadableStream`-Controllers beginnen, sich zu füllen, und sobald seine {{domxref("ReadableStreamDefaultController.desiredSize", "desiredSize")}} ≤ 0 oder der Bytestream-Controller {{domxref("ReadableByteStreamController.desiredSize", "desiredSize")}} ≤ 0 ist, hört der Controller auf, `pull(controller)` auf der übergebenen Quelle an {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} aufzurufen. Wenn nur ein Zweig konsumiert wird, wird der gesamte Körper im Speicher eingereiht. Daher sollten Sie das eingebaute `tee()` nicht verwenden, um sehr große Streams parallel mit unterschiedlichen Geschwindigkeiten zu lesen. Suchen Sie stattdessen nach einer Implementierung, die den Rückstau vollständig im Tempo des _langsameren_ konsumierten Zweigs behandelt.

Um den Stream zu kündigen, müssen Sie dann beide resultierenden Zweige kündigen. Das Verzweigen eines Streams wird ihn im Allgemeinen für die Dauer sperren und verhindern, dass andere Leser ihn sperren können.

## Syntax

```js-nolint
tee()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}}, das zwei {{domxref("ReadableStream")}}-Instanzen enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Quellstream kein `ReadableStream` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter Stream verzweigt, dann werden beide resultierenden Streams (enthalten in zwei Elementen eines generierten Arrays) an eine Funktion übergeben, die die Daten aus den beiden Streams liest und die Chunks jedes Streams nacheinander in einem unterschiedlichen Bereich der Benutzeroberfläche ausgibt. Siehe [Einfaches Beispiel für Verzweigung](https://mdn.github.io/dom-examples/streams/simple-tee-example/) für den vollständigen Code.

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

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}-Konstruktor
- [Verzweigung eines Streams](/de/docs/Web/API/Streams_API/Using_readable_streams#teeing_a_stream)
