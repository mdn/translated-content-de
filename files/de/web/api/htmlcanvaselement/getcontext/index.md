---
title: "HTMLCanvasElement: getContext() Methode"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Canvas API")}}

Die
**`HTMLCanvasElement.getContext()`**-Methode gibt einen Zeichenkontext
auf dem Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt
wird oder das Canvas bereits auf einen anderen Kontextmodus gesetzt wurde.

Spätere Aufrufe dieser Methode auf demselben Canvas-Element mit dem gleichen
`contextType`-Argument werden immer die gleiche Zeichenkontextinstanz
zurückgeben, wie sie beim ersten Aufruf der Methode zurückgegeben wurde. Es ist nicht möglich, ein
anderes Zeichenkontextobjekt auf einem gegebenen Canvas-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den dem Canvas zugeordneten Zeichnungskontext definiert. Mögliche Werte sind:

    - `"2d"`, was zur Erstellung eines
      [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts führt, das einen zweidimensionalen
      Zeichenkontext darstellt.
    - `"webgl"` (oder `"experimental-webgl"`), was ein
      [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Objekt erstellt, das einen dreidimensionalen
      Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"`, was ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Objekt erstellt,
      das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur
      in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API)
      Version 2 (OpenGL ES 3.0) implementieren. {{experimental_inline}}
    - `"webgpu"`, was ein
      [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt erstellt, das einen dreidimensionalen
      Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [The WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`, was ein
      [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) erstellt, das nur die Funktionalität bietet,
      den Inhalt des Canvas mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird
    > in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder nicht die
    > Test-Suite-Konformität erreicht oder die Grafiktreiber auf der Plattform sind noch nicht
    > stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-
    > Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}

  - : Sie können mehrere Kontexattribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, z.B.:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2D-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas
        einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun,
        dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparenten
        Inhalten und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3).
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten
        den Hinweis gibt, die Latenz zu reduzieren, indem der Canvas-Malzyklus vom Ereignisloop
        desynchronisiert wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob
        viele Leseoperationen geplant sind. Dies wird die Verwendung eines
        Software-Zeichenachs (statt eines hardwarebeschleunigten) 2D-Canvas erzwingen und kann Speicher sparen, wenn
        häufig [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
        aufgerufen wird.

    WebGL-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas
        einen Alphabuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichen-
        buffer einen Tiefenbuffer von mindestens 16 Bit haben soll.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichen-
        buffer einen Stencil-Buffer von mindestens 8 Bit haben soll.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten
        den Hinweis gibt, die Latenz zu reduzieren, indem der Canvas-Malzyklus vom Ereignisloop
        desynchronisiert wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob
        wenn möglich Antialiasing durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der
        angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder
        keine Hardware-GPU verfügbar ist.
    - `powerPreference`

      - : Ein Hinweis an den Benutzeragenten,
        der angibt, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche
        Werte sind:

        - `"default"`
          - : Den Benutzeragenten entscheiden lassen, welche GPU-Konfiguration
            am geeignetsten ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Zeichenleistung über den
            Stromverbrauch.
        - `"low-power"`
          - : Priorisiert das Stromsparen über die
            Zeichenleistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass
        der Seitengestalter annimmt, dass der Zeichenbuffer Farben mit
        vorvermultiplizierten Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert true ist, werden die
        Buffer nicht gelöscht und behalten ihre Werte, bis sie vom Autor gelöscht oder
        überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der dem Benutzeragenten
        den Hinweis gibt, einen kompatiblen Grafikadapter für ein
        [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Das Setzen dieser
        synchronen Flagge bei der Kontexterstellung wird nicht empfohlen; verwenden Sie stattdessen die asynchrone
        Methode [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible), sobald Sie
        beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontexattribute für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die Methode [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) an.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und
  `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"`,
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"` oder
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der `contextType` nicht mit einem möglichen Zeichenkontext übereinstimmt oder
vom zuerst angeforderten `contextType` abweicht, wird `null` zurückgegeben.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können einen `2d`-Kontext des Canvas mit folgendem Code erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { /* … */ }
```

Nun haben Sie den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für ein Canvas und können darin zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle, die die Methode `HTMLCanvasElement.getContext()` definiert
- [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes), [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext),
  [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext): Verfügbare Zeichenkontexte
- [DCI-P3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
