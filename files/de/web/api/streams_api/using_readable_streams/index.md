---
title: Verwendung von lesbaren Streams
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist das programmgesteuerte Lesen und Manipulieren von Datenströmen, die über das Netzwerk stückweise empfangen werden, sehr nützlich! Aber wie verwendet man die Funktionalität von lesbaren Streams der Streams-API? Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von lesbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind. Wenn nicht, empfehlen wir, zuerst die [Streams-Konzepte und Gebrauchsübersicht](/de/docs/Web/API/Streams_API#concepts_and_usage) sowie den speziellen Artikel [Streams API Concepts](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu beschreibbaren Streams suchen, versuchen Sie stattdessen [Using writable streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Finden einiger Beispiele

In diesem Artikel betrachten wir verschiedene Beispiele aus unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository. Dort finden Sie den vollständigen Quellcode sowie Links zu den Beispielen.

## Konsumieren eines Fetchs als Stream

Die [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, Ressourcen über das Netzwerk abzurufen und bietet eine moderne Alternative zu [XHR](/de/docs/Web/API/XMLHttpRequest). Sie hat eine Reihe von Vorteilen, und was wirklich schön daran ist, ist, dass Browser kürzlich die Möglichkeit hinzugefügt haben, eine Fetch-Antwort als lesbaren Stream zu konsumieren.

Die Eigenschaften {{domxref("Request.body")}} und {{domxref("Response.body")}} sind verfügbar, was Getter sind, die den Inhalt des Bodys als lesbaren Stream bereitstellen.

Wie unser [Einfacher Stream-Pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) zeigt ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-pump/)), ist es einfach, ihn zu exponieren, indem Sie einfach auf die `body`-Eigenschaft der Antwort zugreifen:

```js
// Originalbild abrufen
fetch("./tortoise.png")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => response.body);
```

Dies liefert uns ein {{domxref("ReadableStream")}}-Objekt.

### Einen Leser anhängen

Nachdem wir nun unseren Streaming-Body haben, erfordert das Lesen des Streams das Anhängen eines Lesers daran. Dies erfolgt mit der {{domxref("ReadableStream.getReader()")}}-Methode:

```js
// Originalbild abrufen
fetch("./tortoise.png")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();
    // …
  });
```

Durch Aufrufen dieser Methode wird ein Leser erstellt und an den Stream gebunden — kein anderer Leser kann diesen Stream lesen, bis dieser Leser freigegeben wird, z.B. durch Aufruf von {{domxref("ReadableStreamDefaultReader.releaseLock()")}}.

Beachten Sie auch, dass das vorherige Beispiel um einen Schritt reduziert werden kann, da `response.body` synchron ist und somit das Versprechen nicht benötigt:

```js
// Originalbild abrufen
fetch("./tortoise.png")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // …
  });
```

### Den Stream lesen

