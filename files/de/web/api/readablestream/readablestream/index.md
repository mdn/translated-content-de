---
title: "ReadableStream: ReadableStream()-Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`**-Konstruktor erstellt und gibt ein lesbares Stream-Objekt aus den angegebenen Handlern zurück.

Beachten Sie, dass, obwohl alle Parameter technisch optional sind, das Weglassen der `underlyingSource` zu einem Stream führt, der keine Quelle hat und aus dem nicht gelesen werden kann (Reader geben ein Versprechen zurück, das niemals erfüllt wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}
  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie die konstruierte Stream-Instanz sich verhalten wird.
    `underlyingSource` kann Folgendes enthalten:
    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die sofort aufgerufen wird, wenn das Objekt konstruiert wird. Der
        Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff
        auf die Stream-Quelle zu erhalten und alles andere zu tun, was erforderlich ist, um die Stream-Funktionalität einzurichten. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der an diese Methode übergebene `controller`-Parameter ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dieser kann vom Entwickler verwendet werden, um den
        Stream während der Einrichtung zu steuern.
    - `pull` (controller) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird wiederholt aufgerufen, wenn die
        interne Warteschlange des Streams für Datenblöcke nicht voll ist, bis sie ihren hohen Wasserstand erreicht. Wenn `pull()` ein Versprechen zurückgibt, wird es erneut aufgerufen,
        bis dieses Versprechen erfüllt ist; wenn das Versprechen ablehnt, wird der Stream fehlerhaft. Der an diese Methode übergebene `controller`-Parameter ist ein
        [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der
        `type`-Eigenschaft. Dieser kann vom Entwickler verwendet werden, um den
        Stream zu steuern, wenn weitere Datenblöcke abgerufen werden. Diese Funktion wird erst aufgerufen, wenn `start()` erfolgreich abgeschlossen wurde. Darüber hinaus wird sie nur wiederholt aufgerufen, wenn mindestens ein Datenblock in die Warteschlange gestellt oder eine BYOB-Anfrage erfüllt wird; eine `pull()`-Implementierung ohne Wirkung wird nicht kontinuierlich aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese Methode, ebenfalls vom Entwickler definiert, wird aufgerufen, wenn die App signalisiert,
        dass der Stream abgebrochen werden soll (z. B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)
        aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die Stream-Quelle freizugeben. Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `reason`-Parameter enthält eine
        Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft steuert, mit welcher Art von lesbarem Stream gearbeitet wird. Wenn sie
        mit einem Wert auf `"bytes"` gesetzt wird, ist das übergebene Controller-Objekt ein
        [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), der in der Lage ist, mit BYOB
        (bring your own buffer)/Byte-Stream umzugehen. Wenn er nicht enthalten ist, ist der übergebene Controller
        ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController).
    - `autoAllocateChunkSize` {{optional_inline}}
      - : Für Byte-Streams kann der Entwickler `autoAllocateChunkSize` mit einem positiven ganzzahligen Wert festlegen, um die Auto-Zuweisungsfunktion des Streams zu aktivieren.
        Damit wird der Stream-Implementierung automatisch ein Ansichts-Puffer der angegebenen Größe in [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) zugewiesen, wenn erforderlich.

        Dies muss gesetzt werden, um Zero-Copy-Übertragungen mit einem Standard [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zu verwenden.
        Wenn nicht gesetzt, überträgt ein Standardleser dennoch Daten, aber [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) bleibt immer `null` und Übertragungen an den Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}
  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter:
    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl — dies definiert die Gesamtgröße aller Datenblöcke, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält — dies gibt die Größe an,
        die für jeden Datenblock, in Bytes, verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` bereitgestellt wird, ist der Standardwert
    > derselbe wie bei einer `CountQueuingStrategy` mit einem hohen Wasserstand von
    > 1\.

### Rückgabewert

Eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn der angegebene Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` unter Verwendung
eines Konstruktors erstellt (siehe unser [Einfaches Zufallsstream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert
jede Sekunde eine zufällige Zeichenkette von Text und stellt sie in die Warteschlange des Streams. Eine
`cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn
[`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mit
[`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen und eine andere Funktion wird ausgeführt,
die die Daten aus dem Stream liest.

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
