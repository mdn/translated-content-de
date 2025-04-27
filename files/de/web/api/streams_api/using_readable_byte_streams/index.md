---
title: Verwendung von lesbaren Byte-Streams
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("Streams")}}

Lesbare _Byte-Streams_ sind [lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), die eine zugrunde liegende Byte-Quelle mit `type: "bytes"` haben und eine effiziente null-Kopie-Datenübertragung von der zugrunde liegenden Quelle zu einem Verbraucher unterstützen (indem die internen Warteschlangen des Streams umgangen werden). Sie sind für Anwendungsfälle gedacht, bei denen Daten in beliebig großen und potenziell sehr großen Blöcken bereitgestellt oder angefordert werden könnten und bei denen das Vermeiden von Kopien die Effizienz wahrscheinlich verbessert.

Dieser Artikel erklärt, wie lesbare Byte-Streams im Vergleich zu normalen „Standard“-Streams stehen und wie Sie sie erstellen und konsumieren können.

> [!NOTE]
> Lesbare Byte-Streams sind fast identisch zu "normalen" lesbaren Streams und fast alle Konzepte sind dieselben.
> Dieser Artikel geht davon aus, dass Sie diese Konzepte bereits verstehen, und wird sie nur oberflächlich (wenn überhaupt) behandeln.
> Falls Sie nicht mit den relevanten Konzepten vertraut sind, lesen Sie bitte zuerst: [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage) und [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts).

## Überblick

Lesbare Streams bieten eine konsistente Schnittstelle zum Streaming von Daten von einer zugrunde liegenden Quelle, wie etwa einer Datei oder einem Socket, zu einem Verbraucher, wie einem Leser, Transformationsstream oder beschreibbaren Stream. In einem normalen lesbaren Stream gelangen Daten von der zugrunde liegenden Quelle immer durch die internen Warteschlangen zu einem Verbraucher. Ein lesbarer Byte-Stream unterscheidet sich dadurch, dass, wenn die internen Warteschlangen leer sind, die zugrunde liegende Quelle direkt in den Verbraucher schreiben kann (eine effiziente null-Kopie-Übertragung).

Ein lesbarer Byte-Stream wird erstellt, indem `type: "bytes"` im `underlyingSource`-Objekt angegeben wird, das als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann. Mit diesem Wert wird der Stream mit einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erstellt, und dieses Objekt wird an die zugrunde liegende Quelle übergeben, wenn die `start(controller)`- und `pull(controller)`-Callback-Funktionen aufgerufen werden.

