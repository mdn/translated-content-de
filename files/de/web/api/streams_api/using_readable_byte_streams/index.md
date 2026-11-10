---
title: Lesbare Byte-Streams verwenden
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Streams")}}

Lesbare _Byte-Streams_ sind [lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) mit einer zugrunde liegenden Byte-Quelle vom Typ `type: "bytes"`. Sie unterstützen eine effiziente Übertragung von Daten aus der zugrunde liegenden Quelle an einen Verbraucher ohne Kopiervorgang (Zero-Copy), wobei die internen Warteschlangen des Streams umgangen werden.
Sie sind für Anwendungsfälle gedacht, in denen Daten in beliebig großen und möglicherweise sehr großen Blöcken bereitgestellt oder angefordert werden. In solchen Fällen kann das Vermeiden von Kopiervorgängen die Effizienz verbessern.

Dieser Artikel erläutert, wie sich lesbare Byte-Streams von normalen „Standard-Streams“ unterscheiden und wie Sie sie erstellen und verwenden.

> [!NOTE]
> Lesbare Byte-Streams sind „normalen“ lesbaren Streams sehr ähnlich; nahezu alle Konzepte sind gleich.
> Dieser Artikel setzt voraus, dass Sie diese Konzepte bereits verstehen, und behandelt sie allenfalls oberflächlich.
> Falls Sie mit den entsprechenden Konzepten noch nicht vertraut sind, lesen Sie bitte zuerst [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams), [Überblick über Konzepte und Verwendung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts).

## Überblick

Lesbare Streams bieten eine einheitliche Schnittstelle, um Daten von einer zugrunde liegenden Quelle, etwa einer Datei oder einem Socket, an einen Verbraucher wie einen Reader, einen Transform-Stream oder einen beschreibbaren Stream zu streamen.
Bei einem normalen lesbaren Stream durchlaufen Daten aus der zugrunde liegenden Quelle auf dem Weg zum Verbraucher immer die internen Warteschlangen.
Ein lesbarer Byte-Stream unterscheidet sich dadurch, dass die zugrunde liegende Quelle bei leeren internen Warteschlangen direkt an den Verbraucher schreiben kann – eine effiziente Übertragung ohne Kopiervorgang.

Ein lesbarer Byte-Stream wird erstellt, indem im `underlyingSource`-Objekt, das als erster Parameter an den [Konstruktor `ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann, `type: "bytes"` angegeben wird.
Mit diesem Wert wird der Stream mit einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erstellt. Dieses Objekt wird an die zugrunde liegende Quelle übergeben, wenn die Callback-Funktionen `start(controller)` und `pull(controller)` aufgerufen werden.

Der wichtigste Unterschied zwischen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und dem Standard-Controller ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)) besteht darin, dass er zusätzlich die Eigenschaft [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vom Typ [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) besitzt.
Sie stellt eine ausstehende Leseanforderung eines Verbrauchers dar, die durch eine Übertragung aus der zugrunde liegenden Quelle ohne Kopiervorgang erfüllt werden soll.
Wenn keine Anforderung aussteht, ist die Eigenschaft `null`.

Ein `byobRequest` wird nur bereitgestellt, wenn eine Leseanforderung an einen lesbaren Byte-Stream gestellt wird und sich keine Daten in dessen internen Warteschlangen befinden. Sind dort Daten vorhanden, wird die Anforderung aus diesen Warteschlangen erfüllt.

Eine zugrunde liegende Byte-Quelle, die Daten übertragen muss, muss die Eigenschaft `byobRequest` prüfen und sie, falls verfügbar, für die Übertragung verwenden.
Ist die Eigenschaft `null`, sollten eingehende Daten stattdessen mit [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) in die internen Warteschlangen des Streams eingefügt werden. Bei einem „Standard-Stream“ ist dies die einzige Möglichkeit, Daten zu übertragen.

[`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) besitzt die Eigenschaft [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view), die eine Ansicht auf den für die Übertragung bereitgestellten Puffer ist.
Daten aus einer zugrunde liegenden Quelle sollten in diese Ansicht geschrieben werden. Anschließend muss die zugrunde liegende Quelle [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) mit der Anzahl der geschriebenen Bytes aufrufen.
Dadurch wird signalisiert, dass die Daten übertragen und die ausstehende Leseanforderung des Verbrauchers erfüllt werden sollen.
Nach dem Aufruf von `respond()` kann nicht mehr in `view` geschrieben werden.

