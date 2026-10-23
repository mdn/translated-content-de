---
title: "WritableStream: WritableStream()-Konstruktor"
short-title: WritableStream()
slug: Web/API/WritableStream/WritableStream
l10n:
  sourceCommit: 2610bf04cc058d5ea2432012e6ade57394d9258c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`WritableStream()`**-Konstruktor erstellt eine neue Instanz des [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekts.

## Syntax

```js-nolint
new WritableStream(underlyingSink)
new WritableStream(underlyingSink, queuingStrategy)
```

### Parameter

- `underlyingSink` {{optional_inline}}
  - : Ein Objekt mit Methoden und Eigenschaften, die das Verhalten der erstellten Stream-Instanz festlegen.
    Der Parameter `controller`, der an die Methoden `start()` und `write()` dieses Objekts übergeben wird, ist ein [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController), der Signale für Abbruch und Fehler bereitstellt.
    `underlyingSink` kann Folgendes enthalten:
    - `start(controller)` {{optional_inline}}
      - : Diese Methode wird unmittelbar nach der Erstellung des Objekts aufgerufen.
        Ihr Inhalt wird vom Entwickler festgelegt und sollte den Zugriff auf die zugrunde liegende Senke ermöglichen. Wenn dieser Vorgang asynchron abläuft, kann die Methode ein Promise zurückgeben, um Erfolg oder Fehlschlag zu signalisieren.
    - `write(chunk, controller)` {{optional_inline}}
      - : Diese ebenfalls vom Entwickler definierte Methode wird aufgerufen, wenn ein neues Datenstück (im Parameter `chunk` angegeben) in die zugrunde liegende Senke geschrieben werden kann.
        Sie kann ein Promise zurückgeben, um Erfolg oder Fehlschlag des Schreibvorgangs zu signalisieren.
        Die Methode wird erst aufgerufen, nachdem vorherige Schreibvorgänge erfolgreich abgeschlossen wurden, und niemals, nachdem der Stream geschlossen oder abgebrochen wurde (siehe unten).
    - `close()` {{optional_inline}}
      - : Diese ebenfalls vom Entwickler definierte Methode wird aufgerufen, wenn die Anwendung signalisiert, dass sie keine weiteren Datenstücke in den Stream schreiben wird.
        Sie sollte alles Notwendige tun, um die Schreibvorgänge in die zugrunde liegende Senke abzuschließen und den Zugriff darauf freizugeben.
        Wenn dieser Vorgang asynchron abläuft, kann sie ein Promise zurückgeben, um Erfolg oder Fehlschlag zu signalisieren.
        Die Methode wird erst aufgerufen, nachdem alle eingereihten Schreibvorgänge erfolgreich abgeschlossen wurden.
    - `abort(reason)` {{optional_inline}}
      - : Diese ebenfalls vom Entwickler definierte Methode wird aufgerufen, wenn die Anwendung signalisiert, dass sie den Stream abrupt schließen und in einen Fehlerzustand versetzen möchte.
        Sie kann, ähnlich wie `close()`, belegte Ressourcen freigeben. `abort()` wird jedoch auch aufgerufen, wenn noch Schreibvorgänge in der Warteschlange stehen – die betreffenden Datenstücke werden verworfen.
        Wenn dieser Vorgang asynchron abläuft, kann sie ein Promise zurückgeben, um Erfolg oder Fehlschlag zu signalisieren.
        Der Parameter `reason` enthält eine Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.

- `queuingStrategy` {{optional_inline}}
  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert.
    Es umfasst zwei Angaben:
    - `highWaterMark`
      - : Eine nicht negative Ganzzahl – sie legt fest, wie viele Datenstücke die interne Warteschlange insgesamt enthalten kann, bevor Gegendruck ausgeübt wird.
    - `size(chunk)`
      - : Eine Methode mit dem Parameter `chunk` – sie gibt die für jedes Datenstück zu verwendende Größe in Byte an.

    > [!NOTE]
    > Sie können eine eigene `queuingStrategy` definieren oder als Objektwert eine Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) verwenden.
    > Wenn keine `queuingStrategy` angegeben wird, entspricht der Standard einer `CountQueuingStrategy` mit einem `highWaterMark` von 1\.

### Rückgabewert

Eine Instanz des [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekts.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieser Schnittstelle.
Es zeigt, wie ein `WritableStream` mit einer benutzerdefinierten Senke und einer von der API bereitgestellten Warteschlangenstrategie erstellt wird. Anschließend wird die Funktion `sendMessage()` mit dem neu erstellten Stream und einer Zeichenfolge aufgerufen.
Innerhalb dieser Funktion wird die Methode `getWriter()` des Streams aufgerufen. Sie gibt eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück.
Mit `forEach()` wird jedes Datenstück der Zeichenfolge in den Stream geschrieben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um den Erfolg oder Fehlschlag beim Schreiben der Datenstücke und beim Schließen des Streams zu behandeln.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
}

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
      console.log("Sink error:", err);
    },
  },
  queuingStrategy,
);

sendMessage("Hello, world.", writableStream);
```

Den vollständigen Code finden Sie in unserem [Beispiel für einen einfachen Writer](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Gegendruck

Aufgrund der Art, wie die API Gegendruck unterstützt, ist dessen Umsetzung im Code möglicherweise nicht sofort ersichtlich.
Achten Sie auf drei Dinge, um zu erkennen, wie Gegendruck umgesetzt wird:

- Die Eigenschaft `highWaterMark`, die beim Erstellen der Warteschlangenstrategie mit `new CountQueuingStrategy` festgelegt wird, bestimmt die maximale Datenmenge, die die `WritableStream`-Instanz in einem einzelnen `write()`-Vorgang verarbeitet.
  In diesem Beispiel ist das die maximale Datenmenge, die in der Funktion `sendMessage` an `defaultWriter.write()` übergeben werden kann.
- Die Eigenschaft `defaultWriter.ready` gibt ein Promise zurück, das erfüllt wird, wenn die Senke (die erste Eigenschaft des `WritableStream`-Konstruktors) das Schreiben der Daten abgeschlossen hat.
  Die Datenquelle kann dann entweder mit `defaultWriter.write()` weitere Daten schreiben oder, wie im obigen Beispiel gezeigt, `defaultWriter.close()` aufrufen.
  Wird `close()` zu früh aufgerufen, kann dies verhindern, dass Daten geschrieben werden.
  Deshalb greift das Beispiel zweimal auf `defaultWriter.ready` zu.
- Das von der `write()`-Methode der Senke zurückgegebene {{jsxref("Promise")}} teilt dem `WritableStream` und seinem Writer mit, wann `defaultWriter.ready` erfüllt werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
