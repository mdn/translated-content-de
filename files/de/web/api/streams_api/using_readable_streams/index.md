---
title: Verwenden von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist das programmgesteuerte Lesen und Manipulieren von über das Netzwerk empfangenen Datenströmen, Stück für Stück, sehr nützlich! Aber wie nutzen Sie die Lesbarkeit der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und sich der Konzepte auf hohem Niveau bewusst sind. Wenn nicht, empfehlen wir Ihnen, zuerst die [Einführung in Streams-Konzepte und -Verwendung](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen [Artikel zu Streams-API-Konzepten](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu beschreibbaren Streams suchen, versuchen Sie stattdessen [Verwenden von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Einige Beispiele finden

In diesem Artikel schauen wir uns verschiedene Beispiele an, die aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repo genommen wurden. Den vollständigen Quellcode finden Sie dort sowie Links zu den Beispielen.

## Ein fetch als Stream konsumieren

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet dabei eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und das wirklich Schöne daran ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften [`Request.body`](/de/docs/Web/API/Request/body) und [`Response.body`](/de/docs/Web/API/Response/body) sind verfügbar. Sie sind Getter, die den Inhalt des Körpers als lesbaren Stream exponieren.

Wie unser [Einfacher Stream-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) Beispiel zeigt ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), besteht das Exponieren darin, einfach auf die `body`-Eigenschaft der Antwort zuzugreifen:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt.

### Einen Leser anhängen

Nun, da wir unseren Streaming-Körper haben, erfordert das Lesen des Streams das Anhängen eines Lesers daran. Dies wird mithilfe der Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) durchgeführt:

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

Das Aufrufen dieser Methode erstellt einen Leser und sperrt ihn für den Stream – kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z. B. durch Aufrufen von [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock).

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

Jetzt, da Sie Ihren Leser angehängt haben, können Sie mit der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) Datenstücke aus dem Stream lesen. Dies liest ein Stück aus dem Stream, mit dem Sie dann alles machen können, was Sie möchten. Zum Beispiel fügt unser einfaches Stream-Pump-Beispiel jedes Stück in einem neuen, benutzerdefinierten `ReadableStream` ein (wir werden im nächsten Abschnitt mehr darüber erfahren), erstellt dann eine neue [`Response`](/de/docs/Web/API/Response) daraus, konsumiert sie als [`Blob`](/de/docs/Web/API/Blob), erstellt eine Objekt-URL aus diesem Blob mithilfe von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigt es dann in einem {{htmlelement("img")}}-Element auf dem Bildschirm an, was effektiv eine Kopie des Bildes erstellt, das wir ursprünglich abgerufen haben.

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

Schauen wir uns detailliert an, wie `read()` verwendet wird. In der obigen `pump()`-Funktion rufen wir zuerst `read()` auf, das ein Versprechen mit einem Ergebnisobjekt zurückgibt – dies enthält die Ergebnisse unseres Lesens in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können einer von drei verschiedenen Typen sein:

- Ist ein Stück zum Lesen verfügbar, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wird der Stream geschlossen, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Tritt ein Fehler im Stream auf, wird das Versprechen mit dem jeweiligen Fehler abgelehnt.

Als Nächstes überprüfen wir, ob `done` `true` ist. Falls ja, gibt es keine weiteren Stücke zum Lesen (der Wert ist `undefined`), also kehren wir aus der Funktion zurück und schließen den benutzerdefinierten Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close):

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` gehört zum neuen benutzerdefinierten Stream, nicht zum ursprünglichen Stream, den wir hier diskutieren. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Ist `done` nicht `true`, verarbeiten wir das neu gelesene Stück (im `value`-Eigenschaft des Ergebnisobjekts enthalten) und rufen dann die `pump()`-Funktion erneut auf, um das nächste Stück zu lesen.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie beim Verwenden von Stream-Lesern sehen werden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Gibt es keinen Stream mehr zu lesen, kehren Sie aus der Funktion zurück.
3. Ist noch mehr Stream zu lesen, verarbeiten Sie das aktuelle Stück und führen die Funktion erneut aus.
4. Sie verketten die `pipe`-Funktion weiter, bis es keinen Stream mehr zu lesen gibt, in welchem Fall Schritt 2 erfolgt.

Ohne den gesamten Code zu entfernen, der tatsächlich einen "Pump" ausführt, könnte der Code etwa so verallgemeinert werden:

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
> Da `pump` jedoch asynchron ist und jeder `pump()`-Aufruf am Ende des Versprechen-Handlers erfolgt, ist es eigentlich analog zu einer Kette von Versprechen-Handlern.

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

## Einen fetch() mit asynchroner Iteration konsumieren

Es gibt eine noch einfachere Möglichkeit, einen `fetch()` zu konsumieren, nämlich durch Iteration des zurückgegebenen `response.body` mit der Syntax [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of).
Dies funktioniert, weil das `response.body` einen `ReadableStream` zurückgibt, der ein [asynchrons iterierbares Objekt](/de/docs/Web/API/ReadableStream#async_iteration) ist.

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

Wenn Sie das Iterieren des Streams beenden möchten, können Sie den `fetch()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) und dem dazugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

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
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zum Verarbeiten hat, sodass es möglicherweise eine Verzögerung zwischen dem Abbrechen des Signals und dem Aufruf von `break` gibt.

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