Daneben gibt es die Methode [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView), an die eine zugrunde liegende Quelle eine „neue“ Ansicht mit den zu übertragenden Daten übergeben kann.
Diese neue Ansicht muss sich auf _denselben_ Speicherpuffer beziehen und am selben Offset beginnen wie die ursprüngliche Ansicht.
Die Methode kann beispielsweise verwendet werden, wenn die zugrunde liegende Byte-Quelle die Ansicht zunächst zum Befüllen an einen Worker-Thread übertragen und anschließend zurückerhalten muss, bevor sie auf den `byobRequest` antwortet.
In den meisten Fällen wird diese Methode nicht benötigt.

Lesbare Byte-Streams werden normalerweise mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen. Diesen erhalten Sie, indem Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream aufrufen und im Optionsparameter `mode: "byob"` angeben.

Ein lesbarer Byte-Stream kann auch mit einem Standard-Reader ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden. In diesem Fall werden `byobRequest`-Objekte jedoch nur erstellt, wenn für den Stream die automatische Pufferzuweisung aktiviert wurde, indem [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) in dessen `underlyingSource` festgelegt wurde.
Beachten Sie, dass der durch `autoAllocateChunkSize` angegebene Wert in diesem Fall die Puffergröße bestimmt. Bei einem Byte-Reader stellt dagegen der Verbraucher den verwendeten Puffer bereit.
Wurde die Eigenschaft nicht angegeben, funktioniert der Standard-Reader weiterhin. Der zugrunde liegenden Quelle wird jedoch nie ein `byobRequest` angeboten, und alle Daten werden über die internen Warteschlangen des Streams übertragen.

Abgesehen von den beschriebenen Unterschieden ähneln Controller und zugrunde liegende Quelle bei Byte-Streams denen von Standard-Streams stark und [werden weitgehend auf dieselbe Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrunde liegende Push-Quelle mit Byte-Reader

Dieses interaktive Beispiel zeigt, wie Sie einen lesbaren Byte-Stream mit einer zugrunde liegenden _Push_-Byte-Quelle erstellen und ihn mit einem Byte-Reader lesen.

Anders als bei einer zugrunde liegenden Pull-Byte-Quelle können Daten jederzeit eintreffen.
Daher muss die zugrunde liegende Quelle eingehende Daten über `controller.byobRequest` übertragen, wenn ein solches Objekt vorhanden ist. Andernfalls muss sie die Daten in die internen Warteschlangen des Streams einfügen.
Da Daten jederzeit eintreffen können, wird die Überwachung außerdem in der Callback-Funktion `underlyingSource.start()` eingerichtet.

Das Beispiel orientiert sich stark an einem Beispiel für eine Push-Byte-Quelle in der Streams-Spezifikation.
Es verwendet eine simulierte „hypothetische Socket“-Quelle, die Daten in Blöcken beliebiger Größe bereitstellt.
Das Lesen wird an verschiedenen Stellen absichtlich verzögert, damit die zugrunde liegende Quelle Daten sowohl direkt übertragen als auch in die Warteschlange einfügen kann.
Die Unterstützung für Backpressure wird nicht demonstriert.

> [!NOTE]
> Eine zugrunde liegende Byte-Quelle kann auch mit einem Standard-Reader verwendet werden.
> Ist die automatische Pufferzuweisung aktiviert, stellt der Controller Puffer fester Größe für Übertragungen ohne Kopiervorgang bereit, wenn eine Leseanforderung aussteht und die internen Warteschlangen des Streams leer sind.
> Ist die automatische Pufferzuweisung nicht aktiviert, werden alle Daten des Byte-Streams in die Warteschlange eingefügt.
> Dies entspricht in etwa dem Verhalten in den Beispielen [Zugrunde liegende Pull-Quelle mit Standard-Reader](#zugrunde_liegende_pull-quelle_mit_standard-reader) und [Zugrunde liegende Pull-Quelle mit Standard-Reader ohne Pufferzuweisung](#zugrunde_liegende_pull-quelle_mit_standard-reader_ohne_pufferzuweisung).

#### Simulierte zugrunde liegende Socket-Quelle

Die simulierte zugrunde liegende Quelle besitzt drei wichtige Methoden:

- `select2()` stellt eine ausstehende Anforderung an den Socket dar.
  Sie gibt ein Promise zurück, das erfüllt wird, sobald Daten verfügbar sind.
- `readInto()` liest Daten aus dem Socket in einen bereitgestellten Puffer und entfernt sie anschließend aus dem Socket.
- `close()` schließt den Socket.

Die Implementierung ist stark vereinfacht.
Wie unten gezeigt, erstellt `select2()` nach einer Verzögerung einen zufällig großen Puffer mit zufälligen Daten.
Die erzeugten Daten werden in `readInto()` in einen Puffer gelesen und anschließend entfernt.

```js
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
    const remainingData = this.max_data - this.data_read;
    const numberBytesReceived =
      remainingData < this.min_per_read
        ? remainingData
        : this.getRandomIntInclusive(
            this.min_per_read,
            Math.min(this.max_per_read, remainingData),
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

<!-- The following html and js sets up reporting. Hidden because it is not useful for readers -->

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

#### Einen lesbaren Socket-Push-Byte-Stream erstellen

Der folgende Code zeigt, wie Sie einen lesbaren Socket-„Push“-Byte-Stream definieren.

Die Definition des `underlyingSource`-Objekts wird als erster Parameter an den [Konstruktor `ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um einen lesbaren „Byte“-Stream zu erstellen, geben wir `type: "bytes"` als Eigenschaft des Objekts an.
Dadurch erhält der Stream einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) anstelle des Standard-Controllers ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)).