Nachdem Sie Ihren Leser angehängt haben, können Sie mit der Methode {{domxref("ReadableStreamDefaultReader.read()")}} Datenstücke aus dem Stream lesen. Dies liest ein Stück aus dem Stream, mit dem Sie dann tun können, was Sie möchten. Zum Beispiel fügt unser Einfacher Stream-Pump-Beispiel jedes Stück in einen neuen, benutzerdefinierten `ReadableStream` ein (wir werden in den nächsten Abschnitt mehr darüber erfahren), erstellt dann eine neue {{domxref("Response")}} daraus, konsumiert sie als {{domxref("Blob")}}, erstellt eine Objekt-URL aus diesem Blob mithilfe von {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, und zeigt sie dann in einem {{htmlelement("img")}}-Element auf dem Bildschirm an und erstellt effektiv eine Kopie des Bildes, das wir ursprünglich abgerufen haben.

```js
// Originalbild abrufen
fetch("./tortoise.png")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // Wenn keine Daten mehr konsumiert werden müssen, schließen Sie den Stream
            if (done) {
              controller.close();
              return;
            }
            // Fügen Sie das nächste Datenstück in unseren Zielstream ein
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  // Erstellen Sie eine neue Antwort aus dem Stream
  .then((stream) => new Response(stream))
  // Erstellen Sie eine Objekt-URL für die Antwort
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  // Bild aktualisieren
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Lassen Sie uns im Detail betrachten, wie `read()` verwendet wird. In der oben gesehenen `pump()`-Funktion rufen wir zuerst `read()` auf, das ein Versprechen mit einem Ergebnisobjekt zurückgibt — dies enthält die Ergebnisse unseres Lesevorgangs in der Form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

Die Ergebnisse können von drei verschiedenen Typen sein:

- Wenn ein Chunk verfügbar ist, wird das Versprechen mit einem Objekt der Form `{ value: theChunk, done: false }` erfüllt.
- Wenn der Stream geschlossen wird, wird das Versprechen mit einem Objekt der Form `{ value: undefined, done: true }` erfüllt.
- Wenn der Stream fehlerhaft wird, wird das Versprechen mit dem entsprechenden Fehler abgelehnt.

Als nächstes prüfen wir, ob `done` `true` ist. Falls ja, gibt es keine weiteren Chunks zu lesen (der Wert ist `undefined`), sodass wir die Funktion verlassen und den benutzerdefinierten Stream mit {{domxref("ReadableStreamDefaultController.close()")}} schließen:

```js
if (done) {
  controller.close();
  return;
}
```

> **Hinweis:** `close()` ist Teil des neuen benutzerdefinierten Streams, nicht des ursprünglichen Streams, den wir hier besprechen. Wir werden im nächsten Abschnitt mehr über den benutzerdefinierten Stream erklären.

Wenn `done` nicht `true` ist, verarbeiten wir den neuen Chunk, den wir gelesen haben (enthalten in der `value`-Eigenschaft des Ergebnisobjekts), und rufen dann die Funktion `pump()` erneut auf, um den nächsten Chunk zu lesen.

```js
// Fügen Sie das nächste Datenstück in unseren Zielstream ein
controller.enqueue(value);
return pump();
```

Dies ist das Standardmuster, das Sie sehen werden, wenn Sie Stream-Leser verwenden:

1. Sie schreiben eine Funktion, die damit beginnt, den Stream zu lesen.
2. Wenn es keinen weiteren Stream mehr gibt, den Sie lesen können, verlassen Sie die Funktion.
3. Wenn es noch mehr Stream gibt, den Sie lesen können, verarbeiten Sie den aktuellen Chunk und führen die Funktion erneut aus.
4. Sie setzen die Verkettung des `pipe`-Funktion fort, bis kein Stream mehr zu lesen ist, in welchem Fall Schritt 2 befolgt wird.

Indem Sie den gesamten Code entfernen, um wirklich eine "Pumpe" auszuführen, könnte der Code so generalisiert werden:

```js
fetch("http://example.com/somefile.txt")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // read() gibt ein Versprechen zurück, das aufgelöst wird, wenn ein Wert empfangen wurde
    reader.read().then(function pump({ done, value }) {
      if (done) {
        // Tun Sie etwas mit dem letzten Datenstück und beenden Sie dann den Leser
        return;
      }
      // Andernfalls tun Sie hier etwas, um den aktuellen Chunk zu verarbeiten

      // Lesen Sie etwas weiter und rufen Sie diese Funktion erneut auf
      return reader.read().then(pump);
    });
  })
  .catch((err) => console.error(err));
