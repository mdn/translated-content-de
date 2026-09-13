---
title: Verwendung von lesbaren Bytestreams
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{DefaultAPISidebar("Streams")}}

Lesbare _Bytestreams_ sind [lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), die eine zugrunde liegende Byte-Quelle vom `type: "bytes"` haben und eine effiziente Zero-Copy-Übertragung von Daten von der zugrunde liegenden Quelle zu einem Verbraucher unterstützen (wobei die internen Warteschlangen des Streams umgangen werden). Sie sind vorgesehen für Anwendungsfälle, bei denen Daten in beliebig großen und potenziell sehr großen Blöcken geliefert oder angefordert werden könnten und bei denen das Vermeiden von Kopien die Effizienz wahrscheinlich verbessert.

Dieser Artikel erklärt, wie sich lesbare Bytestreams von normalen "Standard"-Streams unterscheiden und wie Sie sie erstellen und verwenden.

> [!NOTE]
> Lesbare Bytestreams sind fast identisch mit "normalen" lesbaren Streams und fast alle Konzepte sind dieselben.
> Dieser Artikel geht davon aus, dass Sie diese Konzepte bereits verstehen, und behandelt sie nur oberflächlich (wenn überhaupt).
> Wenn Sie mit den relevanten Konzepten nicht vertraut sind, lesen Sie bitte zuerst: [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage) und [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts).

## Übersicht

Lesbare Streams bieten eine einheitliche Schnittstelle zum Streamen von Daten von einer zugrunde liegenden Quelle, wie einer Datei oder einem Socket, zu einem Verbraucher, wie einem Leser, einem Transform-Stream oder einem beschreibbaren Stream. In einem normalen lesbaren Stream gelangen Daten von der zugrunde liegenden Quelle immer über die internen Warteschlangen zu einem Verbraucher. Ein lesbarer Bytestream unterscheidet sich dadurch, dass wenn die internen Warteschlangen leer sind, die zugrunde liegende Quelle direkt an den Verbraucher schreiben kann (eine effiziente Zero-Copy-Übertragung).

Ein lesbarer Bytestream wird erstellt, indem `type: "bytes"` im `underlyingSource`-Objekt angegeben wird, das als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann. Mit diesem Wert wird der Stream mit einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erstellt, und dieses Objekt wird an die zugrunde liegende Quelle übergeben, wenn die `start(controller)` und `pull(controller)` Callback-Funktionen aufgerufen werden.

