---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Wenn Sie das {{HtmlElement("canvas")}}-Element oder die [Canvas-API](/de/docs/Web/API/Canvas_API) verwenden, erfolgen Rendering, Animationen und Benutzerinteraktionen normalerweise im Hauptausführungsthread einer Webanwendung. Die Berechnungen im Zusammenhang mit Canvas-Animationen und -Rendering können erhebliche Auswirkungen auf die Anwendungsleistung haben.

Das **`OffscreenCanvas`**-Interface bietet ein Canvas, das außerhalb des Bildschirms gerendert werden kann und das DOM von der Canvas-API entkoppelt, sodass das {{HtmlElement("canvas")}}-Element nicht mehr vollständig vom DOM abhängig ist. Rendering-Operationen können auch im Kontext eines [Workers](/de/docs/Web/API/Web_Workers_API) ausgeführt werden, sodass einige Aufgaben in einem separaten Thread ausgeführt werden können, um schwere Arbeiten im Hauptthread zu vermeiden.

`OffscreenCanvas` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Konstruktoren

- [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas)
  - : `OffscreenCanvas`-Konstruktor. Erstellt ein neues `OffscreenCanvas`-Objekt.

## Instanz-Eigenschaften

- [`OffscreenCanvas.height`](/de/docs/Web/API/OffscreenCanvas/height)
  - : Die Höhe des Offscreen-Canvas.
- [`OffscreenCanvas.width`](/de/docs/Web/API/OffscreenCanvas/width)
  - : Die Breite des Offscreen-Canvas.

## Instanz-Methoden

- [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)
  - : Gibt einen Rendering-Kontext für das Offscreen-Canvas zurück.
- [`OffscreenCanvas.convertToBlob()`](/de/docs/Web/API/OffscreenCanvas/convertToBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt.
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
  - : Erstellt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Weitere Informationen zur Verwaltung dieses [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) finden Sie in der Referenz.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten [`EventTarget`](/de/docs/Web/API/EventTarget)._

Diese Ereignisse können entweder mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces überwacht werden.

- [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
  - : Wird ausgelöst, wenn der Browser feststellt, dass ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext wiederherstellt.

## Beispiele

### Synchrones Anzeigen von Frames, die von einem `OffscreenCanvas` erzeugt wurden

Eine Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, einen Rendering-Kontext zu nutzen, der von einem `OffscreenCanvas`-Objekt erhalten wurde, um neue Frames zu erzeugen. Sobald ein neuer Frame in diesem Kontext fertig gerendert wurde, kann die Methode [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) aufgerufen werden, um das zuletzt gerenderte Bild zu speichern. Diese Methode gibt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt zurück, das in verschiedenen Web-APIs und auch in einem zweiten Canvas ohne Erstellen einer Transferkopie verwendet werden kann.

Um das `ImageBitmap` anzuzeigen, können Sie einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)-Kontext verwenden, der durch Aufrufen von `canvas.getContext("bitmaprenderer")` auf einem (sichtbaren) Canvas-Element erstellt werden kann. Dieser Kontext bietet nur Funktionalität, um den Inhalt des Canvas mit dem angegebenen `ImageBitmap` zu ersetzen. Ein Aufruf von [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) mit dem zuvor gerenderten und gespeicherten `ImageBitmap` vom OffscreenCanvas wird das `ImageBitmap` auf dem Canvas anzeigen und dessen Eigentum auf das Canvas übertragen. Ein einzelnes `OffscreenCanvas` kann Frames in eine beliebige Anzahl anderer `ImageBitmapRenderingContext`-Objekte übertragen.

Gegeben diese zwei {{HTMLElement("canvas")}}-Elemente

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

wird der folgende Code das Rendering mit `OffscreenCanvas` wie oben beschrieben bereitstellen.

```js
const one = document.getElementById("one").getContext("bitmaprenderer");
const two = document.getElementById("two").getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing for the first canvas using the gl context
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// Perform some more drawing for the second canvas
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### Asynchrones Anzeigen von Frames, die von einem `OffscreenCanvas` erzeugt wurden

Eine andere Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, [`transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) auf einem {{HTMLElement("canvas")}}-Element aufzurufen, entweder in einem [Worker](/de/docs/Web/API/Web_Workers_API) oder im Hauptthread, das ein `OffscreenCanvas`-Objekt von einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt vom Hauptthread zurückgibt. Das Aufrufen von [`getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird dann einen Rendering-Kontext von diesem `OffscreenCanvas` erhalten.

Das `main.js`-Skript (Hauptthread) kann so aussehen:

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Während das `offscreencanvas.js`-Skript (Worker-Thread) so aussehen kann:

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");
  // Perform some drawing using the gl context
};
```

Es ist auch möglich, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) in Workern zu verwenden:

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // Perform some drawing using the gl context
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

Für ein vollständiges Beispiel, siehe den [OffscreenCanvas-Beispielcode](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) auf GitHub oder führen Sie das [OffscreenCanvas-Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)
- [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)
- [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) (2016)
