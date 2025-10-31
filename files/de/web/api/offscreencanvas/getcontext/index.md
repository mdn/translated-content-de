---
title: "OffscreenCanvas: getContext()-Methode"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.getContext()`**-Methode gibt einen Zeichenkontext für ein offscreen canvas zurück, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das offscreen canvas bereits auf einen anderen Kontextmodus gesetzt wurde.

## Syntax

```js-nolint
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`
  - : Ein String, der den Kontextbezeichner enthält, der den mit dem Canvas verknüpften Zeichenkontext definiert. Mögliche Werte sind:
    - `2d`
      - : Erstellt ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Objekt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `webgl`
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `webgl2`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `bitmaprenderer`
      - : Erstellt einen [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), der nur Funktionalität bietet, um den Inhalt des Canvas mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Die Bezeichner **`"experimental-webgl"`** oder **`"experimental-webgl2"`** werden auch in Implementierungen von WebGL verwendet.
    > Diese Implementierungen haben die Konformität mit dem Test-Suite noch nicht erreicht, oder die Grafiktreibersituation auf der Plattform ist noch nicht stabil.
    > Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}
  - : Sie können mehrere Kontexteigenschaften verwenden, wenn Sie Ihren Zeichenkontext erstellen. Zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2d Kontexteigenschaften:
    - `alpha`
      - : Ein boolescher Wert, der anzeigt, ob das Canvas einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer opak ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://de.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3-Farbraum](https://de.wikipedia.org/wiki/DCI-P3).
    - `colorType` {{optional_inline}}
      - : Gibt den Farbtyp des Zeichenkontexts an. Mögliche Werte sind:
        - `"unorm8"` setzt die Farbkanäle auf 8-Bit-Unsigned-Werte. Dies ist der Standardwert.
        - `"float16"` setzt die Farbkanäle auf 16-Bit-Gleitkommawerte.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten nahelegt, die Latenz zu reduzieren, indem der Canvas-Malzyklus vom Ereigniszyklus desynchronisiert wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Lese-Rückgabeoperationen geplant sind. Dies wird den Einsatz einer Software- (statt hardwarebeschleunigten) 2D-Leinwand erzwingen und kann Speicher sparen, wenn häufig [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) aufgerufen wird.

    WebGL Kontexteigenschaften:
    - `alpha`
      - : Ein boolescher Wert, der anzeigt, ob das Canvas einen Alphapuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bit haben soll.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Stencilpuffer von mindestens 8 Bit haben soll.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten nahelegt, die Latenz zu reduzieren, indem der Canvas-Malzyklus vom Ereigniszyklus desynchronisiert wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob Antialiasing, wenn möglich, durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`
      - : Ein Hinweis an den Benutzeragenten, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche Werte sind:
        - `"default"`
          - : Den Benutzeragenten entscheiden lassen, welche GPU-Konfiguration am besten geeignet ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Renderleistung gegenüber dem Stromverbrauch.
        - `"low-power"`
          - : Priorisiert die Stromersparnis gegenüber der Renderleistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor annimmt, dass der Zeichenpuffer Farben mit vorab multipliziertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der dem Benutzeragenten nahelegt, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieses synchronen Flags bei der Kontexterstellung wird nicht empfohlen; rufen Sie stattdessen die asynchrone Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) auf, wenn Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontexteigenschaften für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die Methode [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure).

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
  - : Wird ausgelöst, wenn das Canvas in einen anderen Kontextbereich übertragen wurde, z. B. zu einem Worker.

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

- Das Interface, das diese Methode definiert: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- Verfügbare Zeichenkontexte: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
