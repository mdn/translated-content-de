---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Beim Verwenden des {{HtmlElement("canvas")}}-Elements oder der [Canvas API](/de/docs/Web/API/Canvas_API) erfolgen das Rendering, die Animation und die Benutzerinteraktion normalerweise im Hauptausführungsthread einer Webanwendung.
Die Berechnung im Zusammenhang mit Canvas-Animationen und -Rendering kann erhebliche Auswirkungen auf die Anwendungsleistung haben.

Das **`OffscreenCanvas`**-Interface bietet eine Leinwand, die außerhalb des Bildschirms gerendert werden kann und entkoppelt die DOM und die Canvas API, sodass das {{HtmlElement("canvas")}}-Element nicht mehr vollständig vom DOM abhängig ist.
Rendering-Operationen können auch innerhalb eines [Worker](/de/docs/Web/API/Web_Workers_API)-Kontexts ausgeführt werden, sodass einige Aufgaben in einem separaten Thread ausgeführt werden können und arbeitsintensive Prozesse vom Hauptthread ferngehalten werden.

`OffscreenCanvas` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Konstruktoren

- [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas)
  - : `OffscreenCanvas` Konstruktor. Erstellt ein neues `OffscreenCanvas`-Objekt.

## Instanz-Eigenschaften

- [`OffscreenCanvas.height`](/de/docs/Web/API/OffscreenCanvas/height)
  - : Die Höhe des Offscreen-Canvas.
- [`OffscreenCanvas.width`](/de/docs/Web/API/OffscreenCanvas/width)
  - : Die Breite des Offscreen-Canvas.

## Instanz-Methoden

- [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)
  - : Gibt einen Rendering-Kontext für den Offscreen-Canvas zurück.
- [`OffscreenCanvas.convertToBlob()`](/de/docs/Web/API/OffscreenCanvas/convertToBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt.
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
  - : Erstellt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Siehe die Referenz für wichtige Hinweise zur Verwaltung dieses [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
  - : Wird ausgelöst, wenn der Browser einen verlorenen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext erkennt.
- [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser erfolgreich einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext wiederherstellt.

## Beispiele

### Synchrones Anzeigen von Frames, die von einem `OffscreenCanvas` erzeugt wurden

Eine Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, einen Rendering-Kontext zu nutzen, der von einem `OffscreenCanvas`-Objekt erhalten wurde, um neue Frames zu erzeugen. Sobald in diesem Kontext ein neuer Frame fertig gerendert ist, kann die Methode [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) aufgerufen werden, um das zuletzt gerenderte Bild zu speichern. Diese Methode gibt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt zurück, das in verschiedenen Web-APIs und auch in einem zweiten Canvas verwendet werden kann, ohne eine Übertragungskopie zu erstellen.

Um das `ImageBitmap` anzuzeigen, können Sie einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)-Kontext verwenden, der durch den Aufruf `canvas.getContext("bitmaprenderer")` auf einem (sichtbaren) Canvas-Element erstellt werden kann. Dieser Kontext bietet lediglich die Funktionalität, den Inhalt des Canvas mit dem angegebenen `ImageBitmap` zu ersetzen. Ein Aufruf von [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) mit dem zuvor gerenderten und gespeicherten `ImageBitmap` vom OffscreenCanvas zeigt das `ImageBitmap` auf dem Canvas an und überträgt dessen Besitz an das Canvas. Ein einzelnes `OffscreenCanvas` kann Frames in eine beliebige Anzahl anderer `ImageBitmapRenderingContext`-Objekte übertragen.

Gegeben diese zwei {{HtmlElement("canvas")}}-Elemente

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

Eine weitere Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, [`transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) auf einem {{HtmlElement("canvas")}}-Element entweder in einem [Worker](/de/docs/Web/API/Web_Workers_API) oder im Hauptthread aufzurufen, was ein `OffscreenCanvas`-Objekt von einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt des Hauptthreads zurückgibt. Ein Aufruf von [`getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) erhält dann einen Rendering-Kontext von diesem `OffscreenCanvas`.

Das `main.js`-Skript (Hauptthread) könnte so aussehen:

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Während das `offscreencanvas.js`-Skript (Worker-Thread) so aussehen könnte:

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

Für ein vollständiges Beispiel siehe den [OffscreenCanvas-Beispielquellcode](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) auf GitHub oder führen Sie das [OffscreenCanvas-Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/).

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
