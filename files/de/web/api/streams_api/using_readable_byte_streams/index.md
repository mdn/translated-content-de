---
title: Verwenden von lesbaren Bytestreams
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Lesbare _Bytestreams_ sind [lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), die über eine zugrundeliegende Bytequelle mit `type: "bytes"` verfügen und eine effiziente Zero-Copy-Übertragung von Daten von der zugrundeliegenden Quelle zu einem Verbraucher unterstützen (wobei die internen Warteschlangen des Streams umgangen werden).
Sie sind für Anwendungsfälle gedacht, bei denen Daten in beliebigen Größen und potenziell sehr großen Blöcken bereitgestellt oder angefordert werden könnten, und bei denen das Vermeiden von Kopien die Effizienz verbessern dürfte.

Dieser Artikel erklärt, wie sich lesbare Bytestreams von normalen "Standard"-Streams unterscheiden und wie Sie diese erstellen und nutzen.

> [!NOTE]
> Lesbare Bytestreams sind fast identisch mit "normalen" lesbaren Streams und nahezu alle Konzepte sind dieselben.
> Dieser Artikel geht davon aus, dass Sie diese Konzepte bereits verstanden haben und wird sie nur oberflächlich (wenn überhaupt) behandeln.
> Wenn Sie mit den relevanten Konzepten nicht vertraut sind, lesen Sie bitte zuerst: [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage), und [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts).

## Übersicht

Lesbare Streams bieten eine konsistente Schnittstelle zum Streamen von Daten aus einer zugrundeliegenden Quelle, wie einer Datei oder einem Socket, zu einem Verbraucher, wie einem Leser, Transformationsstream oder einem schreibbaren Stream.
In einem normalen lesbaren Stream werden Daten von der zugrundeliegenden Quelle immer über die internen Warteschlangen zu einem Verbraucher geleitet.
Ein lesbarer Bytestream unterscheidet sich dadurch, dass, wenn die internen Warteschlangen leer sind, die zugrundeliegende Quelle direkt an den Verbraucher schreiben kann (eine effiziente Zero-Copy-Übertragung).

Ein lesbarer Bytestream wird erstellt, indem `type: "bytes"` im `underlyingSource`-Objekt angegeben wird, das als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben werden kann.
Mit diesem Wert wird der Stream mit einem {{domxref("ReadableByteStreamController")}} erstellt, und dieses Objekt wird an die zugrundeliegende Quelle übergeben, wenn die `start(controller)`- und `pull(controller)`-Rückruffunktionen aufgerufen werden.

Der Hauptunterschied zwischen {{domxref("ReadableByteStreamController")}} und dem Standardcontroller ({{domxref("ReadableStreamDefaultController")}}) besteht darin, dass er eine zusätzliche Eigenschaft {{domxref("ReadableByteStreamController.byobRequest")}} vom Typ {{domxref("ReadableStreamBYOBRequest")}} hat.
Diese stellt eine anstehende Leseanforderung eines Verbrauchers dar, die als Zero-Copy-Übertragung von der zugrundeliegenden Quelle durchgeführt wird.
Die Eigenschaft ist `null`, wenn keine ausstehende Anforderung vorhanden ist.

Ein `byobRequest` wird nur dann zur Verfügung gestellt, wenn eine Leseanforderung an einem lesbaren Bytestream erfolgt und keine Daten in den internen Warteschlangen des Streams vorhanden sind (wenn Daten vorhanden sind, wird die Anforderung aus diesen Warteschlangen bedient).

Eine zugrundeliegende Bytequelle, die Daten übertragen muss, muss die Eigenschaft `byobRequest` überprüfen und, falls verfügbar, verwenden, um Daten zu übertragen.
Wenn die Eigenschaft `null` ist, sollten eingehende Daten stattdessen mit {{domxref("ReadableByteStreamController.enqueue()")}} den internen Warteschlangen des Streams hinzugefügt werden (dies ist die einzige Möglichkeit zur Datenübertragung bei Verwendung eines "Standard"-Streams).

Die {{domxref("ReadableStreamBYOBRequest")}} hat eine {{domxref("ReadableStreamBYOBRequest.view","view")}}-Eigenschaft, die eine Ansicht des für die Übertragung bereitgestellten Puffers darstellt.
Daten einer zugrundeliegenden Quelle sollten in diese Eigenschaft geschrieben werden, und die zugrundeliegende Quelle muss dann {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} aufrufen, um die Anzahl der geschriebenen Bytes anzugeben.
Dies signalisiert, dass die Daten übertragen werden sollen und die ausstehende Leseanforderung des Verbrauchers erfüllt ist.
Nach dem Aufruf von `respond()` kann die `view` nicht mehr beschrieben werden.

