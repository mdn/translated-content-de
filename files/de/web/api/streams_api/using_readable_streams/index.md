---
title: Verwendung von Readable Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist das programmatische Lesen und Manipulieren von Datenströmen, die stückweise über das Netzwerk empfangen werden, sehr nützlich! Aber wie verwenden Sie die Funktionalität der Streams API für lesbare Streams? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle für lesbare Streams verstehen und mit den grundlegenden Konzepten vertraut sind. Falls nicht, empfehlen wir, zunächst die [Übersicht über Konzepte und Nutzung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen Artikel [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie nach Informationen über beschreibbare Streams suchen, versuchen Sie es stattdessen mit [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Einige Beispiele finden

Wir werden uns in diesem Artikel verschiedene Beispiele ansehen, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Dort finden Sie den vollständigen Quellcode sowie Links zu den Beispielanwendungen.

## Eine Fetch-Abfrage als Stream konsumieren

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und wirklich schön ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) sind verfügbar und stellen die Inhalte des Körpers als einen lesbaren Stream bereit.

Wie unser [Beispiel eines einfachen Stream Pumps](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) zeigt ([siehe auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es einfach, darauf zuzugreifen, indem Sie die `body`-Eigenschaft der Antwort verwenden:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies bietet uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt.

### Einen Reader anhängen

Nun haben wir den Streaming-Körper, das Lesen des Streams erfordert das Anhängen eines Readers. Dies erfolgt mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();
    // …
  });
```

Der Aufruf dieser Methode erstellt einen Reader und sperrt ihn für den Stream — kein anderer Reader kann diesen Stream lesen, bis dieser Reader freigegeben wird, z. B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt verkürzt werden kann, da `response.body` synchron ist und daher nicht auf das Versprechen wartet:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // …
  });
```

### Den Stream lesen

Nun, da Sie Ihren Reader angeschlossen haben, können Sie Datenblöcke aus dem Stream mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Dies liest einen Block aus dem Stream, mit dem Sie dann alles Mögliche machen können. Zum Beispiel reihen wir in unserem einfachen Stream Pump-Beispiel jeden Block in einen neuen, benutzerdefinierten `ReadableStream` ein (darüber werden wir im nächsten Abschnitt mehr erfahren), erstellen dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumieren sie als [`Blob`](/de/docs/Web/API/Blob), erstellen eine Objekt-URL aus diesem Blob mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen diese dann in einem {{htmlelement("img")}}-Element auf dem Bildschirm an, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  // Create a new response out of the stream
  .then((stream) => new Response(stream))
  // Create an object URL for the response
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  // Update image
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Schauen wir uns genauer an, wie `read()` verwendet wird. In der oben gezeigten Funktion `pump()` rufen wir zuerst `read()` auf, was ein Promise mit einem Ergebnisobjekt zurückgibt — dieses hat die Ergebnisse unserer Leseoperation in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können eine von drei verschiedenen Typen sein:

- Wenn ein Block zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als Nächstes überprüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Blöcke mehr zu lesen (der Wert ist `undefined`), sodass wir die Funktion verlassen und den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) schließen:

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des hier diskutierten ursprünglichen Streams. Im nächsten Abschnitt werden wir mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir den neuen Block, den wir gelesen haben (im `value`-Eigenschaft des Ergebnisobjekts enthalten), und rufen dann die `pump()`-Funktion erneut auf, um den nächsten Block zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Readern sehen:

1. Sie schreiben eine Funktion, die mit dem Lesen des Streams beginnt.
2. Wenn kein weiterer Stream mehr zum Lesen steht, verlassen Sie die Funktion.
3. Wenn noch Stream zum Lesen vorhanden ist, verarbeiten Sie den aktuellen Block, und führen die Funktion erneut aus.
4. Sie verketten die `pipe`-Funktion, bis kein Stream mehr zu lesen ist, in welchem Fall Schritt 2 ausgeführt wird.

Wenn man den gesamten Code für das tatsächliche "Pumpen" entfernt, könnte der Code verallgemeinert so aussehen:

```js
fetch("http://example.com/somefile.txt")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // read() returns a promise that resolves when a value has been received
    reader.read().then(function pump({ done, value }) {
      if (done) {
        // Do something with last chunk of data then exit reader
        return;
      }
      // Otherwise do something here to process current chunk

      // Read some more, and call this function again
      return reader.read().then(pump);
    });
  })
  .catch((err) => console.error(err));
```

> [!NOTE]
> Die Funktion sieht so aus, als ob `pump()` sich selbst aufruft und zu einer potenziell tiefen Rekursion führt.
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Promise-Handlers steht, entspricht es tatsächlich einer Kette von Promise-Handlern.

Das Lesen des Streams ist noch einfacher, wenn man `async/await` anstelle von Versprechen verwendet:

```js
async function readData(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      // Do something with last chunk of data then exit reader
      return;
    }
    // Otherwise do something here to process current chunk
  }
}
```

## Einen fetch() mit asynchroner Iteration konsumieren

Es gibt einen noch einfacheren Weg, um einen `fetch()` zu konsumieren, indem Sie den zurückgegebenen `response.body` mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Syntax iterieren.
Das funktioniert, weil der `response.body` einen `ReadableStream` zurückgibt, der ein [asynchrones Iterable](/de/docs/Web/API/ReadableStream#async_iteration) ist.

In diesem Ansatz kann der Beispielcode aus dem vorherigen Abschnitt wie gezeigt umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie das Iterieren des Streams beenden möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und dem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

```js
const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  const response = await fetch(url, { signal });
  for await (const chunk of response.body) {
    // Do something with the chunk
  }
}
```

Alternativ können Sie die Schleife mit `break` verlassen, wie im folgenden Code gezeigt.
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zu verarbeiten hat, sodass es zu einer gewissen Verzögerung zwischen dem Signalabbruch und dem Aufruf von `break` kommen kann.

```js
const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    if (signal.aborted) break; // just break out of loop
    // Do something with the chunk
  }
}
```

### Beispiel eines asynchronen Readers

<!-- Der größte Teil des folgenden Codes ist absichtlich ausgeblendet, da er für das Beispiel nicht relevant ist -->

```js hidden
// A mock push source.
// Used to simulate some random data arriving
class MockPushSource {
  // total amount of data to stream from the push source
  static #maxData = 90;
  // total data read so far (capped to maxData)
  #dataRead = 0;

  // Method returning promise when this push source is readable.
  dataRequest() {
    const result = {
      bytesRead: 8,
      data: "",
    };

    return new Promise((resolve) => {
      if (this.#dataRead >= MockPushSource.#maxData) {
        // Out of data
        result.bytesRead = 0;
        result.data = "";
        resolve(result);
        return;
      }

      // Emulate slow read of data
      setTimeout(() => {
        const numberBytesReceived = 8;
        this.#dataRead += numberBytesReceived;
        result.data = MockPushSource.#randomChars();
        resolve(result);
      }, 500);
    });
  }

  // Dummy close function
  close() {
    return;
  }

  // Return random character string
  static #randomChars(length = 8) {
    let string = "";
    const choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices[Math.floor(Math.random() * choices.length)];
    }
    return string;
  }
}
```

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Ausgeblendet, da es für Leser nicht nützlich ist -->

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
const stream = makePushSourceStream();

function makePushSourceStream() {
  const pushSource = new MockPushSource();

  return new ReadableStream({
    start(controller) {
      readRepeatedly().catch((e) => controller.error(e));
      function readRepeatedly() {
        return pushSource.dataRequest().then((result) => {
          if (result.data.length == 0) {
            logSource(`No data from source: closing`);
            controller.close();
            return;
          }

          logSource(`Enqueue data: ${result.data}`);
          controller.enqueue(result.data);
          return readRepeatedly();
        });
      }
    },

    cancel() {
      logSource(`cancel() called on underlying source`);
      pushSource.close();
    },
  });
}
```

```js hidden
// Monkey patch fetch() so it returns a response that is a mocked stream
window.fetch = async (...args) => {
  return { body: stream };
};
```

Der folgende Code zeigt ein vollständigeres Beispiel.
Hier wird der Fetch-Stream mit dem Iterator innerhalb eines try/catch-Blocks konsumiert.
Bei jeder Iteration der Schleife protokolliert und zählt der Code einfach die empfangenen Bytes.
Wenn ein Fehler auftritt, wird das Problem protokolliert.
Die `fetch()`-Operation kann mit einem `AbortSignal` abgebrochen werden, was ebenfalls als Fehler protokolliert würde.

```js
let bytes = 0;

const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  try {
    const response = await fetch(url, signal);
    for await (const chunk of response.body) {
      if (signal.aborted) throw signal.reason;
      bytes += chunk.length;
      logConsumer(`Chunk: ${chunk}. Read ${bytes} characters.`);
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e);
      logConsumer("TypeError: Browser may not support async iteration");
    } else {
      logConsumer(`Error in async iterator: ${e}.`);
    }
  }
}
```

Im Beispielprotokoll unten sehen Sie den Code in Aktion oder es wird berichtet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Blöcke; Sie können die Abbrechen-Taste drücken, um den Abruf zu stoppen.

> [!NOTE]
> Diese `fetch`-Operation ist _nachgebildet_ zu Vorführzwecken und gibt einfach einen `ReadableStream` zurück, der zufällige Textblöcke generiert.
> Die "Underlying source" auf der linken Seite unten sind die Daten, die in der nachgebildeten Quelle generiert werden, während die Spalte rechts das Protokoll des Verbrauchers ist.
> (Der Code für die nachgebildete Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines benutzerdefinierten lesbaren Streams

Das einfache Stream Pump-Beispiel, das wir in diesem Artikel untersuchen, enthält einen zweiten Teil — nachdem wir das Bild von der Fetch-Abfrage in Blöcken gelesen haben, reihen wir sie in einen weiteren, selbst erstellten benutzerdefinierten Stream ein. Wie erstellen wir diesen? Mit dem `ReadableStream()`-Konstruktor.

### Der ReadableStream()-Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn er Ihnen vom Browser zur Verfügung gestellt wird, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Blöcken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor ermöglicht Ihnen dies über eine Syntax, die auf den ersten Blick komplex erscheint, aber tatsächlich nicht so schlimm ist.

Das generische Syntax-Skelett sieht folgendermaßen aus:

```js
const stream = new ReadableStream(
  {
    start(controller) {},
    pull(controller) {},
    cancel() {},
    type,
    autoAllocateChunkSize,
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript von der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream festzulegen. Dies müssen Sie selten tun, daher konzentrieren wir uns vorerst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal sofort nach der Erstellung des `ReadableStream` aufgerufen wird. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z. B. das Beginnen der Datengenerierung oder anderweitiges Erlangen von Zugriff auf die Quelle.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während mehr Blöcke eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z. B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte tun, was nötig ist, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet, wenn sie enthalten sind, um anzuzeigen, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie sich in Zweck und Anwendungsfall etwas von regulären (Standard-)Streams unterscheiden.

Wenn wir uns unser einfaches Beispiel noch einmal ansehen, können Sie sehen, dass unser `ReadableStream()`-Konstruktor nur eine einzelne Methode enthält — `start()`, die dazu dient, alle Daten unseres Fetch-Streams zu lesen.

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  });
```

### ReadableStream Controller

Sie werden bemerken, dass die `start()`- und `pull()`-Methoden, die an den `ReadableStream()`-Konstruktor übergeben werden, `controller`-Parameter verwenden — dies sind Instanzen der Klasse [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController), die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Körper gelesen wurde.

Darüber hinaus verwenden wir, wenn wir mit dem Lesen des Fetch-Körpers fertig sind, die [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)-Methode des Controllers, um den benutzerdefinierten Stream zu schließen — zuvor eingereihte Blöcke können daraus noch gelesen werden, aber es können keine weiteren mehr eingereiht werden, und der Stream wird geschlossen, wenn das Lesen abgeschlossen ist.

### Vom benutzerdefinierten Stream lesen

In unserem einfachen Stream Pump-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response)-Konstruktoraufruf übergeben und ihn anschließend als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, d. h. Sie können einen Reader daran anschließen. Schauen Sie sich als Beispiel unser [Beispiel für einen einfachen Zufallsstrom](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) an ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und dann die Daten wieder aus dem Stream liest, sobald die _Stop string generation_-Schaltfläche gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; beispielsweise mit [`TextEncoder`](/de/docs/Web/API/TextEncoder) codiert.

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen [`setInterval()`](/de/docs/Web/API/SetInterval)-Aufruf verwendet, um jede Sekunde eine zufällige Zeichenfolge zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um es in den Stream einzureihen. Wenn die Taste gedrückt wird, wird das Intervall abgebrochen, und eine Funktion namens `readStream()` wird aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Blöcke darin einzureihen.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      const string = randomChars();
      // Add the string to the stream
      controller.enqueue(string);
      // show it on the screen
      const listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener("click", () => {
      clearInterval(interval);
      readStream();
      controller.close();
    });
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  },
});
```

