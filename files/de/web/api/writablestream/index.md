---
title: WritableStream
slug: Web/API/WritableStream
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStream`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) bietet eine standardisierte Abstraktion zum Schreiben von Streaming-Daten an ein Ziel, bekannt als Sink. Dieses Objekt verfügt über integrierten Gegendruck und Warteschlangen.

`WritableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- {{domxref("WritableStream.WritableStream", "WritableStream()")}}
  - : Erstellt ein neues `WritableStream`-Objekt.

## Instanz-Eigenschaften

- {{domxref("WritableStream.locked")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das `WritableStream` an einen Writer gesperrt ist.

## Instanz-Methoden

- {{domxref("WritableStream.abort()")}}
  - : Bricht den Stream ab, signalisiert, dass der Produzent nicht länger erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle anstehenden Schreibvorgänge verworfen werden.
- {{domxref("WritableStream.close()")}}
  - : Schließt den Stream.
- {{domxref("WritableStream.getWriter()")}}
  - : Gibt eine neue Instanz von {{domxref("WritableStreamDefaultWriter")}} zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Writer erworben werden, bis dieser freigegeben wird.

## Beispiele

Das folgende Beispiel illustriert mehrere Funktionen dieses Interfaces. Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer API-bereitgestellten Warteschlangenstrategie. Anschließend wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und einen String übergibt. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von {{domxref("WritableStreamDefaultWriter")}} zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jedes Stück des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechen zurück, die verarbeitet werden, um mit dem Erfolg oder Misserfolg von Stücken und Streams umzugehen.

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

Sie können den vollständigen Code in unserem [Einfaches Schreibbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/) finden.

### Gegendruck

Aufgrund der Art und Weise, wie [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) in der API unterstützt wird, kann seine Implementierung im Code weniger offensichtlich sein. Um zu sehen, wie Gegendruck implementiert ist, suchen Sie nach drei Dingen:

- Die `highWaterMark`-Eigenschaft, die beim Erstellen der Zählstrategie mit `new CountQueuingStrategy` gesetzt wird, legt die maximale Datenmenge fest, die die `WritableStream`-Instanz in einem einzelnen `write()`-Vorgang verarbeiten kann. In diesem Beispiel ist dies die maximale Datenmenge, die an `defaultWriter.write()` in der Funktion `sendMessage` gesendet werden kann.
- Die Eigenschaft `defaultWriter.ready` gibt ein Versprechen zurück, das sich auflöst, wenn das Sink (die erste Eigenschaft des `WritableStream`-Konstruktors) das Schreiben von Daten abgeschlossen hat. Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel gezeigt. Ein zu frühes Aufrufen von `close()` kann verhindern, dass Daten geschrieben werden. Aus diesem Grund ruft das Beispiel `defaultWriter.ready` zweimal auf.
- Das {{jsxref("Promise")}}, das durch die `write()`-Methode des Sink zurückgegeben wird, teilt dem `WritableStream` und seinem Writer mit, wann `defaultWriter.ready` aufgelöst werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transform-Streams.