Es gibt auch eine zusätzliche Methode {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}, an die eine zugrundeliegende Quelle eine "neue" Ansicht mit zu übertragenden Daten übergeben kann.
Diese neue Ansicht muss über denselben Speicherpuffer wie die ursprüngliche verfügen und vom gleichen Startversatz ausgehen.
Diese Methode könnte verwendet werden, wenn die zugrundeliegende Bytequelle die Ansicht zuerst an einen Arbeitsthread übertragen muss, um sie (zum Beispiel) zu füllen und dann zurückholen muss, bevor auf die `byobRequest` reagiert wird.
In den meisten Fällen wird diese Methode nicht benötigt.

Lesbare Bytestreams werden normalerweise mit einem {{domxref("ReadableStreamBYOBReader")}} gelesen, der durch Aufrufen von {{domxref("ReadableStream.getReader()")}} am Stream erhalten werden kann, wobei `mode: "byob"` im Optionsparameter angegeben wird.

Ein lesbarer Bytestream kann auch mit einem Standardleser ({{domxref("ReadableStreamDefaultReader")}}) gelesen werden, aber in diesem Fall werden `byobRequest`-Objekte nur erstellt, wenn die automatische Pufferzuweisung für den Stream aktiviert ist (`autoAllocateChunkSize` wurde für die `underlyingSource` des Streams festgelegt).
Beachten Sie, dass die durch `autoAllocateChunkSize` angegebene Größe in diesem Fall für die Puffergröße verwendet wird; für einen Bytelesevorgang wird der vom Verbraucher bereitgestellte Puffer verwendet.
Wenn die Eigenschaft nicht angegeben war, wird der Standardleser weiterhin "funktionieren", aber der zugrundeliegenden Quelle wird nie eine `byobRequest` angeboten, und alle Daten werden über die internen Warteschlangen des Streams übertragen.

