---
title: Verwenden von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: a527310da8c12c3fec8749902c67df2fc7e24cb4
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist das programmgesteuerte Lesen und Manipulieren von Datenströmen, die stückweise über das Netzwerk empfangen werden, sehr nützlich! Aber wie verwendet man die lesbaren Stream-Funktionen der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind. Falls nicht, empfehlen wir Ihnen, zunächst die [Übersicht über Konzepte und Anwendung der Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) sowie den speziellen Artikel [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Falls Sie nach Informationen zu beschreibbaren Streams suchen, versuchen Sie es stattdessen mit [Verwenden von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Einige Beispiele finden

In diesem Artikel werden wir uns verschiedene Beispiele aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository ansehen. Sie können dort den vollständigen Quellcode sowie Links zu den Beispielen finden.

## Konsumieren eines `fetch` als Stream

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht das Abrufen von Ressourcen über das Netzwerk und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und besonders angenehm ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine `fetch`-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) sind verfügbar, die als Getter die Inhalte des Körpers als lesbaren Stream bereitstellen.

Wie unser [Einfacher Stream-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist das Offenlegen eine einfache Angelegenheit des Zugriffs auf die `body`-Eigenschaft der Antwort:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt.

### Anbringen eines Lesers

Jetzt, da wir unseren Streaming-Körper haben, erfordert das Lesen des Streams, dass ein Leser daran angebracht wird. Dies erfolgt mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Der Aufruf dieser Methode erstellt einen Leser und verriegelt ihn für den Stream — kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z. B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und daher kein Versprechen benötigt:

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

Jetzt, da Ihr Leser angebracht ist, können Sie Datenblöcke aus dem Stream mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen. Diese liest einen Block aus dem Stream, mit dem Sie dann alles Mögliche tun können. Unser Einfacher Stream-Pump-Beispiel z. B. geht weiter, um jeden Block in einen neuen, benutzerdefinierten `ReadableStream` einzureihen (wir werden mehr darüber im nächsten Abschnitt erfahren), dann eine neue [`Response`](/de/docs/Web/API/Response) daraus zu erstellen, sie als [`Blob`](/de/docs/Web/API/Blob) zu konsumieren, eine Objekt-URL aus diesem Blob mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) zu erstellen und sie dann auf dem Bildschirm in einem {{htmlelement("img")}}-Element anzuzeigen, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Lassen Sie uns im Detail betrachten, wie `read()` verwendet wird. In der oben gezeigten Funktion `pump()` rufen wir zuerst `read()` auf, das ein Versprechen mit einem Ergebnisobjekt zurückgibt — dieses enthält die Ergebnisse unseres Lesens in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können von drei verschiedenen Typen sein:

- Wenn ein Block zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wird der Stream geschlossen, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als nächstes überprüfen wir, ob `done` auf `true` gesetzt ist. Falls ja, sind keine weiteren Blöcke zum Lesen vorhanden (der Wert ist `undefined`), sodass wir die Funktion verlassen und den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) schließen:

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des Originalstreams, den wir hier besprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Ist `done` nicht `true`, verarbeiten wir den neuen Block, den wir gelesen haben (enthalten in der `value`-Eigenschaft des Ergebnisobjekts) und rufen dann erneut die `pump()`-Funktion auf, um den nächsten Block zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Lesern sehen werden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Wenn kein Stream mehr zum Lesen vorhanden ist, verlassen Sie die Funktion.
3. Wenn es mehr Stream zu lesen gibt, verarbeiten Sie den aktuellen Block und führen die Funktion erneut aus.
4. Sie verketteten die `pump()`-Funktion, bis kein Stream mehr zum Lesen vorhanden ist, in welchem Fall Schritt 2 gefolgt wird.

Wenn Sie den gesamten Code entfernen, um tatsächlich ein "Pumpen" durchzuführen, könnte der Code zu etwas Generalisiertem wie diesem ausgeführt werden:

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
> Die Funktion sieht aus, als ob `pump()` sich selbst aufruft und zu einer potenziell tiefen Rekursion führt.
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Versprechen-Handlers steht, ist es tatsächlich analog zu einer Kette von Versprechen-Handlern.

Das Lesen des Streams wird noch einfacher, wenn man `async/await` statt Versprechungen verwendet:

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

## Konsumieren eines `fetch()` mit asynchroner Iteration

