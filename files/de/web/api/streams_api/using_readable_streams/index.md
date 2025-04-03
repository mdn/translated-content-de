---
title: Verwendung von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist das programmgesteuerte Lesen und Manipulieren von Datenströmen, die über das Netzwerk empfangen werden, Stück für Stück, sehr nützlich! Aber wie verwendet man die Funktionalität der lesbaren Streams der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und sich der allgemeinen Konzepte bewusst sind. Falls nicht, empfehlen wir, zuerst die [Übersicht über Konzepte und Nutzung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen Artikel [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie nach Informationen zu beschreibbaren Streams suchen, versuchen Sie es stattdessen mit [Verwendung von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Beispiele finden

Wir werden in diesem Artikel verschiedene Beispiele betrachten, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository stammen. Sie finden dort den vollständigen Quellcode sowie Links zu den Beispielen.

## Konsumieren eines Fetch als Stream

Die [Fetch-API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und es ist wirklich schön, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) sind verfügbar, die Zugriff auf die Körperinhalte als lesbaren Stream gewähren.

Wie unser [einfaches Pumpbeispiel](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) zeigt ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es einfach, den `body` der Antwort zuzugreifen:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies gibt uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt.

### Anbringen eines Lesers

Jetzt, wo wir unseren stromenden Körper haben, erfordert das Lesen des Streams, dass ein Leser daran angehängt wird. Dies geschieht mit der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader):

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

Das Aufrufen dieser Methode erstellt einen Leser und sperrt ihn an den Stream – kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z.B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

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

### Lesen des Streams

Nachdem Sie Ihren Leser angefügt haben, können Sie Datenblöcke aus dem Stream lesen, indem Sie die Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) verwenden. Dies liest einen Block aus dem Stream, mit dem Sie dann alles machen können. Zum Beispiel schiebt unser einfaches Pumpbeispiel jeden Block in einen neuen, benutzerdefinierten `ReadableStream` (wir werden im nächsten Abschnitt mehr darüber erfahren), erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert sie als [`Blob`](/de/docs/Web/API/Blob), erstellt eine Objekt-URL aus diesem Blob mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigt sie dann auf dem Bildschirm in einem {{htmlelement("img")}}-Element an, wodurch effektiv eine Kopie des ursprünglich abgerufenen Bildes erstellt wird.

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

Sehen wir uns im Detail an, wie `read()` verwendet wird. In der oben gezeigten Funktion `pump()` rufen wir zuerst `read()` auf, was ein Versprechen mit einem Ergebnisobjekt zurückgibt – dies enthält die Ergebnisse unseres Lesevorgangs in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können eine von drei verschiedenen Arten sein:

- Wenn ein Block zum Lesen verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als Nächstes prüfen wir, ob `done` `true` ist. Wenn ja, gibt es keine weiteren Blöcke zum Lesen (der Wert ist `undefined`), sodass wir die Funktion verlassen und den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) schließen:

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir den neuen Block, den wir gelesen haben (enthalten in der Eigenschaft `value` des Ergebnisobjekts), und rufen dann die Funktion `pump()` erneut auf, um den nächsten Block zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Lesern sehen werden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Wenn es keinen weiteren Stream zum Lesen gibt, kehren Sie aus der Funktion zurück.
3. Wenn es noch einen Stream zum Lesen gibt, verarbeiten Sie den aktuellen Block und führen dann die Funktion erneut aus.
4. Sie verketten die Funktion `pump()`, bis es keinen weiteren Stream zum Lesen gibt, in diesem Fall wird Schritt 2 befolgt.

Wenn Sie den gesamten Code entfernen, um tatsächlich ein "Pumpen" durchzuführen, könnte der Code wie folgt verallgemeinert werden:

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
> Da jedoch `pump` asynchron ist und jeder `pump()`-Aufruf am Ende des Promise-Handlers steht, ist es tatsächlich analog zu einer Kette von Promise-Handlern.

Das Lesen des Streams ist noch einfacher, wenn es mit async/await statt mit Versprechen geschrieben wird:

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

