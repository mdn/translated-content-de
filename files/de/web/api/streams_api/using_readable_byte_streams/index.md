---
title: Verwenden von lesbaren Byte-Streams
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{DefaultAPISidebar("Streams")}}

Lesbare _Byte-Streams_ sind [lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), die über eine zugrunde liegende Byte-Quelle vom `type: "bytes"` verfügen und die eine effiziente Zero-Copy-Übertragung von Daten von der zugrunde liegenden Quelle zu einem Verbraucher unterstützen (wobei die internen Warteschlangen des Streams umgangen werden). Sie sind für Anwendungsfälle gedacht, bei denen Daten in beliebig großen und potenziell sehr großen Blöcken bereitgestellt oder angefordert werden, und bei denen das Vermeiden von Kopien wahrscheinlich die Effizienz verbessert.

Dieser Artikel erklärt, wie lesbare Byte-Streams im Vergleich zu normalen "Standard"-Streams stehen und wie Sie diese erstellen und konsumieren.

> [!NOTE]
> Lesbare Byte-Streams sind fast identisch mit "normalen" lesbaren Streams und fast alle Konzepte sind dieselben. Dieser Artikel setzt voraus, dass Sie diese Konzepte bereits verstehen, und behandelt sie nur oberflächlich (wenn überhaupt). Wenn Sie mit den relevanten Konzepten nicht vertraut sind, lesen Sie bitte zuerst: [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage) und [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts).

## Übersicht

Lesbare Streams bieten eine konsistente Schnittstelle zum Streamen von Daten aus einer zugrunde liegenden Quelle, wie einer Datei oder einem Socket, zu einem Verbraucher, wie einem Leser, Transformations-Stream oder beschreibbaren Stream. In einem normalen lesbaren Stream werden Daten von der zugrunde liegenden Quelle immer über die internen Warteschlangen zu einem Verbraucher geleitet. Ein lesbarer Byte-Stream unterscheidet sich dadurch, dass die zugrunde liegende Quelle, wenn die internen Warteschlangen leer sind, direkt zum Verbraucher schreiben kann (ein effizienter Zero-Copy-Transfer).

