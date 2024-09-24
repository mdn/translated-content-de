---
title: "HTMLCanvasElement: getContext()-Methode"
short-title: getContext()
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Canvas API")}}

Die Methode **`HTMLCanvasElement.getContext()`** gibt einen Zeichenkontext auf dem Canvas zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Kontextbezeichner nicht unterstützt wird oder das Canvas bereits auf einen anderen Kontextmodus festgelegt wurde.

Spätere Aufrufe dieser Methode auf demselben Canvas-Element mit demselben `contextType`-Argument werden immer dieselbe Instanz des Zeichenkontexts zurückgeben, die beim ersten Aufruf der Methode zurückgegeben wurde. Es ist nicht möglich, ein anderes Zeichenkontextobjekt auf einem gegebenen Canvas-Element zu erhalten.

## Syntax

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### Parameter

- `contextType`

  - : Ein String, der den Kontextbezeichner enthält, der den Zeichenkontext definiert, der mit dem Canvas verbunden ist. Mögliche Werte sind:

    - `"2d"`, führt zur Erstellung eines {{domxref("CanvasRenderingContext2D")}}-Objekts, das einen zweidimensionalen Zeichenkontext darstellt.
    - `"webgl"` (oder `"experimental-webgl"`), welches ein {{domxref("WebGLRenderingContext")}}-Objekt erstellen wird, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGL](/de/docs/Web/API/WebGL_API) Version 1 (OpenGL ES 2.0) implementieren.
    - `"webgl2"`, welches ein {{domxref("WebGL2RenderingContext")}}-Objekt erstellen wird, das einen dreidimensionalen Zeichenkontext darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGL](/de/docs/Web/API/WebGL_API) Version 2 (OpenGL ES 3.0) implementieren. {{experimental_inline}}
    - `"webgpu"`, welches ein {{domxref("GPUCanvasContext")}}-Objekt erstellen wird, das einen dreidimensionalen Zeichenkontext für WebGPU-Render-Pipelines darstellt. Dieser Kontext ist nur in Browsern verfügbar, die die [WebGPU API](/de/docs/Web/API/WebGPU_API) implementieren.
    - `"bitmaprenderer"`, welches ein {{domxref("ImageBitmapRenderingContext")}} erstellen wird, das nur Funktionen bietet, um den Inhalt des Canvas mit einem gegebenen {{domxref("ImageBitmap")}} zu ersetzen.

    > [!NOTE]
    > Der Bezeichner `"experimental-webgl"` wird in neuen Implementierungen von WebGL verwendet. Diese Implementierungen haben entweder noch nicht den Testkonformitätssuite erreicht oder die Grafiktreiber auf der Plattform sind noch nicht stabil. Die [Khronos Group](https://www.khronos.org/) zertifiziert WebGL-Implementierungen unter bestimmten [Konformitätsregeln](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt).

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
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alphakanal enthält. Wenn auf `false` gesetzt, weiß der Browser nun, dass der Hintergrund immer deckend ist, was das Zeichnen von transparentem Inhalt und Bildern beschleunigen kann.
    - `colorSpace` {{optional_inline}}
      - : Gibt den Farbraum des Zeichenkontexts an. Mögliche Werte sind:
        - `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
        - `"display-p3"` wählt den [Display-P3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3).
    - `desynchronized`
      - : Ein boolescher Wert, der den Benutzeragenten dazu anweist, die Latenz zu reduzieren, indem der Canvas-Zyklus vom Ereigniszyklus entkoppelt wird.
    - `willReadFrequently`
      - : Ein boolescher Wert, der angibt, ob viele Leseoperationen geplant sind. Dies zwingt zur Verwendung eines Software- (anstatt eines hardwarebeschleunigten) 2D-Canvas und kann Speicher sparen, wenn häufig {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} aufgerufen wird.

    WebGL-Kontextattribute:

    - `alpha`
      - : Ein boolescher Wert, der angibt, ob das Canvas einen Alphapuffer enthält.
    - `depth`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Tiefenpuffer von mindestens 16 Bit haben soll.
    - `stencil`
      - : Ein boolescher Wert, der angibt, dass der Zeichenpuffer einen Stencil-Puffer von mindestens 8 Bit haben soll.
    - `desynchronized`
      - : Ein boolescher Wert, der den Benutzeragenten dazu anweist, die Latenz zu reduzieren, indem der Canvas-Zyklus vom Ereigniszyklus entkoppelt wird.
    - `antialias`
      - : Ein boolescher Wert, der angibt, ob wenn möglich Antialiasing durchgeführt werden soll.
    - `failIfMajorPerformanceCaveat`
      - : Ein boolescher Wert, der angibt, ob ein Kontext erstellt wird, wenn die Systemleistung gering ist oder keine Hardware-GPU verfügbar ist.
    - `powerPreference`

      - : Ein Hinweis an den Benutzeragenten, welche GPU-Konfiguration für den WebGL-Kontext geeignet ist. Mögliche Werte sind:

        - `"default"`
          - : Lassen Sie den Benutzeragenten entscheiden, welche GPU-Konfiguration am geeignetsten ist. Dies ist der Standardwert.
        - `"high-performance"`
          - : Bevorzugt die Rendering-Leistung gegenüber dem Stromverbrauch.
        - `"low-power"`
          - : Bevorzugt das Stromsparen gegenüber der Rendering-Leistung.

    - `premultipliedAlpha`
      - : Ein boolescher Wert, der angibt, dass der Seitenkompositor annimmt, dass der Zeichenpuffer Farben mit vorkomprimiertem Alpha enthält.
    - `preserveDrawingBuffer`
      - : Wenn der Wert true ist, werden die Puffer nicht gelöscht und behalten ihre Werte bei, bis sie vom Autor gelöscht oder überschrieben werden.
    - `xrCompatible`
      - : Ein boolescher Wert, der dem Benutzeragenten anzeigt, einen kompatiblen Grafikadapter für ein [immersives XR-Gerät](/de/docs/Web/API/WebXR_Device_API) zu verwenden. Es wird geraten, diesen synchronen Flag bei der Kontexterstellung nicht zu setzen; rufen Sie stattdessen die asynchrone {{domxref("WebGLRenderingContext.makeXRCompatible()")}}-Methode auf, wenn Sie beabsichtigen, eine XR-Sitzung zu starten.

    > [!NOTE]
    > Die WebGPU-Spezifikation definiert keine spezifischen Kontextattribute für `getContext()`. Stattdessen bietet sie Konfigurationsoptionen über die {{domxref("GPUCanvasContext.configure()")}}-Methode.

### Rückgabewert

Ein Zeichenkontext, der entweder ein

- {{domxref("CanvasRenderingContext2D")}} für `"2d"`,
- {{domxref("WebGLRenderingContext")}} für `"webgl"` und `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} für `"webgl2"`
- {{domxref("GPUCanvasContext")}} für `"webgpu"` oder
- {{domxref("ImageBitmapRenderingContext")}} für `"bitmaprenderer"` ist.

Wenn der `contextType` nicht mit einem möglichen Zeichenkontext übereinstimmt oder sich von dem ersten angeforderten `contextType` unterscheidet, wird `null` zurückgegeben.

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

Nun haben Sie den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für ein Canvas und können darin zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}: Schnittstelle, die die Methode `HTMLCanvasElement.getContext()` definiert
- {{domxref("OffscreenCanvas.getContext()")}}
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}, {{domxref("WebGLRenderingContext.getContextAttributes()")}}
- {{domxref("CanvasRenderingContext2D")}}, {{domxref("ImageBitmapRenderingContext")}},
  {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, {{domxref("GPUCanvasContext")}}: Verfügbare Zeichenkontexte
- [DCI-P3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
