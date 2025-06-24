---
title: "ReadableStream: ReadableStream() Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`**-Konstruktor erstellt und gibt ein lesbares Stream-Objekt aus den gegebenen Handlern zurück.

Beachten Sie, dass, obwohl alle Parameter technisch optional sind, das Weglassen des `underlyingSource` zu einem Stream führen wird, der keine Quelle hat und von dem nicht gelesen werden kann (Leser geben ein Versprechen zurück, das niemals aufgelöst wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die konstruierte Stream-Instanz verhalten wird.
    `underlyingSource` kann folgendes enthalten:

    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die sofort aufgerufen wird, wenn das Objekt konstruiert wird. Der
        Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff
        auf die Stream-Quelle zu erhalten und alles Weitere zu tun, was erforderlich ist, um die
        Stream-Funktionalität einzurichten. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er
        ein Versprechen zurückgeben, um Erfolg oder Fehlschlag zu signalisieren. Der Parameter `controller`,
        der an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream während der Einrichtung zu steuern.
    - `pull` (controller) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird wiederholt aufgerufen, wenn die
        interne Warteschlange des Streams von Chunks nicht voll ist, bis sie ihre
        obere Wassergrenze erreicht. Wenn `pull()` ein Versprechen zurückgibt, wird es nicht erneut
        aufgerufen, bis dieses Versprechen erfüllt ist; wenn das Versprechen fehlschlägt, wird der Stream
        fehlerhaft. Der an diese Methode übergebene Parameter `controller` ist ein
        [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream zu steuern, während mehr Chunks abgerufen werden. Diese Funktion wird erst dann aufgerufen, wenn `start()`
        erfolgreich abgeschlossen wurde. Zusätzlich wird sie nur wiederholt aufgerufen, wenn sie
        mindestens einen Chunk in die Warteschlange stellt oder eine BYOB-Anforderung erfüllt; eine No-Op-Implementierung von `pull()`
        wird nicht kontinuierlich aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert,
        dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)
        aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die
        Stream-Quelle freizugeben. Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um
        Erfolg oder Fehlschlag zu signalisieren. Der Parameter `reason` enthält eine
        Zeichenkette, die beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft steuert, mit welchem Typ von lesbarem Stream gearbeitet wird. Wenn sie
        mit einem Wert von `"bytes"` enthalten ist, wird das übergebene Controller-Objekt
        ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) sein, das mit einem BYOB
        (bring your own buffer)/Byte-Stream umgehen kann. Wenn es nicht enthalten ist, wird der übergebene Controller
        ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) sein.
    - `autoAllocateChunkSize` {{optional_inline}}

      - : Für Bytestreams kann der Entwickler `autoAllocateChunkSize` mit einem positiven ganzzahligen Wert setzen, um die automatische Allokationsfunktion des Streams einzuschalten.
        Wenn dies festgelegt ist, wird die Stream-Implementierung automatisch einen Ansichts-Buffer der angegebenen Größe in [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) zuweisen, wenn erforderlich.

        Dies muss gesetzt werden, um Zero-Copy-Transfers mit einem standardmäßigen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zu verwenden.
        Wenn nicht gesetzt, wird ein Standardleser dennoch Daten streamen, aber [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) wird immer `null` sein und die Übertragungen zum Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter:

    - `highWaterMark`
      - : Eine nicht-negative Ganzzahl — dies definiert die Gesamtanzahl von Chunks, die
        in die interne Warteschlange aufgenommen werden können, bevor Gegenstromdruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält — dies gibt die Größe an,
        die für jeden Chunk in Bytes verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` angegeben wird, wird die Standardstrategie
    > verwendet, die der einer `CountQueuingStrategy` mit einem hohen Wasserzeichen von 1 entspricht.

### Rückgabewert

Eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` unter Verwendung eines
Konstruktors erstellt (sehen Sie sich unser [einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code an). Die `start()`-Funktion generiert jede Sekunde eine
Zufallszeichenkette und stellt sie in den Stream ein. Eine
`cancel()`-Funktion wird ebenfalls bereitgestellt, um die Erzeugung zu stoppen, wenn
[`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Taste gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mit
[`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen und eine andere Funktion wird ausgeführt,
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