```

> [!NOTE]
> Die Funktion sieht so aus, als ob `pump()` sich selbst aufruft und zu einer potenziell tiefen Rekursion führt.
> Da jedoch `pump` asynchron ist und jeder `pump()`-Aufruf am Ende des Versprechen-Handlers steht, ist es tatsächlich analog zu einer Kette von Versprechen-Handlern.

Das Lesen des Streams ist noch einfacher, wenn es mit `async/await` anstelle von Versprechen geschrieben wird:

```js
async function readData(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      // Tun Sie etwas mit dem letzten Datenstück und beenden Sie dann den Leser
      return;
    }
    // Andernfalls tun Sie hier etwas, um den aktuellen Chunk zu verarbeiten
  }
}
```

## Konsumieren eines fetch() mit asynchroner Iteration

Es gibt eine noch einfachere Möglichkeit, ein `fetch()` zu konsumieren: die Verwendung der [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Syntax zum Iterieren des zurückgegebenen `response.body`.
Dies funktioniert, weil `response.body` einen `ReadableStream` zurückgibt, der ein [asynchron iterierbares Objekt](/de/docs/Web/API/ReadableStream#async_iteration) ist.

Mit diesem Ansatz kann der Beispielcode im vorherigen Abschnitt wie gezeigt umgeschrieben werden:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Tun Sie etwas mit jedem "Stück"
  }
  // Beenden, wenn fertig
}
```

Wenn Sie die Iteration des Streams beenden möchten, können Sie die `fetch()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) und dessen zugehörigem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen:

```js
const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  const response = await fetch(url, { signal });
  for await (const chunk of response.body) {
    // Tun Sie etwas mit dem Chunk
  }
}
```

Alternativ können Sie die Schleife mit `break` beenden, wie im folgenden Code gezeigt.
Beachten Sie, dass der Code in der Schleife nur ausgeführt wird, wenn der Stream neue Daten zu verarbeiten hat, sodass es zu einer Verzögerung zwischen dem Abbruch des Signals und dem Aufruf von `break` kommen kann.

```js
const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    if (signal.aborted) break; // einfach aus der Schleife ausbrechen
    // Tun Sie etwas mit dem Chunk
  }
}
```

### Beispiel für einen asynchronen Leser

<!-- Der meiste Code unten ist absichtlich ausgeblendet, da er für das Beispiel nicht relevant ist -->

```js hidden
// Eine simulierte Push-Quelle.
// Wird verwendet, um das Ankommen einiger zufälliger Daten zu simulieren
class MockPushSource {
  // maximale Datenmenge, die von der Push-Quelle gestreamt wird
  static #maxData = 90;
  // bisher gelesene Gesamtdaten (auf maxData begrenzt)
  #dataRead = 0;

  // Methode, die ein Versprechen zurückgibt, wenn diese Push-Quelle lesbar ist.
  dataRequest() {
    const result = {
      bytesRead: 8,
      data: "",
    };

    return new Promise((resolve) => {
      if (this.#dataRead >= MockPushSource.#maxData) {
        // Keine Daten mehr vorhanden
        result.bytesRead = 0;
        result.data = "";
        resolve(result);
        return;
      }

      // Langsames Lesen von Daten simulieren
      setTimeout(() => {
        const numberBytesReceived = 8;
        this.#dataRead += numberBytesReceived;
        result.data = MockPushSource.#randomChars();
        resolve(result);
      }, 500);
    });
  }

  // Dummy-Schließen-Funktion
  close() {
    return;
  }

  // Zufällige Zeichenfolge zurückgeben
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

<!-- Das folgende HTML und JS richtet das Reporting ein. Ausgeblendet, da es für Leser nicht nützlich ist -->

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
<button>Stream abbrechen</button>
<div class="input">
  <h2>Unterliegende Quelle</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Verbraucher</h2>
  <ul></ul>
</div>
```

```js hidden
// Referenz auf Listen, Absatz und Schaltfläche speichern
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Leere Zeichenkette erstellen, in der das endgültige Ergebnis gespeichert wird
let result = "";

// Funktion zum Protokollieren von Daten aus der unterliegenden Quelle
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Funktion zum Protokollieren von Daten aus dem Verbraucher
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
            logSource(`Keine Daten aus Quelle: Schließen`);
            controller.close();
            return;
          }

          logSource(`Daten einreihen: ${result.data}`);
          controller.enqueue(result.data);
          return readRepeatedly();
        });
      }
    },

    cancel() {
      logSource(`cancel() auf der unterliegenden Quelle aufgerufen`);
      pushSource.close();
    },
  });
}
```

```js hidden
// Fetch() mit Monkey-Patching, damit es eine Antwort zurückgibt, die ein simulierter Stream ist
window.fetch = async (...args) => {
  return { body: stream };
};
```

Der folgende Code zeigt ein vollständigeres Beispiel.
Hier wird der Fetch-Stream mit dem Iterator in einem try/catch-Block konsumiert.
Bei jeder Iteration der Schleife protokolliert der Code einfach und zählt die empfangenen Bytes.
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
      logConsumer(`Chunk: ${chunk}. Gelesene Zeichen: ${bytes}.`);
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e);
      logConsumer("TypeError: Browser unterstützt möglicherweise nicht die asynchrone Iteration");
    } else {
      logConsumer(`Fehler im asynchronen Iterator: ${e}.`);
    }
  }
}
```

