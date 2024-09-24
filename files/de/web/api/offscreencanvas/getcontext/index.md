---
title: "OffscreenCanvas: getContext()-Methode"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.getContext()`**-Methode gibt einen Zeichenkontext für ein Offscreen-Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird.

## Syntax

```js-nolint
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den mit dem Canvas verbundenen Zeichenkontext definiert. Mögliche Werte sind:

    - `2d`
      - : Erstellt ein {{domxref("OffscreenCanvasRenderingContext2D")}}-Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `webgl`
      - : Erstellt ein {{domxref("WebGLRenderingContext")}}-Objekt, das einen dreidimensionalen Zeichenkontext darstellt.
        Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `webgl2`
      - : Erstellt ein {{domxref("WebGL2RenderingContext")}}-Objekt, das einen dreidimensionalen Zeichenkontext darstellt.
        Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `bitmaprenderer`
      - : Erstellt ein {{domxref("ImageBitmapRenderingContext")}}, das nur die Funktionalität bietet, den Inhalt des Canvas mit einem gegebenen {{domxref("ImageBitmap")}} zu ersetzen.

    > [!NOTE]
    > Die Bezeichner **`"experimental-webgl"`** oder **`"experimental-webgl2"`** werden auch in Implementierungen von WebGL verwendet.
    > Diese Implementierungen haben die Konformitätssuite noch nicht erreicht, oder die Situation der Grafiktreiber auf der Plattform ist noch nicht stabil.
    > Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Sie können mehrere Kontextattribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    offscreen.getContext("webgl", { antialias: false, depth: false });
    ```

    2d-Kontext-Attribute:

    - `alpha`
      - : Boolean, der angibt, ob das Canvas einen Alpha-Kanal enthält. Wenn `false` gesetzt ist, weiß der Browser jetzt, dass der Hintergrund immer opak ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `willReadFrequently` {{non-standard_inline}} (Nur Firefox)
      - : Boolean, der angibt, ob viele Rückleseoperationen geplant sind.
        Dies erzwingt die Verwendung eines Software- (anstatt eines hardwarebeschleunigten) 2D-Canvas und kann Speicher sparen, wenn häufig {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} aufgerufen wird.
        Diese Option ist nur verfügbar, wenn das Flag `gfx.canvas.willReadFrequently.enable` auf `true` gesetzt ist (was standardmäßig nur für B2G/Firefox OS der Fall ist).
    - `storage` {{non-standard_inline}} (Nur Blink)
      - : String, der angibt, welcher Speicher verwendet wird ("persistent" ist standardmäßig).

    WebGL-Kontextattribute:

    - `alpha`
      - : Boolean, der angibt, ob das Canvas einen Alpha-Puffer enthält.
    - `depth`
      - : Boolean, der angibt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bits haben soll.
    - `stencil`
      - : Boolean, der angibt, dass der Zeichenpuffer einen Stencil-Puffer von mindestens 8 Bits haben soll.
    - `antialias`
      - : Boolean, der angibt, ob Anti-Aliasing, sofern möglich, durchgeführt werden soll.
    - `premultipliedAlpha`
      - : Boolean, der angibt, dass der Seitenkompositor annimmt, dass der Zeichenpuffer Farben mit vorkomprimierter Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert auf true gesetzt ist, werden die Puffer nicht gelöscht und behalten ihre Werte bei, bis sie gelöscht oder vom Autor überschrieben werden.
    - `failIfMajorPerformanceCaveat`
      - : Boolean, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- {{domxref("OffscreenCanvasRenderingContext2D")}} für `"2d"`,
- {{domxref("WebGLRenderingContext")}} für `"webgl"` und `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} für `"webgl2"` und `"experimental-webgl2"` {{experimental_inline}}, oder
- {{domxref("ImageBitmapRenderingContext")}} für `"bitmaprenderer"` ist.

Wenn der `contextType` keinem möglichen Zeichenkontext entspricht, wird `null` zurückgegeben.

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

- Das Interface, das diese Methode definiert: {{domxref("OffscreenCanvas")}}
- {{domxref("HTMLCanvasElement.getContext()")}}
- Verfügbare Zeichenkontexte: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, {{domxref("ImageBitmapRenderingContext")}}, und {{domxref("OffscreenCanvasRenderingContext2D")}}
