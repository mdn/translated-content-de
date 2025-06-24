---
title: "ReadableStreamBYOBReader: read() Methode"
short-title: read()
slug: Web/API/ReadableStreamBYOBReader/read
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`read()`** Methode der [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) Schnittstelle wird verwendet, um Daten in eine Ansicht eines vom Benutzer bereitgestellten Puffers aus einem zugehörigen [lesbaren Byte-Strom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) zu lesen.
Ein Datenanfrage wird aus den internen Warteschlangen des Streams erfüllt, wenn Daten vorhanden sind.
Wenn die Stream-Warteschlangen leer sind, kann die Anfrage als Zero-Copy-Übertragung aus der zugrunde liegenden Byte-Quelle bereitgestellt werden.

Die Methode nimmt als Argument eine Ansicht eines Puffers, in die die bereitgestellten Daten gelesen werden sollen, und gibt ein {{jsxref("Promise")}} zurück.
Das Promise erfüllt sich mit einem Objekt, das die Eigenschaften `value` und `done` hat, wenn Daten verfügbar werden oder wenn der Stream abgebrochen wird.
Wenn der Stream fehlerhaft ist, wird das Promise mit dem entsprechenden Fehlerobjekt abgelehnt.

Wenn ein Datenblock bereitgestellt wird, enthält die `value`-Eigenschaft eine neue Ansicht.
Dies wird eine Ansicht über denselben Speicherpuffer/-speicher (und vom gleichen Typ) wie die ursprüngliche `view`-Ansicht sein, die an die `read()` Methode übergeben wurde, jetzt gefüllt mit dem neuen Datenblock.
Beachten Sie, dass sobald das Promise erfüllt ist, die ursprüngliche `view`-Ansicht, die an die Methode übergeben wurde, getrennt und nicht mehr nutzbar ist.
Das Promise wird mit einem `value: undefined` erfüllt, wenn der Stream abgebrochen wurde.
In diesem Fall wird der Speicherbereich der `view` verworfen und nicht an den Aufrufer zurückgegeben (alle zuvor in den Puffer der Ansicht gelesenen Daten gehen verloren).

Die `done`-Eigenschaft gibt an, ob weitere Daten erwartet werden.
Der Wert wird auf `true` gesetzt, wenn der Stream geschlossen oder abgebrochen wird, und `false` ansonsten.

Die Methode hat auch ein optionales `options.min`-Argument, das verwendet werden kann, um die Mindestanzahl von Elementen zu spezifizieren, die verfügbar sein müssen, bevor das Promise erfüllt wird, solange der Stream aktiv ist.
Die in der `value`-Eigenschaft zurückgegebene Ansicht wird immer mindestens diese Anzahl von Elementen haben, außer wenn der Stream geschlossen ist.

## Syntax

```js-nolint
read(view)
read(view, options)
```

### Parameter

- `view`
  - : Die Ansicht, in die die Daten gelesen werden sollen.
- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `min`
      - : Die Mindestanzahl von Elementen, die gelesen werden müssen, bevor das Promise erfüllt wird, solange der Stream aktiv ist.
        Wenn nicht angegeben, wird das Promise mit mindestens einem Element aufgelöst, bis zur maximalen Größe der Ansicht.
        Diese Zahl darf nicht größer sein als die Ansicht, in die gelesen wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem Ergebnis erfüllt/ablehnt, abhängig vom Zustand des Streams. Das Ergebnisobjekt enthält zwei Eigenschaften, `value` und `done`.

Folgende Möglichkeiten bestehen:

- Wenn ein Datenblock verfügbar ist und der Stream weiterhin aktiv ist, ist das `done` des Ergebnisses `false` und `value` ist eine Ansicht, die die neuen Daten enthält.
  Dies ist eine Ansicht des gleichen Typs und über denselben Sperrspeicher wie die `view`, die an die `read()`-Methode übergeben wurde.
  Die ursprüngliche `view` wird getrennt und nicht mehr nutzbar sein.

- Wenn der Stream geschlossen ist, ist das `done` des Ergebnisses `true` und `value` hat die gleichen Eigenschaften wie oben.

- Wenn der Stream abgebrochen wird, ist das `done` des Ergebnisses `true` und `value` ist `undefined`.
  In diesem Fall wird der Speicher verworfen.

- Wenn der Stream einen Fehler wirft, lehnt das Promise mit dem entsprechenden Fehler ab.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamBYOBReader`, der Stream hat keinen Besitzer, die Ansicht ist kein Objekt oder wurde getrennt, die Länge der Ansicht ist 0, `options.min` ist 0 oder [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) wird aufgerufen (wenn eine Leseanfrage aussteht).
- {{jsxref("RangeError")}}
  - : Der Wert `options.min` ist größer als die Ansicht, in die geschrieben wird.

## Beispiele

### Lesen in eine Ansicht

Der hier gezeigte Beispielcode stammt aus den Live-Beispielen in [Verwendung lesbarer Byte-Ströme](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen wir den Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream, wobei `mode: "byob"` im Optionsparameter angegeben wird.
Wir müssen auch einen `ArrayBuffer` erstellen, der das "Speicherbasis" der Ansichten ist, in die wir schreiben werden.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
```

Eine unten gezeigte Funktion verwendet den Leser.
Diese ruft die `read()` Methode rekursiv auf, um Daten in den Puffer zu lesen.
Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht über den Teil des ursprünglichen Array-Puffers ist, der noch nicht beschrieben wurde.
Die Parameter der Ansicht werden aus den in früheren Aufrufen empfangenen Daten berechnet, die einen Offset in den ursprünglichen Array-Puffer definieren.

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

