---
title: Verwenden von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist das programmgesteuerte Lesen und Manipulieren von Datenströmen, die über das Netzwerk in Teilen empfangen werden, sehr nützlich! Aber wie verwendet man die Funktionalität des Streams API für lesbare Streams? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den Konzepten auf hoher Ebene vertraut sind. Wenn nicht, empfehlen wir, zuerst den [Überblick über Streams-Konzepte und -Verwendung](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen [Streams API Konzepte](/de/docs/Web/API/Streams_API/Concepts) Artikel zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie nach Informationen zu beschreibbaren Streams suchen, versuchen Sie es stattdessen mit [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Finden von Beispielen

Wir werden in diesem Artikel verschiedene Beispiele betrachten, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Sie können dort den vollständigen Quellcode finden sowie Links zu den Beispielen.

## Konsumieren eines Fetch als Stream

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und stellt eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest) dar. Sie hat eine Reihe von Vorteilen, und was wirklich schön ist, ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) sind verfügbar und fungieren als Getter, die den Körperinhalt als lesbaren Stream freigeben.

Wie unser [Einfaches Stream-Pumpen](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist das Freigeben einfach eine Frage des Zugriffs auf die `body` Eigenschaft der Antwort:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt.

### Einen Leser anfügen

Jetzt, da wir unseren Streaming-Körper haben, erfordert das Lesen des Streams das Anfügen eines Lesers. Dies geschieht mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Der Aufruf dieser Methode erstellt einen Leser und sperrt ihn für den Stream – kein anderer Leser darf diesen Stream lesen, bis dieser Leser freigegeben wird, z.B. durch den Aufruf von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und daher das Versprechen nicht benötigt:

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

Jetzt, da Sie Ihren Leser angefügt haben, können Sie mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) Datenstücke aus dem Stream lesen. Dies liest ein Stück aus dem Stream, mit dem Sie dann alles machen können, was Ihnen einfällt. Zum Beispiel reiht unser Einfaches Stream-Pumpen-Beispiel jedes Stück in einen neuen, benutzerdefinierten `ReadableStream` ein (dazu erfahren Sie mehr im nächsten Abschnitt), erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert es als [`Blob`](/de/docs/Web/API/Blob), erstellt eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigt es dann in einem {{htmlelement("img")}} Element auf dem Bildschirm an, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Schauen wir uns im Detail an, wie `read()` verwendet wird. In der oben gezeigten `pump()`-Funktion rufen wir zuerst `read()` auf, was ein Versprechen enthält, das ein Ergebnissobjekt enthält — dies enthält die Ergebnisse unseres Lesens in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können eine von drei verschiedenen Typen sein:

- Wenn ein Stück zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerbehaftet wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als nächstes prüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Stücke zu lesen (der Wert ist `undefined`), also verlassen wir die Funktion und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> [!NOTE]
> `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Wir werden mehr über den benutzerdefinierten Stream im nächsten Abschnitt erklären.

Wenn `done` nicht `true` ist, verarbeiten wir das neue Stück, das wir gelesen haben (enthalten in der `value`-Eigenschaft des Ergebnissobjekts), und rufen dann erneut die `pump()`-Funktion auf, um das nächste Stück zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie bei der Verwendung von Stream-Lesern sehen werden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Wenn es keinen weiteren Stream zu lesen gibt, verlassen Sie die Funktion.
3. Wenn es mehr Stream zu lesen gibt, verarbeiten Sie das aktuelle Stück und führen die Funktion erneut aus.
4. Sie ketten die `pump()`-Funktion aneinander, bis es keinen weiteren Stream mehr zu lesen gibt. In diesem Fall wird Schritt 2 befolgt.

Wenn man den gesamten Code entfernt, um tatsächlich ein "Pumpen" auszuführen, könnte der Code zu etwas Generellem zusammengefasst werden wie:

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
> Die Funktion sieht so aus, als ob `pump()` sich selbst aufruft und könnte zu einer potenziell tiefen Rekursion führen.
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Versprechen-Handlers steht, entspricht es tatsächlich einer Kette von Versprechen-Handlern.

Das Lesen des Streams ist noch einfacher, wenn es mit async/await anstelle von Versprechen geschrieben wird:

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

## Konsumieren eines `fetch()` mittels asynchroner Iteration

Es gibt eine noch einfachere Methode, ein `fetch()` zu konsumieren, nämlich die Rückgabe von `response.body` mit der Syntax [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) zu iterieren. Dies funktioniert, weil `response.body` einen `ReadableStream` zurückgibt, der ein [asynchrons iterierbares](/de/docs/Web/API/ReadableStream#async_iteration) Objekt ist.

Mit diesem Ansatz kann der im vorherigen Abschnitt gezeigte Beispielcode so umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie das Iterieren des Streams stoppen möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und dem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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

Alternativ können Sie die Schleife mit `break` verlassen, wie im Code unten gezeigt. Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zum Verarbeiten hat, sodass es zu einer Verzögerung zwischen dem Abbruch des Signals und dem Aufruf von `break` kommen kann.

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

### Beispiel für einen asynchronen Leser

<!-- Der Großteil des unten stehenden Codes wird bewusst ausgeblendet, da er für das Beispiel nicht relevant ist -->

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
  close() {}

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

<!-- Das folgende HTML und JS richtet das Reporting ein. Ausgeblendet, da es für die Leser nicht nützlich ist -->

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
          if (result.data.length === 0) {
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
window.fetch = async (...args) => ({ body: stream });
```