Da Daten am Socket eintreffen können, bevor der Verbraucher bereit ist, sie zu verarbeiten, wird das Lesen der zugrunde liegenden Quelle vollständig in der Callback-Methode `start()` eingerichtet. Wir warten nicht auf einen Pull, bevor wir mit der Verarbeitung beginnen.
Die Implementierung öffnet den „Socket“ und ruft `select2()` auf, um Daten anzufordern.
Wenn das zurückgegebene Promise erfüllt wird, prüft der Code, ob `controller.byobRequest` vorhanden, also nicht `null`, ist. Falls ja, ruft er `socket.readInto()` auf, um Daten in den Puffer der Anforderung zu kopieren und zu übertragen.
Ist `byobRequest` nicht vorhanden, gibt es keine ausstehende Leseanforderung eines Verbrauchers, die ohne Kopiervorgang erfüllt werden könnte.
In diesem Fall wird `controller.enqueue()` verwendet, um die Daten in die internen Warteschlangen des Streams zu kopieren.

Die Anforderung weiterer Daten über `select2()` wird wiederholt, bis eine Antwort ohne Daten zurückgegeben wird.
An diesem Punkt wird der Stream über den Controller geschlossen.

```js
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
```

Beachten Sie, dass `readRepeatedly()` ein Promise zurückgibt. Damit fangen wir Fehler ab, die beim Einrichten oder Verarbeiten des Lesevorgangs auftreten.
Die Fehler werden anschließend wie oben gezeigt an den Controller übergeben (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Am Ende wird eine `cancel()`-Methode bereitgestellt, um die zugrunde liegende Quelle zu schließen. Der `pull()`-Callback wird nicht benötigt und daher nicht implementiert.

#### Den Push-Byte-Stream verwenden

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket-Byte-Stream und liest damit Daten in einen Puffer.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um weitere Daten zu lesen, bis der Puffer gefüllt ist.
Wenn die zugrunde liegende Quelle signalisiert, dass keine weiteren Daten vorhanden sind, ist `done` beim Aufruf von `reader.read()` auf `true` gesetzt. Damit endet der Lesevorgang.

Dieser Code entspricht nahezu vollständig dem Beispiel [Zugrunde liegende Pull-Quelle mit Byte-Reader](#zugrunde_liegende_pull-quelle_mit_byte-reader).
Der einzige Unterschied besteht darin, dass der Reader zusätzlichen Code enthält, der das Lesen verlangsamt. So zeigt die Protokollausgabe, dass Daten in die Warteschlange eingefügt werden, wenn sie nicht schnell genug gelesen werden.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(async function processText({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // logConsumer(`Read ${bytesReceived} bytes: ${value}`);
        logConsumer(`Read ${bytesReceived} bytes`);
        result += value;

        // Add delay to emulate when data can't be read and data is enqueued
        if (bytesReceived > 300 && bytesReceived < 600) {
          logConsumer(`Delaying read to emulate slow stream reading`);
          const delay = (ms) =>
            new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
          await delay(1000);
        }

        // Read some more, and call this function again
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processText);
      });
  }
}
```

#### Den Stream mit dem Reader abbrechen

Mit [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) können wir den Stream abbrechen.
In diesem Beispiel rufen wir die Methode beim Klicken auf eine Schaltfläche mit dem Grund „user choice“ auf. Das übrige HTML und der Code für die Schaltfläche werden nicht gezeigt.
Außerdem protokollieren wir, wann der Abbruch abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

Mit [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) kann der Reader freigegeben werden, ohne den Stream abzubrechen.
Beachten Sie jedoch, dass alle ausstehenden Leseanforderungen sofort zurückgewiesen werden.
Später kann ein neuer Reader abgerufen werden, um die verbleibenden Blöcke zu lesen.

#### Das Schließen des Streams und Fehler überwachen

Die Eigenschaft [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) gibt ein Promise zurück, das beim Schließen des Streams erfüllt und bei einem Fehler zurückgewiesen wird.
Obwohl in diesem Fall keine Fehler zu erwarten sind, sollte der folgende Code den erfolgreichen Abschluss protokollieren.

```js
reader.closed
  .then(() => {
    logConsumer("ReadableStreamBYOBReader.closed: resolved");
  })
  .catch(() => {
    logConsumer("ReadableStreamBYOBReader.closed: rejected:");
  });
