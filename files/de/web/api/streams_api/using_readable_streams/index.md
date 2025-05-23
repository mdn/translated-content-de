---
title: Verwenden von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist es sehr nützlich, Datenströme, die über das Netzwerk empfangen werden, programmatisch zu lesen und zu manipulieren, Stück für Stück! Aber wie verwenden Sie die lesbare Stream-Funktionalität der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel geht davon aus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und sich der Konzepte auf hoher Ebene bewusst sind. Falls nicht, empfehlen wir, zuerst die [Übersicht über Konzepte und Nutzung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen Artikel [Streams-API-Konzepte](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie nach Informationen zu beschreibbaren Streams suchen, probieren Sie stattdessen [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Einige Beispiele finden

Wir werden in diesem Artikel verschiedene Beispiele betrachten, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Dort finden Sie den vollständigen Quellcode sowie Links zu den Beispielen.

## Verwenden eines Fetchs als Stream

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht das Abrufen von Ressourcen über das Netzwerk und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat einige Vorteile, und was wirklich erfreulich ist, ist, dass Browser kürzlich die Fähigkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) sind verfügbar und gewähren Zugriff auf die Inhalte des Körpers als lesbaren Stream.

Wie unser [Einfacher Stream-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es einfach, Zugriff auf die `body`-Eigenschaft der Antwort zu erhalten:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt.

### Reader anhängen

Jetzt, da wir unseren Streaming-Körper haben, erfordert das Lesen des Streams das Anhängen eines Readers daran. Dies erfolgt mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Durch Aufrufen dieser Methode wird ein Reader erstellt und an den Stream gebunden — kein anderer Reader darf diesen Stream lesen, bis dieser Reader freigegeben wird, z.B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt verkürzt werden kann, da `response.body` synchron ist und daher kein Versprechen benötigt:

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

Jetzt, da Ihr Reader angehängt ist, können Sie Datenblöcke aus dem Stream mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Diese liest einen Block aus dem Stream, den Sie dann nach Belieben verarbeiten können. Zum Beispiel reiht unser Einfacher Stream-Pump-Beispiel jeden Block in einen neuen, benutzerdefinierten `ReadableStream` ein (wir werden im nächsten Abschnitt mehr darüber erfahren), erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert sie als [`Blob`](/de/docs/Web/API/Blob), erstellt ein Objekt-URL aus diesem Blob mithilfe von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), und zeigt es dann auf dem Bildschirm in einem {{htmlelement("img")}} Element an, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Schauen wir uns im Detail an, wie `read()` verwendet wird. In der oben gesehenen Funktion `pump()` rufen wir zuerst `read()` auf, welches ein Versprechen mit einem Ergebnisobjekt zurückgibt — dies enthält die Ergebnisse unserer Lektüre in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können von drei verschiedenen Typen sein:

- Falls ein Block zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Falls der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Falls der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als nächstes überprüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Blöcke zu lesen (der Wert ist `undefined`), also kehren wir aus der Funktion zurück und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, über den wir hier sprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir den neuen Block, den wir gelesen haben (der sich im `value`-Eigenschaft des Ergebnisobjekts befindet), und rufen dann erneut die `pump()`-Funktion auf, um den nächsten Block zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie sehen werden, wenn Sie Stream-Reader verwenden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Wenn es keinen weiteren Stream mehr zu lesen gibt, kehren Sie aus der Funktion zurück.
3. Wenn es mehr Stream zu lesen gibt, verarbeiten Sie den aktuellen Block und führen die Funktion erneut aus.
4. Sie verketten die `pump()`-Funktion so lange, bis es keinen weiteren Stream mehr zu lesen gibt, in diesem Fall wird Schritt 2 befolgt.

Wenn Sie den gesamten Code zum eigentlichen „Pumpen“ entfernen, könnte der Code auf etwas wie das Folgende verallgemeinert werden:

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
> Die Funktion sieht aus, als ob `pump()` sich selbst aufruft und potenziell zu einer tiefen Rekursion führt.
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Promise-Handlers steht, ist es tatsächlich analog zu einer Kette von Promise-Handlern.

Das Lesen des Streams ist noch einfacher, wenn es mit async/await statt mit Promises geschrieben wird:

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

## Konsumieren eines fetch() mit asynchroner Iteration

Es gibt eine noch einfachere Möglichkeit, einen `fetch()` zu konsumieren, nämlich die Rückgabe von `response.body` mit der Syntax [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) zu iterieren.
Dies funktioniert, weil `response.body` einen `ReadableStream` zurückgibt, der ein [asynchroner Iterable](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorherigen Abschnitt wie gezeigt umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie das Iterieren des Streams stoppen möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und seinem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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

Alternativ können Sie die Schleife mit `break` verlassen, wie im Code unten gezeigt.
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zu verarbeiten hat, sodass es zu gewissen Verzögerungen zwischen dem Abbruch des Signals und dem Aufrufen von `break` kommen kann.

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

### Beispiel für einen asynchronen Reader

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

<!-- Der folgende HTML- und JS-Code richtet die Berichterstattung ein. Versteckt, weil er für Leser nicht nützlich ist -->

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
window.fetch = async (...args) => ({ body: stream });
```

Der folgende Code zeigt ein umfassenderes Beispiel.
Hier wird der Fetch-Stream mithilfe des Iterators innerhalb eines try/catch-Blocks konsumiert.
Bei jeder Iteration der Schleife protokolliert der Code einfach die empfangenen Bytes und zählt sie.
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

Das unten stehende Beispielprotokoll zeigt den laufenden Code oder berichtet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Blöcke; Sie können den Abbrechen-Button drücken, um das Fetch zu stoppen.

> [!NOTE]
> Diese Fetch-Operation ist _simuliert_ zu Demonstrationszwecken und gibt einfach einen `ReadableStream` zurück, der zufällige Textblöcke generiert.
> Die "Underlying source" (Unterliegende Quelle) links unten ist die Datenquelle, die im simulierten Quellcode generiert wird, während die rechte Spalte das Protokoll vom Verbraucher enthält.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Beispiel für einen asynchronen Reader","100%","400px")}}

## Erstellen Ihres eigenen benutzerdefinierten lesbaren Streams

Das einfache Stream-Pump-Beispiel, das wir in diesem Artikel durchgearbeitet haben, umfasst einen zweiten Teil — nachdem wir das Bild aus dem Fetch-Body in Blöcken gelesen haben, reihen wir es dann in einen anderen, benutzerdefinierten Stream unserer eigenen Erstellung ein. Wie erstellen wir das? Der `ReadableStream()`-Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser ihn Ihnen bereitstellt, wie im Fall von Fetch. Manchmal müssen Sie jedoch einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Blöcken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor ermöglicht Ihnen dies mit einer Syntax, die auf den ersten Blick komplex erscheint, aber eigentlich nicht allzu schlecht ist.

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

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Wartestrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben. Sie werden dies selten tun müssen, daher konzentrieren wir uns vorerst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, direkt nachdem der `ReadableStream` konstruiert wurde. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z.B. das Starten der Datengenerierung oder das sonstige Erlangen des Zugriffs auf die Quelle.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während weitere Blöcke eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles tun, was nötig ist, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn enthalten — um anzuzeigen, dass der Stream ein Byte-Stream sein soll.
   Bytestreams werden separat in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie sich etwas in Zweck und Anwendungsfall von regulären (Standard-)Streams unterscheiden.

In unserem einfachen Beispielcode können Sie sehen, dass unser `ReadableStream()`-Konstruktor nur eine einzige Methode enthält — `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden bemerken, dass die `start()`- und `pull()`-Methoden, die in den `ReadableStream()`-Konstruktor übergeben werden, `controller`-Parameter erhalten — dies sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Klasse, die zur Steuerung Ihres Streams verwendet werden können.

In unserem Beispiel verwenden wir die [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzufügen, nachdem er aus dem Fetch-Körper gelesen wurde.

Außerdem verwenden wir, wenn wir mit dem Lesen des Fetch-Körpers fertig sind, die [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) Methode des Controllers, um den benutzerdefinierten Stream zu schließen — zuvor eingereihte Blöcke können weiterhin daraus gelesen werden, es können jedoch keine weiteren eingereiht werden, und der Stream wird geschlossen, wenn das Lesen abgeschlossen ist.

### Lesen aus benutzerdefinierten Streams

In unserem einfachen Stream-Pump-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response) Konstruktoraufruf übergeben, nach welchem wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Ein benutzerdefinierter Stream ist jedoch immer noch eine `ReadableStream` Instanz, was bedeutet, dass Sie einen Reader daran anschließen können. Beispielsweise sehen Sie sich unser [einfaches zufälliges Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) an, das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und dann die Daten wieder aus dem Stream liest, sobald die Taste _Stop string generation_ gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; beispielsweise mit [`TextEncoder`](/de/docs/Web/API/TextEncoder) kodiert.

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf verwendet, um jede Sekunde eine zufällige Zeichenfolge zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um sie in den Stream einzuquartieren. Wenn die Taste gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Blöcke darin einzuquartieren.

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

In der `readStream()` Funktion selbst binden wir einen Reader an den Stream, indem wir [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) verwenden, und folgen dann dem gleichen Muster, das wir zuvor gesehen haben — jeden Block mit `read()` lesen, prüfen, ob `done` `true` ist und den Prozess dann beenden, und den nächsten Block lesen und ihn verarbeiten, falls nicht, bevor die `read()` Methode erneut ausgeführt wird.

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

Wir haben bereits Beispiele zur Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Readers gezeigt. Wie bereits erwähnt, werden alle zuvor eingereihten Blöcke noch gelesen, aber es können keine weiteren eingereiht werden, da er geschlossen ist.

Wenn Sie den Stream vollständig loswerden und alle eingereihten Blöcke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Einen Stream aufteilen

Manchmal möchten Sie möglicherweise einen Stream gleichzeitig zweimal lesen. Dies wird mithilfe der [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) Methode erreicht — sie gibt ein Array zurück, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig von zwei separaten Readern gelesen werden können.

Sie könnten dies beispielsweise in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie an den Browser streamen, aber auch in den Cache des Service Workers streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht mehr als einmal gleichzeitig von einem Reader gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [Einfaches Tee-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser Einfaches Zufallsstream, außer dass, wenn die Taste gedrückt wird, um die Zufallszeichengenerierung zu stoppen, der benutzerdefinierte Stream genommen und geteilt wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe Chains

Eine weitere Funktion von Streams ist die Möglichkeit, Streams ineinander zu verketten (genannt [Pipe-Chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Writer/Reader-Paar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), das einen lesbaren Stream an einen Writer leitet, der als Endpunkt für die Pipe-Chain fungiert.

Wir haben ein Beispiel namens [Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann durch einen benutzerdefinierten PNG-Transformationsstream leitet, der PNG-Blöcke aus einem Binärdatenstream extrahiert.

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

Das erklärt die Grundlagen von "Standard"-lesbaren Streams.

Siehe [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Bytequelle, die effiziente, kopierfreie Übertragungen zu einem Verbraucher durchführen können und dabei die internen Warteschlangen des Streams umgehen.
