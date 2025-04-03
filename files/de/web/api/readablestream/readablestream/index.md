---
title: "ReadableStream: ReadableStream() Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`** Konstruktor erstellt und gibt ein lesbares Stream-Objekt aus den angegebenen Handlern zurück.

Beachten Sie, dass, obwohl alle Parameter technisch optional sind, das Weglassen des `underlyingSource` zu einem Stream führt, der keine Quelle hat und von dem nicht gelesen werden kann (Leser geben ein Versprechen zurück, das nie aufgelöst wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die erstellte Stream-Instanz verhalten wird.
    `underlyingSource` kann Folgendes enthalten:

    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die unmittelbar aufgerufen wird, wenn das Objekt erstellt wird. Der
        Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff
        auf die Stream-Quelle zu erhalten und alles andere zu tun, was erforderlich ist, um die
        Stream-Funktionalität einzurichten. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er ein
        Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `controller`-Parameter, der
        an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream während der Einrichtung zu steuern.
    - `pull` (controller) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird wiederholt aufgerufen, wenn die
        interne Warteschlange des Streams nicht voll ist, bis sie ihren Hochwassermarke erreicht.
        Wenn `pull()` ein Versprechen zurückgibt, wird es nicht erneut aufgerufen,
        bis dieses Versprechen erfüllt ist; wenn das Versprechen abgelehnt wird, wird der Stream
        fehlerhaft. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein
        [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream zu steuern, während mehr Chunks abgerufen werden. Diese Funktion wird erst aufgerufen, wenn `start()`
        erfolgreich abgeschlossen ist. Zusätzlich wird sie nur wiederholt aufgerufen, wenn mindestens ein Chunk in die Warteschlange gestellt wird oder eine BYOB-Anforderung erfüllt wird; eine No-Op-Implementierung von `pull()` wird nicht kontinuierlich aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert,
        dass der Stream abgebrochen werden soll (z.B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)
        aufgerufen wird). Der Inhalt sollte alles tun, was notwendig ist, um den
        Zugriff auf die Stream-Quelle zu beenden. Wenn dieser Prozess asynchron ist, kann er ein
        Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `reason`-Parameter enthält eine
        Zeichenkette, die beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft steuert, mit welchem Typ von lesbarem Stream gearbeitet wird. Wenn
        sie mit einem Wert auf `"bytes"` gesetzt enthalten ist, wird das übergebene Controller-Objekt ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) sein, das mit einem BYOB
        (bring your own buffer)/Byte-Stream arbeiten kann. Wenn sie nicht enthalten ist, wird der übergebene Controller
        ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) sein.
    - `autoAllocateChunkSize` {{optional_inline}}

      - : Für Byte-Streams kann der Entwickler `autoAllocateChunkSize` mit einem positiven Ganzzahlwert setzen, um die Auto-Allocation-Funktion des Streams zu aktivieren.
        Damit wird die Stream-Implementierung automatisch einen Ansichts-Puffer der angegebenen Größe in [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) bei Bedarf zuweisen.

        Dies muss gesetzt werden, um Zero-Copy-Transfers mit einem Standard- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zu aktivieren.
        Wenn nicht gesetzt, wird ein Standardleser weiterhin Daten streamen, aber [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) wird immer `null` sein und Übertragungen an den Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter:

    - `highWaterMark`
      - : Eine nichtnegative Ganzzahl – dies definiert die Gesamtzahl der Chunks, die
        in der internen Warteschlange enthalten sein können, bevor Rückstau angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält – dies gibt die Größe an,
        die für jeden Chunk in Bytes verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` angegeben wird, wird standardmäßig
    > dieselbe wie eine `CountQueuingStrategy` mit einer Hochwassermarke von
    > 1\ verwendet.

### Rückgabewert

Eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe
eines Konstruktors erstellt (siehe unser [einfaches Random-Stream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert alle
Sekunde eine zufällige Zeichenkette und stellt sie in die Stream-Warteschlange. Eine
`cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn
[`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn ein Button gedrückt wird, wird die Generierung gestoppt, der Stream wird geschlossen, indem
[`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) aufgerufen wird, und eine andere Funktion wird ausgeführt,
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