```

#### Ergebnis

Unten sehen Sie die Protokollausgaben der zugrunde liegenden Push-Quelle (links) und des Verbrauchers (rechts).
Beachten Sie den Zeitraum in der Mitte, in dem Daten in die Warteschlange eingefügt werden, statt ohne Kopiervorgang übertragen zu werden.

{{EmbedLiveSample("underlying_push_source_with_byte_reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Byte-Reader

Dieses interaktive Beispiel zeigt, wie Daten aus einer zugrunde liegenden „Pull“-Byte-Quelle, etwa einer Datei, gelesen und von einem Stream ohne Kopiervorgang an einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) übertragen werden können.

#### Simulierte zugrunde liegende Dateiquelle

Für die zugrunde liegende Pull-Quelle verwenden wir die folgende Klasse, um ein [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle) aus Node.js und insbesondere dessen Methode [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position) _sehr_ vereinfacht zu simulieren.
Die Klasse erzeugt zufällige Daten, die eine Datei darstellen.
Die Methode `read()` liest von der angegebenen Position aus einen „halb zufällig“ großen Block zufälliger Daten in einen bereitgestellten Puffer.
Die Methode `close()` führt nichts aus: Sie ist nur vorhanden, um zu zeigen, an welcher Stelle Sie die Quelle beim Definieren des Stream-Konstruktors schließen könnten.

> [!NOTE]
> Eine ähnliche Klasse wird für alle Beispiele mit „Pull-Quellen“ verwendet.
> Sie wird hier nur zur Information gezeigt, damit erkennbar ist, dass es sich um eine Simulation handelt.

```js
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["buffer"] = buffer;
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject */) => {
      if (position >= this.maxdata) {
        // Out of data
        resolve(resultObj);
        return;
      }

      // Simulate a file read that returns random numbers of bytes
      // Read minimum of bytes requested and random bytes that can be returned
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Read random data into supplied buffer
      const myView = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myView[i] = this.filedata[position + i];
        resultObj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultObj);
      }, 1000);
    });
  }

  // Dummy close function
  close() {}

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

  // Return random Uint8Array of bytes
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- The following html and js sets up reporting. Hidden because it is not useful for readers -->

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

#### Einen lesbaren Datei-Byte-Stream erstellen

Der folgende Code zeigt, wie Sie einen lesbaren Datei-Byte-Stream definieren.