Abgesehen von den oben genannten Unterschieden sind die Controller und zugrundeliegenden Quellen für Byteströme den Standardströmen sehr ähnlich, [und werden auf ähnliche Weise verwendet](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Beispiele

### Zugrundeliegende Push-Quelle mit Byte-Leser

Dieses Live-Beispiel zeigt, wie man einen lesbaren Bytestream mit einer _Push_-Zugrundeliegenden Bytequelle erstellt und ihn mit einem Byte-Leser liest.

Im Gegensatz zu einer Pull-Zugrundeliegenden Bytequelle können Daten jederzeit ankommen.
Daher muss die zugrundeliegende Quelle `controller.byobRequest` verwenden, um eingehende Daten zu übertragen, falls eine vorhanden ist, und andernfalls die Daten in die internen Warteschlangen des Streams einreihen.
Außerdem, da die Daten jederzeit eintreffen können, wird das Überwachungsverhalten in der `underlyingSource.start()`-Rückruffunktion eingerichtet.

Das Beispiel ist stark von einem Push-Byte-Quellenbeispiel in der Stream-Spezifikation beeinflusst.
Es verwendet eine simulierte "hypothetische Socket"-Quelle, die Daten beliebiger Größen liefert.
Der Leser wird bewusst an verschiedenen Stellen verzögert, um der zugrundeliegenden Quelle zu ermöglichen, sowohl die Übertragung als auch die Einreihung zu verwenden, um Daten an den Stream zu senden.
Die Unterstützung von Gegendruck wird nicht demonstriert.

> [!NOTE]
> Eine zugrundeliegende Bytequelle kann auch mit einem Standardleser verwendet werden.
> Wenn die automatische Pufferzuweisung aktiviert ist, wird der Controller feste Größenpuffer für Zero-Copy-Übertragungen bereitstellen, wenn eine ausstehende Anfrage von einem Leser vorliegt und die internen Warteschlangen des Streams leer sind.
> Wenn die automatische Pufferzuweisung nicht aktiviert ist, werden alle Daten aus dem Bytestream immer eingereiht.
> Dies ist ähnlich dem Verhalten, das in den "Pull: zugrundeliegende Bytequelle"-Beispielen gezeigt wird.

#### Simulierte zugrundeliegende Socket-Quelle

Die simulierte zugrundeliegende Quelle hat drei wichtige Methoden:

- `select2()` stellt eine ausstehende Anforderung am Socket dar.
  Es gibt ein Versprechen zurück, das aufgelöst wird, wenn Daten verfügbar sind.
- `readInto()` liest Daten vom Socket in einen bereitgestellten Puffer und löscht dann die Daten.
- `close()` schließt den Socket.

Die Implementierung ist sehr einfach.
Wie unten gezeigt, erstellt `select2()` einen zufällig dimensionierten Puffer zufälliger Daten über einen Timeout.
Die erstellten Daten werden in einen Puffer eingelesen und dann in `readInto()` gelöscht.

```js
class MockHypotheticalSocket {
  constructor() {
    this.max_data = 800; // Gesamtmenge an Daten, die vom "Socket" gestreamt werden
    this.max_per_read = 100; // Maximale Daten pro Lesevorgang
    this.min_per_read = 40; // Minimale Daten pro Lesevorgang
    this.data_read = 0; // Bisher gelesene Gesamtdaten (begrenzt durch maxdata)
    this.socketdata = null;
  }

  // Methode, die ein Versprechen zurückgibt, wenn dieser Socket lesbar ist.
  select2() {
    // Objekt zur Auflösung des Versprechens
    const resultobj = {};
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (this.data_read >= this.max_data) {
        // keine Daten mehr
        resolve(resultobj);
        return;
      }

      // Emuliere langsames Lesen von Daten
      setTimeout(() => {
        const numberBytesReceived = this.getNumberRandomBytesSocket();
        this.data_read += numberBytesReceived;
        this.socketdata = this.randomByteArray(numberBytesReceived);
        resultobj["bytesRead"] = numberBytesReceived;
        resolve(resultobj);
      }, 500);
    });
  }

  /* Lese Daten in den angegebenen Pufferoffset */
  readInto(buffer, offset, length) {
    let length_data = 0;
    if (this.socketdata) {
      length_data = this.socketdata.length;
      const myview = new Uint8Array(buffer, offset, length);
      // Schreibe die Länge der angegebenen Daten in den Puffer
      // Der Code geht davon aus, dass der Puffer immer größer als die eingehenden Daten ist
      for (let i = 0; i < length_data; i++) {
        myview[i] = this.socketdata[i];
      }
      this.socketdata = null; // Lösche "Socket"-Daten nach dem Lesen
    }
    return length_data;
  }

  // Dummy-Funktion zum Schließen
  close() {
    return;
  }

  // Gib zufällige Anzahl Bytes in diesem Socket-Aufruf zurück
  getNumberRandomBytesSocket() {
    // Begrenzt auf verbleibende Daten und den max-min-Rückgabebereich pro Lesevorgang
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

  // Gib eine zufällige Zahl zwischen zwei Werten zurück
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Gib zufällige Zeichenkette zurück
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  /* Gib zufälliges Uint8Array von Bytes zurück */
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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
<button>Stream abbrechen</button>
<div class="input">
  <h2>Unterliegende Quelle</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Verbraucher</h2>
  <ul></ul>
</div>
```

```js hidden
// Referenz zu Listen, Absatz und Button speichern
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Leere Zeichenkette erstellen, um das Endergebnis zu speichern
let result = "";

// Funktion zur Protokollierung von Daten aus der zugrunde liegenden Quelle
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Funktion zur Protokollierung von Daten aus dem Verbraucher
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### Erstellen eines lesbaren Socket-Push-Bytestreams

Der folgende Code zeigt, wie man einen lesbaren Socket-"Push"-Bytestream definiert.

Die Definition des `underlyingSource`-Objekts wird als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um diesen zu einem lesbaren "Byte"-Wasser zu machen, geben wir `type: "bytes"` als Eigenschaft des Objekts an.
Dies stellt sicher, dass dem Stream ein {{domxref("ReadableByteStreamController")}} übergeben wird (anstelle des Standardcontrollers ({{domxref("ReadableStreamDefaultController")}})).

Da Daten am Socket eintreffen können, bevor der Verbraucher bereit ist, sie zu verarbeiten, wird in der `start()`-Rückruffunktion alles über das Lesen der zugrundeliegenden Quelle konfiguriert (wir warten nicht auf ein Pull, um mit der Datenverarbeitung zu beginnen).
Die Implementierung öffnet den "Socket" und ruft `select2()` auf, um Daten anzufordern.
Wenn das zurückgegebene Versprechen aufgelöst wird, überprüft der Code, ob `controller.byobRequest` existiert (nicht `null` ist) und ruft, falls ja, `socket.readInto()` auf, um Daten in die Anforderung zu kopieren und zu übertragen.
Wenn `byobRequest` nicht existiert, gibt es keine ausstehende Anforderung von einem konsumierenden Stream, die als Zero-Copy-Übertragung bedient werden kann.
In diesem Fall wird `controller.enqueue()` verwendet, um Daten in die internen Warteschlangen des Streams zu kopieren.

Die `select2()`-Anforderung für weitere Daten wird neu gebucht, bis eine Anforderung ohne Daten zurückgegeben wird.
An diesem Punkt wird der Controller verwendet, um den Stream zu schließen.

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
          // Da der Socket auch dann lesbar werden kann, wenn keine ausstehenden BYOB-Anforderungen vorliegen, müssen wir beide Fälle behandeln.
          let bytesRead;
          if (controller.byobRequest) {
            const v = controller.byobRequest.view;
            bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
            if (bytesRead === 0) {
              controller.close();
            }
            controller.byobRequest.respond(bytesRead);
            logSource(`byobRequest mit ${bytesRead} Bytes`);
          } else {
            const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
            bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
            if (bytesRead === 0) {
              controller.close();
            } else {
              controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
            }
            logSource(`enqueue() ${bytesRead} Bytes (kein byobRequest)`);
          }

          if (bytesRead === 0) {
            return;
            // keine weiteren Bytes in der Quelle
          }
          return readRepeatedly();
        });
      }
    },

    cancel() {
      socket.close();
      logSource(`cancel(): socket geschlossen`);
    },
  });
}
```

Beachten Sie, dass `readRepeatedly()` ein Versprechen zurückgibt, und wir dieses verwenden, um etwaige Fehler beim Einrichten oder Verarbeiten des Lesevorgangs abzufangen.
Die Fehler werden dann wie oben gezeigt an den Controller übergeben (siehe `readRepeatedly().catch((e) => controller.error(e));`).

Eine `cancel()`-Methode wird am Ende bereitgestellt, um die zugrundeliegende Quelle zu schließen; der `pull()`-Rückruf ist nicht erforderlich und wird daher nicht implementiert.

#### Den Push-Bytestream konsumieren

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Socket-Bytestream und verwendet ihn, um Daten in einem Puffer zu lesen.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um weitere Daten zu lesen, bis der Puffer gefüllt ist.
Wenn die zugrundeliegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `done` bei `reader.read()` auf true gesetzt, was den Lesevorgang beendet.

Dieser Code ist fast genau derselbe wie das Beispiel [Zugrundeliegende Pull-Quelle mit Byte-Leser](#zugrundeliegende_pull-quelle_mit_byte-leser).
Der einzige Unterschied besteht darin, dass der Leser Code enthält, um das Lesen zu verlangsamen, damit die Protokollausgabe zeigt, dass Daten eingereiht werden, wenn sie nicht schnell genug gelesen werden.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() gibt ein Versprechen zurück, das aufgelöst wird, wenn ein Wert empfangen wurde
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(async function processText({ done, value }) {
        // Ergebnisobjekte enthalten zwei Eigenschaften:
        // done  - true, wenn der Stream bereits alle seine Daten gegeben hat.
        // value - einige Daten. Immer undefiniert, wenn done true ist.

        if (done) {
          logConsumer(`readStream() abgeschlossen. Gesamtbytes: ${bytesReceived}`);
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        //logConsumer(`Read ${bytesReceived} bytes: ${value}`);
        logConsumer(`Read ${bytesReceived} bytes`);
        result += value;

        // Verzögerung hinzufügen, um zu emulieren, wenn Daten nicht gelesen werden können und Daten eingereiht werden
        if (bytesReceived > 300 && bytesReceived < 600) {
          logConsumer(`Lesevorgang verzögern, um langsames Stream-Lesen zu emulieren`);
          const delay = (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms));
          await delay(1000);
        }

        // Mehr lesen und diese Funktion erneut aufrufen
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processText);
      });
  }
}
```

#### Den Stream mit dem Leser abbrechen

Wir können {{domxref("ReadableStreamBYOBReader.cancel()")}} verwenden, um den Stream abzubrechen.
Für dieses Beispiel nennen wir die Methode, wenn ein Button mit der Begründung "Benutzerwahl" geklickt wird (andere HTML- und Code für den Button sind nicht gezeigt).
Wir protokollieren auch, wenn der Abbruchvorgang abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel abgeschlossen"));
});
```

