---
title: "WritableStream: WritableStream()-Konstruktor"
short-title: WritableStream()
slug: Web/API/WritableStream/WritableStream
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
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

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die konstruierte Stream-Instanz verhalten wird.
    Der `controller`-Parameter, der an die Methoden dieses Objekts übergeben wird, ist ein [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController), der Abbruch- und Fehlersignalisierung bereitstellt.
    `underlyingSink` kann Folgendes enthalten:

    - `start(controller)` {{optional_inline}}
      - : Dies ist eine Methode, die sofort aufgerufen wird, wenn das Objekt erstellt wird.
        Der Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff auf das zugrunde liegende "Sink" zu erhalten. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
    - `write(chunk, controller)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn ein neues Datenstück (festgelegt im `chunk`-Parameter) bereit ist, in das zugrunde liegende "Sink" geschrieben zu werden.
        Sie kann ein Versprechen zurückgeben, um Erfolg oder Misserfolg des Schreibvorgangs zu signalisieren.
        Diese Methode wird nur nach erfolgreichen vorherigen Schreibvorgängen aufgerufen und niemals, nachdem der Stream geschlossen oder abgebrochen wurde (siehe unten).
    - `close(controller)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert, dass sie das Schreiben von Datenstücken an den Stream abgeschlossen hat.
        Der Inhalt sollte alles Notwendige tun, um das Schreiben in das zugrunde liegende "Sink" abzuschließen und den Zugriff darauf freizugeben.
        Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem alle angestauten Schreibvorgänge erfolgreich abgeschlossen wurden.
    - `abort(reason)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen Fehlerzustand versetzen möchte.
        Sie kann alle gehaltenen Ressourcen freigeben, ähnlich wie `close()`, aber `abort()` wird auch dann aufgerufen, wenn Schreibvorgänge angestaut sind — diese Stücke werden verworfen.
        Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Der `reason`-Parameter enthält eine Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert.
    Dies nimmt zwei Parameter:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl — dies definiert die Gesamtanzahl an Datenstücken, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode mit einem Parameter `chunk` — dies gibt die Größe an, die für jedes Datenstück in Bytes verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte `queuingStrategy` definieren oder eine Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) für diesen Objektwert verwenden.
    > Wenn keine `queuingStrategy` bereitgestellt wird, ist der Standardwert derselbe wie eine `CountQueuingStrategy` mit einem hohen Wasserzeichen von 1\.

### Rückgabewert

Eine Instanz des [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekts.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Merkmale dieser Schnittstelle.
Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer API-bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens `sendMessage()` auf, die den neu erstellten Stream und eine Zeichenfolge übergibt.
Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt.
Ein `forEach()`-Aufruf wird verwendet, um jedes Datenstück der Zeichenfolge in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechen zurück, die verarbeitet werden, um Erfolge oder Misserfolge von Datenstücken und Streams zu behandeln.

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

Sie können den vollständigen Code in unserem [Einfacher Schreiber Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/) finden.

### Gegendruck

Aufgrund der Art und Weise, wie Gegendruck in der API unterstützt wird, kann seine Implementierung im Code weniger offensichtlich sein.
Um zu sehen, wie Gegendruck implementiert ist, suchen Sie nach drei Dingen.

- Die `highWaterMark`-Eigenschaft, die beim Erstellen der Zählstrategie mit `new CountQueuingStrategy` gesetzt wird, legt die maximale Datenmenge fest, die die `WritableStream`-Instanz in einem einzelnen `write()`-Vorgang verarbeiten wird.
  In diesem Beispiel ist es die maximale Datenmenge, die an `defaultWriter.write()` gesendet werden kann, in der `sendMessage`-Funktion.
- Die `defaultWriter.ready`-Eigenschaft gibt ein Versprechen zurück, das aufgelöst wird, wenn das Sink (die erste Eigenschaft des `WritableStream`-Konstruktors) das Schreiben von Daten abgeschlossen hat.
  Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel demonstriert.
  Ein zu frühgerufener Aufruf von `close()` kann verhindern, dass Daten geschrieben werden.
  Aus diesem Grund ruft das Beispiel `defaultWriter.ready` zweimal auf.
- Das {{jsxref("Promise")}}, das von der `write()`-Methode des Sinks zurückgegeben wird, signalisiert dem `WritableStream` und seinem Schreiber, wann `defaultWriter.ready` aufzulösen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