Das Beispielprotokoll unten zeigt den ausgeführten Code oder meldet, dass Ihr Browser die asynchrone Iteration von `ReadableStream` nicht unterstützt.
Die rechte Seite zeigt die empfangenen Chunks; Sie können die Abbrechen-Schaltfläche drücken, um das Abruf zu stoppen.

> [!NOTE]
> Diese Fetch-Operation wird zu Demonstrationszwecken _simuliert_ und gibt einfach einen `ReadableStream` zurück, der zufällige Textstücke generiert.
> Die "Unterliegende Quelle" auf der linken Seite unten sind die Daten, die in der simulierten Quelle generiert werden, während die Spalte auf der rechten Seite das Protokoll des Verbrauchers ist.
> (Der Code für die simulierte Quelle wird nicht angezeigt, da er für das Beispiel nicht relevant ist.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Erstellen eines benutzerdefinierten lesbaren Streams

Das Einfache Stream-Pump-Beispiel, das wir im gesamten Artikel untersucht haben, enthält einen zweiten Teil — nachdem wir das Bild aus dem Fetch-Body in Stücke gelesen haben, werden diese in einen anderen, benutzerdefinierten Stream unserer eigenen Erstellung eingereiht. Wie erstellen wir das? Mit dem `ReadableStream()`-Konstruktor.

### Der ReadableStream() Konstruktor

Es ist einfach, von einem Stream zu lesen, wenn der Browser ihn Ihnen bereitstellt, wie im Fall von Fetch, aber manchmal müssen Sie einen benutzerdefinierten Stream erstellen und ihn mit Ihren eigenen Chunks befüllen. Der {{domxref("ReadableStream.ReadableStream","ReadableStream()")}}-Konstruktor ermöglicht Ihnen dies über eine Syntax, die auf den ersten Blick komplex erscheint, tatsächlich aber gar nicht so schlimm ist.

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

Der Konstruktor nimmt zwei Objektparameter entgegen. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript von der zugrunde liegenden Quelle, von der die Daten gelesen werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben. Sie werden dies selten tun müssen, daher konzentrieren wir uns zunächst nur auf das erste.

Das erste Objekt kann bis zu fünf Mitglieder enthalten, von denen nur das erste erforderlich ist:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der `ReadableStream` erstellt wurde. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z.B. die Generierung von Daten beginnt oder anderweitig auf die Quelle zugegriffen wird.
2. `pull(controller)` — Eine Methode, die — wenn eingeschlossen — wiederholt aufgerufen wird, bis die interne Warteschlange des Streams voll ist. Dies kann verwendet werden, um den Stream zu steuern, während mehr Chunks eingereiht werden.
3. `cancel()` — Eine Methode, die — wenn eingeschlossen — aufgerufen wird, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn {{domxref("ReadableStream.cancel()")}} aufgerufen wird). Der Inhalt sollte alles tun, was nötig ist, um den Zugriff auf die Stream-Quelle freizugeben.
4. `type` und `autoAllocateChunkSize` — Diese werden verwendet — wenn eingeschlossen — um anzuzeigen, dass der Stream ein Bytestream sein soll.
   Bytestreams werden separat in [Using readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) behandelt, da sie zu regulären (Standard-)Streams etwas anders im Zweck und Anwendungsfall sind.

