---
title: "HTMLCanvasElement: getContext()-Methode"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.getContext()`**-Methode gibt einen Zeichenkontext auf dem `<canvas>` zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das `<canvas>` bereits auf einen anderen Kontextmodus gesetzt wurde.

Spätere Aufrufe dieser Methode auf demselben Canvas-Element mit demselben `contextType`-Argument geben immer dieselbe Zeichnungskontextinstanz zurück, die beim ersten Aufruf der Methode zurückgegeben wurde. Es ist nicht möglich, ein anderes Zeichnungskontextobjekt auf einem gegebenen Canvas-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält und den Zeichenkontext definiert, der mit dem `<canvas>` verbunden ist. Mögliche Werte sind:

    - `"2d"`
      - : Erstellt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `"webgl"` (oder `"experimental-webgl"`)
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [The WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`
      - : Erstellt ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), das nur die Funktionalität bietet, den Inhalt des `<canvas>` durch ein gegebenes [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird
    > in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder die
    > Konformität der Test-Suite noch nicht erreicht, oder die Grafiktreiber auf der Plattform
    > sind noch nicht stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-
    > Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}

  - : Sie können mehrere Kontextattribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2D-Kontext-Attribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das `<canvas>` einen Alpha-Kanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontextes an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3).
    - `desynchronized`
      - : Ein boolescher Wert, der dem Nutzeragenten signalisiert, die Latenz zu verringern, indem der Canvas-Malzyklus von der Ereignisschleife getrennt wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der anzeigt, ob viele Rücklese-Operationen geplant sind. Dies wird die Verwendung eines softwarebasierten (anstelle hardwarebeschleunigten) 2D-Canvas erzwingen und kann Speicher sparen, wenn [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) häufig aufgerufen wird.

    WebGL-Kontext-Attribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das `<canvas>` einen Alpha-Puffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer verlangt, einen Tiefenpuffer von mindestens 16 Bit zu haben.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer verlangt, einen Schablonenpuffer von mindestens 8 Bit zu haben.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Nutzeragenten signalisiert, die Latenz zu verringern, indem der Canvas-Malzyklus von der Ereignisschleife getrennt wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob Anti-Aliasing, wenn möglich, durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`

      - : Ein Hinweis an den Nutzeragenten, welche Konfiguration der GPU für den WebGL-Kontext geeignet ist. Mögliche Werte sind:
        - `"default"`
          - : Der Nutzeragent entscheidet, welche GPU-Konfiguration am besten geeignet ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Renderleistung gegenüber dem Stromverbrauch.
        - `"low-power"`
          - : Priorisiert die Stromersparnis gegenüber der Renderleistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitengestalter annimmt, dass der Zeichenpuffer Farben mit vormultipliziertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert auf `true` gesetzt ist, werden die Puffer nicht gelöscht und behalten ihre Werte bei, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der dem Nutzeragenten signalisiert, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieses synchronen Flags bei der Kontext-Erstellung wird nicht empfohlen; es sollte stattdessen die asynchrone Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) aufgerufen werden, sobald Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure)-Methode.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der Kontextbezeichner nicht unterstützt wird oder das `<canvas>` bereits auf einen anderen Kontextmodus gesetzt wurde, wird `null` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `<canvas>` seine Kontrolle durch den Aufruf von [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) auf ein Offscreen-Element übertragen hat.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Können Sie einen `2d`-Kontext des `<canvas>` mit folgendem Code erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { /* … */ }
```

Nun haben Sie den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für ein `<canvas>` und können darin zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle zur Definition der `HTMLCanvasElement.getContext()`-Methode
- [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes), [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext),
  [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext): Verfügbare Zeichnungskontexte
- [DCI-P3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) auf Wikipedia
- [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
