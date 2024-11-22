---
title: "HTMLCanvasElement: Methode getContext()"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: 46dd9c0c1635e8abd73040c1a71cc0ed3c27cd50
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.getContext()`**-Methode gibt einen Zeichenkontext auf dem `<canvas>` zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das `<canvas>` bereits auf einen anderen Kontextmodus eingestellt wurde.

Spätere Aufrufe dieser Methode auf demselben `<canvas>`-Element mit demselben `contextType`-Argument geben immer dieselbe Zeichenkontextinstanz zurück, wie sie beim ersten Aufruf der Methode zurückgegeben wurde. Es ist nicht möglich, ein anderes Zeichenkontextobjekt auf einem gegebenen `<canvas>`-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den dem `<canvas>` zugeordneten Zeichenkontext definiert. Mögliche Werte sind:

    - `"2d"`
      - : Erstellt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, das einen zweidimensionalen Zeichenkontext repräsentiert.
    - `"webgl"` (oder `"experimental-webgl"`)
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext repräsentiert. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext repräsentiert. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines repräsentiert. Dieser Kontext ist nur in Browsern verfügbar, die [Die WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`
      - : Erstellt einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), der nur die Funktionalität bietet, den Inhalt des `<canvas>` mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder die Konformität mit dem Testsuite nicht erreicht oder die Grafiktreiber auf der Plattform sind noch nicht stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}

  - : Es können mehrere Kontextattribute bei der Erstellung Ihres Zeichenkontexts verwendet werden, zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2d-Kontext-Attribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das `<canvas>` einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3).
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzerdienstprogramm vorschlägt, die Latenz zu reduzieren, indem der Zeichenzyklus des `<canvas>` vom Event-Loop desynchronisiert wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Rückleseoperationen geplant sind. Dies erzwingt die Verwendung eines Software- (anstatt eines hardwarebeschleunigten) 2D-`<canvas>` und kann Speicher sparen, wenn [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) häufig aufgerufen wird.

    WebGL-Kontext-Attribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das `<canvas>` einen Alphapuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Tiefenpuffer mit mindestens 16 Bit haben soll.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Stencilpuffer mit mindestens 8 Bit haben soll.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzerdienstprogramm vorschlägt, die Latenz zu reduzieren, indem der Zeichenzyklus des `<canvas>` vom Event-Loop desynchronisiert wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob, wenn möglich, eine Kantenglättung vorgenommen werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`

      - : Ein Hinweis an das Benutzerdienstprogramm, welche Konfiguration der GPU für den WebGL-Kontext geeignet ist. Mögliche Werte sind:

        - `"default"`
          - : Lässt das Benutzerdienstprogramm entscheiden, welche GPU-Konfiguration am besten geeignet ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Zeichenleistung über den Stromverbrauch.
        - `"low-power"`
          - : Priorisiert die Stromersparnis über die Zeichenleistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor annimmt, dass der Zeichenpuffer Farben mit vor-multiplizierter Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte, bis sie gelöscht oder vom Autor überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der dem Benutzerdienstprogramm nahelegt, eine kompatible Grafikkarte für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieses synchronen Flags bei der Kontext-Erstellung wird nicht empfohlen; stattdessen sollte die asynchrone Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) aufgerufen werden, wenn Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen bietet sie Konfigurationsmöglichkeiten über die [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) Methode.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der Kontextbezeichner nicht unterstützt wird oder das `<canvas>` bereits auf einen anderen Kontextmodus eingestellt wurde, wird `null` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `<canvas>` die Kontrolle durch Aufruf von [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) auf eine Offscreen-Instanz übertragen hat.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können einen `2d`-Kontext des `<canvas>` mit folgendem Code erhalten:

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
  [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext): Verfügbare Zeichenkontexte
- [DCI-P3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