Der unten gezeigte Code zeigt ein vollständigeres Beispiel. Hier wird der Fetch-Stream mithilfe des Iterators in einem Try/Catch-Block konsumiert. Bei jeder Iteration der Schleife protokolliert der Code einfach die empfangenen Bytes und zählt sie. Wenn es einen Fehler gibt, wird das Problem protokolliert. Die `fetch()`-Operation kann mit einem `AbortSignal` abgebrochen werden, was ebenfalls als Fehler protokolliert wird.

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

Das Beispielprotokoll unten zeigt den Code im Laufen oder berichtet, dass Ihr Browser die asynchrone Iteration eines `ReadableStream` nicht unterstützt. Die rechte Seite zeigt die empfangenen Datenstücke; Sie können die Abbrechen-Schaltfläche drücken, um den Abruf zu beenden.

> [!NOTE]
> Diese Fetch-Operation ist für Demonstrationszwecke _simuliert_ und gibt einfach einen `ReadableStream` zurück, der zufällige Textausschnitte erzeugt.
> Die "Unterliegende Quelle" auf der linken Seite unten sind die Daten, die in der simulierten Quelle erzeugt werden, während die Spalte auf der rechten Seite das Protokoll des Verbrauchers ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines eigenen benutzerdefinierten lesbaren Streams

Das Beispiel für das einfache Stream-Pumpen, das wir im gesamten Artikel untersucht haben, enthält einen zweiten Teil. Sobald wir das Bild aus dem Fetch-Körper in Teilen gelesen haben, reihen wir sie in einen weiteren, benutzerdefinierten Stream ein, den wir selbst erstellt haben. Wie erstellen wir das? Der `ReadableStream()` Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, von einem Stream zu lesen, wenn der Browser ihn wie im Fall von Fetch für Sie bereitstellt. Aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und mit Ihren eigenen Datenstücken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor ermöglicht dies über eine Syntax, die zunächst komplex aussieht, aber eigentlich gar nicht so schlimm ist.

Das generische Syntaxskelett sieht so aus:

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

Der Konstruktor nimmt zwei Objekte als Parameter entgegen. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript von der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream zu verwenden. Sie werden dies selten tun müssen, daher konzentrieren wir uns vorerst nur auf das erste.

Das erste Objekt kann bis zu fünf Member enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` erstellt wurde. In dieser Methode sollten Sie Code einschließen, der die Stream-Funktionalität einrichtet, z.B. die Generierung von Daten beginnt oder anderweitig Zugriff auf die Quelle erhält.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, wenn mehr Datenstücke eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles tun, was notwendig ist, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn enthalten — um anzuzeigen, dass der Stream ein Bytestream sein soll. Bytestreams werden separat im Artikel [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie in Zweck und Anwendungsfall etwas anders sind als reguläre (Standard-)Streams.

Wenn wir uns unseren einfachen Beispielcode noch einmal ansehen, können Sie sehen, dass unser `ReadableStream()` Konstruktor nur eine einzige Methode enthält — `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden feststellen, dass die `start()` und `pull()` Methoden, die in den `ReadableStream()` Konstruktor übergeben werden, `controller` Parameter erhalten — dies sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Klasse, die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die `enqueue()`-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Körper gelesen wurde.

