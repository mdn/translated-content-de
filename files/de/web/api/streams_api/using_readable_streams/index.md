---
title: Verwendung von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist es sehr nützlich, Datenströme, die über das Netzwerk empfangen werden, Programmatisch zu lesen und zu manipulieren, Stück für Stück! Aber wie verwendet man die Funktionsweise der Readable Streams der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind. Falls nicht, empfehlen wir Ihnen, zunächst die [Übersicht über Konzepte und Nutzung der Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und den dedizierten Artikel [Konzepte der Streams-API](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Falls Sie Informationen zu beschreibbaren Streams suchen, versuchen Sie stattdessen [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Finden von Beispielen

Wir werden in diesem Artikel verschiedene Beispiele betrachten, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams)-Repository stammen. Dort finden Sie den vollständigen Quellcode sowie Links zu den Beispielen.

## Konsumieren eines Fetch als Stream

Die [Fetch-API](/de/docs/Web/API/Fetch_API) ermöglicht das Abrufen von Ressourcen über das Netzwerk und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und was wirklich schön ist, ist, dass Browser kürzlich die Fähigkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die [`Request.body`](/de/docs/Web/API/Request/body)- und [`Response.body`](/de/docs/Web/API/Response/body)-Eigenschaften sind verfügbar, welche Getter sind, die die Inhaltskörper als lesbare Streams zugänglich machen.

Wie unser [Einfaches Strompumpen](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump)-Beispiel zeigt ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es eine Frage des einfachen Zugriffs auf die `body`-Eigenschaft der Antwort:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies stellt uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zur Verfügung.

### Einen Leser anhängen

Nun haben wir unseren streamenden Body, das Lesen des Streams erfordert, dass ein Leser daran angehängt wird. Dies geschieht mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Durch das Aufrufen dieser Methode wird ein Leser erstellt und an den Stream gebunden — kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z.B. durch das Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Außerdem beachten Sie, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und daher kein Promise benötigt:

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

Jetzt, da Sie Ihren Leser angehängt haben, können Sie Datenchunks aus dem Stream mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Dies liest einen Chunk aus dem Stream, mit dem Sie dann alles tun können, was Sie möchten. Zum Beispiel wird in unserem simplen Streampumpen-Beispiel jeder Chunk in einem neuen, benutzerdefinierten `ReadableStream` platziert (dazu erfahren wir im nächsten Abschnitt mehr), dann wird eine neue [`Response`](/de/docs/Web/API/Response) daraus erstellt, sie wird als [`Blob`](/de/docs/Web/API/Blob) konsumiert, eine Objekt-URL wird aus diesem Blob mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt und dann im Bildschirm in einem {{htmlelement("img")}}-Element angezeigt, womit effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Lassen Sie uns im Detail betrachten, wie `read()` verwendet wird. In der obigen `pump()`-Funktion rufen wir zuerst `read()` auf, was ein Promise zurückgibt, das ein Ergebnisobjekt enthält — es hat die Ergebnisse unseres Lesens in Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können eines von drei verschiedenen Typen sein:

- Wenn ein Chunk zum Lesen verfügbar ist, wird das Promise mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Promise mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Promise mit dem relevanten Fehler abgelehnt.

Als nächstes prüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Chunks zu lesen (der Wert ist `undefined`), also kehren wir aus der Funktion zurück und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> [!NOTE]
> `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir den neuen Chunk, den wir gelesen haben (enthalten im `value`-Eigenschaft des Ergebnisobjekts), und rufen dann die `pump()`-Funktion erneut auf, um den nächsten Chunk zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Readern sehen werden:

1. Sie schreiben eine Funktion, die beginnt, indem sie den Stream liest.
2. Wenn es keinen weiteren Stream zum Lesen gibt, verlassen Sie die Funktion.
3. Wenn es mehr Stream zum Lesen gibt, verarbeiten Sie den aktuellen Chunk und führen Sie die Funktion erneut aus.
4. Sie verketten die `pump()`-Funktion fortlaufend, bis es keinen weiteren Stream zum Lesen gibt, in welchem Fall Schritt 2 ausgeführt wird.

Wenn man den gesamten Code entfernt, um tatsächlich eine "Pumpe" auszuführen, könnte der Code verallgemeinert so aussehen:

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
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Promise-Handlers erfolgt, entspricht es tatsächlich einer Kette von Promise-Handlern.

Das Lesen des Streams ist noch einfacher, wenn es mit async/await anstelle von Promises geschrieben wird:

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

## Konsumieren eines fetch() mittels asynchroner Iteration

Es gibt noch einen einfacheren Weg, einen `fetch()` zu konsumieren, nämlich das Iterieren über das zurückgegebene `response.body` mit der Syntax [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of).
Dies funktioniert, weil `response.body` einen `ReadableStream` zurückgibt, der ein [asynchron iterierbares Objekt](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorherigen Abschnitt umgeschrieben werden, wie gezeigt:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie das Iterieren durch den Stream stoppen möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und dem dazugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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

Alternativ können Sie die Schleife mit `break` verlassen, wie im unten stehenden Code gezeigt.
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zu verarbeiten hat, sodass es zu einer gewissen Verzögerung zwischen dem Abbrechen des Signals und dem Aufruf von `break` kommen kann.

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

<!-- Der meiste Code unten ist absichtlich verborgen, da er für das Beispiel nicht relevant ist -->

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

<!-- Der folgende HTML- und JS-Code richtet die Berichterstattung ein. Versteckt, da es für die Leser nicht nützlich ist -->

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

Der untenstehende Code zeigt ein umfassenderes Beispiel.
Hier wird der Fetch-Stream im Iterator in einem Try/Catch-Block konsumiert.
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

Das untenstehende Beispiellog zeigt den Code, der ausgeführt wird, oder berichtet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Chunks; Sie können auf die Abbruchtaste drücken, um den Abruf zu stoppen.

> [!NOTE]
> Diese Fetch-Operation ist _simuliert_ zu Demonstrationszwecken und gibt nur einen `ReadableStream` zurück, der zufällige Textpieces generiert.
> Die "Unterliegende Quelle" auf der linken Seite unten sind die Daten, die in der simulierten Quelle erzeugt werden, während die Spalte rechts das Protokoll vom Verbraucher ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines benutzerdefinierten lesbaren Streams

Das Simple Stream Pump-Beispiel, das wir im Laufe dieses Artikels untersucht haben, enthält einen zweiten Teil — nachdem wir das Bild aus dem Fetch-Body in Chunks gelesen haben, stellen wir sie dann in einem weiteren, benutzerdefinierten Stream unserer eigenen Erstellung bereit. Wie erstellen wir diesen? Der `ReadableStream()`-Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser ihn für Sie bereitstellt, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Chunks füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor ermöglicht es Ihnen, dies über eine Syntax zu tun, die auf den ersten Blick komplex erscheint, aber eigentlich nicht so schlimm ist.

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

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und erlaubt Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben. Sie werden dies selten tun müssen, daher konzentrieren wir uns vorerst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, sofort nachdem der `ReadableStream` konstruiert wurde. Innerhalb dieser Methode sollten Sie Code einschließen, der die Stream-Funktionalität einrichtet, z.B. die Datengenerierung beginnen oder anderweitig Zugriff auf die Quelle erhalten.
2. `pull(controller)` — Eine Methode, die, wenn sie eingeschlossen ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während mehr Chunks in die Warteschlange gestellt werden.
3. `cancel()` — Eine Methode, die, wenn sie eingeschlossen ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte tun, was notwendig ist, um den Zugriff auf die Streamquelle zu beenden.
4. `type` und `autoAllocateChunkSize` — Diese werden — wenn eingeschlossen — verwendet, um anzugeben, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie in Zweck und Anwendungsfall etwas anders sind als reguläre (Standard-)Streams.

Wenn wir uns unseren einfachen Beispielcode noch einmal ansehen, sehen Sie, dass unser `ReadableStream()`-Konstruktor nur eine einzelne Methode enthält — `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden bemerken, dass die `start()`- und `pull()`-Methoden, die an den `ReadableStream()`-Konstruktor übergeben werden, `controller`-Parameter erhalten — dies sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Klasse, die zur Steuerung Ihres Streams verwendet werden können.

In unserem Beispiel verwenden wir die [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Darüber hinaus verwenden wir, wenn wir mit dem Lesen des Fetch-Bodys fertig sind, die [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)-Methode des Controllers, um den benutzerdefinierten Stream zu schließen — alle zuvor eingereihten Chunks können noch daraus gelesen werden, aber es können keine weiteren eingereiht werden, und der Stream wird geschlossen, wenn das Lesen beendet ist.

### Lesen von benutzerdefinierten Streams

In unserem einfachen Strompumpen-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response)-Konstruktoraufruf übergeben, nach dem wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, was bedeutet, dass Sie einen Leser daran anheften können. Haben Sie sich zum Beispiel unser [Einfaches Zufallsdatenstrom-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) angesehen ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), das einen benutzerdefinierten Stream erstellt, einige Zufallsstrings darin einreiht und die Daten dann wieder aus dem Stream liest, sobald die _Stoppzeichen-Generierung_ Taste gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Streaminhalte vom Typ {{jsxref("Uint8Array")}} sein; z.B. kodiert mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der Konstruktor des benutzerdefinierten Streams verfügt über eine `start()`-Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf nutzt, um jede Sekunde einen Zufallsstring zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um ihn in die Warteschlange des Streams einzureihen. Wenn die Taste gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Chunks einzureihen.

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

In der `readStream()`-Funktion selbst verbinden wir einen Leser mit dem Stream durch das Verwenden von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir zuvor gesehen haben — lesen jedes Chunk mit `read()`, überprüfen, ob `done` `true` ist und beenden dann den Prozess, falls dies der Fall ist, und lesen den nächsten Chunk und verarbeiten ihn, falls nicht, bevor die `read()`-Methode erneut ausgeführt wird.

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

Wir haben bereits Beispiele dafür gezeigt, wie [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) verwendet wird, um einen Leser zu schließen. Wie bereits erwähnt, können alle zuvor eingereihten Chunks noch gelesen werden, aber es können keine weiteren eingereiht werden, weil er geschlossen ist.

Wenn Sie den Stream komplett loswerden und alle eingereihten Chunks verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Einen Stream teilen

Manchmal möchten Sie einen Stream gleichzeitig zweimal lesen. Dies wird über die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie gibt ein Array zurück, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig von zwei separaten Lesern gelesen werden können.

Dies könnten Sie beispielsweise in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und gleichzeitig zum Browser als auch zum Service Worker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [Einfaches Teilbeispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser einfacher Zufallsdatenstrom, außer dass, wenn die Taste gedrückt wird, um zufällige Strings zu stoppen, der benutzerdefinierte Stream aufgenommen und geteilt wird und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohrketten

Ein weiteres Merkmal von Streams ist die Möglichkeit, Streams ineinander zu leiten (genannt eine [Rohrkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies beinhaltet zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), welche einen lesbaren Stream durch ein Schreib-/Lesepaar leitet, um ein Datenformat in ein anderes umzuwandeln, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), welche einen lesbaren Stream an ein Schreibgerät leitet, das als Endpunkt für die Rohrkette dient.

Wir haben ein Beispiel namens [Chunks eines PNGs entpacken](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream holt und dann durch einen benutzerdefinierten PNG-Transformationsstream leitet, der PNG-Chunks aus einem binären Datenstrom abruft.

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

Das erklärt die Grundlagen der "Standard" lesbaren Streams.

Siehe [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente, kopiefreie Übertragungen an einen Verbraucher durchführen können und dabei die internen Warteschlangen des Streams umgehen.
