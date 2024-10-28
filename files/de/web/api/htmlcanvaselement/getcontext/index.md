---
title: "HTMLCanvasElement: getContext() Methode"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: 32f1bfc28a0704c9a743bc971df1b2563cc4ccc6
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.getContext()`** Methode gibt einen Zeichenkontext auf dem Canvas zurück, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde.

Spätere Aufrufe dieser Methode auf dem gleichen Canvas-Element mit dem gleichen `contextType`-Argument werden immer dieselbe Instanz des Zeichenkontexts zurückgeben, die beim ersten Aufruf der Methode zurückgegeben wurde. Es ist nicht möglich, ein anderes Zeichenkontextobjekt auf einem gegebenen Canvas-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den mit dem Canvas verbundenen Zeichenkontext definiert. Mögliche Werte sind:

    - `"2d"`
      - : Erstellt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `"webgl"` (oder `"experimental-webgl"`)
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Renderpipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [The WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`
      - : Erstellt einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), der nur Funktionalität zum Ersetzen des Canvas-Inhalts mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) bietet.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder noch nicht die Testsuiten-Konformität erreicht, oder die Grafiktreiber auf der Plattform sind noch nicht stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}

  - : Sie können mehrere Kontextattribute beim Erstellen Ihres Zeichenkontexts verwenden, zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2d-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alphakanal enthält. Wenn `false` gesetzt ist, weiß der Browser nun, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3).
    - `desynchronized`
      - : Ein boolescher Wert, der den Benutzeragenten anweist, die Latenz zu verringern, indem der Canvas-Zeichenzyklus vom Ereignisloop desynchronisiert wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Ausleseoperationen geplant sind. Dies erzwingt die Verwendung eines Software- (anstelle eines hardwarebeschleunigten) 2D-Canvas und kann Speicher sparen, wenn [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) häufig aufgerufen wird.

    WebGL-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alphapuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der anzeigt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bit haben soll.
    - `stencil`
      - : Ein boolescher Wert, der anzeigt, dass der Zeichenpuffer einen Schablonenpuffer von mindestens 8 Bit haben soll.
    - `desynchronized`
      - : Ein boolescher Wert, der den Benutzeragenten anweist, die Latenz zu verringern, indem der Canvas-Zeichenzyklus vom Ereignisloop desynchronisiert wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob Antialiasing nach Möglichkeit durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder kein Hardware-GPU verfügbar ist.
    - `powerPreference`

      - : Ein Hinweis an den Benutzeragenten, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche Werte sind:

        - `"default"`
          - : Überlässt dem Benutzeragenten die Entscheidung, welche GPU-Konfiguration am besten geeignet ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Renderleistung gegenüber dem Stromverbrauch.
        - `"low-power"`
          - : Priorisiert den Stromverbrauch gegenüber der Renderleistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor davon ausgehen wird, dass der Zeichenpuffer Farben mit vor-multipliziertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert `true` ist, werden die Puffer nicht gelöscht und ihre Werte bleiben erhalten, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der den Benutzeragenten darauf hinweist, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieser synchronen Markierung bei der Kontexterstellung wird nicht empfohlen; stattdessen sollte die asynchrone Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) aufgerufen werden, sobald Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die Methode [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) an.

### Rückgabewert

Ein Zeichenkontext, der entweder ist:

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"`.

Wenn der Kontextbezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde, wird `null` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Canvas seine Kontrolle über einen Aufruf von `HTMLCanvasElement.transferControlToOffscreen()` übertragen hat.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können einen `2d`-Kontext des Canvas mit folgendem Code erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { /* … */ }
```

Jetzt haben Sie den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für ein Canvas und können darin zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle zur Definition der `HTMLCanvasElement.getContext()` Methode
- [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes), [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext),
  [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext): Verfügbare Zeichenkontexte
- [DCI-P3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) auf Wikipedia
- [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