{{domxref("ReadableStreamBYOBReader.releaseLock()")}} kann verwendet werden, um den Leser freizugeben, ohne den Stream abzubrechen.
Beachten Sie jedoch, dass alle laufenden Leseanforderungen sofort abgelehnt werden.
Später kann ein neuer Leser erworben werden, um die verbleibenden Blöcke zu lesen.

#### Den Stream auf schließen/fehler überwachen

Die {{domxref("ReadableStreamBYOBReader.closed")}}-Eigenschaft gibt ein Versprechen zurück, das aufgelöst wird, wenn der Stream geschlossen ist, und abgelehnt wird, wenn ein Fehler auftritt.
Obwohl in diesem Fall keine Fehler erwartet werden, sollte der folgende Code den Abschluss protokollieren.

```js
reader.closed
  .then(() => {
    logConsumer("ReadableStreamBYOBReader.closed: aufgelöst");
  })
  .catch(() => {
    logConsumer("ReadableStreamBYOBReader.closed: abgelehnt:");
  });
```

#### Ergebnis

Das Protokoll aus der zugrundeliegenden Push-Quelle (links) und dem Verbraucher (rechts) wird unten angezeigt.
Nicht der Zeitraum in der Mitte, in dem Daten eingereiht werden, anstatt als Zero-Copy-Operation übertragen zu werden.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Zugrundeliegende Pull-Quelle mit Byte-Leser

