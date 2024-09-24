---
title: Verwendung von beschreibbaren Streams
slug: Web/API/Streams_API/Using_writable_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist das programmatische Schreiben von Daten in einen Stream sehr nützlich! Dieser Artikel erklärt die Funktionalität von beschreibbaren Streams der [Streams API](/de/docs/Web/API/Streams_API).

> [!NOTE]
> Dieser Artikel geht davon aus, dass Sie die Anwendungsfälle von beschreibbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind.
> Falls nicht, empfehlen wir Ihnen, zunächst die Artikel [Konzept- und Nutzung Überblick zu Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukommen.

> [!NOTE]
> Wenn Sie nach Informationen über lesbare Streams suchen, probieren Sie stattdessen [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) und [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).

## Einführung eines Beispiels

In unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository finden Sie ein [einfaches Schreibbeispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-writer/)). Dieses nimmt eine gegebene Nachricht und schreibt sie in einen beschreibbaren Stream, zeigt jedes Datenstück in der Benutzeroberfläche an, während es in den Stream geschrieben wird, und zeigt auch die gesamte Nachricht in der Benutzeroberfläche an, wenn das Schreiben abgeschlossen ist.

## Wie beschreibbare Streams funktionieren

Werfen wir einen Blick darauf, wie die Funktionalität von beschreibbaren Streams in unserem Demo funktioniert.

### Konstruktion eines beschreibbaren Streams

Um einen beschreibbaren Stream zu erstellen, verwenden wir den {{domxref("WritableStream.WritableStream","WritableStream()")}}-Konstruktor; die Syntax sieht zuerst komplex aus, ist aber eigentlich nicht so schwierig.

Das Syntax-Gerüst sieht folgendermaßen aus:

```js
const stream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {},
    close(controller) {},
    abort(reason) {},
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

Der Konstruktor nimmt zwei Objekte als Parameter entgegen. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript von dem zugrunde liegenden Senke, in den die Daten geschrieben werden. Das zweite Objekt ist optional und ermöglicht Ihnen, eine [benutzerdefinierte Queueing-Strategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream festzulegen, die in Form einer Instanz von {{domxref("ByteLengthQueuingStrategy")}} oder {{domxref("CountQueuingStrategy")}} vorliegt.

Das erste Objekt kann bis zu vier Mitglieder enthalten, die alle optional sind:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der {{domxref("WritableStream")}} konstruiert wurde. Innerhalb dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität bereitstellt, z.B. Zugriff auf die zugrunde liegende Senke.
2. `write(chunk,controller)` — Eine Methode, die wiederholt aufgerufen wird, jedes Mal, wenn ein neues Datenstück bereit ist, in die zugrunde liegende Senke geschrieben zu werden (angegeben im `chunk`-Parameter).
3. `close(controller)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass das Schreiben von Datenstücken in den Stream beendet ist. Sie sollte tun, was nötig ist, um das Schreiben in die zugrunde liegende Senke abzuschließen und den Zugriff darauf freizugeben.
4. `abort(reason)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen fehlerhaften Zustand versetzen möchte.

Der Aufruf des Konstruktors in unserem Beispiel sieht so aus:

```js
const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        listItem.textContent = `Chunk decoded: ${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.error("Sink error:", err);
    },
  },
  queuingStrategy,
);
```

- Die `write()`-Methode enthält ein Versprechen, das Code enthält, der jedes geschriebene Datenstück in ein Format decodiert, das auf die Benutzeroberfläche geschrieben werden kann. Dies wird aufgerufen, wenn jedes Datenstück tatsächlich geschrieben wird (siehe nächsten Abschnitt).
- Die `close()`-Methode wird automatisch aufgerufen, wenn das Schreiben abgeschlossen ist — sie druckt das gesamte decodierte Ergebnis in einem String auf die Benutzeroberfläche.
- Die `abort()`-Methode gibt einen Fehler in der Konsole aus, wenn der Stream abgebrochen wird.

### Schreiben