Der Hauptunterschied zwischen dem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und dem Standard-Controller ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)) besteht darin, dass ersterer eine zusätzliche Eigenschaft [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vom Typ [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat. Dies steht für eine ausstehende Leseanforderung durch einen Verbraucher, die als null-Kopie-Übertragung von der zugrunde liegenden Quelle durchgeführt wird. Die Eigenschaft ist `null`, wenn keine ausstehende Anfrage vorliegt.

Eine `byobRequest` wird nur zur Verfügung gestellt, wenn eine Leseanforderung an einem lesbaren Byte-Stream gestellt wird und keine Daten in den internen Warteschlangen des Streams vorhanden sind (wenn es Daten gibt, wird die Anfrage aus diesen Warteschlangen erfüllt).

Eine zugrunde liegende Byte-Quelle, die Daten übertragen muss, muss die `byobRequest`-Eigenschaft prüfen und, wenn sie verfügbar ist, verwenden, um Daten zu übertragen. Wenn die Eigenschaft `null` ist, sollten eingehende Daten stattdessen mithilfe von [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) zu den internen Warteschlangen des Streams hinzugefügt werden (dies ist der einzige Weg, Daten zu übertragen, wenn ein „Standard“-Stream verwendet wird).

[`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat eine [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft, die eine Ansicht auf den für die Übertragung reservierten Puffer ist. Daten aus einer zugrunde liegenden Quelle sollten in diese Eigenschaft geschrieben und dann von der zugrunde liegenden Quelle [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufgerufen werden, das die Anzahl der geschriebenen Bytes angibt. Das signalisiert, dass die Daten übertragen werden sollen und die ausstehende Leseanforderung vom Verbraucher gelöst werden soll. Nach dem Aufruf von `respond()` kann die `view` nicht mehr beschrieben werden.

Es gibt auch eine zusätzliche Methode [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView), an die eine zugrunde liegende Quelle eine „neue“ Ansicht mit zu übertragenden Daten übergeben kann. Diese neue Ansicht muss über denselben Speicherpuffer wie das Original und von demselben Startoffset aus geben. Diese Methode könnte verwendet werden, wenn die zugrunde liegende Byte-Quelle die Ansicht zunächst an einen Worker-Thread zur Auffüllung übertragen und dann zurückerhalten muss, bevor sie auf die `byobRequest` antwortet. In den meisten Fällen wird diese Methode nicht benötigt.

Lesbare Byte-Streams werden normalerweise mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen, der durch den Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) am Stream erhalten werden kann, wobei `mode: "byob"` im Optionsparameter angegeben wird.

Ein lesbarer Byte-Stream kann auch mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden, aber in diesem Fall werden `byobRequest`-Objekte nur erstellt, wenn die automatische Pufferzuweisung für den Stream aktiviert ist ([`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) wurde für die `underlyingSource` des Streams festgelegt). Beachten Sie, dass die durch `autoAllocateChunkSize` angegebene Größe in diesem Fall für die Puffergöße verwendet wird; für einen Bytereader wird der Puffer vom Verbraucher bereitgestellt. Wenn die Eigenschaft nicht angegeben wurde, „funktioniert“ der Standardleser dennoch, aber der zugrunde liegenden Quelle wird niemals eine `byobRequest` angeboten und alle Daten werden über die internen Warteschlangen des Streams übertragen.

Abgesehen von den oben genannten Unterschieden sind der Controller und die zugrunde liegende Quelle für Byte-Streams sehr ähnlich wie für Standard-Streams und [werden auf ähnliche Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrunde liegende Push-Quelle mit Byte-Reader

Dieses Live-Beispiel zeigt, wie man einen lesbaren Byte-Stream mit einer _Push_ zugrunde liegenden Byte-Quelle erstellt und ihn mit einem Byte-Reader liest.

Im Gegensatz zu einer Pull-Zugrunde-liegenden Byte-Quelle können Daten jederzeit eintreffen. Daher muss die zugrunde liegende Quelle `controller.byobRequest` verwenden, um eingehende Daten zu übertragen, wenn eine vorhanden ist, und andernfalls die Daten in die internen Warteschlangen des Streams einreihen. Da die Daten jederzeit eintreffen können, wird das Überwachungsverhalten in der `underlyingSource.start()`-Callback-Funktion eingerichtet.

Das Beispiel ist stark von einem Push-Byte-Quelle-Beispiel in der Stream-Spezifikation beeinflusst. Es verwendet eine simulierte „hypothetische Socket“-Quelle, die Daten beliebiger Größen bereitstellt. Der Leser wird absichtlich zu verschiedenen Zeitpunkten verzögert, um der zugrunde liegenden Quelle zu erlauben, sowohl Übertragungen als auch Einreihungen zu verwenden, um Daten in den Stream zu senden. Die Unterstützung für Gegendruck wird nicht demonstriert.

> [!NOTE]
> Eine zugrunde liegende Byte-Quelle kann auch mit einem Standardleser verwendet werden. Wenn die automatische Pufferzuweisung aktiviert ist, wird der Controller Festpuffergrößen für null-Kopie-Übertragungen bereitstellen, wenn eine ausstehende Anfrage von einem Leser vorliegt und die internen Warteschlangen des Streams leer sind. Wenn die automatische Pufferzuweisung nicht aktiviert ist, werden alle Daten des Byte-Streams immer eingeragen. Dies ähnelt dem Verhalten, das in den „Pull: Zugrunde liegenden Byte-Quelle Beispielen“ gezeigt wird.

#### Simulierte zugrunde liegende Socket-Quelle

Die simulierte zugrunde liegende Quelle hat drei wichtige Methoden:

- `select2()` steht für eine ausstehende Anforderung auf dem Socket. Es gibt ein Promise zurück, das aufgelöst wird, wenn Daten verfügbar sind.
- `readInto()` liest Daten aus dem Socket in einen bereitgestellten Puffer und löscht dann die Daten.
- `close()` schließt den Socket.

Die Implementierung ist sehr einfach. Wie unten gezeigt, erstellt `select2()` einen zufällig großen Puffer mit zufälligen Daten bei einem Timeout. Die erstellten Daten werden in einen Puffer gelesen und dann in `readInto()` gelöscht.

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

    return new Promise((resolve /*, reject*/) => {
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
  close() {
    return;
  }

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

<!-- Der folgende HTML- und JS-Code richtet die Berichterstellung ein. Versteckt, da es für Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Socket-Push-Byte-Streams

Der folgende Code zeigt, wie man einen lesbaren Socket-„Push“-Byte-Stream definiert.

Die Definition des `underlyingSource`-Objekts wird als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben. Um dies zu einem lesbaren „Byte“-Stream zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an. Dies stellt sicher, dass dem Stream ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) (anstelle des Standard-Controllers ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController))) zugewiesen wird.

Da Daten zum Socket gelangen können, bevor der Verbraucher bereit ist, sie zu verarbeiten, wird alles, was das Lesen der zugrunde liegenden Quelle betrifft, in der `start()`-Callback-Methode konfiguriert (wir warten nicht auf einen Pull, um mit der Verarbeitung von Daten zu beginnen). Die Implementierung öffnet den „Socket“ und ruft `select2()` auf, um Daten anzufordern. Wenn das zurückgegebene Promise aufgelöst wird, überprüft der Code, ob `controller.byobRequest` existiert (nicht `null` ist) und ruft, falls vorhanden, `socket.readInto()` auf, um Daten in die Anforderung zu kopieren und zu übertragen. Wenn `byobRequest` nicht existiert, gibt es keine ausstehende Anfrage vom konsumierenden Stream, die als null-Kopie-Übertragung erfüllt werden kann. In diesem Fall wird `controller.enqueue()` verwendet, um Daten in die internen Warteschlangen des Streams zu kopieren.

Die `select2()`-Anforderung für mehr Daten wird erneut gestellt, bis eine Anforderung ohne Daten zurückgegeben wird. Zu diesem Punkt wird der Controller verwendet, um den Stream zu schließen.

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

Beachten Sie, dass `readRepeatedly()` ein Promise zurückgibt und wir dies verwenden, um Fehler beim Einrichten oder Bearbeiten der Leseoperation aufzufangen. Die Fehler werden dann an den Controller weitergegeben, wie oben gezeigt (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Eine `cancel()`-Methode wird am Ende bereitgestellt, um die zugrunde liegende Quelle zu schließen. Das `pull()`-Callback wird nicht benötigt und ist daher nicht implementiert.

#### Der Push-Byte-Stream konsumieren

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket-Byte-Stream und verwendet ihn, um Daten in einen Puffer zu lesen. Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `reader.read()` mit `done` auf `true` gesetzt, was wiederum die Leseoperation abschließt.

Dieser Code ist fast genau derselbe wie im Beispiel [Underlying pull source with byte reader](#zugrunde_liegende_pull-quelle_mit_byte-reader) oben. Der einzige Unterschied besteht darin, dass der Leser einige Codes enthält, um das Lesen zu verlangsamen, sodass der Logausgang demonstrieren kann, dass Daten eingereiht werden, wenn sie nicht schnell genug gelesen werden.

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
            new Promise((resolve) => setTimeout(resolve, ms));
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

#### Den Stream mit dem Leser abbrechen

Wir können [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) verwenden, um den Stream abzubrechen. In diesem Beispiel rufen wir die Methode auf, wenn ein Button mit dem Grund „Benutzerauswahl“ geklickt wird (anderer HTML-Code und Code für den Button nicht gezeigt). Wir loggen auch, wann die Abbruchoperation abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

[`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) kann verwendet werden, um den Leser freizugeben, ohne den Stream abzubrechen. Beachten Sie jedoch, dass alle ausstehenden Leseanforderungen sofort abgelehnt werden. Später kann ein neuer Leser erworben werden, um die verbleibenden Blöcke zu lesen.

#### Überwachen des Streams für Abschluss/Fehler

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Promise zurück, das aufgelöst wird, wenn der Stream geschlossen wird, und abgelehnt wird, wenn ein Fehler auftritt. Während in diesem Fall keine Fehler erwartet werden, sollte der folgende Code den Abschlussfall loggen.

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

Das Logging von der zugrunde liegenden Push-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt. Nicht die Periode in der Mitte, in der Daten statt als null-Kopie-Operation enqueued werden.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Byte-Reader

Dieses Live-Beispiel zeigt, wie Daten von einer „Pull“-zugrunde liegenden Byte-Quelle, wie etwa einer Datei, gelesen und von einem Stream als null-Kopie-Übertragung auf einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) übertragen werden könnten.

#### Simulierte zugrunde liegende Dateiquelle

Für die zugrunde liegende Pull-Quelle verwenden wir die folgende Klasse, um eine Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle) (_sehr_ oberflächlich) zu simulieren, insbesondere die [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position)-Methode. Die Klasse generiert Zufallsdaten, um eine Datei darzustellen. Die `read()`-Methode liest einen „halbzufällig“ großen Block von zufälligen Daten in einen bereitgestellten Puffer von der angegebenen Position. Die `close()`-Methode macht nichts: Sie wird nur bereitgestellt, um zu zeigen, wo Sie die Quelle schließen könnten, wenn Sie den Konstruktor für den Stream definieren.

> [!NOTE]
> Eine ähnliche Klasse wird für alle „Pull-Quelle“-Beispiele verwendet. Sie wird hier nur zur Information gezeigt (damit klar ist, dass es sich um eine Simulation handelt).

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

    return new Promise((resolve /*, reject*/) => {
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
  close() {
    return;
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

  // Return random Uint8Array of bytes
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet die Berichterstellung ein. Versteckt, da es für Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Datei-Byte-Streams

Der folgende Code zeigt, wie man einen lesbaren Datei-Byte-Stream definiert.

Genau wie im vorherigen Beispiel wird die Definition des `underlyingSource`-Objekts als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben. Um dies zu einem lesbaren „Byte“-Stream zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an. Dies stellt sicher, dass dem Stream ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) zugewiesen wird.

Die `start()`-Funktion öffnet einfach den Dateigriff, der dann im `cancel()`-Callback geschlossen wird. `cancel()` wird bereitgestellt, um alle Ressourcen freizugeben, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen werden.

Der größte Teil des interessanten Codes befindet sich im `pull()`-Callback. Dieser kopiert Daten aus der Datei in die ausstehende Leseanforderung ([`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)) und ruft dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) auf, um anzugeben, wie viele Daten im Puffer sind und sie zu übertragen. Wenn 0 Bytes von der Datei übertragen wurden, wissen wir, dass alles kopiert wurde, und rufen [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) auf dem Controller auf, was wiederum dazu führt, dass `cancel()` auf der zugrunde liegenden Quelle aufgerufen wird.

```js
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
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
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

#### Den Byte-Stream konsumieren

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei-Byte-Stream und verwendet ihn, um Daten in einen Puffer zu lesen. Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `reader.read()` mit `done` auf `true` gesetzt, was wiederum die Leseoperation abschließt.

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

Zuletzt fügen wir einen Handler hinzu, der den Stream abbricht, wenn ein Button geklickt wird (anderer HTML-Code und Code für den Button nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Logging von der zugrunde liegenden Pull-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt. Besonders bemerkenswert ist, dass die:

- `start()`-Funktion einen `ReadableByteStreamController` übergeben bekommt
- der vom Leser übergebene Puffer groß genug ist, um die gesamte „Datei“ zu umfassen. Die zugrunde liegende Datenquelle liefert die Daten in zufällig großen Blöcken.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standardleser

Dieses Live-Beispiel zeigt, wie die gleichen Daten als null-Kopie-Übertragung unter Verwendung eines Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden könnten. Dies verwendet dieselbe [simulierte zugrunde liegende Dateiquelle](#simulierte_zugrunde_liegende_dateiquelle) wie im vorhergehenden Beispiel.

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

    return new Promise((resolve /*, reject*/) => {
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
  close() {
    return;
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

  // Return random Uint8Array of bytes
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet die Berichterstellung ein. Versteckt, da es für Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Datei-Byte-Streams mit automatischer Pufferzuweisung

Der einzige Unterschied in unserer zugrunde liegenden Quelle besteht darin, dass wir `autoAllocateChunkSize` angeben müssen und dass die Größe als Ansichtspuffergröße für `controller.byobRequest` verwendet wird, anstatt eines vom Verbraucher bereitgestellten.

```js
const DEFAULT_CHUNK_SIZE = 20;
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
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
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE, // Only relevant if using a default reader
  });
}
```

#### Den Byte-Stream mit einem Standardleser konsumieren

Der folgende Code erstellt einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) für den Datei-Byte-Stream durch Aufruf von `stream.getReader();` ohne den Modus anzugeben, und verwendet ihn, um Daten in einen Puffer zu lesen. Der Betrieb des Codes ist derselbe wie im vorherigen Beispiel, außer dass der Puffer vom Stream und nicht vom Verbraucher bereitgestellt wird.

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

Zuletzt fügen wir einen Handler hinzu, der den Stream abbricht, wenn ein Button geklickt wird (anderer HTML-Code und Code für den Button nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Logging von der zugrunde liegenden Byte-Pull-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt.

Beachten Sie, dass die Blöcke jetzt _höchstens_ 20-Byte breit sind, da dies die Größe des automatisch zugewiesenen Puffers ist, der in der zugrunde liegenden Byte-Quelle (`autoAllocateChunkSize`) angegeben wurde. Diese werden als null-Kopie-Übertragungen durchgeführt.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standardleser und ohne Zuweisung

Der Vollständigkeit halber können wir auch einen Standardleser mit einer Byte-Quelle verwenden, die keine automatische Pufferzuweisung unterstützt.

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

    return new Promise((resolve /*, reject*/) => {
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
  close() {
    return;
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

  // Return random Uint8Array of bytes
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet die Berichterstellung ein. Versteckt, da es für Leser nicht nützlich ist -->

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

In diesem Fall liefert der Controller jedoch keine `byobRequest` für die zugrunde liegende Quelle zum Beschreiben. Stattdessen müsste die zugrunde liegende Quelle die Daten einreihen. Beachten Sie unten, dass wir in `pull()` prüfen müssen, ob die `byobRequest` existiert, um diesen Fall zu unterstützen.

```js
const stream = makeReadableByteFileStream("dummy file.txt");
const DEFAULT_CHUNK_SIZE = 40;

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
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
      // This is called if the stream is cancelled (via reader or controller).
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

Das Logging von der zugrunde liegenden Pull-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt. Beachten Sie, dass die zugrunde liegende Quellseite zeigt, dass die Daten eingelegt wurden, anstatt null-Byte-übertragen zu werden.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
