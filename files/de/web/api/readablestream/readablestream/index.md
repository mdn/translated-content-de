---
title: "ReadableStream: ReadableStream() Konstruktor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStream()`** Konstruktor erstellt und gibt ein lesbares Stream-Objekt aus den angegebenen Handlern zurück.

Beachten Sie, dass zwar alle Parameter technisch optional sind, das Weglassen von `underlyingSource` jedoch zu einem Stream führt, der keine Quelle hat und nicht gelesen werden kann (Leser geben ein Versprechen zurück, das nie erfüllt wird).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameter

- `underlyingSource` {{optional_inline}}

  - : Ein Objekt, das Methoden und Eigenschaften enthält, die definieren, wie sich die konstruierte Stream-Instanz verhalten wird.
    `underlyingSource` kann Folgendes enthalten:

    - `start` (controller) {{optional_inline}}
      - : Dies ist eine Methode, die sofort aufgerufen wird, wenn das Objekt erstellt wird. Der
        Inhalt dieser Methode wird vom Entwickler definiert und sollte darauf abzielen, Zugriff
        auf die Stream-Quelle zu erhalten und alles andere zu tun, was erforderlich ist, um die
        Stream-Funktionalität einzurichten. Wenn dieser Prozess asynchron durchgeführt werden soll, kann er ein
        Versprechen zurückgeben, um Erfolg oder Misserfolg anzuzeigen. Der `controller`-Parameter, der
        an diese Methode übergeben wird, ist ein {{domxref("ReadableStreamDefaultController")}} oder ein
        {{domxref("ReadableByteStreamController")}}, abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream während der Einrichtung zu kontrollieren.
    - `pull` (controller) {{optional_inline}}
      - : Diese vom Entwickler definierte Methode wird wiederholt aufgerufen, wenn die
        interne Warteschlange des Streams nicht voll ist, bis sie ihre Hochwassermarke erreicht.
        Wenn `pull()` ein Versprechen zurückgibt, wird es nicht erneut aufgerufen,
        bis dieses Versprechen erfüllt ist; wenn das Versprechen abgelehnt wird, wird der Stream
        fehlerhaft. Der `controller`-Parameter, der an diese Methode übergeben wird, ist ein
        {{domxref("ReadableStreamDefaultController")}} oder ein
        {{domxref("ReadableByteStreamController")}}, abhängig vom Wert der
        `type`-Eigenschaft. Dies kann vom Entwickler verwendet werden, um den
        Stream zu kontrollieren, während mehr Chunks abgerufen werden. Diese Funktion wird erst aufgerufen, nachdem `start()`
        erfolgreich abgeschlossen ist. Zusätzlich wird sie nur dann wiederholt aufgerufen, wenn
        sie mindestens einen Chunk einreiht oder eine BYOB-Anforderung erfüllt; eine no-op `pull()`-
        Implementierung wird nicht fortwährend aufgerufen.
    - `cancel` (reason) {{optional_inline}}
      - : Diese ebenfalls vom Entwickler definierte Methode wird aufgerufen, wenn die App signalisiert,
        dass der Stream abgebrochen werden soll (z.B. wenn {{domxref("ReadableStream.cancel()")}}
        aufgerufen wird). Der Inhalt sollte alles Notwendige tun, um den Zugriff auf die
        Stream-Quelle freizugeben. Wenn dieser Prozess asynchron ist, kann er ein Versprechen zurückgeben,
        um Erfolg oder Misserfolg anzuzeigen. Der `reason`-Parameter enthält eine
        Zeichenfolge, die beschreibt, warum der Stream abgebrochen wurde.
    - `type` {{optional_inline}}
      - : Diese Eigenschaft bestimmt, mit welcher Art von lesbarem Stream umgegangen wird. Wenn sie
        mit einem Wert auf `"bytes"` gesetzt ist, ist das übergebene Controller-Objekt
        ein {{domxref("ReadableByteStreamController")}}, das einen BYOB
        (bring your own buffer)/Byte-Stream verarbeiten kann. Wenn es nicht eingeschlossen ist, wird der übergebene Controller
        ein {{domxref("ReadableStreamDefaultController")}} sein.
    - `autoAllocateChunkSize` {{optional_inline}}

      - : Für Byte-Streams kann der Entwickler `autoAllocateChunkSize` mit einem positiven ganzzahligen Wert festlegen, um die automatische Zuweisungsfunktion des Streams zu aktivieren.
        Ist dies gesetzt, wird die Stream-Implementierung automatisch einen View-Puffer der angegebenen Größe in {{domxref("ReadableByteStreamController.byobRequest")}} bei Bedarf zuweisen.

        Dies muss eingestellt werden, um Zero-Copy-Übertragungen mit einem standardmäßigen {{domxref("ReadableStreamDefaultReader")}} zu ermöglichen.
        Ist dies nicht festgelegt, wird ein Standardleser weiterhin Daten streamen, aber {{domxref("ReadableByteStreamController.byobRequest")}} wird immer `null` sein und Übertragungen an den Verbraucher müssen über die internen Warteschlangen des Streams erfolgen.

- `queuingStrategy` {{optional_inline}}

  - : Ein Objekt, das optional eine Warteschlangenstrategie für den Stream definiert. Dies nimmt zwei
    Parameter an:

    - `highWaterMark`
      - : Eine nicht-negative ganze Zahl – diese definiert die Gesamtanzahl der Chunks, die in der
        internen Warteschlange enthalten sein können, bevor ein Gegendruck angewendet wird.
    - `size(chunk)`
      - : Eine Methode mit einem Parameter `chunk` – dies gibt die zu
        verwendende Größe für jeden Chunk in Bytes an.

    > [!NOTE]
    > Sie könnten Ihre eigene benutzerdefinierte
    > `queuingStrategy` definieren oder eine Instanz von
    > {{domxref("ByteLengthQueuingStrategy")}} oder {{domxref("CountQueuingStrategy")}}
    > für diesen Objektwert verwenden. Wenn keine `queuingStrategy` angegeben ist, wird standardmäßig die gleiche Strategie verwendet wie eine `CountQueuingStrategy` mit einer Hochwassermarke von
    > 1\.

### Rückgabewert

Eine Instanz des {{domxref("ReadableStream")}}-Objekts.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Typwert weder `"bytes"` noch `undefined` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines
Konstruktors erstellt (siehe unser [Beispiel für einen einfachen Zufalls-Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert eine
zufällige Zeichenfolge von Text jede Sekunde und reiht sie in den Stream ein. Eine
`cancel()`-Funktion ist ebenfalls vorgesehen, um die Generierung zu stoppen, wenn
{{domxref("ReadableStream.cancel()")}} aus irgendeinem Grund aufgerufen wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mit
{{domxref("ReadableStreamDefaultController.close()")}} geschlossen, und eine andere Funktion wird ausgeführt,
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

- {{domxref("ReadableStream")}}
- {{domxref("ReadableByteStreamController")}}
- {{domxref("ReadableStreamDefaultController")}}
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
