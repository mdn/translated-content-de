---
title: "WritableStream: WritableStream() Konstruktor"
short-title: WritableStream()
slug: Web/API/WritableStream/WritableStream
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`WritableStream()`** Konstruktor erstellt eine neue Instanz des {{domxref("WritableStream")}}-Objekts.

## Syntax

```js-nolint
new WritableStream(underlyingSink)
new WritableStream(underlyingSink, queuingStrategy)
```

### Parameter

- `underlyingSink` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die erstellte Stream-Instanz verhalten wird.
    Der `controller`-Parameter, der an die Methoden dieses Objekts übergeben wird, ist ein {{domxref("WritableStreamDefaultController")}}, der Abbruch- und Fehler-Signalisierung bereitstellt.
    `underlyingSink` kann Folgendes enthalten:

    - `start(controller)` {{optional_inline}}
      - : Dies ist eine Methode, die sofort aufgerufen wird, wenn das Objekt erstellt wird.
        Der Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff auf das zugrunde liegende Sink zu erhalten. Wenn dieser Prozess asynchron erfolgen soll, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
    - `write(chunk, controller)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn ein neuer Datenblock (im `chunk`-Parameter angegeben) bereit ist, in das zugrunde liegende Sink geschrieben zu werden.
        Es kann ein Versprechen zurückgeben, um den Erfolg oder Misserfolg des Schreibvorgangs zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem vorherige Schreibvorgänge erfolgreich waren und niemals, nachdem der Stream geschlossen oder abgebrochen wurde (siehe unten).
    - `close(controller)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert, dass sie das Schreiben von Datenblöcken in den Stream abgeschlossen hat.
        Der Inhalt sollte alles Notwendige tun, um das Schreiben in das zugrunde liegende Sink abzuschließen und den Zugriff darauf freizugeben.
        Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Diese Methode wird nur aufgerufen, nachdem alle aufgestauten Schreibvorgänge erfolgreich waren.
    - `abort(reason)` {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen Fehlerzustand versetzen möchte.
        Es kann alle gehaltenen Ressourcen bereinigen, ähnlich wie `close()`, aber `abort()` wird auch dann aufgerufen, wenn Schreibvorgänge aufgestaut sind — diese Blöcke werden verworfen.
        Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren.
        Der `reason`-Parameter enthält eine Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert.
    Dieses nimmt zwei Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl — dies definiert die Gesamtzahl der Blöcke, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält — dies gibt die Größe für jeden Block in Bytes an.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte `queuingStrategy` definieren oder eine Instanz von {{domxref("ByteLengthQueuingStrategy")}} oder {{domxref("CountQueuingStrategy")}} für diesen Objektwert verwenden.
    > Wenn keine `queuingStrategy` angegeben wird, wird die gleiche Standardstrategie verwendet, wie bei einer `CountQueuingStrategy` mit einem High-Water-Mark von 1\.

### Rückgabewert

Eine Instanz des {{domxref("WritableStream")}}-Objekts.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieser Schnittstelle.
Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer API-bereitgestellten Wartestrategie. Dann wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und eine Zeichenfolge übergibt.
Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz des {{domxref("WritableStreamDefaultWriter")}} zurückgibt.
Ein `forEach()`-Aufruf wird verwendet, um jeden Block der Zeichenfolge in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechen zurück, die verarbeitet werden, um den Erfolg oder Misserfolg von Blöcken und Streams zu behandeln.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter ist vom Typ WritableStreamDefaultWriter
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
  // Erneutes Aufrufen von ready, um sicherzustellen, dass alle Blöcke geschrieben wurden,
  //   bevor der Writer geschlossen wird.
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
    // Das Sink implementieren
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

Den vollständigen Code finden Sie in unserem [Einfachen Schreibbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Gegendruck

Aufgrund der Art und Weise, wie Gegendruck in der API unterstützt wird, ist seine Implementierung im Code möglicherweise nicht sofort ersichtlich.
Um zu sehen, wie Gegendruck implementiert wird, suchen Sie nach drei Dingen.

- Die `highWaterMark`-Eigenschaft, die bei der Erstellung der Zählstrategie mit `new CountQueuingStrategy` gesetzt wird, setzt die maximale Datenmenge, die die `WritableStream`-Instanz in einem einzelnen `write()`-Vorgang verarbeiten wird.
  In diesem Beispiel ist es die maximale Menge an Daten, die an `defaultWriter.write()` in der `sendMessage`-Funktion gesendet werden kann.
- Die `defaultWriter.ready`-Eigenschaft gibt ein Versprechen zurück, das aufgelöst wird, wenn das Sink (die erste Eigenschaft des `WritableStream`-Konstruktors) mit dem Schreiben von Daten fertig ist.
  Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel dargestellt.
  Zu frühes Aufrufen von `close()` kann verhindern, dass Daten geschrieben werden.
  Deshalb ruft das Beispiel `defaultWriter.ready` zweimal auf.
- Das {{jsxref("Promise")}}, das von der `write()`-Methode des Sinks zurückgegeben wird, teilt dem `WritableStream` und seinem Writer mit, wann `defaultWriter.ready` aufgelöst werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
