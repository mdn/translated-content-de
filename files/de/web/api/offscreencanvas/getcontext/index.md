---
title: "OffscreenCanvas: getContext() Methode"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: 4752e8a68c630b2fc8354dc4af4573701d6dfe28
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.getContext()`** Methode gibt einen Zeichenkontext für ein Offscreen-Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das Offscreen-Canvas bereits auf einen anderen Kontextmodus gesetzt wurde.

## Syntax

```js-nolint
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den dem Canvas zugeordneten Zeichenkontext definiert. Mögliche Werte sind:

    - `2d`
      - : Erstellt ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `webgl`
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `webgl2`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Renderpipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `bitmaprenderer`
      - : Erstellt ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), das nur Funktionalität bietet, um den Inhalt des Canvas mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Die Bezeichner **`"experimental-webgl"`** oder **`"experimental-webgl2"`** werden ebenfalls in Implementierungen von WebGL verwendet.
    > Diese Implementierungen haben die Konformität mit der Testsuite noch nicht erreicht, oder die Grafiktreiber-Situation auf der Plattform ist noch nicht stabil.
    > Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Sie können mehrere Kontextattribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    offscreen.getContext("webgl", { antialias: false, depth: false });
    ```

    2d Kontextattribute:

    - `alpha`
      - : Boolean, das angibt, ob das Canvas einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparenten Inhalten und Bildern beschleunigen kann.
    - `willReadFrequently`
      - : Boolean, das angibt, ob viele Rückleseoperationen geplant sind.
        Dies wird die Verwendung einer Software- (statt einer hardwarebeschleunigten) 2D-Leinwand erzwingen und kann Speicher sparen, wenn [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) häufig aufgerufen wird.
        In Firefox ist diese Option nur verfügbar, wenn das Flag `gfx.canvas.willReadFrequently.enable` auf `true` gesetzt ist (was standardmäßig nur für B2G/Firefox OS der Fall ist).

    WebGL Kontextattribute:

    - `alpha`
      - : Boolean, das angibt, ob das Canvas einen Alphapuffer enthält.
    - `depth`
      - : Boolean, das anzeigt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bit enthalten soll.
    - `stencil`
      - : Boolean, das anzeigt, dass der Zeichenpuffer einen Stencelpuffer von mindestens 8 Bit enthalten soll.
    - `antialias`
      - : Boolean, das angibt, ob Antialiasing durchgeführt werden soll, wenn möglich.
    - `premultipliedAlpha`
      - : Boolean, das angibt, dass der Seitenkompositor davon ausgeht, dass der Zeichenpuffer Farben mit vorvervielfältigtem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte bei, bis sie gelöscht oder vom Autor überschrieben werden.
    - `failIfMajorPerformanceCaveat`
      - : Boolean, das angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"` und `"experimental-webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der Kontextbezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde, wird `null` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Canvas in einen anderen Kontextbereich übertragen wurde, zum Beispiel zu einem Worker.

## Beispiele

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

gl; // WebGLRenderingContext
gl.canvas; // OffscreenCanvas
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- Verfügbare Zeichenkontexte: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
