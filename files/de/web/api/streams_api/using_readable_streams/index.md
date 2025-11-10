---
title: Verwendung von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist es sehr nützlich, Streams von Daten, die über das Netzwerk empfangen werden, programmatisch zu lesen und zu manipulieren, Stück für Stück! Aber wie verwendet man die Funktionsfähigkeit lesbarer Streams der Streams API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind. Falls nicht, empfehlen wir zunächst die Lektüre der [Übersicht über Streams-Konzepte und -Nutzung](/de/docs/Web/API/Streams_API#concepts_and_usage) und des speziellen Artikels [Streams API Konzepte](/de/docs/Web/API/Streams_API/Concepts), bevor Sie zurückkehren.

> [!NOTE]
> Wenn Sie Informationen zu beschreibbaren Streams suchen, versuchen Sie stattdessen [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Finden Sie einige Beispiele

In diesem Artikel werden wir uns verschiedene Beispiele ansehen, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Sie können dort den vollständigen Quellcode sowie Links zu den Beispielen finden.

## Einen Fetch als Stream konsumieren

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und was wirklich schön daran ist, ist, dass Browser in letzter Zeit die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) Eigenschaften sind verfügbar, die Getter sind, die den Körperinhalt als lesbaren Stream bereitstellen.

Wie unser [Einfacher Steam-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es nur eine Frage des Zugriffs auf die `body` Eigenschaft der Antwort:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt.

### Anbringen eines Lesers

Jetzt, wo wir unseren Streaming-Körper haben, erfordert das Lesen des Streams das Anbringen eines Lesers daran. Dies erfolgt mithilfe der [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) Methode:

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

Durch Aufrufen dieser Methode wird ein Leser erstellt und an den Stream gebunden – kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z. B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Ebenfalls zu beachten ist, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und daher das Versprechen nicht benötigt:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // …
  });
```

### Lesen des Streams

Jetzt, da Sie Ihren Leser angebracht haben, können Sie Datenstücke aus dem Stream lesen, indem Sie die [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) Methode verwenden. Damit wird ein Stück aus dem Stream gelesen, mit dem Sie dann alles Mögliche tun können. Unser Beispiel für einfache Stream-Pumpe fügt jede Stück in einen neuen, benutzerdefinierten `ReadableStream` ein (mehr dazu im nächsten Abschnitt), erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert es als [`Blob`](/de/docs/Web/API/Blob), erstellt eine Objekt-URL aus diesem Blob mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigt sie dann in einem {{htmlelement("img")}} Element auf dem Bildschirm an, was effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt.

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

Schauen wir uns im Detail an, wie `read()` verwendet wird. In der `pump()` Funktion, die oben zu sehen ist, rufen wir zuerst `read()` auf, wodurch ein Promise mit einem Ergebnisobjekt zurückgegeben wird – dieses enhält die Ergebnisse unseres Lesevorgangs in Form von `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können einen der folgenden drei Typen aufweisen:

- Wenn ein Stück zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als Nächstes überprüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Stücke zu lesen (der Wert ist `undefined`), so dass wir die Funktion verlassen und den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) schließen:

```js
if (done) {
  controller.close();
  return;
}
```

