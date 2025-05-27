---
title: Verwendung von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Streams")}}

Für einen JavaScript-Entwickler ist es sehr nützlich, Streams von Daten, die über das Netzwerk empfangen werden, programmatisch zu lesen und zu manipulieren, Stück für Stück. Aber wie nutzt man die Funktionalität von lesbaren Streams der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind. Wenn nicht, empfehlen wir Ihnen, zunächst den [Übersicht über Konzepte und Nutzung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen [Artikel zu Streams-API-Konzepten](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu beschreibbaren Streams suchen, versuchen Sie es stattdessen mit [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Finden von Beispielen

In diesem Artikel betrachten wir verschiedene Beispiele aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repo. Sie finden dort den vollständigen Quellcode sowie Links zu den Beispielen.

## Ein "fetch" als Stream konsumieren

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es, Ressourcen über das Netzwerk abzurufen, und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und besonders schön ist es, dass Browser kürzlich die Fähigkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) Eigenschaften sind verfügbar, die Getter sind und den Inhalt des Körpers als lesbaren Stream zugänglich machen.

Wie unser [Einfacher Stream-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es eine Frage des Zugriffs auf die `body`-Eigenschaft der Antwort:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt.

### Ein Leser anhängen

Nun, da wir unseren Streaming-Inhalt haben, erfordert das Lesen des Streams, dass ein Leser daran angeschlossen wird. Dies erfolgt mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Das Aufrufen dieser Methode erstellt einen Leser und sperrt ihn für den Stream — kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z.B. durch Aufruf von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Außerdem kann das vorherige Beispiel um einen Schritt verkürzt werden, da `response.body` synchron ist und daher nicht das Versprechen benötigt:

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

Nun, da Sie Ihren Leser angeschlossen haben, können Sie Datenstücke aus dem Stream mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Dies liest ein Stück aus dem Stream, das Sie dann beliebig verwenden können. Zum Beispiel fährt unser Einfacher Stream-Pump-Beispiel fort, jedes Stück in einem neuen, benutzerdefinierten `ReadableStream` einzureihen (dazu später mehr), und erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert sie als [`Blob`](/de/docs/Web/API/Blob), erstellt eine Objekt-URL aus diesem Blob mit Hilfe von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigt es dann in einem {{htmlelement("img")}}-Element auf dem Bildschirm an, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Schauen wir uns genauer an, wie `read()` verwendet wird. In der oben gezeigten `pump()`-Funktion rufen wir zunächst `read()` auf, das ein Versprechen mit einem Ergebnisobjekt zurückgibt — dieses enthält die Ergebnisse unseres Lesens in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können drei verschiedene Typen haben:

- Wenn ein Stück zu lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als Nächstes prüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Stücke zu lesen (der Wert ist `undefined`), also verlassen wir die Funktion und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Mehr über den benutzerdefinierten Stream erklären wir im nächsten Abschnitt.

Wenn `done` nicht `wahr` ist, verarbeiten wir das neue gelesene Stück (enthalten in der `value`-Eigenschaft des Ergebnisobjekts) und rufen dann erneut die `pump()`-Funktion auf, um das nächste Stück zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das standardmäßige Muster, das Sie sehen werden, wenn Sie Stream-Leser verwenden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Wenn es keinen weiteren Stream zum Lesen gibt, steigen Sie aus der Funktion aus.
3. Gibt es noch mehr Stream zu lesen, verarbeiten Sie das aktuelle Stück und führen die Funktion erneut aus.
4. Sie verketten die `pump()`-Funktion immer weiter, bis es keinen weiteren Stream mehr zu lesen gibt, in welchem Fall Schritt 2 folgt.

Ohne den Code zu entfernen, der tatsächlich einen "Pump" ausführt, könnte der Code verallgemeinert so aussehen:

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
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Promise-Handlers steht, ist es tatsächlich analog zu einer Kette von Promise-Handlern.

Das Lesen des Streams ist noch einfacher, wenn man es mit async/await statt mit Versprechen schreibt:

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

## Einen `fetch()` mit asynchroner Iteration konsumieren

Es gibt eine noch einfachere Möglichkeit, einen `fetch()` zu konsumieren, indem Sie den zurückgegebenen `response.body` mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Syntax iterieren.
Dies funktioniert, da der `response.body` einen `ReadableStream` zurückgibt, welcher ein [asynchroner Iterable](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorherigen Abschnitt wie folgt umgeschrieben werden:

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
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zu verarbeiten hat, sodass es zu einer Verzögerung zwischen dem Abbruch des Signals und dem Aufruf von `break` kommen kann.

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

### Beispiel eines asynchronen Lesers

<!-- Der größte Teil des Codes unten ist absichtlich ausgeblendet, da er für das Beispiel nicht relevant ist -->

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

<!-- Der folgende HTML- und JS-Code richtet die Berichterstattung ein. Verbirgt sich, weil er für die Leser nicht nützlich ist -->

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

Der folgende Code zeigt ein umfassenderes Beispiel.
Hier wird der Fetch-Stream wurde mithilfe des Iterators innerhalb eines Try/Catch-Blocks konsumiert.
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

Das unten stehende Beispielprotokoll zeigt den Code im Ausführung oder berichtet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Stücke; Sie können die Abbrechen-Schaltfläche drücken, um den Fetch-Vorgang zu stoppen.

> [!NOTE]
> Diese Fetch-Operation wird für Demonstrationszwecke _simuliert_ und gibt nur einen `ReadableStream` zurück, der zufällige Textbrocken generiert.
> Der „Underlying source“ auf der linken Seite unten sind die Daten, die in der simulierten Quelle generiert werden, während die Spalte auf der rechten Seite das Protokoll des Verbrauchers ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Einen eigenen benutzerdefinierten lesbaren Stream erstellen

Das einfache Stream-Pump-Beispiel, das wir in diesem Artikel behandelt haben, umfasst einen zweiten Teil — sobald wir das Bild stückweise aus dem Fetch-Body gelesen haben, reihen wir sie dann in einen weiteren, benutzerdefinierten Stream unserer eigenen Kreation ein. Wie erstellen wir dies? Mit dem `ReadableStream()` Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser Ihnen einen bereitstellt, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Stücken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor ermöglicht Ihnen dies mit einer Syntax, die auf den ersten Blick komplex erscheint, aber tatsächlich gar nicht so schlecht ist.

Das generische Syntax-Skelett sieht so aus:

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

Der Konstruktor nimmt zwei Objekte als Parameter entgegen. Das erste Objekt ist erforderlich und erstellt ein Modell im JavaScript der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream zu spezifizieren. Dies werden Sie selten tun müssen, daher konzentrieren wir uns vorerst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` konstruiert wurde. Innerhalb dieser Methode sollten Sie Code einschließen, der die Stream-Funktionalität einrichtet, z.B. die Erzeugung von Daten beginnen oder anderweitig Zugriff auf die Quelle erhalten.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, wenn weitere Stücke eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles tun, was notwendig ist, um den Zugriff auf die Stream-Quelle zu beenden.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn enthalten — um anzugeben, dass der Stream ein Byte-Stream sein soll.
   Byte-Streams werden in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) separat behandelt, da sie in Zweck und Anwendungsfall etwas anders sind als reguläre (Standard-) Streams.

Ein Blick auf unseren einfachen Beispielcode zeigt, dass unser `ReadableStream()` Konstruktor nur eine einzelne Methode enthält — `start()`, die dient, um alle Daten aus unserem Fetch-Stream zu lesen.

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

### ReadableStream-Controller

Sie werden bemerken, dass die in den `ReadableStream()` Konstruktor übergebenen Methoden `start()` und `pull()` `controller`-Parameter erhalten — dies sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Klasse, die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die `enqueue()`-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Darüber hinaus verwenden wir am Ende des Lesens des Fetch-Bodys die `close()`-Methode des Controllers, um den benutzerdefinierten Stream zu schließen — alle zuvor eingereihten Stücke können immer noch daraus gelesen werden, aber es können keine weiteren eingereiht werden, und der Stream wird geschlossen, wenn das Lesen abgeschlossen ist.

### Von benutzerdefinierten Streams lesen

In unserem Einfachen Stream-Pump-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response) Konstruktorruf übergeben und ihn anschließend als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, d.h. Sie können einen Leser daran anschließen. Werfen Sie als Beispiel einen Blick auf unser [Einfaches Zufall-Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), das einen benutzerdefinierten Stream erstellt, einige zufällige Strings darin einreiht und die Daten dann wieder aus dem Stream liest, wenn die Taste _Stopp Zeichenfolge generieren_ gedrückt wird.

> [!NOTE]
> Um einen Stream mithilfe von [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; beispielsweise kodiert mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf verwendet, um jede Sekunde eine zufällige Zeichenfolge zu erzeugen. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um es in den Stream einzureihen. Wenn die Taste gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Stücke darin einzureihen.

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

In der `readStream()`-Funktion selbst sperren wir einen Leser an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir zuvor gesehen haben — jedes Stück mit `read()` lesen, überprüfen, ob `done` `true` ist, und den Vorgang beenden, wenn dem so ist, und das nächste Stück lesen und es verarbeiten, wenn nicht, bevor wir die `read()`-Methode erneut ausführen.

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

Wir haben bereits Beispiele gezeigt, in denen [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) verwendet wurde, um einen Leser zu schließen. Wie schon gesagt, werden alle zuvor eingereihten Stücke weiterhin gelesen, aber es können keine weiteren eingereiht werden, da er geschlossen ist.

Wenn Sie den Stream vollständig loswerden und alle eingereihten Stücke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Ein Stream verdoppeln

Manchmal möchten Sie einen Stream zweimal gleichzeitig lesen. Dies wird über die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie erzeugt ein Array, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig von zwei verschiedenen Lesern gelesen werden können.

Dies könnten Sie zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server an den Browser streamen, es aber auch in den Service Worker Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal verbraucht werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [Einfaches Tee-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser Einfaches Zufall-Stream-Beispiel, außer dass beim Drücken der Taste zum Stoppen der Zufallszeichengenerierung der benutzerdefinierte Stream genommen und verdoppelt wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe Chains

Ein weiteres Merkmal von Streams ist die Möglichkeit, Streams in einander zu leiten (genannt eine [Pipe Chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Schreiber/Leser-Paar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream an einen Schreiber leitet, der als Endpunkt für die Pipe Chain fungiert.

Wir haben ein Beispiel, genannt [Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), welches ein Bild als Stream abrufen und es dann durch einen benutzerdefinierten PNG-Transform-Stream leiten, der PNG-Brocken aus einem binären Datenstream extrahiert.

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

Wir haben bisher noch kein Beispiel, das [`TransformStream`](/de/docs/Web/API/TransformStream) verwendet.

## Zusammenfassung

Das erklärt die Grundlagen der "Standard"-lesbaren Streams.

Siehe [Nutzung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Transfers zu einem Verbraucher durchführen können und dabei die internen Warteschlangen des Streams umgehen.
