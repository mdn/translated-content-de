---
title: "WritableStream: WritableStream() Konstruktor"
short-title: WritableStream()
slug: Web/API/WritableStream/WritableStream
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`WritableStream()`**-Konstruktor erzeugt eine neue [`WritableStream`](/de/docs/Web/API/WritableStream)-Objektinstanz.

## Syntax

```js-nolint
new WritableStream(underlyingSink)
new WritableStream(underlyingSink, queuingStrategy)
```

### Parameter

- `underlyingSink` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die das Verhalten der konstruierten Stream-Instanz definieren.
    Der an die Methoden dieses Objekts übergebene `controller`-Parameter ist ein [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController), der Abbruch- und Fehlersignale bereitstellt.
    `underlyingSink` kann Folgendes enthalten:

    - `start(controller)` {{optional_inline}}
      - : Dies ist eine Methode, die unmittelbar nach der Konstruktion des Objekts aufgerufen wird.
        Der Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff auf das zugrunde liegende Ziel zu erhalten. Wenn dieser Prozess asynchron durchgeführt wird, kann er ein Promise zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
    - `write(chunk, controller)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn ein neuer Datenblock (im `chunk`-Parameter angegeben) bereit ist, in das zugrunde liegende Ziel geschrieben zu werden.
        Sie kann ein Promise zurückgeben, um Erfolg oder Misserfolg des Schreibvorgangs zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem vorherige Schreibvorgänge erfolgreich waren und niemals, nachdem der Stream geschlossen oder abgebrochen wurde (siehe unten).
    - `close(controller)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die Anwendung signalisiert, dass sie das Schreiben von Datenblöcken in den Stream beendet hat.
        Der Inhalt sollte alles Notwendige tun, um die Schreibvorgänge in das zugrunde liegende Ziel abzuschließen und den Zugriff darauf freizugeben.
        Wenn dieser Prozess asynchron ist, kann er ein Promise zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem alle angestauten Schreibvorgänge erfolgreich waren.
    - `abort(reason)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die Anwendung signalisiert, dass sie den Stream abrupt schließen und in einen Fehlerzustand versetzen möchte.
        Sie kann, ähnlich wie `close()`, alle gehaltenen Ressourcen aufräumen, aber `abort()` wird auch aufgerufen, wenn Schreibvorgänge noch angestaut sind — diese Datenblöcke werden verworfen.
        Wenn dieser Prozess asynchron ist, kann er ein Promise zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Der `reason`-Parameter enthält eine Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert.
    Dies nimmt zwei Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl — dies definiert die Gesamtanzahl an Datenblöcken, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode mit einem Parameter `chunk` — dies gibt die Größe an, die für jeden Block in Bytes zu verwenden ist.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte `queuingStrategy` definieren oder eine Instanz der [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) für diesen Objektwert verwenden.
    > Wenn keine `queuingStrategy` angegeben ist, wird standardmäßig dieselbe wie bei `CountQueuingStrategy` mit einer hohen Wasserlinie von 1 verwendet.

### Rückgabewert

Eine Instanz des [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekts.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieser Schnittstelle.
Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer API-bereitgestellten Warteschlangenstrategie. Anschließend wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und eine Zeichenfolge übergibt.
Innerhalb dieser Funktion wird die Methode `getWriter()` des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt.
Ein `forEach()`-Aufruf wird verwendet, um jeden Block der Zeichenfolge in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um den Erfolg oder Misserfolg von Blöcken und Streams zu behandeln.

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

Sie finden den vollständigen Code in unserem [einfachen Schreiberbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Gegendruck

Aufgrund der Unterstützung von Gegendruck in der API kann seine Implementierung im Code weniger offensichtlich sein.
Um zu sehen, wie Gegendruck implementiert ist, suchen Sie nach drei Dingen.

- Die `highWaterMark`-Eigenschaft, die beim Erstellen der Zählstrategie mit `new CountQueuingStrategy` festgelegt wird, bestimmt die maximale Datenmenge, die die `WritableStream`-Instanz in einem einzigen `write()`-Vorgang verarbeiten wird.
  In diesem Beispiel ist es die maximale Datenmenge, die an `defaultWriter.write()` in der `sendMessage`-Funktion gesendet werden kann.
- Die Eigenschaft `defaultWriter.ready` gibt ein Promise zurück, das aufgelöst wird, wenn das Sink (die erste Eigenschaft des `WritableStream`-Konstruktors) mit dem Schreiben von Daten fertig ist.
  Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel dargestellt.
  Ein zu frühes Aufrufen von `close()` kann verhindern, dass Daten geschrieben werden.
  Aus diesem Grund ruft das Beispiel `defaultWriter.ready` zweimal auf.
- Das von der `write()`-Methode des Sinks zurückgegebene {{jsxref("Promise")}} zeigt dem `WritableStream` und seinem Schreiber an, wann `defaultWriter.ready` aufzulösen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