Nochmals unser einfaches Beispielcode betrachtet, sehen Sie, dass unser `ReadableStream()`-Konstruktor nur eine einzige Methode enthält — `start()`, die zum Lesen aller Daten aus unserem Fetch-Stream dient.

```js
// Originalbild abrufen
fetch("./tortoise.png")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // Wenn keine Daten mehr konsumiert werden müssen, schließen Sie den Stream
            if (done) {
              controller.close();
              return;
            }
            // Fügen Sie das nächste Datenstück in unseren Zielstream ein
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  });
```

### ReadableStream Controller

Sie werden bemerken, dass die in den `ReadableStream()`-Konstruktor übergebenen `start()`- und `pull()`-Methoden `controller`-Parameter erhalten — dies sind Instanzen der {{domxref("ReadableStreamDefaultController")}}-Klasse, die zur Steuerung Ihres Streams verwendet werden können.

In unserem Beispiel verwenden wir die {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}}-Methode des Controllers, um einen Wert in den benutzerdefinierten Stream einzureihen, nachdem er aus dem Fetch-Body gelesen wurde.

Außerdem verwenden wir, wenn wir den Fetch-Body vollständig gelesen haben, die {{domxref("ReadableStreamDefaultController.close","close()")}}-Methode des Controllers, um den benutzerdefinierten Stream zu schließen — alle zuvor eingereihten Chunks können daraus noch gelesen werden, aber keine weiteren können eingereiht werden, und der Stream ist geschlossen, wenn das Lesen abgeschlossen ist.

### Lesen aus benutzerdefinierten Streams

In unserem Einfachen Stream-Pump-Beispiel konsumieren wir den benutzerdefinierten lesbaren Stream, indem wir ihn in einen {{domxref("Response.Response", "Response")}}-Konstruktoraufruf einfügen, nach dem wir ihn als `blob()` konsumieren.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Aber ein benutzerdefinierter Stream ist immer noch eine Instanz von `ReadableStream`, was bedeutet, dass Sie einen Leser daran anhängen können. Als Beispiel sehen Sie sich unser [Einfaches zufälliges Stream-Demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) an, das einen benutzerdefinierten Stream erstellt, einige zufällige Zeichenfolgen darin einreiht und die Daten aus dem Stream dann erneut gelesen werden, sobald die _Stop string generation_-Schaltfläche gedrückt wird.

> [!NOTE]
> Um einen Stream mit {{domxref("FetchEvent.respondWith()")}} zu konsumieren, müssen die eingereihten Stream-Inhalte vom Typ {{jsxref("Uint8Array")}} sein; beispielsweise codiert mit {{domxref("TextEncoder")}}.

