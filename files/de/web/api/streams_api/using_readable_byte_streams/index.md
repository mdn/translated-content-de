---
title: Using readable byte streams
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Lesbare _Byte-Ströme_ sind [lesbare Ströme](/de/docs/Web/API/Streams_API/Using_readable_streams), die eine zugrunde liegende Byte-Quelle vom `type: "bytes"` haben und effizienten Zero-Copy-Transfer von Daten aus der zugrunde liegenden Quelle zu einem Verbraucher unterstützen (wobei die internen Warteschlangen des Streams umgangen werden).
Sie sind für Anwendungsfälle gedacht, in denen Daten in beliebig großen und potenziell sehr großen Blöcken bereitgestellt oder angefordert werden könnten, und daher, wo das Vermeiden von Kopien wahrscheinlich die Effizienz verbessert.

Dieser Artikel erklärt, wie sich lesbare Byte-Ströme von normalen "Standard"-Strömen unterscheiden und wie Sie sie erstellen und konsumieren.

> [!NOTE]
> Lesbare Byte-Ströme sind fast identisch mit "normalen" lesbaren Strömen und fast alle Konzepte sind dieselben.
> Dieser Artikel geht davon aus, dass Sie diese Konzepte bereits verstehen und wird sie nur oberflächlich behandeln (wenn überhaupt).
> Wenn Sie mit den relevanten Konzepten nicht vertraut sind, lesen Sie bitte zuerst: [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage), und [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts).

## Überblick

Lesbare Ströme bieten eine konsistente Schnittstelle zum Streaming von Daten aus einer zugrunde liegenden Quelle, wie einer Datei oder einem Socket, zu einem Verbraucher, wie einem Leser, einem Transform-Stream oder einem beschreibbaren Stream.
Bei einem normalen lesbaren Strom werden Daten von der zugrunde liegenden Quelle immer durch die internen Warteschlangen an einen Verbraucher geleitet.
Ein lesbarer Byte-Strom unterscheidet sich darin, dass, wenn die internen Warteschlangen leer sind, die zugrunde liegende Quelle direkt an den Verbraucher schreiben kann (ein effizienter Zero-Copy-Transfer).

Ein lesbarer Byte-Strom wird erstellt, indem `type: "bytes"` im `underlyingSource`-Objekt angegeben wird, das als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann.
Mit diesem gesetzten Wert wird der Stream mit einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) erstellt, und dies ist das Objekt, das an die zugrunde liegende Quelle übergeben wird, wenn die `start(controller)`- und `pull(controller)`-Rückruffunktionen aufgerufen werden.

