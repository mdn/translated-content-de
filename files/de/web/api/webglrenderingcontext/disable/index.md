---
title: "WebGLRenderingContext: disable() Methode"
short-title: disable()
slug: Web/API/WebGLRenderingContext/disable
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.disable()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) deaktiviert spezifische WebGL-Fähigkeiten für diesen Kontext.

## Syntax

```js-nolint
disable(capability)
```

### Parameter

- `capability`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche WebGL-Fähigkeit deaktiviert werden soll. Mögliche Werte:

    | Konstante                    | Beschreibung                                                                                                                                         |
    | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Deaktiviert das Mischen der berechneten Fragmentfarbenwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                  |
    | `gl.CULL_FACE`                | Deaktiviert das Polygon-Culling. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                              |
    | `gl.DEPTH_TEST`               | Deaktiviert Tiefenvergleiche und Updates des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                                 |
    | `gl.DITHER`                   | Deaktiviert die Rauschunterdrückung der Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                             |
    | `gl.POLYGON_OFFSET_FILL`      | Deaktiviert das Hinzufügen eines Offsets zu den Tiefenwerten von Polygonfragmenten. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset).       |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Deaktiviert die Berechnung eines temporären Abdeckungswerts, der durch den Alphawert bestimmt wird.                                                  |
    | `gl.SAMPLE_COVERAGE`          | Deaktiviert das AND-Verknüpfen der Fragmentabdeckung mit dem temporären Abdeckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage).  |
    | `gl.SCISSOR_TEST`             | Deaktiviert den Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor). |
    | `gl.STENCIL_TEST`             | Deaktiviert den Stencil-Test und Updates des Stencil-Puffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                             |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Context", "", 1)}} stehen zusätzlich die folgenden Werte zur Verfügung:

    | Konstante              | Beschreibung                                                                                                                                                                     |
    | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Deaktiviert, dass Primitiven unmittelbar vor der Rasterisierungsstufe, aber nach der optionalen Transform-Feedback-Stufe verworfen werden. `gl.clear()` Befehle werden ignoriert. |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.disable(gl.DITHER);
```

Um zu überprüfen, ob eine Fähigkeit deaktiviert ist, verwenden Sie die
[`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled) Methode:

```js
gl.isEnabled(gl.DITHER);
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
- [`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)
