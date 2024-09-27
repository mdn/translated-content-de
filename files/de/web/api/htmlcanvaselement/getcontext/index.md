---
title: "HTMLCanvasElement: getContext() Methode"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.getContext()`** Methode gibt einen Zeichenkontext auf dem `<canvas>`-Element zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das `<canvas>`-Element bereits auf einen anderen Kontextmodus gesetzt wurde.

Spätere Aufrufe dieser Methode auf demselben `<canvas>`-Element mit dem gleichen `contextType`-Argument geben immer dieselbe Zeichenkontextinstanz zurück, die beim ersten Aufruf der Methode zurückgegeben wurde. Es ist nicht möglich, ein anderes Zeichenkontextobjekt auf einem bestimmten `<canvas>`-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den Zeichnungskontext definiert, der mit dem `<canvas>` verbunden ist. Mögliche Werte sind:

    - `"2d"`, was zur Erstellung eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekts führt, das einen zweidimensionalen Zeichenkontext darstellt.
    - `"webgl"` (oder `"experimental-webgl"`) was ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Objekt erstellt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"` was ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Objekt erstellt, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren. {{experimental_inline}}
    - `"webgpu"`, was ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objekt erstellt, das einen dreidimensionalen Zeichenkontext für WebGPU-Renderpipelines darstellt. Dieser Kontext ist nur auf Browsern verfügbar, die [The WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`, das ein [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) erstellt, das nur die Funktionalität bietet, den Inhalt des `<canvas>` mit einem gegebenen [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zu ersetzen.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder die Testsuite-Konformität noch nicht erreicht, oder die Grafiktreiber auf der Plattform sind noch nicht stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen nach bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes` {{optional_inline}}

  - : Sie können mehrere Kontextattribute verwenden, wenn Sie Ihren Zeichenkontext erstellen, zum Beispiel:

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2d-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das `<canvas>` einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser jetzt, dass der Hintergrund immer undurchsichtig ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://de.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [display-p3 Farbraum](https://de.wikipedia.org/wiki/DCI-P3).
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten andeutet, die Latenz durch Desynchronisierung des Zeichenzyklus des `<canvas>` vom Ereignisschleifenzyklus zu verringern.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Leseoperationen geplant sind. Dies erzwingt die Verwendung eines softwarebasierten (statt hardwarebeschleunigten) 2D-`<canvas>` und kann Speicher sparen, wenn häufig [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) aufgerufen wird.

    WebGL-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das `<canvas>` einen Alphapuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Tiefenpuffer mit mindestens 16 Bit angefordert werden soll.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Schablonenpuffer mit mindestens 8 Bit angefordert werden soll.
    - `desynchronized`
      - : Ein boolescher Wert, der dem Benutzeragenten andeutet, die Latenz durch Desynchronisierung des Zeichenzyklus des `<canvas>` vom Ereignisschleifenzyklus zu verringern.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob Antialiasing nach Möglichkeit durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung niedrig ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`

      - : Ein Hinweis an den Benutzeragenten, der angibt, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche Werte sind:

        - `"default"`
          - : Lassen Sie den Benutzeragenten entscheiden, welche GPU-Konfiguration am besten geeignet ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Priorisiert die Rendering-Leistung gegenüber dem Energieverbrauch.
        - `"low-power"`
          - : Priorisiert das Energiesparen gegenüber der Rendering-Leistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor davon ausgeht, dass der Zeichenpuffer Farben mit vorunterstelltem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert `true` ist, werden die Puffer nicht gelöscht und behalten ihre Werte, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der den Benutzeragenten darauf hinweist, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Es wird davon abgeraten, dieses synchrone Flag bei der Erstellung des Kontextes zu setzen; rufen Sie stattdessen die asynchrone [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible) Methode auf, sobald Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) Methode.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) für `"2d"`,
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) für `"webgl"` und
  `"experimental-webgl"`,
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) für `"webgl2"`
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) für `"webgpu"` oder
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) für `"bitmaprenderer"` ist.

Wenn der `contextType` nicht einem möglichen Zeichenkontext entspricht oder sich vom zuerst angeforderten `contextType` unterscheidet, wird `null` zurückgegeben.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können einen `2d` Kontext des `<canvas>` mit dem folgenden Code erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { /* … */ }
```

Nun haben Sie den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für ein `<canvas>`-Element und können darin zeichnen.

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
- [DCI-P3 Farbraum](https://de.wikipedia.org/wiki/DCI-P3) auf Wikipedia
- [sRGB Farbraum](https://de.wikipedia.org/wiki/SRGB) auf Wikipedia
