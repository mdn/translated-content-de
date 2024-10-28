---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
l10n:
  sourceCommit: 32f1bfc28a0704c9a743bc971df1b2563cc4ccc6
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Bei der Verwendung des {{HtmlElement("canvas")}}-Elements oder der [Canvas API](/de/docs/Web/API/Canvas_API) erfolgen Rendering, Animation und Benutzerinteraktion normalerweise im Hauptausführungsthread einer Webanwendung. Die Berechnung im Zusammenhang mit Canvas-Animationen und Rendering kann erhebliche Auswirkungen auf die Anwendungsleistung haben.

Das **`OffscreenCanvas`**-Interface bietet eine Leinwand, die offscreen gerendert werden kann, und entkoppelt das DOM und die Canvas-API, sodass das {{HtmlElement("canvas")}}-Element nicht mehr vollständig vom DOM abhängig ist. Render-Operationen können auch im Kontext eines [Workers](/de/docs/Web/API/Web_Workers_API) durchgeführt werden, sodass einige Aufgaben in einem separaten Thread ausgeführt werden können, um intensive Arbeit im Hauptthread zu vermeiden.

`OffscreenCanvas` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Konstruktoren

- [`OffscreenCanvas()`](/de/docs/Web/API/OffscreenCanvas/OffscreenCanvas)
  - : `OffscreenCanvas`-Konstruktor. Erstellt ein neues `OffscreenCanvas`-Objekt.

## Instanz-Eigenschaften

- [`OffscreenCanvas.height`](/de/docs/Web/API/OffscreenCanvas/height)
  - : Die Höhe der Offscreen-Leinwand.
- [`OffscreenCanvas.width`](/de/docs/Web/API/OffscreenCanvas/width)
  - : Die Breite der Offscreen-Leinwand.

## Instanz-Methoden

- [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)
  - : Gibt einen Zeichenkontext für die Offscreen-Leinwand zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder die Offscreen-Leinwand bereits auf einen anderen Kontextmodus eingestellt wurde.
- [`OffscreenCanvas.convertToBlob()`](/de/docs/Web/API/OffscreenCanvas/convertToBlob)
  - : Erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt.
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
  - : Erstellt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Siehe die Referenz für wichtige Hinweise zur Verwaltung dieses [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener an die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext erfolgreich wiederherstellt.

## Beispiele

### Synchrone Anzeige von Frames, die von einem `OffscreenCanvas` erzeugt wurden

Eine Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, einen Rendering-Kontext zu verwenden, der von einem `OffscreenCanvas`-Objekt abgerufen wurde, um neue Frames zu erzeugen. Sobald ein neuer Frame in diesem Kontext fertig gerendert wurde, kann die Methode [`transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap) aufgerufen werden, um das zuletzt gerenderte Bild zu speichern. Diese Methode gibt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt zurück, das in verschiedenen Web-APIs und auch in einer zweiten Leinwand ohne Erstellung einer Transferkopie verwendet werden kann.

Um das `ImageBitmap` anzuzeigen, können Sie einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)-Kontext verwenden, der durch Aufrufen von `canvas.getContext("bitmaprenderer")` auf einem (sichtbaren) Canvas-Element erstellt werden kann. Dieser Kontext bietet nur die Möglichkeit, den Inhalt der Leinwand mit dem angegebenen `ImageBitmap` zu ersetzen. Ein Aufruf von [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) mit dem zuvor gerenderten und gespeicherten `ImageBitmap` vom OffscreenCanvas zeigt das `ImageBitmap` auf der Leinwand an und überträgt dessen Eigentum an die Leinwand. Ein einziges `OffscreenCanvas` kann Frames in eine beliebige Anzahl anderer `ImageBitmapRenderingContext`-Objekte übertragen.

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

### Asynchrone Anzeige von Frames, die von einem `OffscreenCanvas` erzeugt wurden

Eine andere Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, [`transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) auf einem {{HTMLElement("canvas")}}-Element aufzurufen, entweder in einem [Worker](/de/docs/Web/API/Web_Workers_API) oder im Hauptthread, was ein `OffscreenCanvas`-Objekt von einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt aus dem Hauptthread zurückgibt. Ein Aufruf von [`getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird dann einen Rendering-Kontext von diesem `OffscreenCanvas` abrufen.

Das `main.js`-Skript (Hauptthread) könnte so aussehen:

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreen-canvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Während das `offscreen-canvas.js`-Skript (Worker-Thread) so aussehen kann:

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

Ein vollständiges Beispiel sehen Sie im [OffscreenCanvas-Beispielquellcode](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) auf GitHub oder führen Sie das [OffscreenCanvas-Beispiel live](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/) aus.

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
