---
title: Verwenden von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist das programmatische Lesen und Manipulieren von Datenströmen, die über das Netzwerk stückweise ankommen, sehr nützlich! Aber wie verwenden Sie die Funktionalität der lesbaren Streams der Streams API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und sich der grundlegenden Konzepte bewusst sind. Wenn nicht, empfehlen wir Ihnen, zuerst die [Übersicht zu Streams-Konzepten und -Verwendung](/de/docs/Web/API/Streams_API#concepts_and_usage) und den dedizierten Artikel zu [Streams API Konzepten](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu schreibbaren Streams suchen, versuchen Sie es stattdessen mit [Verwenden von schreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Beispiele finden

Wir werden in diesem Artikel verschiedene Beispiele ansehen, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Sie können dort den vollständigen Quellcode sowie Links zu den Beispielen finden.

## Eine Fetch-Anfrage als Stream konsumieren

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und was wirklich schön ist, ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die [`Request.body`](/de/docs/Web/API/Request/body)- und [`Response.body`](/de/docs/Web/API/Response/body)-Eigenschaften stehen zur Verfügung, die Getter sind, welche die Body-Inhalte als lesbaren Stream bereitstellen.

Wie unser [Einfacher Stream-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump)-Beispiel zeigt ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es nur eine Frage des Zugriffs auf die `body`-Eigenschaft der Antwort:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies bietet uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt.

### Einen Leser anhängen

Jetzt haben wir unseren Streaming-Body; um den Stream zu lesen, muss ein Leser daran angehängt werden. Dies geschieht mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Das Aufrufen dieser Methode erstellt einen Leser und sperrt ihn für den Stream — kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z.B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und somit das Versprechen nicht benötigt:

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

Sobald Sie Ihren Leser angehängt haben, können Sie Datenblöcke aus dem Stream mithilfe der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Dies liest einen Block aus dem Stream, mit dem Sie dann tun können, was Sie möchten. Zum Beispiel reiht unser Beispiel "Einfacher Stream-Pump" jeden Block in einen neuen, benutzerdefinierten `ReadableStream` ein (wir werden im nächsten Abschnitt mehr darüber erfahren), erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert sie als [`Blob`](/de/docs/Web/API/Blob), erstellt eine Objekt-URL aus diesem Blob mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigt sie dann in einem {{htmlelement("img")}}-Element auf dem Bildschirm an, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Lassen Sie uns im Detail anschauen, wie `read()` verwendet wird. In der oben gezeigten `pump()`-Funktion rufen wir zuerst `read()` auf, das ein Versprechen mit einem Ergebnisobjekt zurückgibt — dies enthält die Ergebnisse unseres Lesens in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können einer von drei verschiedenen Typen sein:

- Wenn ein Block zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als Nächstes überprüfen wir, ob `done` `true` ist. Falls ja, gibt es keine weiteren Blöcke zu lesen (der Wert ist `undefined`), also kehren wir aus der Funktion zurück und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, über den wir hier sprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir den neuen Block, den wir gelesen haben (enthalten in der `value`-Eigenschaft des Ergebnisobjekts), und rufen dann die `pump()`-Funktion erneut auf, um den nächsten Block zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Readers sehen werden:

1. Sie schreiben eine Funktion, die mit dem Lesen des Streams beginnt.
2. Wenn es keinen weiteren Stream zu lesen gibt, kehren Sie aus der Funktion zurück.
3. Wenn es noch Stream zu lesen gibt, verarbeiten Sie den aktuellen Block und führen die Funktion erneut aus.
4. Sie verketten die `pipe`-Funktion, bis es keinen weiteren Stream mehr zu lesen gibt, in diesem Fall folgt Schritt 2.

Ohne den gesamten Code zu entfernen, um tatsächlich zu "pumpen", könnte der Code auf etwas wie dies verallgemeinert werden:

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
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Versprechen-Handlers steht, ist es tatsächlich analog zu einer Kette von Versprechen-Handlers.

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

## Ein fetch() mit asynchroner Iteration konsumieren

Es gibt eine noch einfachere Möglichkeit, ein `fetch()` zu konsumieren, nämlich die Rückgabe `response.body` mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Syntax zu iterieren.
Dies funktioniert, weil das `response.body` einen `ReadableStream` zurückgibt, der ein [asynchrones iterierbares Objekt](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode aus dem vorherigen Abschnitt wie folgt umgeschrieben werden:

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

Alternativ können Sie die Schleife mit `break` verlassen, wie im unten gezeigten Code.
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zu verarbeiten hat, sodass es möglicherweise eine Verzögerung zwischen dem Abbruch des Signals und dem Aufruf von `break` geben kann.

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

<!-- Der meiste folgende Code wird absichtlich ausgeblendet, da er für das Beispiel nicht relevant ist -->

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

<!-- Der folgende HTML- und JS-Code richtet das Berichten ein. Versteckt, da es für Leser nicht nützlich ist -->

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
Bei jeder Iteration der Schleife protokolliert der Code einfach und zählt die empfangenen Bytes.
Wenn ein Fehler auftritt, protokolliert er das Problem.
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

Das Beispielprotokoll unten zeigt, dass der Code läuft oder dass Ihr Browser keine asynchrone Iteration von `ReadableStream` unterstützt.
Die rechte Seite zeigt die empfangenen Blöcke; Sie können die Abbruch-Taste drücken, um den Fetch zu stoppen.

> [!NOTE]
> Diese Fetch-Operation ist _simuliert_ zum Zweck der Demonstration und gibt einfach einen `ReadableStream` zurück, der zufällige Textblöcke generiert.
> Die "quellenbezogene Quelle" auf der linken Seite unten sind die Daten, die in der simulierten Quelle generiert werden, während die Spalte auf der rechten Seite das Protokoll des Verbrauchers ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen Ihres eigenen benutzerdefinierten lesbaren Streams

Das Beispiel "Einfacher Stream-Pump", das wir während dieses Artikels studiert haben, umfasst einen zweiten Teil — sobald wir das Bild aus dem Fetch-Body stückweise gelesen haben, reihen wir es in einen anderen, benutzerdefinierten Stream ein, den wir selbst erstellt haben. Wie erstellen wir das? Mit dem `ReadableStream()`-Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser ihn wie im Fall von Fetch für Sie bereitstellt, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und mit Ihren eigenen Blöcken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor ermöglicht es Ihnen, dies über eine Syntax zu tun, die zunächst kompliziert aussieht, aber tatsächlich nicht allzu schlimm ist.

Das generische Syntaxskelett sieht folgendermaßen aus:

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

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream zu spezifizieren. Sie müssen dies selten tun, daher konzentrieren wir uns zunächst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` konstruiert wurde. Sie sollten in dieser Methode Code einfügen, der die Stream-Funktionalität einrichtet, z.B. die Datengenerierung startet oder anderweitig auf die Quelle zugreift.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während mehr Blöcke in die Warteschlange eingestellt werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream storniert werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die Streamquelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn sie enthalten sind — um zu kennzeichnen, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Verwenden von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie sich in Zweck und Anwendungsfall etwas von normalen (Standard-)Streams unterscheiden.

Wenn wir uns unsere einfachen Beispielcodes noch einmal ansehen, können Sie sehen, dass unser `ReadableStream()`-Konstruktor nur eine einzelne Methode enthält — `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden bemerken, dass die `start()`- und `pull()`-Methoden, die in den `ReadableStream()`-Konstruktor übergeben werden, `controller`-Parameter erhalten — dies sind Instanzen der Klasse [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController), die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die `enqueue()`-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzustellen, nachdem er aus dem Fetch-Body gelesen wurde.

Zudem verwenden wir, wenn wir mit dem Lesen des Fetch-Bodys fertig sind, die `close()`-Methode des Controllers, um den benutzerdefinierten Stream zu schließen — alle zuvor eingestellten Blöcke können noch daraus gelesen werden, aber es können keine weiteren eingereiht werden, und der Stream wird geschlossen, wenn das Lesen beendet ist.

### Aus benutzerdefinierten Streams lesen

In unserem Beispiel "Einfacher Stream-Pump" konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen Aufruf des [`Response`](/de/docs/Web/API/Response/Response)-Konstruktors einfügen, danach konsumieren wir ihn als `blob()`.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, was bedeutet, dass Sie einen Leser daran anhängen können. Als Beispiel werfen Sie einen Blick auf unser [Einfaches Zufall-Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen hinein einspeist und die Daten dann wieder aus dem Stream liest, sobald die Schaltfläche _Stopp Zeichenfolgens wäre_ gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; zum Beispiel, indem sie mit [`TextEncoder`](/de/docs/Web/API/TextEncoder) kodiert werden.

Der Konstruktor des benutzerdefinierten Streams enthält eine `start()`-Methode, die [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet, um jede Sekunde eine zufällige Zeichenfolge zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um ihn in den Stream einzustellen. Wenn die Taste gedrückt wird, wird das Intervall abgebrochen, und eine Funktion namens `readStream()` wird aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Blöcke darin einzustellen.

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

In der eigentlichen `readStream()`-Funktion sperren wir einen Leser an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), und folgen dann dem gleichen Muster, das wir vorher gesehen haben — wir lesen jeden Block mit `read()`, überprüfen, ob `done` `true` ist und beenden den Prozess, wenn ja, und lesen den nächsten Block und verarbeiten ihn, wenn nicht, bevor wir die `read()`-Methode erneut ausführen.

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

### Schließen oder Abbrechen von Streams

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) gezeigt, um einen Leser zu schließen. Wie wir bereits sagten, werden alle zuvor eingereihten Blöcke immer noch gelesen, aber keine weiteren können mehr eingereiht werden, weil er geschlossen ist.

Wenn Sie den Stream vollständig beseitigen und alle eingereihten Blöcke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Einen Stream teilen

Manchmal möchten Sie einen Stream zwei Mal gleichzeitig lesen. Dies wird über die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie gibt ein Array mit zwei identischen Kopien des ursprünglichen lesbaren Streams aus, die dann unabhängig voneinander von zwei verschiedenen Lesern gelesen werden können.

Sie könnten dies zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie an den Browser streamen möchten, aber auch an den Service Worker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir stellen ein Beispiel dafür in unserem [Einfaches teilen-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-tee-example/)) zur Verfügung. Dieses Beispiel funktioniert ähnlich wie unser Einfacher Zufallsstrom, außer dass, wenn die Taste gedrückt wird, um zufällige Zeichenfolgen zu generieren, der benutzerdefinierte Stream genommen und geteilt wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe-Ketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams ineinander zu "pipen" (genannt eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Schreib-/Lesepaar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream zu einem Schreiber leitet, der als Endpunkt für die Pipe-Kette dient.

Wir haben ein Beispiel namens [Unpacking Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/png-transform-stream/)) das ein Bild als Stream abruft und es dann durch einen benutzerdefinierten PNG-Transformationsstream leitet, der PNG-Blöcke aus einem binären Datenstrom extrahiert.

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

Damit sind die Grundlagen der "Standard"-lesbaren Streams erklärt.

Siehe [Verwenden von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Bytequelle, die effiziente Zero-Copy-Übertragungen zu einem Verbraucher durchführen können, wodurch die internen Warteschlangen des Streams umgangen werden.