Dieses Live-Beispiel zeigt, wie Daten aus einer "Pull"-zugrundeliegenden Bytequelle, wie einer Datei, gelesen und von einem Stream als Zero-Copy-Übertragung an einen {{domxref("ReadableStreamBYOBReader")}} übertragen werden können.

#### Simulierte zugrundeliegende Datei-Quelle

Für die zugrundeliegende Pull-Quelle verwenden wir die folgende Klasse, um sehr oberflächlich ein Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle) und insbesondere die [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position)-Methode zu simulieren.
Die Klasse generiert zufällige Daten, um eine Datei darzustellen.
Die `read()`-Methode liest einen "semi-random" großen Block zufälliger Daten in einen bereitgestellten Puffer von der angegebenen Position aus.
Die `close()`-Methode tut nichts: Sie wird nur bereitgestellt, um zu zeigen, wo Sie die Quelle schließen könnten, wenn Sie den Konstruktor für den Stream definieren.

> [!NOTE]
> Eine ähnliche Klasse wird für alle "Pull-Quellen"-Beispiele verwendet.
> Sie wird hier nur zur Information gezeigt (damit klar ist, dass es sich um eine Simulation handelt).

```js
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "Dateigröße"
    this.maxReadChunk = 25; // "maximale Leseschunkgröße"
    this.minReadChunk = 13; // "minimale Leseschunkgröße"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Lese Daten aus "Datei" an Position / Länge in den angegebenen Puffer-Offset
  read(buffer, offset, length, position) {
    // Objekt zur Auflösung des Versprechens
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        // keine Daten mehr
        resolve(resultobj);
        return;
      }

      // Simulation eines Dateilesens, das zufällige Bytes zurückgibt
      // Lese Minimum der angeforderten Bytes und zufällige Bytes, die zurückgegeben werden können
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Lese zufällige Daten in den bereitgestellten Puffer
      const myview = new Uint8Array(buffer, offset, readLength);
      // Schreibe die spezifizierte Länge der Daten
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emuliere langsames Lesen von Daten
      setTimeout(() => {
        resolve(resultobj);
      }, 1000);
    });
  }

  // Dummy-Funktion zum Schließen
  close() {
    return;
  }

  // Gib zufällige Zeichenkette zurück
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // Gib zufälliges Uint8Array von Bytes zurück
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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
<button>Stream abbrechen</button>
<div class="input">
  <h2>Unterliegende Quelle</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Verbraucher</h2>
  <ul></ul>
</div>
```

