---
title: "ReadableStream: ReadableStream() Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`** Konstruktor erstellt und gibt ein lesbares Stream-Objekt aus den angegebenen Handlern zurück.

Beachten Sie, dass zwar alle Parameter technisch optional sind, das Weglassen der `underlyingSource` jedoch zu einem Stream führt, der keine Quelle hat und von dem nicht gelesen werden kann (Leser geben ein Versprechen zurück, das niemals erfüllt wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die erstellte Stream-Instanz verhält.
    `underlyingSource` kann Folgendes enthalten:

    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die sofort beim Erstellen des Objekts aufgerufen wird. Der
        Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff
        auf die Stream-Quelle zu erhalten und alles andere zu tun, was erforderlich ist, um die
        Stream-Funktionalität einzurichten. Wenn dieser Vorgang asynchron erfolgen soll, kann er
        ein Versprechen zurückgeben, um den Erfolg oder das Scheitern anzuzeigen. Der `controller`-Parameter, der
        an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream während der Einrichtung zu kontrollieren.
    - `pull` (controller) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird wiederholt aufgerufen, wenn die
        interne Warteschlange des Streams nicht voll ist, bis sie ihre Schwelle erreicht. Wenn `pull()` ein
        Versprechen zurückgibt, wird es nicht erneut aufgerufen, bis dieses Versprechen erfüllt ist; wenn das Versprechen abgelehnt wird, wird der Stream
        fehlerhaft. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein
        [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream zu kontrollieren, wenn weitere Chunks abgerufen werden. Diese Funktion wird nicht aufgerufen, bis `start()`
        erfolgreich abgeschlossen ist. Außerdem wird sie nur wiederholt aufgerufen, wenn sie mindestens einen Chunk in die Warteschlange stellt oder eine BYOB-Anforderung erfüllt; eine `pull()`-Implementierung ohne Operationen wird nicht kontinuierlich aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert,
        dass der Stream abgebrochen werden soll (z. B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)
        aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die
        Stream-Quelle freizugeben. Wenn dieser Vorgang asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder
        Misserfolg anzuzeigen. Der Parameter `reason` enthält eine
        Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft steuert, um welchen Typ es sich bei dem lesbaren Stream handelt. Wenn es
        mit einem auf `"bytes"` gesetzten Wert enthalten ist, wird das übergebene Controller-Objekt
        ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) sein, das in der Lage ist, einen BYOB
        (bring your own buffer)/Byte-Stream zu verarbeiten. Wenn es nicht enthalten ist, wird der übergebene Controller
        ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) sein.
    - `autoAllocateChunkSize` {{optional_inline}}

      - : Für Byte-Streams kann der Entwickler die `autoAllocateChunkSize` mit einem positiven ganzzahligen Wert festlegen, um die Automatikzuteilungsfunktion des Streams einzuschalten.
        Wenn dies festgelegt ist, weist die Stream-Implementierung automatisch einen Ansichtsbuffer der angegebenen Größe in [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) zu, wenn erforderlich.

        Dies muss aktiviert werden, um Zero-Copy-Transfers mit einem Standard-[`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) verwenden zu können.
        Wenn es nicht festgelegt ist, streamt ein Standardleser dennoch Daten, aber [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) wird immer `null` sein und Übertragungen an den Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl — dies definiert die Gesamtanzahl von Chunks, die
        in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält — dies gibt die Größe an,
        die für jeden Chunk in Bytes verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` vorgegeben ist, ist die
    > verwendete Standardstrategie dieselbe wie bei einer `CountQueuingStrategy` mit einer hohen Schwelle von
    > 1.

### Rückgabewert

Eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der bereitgestellte Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines
Konstruktors erstellt (siehe unser [Einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die Funktion `start()` generiert jede Sekunde eine
zufällige Textzeichenfolge und fügt sie in den Stream ein. Eine
`cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn
[`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird durch
[`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine andere Funktion wird ausgeführt,
die die Daten aus dem Stream zurückliest.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Add the string to the stream
      controller.enqueue(string);

      // show it on the screen
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener("click", () => {
      clearInterval(interval);
      fetchStream();
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