Der Konstruktor des benutzerdefinierten Streams hat eine `start()`-Methode, die einen {{domxref("setInterval()")}}-Aufruf verwendet, um jede Sekunde eine zufällige Zeichenfolge zu generieren. {{domxref("ReadableStreamDefaultController.enqueue()")}} wird dann verwendet, um sie in den Stream einzureihen. Wenn die Schaltfläche gedrückt wird, wird das Intervall abgebrochen und eine Funktion namens `readStream()` aufgerufen, um die Daten wieder aus dem Stream herauszulesen. Wir schließen auch den Stream, da wir keine Chunks mehr darin einreihen.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      const string = randomChars();
      // Zeichenfolge zum Stream hinzufügen
      controller.enqueue(string);
      // es auf dem Bildschirm anzeigen
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
    // Wir brauchen hier eigentlich kein Pull in diesem Beispiel
  },
  cancel() {
    // Dies wird aufgerufen, wenn der Leser storniert,
    // daher sollten wir die Generierung von Zeichenfolgen beenden
    clearInterval(interval);
  },
});
```

In der Funktion `readStream()` selbst sperren wir einen Leser an den Stream, indem wir {{domxref("ReadableStream.getReader()")}} verwenden, und folgen dann dem gleichen Muster, das wir vorher gesehen haben — jeden Chunk mit `read()` lesen, prüfen, ob `done` `true` ist, und dann den Prozess beenden, wenn dies der Fall ist, und den nächsten Chunk lesen und verarbeiten, wenn nicht, bevor die Methode `read()` erneut ausgeführt wird.

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  let result = "";

  // read() gibt ein Versprechen zurück, das aufgelöst wird,
  // wenn ein Wert empfangen wurde
  reader.read().then(function processText({ done, value }) {
    // Ergebnisobjekte enthalten zwei Eigenschaften:
    // done  - true, wenn der Stream Ihnen bereits alle seine Daten gegeben hat.
    // value - einige Daten. Immer undefined, wenn done true ist.
    if (done) {
      console.log("Stream abgeschlossen");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    const listItem = document.createElement("li");
    listItem.textContent = `Bis jetzt ${charsReceived} Zeichen gelesen. Aktueller Chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Lesen Sie etwas weiter und rufen Sie diese Funktion erneut auf
    return reader.read().then(processText);
  });
}
```

### Streams schließen und abbrechen

Wir haben bereits Beispiele für die Verwendung von {{domxref("ReadableStreamDefaultController.close()")}} zum Schließen eines Lesers gezeigt. Wie wir schon sagten, können alle zuvor eingereihten Chunks dennoch gelesen werden, aber keine weiteren können eingereiht werden, da er geschlossen ist.

Wenn Sie den Stream vollständig loswerden und alle eingereihten Chunks verwerfen möchten, würden Sie {{domxref("ReadableStream.cancel()")}} oder {{domxref("ReadableStreamDefaultReader.cancel()")}} verwenden.

## Einen Stream verteilen

Manchmal möchten Sie einen Stream zweimal gleichzeitig lesen. Dies wird mit der Methode {{domxref("ReadableStream.tee()")}} erreicht — sie gibt ein Array zurück, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig von zwei separaten Lesern gelesen werden können.

Sie könnten dies beispielsweise in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und an den Browser streamen, aber auch an den Service Worker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

Wir bieten ein Beispiel dafür in unserem [Einfachen Verteilenbeispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). Dieses Beispiel funktioniert sehr ähnlich wie unser Einfacher zufälliger Stream, mit dem Unterschied, dass beim Drücken der Schaltfläche zum Stoppen der Generierung zufälliger Zeichenfolgen der benutzerdefinierte Stream genommen und verteilt wird, und beide resultierenden Streams werden dann gelesen:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Rohrketten

Ein weiteres Merkmal von Streams ist die Fähigkeit, Streams ineinander zu verschachteln (genannt eine [Rohrkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains)). Dies beinhaltet zwei Methoden — {{domxref("ReadableStream.pipeThrough()")}}, die einen lesbaren Stream durch ein Writer/Reader-Paar führt, um ein Datenformat in ein anderes zu transformieren, und {{domxref("ReadableStream.pipeTo()")}}, die einen lesbaren Stream an einen Writer pipet, der als Endpunkt der Rohrkette fungiert.

Wir haben ein einfaches Beispiel namens [Entpacken von Chunks eines PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([sehen Sie es auch live](https://mdn.github.io/dom-examples/streams/png-transform-stream/)), das ein Bild als Stream abruft, es dann durch einen benutzerdefinierten PNG-Transform-Stream leitet, der PNG-Chunks aus einem binären Datenstrom abruft.

```js
// Originalbild abrufen
fetch("png-logo.png")
  // Holen Sie sich den Body als ReadableStream
  .then((response) => response.body)
  // Erstellen Sie einen grau-skalierten PNG-Stream aus dem Original
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

Wir haben noch kein Beispiel, das {{domxref("TransformStream")}} verwendet.

## Zusammenfassung

Damit sind die Grundlagen der "Standard"-lesbaren Streams erklärt.

Siehe [Using readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) für Informationen dazu, wie man lesbare _Byte_-Streams verwendet: Streams mit einer zugrunde liegenden Byte-Quelle, die effiziente Zero-Copy-Übertragungen an einen Verbraucher durchführen können, indem sie die internen Warteschlangen des Streams umgehen.