Es gibt eine noch einfachere Möglichkeit, ein `fetch()` zu konsumieren, nämlich das iterieren des zurückgegebenen `response.body` mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Syntax.
Dies funktioniert, weil `response.body` einen `ReadableStream` zurückgibt, der ein [asynchrones iterable](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Unter Verwendung dieses Ansatzes kann der Beispielcode im vorherigen Abschnitt umgeschrieben werden, wie gezeigt:

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

Alternativ können Sie die Schleife mit `break` verlassen, wie im folgenden Code gezeigt.
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zum Verarbeiten hat, sodass es zu einer Verzögerung zwischen dem Abbrechen des Signals und dem Aufruf von `break` kommen kann.

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

### Beispiel für asynchronen Leser

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

<!-- Der folgende HTML- und JS-Code ist für die Berichterstellung eingerichtet. Versteckt, da er für die Leser nicht nützlich ist -->

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

Der nachfolgende Code zeigt ein vollständigeres Beispiel.
Hier wird der Fetch-Stream unter Verwendung des Iterators innerhalb eines try/catch-Blocks konsumiert.
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

Das Beispielprotokoll unten zeigt, dass der Code ausgeführt wird, oder berichtet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Blöcke; Sie können die Abbruch-Schaltfläche drücken, um das `fetch` zu stoppen.

> [!NOTE]
> Diese `fetch`-Operation wird zu Demozwecken _simuliert_ und gibt nur einen `ReadableStream` zurück, der zufällige Textblöcke generiert.
> Die "Underlying source" auf der linken Seite unten sind die Daten, die in der simulierten Quelle generiert werden, während die Spalte auf der rechten Seite das Protokoll des Verbrauchers ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines benutzerdefinierten lesbaren Streams

Das Einfache Stream-Pump-Beispiel, das wir während dieses Artikels untersucht haben, enthält einen zweiten Teil — nachdem wir das Bild in Blöcken aus dem Fetch-Body gelesen haben, werden diese dann in einen anderen, benutzerdefinierten Stream unserer eigenen Erstellung eingereiht. Wie erstellen wir diesen Stream? Mit dem `ReadableStream()` Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, aus einem Stream zu lesen, wenn der Browser ihn für Sie bereitstellt, wie im Fall von Fetch. Aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Blöcken befüllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor erlaubt Ihnen dies mittels einer Syntax, die zunächst komplex erscheint, aber eigentlich nicht allzu schwierig ist.

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

Der Konstruktor nimmt zwei Objekte als Parameter entgegen. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrundeliegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und erlaubt es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) anzugeben, die für Ihren Stream verwendet werden soll. Sie müssen dies selten tun, daher konzentrieren wir uns jetzt nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` konstruiert wurde. Innerhalb dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z. B. die Erzeugung von Daten beginnt oder auf andere Weise auf die Quelle zugreift.
2. `pull(controller)` — Eine Methode, die, wenn vorhanden, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während weitere Blöcke eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn vorhanden, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z. B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn sie vorhanden sind — um anzuzeigen, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Verwenden von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie sich in Zweck und Anwendungsfall etwas von regulären (Standard-)Streams unterscheiden.

Wenn wir uns noch einmal unseren einfachen Beispielcode ansehen, sehen Sie, dass unser `ReadableStream()` Konstruktor nur eine einzige Methode beinhaltet — `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden bemerken, dass die `start()`- und `pull()`-Methoden, die in den `ReadableStream()` Konstruktor übergeben werden, `controller`-Parameter erhalten — diese sind Instanzen der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Klasse, die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die Methode [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Zusätzlich, wenn wir das Lesen des Fetch-Bodys beendet haben, verwenden wir die Methode [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) des Controllers, um den benutzerdefinierten Stream zu schließen — alle zuvor eingereihten Blöcke können noch daraus gelesen werden, aber es können keine neuen eingereiht werden, und der Stream wird geschlossen, wenn das Lesen beendet ist.

### Lesen aus benutzerdefinierten Streams

In unserem Einfachen Stream-Pump-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen Aufruf des [`Response`](/de/docs/Web/API/Response/Response)-Konstruktors übergeben, wonach wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, was bedeutet, dass Sie einen Leser daran befestigen können. Als ein Beispiel, werfen Sie einen Blick auf unser [Einfaches Zufallsstrom-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und dann die Daten wieder aus dem Stream liest, sobald die _Stop string generation_-Taste gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; z. B. unter Verwendung von [`TextEncoder`](/de/docs/Web/API/TextEncoder) enkodiert.

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf verwendet, um jede Sekunde eine zufällige Zeichenfolge zu erzeugen. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um es in den Stream einzureihen. Wenn die Taste gedrückt wird, wird das Intervall abgebrochen, und eine Funktion namens `readStream()` wird aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen den Stream auch, da wir aufgehört haben, Blöcke darin einzureihen.

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

In der Funktion `readStream()` selbst verriegeln wir einen Leser für den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir zuvor gesehen haben — jeden Block mit `read()` lesen, prüfen, ob `done` `true` ist, und dann den Prozess beenden, wenn ja, und den nächsten Block lesen und verarbeiten, wenn nicht, bevor die Methode `read()` erneut ausgeführt wird.

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

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Lesers gezeigt. Wie wir zuvor gesagt haben, können alle zuvor eingereihten Blöcke noch gelesen werden, aber keine neuen können mehr eingereiht werden, da er geschlossen ist.

Wenn Sie den Stream vollständig loswerden und alle eingereihten Blöcke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Einem Stream einen Zwilling hinzufügen

Manchmal möchten Sie vielleicht einen Stream zweimal, gleichzeitig lesen. Dies wird mittels der Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie gibt ein Array mit zwei identischen Kopien des ursprünglichen lesbaren Streams aus, die dann unabhängig von zwei separaten Lesern gelesen werden können.

Dies könnte zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) der Fall sein, wenn Sie eine Antwort vom Server abrufen und an den Browser streamen möchten, aber es auch an den Cache des ServiceWorkers streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht mehr als einmal von einem Leser gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [Einfaches Tee-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert viel wie unser Einfacher zufälliger Stream, außer dass wenn die Taste gedrückt wird, um Zufallszeichenfolgen zu stoppen, der benutzerdefinierte Stream genommen und geteilt wird und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohrketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams ineinander zu verketteten (genannt eine [Rohrkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies beinhaltet zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), das einen lesbaren Stream durch ein Schreib-/Lese-Paar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), das einen lesbaren Stream zu einem Endpunkt-Schreiber der Rohrkette leitet.

Wir haben ein Beispiel namens [Chirurgenstücke eines PNG auspacken](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann zu einem benutzerdefinierten PNG-Transformationsstrom leitet, der PNG-Blöcke aus einem Binär-Datenstrom ausliest.

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

Siehe [Verwenden von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Übertragungen zu einem Verbraucher durchführen können, indem sie die internen Warteschlangen des Streams umgehen.
