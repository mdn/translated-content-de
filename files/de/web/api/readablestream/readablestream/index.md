---
title: "ReadableStream: ReadableStream()-Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`**-Konstruktor erstellt und gibt ein readable stream-Objekt von den angegebenen Handlern zurück.

Beachten Sie, dass alle Parameter technisch optional sind. Wenn `underlyingSource` weggelassen wird, ergibt das einen Stream ohne Quelle, von dem nicht gelesen werden kann (Leser geben ein Versprechen zurück, das niemals erfüllt wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die konstruierte Stream-Instanz verhalten wird. `underlyingSource` kann folgendes enthalten:

    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die sofort beim Erstellen des Objekts aufgerufen wird. Der Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff auf die Stream-Quelle zu erhalten und alles andere zu tun, was für die Einrichtung der Stream-Funktionalität erforderlich ist. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der `type`-Eigenschaft. Dies kann vom Entwickler zur Steuerung des Streams während der Einrichtung verwendet werden.
    - `pull` (controller) {{optional_inline}}
      - : Diese vom Entwickler definierte Methode wird wiederholt aufgerufen, wenn die interne Warteschlange der Stream-Chunks nicht voll ist, bis sie ihre hohe Wassermarke erreicht. Wenn `pull()` ein Versprechen zurückgibt, wird es nicht erneut aufgerufen, bis dieses Versprechen erfüllt ist; wenn das Versprechen abgelehnt wird, wird der Stream fehlerhaft. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) oder ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController), abhängig vom Wert der `type`-Eigenschaft. Dies kann vom Entwickler zur Steuerung des Streams verwendet werden, während mehr Chunks abgerufen werden. Diese Funktion wird erst aufgerufen, wenn `start()` erfolgreich abgeschlossen wurde. Außerdem wird sie nur wiederholt aufgerufen, wenn sie mindestens einen Chunk in die Warteschlange stellt oder eine BYOB-Anfrage erfüllt; eine No-Op-Implementierung von `pull()` wird nicht kontinuierlich aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese vom Entwickler definierte Methode wird aufgerufen, wenn die App signalisiert, dass der Stream abgebrochen werden soll (z. B. wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aufgerufen wird). Der Inhalt sollte alles tun, was nötig ist, um den Zugriff auf die Stream-Quelle freizugeben. Wenn dieser Vorgang asynchron ist, kann er ein Versprechen zurückgeben, um Erfolg oder Misserfolg zu signalisieren. Der `reason`-Parameter enthält einen String, der beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft steuert, mit welcher Art von readable stream gearbeitet wird. Wenn sie mit einem Wert auf `"bytes"` gesetzt ist, wird das übergebene Controller-Objekt ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) sein, das mit einem BYOB- (bring your own buffer) / Byte-Stream umgehen kann. Wenn sie nicht enthalten ist, wird der übergebene Controller ein [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) sein.
    - `autoAllocateChunkSize` {{optional_inline}}

      - : Für Bytestreams kann der Entwickler `autoAllocateChunkSize` mit einem positiven Ganzzahlwert setzen, um die automatische Zuweisungsfunktion des Streams zu aktivieren.
        Hiermit wird die Stream-Implementierung eine Ansichts-Puffer der angegebenen Größe automatisch in [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) erstellen, wenn erforderlich.

        Dies muss gesetzt werden, um Zero-Copy-Übertragungen mit einem Standard-`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zu ermöglichen.
        Wenn nicht gesetzt, wird ein Standardleser weiterhin Daten streamen, aber [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) wird immer `null` sein und Übertragungen an den Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei Parameter:

    - `highWaterMark`
      - : Eine nicht negative ganze Zahl — dies definiert die Gesamtanzahl von Chunks, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode, die einen Parameter `chunk` enthält — dies gibt die Größe an, die für jeden Chunk in Bytes verwendet werden soll.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` bereitgestellt wird, wird die Standardstrategie verwendet, die derselben wie eine `CountQueuingStrategy` mit einer hohen Wassermarke von 1 entspricht.

### Rückgabewert

Eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn der angegebene Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefiniertes `ReadableStream` mithilfe eines Konstruktors erstellt (siehe unser [einfaches Beispiel für einen Zufallsstream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion erzeugt jede Sekunde eine zufällige Textzeichenfolge und stellt sie in die Stream-Warteschlange. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Erzeugung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Schaltfläche gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mithilfe von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine andere Funktion wird ausgeführt, die die Daten aus dem Stream zurückliest.

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
- [Verwendung von readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