```js hidden
// Referenz zu Listen, Absatz und Button speichern
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Leere Zeichenkette erstellen, um das Endergebnis zu speichern
let result = "";

// Funktion zur Protokollierung von Daten aus der zugrunde liegenden Quelle
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Funktion zur Protokollierung von Daten aus dem Verbraucher
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### Erstellen eines lesbaren Datei-Bytestreams

Der folgende Code zeigt, wie man einen lesbaren Datei-Bytestream definiert.

Genau wie im vorherigen Beispiel wird die Definition des `underlyingSource`-Objekts als erster Parameter an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) übergeben.
Um ihn zu einem lesbaren "Byte"-Stream zu machen, spezifizieren wir `type: "bytes"` als Eigenschaft des Objekts.
Dies stellt sicher, dass der Stream einen {{domxref("ReadableByteStreamController")}} erhält.

Die `start()`-Funktion öffnet einfach den Datei-Handler, der dann im `cancel()`-Rückruf geschlossen wird.
`cancel()` wird bereitgestellt, um Ressourcen zu bereinigen, wenn {{domxref("ReadableStream.cancel()")}} oder {{domxref("ReadableStreamDefaultController.close()")}} aufgerufen werden.

Der größte Teil des interessanten Codes befindet sich im `pull()`-Rückruf.
Dieser kopiert Daten aus der Datei in die anstehende Leseanforderung ({{domxref("ReadableByteStreamController.byobRequest")}}) und ruft dann {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} auf, um anzugeben, wie viele Daten im Puffer sind, und diese zu übertragen.
Wenn 0 Bytes aus der Datei übertragen wurden, wissen wir, dass alles kopiert wurde, und rufen {{domxref("ReadableStreamDefaultController.close()","close()")}} am Controller auf, was wiederum dazu führt, dass `cancel()` an der zugrunde liegenden Quelle aufgerufen wird.

```js
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // Ein zugrundeliegender Bytestream!
    start(controller) {
      // Wird aufgerufen, um die zugrunde liegende Quelle zu initialisieren.
      // Für eine Dateiquelle einen Datei-Handler öffnen (hier erstellen wir nur das simulierte Objekt).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Wird aufgerufen, wenn eine Pull-Anforderung für Daten vorliegt
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
          `pull() mit byobRequest. Controller schließen (gelesene Bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() mit byobRequest. Übertrage ${bytesRead} Bytes`);
      }
    },
    cancel(reason) {
      // Dies wird aufgerufen, wenn der Stream abgebrochen wird (über Leser oder Controller).
      // Alle Ressourcen bereinigen
      fileHandle.close();
      logSource(`cancel() mit Grund: ${reason}`);
    },
  });
}
```

#### Den Bytestream konsumieren

Der folgende Code erstellt einen `ReadableStreamBYOBReader` für den Datei-Bytestream und verwendet ihn, um Daten in einen Puffer zu lesen.
Beachten Sie, dass `processText()` rekursiv aufgerufen wird, um weitere Daten zu lesen, bis der Puffer gefüllt ist.
Wenn die zugrundeliegende Quelle signalisiert, dass sie keine Daten mehr hat, wird `done` in `reader.read()` auf true gesetzt, was den Lesevorgang abschließt.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  // read() gibt ein Versprechen zurück, das aufgelöst wird, wenn ein Wert empfangen wurde
  reader
    .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
    .then(function processText({ done, value }) {
      // Ergebnisobjekte enthalten zwei Eigenschaften:
      // done  - true, wenn der Stream bereits alle seine Daten gegeben hat.
      // value - einige Daten. Immer undefiniert, wenn done true ist.

      if (done) {
        logConsumer(`readStream() abgeschlossen. Gesamtbytes: ${bytesReceived}`);
        return;
      }

      buffer = value.buffer;
      offset += value.byteLength;
      bytesReceived += value.byteLength;

      logConsumer(
        `Read ${value.byteLength} (${bytesReceived}) Bytes: ${value}`,
      );
      result += value;

      // Mehr lesen und diese Funktion erneut aufrufen
      return reader
        .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
        .then(processText);
    });
}
```

Zuletzt fügen wir einen Handler hinzu, der den Stream abbricht, wenn ein Button geklickt wird (andere HTML und Code für den Button nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel abgeschlossen`);
  });
});
```

#### Ergebnis

Das Protokoll aus der zugrundeliegenden Pull-Quelle (links) und dem Verbraucher (rechts) wird unten angezeigt.
Besonders bemerkenswert sind die:

- Die `start()`-Funktion wird ein `ReadableByteStreamController` übergeben
- Der Puffer, der an den Leser übergeben wird, ist groß genug, um die gesamte "Datei" einzuschließen.
  Die zugrundeliegende Quelle liefert die Daten in zufällig großen Blöcken.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Zugrundeliegende Pull-Quelle mit Standardleser

Dieses Live-Beispiel zeigt, wie dieselben Daten als Zero-Copy-Übertragung mit einem Standardleser ({{domxref("ReadableStreamDefaultReader")}}) gelesen werden könnten.
Dies verwendet dieselbe [simulierte zugrundeliegende Datei-Quelle](#simulierte_zugrundeliegende_datei-quelle) wie im vorangegangenen Beispiel.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "Dateigröße"
    this.maxReadChunk = 25; // "maximale Leseschunkgröße"
    this.minReadChunk = 13; // "minimale Leseschunkgröße"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Lese Daten aus "Datei" an Position / Länge in den angegebenen Puffer-Offset
  read(buffer, offset, length, position) {
    // Objekt zur Auflösung des Versprechens
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        // keine Daten mehr
        resolve(resultobj);
        return;
      }

      // Simulation eines Dateilesens, das zufällige Bytes zurückgibt
      // Lese Minimum der angeforderten Bytes und zufällige Bytes, die zurückgegeben werden können
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Lese zufällige Daten in den bereitgestellten Puffer
      const myview = new Uint8Array(buffer, offset, readLength);
      // Schreibe die spezifizierte Länge der Daten
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emuliere langsames Lesen von Daten
      setTimeout(() => {
        resolve(resultobj);
      }, 1000);
    });
  }

  // Dummy-Funktion zum Schließen
  close() {
    return;
  }

  // Gib zufällige Zeichenkette zurück
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // Gib zufälliges Uint8Array von Bytes zurück
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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
<button>Stream abbrechen</button>
<div class="input">
  <h2>Unterliegende Quelle</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Verbraucher</h2>
  <ul></ul>