### Beispiel für asynchrones Lesen

<!-- Der größte Teil des unten stehenden Codes ist absichtlich ausgeblendet, da er für das Beispiel nicht relevant ist -->

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

<!-- Der folgende HTML- und JS-Code richtet das Berichten ein. Ausgeblendet, weil er für die Leser nicht nützlich ist -->

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
Hier wird der Fetch-Stream mithilfe des Iterators innerhalb eines try/catch-Blocks konsumiert.
Bei jeder Iteration der Schleife protokolliert der Code einfach die empfangenen Bytes und zählt sie.
Wenn ein Fehler auftritt, wird das Problem protokolliert.
Der `fetch()`-Vorgang kann mit einem `AbortSignal` abgebrochen werden, was ebenfalls als Fehler protokolliert würde.

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

Das folgende Protokoll zeigt, wie der Code ausgeführt wird oder dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Auf der rechten Seite werden die empfangenen Stücke angezeigt; Sie können die Abbrechen-Schaltfläche drücken, um das Abrufen zu stoppen.

> [!NOTE]
> Dieser Fetch-Vorgang wird zu Demonstrationszwecken _simuliert_ und gibt einfach einen `ReadableStream` zurück, der zufällige Textstücke generiert.
> Die „Ursprungsquelle“ links unten sind die in der simulierten Quelle generierten Daten, während die Spalte rechts das Protokoll des Verbrauchers ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines eigenen benutzerdefinierten lesbaren Streams

