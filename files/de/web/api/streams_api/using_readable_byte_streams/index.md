---
title: Verwendung von Readable Byte Streams
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Readable _byte streams_ sind [readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), die eine zugrunde liegende Byte-Quelle vom `type: "bytes"` haben und effiziente Zero-Copy-Übertragungen von Daten von der zugrunde liegenden Quelle zu einem Verbraucher unterstützen (unter Umgehung der internen Warteschlangen des Streams). Sie sind für Anwendungsfälle gedacht, in denen Daten in beliebig großen und potenziell sehr großen Blöcken geliefert oder angefordert werden können, und wo das Vermeiden von Kopien voraussichtlich die Effizienz verbessert.

Dieser Artikel erklärt, wie Readable Byte Streams im Vergleich zu normalen "Standard"-Streams funktionieren und wie Sie sie erstellen und konsumieren können.

> [!NOTE]
> Readable Byte Streams sind fast identisch mit "normalen" Readable Streams, und fast alle Konzepte sind gleich.
> Dieser Artikel geht davon aus, dass Sie diese Konzepte bereits verstehen, und wird sie nur oberflächlich behandeln (falls überhaupt).
> Falls Sie mit den relevanten Konzepten nicht vertraut sind, lesen Sie bitte zuerst: [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage), und [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts).

## Überblick

Readable Streams bieten eine konsistente Schnittstelle für das Streaming von Daten aus einer zugrunde liegenden Quelle, wie einer Datei oder einem Socket, zu einem Verbraucher, wie einem Reader, einem Transform-Stream oder einem Writable-Stream. In einem normalen Readable Stream gelangen Daten aus der zugrunde liegenden Quelle immer über die internen Warteschlangen zu einem Verbraucher. Ein Readable Byte Stream unterscheidet sich dadurch, dass, wenn die internen Warteschlangen leer sind, die zugrunde liegende Quelle direkt an den Verbraucher schreiben kann (ein effizienter Zero-Copy-Transfer).

Ein Readable Byte Stream wird erstellt, indem `type: "bytes"` im `underlyingSource`-Objekt spezifiziert wird, das als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann. Mit diesem Wert wird der Stream mit einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erstellt, und dieses Objekt wird an die zugrunde liegende Quelle übergeben, wenn die `start(controller)`- und `pull(controller)`-Callback-Funktionen aufgerufen werden.

