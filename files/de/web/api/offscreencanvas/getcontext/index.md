---
title: "OffscreenCanvas: getContext() Methode"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.getContext()`** Methode gibt einen Zeichenkontext für einen Offscreen-Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird.

## Syntax

```js-nolint
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den dem Canvas zugeordneten Zeichenkontext definiert. Mögliche Werte sind:

    - `2d`
      - : Erstellt ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) Objekt, das einen zweidimensionalen Zeichnungskontext darstellt.
    - `webgl`
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt, das einen dreidimensionalen Zeichnungskontext darstellt.
        Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `webgl2`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Objekt, das einen dreidimensionalen Zeichnungskontext darstellt.
        Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `bitmaprenderer`
      - : Erstellt ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), das nur Funktionalität bietet, um den Inhalt des Canvas mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Die Bezeichner **`"experimental-webgl"`** oder **`"experimental-webgl2"`** werden ebenfalls in Implementierungen von WebGL verwendet.
    > Diese Implementierungen haben den Test-Suite-Konformitätstest noch nicht erreicht oder die Grafikkartentreiber-Situation auf der Plattform ist noch nicht stabil.
    > Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Sie können mehrere Kontextattribute verwenden, wenn Sie Ihren Zeichnungskontext erstellen, zum Beispiel:

    ```js
    offscreen.getContext("webgl", { antialias: false, depth: false });
    ```

    2d-Kontextattribute:

    - `alpha`
      - : Ein Boolean, der angibt, ob der Canvas einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `willReadFrequently` {{non-standard_inline}} (nur Firefox)
      - : Ein Boolean, der angibt, ob viele Rückleseoperationen geplant sind.
        Dies wird die Verwendung eines Software- (anstatt hardwarebeschleunigten) 2D-Canvas erzwingen und kann Speicher sparen, wenn häufig [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) aufgerufen wird.
        Diese Option ist nur verfügbar, wenn das Flag `gfx.canvas.willReadFrequently.enable` auf `true` gesetzt ist (was standardmäßig nur für B2G/Firefox OS der Fall ist).
    - `storage` {{non-standard_inline}} (nur Blink)
      - : Ein String, der angibt, welcher Speicher verwendet wird (standardmäßig "persistent").

    WebGL-Kontextattribute:

    - `alpha`
      - : Ein Boolean, der angibt, ob der Canvas einen Alpha-Puffer enthält.
    - `depth`
      - : Ein Boolean, der angibt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bits haben soll.
    - `stencil`
      - : Ein Boolean, der angibt, dass der Zeichenpuffer einen Stencil-Puffer von mindestens 8 Bits haben soll.
    - `antialias`
      - : Ein Boolean, der angibt, ob, wenn möglich, Anti-Aliasing durchgeführt werden soll.
    - `premultipliedAlpha`
      - : Ein Boolean, der angibt, dass der Seitenkompositor annimmt, der Zeichenpuffer enthält Farben mit vorvervielfachtem Alpha.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte bei, bis sie vom Autor gelöscht oder überschrieben werden.
    - `failIfMajorPerformanceCaveat`
      - : Ein Boolean, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"` und `"experimental-webgl2"` {{experimental_inline}}, oder
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der `contextType` keiner möglichen Zeichnungskontext entspricht, wird `null` zurückgegeben.

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