</div>
```

```js hidden
// Referenz zu Listen, Absatz und Button speichern
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Leere Zeichenkette erstellen, um das Endergebnis zu speichern
let result = "";

// Funktion zur Protokollierung von Daten aus der zugrunde liegenden Quelle
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Funktion zur Protokollierung von Daten aus dem Verbraucher
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### Einen lesbaren Datei-Bytestream mit automatisierter Pufferzuweisung erstellen

Der einzige Unterschied in unserer zugrunde liegenden Quelle ist, dass wir `autoAllocateChunkSize` angeben müssen, und dass die Größe als Ansichts-Puffergröße für `controller.byobRequest` verwendet wird, anstatt einer, die vom Verbraucher bereitgestellt wird.

```js
const DEFAULT_CHUNK_SIZE = 20;
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // Ein zugrundeliegender Bytestream!
    start(controller) {
      // Wird aufgerufen, um die zugrunde liegende Quelle zu initialisieren.
      // Für eine Dateiquelle einen Datei-Handler öffnen (hier erstellen wir nur das simulierte Objekt).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Wird aufgerufen, wenn eine Pull-Anforderung für Daten vorliegt
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
          `pull() mit byobRequest. Controller schließen (gelesene Bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() mit byobRequest. Transferiere ${bytesRead} Bytes`);
      }
    },
    cancel(reason) {
      // Dies wird aufgerufen, wenn der Stream abgebrochen wird (über Leser oder Controller).
      // Alle Ressourcen bereinigen
      fileHandle.close();
      logSource(`cancel() mit Grund: ${reason}`);
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE, // Nur relevant, wenn ein Standardleser verwendet wird
  });
}
```

#### Den Bytestream mit Standardleser konsumieren

Der folgende Code erstellt einen {{domxref("ReadableStreamDefaultReader")}} für den Datei-Bytestream, indem er `stream.getReader();` ohne den Modus anzugeben, und verwendet ihn, um Daten in einem Puffer zu lesen.
Die Funktionsweise des Codes ist die gleiche wie im vorherigen Beispiel, mit dem Unterschied, dass der Puffer vom Stream bereitgestellt wird, anstatt vom Verbraucher.

```js
const reader = stream.getReader();
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() gibt ein Versprechen zurück, das aufgelöst wird
  // wenn ein Wert empfangen wurde
  reader.read().then(function processText({ done, value }) {
    // Ergebnisobjekte enthalten zwei Eigenschaften:
    // done  - true, wenn der Stream bereits alle seine Daten gegeben hat.
    // value - einige Daten. Immer undefiniert, wenn done true ist.
    if (done) {
      logConsumer(`readStream() abgeschlossen. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(
      `Read ${value.length} (${bytesReceived}). Aktuelle Bytes = ${value}`,
    );
    result += value;

    // Mehr lesen, und diese Funktion erneut aufrufen
    return reader.read().then(processText);
  });
}
```

Zuletzt fügen wir einen Handler hinzu, der den Stream abbricht, wenn ein Button geklickt wird (andere HTML und Code für den Button nicht gezeigt).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel abgeschlossen`);
  });
});
```

#### Ergebnis

Das Protokoll aus der zugrundeliegenden Byte-Pull-Quelle (links) und dem Verbraucher (rechts) wird unten angezeigt.

Beachten Sie, dass die Blöcke jetzt _maximal_ 20 Byte breit sind, da dies die Größe des automatisch zugewiesenen Puffers ist, die in der zugrunde liegenden Bytequelle (`autoAllocateChunkSize`) angegeben ist.
Diese werden als Zero-Copy-Übertragungen durchgeführt.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Zugrundeliegende Pull-Quelle mit Standardleser und ohne Zuweisung

Der Vollständigkeit halber können wir auch einen Standardleser mit einer Bytequelle verwenden, die keine automatische Pufferzuweisung unterstützt.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "Dateigröße"
    this.maxReadChunk = 25; // "maximale Leseschunkgröße"
    this.minReadChunk = 13; // "minimale Leseschunkgröße"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Lese Daten aus "Datei" an Position / Länge in den angegebenen Puffer-Offset
  read(buffer, offset, length, position) {
    // Objekt zur Auflösung des Versprechens
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        // keine Daten mehr
        resolve(resultobj);
        return;
      }

      // Simulation eines Dateilesens, das zufällige Bytes zurückgibt
      // Lese Minimum der angeforderten Bytes und zufällige Bytes, die zurückgegeben werden können
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Lese zufällige Daten in den bereitgestellten Puffer
      const myview = new Uint8Array(buffer, offset, readLength);
      // Schreibe die spezifizierte Länge der Daten
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emuliere langsames Lesen von Daten
      setTimeout(() => {
        resolve(resultobj);
      }, 1000);
    });
  }

  // Dummy-Funktion zum Schließen
  close() {
    return;
  }

  // Gib zufällige Zeichenkette zurück
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // Gib zufälliges Uint8Array von Bytes zurück
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Versteckt, da es für Leser nicht nützlich ist -->

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
<button>Stream abbrechen</button>
<div class="input">
  <h2>Unterliegende Quelle</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Verbraucher</h2>
  <ul></ul>
</div>
```