Ein lesbarer Byte-Stream wird erstellt, indem `type: "bytes"` im `underlyingSource`-Objekt angegeben wird, das als erster Parameter dem [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann. Mit diesem Wert wird der Stream mit einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erstellt, und dies ist das Objekt, das an die zugrunde liegende Quelle übergeben wird, wenn die `start(controller)`- und `pull(controller)`-Callback-Funktionen aufgerufen werden.

Der Hauptunterschied zwischen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und dem Standard-Controller ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)) besteht darin, dass er eine zusätzliche Eigenschaft [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vom Typ [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat. Dies stellt eine ausstehende Leseanforderung durch einen Verbraucher dar, die als Zero-Copy-Transfer von der zugrunde liegenden Quelle durchgeführt werden wird. Die Eigenschaft ist `null`, wenn keine ausstehende Anforderung vorliegt.

Eine `byobRequest` wird nur dann verfügbar gemacht, wenn eine Leseanforderung an einen lesbaren Byte-Stream gestellt wird und keine Daten in den internen Warteschlangen des Streams vorhanden sind (wenn Daten vorhanden sind, wird die Anforderung aus diesen Warteschlangen bedient).

Eine zugrunde liegende Byte-Quelle, die Daten übertragen muss, muss die Eigenschaft `byobRequest` überprüfen und, wenn sie verfügbar ist, sie zur Datenübertragung verwenden. Wenn die Eigenschaft `null` ist, sollten eingehende Daten stattdessen in die internen Warteschlangen des Streams mit [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) hinzugefügt werden (dies ist die einzige Möglichkeit, Daten beim Verwenden eines "Standard"-Streams zu übertragen).

Die [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat eine [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft, die eine Ansicht des für die Übertragung zugewiesenen Puffers darstellt. Daten von einer zugrunde liegenden Quelle sollten in diese Eigenschaft geschrieben werden, und dann muss die zugrunde liegende Quelle [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufrufen und die Anzahl der geschriebenen Bytes angeben. Dies signalisiert, dass die Daten übertragen und die ausstehende Leseanforderung des Verbrauchers erfüllt werden sollen. Nach dem Aufruf von `respond()` kann die `view` nicht mehr beschrieben werden.

Es gibt auch eine zusätzliche Methode [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView), zu der eine zugrunde liegende Quelle eine "neue" Ansicht mit den zu übertragenen Daten übergeben kann. Diese neue Ansicht muss über denselben Speicherpuffer wie das Original verfügen und denselben Startversatz verwenden. Diese Methode könnte verwendet werden, wenn die zugrunde liegende Byte-Quelle die Ansicht zunächst an einen Arbeiter-Thread zur Befüllung übertragen muss (zum Beispiel) und dann zurückholen muss, bevor die `byobRequest`-Antwort erfolgt. In den meisten Fällen wird diese Methode nicht benötigt.

Lesbare Byte-Streams werden normalerweise mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen, der durch das Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) des Streams erhalten werden kann, wobei `mode: "byob"` im Optionsparameter angegeben wird.

Ein lesbarer Byte-Stream kann auch mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden, aber in diesem Fall werden `byobRequest`-Objekte nur erstellt, wenn die automatische Pufferzuweisung für den Stream aktiviert ist ([`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) wurde für die `underlyingSource` des Streams gesetzt). Beachten Sie, dass die durch `autoAllocateChunkSize` angegebene Größe in diesem Fall für die Puffergröße verwendet wird; für einen Byte-Leser wird der vom Verbraucher bereitgestellte Puffer verwendet. Wenn die Eigenschaft nicht angegeben wurde, "funktioniert" der Standardleser weiterhin, aber der zugrunde liegenden Quelle wird nie eine `byobRequest` angeboten, und alle Daten werden über die internen Warteschlangen des Streams übertragen.

Abgesehen von den oben genannten Unterschieden sind der Controller und die zugrunde liegende Quelle für Bytes-Streams derjenigen für Standard-Streams sehr ähnlich [und werden auf ähnliche Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrundeliegende Push-Quelle mit Byte-Reader

Dieses Live-Beispiel zeigt, wie ein lesbarer Byte-Stream mit einer _Push_-zugrunde liegenden Byte-Quelle erstellt und mit einem Byte-Reader gelesen wird.

Anders als bei einer Pull-zugrunde liegenden Byte-Quelle können Daten jederzeit eintreffen. Daher muss die zugrunde liegende Quelle `controller.byobRequest` verwenden, um eingehende Daten zu übertragen, falls vorhanden, und andernfalls die Daten in die internen Warteschlangen des Streams einreihen. Da die Daten jederzeit eintreffen können, wird das Überwachungsverhalten in der `underlyingSource.start()`-Callback-Funktion eingerichtet.

Das Beispiel ist stark von einem Push-Byte-Quellenbeispiel in der Stream-Spezifikation beeinflusst. Es verwendet eine gemockte "hypothetische Socket"-Quelle, die Daten beliebiger Größen liefert. Der Leser wird absichtlich an verschiedenen Stellen verzögert, um es der zugrunde liegenden Quelle zu ermöglichen, sowohl Übertragung als auch Einreihung zu verwenden, um Daten an den Stream zu senden. Unterstützung für Druckausgleich wird nicht demonstriert.

> [!NOTE]
> Eine zugrunde liegende Byte-Quelle kann auch mit einem Standardleser verwendet werden. Wenn die automatische Pufferzuweisung aktiviert ist, stellt der Controller feste Puffergrößen für Zero-Copy-Übertragungen bereit, wenn eine ausstehende Anfrage von einem Leser vorliegt und die internen Warteschlangen des Streams leer sind. Wenn die automatische Pufferzuweisung nicht aktiviert ist, werden alle Daten aus dem Byte-Stream immer eingereiht. Dies ähnelt dem Verhalten, das in den "Pull: zugrunde liegende Byte-Quellen"-Beispielen gezeigt wird.

#### Gemockte zugrunde liegende Socket-Quelle

Die gemockte zugrunde liegende Quelle hat drei wichtige Methoden:

- `select2()` stellt eine ausstehende Anfrage auf dem Socket dar. Sie gibt ein Versprechen zurück, das aufgelöst wird, wenn Daten verfügbar sind.
- `readInto()` liest Daten vom Socket in einen bereitgestellten Puffer und löscht dann die Daten.
- `close()` schließt den Socket.

Die Implementierung ist sehr einfach. Wie unten gezeigt, erzeugt `select2()` einen zufällig großen Puffer zufälliger Daten bei einem Timeout. Die erstellten Daten werden in einen Puffer gelesen und dann in `readInto()` gelöscht.

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

<!-- Der folgende HTML und JS sorgt für die Berichterstattung. Versteckt, da es für die Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Socket Push Byte-Streams

Der folgende Code zeigt, wie ein lesbarer Socket "Push"-Byte-Stream definiert wird.

Die Definition des `underlyingSource`-Objekts wird als erster Parameter dem [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben. Um daraus einen lesbaren "Byte"-Stream zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an. Dies stellt sicher, dass dem Stream ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) (anstelle des Standard-Controllers ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController))) übergeben wird.

Da Daten am Socket eintreffen können, bevor der Verbraucher bereit ist, sie zu verarbeiten, wird alles, was das Lesen der zugrunde liegenden Quelle betrifft, in der `start()`-Callback-Methode konfiguriert (wir warten nicht darauf, dass ein Pull erfolgt, um die Datenverarbeitung zu starten). Die Implementierung öffnet den "Socket" und ruft `select2()` auf, um Daten anzufordern. Wenn das zurückgegebene Versprechen aufgelöst wird, überprüft der Code, ob `controller.byobRequest` existiert (nicht `null` ist) und ruft, falls ja, `socket.readInto()` auf, um Daten in die Anforderung zu kopieren und zu übertragen. Wenn `byobRequest` nicht existiert, gibt es keine ausstehende Anfrage von einem konsumierenden Stream, die als Zero-Copy-Transfer erfüllt werden kann. In diesem Fall wird `controller.enqueue()` verwendet, um Daten in die internen Warteschlangen des Streams zu kopieren.

Die `select2()`-Anforderung für weitere Daten wird erneut gesendet, bis eine Anforderung ohne Daten zurückgegeben wird. An diesem Punkt wird der Controller verwendet, um den Stream zu schließen.

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

Beachten Sie, dass `readRepeatedly()` ein Versprechen zurückgibt und wir dieses verwenden, um eventuelle Fehler beim Einrichten oder Bearbeiten der Leseoperation zu erfassen. Die Fehler werden dann an den Controller weitergegeben, wie oben gezeigt (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Am Ende wird eine `cancel()`-Methode bereitgestellt, um die zugrunde liegende Quelle zu schließen; der `pull()`-Callback wird nicht benötigt und daher nicht implementiert.

#### Konsumieren des Push Byte-Streams

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket-Byte-Stream und verwendet ihn, um Daten in einen Puffer zu lesen. Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass keine weiteren Daten vorhanden sind, wird `reader.read()` als `done` gesetzt, was wiederum den Lesevorgang abschließt.

Dieser Code ist fast genau derselbe wie für das Beispiel [Zugrundeliegende Pull-Quelle mit Byte-Reader](#zugrundeliegende_pull-quelle_mit_byte-reader) oben. Der einzige Unterschied besteht darin, dass der Leser etwas Code enthält, der das Lesen verlangsamt, sodass die Protokollausgabe zeigen kann, dass Daten eingereiht werden, wenn sie nicht schnell genug gelesen werden.

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

#### Abbrechen des Streams mit dem Leser

Wir können [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) verwenden, um den Stream abzubrechen. Für dieses Beispiel rufen wir die Methode auf, wenn eine Schaltfläche mit dem Grund "Benutzerwahl" geklickt wird (anderer HTML-Code und Code für die Schaltfläche nicht gezeigt). Wir protokollieren auch, wann der Abbruchvorgang abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

[`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) kann verwendet werden, um den Leser freizugeben, ohne den Stream abzubrechen. Beachten Sie jedoch, dass alle ausstehenden Leseanforderungen sofort abgelehnt werden. Ein neuer Leser kann später erworben werden, um die verbleibenden Teile zu lesen.

#### Überwachung des Streams auf Schließen/Fehler

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Versprechen zurück, das aufgelöst wird, wenn der Stream geschlossen wird, und abgelehnt wird, wenn ein Fehler auftritt. Obwohl in diesem Fall keine Fehler erwartet werden, sollte der folgende Code den Abschlussfall protokollieren.

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

Die Protokollierung von der zugrunde liegenden Push-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt. Beachten Sie den Zeitraum in der Mitte, in dem Daten eingereiht anstatt als Zero-Copy-Operation übertragen werden.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Zugrundeliegende Pull-Quelle mit Byte-Reader

Dieses Live-Beispiel zeigt, wie Daten von einer "Pull"-zugrunde liegenden Byte-Quelle, wie einer Datei, gelesen und von einem Stream als Zero-Copy-Transfer an einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) übertragen werden können.

#### Gemockte zugrunde liegende Dateiquelle

Für die zugrunde liegende Pull-Quelle verwenden wir die folgende Klasse, um (_sehr_ oberflächlich) ein Node.js-`FileHandle` zu mocken, insbesondere die [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position)-Methode. Die Klasse generiert zufällige Daten, um eine Datei darzustellen. Die `read()`-Methode liest einen "halbzufälligen" Block zufälliger Daten in einen bereitgestellten Puffer aus der angegebenen Position. Die `close()`-Methode macht nichts: Sie ist nur implementiert, um zu zeigen, wo Sie die Quelle beim Definieren des Konstruktors für den Stream schließen könnten.

> [!NOTE]
> Eine ähnliche Klasse wird für alle "Pull-Quellen"-Beispiele verwendet. Sie wird hier nur zur Information gezeigt (damit offensichtlich ist, dass es sich um einen Mock handelt).

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

<!-- Der folgende HTML und JS sorgt für die Berichterstattung. Versteckt, da es für die Leser nicht nützlich ist -->

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

Der folgende Code zeigt, wie ein lesbarer Datei-Byte-Stream definiert wird.

Genau wie im vorherigen Beispiel wird die Definition des `underlyingSource`-Objekts als erster Parameter dem [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben. Um daraus einen lesbaren "Byte"-Stream zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an. Dies stellt sicher, dass dem Stream ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) übergeben wird.

Die `start()`-Funktion öffnet einfach den Dateigriff, der dann im `cancel()`-Callback geschlossen wird. `cancel()` wird bereitgestellt, um alle Ressourcen zu bereinigen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen werden.

Der größte Teil des interessanten Codes befindet sich im `pull()`-Callback. Dieser kopiert Daten aus der Datei in die ausstehende Leseanforderung ([`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)) und ruft dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) auf, um anzuzeigen, wie viele Daten sich im Puffer befinden und um deren Übertragung auszulösen. Wenn 0 Bytes aus der Datei übertragen wurden, wissen wir, dass sie alle kopiert wurde, und rufen [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) auf dem Controller auf, was wiederum dazu führt, dass `cancel()` auf der zugrunde liegenden Quelle aufgerufen wird.

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
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

#### Konsumieren des Byte-Streams

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei-Byte-Stream und verwendet ihn, um Daten in einen Puffer zu lesen. Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass keine weiteren Daten vorhanden sind, wird `reader.read()` als `done` gesetzt, was wiederum den Lesevorgang abschließt.

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

Abschließend fügen wir einen Handler hinzu, der den Stream abbricht, wenn eine Schaltfläche geklickt wird (anderer HTML-Code und Code für die Schaltfläche nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Die Protokollierung von der zugrunde liegenden Pull-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt. Besonders zu beachten sind:

- Die `start()`-Funktion wird mit einem `ReadableByteStreamController` aufgerufen.
- Der an den Leser übergebene Puffer ist groß genug, um die gesamte "Datei" zu umfassen. Die zugrunde liegende Datenquelle liefert die Daten in zufällig großen Blöcken.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Zugrundeliegende Pull-Quelle mit Standardleser

Dieses Live-Beispiel zeigt, wie dieselben Daten mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) als Zero-Copy-Transfer gelesen werden können. Dies verwendet dieselbe [gemockte zugrunde liegende Dateiquelle](#gemockte_zugrunde_liegende_dateiquelle) wie im vorherigen Beispiel.

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

<!-- Der folgende HTML und JS sorgt für die Berichterstattung. Versteckt, da es für die Leser nicht nützlich ist -->

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

Der einzige Unterschied in unserer zugrunde liegenden Quelle besteht darin, dass wir `autoAllocateChunkSize` angeben müssen und dass die Größe als Ansichts-Puffergröße für `controller.byobRequest` verwendet wird, anstatt von einem Verbraucher bereitgestellt zu werden.

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
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE, // Only relevant if using a default reader
  });
}
```

#### Konsumieren des Byte-Streams mit einem Standardleser

Der folgende Code erstellt einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) für den Datei-Byte-Stream, indem `stream.getReader();` ohne Angabe des Modus aufgerufen wird, und verwendet ihn, um Daten in einen Puffer zu lesen. Die Funktionsweise des Codes ist dieselbe wie im vorherigen Beispiel, mit dem Unterschied, dass der Puffer vom Stream und nicht vom Verbraucher bereitgestellt wird.

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

Abschließend fügen wir einen Handler hinzu, der den Stream abbricht, wenn eine Schaltfläche geklickt wird (anderer HTML-Code und Code für die Schaltfläche nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Die Protokollierung von der zugrunde liegenden Byte-Pull-Quelle (links) und dem Verbraucher (rechts) wird unten gezeigt.

Beachten Sie, dass die Blöcke jetzt _maximal_ 20 Bytes breit sind, da dies die Größe des automatisch zugeteilten Puffers ist, die in der zugrunde liegenden Byte-Quelle (`autoAllocateChunkSize`) angegeben wurde. Dies wird als Zero-Copy-Transfers durchgeführt.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrundeliegende Pull-Quelle mit Standardleser und ohne Zuteilung

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

<!-- Der folgende HTML und JS sorgt für die Berichterstattung. Versteckt, da es für die Leser nicht nützlich ist -->

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

In diesem Fall wird der Controller jedoch keine `byobRequest` bereitstellen, in die die zugrunde liegende Quelle schreiben kann. Stattdessen müsste die zugrunde liegende Quelle die Daten einreihen. Beachten Sie unten, dass wir in `pull()` prüfen müssen, ob die `byobRequest` existiert, um diesen Fall zu unterstützen.

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

Die Protokollierung von der zugrunde liegenden Pull-Quelle (links) und dem Verbraucher (rechts) wird unten angezeigt. Beachten Sie, dass auf der Seite der zugrunde liegenden Quelle angezeigt wird, dass die Daten eingereiht anstatt Zero-Byte-übertragen werden.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