Wenn keine Daten mehr im Stream sind, erfüllt die `read()`-Methode mit einem Objekt mit der Eigenschaft `done`, die auf `true` gesetzt ist, und die Funktion kehrt zurück.

### Lesen einer Mindestanzahl von Elementen

Dieses Beispiel ist fast genau das gleiche wie das vorherige, außer dass wir den Code modifiziert haben, um mindestens 101 Elemente pro Iteration zu lesen.

Wir haben es auch in ein Live-Beispiel verwandelt.
Beachten Sie, dass der größte Teil des Codes für das Beispiel nicht relevant ist und daher verborgen bleibt.
Weitere Informationen finden Sie unter [Verwendung lesbarer Byte-Ströme](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

<!-- Ab hier ist die Live-Implementierung verborgen -->

```js hidden
class MockHypotheticalSocket {
  constructor() {
    this.max_data = 800; // total amount of data to stream from "socket"
    this.max_per_read = 100; // max data per read
    this.min_per_read = 40; // min data per read
    this.data_read = 0; // total data read so far (capped is maxdata)
    this.socketData = null;
  }

  // Method returning promise when this socket is readable.
  select2() {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject */) => {
      if (this.data_read >= this.max_data) {
        // Out of data
        resolve(resultObj);
        return;
      }

      // Emulate slow read of data
      setTimeout(() => {
        const numberBytesReceived = this.getNumberRandomBytesSocket();
        this.data_read += numberBytesReceived;
        this.socketData = this.randomByteArray(numberBytesReceived);
        resultObj["bytesRead"] = numberBytesReceived;
        resolve(resultObj);
      }, 500);
    });
  }

  /* Read data into specified buffer offset */
  readInto(buffer, offset, length) {
    let dataLength = 0;
    if (this.socketData) {
      dataLength = this.socketData.length;
      const myView = new Uint8Array(buffer, offset, length);
      // Write the length of data specified into buffer
      // Code assumes buffer always bigger than incoming data
      for (let i = 0; i < dataLength; i++) {
        myView[i] = this.socketData[i];
      }
      this.socketData = null; // Clear "socket" data after reading
    }
    return dataLength;
  }

  // Dummy close function
  close() {}

  // Return random number bytes in this call of socket
  getNumberRandomBytesSocket() {
    // Capped to remaining data and the max min return-per-read range
    const remaining_data = this.max_data - this.data_read;
    const numberBytesReceived =
      remaining_data < this.min_per_read
        ? remaining_data
        : this.getRandomIntInclusive(
            this.min_per_read,
            Math.min(this.max_per_read, remaining_data),
          );
    return numberBytesReceived;
  }

  // Return random number between two values
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Return random character string
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  /* Return random Uint8Array of bytes */
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet die Berichterstattung ein. Versteckt, da er für die Leser nicht nützlich ist -->

```css hidden
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
  overflow-wrap: break-word;
}
button {
  display: block;
}
```

```html hidden
<button>Cancel stream</button>
<div class="input">
  <h2>Underlying source</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul></ul>
</div>
```

```js hidden
// Store reference to lists, paragraph and button
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Create empty string in which to store final result
let result = "";

// Function to log data from underlying source
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Function to log data from consumer
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

```js hidden
const stream = makeSocketStream("dummy host", "dummy port");

const DEFAULT_CHUNK_SIZE = 400;

function makeSocketStream(host, port) {
  const socket = new MockHypotheticalSocket();

  return new ReadableStream({
    type: "bytes",

    start(controller) {
      readRepeatedly().catch((e) => controller.error(e));
      function readRepeatedly() {
        return socket.select2().then(() => {
          // Since the socket can become readable even when there's
          // no pending BYOB requests, we need to handle both cases.
          let bytesRead;
          if (controller.byobRequest) {
            const v = controller.byobRequest.view;
            bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
            if (bytesRead === 0) {
              controller.close();
            }
            controller.byobRequest.respond(bytesRead);
            logSource(`byobRequest with ${bytesRead} bytes`);
          } else {
            const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
            bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
            if (bytesRead === 0) {
              controller.close();
            } else {
              controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
            }
            logSource(`enqueue() ${bytesRead} bytes (no byobRequest)`);
          }

          if (bytesRead === 0) {
            return;
            // no more bytes in source
          }
          return readRepeatedly();
        });
      }
    },

    cancel() {
      socket.close();
      logSource(`cancel(): socket closed`);
    },
  });
}

const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
readStream(reader);
```

#### JavaScript

```js
function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset), {
        min: 101,
      })
      .then(async function processText({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          logConsumer(
            `readStream() complete. Read ${value.byteLength} bytes (total: ${bytesReceived})`,
          );
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // logConsumer(`Read ${bytesReceived} bytes: ${value}`);
        logConsumer(`Read ${value.byteLength} bytes (total: ${bytesReceived})`);
        result += value;

        // Read some more, and call this function again
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset), {
            min: 101,
          })
          .then(processText);
      });
  }
}
```

```js hidden
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});

reader.closed
  .then(() => {
    logConsumer("ReadableStreamBYOBReader.closed: resolved");
  })
  .catch(() => {
    logConsumer("ReadableStreamBYOBReader.closed: rejected:");
  });
```

#### Ergebnis

Das Logging aus der zugrunde liegenden Push-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt.
Beachten Sie, dass, wenn der Browser das `options.min`-Argument unterstützt, jedes Mal mindestens 101 Elemente zurückgegeben werden (und oft mehr), außer wenn der Stream schließt.

{{EmbedLiveSample("Lesen einer Mindestanzahl von Elementen","100%","500px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader) Konstruktor
- [Verwendung lesbarer Byte-Strom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
