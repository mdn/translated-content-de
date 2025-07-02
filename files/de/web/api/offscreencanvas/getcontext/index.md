---
title: "OffscreenCanvas: getContext() Methode"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: 5ed97586afb0b74aea8b32b24ea630698520732a
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.getContext()`**-Methode liefert einen Zeichenkontext für ein Offscreen-Canvas oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das Offscreen-Canvas bereits auf einen anderen Kontextmodus gesetzt wurde.

## Syntax

```js-nolint
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`
  - : Ein String, der den Kontextbezeichner enthält und den mit dem Canvas assoziierten Zeichenkontext definiert. Mögliche Werte sind:
    - `2d`
      - : Erstellt ein [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Objekt, das einen zweidimensionalen Zeichenkontext repräsentiert.
    - `webgl`
      - : Erstellt ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext repräsentiert. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `webgl2`
      - : Erstellt ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt, das einen dreidimensionalen Zeichenkontext repräsentiert. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren.
    - `"webgpu"`
      - : Erstellt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `bitmaprenderer`
      - : Erstellt ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), das nur die Funktionalität bietet, den Inhalt des Canvas mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Die Bezeichner **`"experimental-webgl"`** oder **`"experimental-webgl2"`** werden auch in Implementierungen von WebGL verwendet.
    > Diese Implementierungen haben noch keine Testkonformität erreicht oder die Grafiktreiber-Situation auf der Plattform ist noch nicht stabil.
    > Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}
  - : Sie können mehrere Kontextattribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2D-Kontextattribute:
    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparenten Inhalten und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) aus. Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) aus.
    - `colorType` {{optional_inline}}
      - : Gibt den Farbtyp des Zeichenkontexts an. Mögliche Werte sind:
        - `"unorm8"` setzt die Farbkanäle auf 8-Bit-Unsigned-Werte. Dies ist der Standardwert.
        - `"float16"` setzt die Farbkanäle auf 16-Bit-Gleitpunktwerte.
    - `desynchronized`
      - : Ein boolescher Wert, der den Benutzeragenten anweist, die Latenz zu reduzieren, indem der Zeichenzyklus des Canvas vom Ereignisschleifenzyklus entkoppelt wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Rückleseoperationen geplant sind. Dies wird die Verwendung einer Software- (anstatt einer hardwarebeschleunigten) 2D-Leinwand erzwingen und kann Speicher sparen, wenn häufig [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) aufgerufen wird.

    WebGL-Kontextattribute:
    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alphapuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer gebeten wird, einen Tiefenpuffer von mindestens 16 Bit zu haben.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer gebeten wird, einen Schablonenpuffer von mindestens 8 Bit zu haben.
    - `desynchronized`
      - : Ein boolescher Wert, der den Benutzeragenten anweist, die Latenz zu reduzieren, indem der Zeichenzyklus des Canvas vom Ereignisschleifenzyklus entkoppelt wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob Antialiasing, wenn möglich, durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`
      - : Ein Hinweis an den Benutzeragenten, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche Werte sind:
        - `"default"`
          - : Lass den Benutzeragenten entscheiden, welche GPU-Konfiguration am besten geeignet ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Renderleistung gegenüber dem Stromverbrauch.
        - `"low-power"`
          - : Priorisiert die Energieeinsparung gegenüber der Renderleistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor annimmt, dass der Zeichenpuffer Farben mit vor-multipliziertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert wahr ist, werden die Puffer nicht gelöscht und behalten ihre Werte bei, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolean Wert, der den Benutzeragenten anweist, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieses synchronen Flags bei der Kontexterstellung wird nicht empfohlen; rufen Sie stattdessen die asynchrone Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) auf, sobald Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die Methode [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) an.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"` und `"experimental-webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"`,
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"`.

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

- Das Interface, das diese Methode definiert: [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- Verfügbare Zeichenkontexte: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext), und [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