Außerdem verwenden wir die `close()`-Methode des Controllers, um den benutzerdefinierten Stream zu schließen, wenn wir den Fetch-Körper fertig gelesen haben — alle zuvor eingereihten Datenstücke können noch daraus gelesen werden, aber es können keine weiteren eingereiht werden, und der Stream wird geschlossen, sobald das Lesen abgeschlossen ist.

### Von benutzerdefinierten Streams lesen

In unserem Beispiel für einfaches Stream-Pumpen konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen Aufruf des [`Response`](/de/docs/Web/API/Response/Response) Konstruktors einfügen und dann als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream` Instanz, was bedeutet, dass Sie einen Leser an ihn anhängen können. Werfen Sie zum Beispiel einen Blick auf unser [Einfaches Zufalls-Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), welches einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen in ihn einreiht und die Daten dann erneut aus dem Stream liest, sobald die Schaltfläche _Stop string generation_ gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; zum Beispiel kodiert mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der Konstruktor des benutzerdefinierten Streams hat eine `start()` Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf verwendet, um jede Sekunde eine zufällige Zeichenfolge zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um sie in den Stream einzureihen. Wenn die Schaltfläche gedrückt wird, wird das Intervall abgebrochen, und eine Funktion namens `readStream()` wird aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen den Stream auch, da wir aufgehört haben, Stücke in ihn einzureihen.

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

In der `readStream()` Funktion selbst sperren wir einen Leser an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir zuvor gesehen haben – jedes Stück mit `read()` lesen, prüfen, ob `done` `true` ist und dann den Prozess beenden, wenn dem so ist, und das nächste Stück lesen und verarbeiten, wenn nicht, bevor wir die `read()` Methode erneut ausführen.

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

### Streams schließen und abbrechen

Wir haben bereits Beispiele gezeigt, wie [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Lesers verwendet wird. Wie wir zuvor gesagt haben, können zuvor eingereihte Stücke noch gelesen werden, aber keine weiteren können eingereiht werden, da es geschlossen ist.

Wenn Sie den Stream vollständig entfernen und alle eingereihten Stücke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Stream aufteilen

Manchmal möchten Sie einen Stream zweimal, gleichzeitig lesen. Dies wird über die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht – sie gibt ein Array aus, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig von zwei verschiedenen Lesern gelesen werden können.

Dies könnte zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) der Fall sein, wenn Sie eine Antwort vom Server holen und sie sowohl zum Browser als auch zum Service Worker Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann, und ein Stream nicht mehr als einmal von einem Leser gelesen werden kann, würden Sie zwei Kopien benötigen, um dies zu tun.

Wir bieten ein Beispiel hierfür in unserem [Simply tee Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser Einfaches Zufalls-Stream, außer dass wenn der Button gedrückt wird, um die zufällige Zeichenfolgenerzeugung zu stoppen, der benutzerdefinierte Stream genommen wird und mit tee aufgeteilt wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohr-Ketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams in einen anderen zu pipen (genannt eine [Rohr-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden – [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Writer/Reader-Paar piped, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream zu einem Writer piped, der als Endpunkt für die Rohr-Kette fungiert.

Wir haben tatsächlich ein Beispiel namens [Chunks eines PNG entpacken](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann durch einen benutzerdefinierten PNG-Transformationsstream piped, der PNG-Blöcke aus einem Binärdatenstrom extrahiert.

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

Das erklärt die Grundlagen der "Standard"-lesbaren Streams.

Sehen Sie sich [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) an, um Informationen darüber zu erhalten, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Transfers zu einem Konsumenten durchführen können und die internen Warteschlangen des Streams umgehen.