> [!NOTE] > `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Mehr über den benutzerdefinierten Stream erklären wir im nächsten Abschnitt.

Wenn `done` nicht `true` ist, verarbeiten wir das neue Stück, das wir gelesen haben (enthalten in der `value` Eigenschaft des Ergebnisobjekts), und rufen dann erneut die `pump()` Funktion auf, um das nächste Stück zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Lesern sehen werden:

1. Sie schreiben eine Funktion, die mit dem Lesen des Streams beginnt.
2. Wenn es keinen weiteren Stream zum Lesen gibt, verlassen Sie die Funktion.
3. Wenn es mehr Stream zu lesen gibt, verarbeiten Sie das aktuelle Stück und führen die Funktion erneut aus.
4. Sie verketteten die `pump()` Funktion, bis es keinen weiteren Stream zum Lesen gibt, in diesem Fall wird Schritt 2 befolgt.

Wenn der gesamte Code entfernt wird, um tatsächlich eine "Pumpe" durchzuführen, könnte der Code verallgemeinert so aussehen:

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
> Da `pump` jedoch asynchron ist und jeder `pump()` Aufruf am Ende des Promise-Handlers steht, ist es tatsächlich analog zu einer Kette von Promise-Handlern.

Das Lesen des Streams ist noch einfacher, wenn es unter Verwendung von async/await statt von Promises geschrieben wird:

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

Es gibt eine noch einfachere Möglichkeit, ein `fetch()` zu konsumieren, nämlich das zurückgegebene `response.body` mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Syntax zu iterieren. Dies funktioniert, weil `response.body` einen `ReadableStream` zurückgibt, der ein [asynchrones iterierbares Objekt](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorherigen Abschnitt folgendermaßen umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie die Iteration des Streams beenden möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und seinem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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

Alternativ können Sie die Schleife mit `break` verlassen, wie im folgenden Code gezeigt. Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zum Verarbeiten hat, sodass es zu einer gewissen Verzögerung zwischen dem Abbrechen des Signals und dem Aufruf von `break` kommen kann.

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

### Beispiel asynchroner Leser

<!-- Ein Großteil des Codes unten ist absichtlich versteckt, da er für das Beispiel nicht relevant ist -->

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

<!-- Der folgende HTML- und JS-Code richtet Reporting ein. Versteckt, da es für die Leser nicht nützlich ist -->

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

Der untenstehende Code zeigt ein vollständigeres Beispiel. Hier wird der Fetch-Stream innerhalb eines try/catch-Blocks mithilfe des Iterators konsumiert. Bei jedem Durchlauf der Schleife protokolliert und zählt der Code einfach die empfangenen Bytes. Wenn ein Fehler auftritt, wird das Problem protokolliert. Die `fetch()`-Operation kann mit einem `AbortSignal` abgebrochen werden, was ebenfalls als Fehler protokolliert würde.

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

Das unten stehende Beispielprotokoll zeigt den laufenden Code oder meldet, dass Ihr Browser keine asynchrone Iteration von `ReadableStream` unterstützt. Die rechte Seite zeigt die empfangenen Stücke; Sie können die Abbrechen-Schaltfläche drücken, um das Fetch zu stoppen.

> [!NOTE]
> Dieser Fetch-Vorgang wird _simuliert_ für Demonstrationszwecke und gibt einfach einen `ReadableStream` zurück, der zufällige Textstücke generiert. Die "Underlying source" (Unterliegende Quelle) auf der linken Seite unten sind die im simulierten Quellcode generierten Daten, während die Spalte auf der rechten Seite das Verbraucherprotokoll ist. (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen Ihres eigenen benutzerdefinierten lesbaren Streams

Das Beispiel der einfachen Stream-Pumpe, das wir in diesem Artikel untersucht haben, umfasst einen zweiten Teil - nachdem wir das Bild aus dem Fetch-Body stückweise gelesen haben, fügen wir es dann in einen weiteren, benutzerdefinierten Stream unserer eigenen Kreation ein. Wie erstellen wir das? Den `ReadableStream()` Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser ihn Ihnen zur Verfügung stellt, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Stücken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor ermöglicht dies über eine Syntax, die auf den ersten Blick komplex erscheint, aber tatsächlich nicht so schlimm ist.

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

Der Konstruktor nimmt zwei Objekte als Parameter entgegen. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und erlaubt es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben. Sie werden dies selten tun müssen, deshalb konzentrieren wir uns zunächst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, sofort nachdem der `ReadableStream` erstellt wurde. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z. B. die Erzeugung von Daten beginnt oder auf andere Weise Zugriff auf die Quelle erhält.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, wenn mehr Stücke in die Warteschlange eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z. B. durch Aufruf von [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)). Der Inhalt sollte alles tun, was notwendig ist, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn enthalten — um anzuzeigen, dass der Stream ein Bytestream sein soll. Bytestreams werden separat in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie in Zweck und Anwendungsfall etwas anders sind als reguläre (Standard-) Streams.

Wenn wir unser einfaches Beispiel noch einmal betrachten, sehen Sie, dass unser `ReadableStream()`-Konstruktor nur eine einzige Methode enthält — `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden bemerken, dass die in den `ReadableStream()`-Konstruktor übergebenen `start()`- und `pull()`-Methoden `controller`-Parameter erhalten — dies sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Klasse, die zur Steuerung Ihres Streams verwendet werden können.

