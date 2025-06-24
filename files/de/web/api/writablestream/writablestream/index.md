---
title: "WritableStream: WritableStream() Konstruktor"
short-title: WritableStream()
slug: Web/API/WritableStream/WritableStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`WritableStream()`** Konstruktor erstellt eine neue Instanz des [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekts.

## Syntax

```js-nolint
new WritableStream(underlyingSink)
new WritableStream(underlyingSink, queuingStrategy)
```

### Parameter

- `underlyingSink` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die erstellte Stream-Instanz verhalten wird.
    Der `controller`-Parameter, der an die Methoden dieses Objekts übergeben wird, ist ein [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController), der Abbruch- und Fehlersignale bereitstellt.
    `underlyingSink` kann Folgendes enthalten:
    - `start(controller)` {{optional_inline}}
      - : Eine Methode, die sofort beim Erstellen des Objekts aufgerufen wird.
        Der Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff auf das zugrunde liegende Ziel zu erhalten. Soll dieser Prozess asynchron durchgeführt werden, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
    - `write(chunk, controller)` {{optional_inline}}
      - : Diese vom Entwickler definierte Methode wird aufgerufen, wenn ein neuer Datenblock (im `chunk`-Parameter angegeben) bereit ist, in das zugrunde liegende Ziel geschrieben zu werden.
        Sie kann ein Versprechen zurückgeben, um Erfolg oder Fehlschlagen des Schreibvorgangs zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem vorherige Schreibvorgänge erfolgreich waren und nie nachdem der Stream geschlossen oder abgebrochen wurde (siehe unten).
    - `close(controller)` {{optional_inline}}
      - : Diese vom Entwickler definierte Methode wird aufgerufen, wenn die App signalisiert, dass sie das Schreiben von Datenblöcken in den Stream beendet hat.
        Der Inhalt sollte alles Notwendige tun, um die Schreibvorgänge im zugrunde liegenden Ziel abzuschließen und den Zugriff darauf freizugeben.
        Falls dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem alle angestauten Schreibvorgänge erfolgreich waren.
    - `abort(reason)` {{optional_inline}}
      - : Diese vom Entwickler definierte Methode wird aufgerufen, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen Fehlerzustand versetzen möchte.
        Sie kann alle gehaltenen Ressourcen bereinigen, ähnlich wie `close()`, aber `abort()` wird auch dann aufgerufen, wenn Schreibvorgänge anstehen — diese Datenblöcke werden verworfen.
        Falls dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Der `reason`-Parameter enthält eine Zeichenkette, die beschreibt, warum der Stream abgebrochen wurde.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert.
    Dies nimmt zwei Parameter auf:

    - `highWaterMark`
      - : Eine nicht-negative Ganzzahl — dies definiert die Gesamtanzahl der Datenblöcke, die in der internen Warteschlange enthalten sein können, bevor Gegenverkehr angewendet wird.
    - `size(chunk)`
      - : Eine Methode mit einem Parameter `chunk` — dies gibt die Größe an, die für jeden Datenblock in Bytes verwendet wird.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte `queuingStrategy` definieren oder eine Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) für diesen Objektwert verwenden.
    > Wenn keine `queuingStrategy` angegeben wird, ist die standardmäßig verwendete dieselbe wie bei einer `CountQueuingStrategy` mit einem High Water Mark von 1\.

### Rückgabewert

Eine Instanz des [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekts.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Merkmale dieser Schnittstelle.
Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Ziel und einer von der API bereitgestellten Warteschlangenstrategie. Anschließend wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und eine Zeichenkette übergibt.
Innerhalb dieser Funktion wird die Methode `getWriter()` des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt.
Ein Aufruf von `forEach()` wird verwendet, um jeden Datenblock der Zeichenkette in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechen zurück, die verarbeitet werden, um Erfolg oder Misserfolg von Datenblöcken und Streams zu behandeln.

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

Den vollständigen Code finden Sie in unserem [einfachen Schreibbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Gegenverkehr

Aufgrund der Unterstützung von Gegenverkehr in der API kann seine Implementierung im Code weniger offensichtlich sein.
Um zu sehen, wie Gegenverkehr implementiert ist, suchen Sie nach drei Dingen.

- Die `highWaterMark`-Eigenschaft, die beim Erstellen der Zählstrategie mit `new CountQueuingStrategy` festgelegt wird, legt die maximale Datenmenge fest, die die `WritableStream`-Instanz in einer einzigen `write()`-Operation verarbeitet.
  In diesem Beispiel ist es die maximale Datenmenge, die an `defaultWriter.write()` in der `sendMessage`-Funktion gesendet werden kann.
- Die `defaultWriter.ready`-Eigenschaft gibt ein Versprechen zurück, das aufgelöst wird, wenn das Ziel (die erste Eigenschaft des `WritableStream`-Konstruktors) die Daten schreibt.
  Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel gezeigt.
  Das zu frühe Aufrufen von `close()` kann verhindern, dass Daten geschrieben werden.
  Aus diesem Grund wird im Beispiel `defaultWriter.ready` zweimal aufgerufen.
- Das {{jsxref("Promise")}}, das von der `write()`-Methode des Ziels zurückgegeben wird, teilt dem `WritableStream` und seinem Writer mit, wann `defaultWriter.ready` aufzulösen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
