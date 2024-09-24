---
title: Verwendung von readable streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist das programmatische Lesen und Manipulieren von Datenströmen, die über das Netzwerk stückweise empfangen werden, sehr nützlich! Aber wie verwendet man die Funktionalität der Lesbaren Streams der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den übergeordneten Konzepten vertraut sind. Wenn nicht, empfehlen wir Ihnen, zuerst den [Streams-Konzepte und Anwendungsübersicht](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen Artikel [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukommen.

> [!NOTE]
> Wenn Sie Informationen zu beschreibbaren Streams suchen, versuchen Sie es stattdessen mit [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Finden einiger Beispiele

Wir werden uns in diesem Artikel verschiedene Beispiele ansehen, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Dort finden Sie den vollständigen Quellcode sowie Links zu den Beispielen.

## Konsumieren eines Fetch als Stream

Die [Fetch API](/de/docs/Web/API/Fetch_API) erlaubt es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und was wirklich schön daran ist, ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) stehen zur Verfügung und ermöglichen das Abrufen des Inhalts als lesbaren Stream.

Wie unser [Einfaches Stream-Pumpen](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), besteht das Exponieren darin, einfach die `body`-Eigenschaft der Antwort zuzugreifen:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt.

### Einleser anfügen

Jetzt, wo wir unseren streamenden Body haben, erfordert das Lesen des Streams das Anfügen eines Readers. Dies wird mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) gemacht:

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

Das Aufrufen dieser Methode erstellt einen Reader und sperrt ihn für den Stream — kein anderer Reader darf diesen Stream lesen, bis dieser Reader freigegeben wird, z. B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und daher kein Promise benötigt:

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

Jetzt, da Sie Ihren Reader angehängt haben, können Sie Datenstücke aus dem Stream mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Dies liest ein Stück aus dem Stream, welches Sie dann beliebig verwenden können. Zum Beispiel wird in unserem Beispiel für das einfache Stream-Pumpen jedes Stück in einen neuen, benutzerdefinierten `ReadableStream` eingeplant (wir werden darüber im nächsten Abschnitt mehr erfahren), dann wird eine neue [`Response`](/de/docs/Web/API/Response) daraus erstellt. Sie wird als [`Blob`](/de/docs/Web/API/Blob) konsumiert, ein Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt, und dann auf dem Bildschirm in einem {{htmlelement("img")}} Element angezeigt, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Lassen Sie uns detailliert anschauen, wie `read()` verwendet wird. In der oben gezeigten `pump()` Funktion rufen wir zuerst `read()` auf, welches ein Promise mit einem Ergebnissobjekt zurückgibt — dieses hat die Ergebnisse unseres Lesens in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können eine von drei verschiedenen Typen sein:

- Wenn ein Stück zum Lesen verfügbar ist, wird das Promise mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Promise mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Promise mit dem entsprechenden Fehler abgelehnt.

Als Nächstes prüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Stücke zu lesen (der Wert ist `undefined`), also geben wir aus der Funktion zurück und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> **Beachten:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir das neue Stück, das wir gelesen haben (im `value`-Eigenschaft des Ergebnissobjekts enthalten), und rufen dann die `pump()` Funktion erneut auf, um das nächste Stück zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Readern sehen werden:

1. Sie schreiben eine Funktion, die mit dem Lesen des Streams beginnt.
2. Wenn es keinen Strom mehr zu lesen gibt, verlassen Sie die Funktion.
3. Wenn es mehr Stream zu lesen gibt, verarbeiten Sie das aktuelle Stück und führen die Funktion erneut aus.
4. Sie verketteten die `pipe` Funktion, bis es keinen Stream mehr zu lesen gibt, in welchem Fall Schritt 2 erfolgt.

Wenn alle Codes entfernt sind, um tatsächlich ein "Pumpen" durchzuführen, könnte der Code verallgemeinert folgendermaßen aussehen:

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

## Konsumieren von fetch() mit asynchroner Iteration

Es gibt einen noch einfacheren Weg, ein `fetch()` zu konsumieren, nämlich die `response.body` mittels der Syntax [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) zu iterieren.
Dies funktioniert, weil die `response.body` einen `ReadableStream` zurückgibt, der ein [asynchroner iterierbarer](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorhergehenden Abschnitt wie folgt umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie das Iterieren des Streams beenden möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und seinem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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

Alternativ können Sie die Schleife mit `break` beenden, wie im folgenden Code gezeigt. Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zum Verarbeiten hat, es kann also einige Verzögerung zwischen dem Abbruch des Signals und der Ausführung von `break` geben.

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

<!-- ein Großteil des folgenden Codes ist absichtlich verborgen, da er für das Beispiel nicht relevant ist -->

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

<!-- Der folgende HTML- und JS-Code richtet das Reporting ein. Ausgeblendet, weil es für die Leser nicht nützlich ist -->

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

Der folgende Code zeigt ein umfassenderes Beispiel.
Hier wird der Fetch-Stream im Iterator innerhalb eines try/catch-Blocks konsumiert.
Bei jeder Iteration der Schleife loggt der Code einfach und zählt die empfangenen Bytes.
Wenn ein Fehler auftritt, wird das Problem protokolliert.
Die `fetch()`-Operation kann mit einem `AbortSignal` abgebrochen werden, was ebenfalls als Fehler protokolliert wird.

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

Das folgende Beispielprotokoll zeigt den Code, der entweder läuft oder meldet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Stücke; Sie können die Abbruch-Taste drücken, um den Fetch zu stoppen.

> [!NOTE]
> Dieser Fetch-Vorgang ist für Demonstrationszwecke _simuliert_ und gibt nur einen `ReadableStream` zurück, der zufällige Textstücke generiert.
> Die "Underlying source" links unten ist die in der simulierten Quelle generierte Datenquelle, während die Spalte rechts das Protokoll vom Verbraucher ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines eigenen benutzerdefinierten readable streams

Das einfache Stream-Pumpen-Beispiel, das wir in diesem Artikel studiert haben, enthält einen zweiten Teil – sobald wir das Bild aus dem Fetch-Body in Stücke gelesen haben, schieben wir sie in einen anderen benutzerdefinierten Stream unserer eigenen Kreation. Wie erstellen wir diesen? Den `ReadableStream()` Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser ihn Ihnen bereitstellt, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Stücken bestücken. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor erlaubt es Ihnen, dies über eine Syntax zu tun, die zunächst kompliziert erscheint, aber tatsächlich nicht so schlimm ist.

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

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrundeliegenden Quelle, von der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Queueing-Strategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream zu spezifizieren. Sie werden dies selten tun müssen, daher konzentrieren wir uns jetzt nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` konstruiert wurde. Innerhalb dieser Methode sollten Sie Code einschließen, der die Stream-Funktionalität einrichtet, zum Beispiel die Datenerzeugung beginnt oder auf andere Weise Zugang zur Quelle erhält.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Queue des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, wenn mehr Stücke eingeplant werden.
3. `cancel()` — Eine Methode, die, wenn sie enthalten ist, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z. B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugang zur Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet - wenn enthalten -, um zu signalisieren, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie in Zweck und Anwendungsfall etwas anders sind als reguläre (Standard-)Streams.

Wenn wir unseren einfachen Beispielcode erneut betrachten, sehen Sie, dass der `ReadableStream()` Konstruktor nur eine einzige Methode enthält – `start()`, die dient dazu, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden bemerken, dass die `start()` und `pull()` Methoden, die in den `ReadableStream()` Konstruktor übergeben werden, `controller`-Parameter erhalten - dies sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Klasse, die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die `enqueue()`-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Zusätzlich verwenden wir, wenn wir mit dem Lesen des Fetch-Bodys fertig sind, die `close()`-Methode des Controllers, um den benutzerdefinierten Stream zu schließen – alle zuvor eingeplanten Teile können noch aus ihm herausgelesen werden, aber es können keine weiteren eingereiht werden, und der Stream ist geschlossen, wenn das Lesen abgeschlossen ist.

### Lesen aus benutzerdefinierten Streams

In unserem einfachen Stream-Pumpen-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response) Konstruktoraufruf übergeben, wonach wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, was bedeutet, dass Sie einen Leser daran anhängen können. Schauen Sie sich als Beispiel unser [Einfaches zufälliges Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) an, welches einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und dann die Daten aus dem Stream liest, sobald die Schaltfläche _Stop string generation_ gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; z. B. kodiert mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf verwendet, um jede Sekunde einen zufälligen String zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um es in den Stream einzureihen. Wenn die Schaltfläche gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` wird aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Stücke darin einzuplanen.

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

In der `readStream()`-Funktion selbst sperren wir einen Reader an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir zuvor gesehen haben – jedes Stück mit `read()` lesen, prüfen, ob `done` `true` ist und dann den Prozess beenden, wenn ja, und das nächste Stück lesen und verarbeiten, wenn nicht, bevor wir die `read()`-Methode erneut ausführen.

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

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) gezeigt, um einen Reader zu schließen. Wie wir bereits gesagt haben, werden alle zuvor eingereihten Teile noch gelesen, aber es können keine weiteren eingereiht werden, weil er geschlossen ist.

Wenn Sie den Stream vollständig entfernen und alle eingeplanten Teile verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Tee-ing eines Streams

Manchmal möchten Sie einen Stream zweimal gleichzeitig lesen. Dies wird über die [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) Methode erreicht — sie gibt ein Array mit zwei identischen Kopien des ursprünglichen lesbaren Streams aus, die dann unabhängig voneinander von zwei separaten Lesern gelesen werden können.

Sie könnten dies zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie an den Browser streamen möchten, sie aber auch in den Cache des Service Workers streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht gleichzeitig von mehr als einem Reader gelesen werden kann, benötigen Sie zwei Kopien dafür.

Wir bieten ein Beispiel dafür in unserem [Einfaches Tee Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser einfaches zufälliges Stream, außer dass wenn die Schaltfläche gedrückt wird, um zufällige Strings zu stoppen, der benutzerdefinierte Stream genommen und geteert wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohrketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams nacheinander zu verrohren (sogenannte [Rohrketten](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Schreiber/Lese-Paar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream zu einem Schreiber leitet, der als Endpunkt für die Rohrkette dient.

Wir haben ein einfaches Beispiel namens [Entpacken von PNG-Stücken](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann durch einen benutzerdefinierten PNG-Transformationsstream führt, der PNG-Stücke aus einem binären Datenstrom herausholt.

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

Sehen Sie [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Übertragungen zu einem Verbraucher ausführen können und dabei die internen Queues des Streams umgehen.