In unserem Beispiel verwenden wir die [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Darüber hinaus verwenden wir beim Beenden des Lesens des Fetch-Bodys die [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) Methode des Controllers, um den benutzerdefinierten Stream zu schließen — zuvor eingereihte Stücke können weiterhin daraus gelesen werden, aber keine weiteren können eingereiht werden, und der Stream wird geschlossen, wenn das Lesen abgeschlossen ist.

### Lesen aus benutzerdefinierten Streams

In unserem einfachen Stream-Pump-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response) Konstruktoraufruf einfügen, danach konsumieren wir ihn als `blob()`.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream` Instanz, was bedeutet, dass Sie einen Leser daran anbringen können. Schauen Sie sich zum Beispiel unser [einfaches Zufallsstream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) an, das einen benutzerdefinierten Stream erstellt, einige zufällige Strings darin einreiht und dann die Daten wieder aus dem Stream liest, sobald die _Stop String Generation_ Schaltfläche gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die in die Warteschlange eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; beispielsweise durch Codierung mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der Konstruktor des benutzerdefinierten Streams enthält eine `start()` Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf verwendet, um jede Sekunde einen zufälligen String zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um ihn in die Warteschlange des Streams einzureihen. Wenn die Schaltfläche gedrückt wird, wird das Intervall abgebrochen, und eine Funktion namens `readStream()` wird aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Stücke einzureihen.

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

In der `readStream()`-Funktion selbst sperren wir einen Leser an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir demselben Muster, das wir zuvor gesehen haben – wir lesen jedes Stück mit `read()`, überprüfen, ob `done` `true` ist und beenden den Prozess, wenn ja, und lesen das nächste Stück und verarbeiten es, wenn nicht, bevor wir die `read()` Methode erneut ausführen.

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

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Lesers gezeigt. Wie wir bereits gesagt haben, können alle zuvor eingereihten Stücke weiterhin gelesen werden, aber keine weiteren können eingereiht werden, da es geschlossen ist.

Wenn Sie den Stream vollständig loswerden und alle eingereihten Stücke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Einem Stream einen Splitt-Stream hinzufügen

Manchmal möchten Sie einen Stream gleichzeitig zweimal lesen. Dies wird mithilfe der [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) Methode erreicht — sie gibt ein Array zurück, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig voneinander von zwei separaten Lesern gelesen werden können.

Sie könnten dies beispielsweise in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie zum Browser streamen möchten, aber sie auch in den Service Worker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht mehr als von einem Leser gleichzeitig gelesen werden kann, benötigen Sie dafür zwei Kopien.

Wir liefern ein Beispiel dafür in unserem [einfachen Splitt-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser einfaches Zufallsstream-Beispiel, außer dass der benutzerdefinierte Stream, wenn die Schaltfläche gedrückt wird, um die Generierung zufälliger Strings zu stoppen, gepaart wird und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohrleitungen

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams ineinander zu pipen (genannt eine [Pipelinienkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Writer/Reader-Paar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream an einen Writer leitet, der als Endpunkt für die Pipelinienkette dient.

Wir haben ein Beispiel namens [Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann an einen benutzerdefinierten PNG-Transform-Stream leitet, der PNG-Chunks aus einem binären Datenstrom extrahiert.

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

Informationen darüber, wie man lesbare _Byte_ Streams verwendet — Streams mit einer zugrunde liegenden Bytquelle, die effiziente null-Kopie-Übertragungen zu einem Verbraucher ausführen können, indem sie die internen Warteschlangen des Streams umgehen — finden Sie unter [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