Der Hauptunterschied zwischen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und dem Standard-Controller ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)) besteht darin, dass er eine zusätzliche Eigenschaft [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vom Typ [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat.
Dies stellt eine ausstehende Leseanforderung durch einen Verbraucher dar, die als Zero-Copy-Transfer von der zugrunde liegenden Quelle erfolgen wird.
Die Eigenschaft ist `null`, wenn es keine ausstehende Anfrage gibt.

Ein `byobRequest` ist nur verfügbar, wenn eine Leseanforderung an einem lesbaren Byte-Strom gestellt wird und es keine Daten in den internen Warteschlangen des Stroms gibt (wenn Daten vorhanden sind, wird die Anforderung aus diesen Warteschlangen erfüllt).

Eine zugrunde liegende Byte-Quelle, die Daten übertragen muss, muss die `byobRequest`-Eigenschaft überprüfen und, wenn sie verfügbar ist, sie zur Datenübertragung verwenden.
Wenn die Eigenschaft `null` ist, sollten eingehende Daten stattdessen den internen Warteschlangen des Stroms unter Verwendung von [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) hinzugefügt werden (dies ist die einzige Möglichkeit, Daten bei Verwendung eines "Standard"-Streams zu übertragen).

Der [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) hat eine [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft, die eine Ansicht auf den für den Transfer zugewiesenen Puffer ist.
Daten aus einer zugrunde liegenden Quelle sollten in diese Eigenschaft geschrieben werden, und dann muss die zugrunde liegende Quelle [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufrufen und die Anzahl der geschriebenen Bytes angeben.
Dies signalisiert, dass die Daten übertragen werden sollen, und die ausstehende Leseanforderung des Verbrauchers wird erfüllt.
Nach dem Aufruf von `respond()` kann die `view` nicht mehr geschrieben werden.

Es gibt auch eine zusätzliche Methode [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView), an die eine zugrunde liegende Quelle eine "neue" Ansicht mit den zu übertragenden Daten übergeben kann.
Diese neue Ansicht muss über den _gleichen_ Speicherpuffer wie der Originalpuffer verlaufen und vom gleichen Startoffset beginnen.
Diese Methode könnte verwendet werden, wenn die zugrunde liegende Byte-Quelle die Ansicht zunächst an einen Worker-Thread übergeben muss, um sie zu füllen (zum Beispiel), und sie dann zurückerhält, bevor sie auf die `byobRequest`-Antwort reagiert.
In den meisten Fällen wird diese Methode nicht benötigt.

Lesbare Byte-Ströme werden normalerweise mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) gelesen, der durch Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) für den Stream erhalten werden kann, wobei `mode: "byob"` im Optionsparameter angegeben wird.

Ein lesbarer Byte-Strom kann auch mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden, aber in diesem Fall werden `byobRequest`-Objekte nur erstellt, wenn die automatische Pufferzuweisung für den Strom aktiviert ist ([`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) wurde für die `underlyingSource` des Stroms festgelegt).
Beachten Sie, dass die durch `autoAllocateChunkSize` angegebene Größe in diesem Fall für die Puffergroße verwendet wird; für einen Byte-Leser wird der verwendete Puffer vom Verbraucher bereitgestellt.
Wenn die Eigenschaft nicht angegeben wurde, wird der Standardleser weiterhin "funktionieren", aber die zugrunde liegende Quelle wird niemals eine `byobRequest` angeboten, und alle Daten werden durch die internen Warteschlangen des Stroms übertragen.

Abgesehen von den oben beschriebenen Unterschieden sind der Controller und die zugrunde liegende Quelle für Byte-Ströme denjenigen für Standardströme sehr ähnlich, [und werden auf ähnliche Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrunde liegende Push-Quelle mit Byte-Leser

Dieses Live-Beispiel zeigt, wie man einen lesbaren Byte-Strom mit einer zugrunde liegenden Byte-Quelle, die _pusht_, erstellt und ihn mit einem Byte-Leser liest.

Im Gegensatz zu einer pull-zugrunde liegenden Byte-Quelle können Daten jederzeit eintreffen.
Daher muss die zugrunde liegende Quelle `controller.byobRequest` verwenden, um eingehende Daten zu übertragen, sofern eine existiert, andernfalls die Daten in die internen Warteschlangen des Stroms einreihen.
Da die Daten jederzeit eintreffen können, wird das Überwachungsverhalten in der `underlyingSource.start()`-Rückruffunktion eingerichtet.

Das Beispiel ist stark von einem Push-Byte-Quellen-Beispiel in der Stream-Spezifikation beeinflusst.
Es verwendet eine simulierte "hypothetische Socket"-Quelle, die Daten in beliebiger Größe liefert.
Der Leser wird absichtlich an verschiedenen Stellen verzögert, um der zugrunde liegenden Quelle zu ermöglichen, sowohl die Übertragung als auch die Einreihung zu nutzen, um Daten an den Strom zu senden.
Unterstützung für Rückdruck wird nicht demonstriert.

> [!NOTE]
> Eine zugrunde liegende Byte-Quelle kann auch mit einem Standardleser verwendet werden.
> Wenn die automatische Pufferzuweisung aktiviert ist, wird der Controller feste Puffergrößen für Zero-Copy-Transfers bereitstellen, wenn eine ausstehende Anforderung von einem Leser besteht und die internen Warteschlangen des Stroms leer sind.
> Wenn die automatische Pufferzuweisung nicht aktiviert ist, werden alle Daten aus dem Byte-Strom immer eingeordnet.
> Dies ähnelt dem gezeigten Verhalten in den "pull: zugrunde liegende Byte-Quellenbeispielen".

#### Simulierte zugrunde liegende Socket-Quelle

Die simulierte zugrunde liegende Quelle hat drei wichtige Methoden:

- `select2()` stellt eine ausstehende Anfrage auf dem Socket dar.
  Es gibt ein Promise zurück, das aufgelöst wird, wenn Daten verfügbar sind.
- `readInto()` liest Daten vom Socket in einen bereitgestellten Puffer und löscht dann die Daten.
- `close()` schließt den Socket.

Die Implementierung ist sehr vereinfacht.
Wie unten gezeigt, erstellt `select2()` einen zufälligen Pufferspeicher mit zufälligen Daten nach einem Timeout.
Die erstellten Daten werden in einen Puffer gelesen und dann in `readInto()` gelöscht.

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

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Ausgeblendet, da es für die Leser nicht nützlich ist -->

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

#### Erstellung eines lesbaren Socket-Push-Byte-Stroms

Der folgende Code zeigt, wie man einen lesbaren Socket-"Push"-Byte-Strom definiert.

Die Definition des `underlyingSource`-Objekts wird als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um daraus einen lesbaren "Byte"-Strom zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an.
Dies stellt sicher, dass dem Strom ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) übergeben wird (anstelle des Standard-Controllers ([`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController))).

Da Daten am Socket eintreffen können, bevor der Verbraucher bereit ist, sie zu verarbeiten, wird alles, was das Lesen der zugrunde liegenden Quelle betrifft, in der `start()`-Rückruffunktion konfiguriert (wir warten nicht auf einen pull, um mit der Datenverarbeitung zu beginnen).
Die Implementierung öffnet den "Socket" und ruft `select2()` auf, um Daten anzufordern.
Wenn das zurückgegebene Promise aufgelöst wird, überprüft der Code, ob `controller.byobRequest` existiert (nicht `null` ist), und wenn ja, ruft `socket.readInto()` auf, um Daten in die Anforderung zu kopieren und zu übertragen.
Wenn `byobRequest` nicht existiert, gibt es keine ausstehende Anfrage von einem konsumierenden Strom, die als Zero-Copy-Transfer befriedigt werden kann.
In diesem Fall wird `controller.enqueue()` verwendet, um Daten in die internen Warteschlangen des Stroms zu kopieren.

Die `select2()`-Anforderung für weitere Daten wird neu gepostet, bis eine Anforderung ohne Daten zurückgegeben wird.
An diesem Punkt wird der Controller verwendet, um den Strom zu schließen.

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

Beachten Sie, dass `readRepeatedly()` ein Promise zurückgibt, und wir verwenden dieses, um etwaige Fehler beim Einrichten oder Bearbeiten der Leseoperation abzufangen.
Die Fehler werden dann wie oben gezeigt an den Controller übergeben (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Am Ende wird eine `cancel()`-Methode bereitgestellt, um die zugrunde liegende Quelle zu schließen; die `pull()`-Rückruffunktion wird nicht benötigt und daher nicht implementiert.

#### Konsumieren des Push-Byte-Stroms

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket-Byte-Strom und verwendet ihn, um Daten in einen Puffer zu lesen.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist.
Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird der `reader.read()` `done` auf true gesetzt, was wiederum den Lesevorgang abschließt.

Dieser Code ist fast genau derselbe wie im Beispiel [Zugrunde liegende Pull-Quelle mit Byte-Leser](#zugrunde_liegende_pull-quelle_mit_byte-leser) oben.
Der einzige Unterschied besteht darin, dass der Leser etwas Code enthält, um das Lesen zu verlangsamen, sodass die Protokollausgabe zeigen kann, dass Daten eingeordnet werden, wenn sie nicht schnell genug gelesen werden.

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

#### Abbrechen des Stroms mithilfe des Lesers

Wir können [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) verwenden, um den Stream abzubrechen.
Für dieses Beispiel rufen wir die Methode auf, wenn ein Button mit dem Grund "Benutzerentscheidung" geklickt wird (weiterer HTML- und Code für den Button nicht angezeigt).
Wir protokollieren auch, wann die Abbruchoperation abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

[`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock) kann verwendet werden, um den Leser freizugeben, ohne den Strom abzubrechen.
Beachten Sie jedoch, dass alle ausstehenden Leseanforderungen sofort abgelehnt werden.
Ein neuer Leser kann später erworben werden, um die übrigen Blöcke zu lesen.

#### Überwachung des Stroms auf Schließen/Fehler

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Promise zurück, das aufgelöst wird, wenn der Strom geschlossen wird, und abgelehnt wird, wenn ein Fehler eintritt.
Obwohl keine Fehler in diesem Fall erwartet werden, sollte der folgende Code den Abschluss fall protokollieren.

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
Hinweis auf den Zeitraum in der Mitte, in dem Daten eingereiht und nicht als Zero-Copy-Operation übertragen werden.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Byte-Leser

Dieses Live-Beispiel zeigt, wie Daten von einer "Pull"-zugrunde liegenden Byte-Quelle, wie einer Datei, gelesen und als Zero-Copy-Transfer an einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) übertragen werden könnten.

#### Simulierte zugrunde liegende Dateiquelle

Für die zugrunde liegende Pull-Quelle verwenden wir die folgende Klasse, um sehr oberflächlich ein Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle) zu simulieren, und insbesondere die [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position)-Methode.
Die Klasse generiert zufällige Daten, um eine Datei darzustellen.
Die `read()`-Methode liest einen "semi-zufälligen" großen Block mit zufälligen Daten in einen bereitgestellten Puffer von der angegebenen Position.
Die `close()`-Methode macht nichts: Sie wird nur bereitgestellt, um zu zeigen, wo Sie die Quelle schließen könnten, wenn Sie den Konstruktor für den Stream definieren.

> [!NOTE]
> Eine ähnliche Klasse wird für alle Beispiele mit "Pull-Quelle" verwendet.
> Sie wird hier nur zu Informationszwecken gezeigt (damit offensichtlich ist, dass es sich um eine Simulierung handelt).

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

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Ausgeblendet, da es für die Leser nicht nützlich ist -->

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

#### Erstellung eines lesbaren Datei-Byte-Stroms

Der folgende Code zeigt, wie man einen lesbaren Datei-Byte-Strom definiert.

Ebenso wie im vorherigen Beispiel wird die Definition des `underlyingSource`-Objekts als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um daraus einen lesbaren "Byte"-Strom zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an.
Dies stellt sicher, dass dem Strom ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) zugewiesen wird.

Die `start()`-Funktion öffnet einfach den Datei-Handle, der dann im `cancel()`-Callback geschlossen wird.
`cancel()` wird bereitgestellt, um alle Ressourcen aufzuräumen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen werden.

Der Großteil des interessanten Codes befindet sich im `pull()`-Callback.
Dies kopiert Daten von der Datei in die ausstehende Leseanforderung ([`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)) und ruft dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) auf, um anzuzeigen, wie viele Daten im Puffer vorhanden sind und zu übertragen sind.
Wenn 0 Bytes von der Datei übertragen wurden, wissen wir, dass alle kopiert wurden, und rufen [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) am Controller auf, was wiederum dazu führt, dass `cancel()` an der zugrunde liegenden Quelle aufgerufen wird.

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

#### Konsumieren des Byte-Stroms

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei-Byte-Strom und verwendet ihn, um Daten in einen Puffer zu lesen.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um mehr Daten zu lesen, bis der Puffer gefüllt ist.
Wenn die zugrunde liegende Quelle signalisiert, dass sie keine Daten mehr hat, wird der `reader.read()` `done` auf true gesetzt, was wiederum den Lesevorgang abschließt.

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

Schließlich fügen wir einen Handler hinzu, der den Strom abbricht, wenn ein Button geklickt wird (weiterer HTML- und Code für den Button nicht angezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Protokoll der zugrunde liegenden Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.
Von besonderem Interesse ist, dass die:

- `start()`-Funktion einen `ReadableByteStreamController` übergeben bekommt
- der an den Leser übergebene Puffer groß genug ist, um die gesamte "Datei" zu umfassen.
  Die zugrunde liegende Datenquelle liefert die Daten in zufällig großen Blöcken.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standardleser

Dieses Live-Beispiel zeigt, wie dieselben Daten als Zero-Copy-Transfer mit einem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) gelesen werden könnten.
Dazu wird dieselbe [simulierte zugrunde liegende Dateiquelle](#simulierte_zugrunde_liegende_dateiquelle) wie im vorherigen Beispiel verwendet.

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

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Ausgeblendet, da es für die Leser nicht nützlich ist -->

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

#### Erstellung eines lesbaren Datei-Byte-Stroms mit automatischer Pufferzuweisung

Der einzige Unterschied zu unserer zugrunde liegenden Quelle ist, dass wir `autoAllocateChunkSize` angeben müssen und dass die Größe als Puffergröße für `controller.byobRequest` verwendet wird, anstelle einer, die vom Verbraucher bereitgestellt wird.

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

#### Konsumieren des Byte-Stroms mit Standardleser

Der folgende Code erstellt einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) für den Datei-Byte-Strom, indem `stream.getReader();` ohne Angabe des Modus aufgerufen wird, und verwendet ihn, um Daten in einen Puffer zu lesen.
Der Betrieb des Codes ist derselbe wie im vorherigen Beispiel, außer dass der Puffer vom Strom und nicht vom Verbraucher bereitgestellt wird.

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

Schließlich fügen wir einen Handler hinzu, der den Strom abbricht, wenn ein Button geklickt wird (weiterer HTML- und Code für den Button nicht angezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Ergebnis

Das Protokoll der zugrunde liegenden Byte-Pull-Quelle (links) und des Verbrauchers (rechts) wird unten gezeigt.

Beachten Sie, dass die Blöcke jetzt _maximal_ 20 Byte breit sind, da dies die Größe des automatisch zugewiesenen Puffers ist, der in der zugrunde liegenden Byte-Quelle angegeben wurde (`autoAllocateChunkSize`).
Diese werden als Zero-Copy-Transfers durchgeführt.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrunde liegende Pull-Quelle mit Standardleser und ohne Zuordnung

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

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Ausgeblendet, da es für die Leser nicht nützlich ist -->

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

Allerdings wird in diesem Fall der Controller keine `byobRequest` bereitstellen, in die die zugrunde liegende Quelle schreiben kann.
Stattdessen müsste die zugrunde liegende Quelle die Daten einreihen.
Beachten Sie unten, dass wir zur Unterstützung dieses Falls in `pull()` überprüfen müssen, ob die `byobRequest` existiert.

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
Beachten Sie, dass die Seite der zugrunde liegenden Quelle zeigt, dass die Daten eingereiht anstatt als Zero-Copy-Transfer übertragen wurden.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