Der Hauptunterschied zwischen dem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und dem Standardcontroller ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)) ist, dass er eine zusätzliche Eigenschaft [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vom Typ [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat. Diese stellt eine ausstehende Leseanforderung eines Verbrauchers dar, die als Zero-Copy-Übertragung von der zugrunde liegenden Quelle ausgeführt wird. Die Eigenschaft ist `null`, wenn keine ausstehende Anforderung vorliegt.

Ein `byobRequest` steht nur zur Verfügung, wenn eine Leseanforderung an einen lesbaren Bytestream gestellt wird und sich keine Daten in den internen Warteschlangen des Streams befinden (wenn Daten vorhanden sind, wird die Anforderung aus diesen Warteschlangen erfüllt).

Eine zugrunde liegende Byte-Quelle, die Daten übertragen muss, muss die `byobRequest`-Eigenschaft überprüfen und, wenn diese verfügbar ist, diese zur Datenübertragung verwenden. Ist die Eigenschaft `null`, sollten eingehende Daten stattdessen mit [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) zu den internen Warteschlangen des Streams hinzugefügt werden (dies ist die einzige Möglichkeit, Daten bei Verwendung eines "Standard"-Streams zu übertragen).

Die [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat eine [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) Eigenschaft, die eine Ansicht auf den für die Übertragung zugewiesenen Puffer ist. Daten aus einer zugrunde liegenden Quelle sollten in diese Eigenschaft geschrieben werden, und dann muss die zugrunde liegende Quelle [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufrufen, um die Anzahl der geschriebenen Bytes anzugeben. Dies signalisiert, dass die Daten übertragen werden sollen und die ausstehende Leseanforderung des Verbrauchers erfüllt ist. Nach dem Aufruf von `respond()` kann die `view` nicht mehr beschrieben werden.

Es gibt auch eine zusätzliche Methode [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView), an die eine zugrunde liegende Quelle eine "neue" Ansicht mit zu übertragenden Daten übergeben kann. Diese neue Ansicht muss über denselben Speicherpuffer wie das Original verfügen und am selben Startoffset beginnen. Diese Methode könnte verwendet werden, wenn die zugrunde liegende Byte-Quelle die Ansicht zuerst an einen Worker-Thread übertragen muss, um sie dort zu befüllen (zum Beispiel) und dann zurückerhalten muss, bevor sie auf die `byobRequest` antwortet. In den meisten Fällen wird diese Methode nicht benötigt.

Lesbare Bytestreams werden normalerweise mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen, den Sie erhalten, indem Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) am Stream aufrufen und `mode: "byob"` im Optionsparameter angeben.

Ein lesbarer Bytestream kann auch mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden, jedoch werden in diesem Fall `byobRequest`-Objekte nur erstellt, wenn für den Stream die automatische Pufferspeicherzuweisung aktiviert ist ([`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) war für die `underlyingSource` des Streams festgelegt). Beachten Sie, dass die durch `autoAllocateChunkSize` angegebene Größe in diesem Fall für die Puffergröße verwendet wird; für einen Byte-Leser wird der verwendete Puffer vom Verbraucher bereitgestellt. Wenn die Eigenschaft nicht spezifiziert wurde, "funktioniert" der Standardleser zwar immer noch, aber der zugrunde liegenden Quelle wird nie ein `byobRequest` angeboten und alle Daten werden über die internen Warteschlangen des Streams übertragen.

Abgesehen von den oben genannten Unterschieden sind der Controller und die zugrunde liegende Quelle für Bytestreams denjenigen für Standardstreams sehr ähnlich, [und werden in fast derselben Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrunde liegende Push-Quelle mit Byte-Leser

Dieses Live-Beispiel zeigt, wie man einen lesbaren Bytestream mit einer _Push_-Quelle und einem Byte-Leser erstellt.

Im Gegensatz zu einer Pull-Basisquelle können Daten jederzeit ankommen. Daher muss die zugrunde liegende Quelle `controller.byobRequest` verwenden, um eingehende Daten zu übertragen, wenn eines existiert, und andernfalls die Daten in die internen Warteschlangen des Streams einreihen. Da die Daten jederzeit ankommen können, wird das Monitorverhalten in der `underlyingSource.start()` Callback-Funktion eingerichtet.

Das Beispiel ist stark von einem Push-Byte-Quellenbeispiel in der Stream-Spezifikation beeinflusst. Es nutzt eine simulierte "hypothetische Socket"-Quelle, die Daten beliebiger Größen liefert. Der Leser wird absichtlich an verschiedenen Stellen verzögert, um es der zugrunde liegenden Quelle zu erlauben, sowohl übertragen als auch eingelagerte Daten an den Stream zu senden. Unterstützung für Rückstau ist nicht demonstriert.

> [!NOTE]
> Eine zugrunde liegende Byte-Quelle kann auch mit einem Standardleser verwendet werden.
> Wenn die automatische Pufferspeicherzuweisung aktiviert ist, wird der Controller feste Puffergrößen für Zero-Copy-Übertragungen bereitstellen, wenn eine ausstehende Anforderung von einem Leser vorliegt und die internen Warteschlangen des Streams leer sind.
> Wenn die automatische Pufferspeicherzuweisung nicht aktiviert ist, werden alle Daten aus dem Bytestream immer eingereiht.
> Dies ähnelt dem Verhalten, das in den "Pull: zugrunde liegende Byte-Quellen"-Beispielen gezeigt wird.

#### Simulierte zugrunde liegende Socket-Quelle

Die simulierte zugrunde liegende Quelle hat drei wichtige Methoden:

- `select2()` stellt eine ausstehende Anforderung an den Socket dar.
  Sie gibt ein Versprechen zurück, das aufgelöst wird, wenn Daten verfügbar sind.
- `readInto()` liest Daten vom Socket in einen bereitgestellten Puffer und löscht dann die Daten.
- `close()` schließt den Socket.

Die Implementierung ist sehr einfach gehalten. Wie unten gezeigt, erstellt `select2()` einen zufällig dimensionierten Puffer mit zufälligen Daten nach einem Timeout. Die erstellten Daten werden in einen Puffer gelesen und dann in `readInto()` gelöscht.

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

<!-- Der folgende HTML-Code und das JS richten das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Socket-Push-Bytestreams

Der folgende Code zeigt, wie man einen lesbaren Socket-"Push"-Bytestream definiert.

Die `underlyingSource`-Objektdefinition wird als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben. Um daraus einen lesbaren "Byte"-Stream zu machen, geben wir als Eigenschaft des Objekts `type: "bytes"` an. Dies stellt sicher, dass der Stream einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erhält (anstatt des Standardcontrollers ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)))

Da Daten am Socket ankommen können, bevor der Verbraucher bereit ist, sie zu verarbeiten, wird alles, was das Lesen der zugrunde liegenden Quelle betrifft, in der `start()` Callback-Methode konfiguriert (wir warten nicht auf einen Pull, um mit der Datenverarbeitung zu beginnen). Die Implementierung öffnet den "Socket" und ruft `select2()` auf, um Daten anzufordern. Wenn das zurückgegebene Versprechen aufgelöst wird, prüft der Code, ob `controller.byobRequest` existiert (nicht `null` ist), und falls ja, wird `socket.readInto()` aufgerufen, um Daten in die Anfrage zu kopieren und sie zu übertragen. Wenn `byobRequest` nicht existiert, gibt es keine ausstehende Anforderung von einem verbrauchenden Stream, die als Zero-Copy-Übertragung erfüllt werden kann. In diesem Fall wird `controller.enqueue()` verwendet, um Daten zu den internen Warteschlangen des Streams zu kopieren.

Die `select2()`-Anforderung nach mehr Daten wird erneut gepostet, bis eine Anforderung ohne Daten zurückgegeben wird. In diesem Punkt wird der Controller verwendet, um den Stream zu schließen.

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

Beachten Sie, dass `readRepeatedly()` ein Versprechen zurückgibt, das wir verwenden, um Fehler abzufangen, die beim Einrichten oder Verarbeiten des Lesevorgangs auftreten. Die Fehler werden dann an den Controller weitergegeben, wie oben gezeigt (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Eine `cancel()`-Methode wird am Ende bereitgestellt, um die zugrunde liegende Quelle zu schließen; die `pull()`-Callback-Methode wird nicht benötigt und deshalb nicht implementiert.

#### Konsumieren des Push-Bytestreams

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket-Bytestream und nutzt ihn, um Daten in einen Puffer zu lesen. Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `reader.read()` `done` auf `true` gesetzt, was den Lesevorgang abschließt.

Dieser Code ist fast identisch mit dem Beispiel [Zugrunde liegende Pull-Quelle mit Byte-Leser](#zugrunde_liegende_pull-quelle_mit_byte-leser) weiter oben. Der einzige Unterschied ist, dass der Leser Code enthält, um das Lesen zu verlangsamen, damit die Protokollausgabe zeigen kann, dass Daten eingereiht werden, wenn sie nicht schnell genug gelesen werden.

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

#### Den Stream mithilfe des Lesers abbrechen

Wir können [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) verwenden, um den Stream abzubrechen. Für dieses Beispiel rufen wir die Methode auf, wenn ein Button mit dem Grund "user choice" geklickt wird (anderes HTML und Code für den Button nicht gezeigt). Wir loggen auch, wann der Abbruch abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

[`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) kann verwendet werden, um den Leser freizugeben, ohne den Stream abzubrechen. Beachten Sie jedoch, dass alle ausstehenden Leseanforderungen sofort abgelehnt werden. Zu einem späteren Zeitpunkt kann ein neuer Leser erworben werden, um die restlichen Datenblöcke zu lesen.

#### Stream auf Schließen/Fehler überwachen

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) Eigenschaft gibt ein Versprechen zurück, das aufgelöst wird, wenn der Stream geschlossen wird, und abgelehnt wird, wenn ein Fehler auftritt. Obwohl in diesem Fall keine Fehler erwartet werden, sollte der folgende Code den Abschlussfall protokollieren.

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

Das Protokollieren der zugrunde liegenden Push-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt. Beachten Sie den Zeitraum in der Mitte, in dem Daten eingereiht anstelle einer Zero-Copy-Operation übertragen werden.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Byte-Leser

Dieses Live-Beispiel zeigt, wie Daten aus einer "Pull"-Bytestream-Quelle, wie einer Datei, gelesen werden könnten und als Zero-Copy-Übertragung an einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) übertragen werden.

#### Simulierte zugrunde liegende Datei-Quelle

Für die zugrunde liegende Pull-Quelle verwenden wir die folgende Klasse, um (_sehr_ oberflächlich) ein Nodejs-`FileHandle` zu simulieren, und insbesondere die `read()`-Methode. Die Klasse generiert zufällige Daten, um eine Datei darzustellen. Die `read()`-Methode liest einen "halb-zufällig" dimensionierten Block zufälliger Daten in einen bereitgestellten Puffer von der angegebenen Position aus. Die `close()`-Methode macht nichts: Sie wird nur bereitgestellt, um zu zeigen, wo Sie beim Definieren des Stream-Konstruktors die Quelle schließen könnten.

> [!NOTE]
> Eine ähnliche Klasse wird für alle Beispiele der "Pull-Quelle" verwendet. Sie wird hier nur zur Information gezeigt (damit klar ist, dass es sich um einen Mock handelt).

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

<!-- Der folgende HTML-Code und das JS richten das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Datei-Bytestreams

Der folgende Code zeigt, wie man einen lesbaren Datei-Bytestream definiert.

Genau wie im vorherigen Beispiel wird die `underlyingSource`-Objektdefinition als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben. Um daraus einen lesbaren "Byte"-Stream zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an. Dies stellt sicher, dass der Stream einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erhält.

Die `start()`-Funktion öffnet einfach den Datei-Handle, der dann im `cancel()`-Callback geschlossen wird. `cancel()` wird bereitgestellt, um alle Ressourcen zu bereinigen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen werden.

Der größte Teil des interessanten Codes befindet sich im `pull()`-Callback. Dieser kopiert Daten aus der Datei in die ausstehende Leseanforderung ([`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)) und ruft dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) auf, um anzugeben, wie viele Daten im Puffer sind und sie zu übertragen. Wenn 0 Bytes von der Datei übertragen wurden, dann wissen wir, dass alles kopiert wurde, und rufen [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) am Controller auf, was dazu führt, dass `cancel()` an der zugrunde liegenden Quelle aufgerufen wird.

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

#### Konsumieren des Bytestreams

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei-Bytestream und nutzt ihn, um Daten in einen Puffer zu lesen. Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist. Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `reader.read()` `done` auf `true` gesetzt, was den Lesevorgang abschließt.

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

Zuletzt fügen wir einen Handler hinzu, der den Stream abbricht, wenn ein Button geklickt wird (anderes HTML und Code für den Button nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Protokollieren der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt. Besonders bemerkenswert sind:

- Die `start()`-Funktion erhält einen `ReadableByteStreamController`
- der Puffer, der an den Leser übergeben wird, ist groß genug, um die gesamte "Datei" zu umfassen.
  Die zugrunde liegende Datenquelle liefert die Daten in zufällig dimensionierten Blöcken.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standardleser

Dieses Live-Beispiel zeigt, wie dieselben Daten von einer Zero-Copy-Übertragung mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden könnten. Dies verwendet dieselbe [simulierte zugrunde liegende Datei-Quelle](#simulierte_zugrunde_liegende_datei-quelle) wie im vorherigen Beispiel.

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

<!-- Der folgende HTML-Code und das JS richten das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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

#### Erstellen eines lesbaren Datei-Bytestreams mit automatischer Pufferspeicherzuweisung

Der einzige Unterschied in unserer zugrunde liegenden Quelle ist, dass wir `autoAllocateChunkSize` angeben müssen und dass die Größe als Ansichtspuffergröße für `controller.byobRequest` verwendet wird, anstatt einer vom Verbraucher bereitgestellten.

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

#### Konsumieren des Bytestreams mit einem Standardleser

Der folgende Code erstellt einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) für den Datei-Bytestream, indem `stream.getReader();` aufgerufen wird, ohne den Modus anzugeben, und verwendet ihn, um Daten in einen Puffer zu lesen. Der Betrieb des Codes ist derselbe wie im vorherigen Beispiel, außer dass der Puffer vom Stream und nicht vom Verbraucher bereitgestellt wird.

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

Zuletzt fügen wir einen Handler hinzu, der den Stream abbricht, wenn ein Button geklickt wird (anderes HTML und Code für den Button nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Protokollieren der zugrunde liegenden Byte-Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.

Beachten Sie, dass die Blöcke jetzt _maximal_ 20 Byte breit sind, da dies die Größe des im zugrunde liegenden Byte-Quellcode angegebenen automatisch zugewiesenen Puffers ist (`autoAllocateChunkSize`). Diese werden als Zero-Copy-Übertragungen durchgeführt.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standardleser und ohne Zuweisung

Der Vollständigkeit halber können wir auch einen Standardleser mit einer Byte-Quelle verwenden, die keine automatische Pufferspeicherzuordnung unterstützt.

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

<!-- Der folgende HTML-Code und das JS richten das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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

In diesem Fall wird der Controller jedoch kein `byobRequest` zur Verfügung stellen, in das die zugrunde liegende Quelle schreiben kann. Stattdessen müsste die zugrunde liegende Quelle die Daten einreihen. Beachten Sie unten, dass wir im `pull()` prüfen müssen, ob die `byobRequest` existiert, um diesen Fall zu unterstützen.

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

Das Protokollieren der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt. Beachten Sie, dass die zugrunde liegende Quellen-Seite zeigt, dass die Daten eingereiht anstelle von Zero-Byte übertragen wurden.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