Das Simple stream pump-Beispiel, das wir im Verlauf dieses Artikels studiert haben, enthält einen zweiten Teil – nachdem wir das Bild aus dem fetch-Body stückweise gelesen haben, legen wir sie in einen anderen, von uns selbst erstellten benutzerdefinierten Stream ab. Wie erstellen wir diesen? Mit dem `ReadableStream()`-Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, von einem Stream zu lesen, wenn der Browser ihn Ihnen bereitstellt, wie im Falle von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Stücken füllen. Der [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor ermöglicht Ihnen, dies mithilfe einer Syntax zu tun, die auf den ersten Blick kompliziert aussieht, aber eigentlich gar nicht so schlimm ist.

Das generische Syntax-Grundgerüst sieht so aus:

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

Der Konstruktor nimmt zwei Objekte als Parameter an. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript der zugrunde liegenden Quelle, von der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) festzulegen, die für Ihren Stream verwendet werden soll. Dies wird in der Regel selten benötigt, daher konzentrieren wir uns vorerst nur auf das erste Objekt.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal unmittelbar nach dem Erstellen des `ReadableStream` aufgerufen wird. Innerhalb dieser Methode sollten Sie Code enthalten, der die Stream-Funktionalität einrichtet, z.B. das Beginnen der Datengenerierung oder sonstigen Zugriff auf die Quelle.
2. `pull(controller)` — Eine Methode, die, wenn sie enthalten ist, wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, wenn mehr Stücke eingereiht werden.
3. `cancel()` — Eine Methode, die, wenn enthalten, aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn enthalten — um anzuzeigen, dass es sich bei dem Stream um einen Bytestream handelt.
   Bytestreams werden separat in [Verwenden von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie im Zweck und der Verwendung etwas anders sind als reguläre (Standard-) Streams.

Wenn wir uns unseren einfachen Beispielcode noch einmal ansehen, können Sie sehen, dass unser `ReadableStream()`-Konstruktor nur eine einzige Methode enthält — `start()`, die dazu dient, alle Daten aus unserem fetch-Stream zu lesen.

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

Sie werden bemerken, dass den `start()`- und `pull()`-Methoden, die in den `ReadableStream()`-Konstruktor übergeben werden, `controller`-Parameter gegeben werden — diese sind Instanzen der Klasse [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController), die zum Steuern Ihres Streams verwendet werden können.

In unserem Beispiel benutzen wir die Methode [`enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem fetch-Body gelesen wurde.

Darüber hinaus nutzen wir, wenn wir mit dem Lesen des fetch-Bodys fertig sind, die Methode [`close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) des Controllers, um den benutzerdefinierten Stream zu schließen — jegliche zuvor eingereihten Stücke können immer noch daraus gelesen werden, aber keine weiteren können eingereiht werden, und der Stream wird geschlossen, wenn das Lesen abgeschlossen ist.

### Lesen aus benutzerdefinierten Streams

In unserem Simple stream pump Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen [`Response`](/de/docs/Web/API/Response/Response) Konstruktoraufruf einfügen, wonach wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine `ReadableStream`-Instanz, was bedeutet, dass Sie einen Leser daran anhängen können. Als Beispiel schauen Sie sich unser [Einfacher zufälliger Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und die Daten dann wieder aus dem Stream liest, sobald der _Stop string generation_ Button gedrückt wird.

> [!NOTE]
> Um einen Stream mit [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; zum Beispiel codiert mit [`TextEncoder`](/de/docs/Web/API/TextEncoder).

Der benutzerdefinierte Stream-Konstruktor hat eine `start()`-Methode, die einen Aufruf von [`setInterval()`](/de/docs/Web/API/SetInterval) verwendet, um alle paar Sekunden eine zufällige Zeichenfolge zu generieren. [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue) wird dann verwendet, um diese in den Stream einzureihen. Wenn der Button gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` aufgerufen, um die Daten wieder aus dem Stream zu lesen. Wir schließen auch den Stream, da wir aufgehört haben, Stücke darin einzureihen.

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

In der `readStream()`-Funktion selbst sperren wir einen Leser an den Stream mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), dann folgen wir dem gleichen Muster, das wir zuvor gesehen haben — lesen jedes Stück mit `read()`, überprüfen, ob `done` `true` ist und beenden den Vorgang, wenn ja, und lesen das nächste Stück und verarbeiten es, wenn nicht, bevor wir die Methode `read()` erneut ausführen.

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

Wir haben bereits Beispiele für die Verwendung von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) zum Schließen eines Lesers gezeigt. Wie bereits erwähnt, werden alle zuvor eingereihten Stücke noch gelesen, aber keine weiteren können eingereiht werden, da der Stream geschlossen ist.

Wenn Sie den Stream vollständig entfernen und alle eingereihten Stücke verwerfen möchten, verwenden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel).

## Aufteilen eines Streams

Manchmal möchten Sie einen Stream zweimal gleichzeitig lesen. Dies wird durch die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie gibt ein Array mit zwei identischen Kopien des ursprünglichen lesbaren Streams aus, die dann unabhängig voneinander von zwei verschiedenen Lesern gelesen werden können.

Sie könnten dies beispielsweise in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie an den Browser streamen, aber auch in den Cache des Service Workers streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, würden Sie zwei Kopien benötigen, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [Einfachen Tee-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert auf die gleiche Weise wie unser Einfacher zufälliger Stream, nur dass der benutzerdefinierte Stream geteilt wird, sobald der Button gedrückt wird, um zufällige Zeichenfolgen zu stoppen, und beide resultierenden Streams dann gelesen werden:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe-Ketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams ineinander zu pipen (genannt eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies umfasst zwei Methoden — [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), die einen lesbaren Stream durch ein Writer/Reader-Paar pipet, um ein Datenformat in ein anderes zu transformieren, und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), die einen lesbaren Stream zu einem Writer pipet, der als Endpunkt der Pipe-Kette fungiert.

Wir haben ein einfaches Beispiel namens [Pakete von PNG zerlegen](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([auch live zu sehen](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft und es dann zu einem benutzerdefinierten PNG-Transform-Stream pipet, der PNG-Pakete aus einem Binärdatenstrom abruft.

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

Das erklärt die Grundlagen von „standardmäßigen“ lesbaren Streams.

Siehe [Verwenden von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen darüber, wie lesbare _Byte_-Streams verwendet werden: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Übertragungen zu einem Verbraucher durchführen können, wodurch die internen Warteschlangen des Streams umgangen werden.