Wie im vorherigen Beispiel wird die Definition des `underlyingSource`-Objekts als erster Parameter an den [Konstruktor `ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um einen lesbaren „Byte“-Stream zu erstellen, geben wir `type: "bytes"` als Eigenschaft des Objekts an.
Dadurch erhält der Stream einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController).

Die Funktion `start()` öffnet lediglich das Datei-Handle, das später im `cancel()`-Callback geschlossen wird.
`cancel()` dient dazu, Ressourcen freizugeben, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen wird.

Der wesentliche Teil des Codes befindet sich im `pull()`-Callback.
Er kopiert Daten aus der Datei in die ausstehende Leseanforderung ([`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)) und ruft anschließend [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) auf, um anzugeben, wie viele Daten sich im Puffer befinden, und sie zu übertragen.
Wenn 0 Bytes aus der Datei übertragen wurden, wissen wir, dass alle Daten kopiert wurden. Dann rufen wir [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) auf dem Controller auf, was wiederum dazu führt, dass `cancel()` auf der zugrunde liegenden Quelle aufgerufen wird.

```js
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialize the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theView = controller.byobRequest.view;
      const { bytesRead, buffer } = await fileHandle.read(
        theView.buffer,
        theView.byteOffset,
        theView.byteLength,
        position,
      );
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(
          `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel(reason) {
      // This is called if the stream is canceled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

#### Den Byte-Stream verwenden

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei-Byte-Stream und liest damit Daten in einen Puffer.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um weitere Daten zu lesen, bis der Puffer gefüllt ist.
Wenn die zugrunde liegende Quelle signalisiert, dass keine weiteren Daten vorhanden sind, ist `done` beim Aufruf von `reader.read()` auf `true` gesetzt. Damit endet der Lesevorgang.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  // read() returns a promise that resolves when a value has been received
  reader
    .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
    .then(function processText({ done, value }) {
      // Result objects contain two properties:
      // done  - true if the stream has already given all its data.
      // value - some data. Always undefined when done is true.

      if (done) {
        logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
        return;
      }

      buffer = value.buffer;
      offset += value.byteLength;
      bytesReceived += value.byteLength;

      logConsumer(
        `Read ${value.byteLength} (${bytesReceived}) bytes: ${value}`,
      );
      result += value;

      // Read some more, and call this function again
      return reader
        .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
        .then(processText);
    });
}
```

Abschließend fügen wir einen Handler hinzu, der den Stream beim Klicken auf eine Schaltfläche abbricht. Das übrige HTML und der Code für die Schaltfläche werden nicht gezeigt.

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Unten sehen Sie die Protokollausgaben der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts).
Besonders bemerkenswert ist Folgendes:

- Der Funktion `start()` wird ein `ReadableByteStreamController` übergeben.
- Der an den Reader übergebene Puffer ist groß genug für die gesamte „Datei“.
  Die zugrunde liegende Datenquelle stellt die Daten in Blöcken zufälliger Größe bereit.

{{EmbedLiveSample("underlying_pull_source_with_byte_reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standard-Reader

Dieses interaktive Beispiel zeigt, wie dieselben Daten mit einem Standard-Reader ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) ohne Kopiervorgang gelesen werden können.
Es verwendet dieselbe [simulierte zugrunde liegende Dateiquelle](#simulierte_zugrunde_liegende_dateiquelle) wie das vorherige Beispiel.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["buffer"] = buffer;
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject */) => {
      if (position >= this.maxdata) {
        // Out of data
        resolve(resultObj);
        return;
      }

      // Simulate a file read that returns random numbers of bytes
      // Read minimum of bytes requested and random bytes that can be returned
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Read random data into supplied buffer
      const myView = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myView[i] = this.filedata[position + i];
        resultObj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultObj);
      }, 1000);
    });
  }

  // Dummy close function
  close() {}

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

  // Return random Uint8Array of bytes
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- The following html and js sets up reporting. Hidden because it is not useful for readers -->

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

#### Einen lesbaren Datei-Byte-Stream mit automatischer Pufferzuweisung erstellen

Der einzige Unterschied bei unserer zugrunde liegenden Quelle besteht darin, dass wir `autoAllocateChunkSize` angeben müssen. Dieser Wert bestimmt die Größe des Puffers der `view` von `controller.byobRequest`, statt dass der Verbraucher einen Puffer bereitstellt.

```js
const DEFAULT_CHUNK_SIZE = 20;
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialize the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theView = controller.byobRequest.view;
      const { bytesRead, buffer } = await fileHandle.read(
        theView.buffer,
        theView.byteOffset,
        theView.byteLength,
        position,
      );
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(
          `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel(reason) {
      // This is called if the stream is canceled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE, // Only relevant if using a default reader
  });
}
```

#### Den Byte-Stream mit einem Standard-Reader verwenden

Der folgende Code erstellt einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) für den Datei-Byte-Stream, indem er `stream.getReader();` ohne Angabe eines Modus aufruft. Mit diesem Reader liest er Daten in einen Puffer.
Der Code funktioniert wie im vorherigen Beispiel, mit dem Unterschied, dass der Stream statt des Verbrauchers den Puffer bereitstellt.

