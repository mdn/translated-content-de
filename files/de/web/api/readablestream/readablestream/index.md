---
title: "ReadableStream: ReadableStream() Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: a55af8aa38f31f8b687ab627e0d47ed3268b1f69
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`** Konstruktor erstellt und gibt ein lesbares Stream-Objekt aus den gegebenen Handlern zurück.

Bitte beachten Sie, dass obwohl alle Parameter technisch optional sind, das Weglassen der `underlyingSource` zu einem Stream führt, der keine Quelle hat und nicht gelesen werden kann (Leser geben ein Versprechen zurück, das nie erfüllt wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}
  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die erstellte Stream-Instanz verhalten wird.
    `underlyingSource` kann folgendes enthalten:
    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die sofort aufgerufen wird, wenn das Objekt erstellt wird. Der Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff auf die Stream-Quelle zu erhalten und alles andere zu tun, was erforderlich ist, um die Stream-Funktionalität einzurichten. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den Stream während der Einrichtung zu steuern.
    - `pull` (controller) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird wiederholt aufgerufen, wenn die interne Warteschlange des Streams von Chunks nicht voll ist, bis sie ihren High-Water-Mark erreicht. Wenn `pull()` ein Versprechen zurückgibt, wird es nicht erneut aufgerufen, bis dieses Versprechen erfüllt ist; wenn das Versprechen abgelehnt wird, wird der Stream fehlerhaft. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den Stream zu steuern, während weitere Chunks abgerufen werden. Diese Funktion wird erst aufgerufen, wenn `start()` erfolgreich abgeschlossen wurde. Zusätzlich wird sie nur wiederholt aufgerufen, wenn sie mindestens einen Chunk einreiht oder eine BYOB-Anforderung erfüllt; eine `pull()`-Implementierung ohne Operation wird nicht kontinuierlich aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles tun, was notwendig ist, um den Zugriff auf die Stream-Quelle freizugeben. Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `reason`-Parameter enthält eine Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft steuert, mit welcher Art von lesbarem Stream gearbeitet wird. Wenn es mit einem Wert `"bytes"` enthalten ist, wird das übergebene Controller-Objekt ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) sein, der in der Lage ist, einen BYOB (bring your own buffer) / Byte-Stream zu handhaben. Wenn es nicht enthalten ist, wird der übergebene Controller ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) sein.
    - `autoAllocateChunkSize` {{optional_inline}}
      - : Für Byte-Streams kann der Entwickler `autoAllocateChunkSize` mit einem positiven Integer-Wert setzen, um die Auto-Allokationsfunktion des Streams zu aktivieren. Ist dies eingestellt, wird die Stream-Implementierung automatisch einen Ansichts-Puffer der angegebenen Größe in [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) zuweisen, wenn erforderlich.

        Dies muss eingestellt werden, um Zero-Copy-Transfers mit einem Standard-[`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zu verwenden. Wenn dies nicht eingestellt ist, wird ein Standard-Reader weiterhin Daten streamen, aber [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) wird immer `null` sein und Übertragungen an den Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}
  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei Parameter an:
    - `highWaterMark`
      - : Ein nicht-negativer Integer — dies definiert die Gesamtgröße aller Chunks, die in der internen Warteschlange enthalten sein können, bevor Backpressure angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält — diese gibt die Größe an, die für jeden Chunk in Bytes verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` angegeben ist, entspricht der Standardwert einer `CountQueuingStrategy` mit einem High-Water-Mark von
    >
    > 1.

### Rückgabewert

Eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der übergebene Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mit einem Konstruktor erstellt (sehen Sie sich unser [einfaches Zufallsstrombeispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code an). Die `start()`-Funktion erzeugt jede Sekunde eine zufällige Textzeichenfolge und reiht sie in den Stream ein. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Erzeugung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Taste gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen und eine weitere Funktion wird ausgeführt, die die Daten aus dem Stream zurückliest.

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