Der Hauptunterschied zwischen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und dem Standard-Controller ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)) besteht darin, dass er eine zusätzliche Eigenschaft [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vom Typ [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat. Diese stellt eine ausstehende Leseanforderung durch einen Verbraucher dar, die als Zero-Copy-Transfer von der zugrunde liegenden Quelle erfolgen wird. Die Eigenschaft ist `null`, wenn keine ausstehende Anfrage vorliegt.

Ein `byobRequest` wird nur dann verfügbar gemacht, wenn eine Leseanforderung für einen Readable Byte Stream gestellt wird und keine Daten in den internen Warteschlangen des Streams vorhanden sind (wenn Daten vorhanden sind, wird die Anfrage aus diesen Warteschlangen erfüllt).

Eine zugrunde liegende Byte-Quelle, die Daten übertragen muss, muss die `byobRequest`-Eigenschaft überprüfen und, wenn diese verfügbar ist, sie verwenden, um Daten zu übertragen. Wenn die Eigenschaft `null` ist, sollten eingehende Daten stattdessen den internen Warteschlangen des Streams mittels [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) hinzugefügt werden (dies ist der einzige Weg, um Daten bei Verwendung eines "Standard"-Streams zu übertragen).

Das [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat eine [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft, die eine Ansicht auf den für die Übertragung zugewiesenen Puffer darstellt. Daten von einer zugrunde liegenden Quelle sollten in diese Eigenschaft geschrieben und dann die [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond)-Methode aufgerufen werden, um die Anzahl der geschriebenen Bytes anzugeben. Dadurch wird signalisiert, dass die Daten übertragen werden sollen, und die ausstehende Leseanforderung durch den Verbraucher wird abgeschlossen. Nach dem Aufruf von `respond()` kann die `view` nicht mehr beschrieben werden.

Es gibt auch eine zusätzliche Methode [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView), an die eine zugrunde liegende Quelle eine "neue" Ansicht übergeben kann, die die zu übertragenden Daten enthält. Diese neue Ansicht muss über denselben Speicherpuffer wie das Original sein und vom selben Startoffset ausgehend. Diese Methode könnte verwendet werden, wenn die zugrunde liegende Byte-Quelle die Ansicht zuerst in einen Worker-Thread übertragen muss, um sie zu füllen (zum Beispiel) und dann zurückerhalten muss, bevor sie auf die `byobRequest` antwortet. In den meisten Fällen wird diese Methode nicht benötigt.

Readable Byte Streams werden normalerweise mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen, den man durch Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) am Stream erhält, wobei `mode: "byob"` im Parameteroptionen angegeben wird.

Ein Readable Byte Stream kann auch mit einem Standard-Reader ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden, aber in diesem Fall werden `byobRequest`-Objekte nur erstellt, wenn die automatische Pufferzuweisung für den Stream aktiviert ist ([`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) wurde für die `underlyingSource` des Streams festgelegt). Beachten Sie, dass die durch `autoAllocateChunkSize` angegebene Größe in diesem Fall für die Puffergröße verwendet wird; für einen Byte-Reader wird der Puffer vom Verbraucher bereitgestellt. Wenn die Eigenschaft nicht spezifiziert wurde, wird der Standard-Reader immer noch "funktionieren", aber der zugrunde liegenden Quelle wird nie eine `byobRequest` angeboten, und alle Daten werden über die internen Warteschlangen des Streams übertragen.

Abgesehen von den oben beschriebenen Unterschieden sind der Controller und die zugrunde liegende Quelle für Byte-Streams denen für Standard-Streams sehr ähnlich, [und werden auf die gleiche Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrunde liegende Push-Quelle mit Byte-Reader

Dieses Live-Beispiel zeigt, wie man einen Readable Byte Stream mit einer _Push_ zugrunde liegenden Byte-Quelle erstellt und ihn mit einem Byte-Reader liest.

Im Gegensatz zu einer Pull zugrunde liegenden Byte-Quelle können Daten jederzeit eintreffen.
Daher muss die zugrunde liegende Quelle `controller.byobRequest` verwenden, um eingehende Daten zu übertragen, falls eine vorhanden ist, und andernfalls die Daten in die internen Warteschlangen des Streams einfügen.
Da die Daten jederzeit eintreffen können, wird das Überwachungsverhalten in der `underlyingSource.start()`-Callback-Funktion eingerichtet.

Das Beispiel wird stark von einem Push-Byte-Quellenbeispiel in der Stream-Spezifikation beeinflusst.
Es verwendet eine simulierte "hypothetische Socket"-Quelle, die Daten von beliebigen Größen liefert.
Der Reader ist absichtlich an verschiedenen Stellen verzögert, um es der zugrunde liegenden Quelle zu ermöglichen, sowohl das Übertragen als auch das Einreihen zu verwenden, um Daten an den Stream zu senden. Die Unterstützung für Gegendruck wird nicht demonstriert.

> [!NOTE]
> Eine zugrunde liegende Byte-Quelle kann auch mit einem Standard-Reader verwendet werden.
> Wenn die automatische Pufferzuweisung aktiviert ist, stellt der Controller bei einer ausstehenden Anforderung eines Lesers und bei leeren internen Warteschlangen des Streams feste Puffer für Zero-Copy-Transfers bereit.
> Wenn die automatische Pufferzuweisung nicht aktiviert ist, werden alle Daten des Byte-Streams immer in die Warteschlange gestellt.
> Das ist ähnlich dem Verhalten, das in den "Pull: underlying byte source"-Beispielen gezeigt wird.

#### Simulierte zugrunde liegende Socket-Quelle

Die simulierte zugrunde liegende Quelle hat drei wichtige Methoden:

- `select2()` repräsentiert eine ausstehende Anfrage am Socket.
  Sie gibt ein Promise zurück, das aufgelöst wird, wenn Daten verfügbar sind.
- `readInto()` liest Daten vom Socket in einen bereitgestellten Puffer und löscht dann die Daten.
- `close()` schließt den Socket.

Die Implementierung ist sehr einfach gehalten.
Wie unten gezeigt, erzeugt `select2()` einen zufällig dimensionierten Puffer mit zufälligen Daten bei einem Timeout.
Die erzeugten Daten werden in einen Puffer gelesen und dann in `readInto()` gelöscht.

```js
class MockHypotheticalSocket {
  constructor() {
    this.max_data = 800; // total amount of data to stream from "socket"
    this.max_per_read = 100; // max data per read
    this.min_per_read = 40; // min data per read
    this.data_read = 0; // total data read so far (capped is maxdata)
    this.socketdata = null;
  }

  // Method returning promise when this socket is readable.
  select2() {
    // Object used to resolve promise
    const resultobj = {};
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (this.data_read >= this.max_data) {
        //out of data
        resolve(resultobj);
        return;
      }

      // Emulate slow read of data
      setTimeout(() => {
        const numberBytesReceived = this.getNumberRandomBytesSocket();
        this.data_read += numberBytesReceived;
        this.socketdata = this.randomByteArray(numberBytesReceived);
        resultobj["bytesRead"] = numberBytesReceived;
        resolve(resultobj);
      }, 500);
    });
  }

  /* Read data into specified buffer offset */
  readInto(buffer, offset, length) {
    let length_data = 0;
    if (this.socketdata) {
      length_data = this.socketdata.length;
      const myview = new Uint8Array(buffer, offset, length);
      // Write the length of data specified into buffer
      // Code assumes buffer always bigger than incoming data
      for (let i = 0; i < length_data; i++) {
        myview[i] = this.socketdata[i];
      }
      this.socketdata = null; // Clear "socket" data after reading
    }
    return length_data;
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

<!-- Der folgende HTML- und JS-Code richtet Berichte ein. Versteckt, da er für die Leser nicht nützlich ist -->

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

#### Erstellung eines lesbaren Socket Push Byte Streams

Der folgende Code zeigt, wie ein lesbarer Socket "Push" Byte Stream definiert wird.

Die Definition des `underlyingSource`-Objekts wird als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um dies zu einem lesbaren "Byte"-Stream zu machen, spezifizieren wir `type: "bytes"` als Eigenschaft des Objekts.
Dadurch wird sichergestellt, dass der Stream einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erhält (anstelle des Standard-Controllers ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)))

Da Daten am Socket eintreffen können, bevor der Verbraucher bereit ist, sie zu bearbeiten, wird alles, was mit dem Lesen der zugrunde liegenden Quelle zu tun hat, in der `start()`-Callback-Methode konfiguriert (wir warten nicht darauf, dass ein Pull startet, bevor Daten gehandhabt werden).
Die Implementierung öffnet den "Socket" und ruft `select2()` auf, um Daten anzufordern.
Wenn das zurückgegebene Promise aufgelöst wird, überprüft der Code, ob `controller.byobRequest` existiert (also nicht `null` ist), und wenn ja, wird `socket.readInto()` aufgerufen, um Daten in die Anfrage zu kopieren und sie zu übertragen.
Wenn `byobRequest` nicht existiert, gibt es keine ausstehende Anfrage von einem konsumierenden Stream, die als Zero-Copy-Transfer erfüllt werden kann. In diesem Fall wird `controller.enqueue()` verwendet, um Daten in die internen Warteschlangen des Streams zu kopieren.

Die `select2()`-Anforderung für mehr Daten wird so lange neu gepostet, bis eine Anforderung ohne Daten zurückgegeben wird. In diesem Punkt wird der Controller verwendet, um den Stream zu schließen.

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

Beachten Sie, dass `readRepeatedly()` ein Promise zurückgibt, und wir verwenden dies, um mögliche Fehler beim Einrichten oder Handhaben der Leseoperation abzufangen. Die Fehler werden dann wie oben gezeigt an den Controller weitergegeben (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Eine `cancel()`-Methode wird am Ende bereitgestellt, um die zugrunde liegende Quelle zu schließen; der `pull()`-Callback wird nicht benötigt und deshalb nicht implementiert.

#### Konsumierung des Push Byte Streams

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket Byte Stream und verwendet ihn, um Daten in einen Puffer zu lesen.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `reader.read()` `done` auf true gesetzt, was wiederum den Lesevorgang abschließt.

Dieser Code ist fast genau der gleiche wie für das [Underlying pull source with byte reader](#zugrunde_liegende_pull-quelle_mit_byte-reader)-Beispiel oben. Der einzige Unterschied besteht darin, dass der Reader einige Codezeilen enthält, um das Lesen zu verlangsamen, sodass die Protokollausgabe zeigen kann, dass Daten in die Warteschlange gestellt werden, wenn sie nicht schnell genug gelesen werden können.

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

        //logConsumer(`Read ${bytesReceived} bytes: ${value}`);
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

#### Abbrechen des Streams mit dem Reader

Wir können [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) verwenden, um den Stream abzubrechen.
In diesem Beispiel rufen wir die Methode auf, wenn eine Schaltfläche mit dem Grund "Benutzerauswahl" angeklickt wird (andere HTML und Code für die Schaltfläche nicht gezeigt).
Wir protokollieren auch, wann der Abbruchvorgang abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

[`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) kann verwendet werden, um den Reader freizugeben, ohne den Stream abzubrechen. Beachten Sie jedoch, dass ausstehende Leseanforderungen sofort abgelehnt werden. Ein neuer Reader kann später erworben werden, um die verbleibenden Datenblöcke zu lesen.

#### Überwachung des Streams auf Schließen oder Fehler

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Promise zurück, das aufgelöst wird, wenn der Stream geschlossen wird, und abgelehnt wird, falls ein Fehler auftritt.
Obwohl in diesem Fall keine Fehler erwartet werden, sollte der folgende Code den Abschlussfall protokollieren.

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

Das Protokoll der zugrunde liegenden Push-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.
Beachten Sie den Zeitraum in der Mitte, in dem Daten statt als Zero-Copy-Operation in die Warteschlange gestellt werden.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Byte-Reader

Dieses Live-Beispiel zeigt, wie Daten von einer "Pull" zugrunde liegenden Byte-Quelle, wie einer Datei, gelesen und von einem Stream als Zero-Copy-Transfer an einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) übertragen werden können.

#### Simulierte zugrunde liegende Datei-Quelle

Für die zugrunde liegende Pull-Quelle verwenden wir die folgende Klasse, um (sehr oberflächlich) einen Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle) zu simulieren, insbesondere die [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position)-Methode.
Die Klasse generiert zufällige Daten, um eine Datei darzustellen.
Die `read()`-Methode liest einen "halbzufällig" dimensionierten Block zufälliger Daten in einen bereitgestellten Puffer von der angegebenen Position.
Die `close()`-Methode tut nichts: sie wird nur bereitgestellt, um zu zeigen, wo Sie möglicherweise die Quelle schließen würden, wenn Sie den Konstruktor für den Stream definieren.

> [!NOTE]
> Eine ähnliche Klasse wird für alle "Pull-Source"-Beispiele verwendet.
> Sie wird hier nur zur Information gezeigt (damit offensichtlich ist, dass es sich um eine Simulation handelt).

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
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultobj);
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
      const myview = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultobj);
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

<!-- Der folgende HTML- und JS-Code richtet Berichte ein. Versteckt, da er für die Leser nicht nützlich ist -->

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

#### Erstellung eines lesbaren Datei Byte Streams

Der folgende Code zeigt, wie ein lesbarer Datei Byte Stream definiert wird.

Genau wie im vorherigen Beispiel wird die Definition des `underlyingSource`-Objekts als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um dies zu einem lesbaren "Byte"-Stream zu machen, spezifizieren wir `type: "bytes"` als Eigenschaft des Objekts.
Dadurch wird sichergestellt, dass der Stream einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erhält.

Die `start()`-Funktion öffnet einfach den Datei-Handle, der dann im `cancel()`-Callback geschlossen wird.
`cancel()` wird bereitgestellt, um alle Ressourcen zu bereinigen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen werden.

Der Großteil des interessanten Codes befindet sich im `pull()`-Callback.
Dieser kopiert Daten von der Datei in die ausstehende Leseanforderung ([`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)) und ruft dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) auf, um anzugeben, wie viele Daten sich im Puffer befinden, und überträgt sie.
Wenn 0 Bytes von der Datei übertragen wurden, wissen wir, dass alles kopiert wurde, und rufen [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) am Controller auf, was wiederum dazu führt, dass `cancel()` an der zugrunde liegenden Quelle aufgerufen wird.

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

#### Konsumierung des Byte Streams

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei Byte Stream und verwendet ihn, um Daten in einen Puffer zu lesen.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `reader.read()` `done` auf true gesetzt, was wiederum den Lesevorgang abschließt.

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

Schließlich fügen wir einen Handler hinzu, der den Stream abbricht, wenn eine Schaltfläche angeklickt wird (andere HTML und Code für die Schaltfläche nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Protokoll der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.
Von besonderem Interesse sind:

- Die `start()`-Funktion wird mit einem `ReadableByteStreamController` aufgerufen.
- Der Puffer, der an den Reader übergeben wird, ist groß genug, um die gesamte "Datei" zu umfassen.
  Die zugrunde liegende Datenquelle liefert die Daten in zufällig dimensionierten Blöcken.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standard-Reader

Dieses Live-Beispiel zeigt, wie dieselben Daten als Zero-Copy-Transfer unter Verwendung eines Standard-Readers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden könnten.
Dazu wird dieselbe [simulierte zugrunde liegende Datei-Quelle](#simulierte_zugrunde_liegende_datei-quelle) wie im vorherigen Beispiel genutzt.

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
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultobj);
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
      const myview = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultobj);
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

<!-- Der folgende HTML- und JS-Code richtet Berichte ein. Versteckt, da er für die Leser nicht nützlich ist -->

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

#### Erstellung eines lesbaren Datei Byte Streams mit automatischer Pufferzuweisung

Der einzige Unterschied in unserer zugrunde liegenden Quelle besteht darin, dass wir `autoAllocateChunkSize` festlegen müssen und dass die Größe als Ansichts-Puffergröße für `controller.byobRequest` verwendet wird, anstatt einer, der vom Verbraucher bereitgestellt wird.

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

#### Konsumierung des Byte Streams mit Standard-Reader

Der folgende Code erstellt einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) für den Datei Byte Stream, indem `stream.getReader();` ohne Angabe des Modus aufgerufen wird, und verwendet ihn, um Daten in einen Puffer zu lesen.
Die Funktionsweise des Codes ist die gleiche wie im vorherigen Beispiel, außer dass der Puffer vom Stream bereitgestellt wird und nicht vom Verbraucher.

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

Schließlich fügen wir einen Handler hinzu, der den Stream abbricht, wenn eine Schaltfläche angeklickt wird (andere HTML und Code für die Schaltfläche nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Protokoll der zugrunde liegenden Byte-Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.

Beachten Sie, dass die Blöcke jetzt _höchstens_ 20 Byte breit sind, da dies die Größe des automatisch zugewiesenen Puffers ist, die in der zugrunde liegenden Byte-Quelle (`autoAllocateChunkSize`) angegeben wurde.
Diese werden als Zero-Copy-Transfers ausgeführt.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standard-Reader und ohne Zuweisung

Der Vollständigkeit halber können wir auch einen Standard-Reader mit einer Byte-Quelle verwenden, die keine automatische Pufferzuweisung unterstützt.

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
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultobj);
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
      const myview = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultobj);
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

<!-- Der folgende HTML- und JS-Code richtet Berichte ein. Versteckt, da er für die Leser nicht nützlich ist -->

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

In diesem Fall stellt der Controller jedoch keine `byobRequest` zur Verfügung, in die die zugrunde liegende Quelle schreiben kann.
Stattdessen müsste die zugrunde liegende Quelle die Daten in die Warteschlange einstellen. Beachten Sie unten, dass wir in `pull()` überprüfen müssen, ob der `byobRequest` existiert, um diesen Fall zu unterstützen.

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
        const mynewBuffer = new Uint8Array(DEFAULT_CHUNK_SIZE);
        const { bytesRead, buffer } = await fileHandle.read(
          mynewBuffer.buffer,
          mynewBuffer.byteOffset,
          mynewBuffer.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.enqueue(mynewBuffer);
          logSource(
            `pull() with no byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.enqueue(mynewBuffer);
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

Das Protokoll der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.
Beachten Sie, dass die Seite der zugrunde liegenden Quelle zeigt, dass die Daten in die Warteschlange gestellt wurden, anstatt als Zero-Byte-Transfer zu erfolgen.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
