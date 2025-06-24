---
title: "OffscreenCanvas: getContext() Methode"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.getContext()`**-Methode gibt einen Zeichenkontext für eine Offscreen-Leinwand zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontext-Identifikator nicht unterstützt wird oder die Offscreen-Leinwand bereits auf einen anderen Kontextmodus eingestellt wurde.

## Syntax

```js-nolint
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontext-Identifikator enthält, der den Zeichenkontext der Leinwand definiert. Mögliche Werte sind:

    - `2d`
      - : Erstellt ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `webgl`
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `webgl2`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `bitmaprenderer`
      - : Erstellt ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), das nur Funktionen bietet, um den Inhalt der Leinwand mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Die Bezeichner **`"experimental-webgl"`** oder **`"experimental-webgl2"`** werden auch in Implementierungen von WebGL verwendet.
    > Diese Implementierungen haben die Test-Suite-Konformität noch nicht erreicht, oder die Grafiktreiber-Situation auf der Plattform ist noch nicht stabil.
    > Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen nach bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Sie können mehrere Kontexteigenschaften verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    offscreen.getContext("webgl", { antialias: false, depth: false });
    ```

    2d-Kontexteigenschaften:

    - `alpha`
      - : Ein Boolean, der anzeigt, ob die Leinwand einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser jetzt, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparenten Inhalten und Bildern beschleunigen kann.
    - `willReadFrequently`
      - : Ein Boolean, der anzeigt, ob viele Rückleseoperationen geplant sind.
        Dies erzwingt die Verwendung einer Software (anstatt einer hardwarebeschleunigten) 2D-Leinwand und kann Speicher sparen, wenn häufig [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) aufgerufen wird.
        In Firefox ist diese Option nur verfügbar, wenn das Flag `gfx.canvas.willReadFrequently.enable` auf `true` gesetzt ist (was standardmäßig nur für B2G/Firefox OS der Fall ist).

    WebGL-Kontexteigenschaften:

    - `alpha`
      - : Ein Boolean, der anzeigt, ob die Leinwand einen Alphapuffer enthält.
    - `depth`
      - : Ein Boolean, der anzeigt, dass der Zeichenpuffer angefordert wird, einen Tiefenpuffer von mindestens 16 Bit zu haben.
    - `stencil`
      - : Ein Boolean, der anzeigt, dass der Zeichenpuffer angefordert wird, einen Schablonenpuffer von mindestens 8 Bit zu haben.
    - `antialias`
      - : Ein Boolean, der anzeigt, ob eine Kantenglättung durchgeführt werden soll, wenn möglich.
    - `premultipliedAlpha`
      - : Ein Boolean, der anzeigt, dass der Seitenkompositor davon ausgeht, dass der Zeichenpuffer Farben mit vormultipliziertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte, bis sie vom Autor gelöscht oder überschrieben werden.
    - `failIfMajorPerformanceCaveat`
      - : Ein Boolean, der anzeigt, ob ein Kontext erstellt wird, wenn die Systemleistung gering ist.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"` und `"experimental-webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der Kontext-Identifikator nicht unterstützt wird oder die Leinwand bereits auf einen anderen Kontextmodus eingestellt wurde, wird `null` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft eine Ausnahme, wenn die Leinwand an einen anderen Kontextbereich übertragen wurde, zum Beispiel an einen Worker.

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
