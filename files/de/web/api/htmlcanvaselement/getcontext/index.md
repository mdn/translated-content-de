---
title: "HTMLCanvasElement: getContext() Methode"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: 5ed97586afb0b74aea8b32b24ea630698520732a
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.getContext()`** Methode gibt einen Zeichenkontext auf der Leinwand zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontext-Bezeichner nicht unterstützt wird oder die Leinwand bereits auf einen anderen Kontextmodus gesetzt wurde.

Spätere Aufrufe dieser Methode auf demselben Canvas-Element mit demselben `contextType`-Argument geben immer dieselbe Zeichenkontextinstanz zurück wie beim ersten Aufruf der Methode. Es ist nicht möglich, ein anderes Zeichenkontextobjekt auf einem gegebenen Canvas-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`
  - : Ein String, der den Kontext-Bezeichner enthält, der den Zeichenkontext definiert, der dem Canvas zugeordnet ist. Mögliche Werte sind:
    - `"2d"`
      - : Erstellt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `"webgl"` (oder `"experimental-webgl"`)
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [Die WebGPU-API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`
      - : Erstellt einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), der lediglich die Funktionalität bietet, den Inhalt des Canvas mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder die Konformität der Testsuite nicht erreicht oder die Grafiktreiber auf der Plattform sind noch nicht stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}
  - : Sie können mehrere Kontext-Attribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2D-Kontext-Attribute:
    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alpha-Kanal enthält. Wenn auf `false` gesetzt, weiß der Browser jetzt, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) aus. Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) aus.
    - `colorType` {{optional_inline}}
      - : Gibt den Farbtyp des Zeichenkontexts an. Mögliche Werte sind:
        - `"unorm8"` stellt die Farblaufkanäle auf 8-Bit-Unsigned-Werte. Dies ist der Standardwert.
        - `"float16"` stellt die Farblaufkanäle auf 16-Bit-Gleitpunktwerte.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten einen Hinweis gibt, die Latenz zu verringern, indem der Zeichenzyklus des Canvas von der Ereignisschleife desynchronisiert wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Rückleseoperationen geplant sind. Dies zwingt die Verwendung eines Software- (anstatt eines hardwarebeschleunigten) 2D-Canvas und kann Speicher sparen, wenn [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) häufig aufgerufen wird.

    WebGL-Kontext-Attribute:
    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alpha-Puffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bit haben soll.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Stencil-Puffer von mindestens 8 Bit haben soll.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten einen Hinweis gibt, die Latenz zu verringern, indem der Zeichenzyklus des Canvas von der Ereignisschleife desynchronisiert wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob Anti-Aliasing, falls möglich, durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`
      - : Ein Hinweis an den Benutzeragenten, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche Werte sind:
        - `"default"`
          - : Überlassen Sie dem Benutzeragenten die Entscheidung, welche GPU-Konfiguration am geeignetesten ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Bevorzugt die Rendering-Leistung gegenüber dem Stromverbrauch.
        - `"low-power"`
          - : Bevorzugt Energiesparen gegenüber der Rendering-Leistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor davon ausgeht, dass der Zeichenpuffer Farben mit vorkomponiertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der dem Benutzeragenten einen Hinweis gibt, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieses synchronen Flags bei der Kontext-Erstellung wird abgeraten; rufen Sie stattdessen die asynchrone Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) auf, sobald Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen werden Konfigurationsoptionen über die [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) Methode bereitgestellt.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"`.

Wenn der Kontext-Bezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde, wird `null` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Canvas die Kontrolle an ein Offscreen-Element übertragen hat, indem es [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) aufgerufen hat.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

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