```js
const reader = stream.getReader();
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(
      `Read ${value.length} (${bytesReceived}). Current bytes = ${value}`,
    );
    result += value;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

Abschließend fügen wir einen Handler hinzu, der den Stream beim Klicken auf eine Schaltfläche abbricht. Das übrige HTML und der Code für die Schaltfläche werden nicht gezeigt.

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Unten sehen Sie die Protokollausgaben der zugrunde liegenden Pull-Byte-Quelle (links) und des Verbrauchers (rechts).

Beachten Sie, dass die Blöcke nun _höchstens_ 20 Bytes groß sind. Das ist die Größe des automatisch zugewiesenen Puffers, die in der zugrunde liegenden Byte-Quelle über `autoAllocateChunkSize` festgelegt wurde.
Die Blöcke werden ohne Kopiervorgang übertragen.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standard-Reader ohne Pufferzuweisung

Der Vollständigkeit halber können wir einen Standard-Reader auch mit einer Byte-Quelle verwenden, die keine automatische Pufferzuweisung unterstützt.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["buffer"] = buffer;
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject */) => {
      if (position >= this.maxdata) {
        // Out of data
        resolve(resultObj);
        return;
      }

      // Simulate a file read that returns random numbers of bytes
      // Read minimum of bytes requested and random bytes that can be returned
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Read random data into supplied buffer
      const myView = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myView[i] = this.filedata[position + i];
        resultObj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultObj);
      }, 1000);
    });
  }

  // Dummy close function
  close() {}

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

  // Return random Uint8Array of bytes
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- The following html and js sets up reporting. Hidden because it is not useful for readers -->

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

In diesem Fall stellt der Controller der zugrunde liegenden Quelle jedoch keinen `byobRequest` bereit, in den sie schreiben könnte.
Stattdessen muss die zugrunde liegende Quelle die Daten in die Warteschlange einfügen.
Beachten Sie, dass wir zur Unterstützung dieses Falls in `pull()` prüfen müssen, ob `byobRequest` vorhanden ist.

```js
const stream = makeReadableByteFileStream("dummy file.txt");
const DEFAULT_CHUNK_SIZE = 40;

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialize the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      if (controller.byobRequest) {
        const theView = controller.byobRequest.view;
        const { bytesRead, buffer } = await fileHandle.read(
          theView.buffer,
          theView.byteOffset,
          theView.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.byobRequest.respond(0);
          logSource(
            `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.byobRequest.respond(bytesRead);
          logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
        }
      } else {
        // No BYOBRequest so enqueue data to stream
        // NOTE, this branch would only execute for a default reader if autoAllocateChunkSize is not defined.
        const myNewBuffer = new Uint8Array(DEFAULT_CHUNK_SIZE);
        const { bytesRead, buffer } = await fileHandle.read(
          myNewBuffer.buffer,
          myNewBuffer.byteOffset,
          myNewBuffer.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.enqueue(myNewBuffer);
          logSource(
            `pull() with no byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.enqueue(myNewBuffer);
          logSource(`pull() with no byobRequest. enqueue() ${bytesRead} bytes`);
        }
      }
    },
    cancel(reason) {
      // This is called if the stream is canceled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

```js hidden
const reader = stream.getReader();

readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(`Read ${bytesReceived} bytes so far. Current bytes = ${value}`);
    result += value;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

```js hidden
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Unten sehen Sie die Protokollausgaben der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts).
Die Ausgabe der zugrunde liegenden Quelle zeigt, dass die Daten in die Warteschlange eingefügt und nicht ohne Kopiervorgang übertragen wurden.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts)
- [Überblick über Konzepte und Verwendung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams)