```js hidden
// Referenz zu Listen, Absatz und Button speichern
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Leere Zeichenkette erstellen, um das Endergebnis zu speichern
let result = "";

// Funktion zur Protokollierung von Daten aus der zugrunde liegenden Quelle
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Funktion zur Protokollierung von Daten aus dem Verbraucher
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

In diesem Fall wird der Controller jedoch keine `byobRequest` für die zugrunde liegende Quelle bereitstellen, in die geschrieben werden kann.
Stattdessen müsste die zugrunde liegende Quelle die Daten einreihen.
Beachten Sie unten, dass wir in `pull()` überprüfen müssen, ob `byobRequest` existiert, um diesen Fall zu unterstützen.

```js
const stream = makeReadableByteFileStream("dummy file.txt");
const DEFAULT_CHUNK_SIZE = 40;

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // Ein zugrundeliegender Bytestream!
    start(controller) {
      // Wird aufgerufen, um die zugrunde liegende Quelle zu initialisieren.
      // Für eine Dateiquelle einen Datei-Handler öffnen (hier erstellen wir nur das simulierte Objekt).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Wird aufgerufen, wenn eine Pull-Anforderung für Daten vorliegt
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
            `pull() mit byobRequest. Controller schließen (gelesene Bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.byobRequest.respond(bytesRead);
          logSource(`pull() mit byobRequest. Transferiere ${bytesRead} Bytes`);
        }
      } else {
        // Keine BYOB-Anforderung vorhanden, daher Daten in Stream einreihen
        // HINWEIS: Dieser Zweig würde nur für einen Standardleser ausgeführt, wenn autoAllocateChunkSize nicht definiert ist.
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
            `pull() ohne byobRequest. Controller schließen (gelesene Bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.enqueue(mynewBuffer);
          logSource(`pull() ohne byobRequest. enqueue() ${bytesRead} bytes`);
        }
      }
    },
    cancel(reason) {
      // Dies wird aufgerufen, wenn der Stream abgebrochen wird (über Leser oder Controller).
      // Alle Ressourcen bereinigen
      fileHandle.close();
      logSource(`cancel() mit Grund: ${reason}`);
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

  // read() gibt ein Versprechen zurück, das aufgelöst wird
  // wenn ein Wert empfangen wurde
  reader.read().then(function processText({ done, value }) {
    // Ergebnisobjekte enthalten zwei Eigenschaften:
    // done  - true, wenn der Stream bereits alle seine Daten gegeben hat.
    // value - einige Daten. Immer undefiniert, wenn done true ist.
    if (done) {
      logConsumer(`readStream() abgeschlossen. Gesamtbytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(`Bisher ${bytesReceived} bytes gelesen. Aktuelle bytes = ${value}`);
    result += value;

    // Mehr lesen, und diese Funktion erneut aufrufen
    return reader.read().then(processText);
  });
}
```

```js hidden
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel abgeschlossen`);
  });
});
```

#### Ergebnis

Das Protokoll aus der zugrundeliegenden Pull-Quelle (links) und dem Verbraucher (rechts) wird unten angezeigt.
Beachten Sie, dass die zugrunde liegende Quelle anzeigt, dass die Daten eingereiht wurden, anstatt als Zero-Byte übertragen zu werden.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/de/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
