---
title: "ReadableStreamBYOBReader: read() Methode"
short-title: read()
slug: Web/API/ReadableStreamBYOBReader/read
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`**-Methode der [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Schnittstelle wird verwendet, um Daten in eine Ansicht auf einem vom Benutzer bereitgestellten Puffer aus einem zugehörigen [lesbaren Bytestream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) zu lesen. Eine Anfrage nach Daten wird aus den internen Warteschlangen des Streams bedient, wenn Daten vorhanden sind. Wenn die Stream-Warteschlangen leer sind, kann die Anfrage als Zero-Copy-Übertragung aus der zugrunde liegenden Byte-Quelle geliefert werden.

Die Methode nimmt als Argument eine Ansicht auf einen Puffer, in den gelesene Daten eingelesen werden sollen, und gibt ein {{jsxref("Promise")}} zurück. Das Promise wird mit einem Objekt erfüllt, das die Eigenschaften `value` und `done` enthält, wenn Daten verfügbar werden oder wenn der Stream abgebrochen wird. Wenn der Stream einen Fehler aufweist, wird das Promise mit dem entsprechenden Fehlerobjekt abgelehnt.

Wenn ein Datenblock bereitgestellt wird, enthält die Eigenschaft `value` eine neue Ansicht. Diese ist eine Ansicht auf denselben Puffer/Memory-Bereich (und vom gleichen Typ) wie die ursprüngliche `view`, die an die `read()`-Methode übergeben wurde, jetzt gefüllt mit dem neuen Datenblock. Beachten Sie, dass die ursprüngliche `view`, die an die Methode übergeben wurde, nach Erfüllung des Promise getrennt und nicht mehr verwendbar ist. Das Promise wird mit `value: undefined` erfüllt, wenn der Stream abgebrochen wurde. In diesem Fall wird der Speicherbereich von `view` verworfen und nicht an den Aufrufer zurückgegeben (alle zuvor gelesenen Daten im Puffer der Ansicht gehen verloren).

Die `done`-Eigenschaft gibt an, ob noch weitere Daten erwartet werden. Der Wert wird auf `true` gesetzt, wenn der Stream geschlossen oder abgebrochen ist, und ansonsten auf `false`.

## Syntax

```js-nolint
read(view)
```

### Parameter

- `view`
  - : Die Ansicht, in die Daten gelesen werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt/abgelehnt wird, abhängig vom Status des Streams.

Folgende Möglichkeiten bestehen:

- Wenn ein Datenblock verfügbar ist und der Stream noch aktiv ist, wird das Promise mit einem Objekt der Form erfüllt:

  ```js
  { value: theChunk, done: false }
  ```

  `theChunk` ist eine Ansicht, die die neuen Daten enthält. Dies ist eine Ansicht des gleichen Typs und über denselben Speicherbereich wie die `view`, die an die `read()`-Methode übergeben wurde. Die ursprüngliche `view` wird getrennt und ist nicht mehr verwendbar.

- Wenn der Stream geschlossen ist, wird das Promise mit einem Objekt der folgenden Form erfüllt (wobei `theChunk` die gleichen Eigenschaften wie oben hat):

  ```js
  { value: theChunk, done: true }
  ```

- Wenn der Stream abgebrochen wird, wird das Promise mit einem Objekt der Form erfüllt:

  ```js
  { value: undefined, done: true }
  ```

  In diesem Fall wird der Speicherbereich verworfen.

- Wenn der Stream einen Fehler wirft, wird das Promise mit dem entsprechenden Fehler abgelehnt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamBYOBReader`, der Stream hat keinen Eigentümer, die Ansicht ist kein Objekt oder wurde getrennt, die Länge der Ansicht ist 0, oder [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) wird aufgerufen (wenn eine ausstehende Leseanforderung besteht).

## Beispiele

Der im Folgenden gezeigte Beispielcode stammt aus den Live-Beispielen in [Using readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen wir den Leser mithilfe von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) für den Stream, wobei `mode: "byob"` im Optionsparameter angegeben wird. Wir müssen auch einen `ArrayBuffer` erstellen, der das "Back-End" der Ansichten darstellt, die wir beschreiben werden.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
```

Eine Funktion, die den Leser verwendet, wird unten gezeigt. Diese ruft rekursiv die `read()`-Methode auf, um Daten in den Puffer zu lesen. Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typed array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), welches eine Ansicht über den Teil des ursprünglichen Array-Buffers ist, der noch nicht beschrieben wurde. Die Parameter der Ansicht werden anhand der in vorherigen Aufrufen empfangenen Daten berechnet, die einen Offset in den ursprünglichen Array-Buffer definieren.

```js
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that fulfills when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(function processBytes({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. 'undefined' if the reader is canceled.

        if (done) {
          // There is no more data in the stream
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // Read some more, and call this function again
        // Note that here we create a new view over the original buffer.
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processBytes);
      });
  }
}
```

Wenn keine weiteren Daten im Stream vorhanden sind, wird die `read()`-Methode mit einem Objekt mit der Eigenschaft `done`, die auf `true` gesetzt ist, erfüllt, und die Funktion gibt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader) Konstruktor
- [Using readable byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