Es gibt einen noch einfacheren Weg, ein `fetch()` zu konsumieren, nämlich das Iterieren über den zurückgegebenen `response.body` mit der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Syntax.
Dies funktioniert, weil der `response.body` einen `ReadableStream` zurückgibt, der ein [async iterable](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorherigen Abschnitt so umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

Wenn Sie das Iterieren des Streams beenden möchten, können Sie den `fetch()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) und dem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zum Verarbeiten hat, sodass es zu einer Verzögerung zwischen dem Abbrechen des Signals und dem Aufrufen von `break` kommen kann.

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

<!-- Der Großteil des folgenden Codes ist absichtlich ausgeblendet, da er nicht relevant für das Beispiel ist -->

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

<!-- Der folgende HTML- und JS-Code richtet die Berichterstattung ein. Ausgeblendet, da es für Leser nicht nützlich ist -->

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
Hier wird der Fetch-Stream unter Verwendung des Iterators innerhalb eines try/catch-Blocks konsumiert.
Bei jeder Schleifeniteration protokolliert der Code einfach und zählt die empfangenen Bytes.
Wenn es einen Fehler gibt, wird das Problem protokolliert.
Der `fetch()`-Vorgang kann mit einem `AbortSignal` abgebrochen werden, was ebenfalls als Fehler protokolliert wird.

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

Das folgende Beispielprotokoll zeigt, wie der Code ausgeführt wird, oder berichtet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Blöcke; Sie können die Abbrechen-Schaltfläche drücken, um das Abrufen zu stoppen.

> [!NOTE]
> Dieser Fetch-Vorgang ist _nachgestellt_ zu Demonstrationszwecken und gibt einfach einen `ReadableStream` zurück, der zufällige Textblöcke generiert.
> Die "Underlying source" auf der linken Seite unten sind die im nachgestellten Quelltext generierten Daten, während die Spalte rechts das Protokoll des Verbrauchers ist.
> (Der Code für die nachgestellte Quelle wird nicht angezeigt, da er nicht relevant für das Beispiel ist.)

{{EmbedLiveSample("Beispiel für einen asynchronen Leser","100%","400px")}}

## Erstellen eines eigenen benutzerdefinierten lesbaren Streams

Das einfache Pumpbeispiel, das wir im Laufe dieses Artikels untersucht haben, umfasst einen zweiten Teil - sobald wir das Bild aus dem Fetch-Body in Blöcken gelesen haben, schieben wir diese in einen weiteren, von uns selbst erstellten benutzerdefinierten Stream. Wie erstellen wir diesen? Der `ReadableStream()`-Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, von einem Stream zu lesen, wenn der Browser Ihnen diesen zur Verfügung stellt, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Blöcken füllen. Der `ReadableStream()`-Konstruktor ermöglicht Ihnen dies durch eine Syntax, die auf den ersten Blick komplex aussieht, aber eigentlich gar nicht so schlimm ist.

Das generische Syntaxgerüst sieht so aus:

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

Der Konstruktor akzeptiert zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrunde liegenden Quelle, aus der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben. Dies ist selten erforderlich, daher konzentrieren wir uns zunächst auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` – Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` konstruiert wurde. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z.B. das Beginnen der Datengenerierung oder anderweitigen Zugang zur Quelle.
2. `pull(controller)` – Eine Methode, die, wenn sie eingeschlossen ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während weitere Blöcke eingereiht werden.
3. `cancel()` – Eine Methode, die, wenn eingeschlossen, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles Nötige tun, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` – Diese werden verwendet – wenn eingeschlossen – um anzugeben, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie sich etwas im Zweck und Anwendungsfall von normalen (Standard-)Streams unterscheiden.

Wenn wir uns unser einfaches Beispiel noch einmal ansehen, können Sie sehen, dass unser `ReadableStream()`-Konstruktor nur eine einzelne Methode enthält – `start()`, die dazu dient, alle Daten aus unserem Fetch-Stream zu lesen.

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

Sie werden feststellen, dass die an den `ReadableStream()`-Konstruktor übergebenen Methoden `start()` und `pull()` die `controller`-Parameter erhalten – diese sind Instanzen der Klasse [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController), die verwendet werden können, um Ihren Stream zu steuern.

In unserem Beispiel verwenden wir die Methode [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Außerdem verwenden wir nach dem Lesen des Fetch-Bodys die Methode [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) des Controllers, um den benutzerdefinierten Stream zu schließen – alle zuvor eingerückten Blöcke können noch gelesen werden, aber es können keine weiteren eingereiht werden, und der Stream wird geschlossen, wenn das Lesen abgeschlossen ist.

### Lesen aus benutzerdefinierten Streams

In unserem einfachen Pumpbeispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen Aufruf des [`Response`](/de/docs/Web/API/Response/Response)-Konstruktors übergeben, nach dem wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Ein benutzerdefinierter Stream ist jedoch immer noch eine Instanz von `ReadableStream`, was bedeutet, dass Sie einen Leser daran anhängen können. Schauen Sie sich zum Beispiel unser [Beispiel für einen einfachen Zufallsstrom](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) an, das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und dann die Daten wieder aus dem Stream liest, wenn die Schaltfläche _Stop string generation_ gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; zum Beispiel codiert mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet, um alle paar Sekunden eine zufällige Zeichenfolge zu erzeugen. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um diese in den Stream einzureihen. Wenn die Schaltfläche gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen den Stream auch, da wir die Einreihung von Blöcken eingestellt haben.

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

In der eigentlichen `readStream()`-Funktion sperren wir einen Leser an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir vorher gesehen haben – lesen jeden Block mit `read()`, überprüfen, ob `done` `true` ist und beenden den Vorgang, wenn dies der Fall ist, und lesen den nächsten Block und verarbeiten ihn, falls nicht, bevor wir die Methode `read()` erneut ausführen.

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

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Lesers gezeigt. Wie wir bereits gesagt haben, werden alle zuvor eingerückten Blöcke noch gelesen, aber es können keine weiteren eingereiht werden, da er geschlossen ist.

Wenn Sie den Stream vollständig entfernen und alle eingerückten Blöcke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Verdopplung eines Streams

Manchmal möchten Sie einen Stream zweimal gleichzeitig lesen. Dies wird durch die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht – sie gibt ein Array zurück, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig voneinander von zwei separaten Lesern gelesen werden können.

Dies könnten Sie zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abholen und sie an den Browser streamen, aber auch an den Service Worker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [einfachen Tee-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert ähnlich wie unser einfacher Zufallsstrom, außer dass, wenn die Schaltfläche gedrückt wird, um das Erzeugen von Zufallszeichenfolgen zu stoppen, der benutzerdefinierte Stream genommen und geteilt wird, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohrketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams ineinander zu leiten (als [Rohrkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) bezeichnet). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Writer/Reader-Paar leitet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream zu einem Writer leitet, der als Endpunkt für die Rohrkette fungiert.

Wir haben ein Beispiel namens [Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und dann durch einen benutzerdefinierten PNG-Transformationsstream leitet, der PNG-Blöcke aus einem Binärdatenstrom extrahiert.

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

Das erklärt die Grundlagen von "Standard" lesbaren Streams.

Sehen Sie [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Transfers zu einem Verbraucher durchführen können, indem sie die internen Warteschlangen des Streams umgehen.