Um tatsächlich Inhalte in den Stream zu schreiben, rufen wir die Funktion `sendMessage()` auf, indem wir ihr eine Nachricht übergeben, die geschrieben werden soll, und den Stream, in den geschrieben werden soll:

```js
sendMessage("Hello, world.", writableStream);
```

Die `sendMessage()`-Definition sieht folgendermaßen aus:

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => console.log("Chunk written to sink."))
      .catch((err) => console.error("Chunk error:", err));
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => defaultWriter.close())
    .then(() => console.log("All chunks written"))
    .catch((err) => console.error("Stream error:", err));
}
```

Hier erstellen wir also einen Writer, um die Datenstücke mit {{domxref("WritableStream.getWriter()")}} in den Stream zu schreiben. Dies erzeugt eine Instanz von {{domxref("WritableStreamDefaultWriter")}}.

Wir erstellen auch eine neue Instanz von {{domxref("TextEncoder")}} mit dem entsprechenden Konstruktor, um die Nachricht in Datenstücke zu kodieren, die in den Stream eingegeben werden sollen.

Mit den kodierten Datenstücken rufen wir dann [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) auf dem resultierenden Array auf. Innerhalb dieses Blocks verwenden wir {{domxref("WritableStreamDefaultWriter.ready")}}, um zu prüfen, ob der Writer bereit ist, ein weiteres Datenstück geschrieben zu bekommen. `ready` gibt ein Versprechen zurück, das erfüllt wird, wenn dies der Fall ist. Innerhalb dessen rufen wir {{domxref("WritableStreamDefaultWriter.write()")}} auf, um das Datenstück tatsächlich in den Stream zu schreiben. Dies löst auch die `write()`-Methode aus, die im `WritableStream()`-Konstruktor angegeben ist, wie oben diskutiert.

Nachdem alle Datenstücke geschrieben wurden, führen wir erneut die `ready`-Prüfung durch, um zu prüfen, ob das letzte Datenstück vollständig geschrieben wurde und die gesamte Arbeit abgeschlossen ist. Wenn diese `ready`-Prüfung erfüllt ist, rufen wir {{domxref("WritableStreamDefaultWriter.close()")}} auf, um den Stream zu schließen. Dies löst auch die `close()`-Methode aus, die im `WritableStream()`-Konstruktor angegeben ist, wie oben diskutiert.

### Controller

Wie Sie beim Studieren des `WritableStream()`-Syntax-Gerüsts bemerkt haben werden, können die Methoden `start()`, `write()` und `close()` optional einen `controller`-Parameter übergeben bekommen. Dieser enthält eine Instanz der {{domxref("WritableStreamDefaultController")}}-Schnittstelle, die vom Entwickler verwendet werden kann, um den Stream weiter zu steuern, wie nötig.

Derzeit ist nur eine Methode darauf verfügbar — {{domxref("WritableStreamDefaultController.error()")}}, die, wenn sie aufgerufen wird, zukünftige Interaktionen mit dem Stream fehlerhaft macht. Dies ist nützlich, wenn ein anderer Teil einer App schief geht und Sie den Fehler an den Stream weiterleiten möchten, damit das gesamte System sauber fehlschlägt, anstatt das Risiko einzugehen, dass Müll stillschweigend in den Stream geschrieben wird (oder etwas ähnlich Schlechtes).

### Schließen und Abbrechen

Wie oben erwähnt, rufen wir die `close()`-Methode auf, wenn das Schreiben abgeschlossen ist, was die `close()`-Methode auslöst, die im `WritableStream()`-Konstruktor angegeben ist.

Wir könnten den Stream auch durch den Aufruf von {{domxref("WritableStreamDefaultWriter.abort()")}} abbrechen.

Der Unterschied besteht darin, dass alle zuvor in die Warteschlange gestellten Datenstücke bei Aufruf von close geschrieben und abgeschlossen werden, bevor der Stream geschlossen wird.

Wenn abort aufgerufen wird, werden alle zuvor in die Warteschlange gestellten Datenstücke sofort verworfen und der Stream wird in einen fehlerhaften Zustand versetzt. Dies löst auch eine in dem `WritableStream()`-Konstruktor angegebene `abort()`-Methode aus.