In der eigentlichen `readStream()`-Funktion sperren wir einen Reader an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) und folgen dann dem gleichen Muster, das wir zuvor gesehen haben — jeden Block mit `read()` lesen, überprüfen, ob `done` `true` ist und dann den Prozess beenden, wenn ja, und den nächsten Block lesen und verarbeiten, wenn nicht, bevor wir die `read()`-Methode erneut ausführen.

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    const listItem = document.createElement("li");
    listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

### Schließen und Abbrechen von Streams

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Readers gezeigt. Wie zuvor erwähnt, werden alle zuvor eingereihten Blöcke noch gelesen, aber es können keine weiteren mehr eingereiht werden, da der Stream geschlossen ist.

Wenn Sie den Stream vollständig loswerden und alle eingereihten Blöcke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Teile eines Streams

Manchmal möchten Sie einen Stream gleichzeitig zweimal lesen. Dies wird durch die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie gibt ein Array mit zwei identischen Kopien des ursprünglichen lesbaren Streams aus, die dann unabhängig voneinander von zwei separaten Readern gelesen werden können.

Dies könnten Sie zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und an den Browser streamen, aber auch an den Service Worker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Reader gleichzeitig gelesen werden kann, würden Sie zwei Kopien benötigen, um dies zu tun.

Wir bieten ein Beispiel hierfür in unserem [Einfachen Teile-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert sehr ähnlich wie unser einfacher ZufallStream, außer dass, wenn die Taste zum Stoppen der Zufallsgenerierung gedrückt wird, der benutzerdefinierte Stream genommen und geteilt wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe-Ketten

Ein weiteres Feature von Streams ist die Fähigkeit, Streams ineinander zu pipen (genannt eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies beinhaltet zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), das einen lesbaren Stream durch ein Schreib-/Leserpaar piped, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), das einen lesbaren Stream zu einem Writer piped, der als Endpunkt für die Pipe-Kette dient.

Wir haben ein einfaches Beispiel namens [Entpacken von PNG-Blöcken](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann durch einen benutzerdefinierten PNG-Transform-Stream piped, der PNG-Blöcke aus einem binären Datenstrom extrahiert.

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  // Create a gray-scaled PNG stream out of the original
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

Wir haben noch kein Beispiel, das [`TransformStream`](/de/docs/Web/API/TransformStream) verwendet.

## Zusammenfassung

Das erklärt die Grundlagen der "standardmäßigen" lesbaren Streams.

Informationen zur Verwendung von lesbaren _Byte_-Streams finden Sie unter [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams): Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente zero-copy-Übertragungen zu einem Verbraucher durchführen können und die internen Warteschlangen des Streams umgehen.
