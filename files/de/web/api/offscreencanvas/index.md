---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Bei der Verwendung des {{HtmlElement("canvas")}}-Elements oder der [Canvas API](/de/docs/Web/API/Canvas_API) erfolgen Rendering, Animationen und Benutzerinteraktionen normalerweise im Hauptausführungsstrang einer Webanwendung. Die Berechnungen, die mit Canvas-Animationen und -Renderings zusammenhängen, können einen erheblichen Einfluss auf die Leistung der Anwendung haben.

Das **`OffscreenCanvas`**-Interface bietet eine Leinwand, die offscreen gerendert werden kann, und entkoppelt das DOM und die Canvas-API, sodass das {{HtmlElement("canvas")}}-Element nicht mehr vollständig vom DOM abhängig ist. Rendering-Operationen können auch im Kontext eines [Workers](/de/docs/Web/API/Web_Workers_API) ausgeführt werden, was es ermöglicht, einige Aufgaben in einem separaten Thread auszuführen und so die Hauptarbeit im Hauptthread zu vermeiden.

`OffscreenCanvas` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Konstruktoren

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : `OffscreenCanvas`-Konstruktor. Erstellt ein neues `OffscreenCanvas`-Objekt.

## Instanz-Eigenschaften

- {{domxref("OffscreenCanvas.height")}}
  - : Die Höhe des Offscreen-Canvas.
- {{domxref("OffscreenCanvas.width")}}
  - : Die Breite des Offscreen-Canvas.

## Instanz-Methoden

- {{domxref("OffscreenCanvas.getContext()")}}
  - : Gibt einen Rendering-Kontext für das Offscreen-Canvas zurück.
- {{domxref("OffscreenCanvas.convertToBlob()")}}
  - : Erstellt ein {{domxref("Blob")}}-Objekt, das das im Canvas enthaltene Bild darstellt.
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : Erstellt ein {{domxref("ImageBitmap")}}-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Siehe dessen Referenz für wichtige Hinweise zur Verwaltung dieses {{domxref("ImageBitmap")}}.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, {{domxref("EventTarget")}}._

Hören Sie auf diese Ereignisse mit {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
  - : Wird ausgelöst, wenn der Browser erkennt, dass ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext verloren gegangen ist.
- [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event)
  - : Wird ausgelöst, wenn der Browser einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext erfolgreich wiederherstellt.

## Beispiele

### Synchrones Anzeigen von Frames, die von einem `OffscreenCanvas` produziert wurden

Eine Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, einen Rendering-Kontext zu nutzen, der von einem `OffscreenCanvas`-Objekt erhalten wurde, um neue Frames zu erstellen. Sobald ein neuer Frame in diesem Kontext fertig gerendert wurde, kann die Methode {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} aufgerufen werden, um das zuletzt gerenderte Bild zu speichern. Diese Methode gibt ein {{domxref("ImageBitmap")}}-Objekt zurück, das in verschiedenen Web-APIs sowie in einem zweiten Canvas verwendet werden kann, ohne eine Übertragungskopie zu erstellen.

Um das `ImageBitmap` anzuzeigen, können Sie einen {{domxref("ImageBitmapRenderingContext")}}-Kontext verwenden, der durch Aufruf von `canvas.getContext("bitmaprenderer")` auf einem (sichtbaren) Canvas-Element erstellt werden kann. Dieser Kontext bietet nur Funktionen, um den Inhalt des Canvas mit dem angegebenen `ImageBitmap` zu ersetzen. Ein Aufruf von {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} mit dem zuvor gerenderten und gespeicherten `ImageBitmap` vom OffscreenCanvas zeigt das `ImageBitmap` auf dem Canvas an und überträgt dessen Eigentum auf das Canvas. Ein einziges `OffscreenCanvas` kann Frames in beliebig viele andere `ImageBitmapRenderingContext`-Objekte übertragen.

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

// Führen Sie einige Zeichnungen für das erste Canvas mit dem gl-Kontext durch
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// Führen Sie einige weitere Zeichnungen für das zweite Canvas durch
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### Asynchrones Anzeigen von Frames, die von einem `OffscreenCanvas` produziert wurden

Eine weitere Möglichkeit, die `OffscreenCanvas`-API zu verwenden, besteht darin, {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} auf einem {{HTMLElement("canvas")}}-Element aufzurufen, entweder in einem [Worker](/de/docs/Web/API/Web_Workers_API) oder dem Hauptthread, was ein `OffscreenCanvas`-Objekt von einem {{domxref("HTMLCanvasElement")}}-Objekt aus dem Hauptthread zurückgibt. Durch den Aufruf von {{domxref("OffscreenCanvas.getContext", "getContext()")}} wird dann ein Rendering-Kontext von diesem `OffscreenCanvas` erhalten.

Das `main.js`-Skript (Hauptthread) könnte so aussehen:

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
  // Führen Sie einige Zeichnungen mit dem gl-Kontext durch
};
```

Es ist auch möglich, {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} in Workern zu verwenden:

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // Führen Sie einige Zeichnungen mit dem gl-Kontext durch
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

Für ein vollständiges Beispiel siehe den [OffscreenCanvas-Beispielquellcode](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) auf GitHub oder führen Sie das [OffscreenCanvas-Beispiel live](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/) aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}
- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) (2016)
