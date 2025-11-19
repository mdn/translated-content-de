---
title: "WebGLRenderingContext: isEnabled() Methode"
short-title: isEnabled()
slug: Web/API/WebGLRenderingContext/isEnabled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isEnabled()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) überprüft, ob eine bestimmte WebGL-Fähigkeit für diesen Kontext aktiviert ist oder nicht.

Standardmäßig sind alle Fähigkeiten außer `gl.DITHER` **deaktiviert**.

## Syntax

```js-nolint
isEnabled(cap)
```

### Parameter

- `cap`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche WebGL-Fähigkeit getestet werden soll. Mögliche Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                    |
    | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Vermischung der berechneten Fragmentfarbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                   |
    | `gl.CULL_FACE`                | Aussortieren von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                        |
    | `gl.DEPTH_TEST`               | Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                         |
    | `gl.DITHER`                   | Dithering von Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                                                                                 |
    | `gl.POLYGON_OFFSET_FILL`      | Hinzufügen eines Versatzes zu Tiefenwerten von Polygonfragmenten. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset).        |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Berechnung eines temporären Deckungswerts, der durch den Alphawert bestimmt wird.                                                                                               |
    | `gl.SAMPLE_COVERAGE`          | Verknüpfung der Deckung des Fragments mit dem temporären Deckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage). |
    | `gl.SCISSOR_TEST`             | Scherentest, der Fragmente verwirft, die außerhalb des Schere-Rechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).      |
    | `gl.STENCIL_TEST`             | Schablonentests und Aktualisierungen des Schablonenpuffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                  |

    Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

    | Konstante               | Beschreibung                                                                                                                                                   |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitive werden unmittelbar vor der Rasterisierungsphase, aber nach der optionalen Transform-Feedback-Phase verworfen. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Fähigkeit _cap_ aktiviert (`true`) oder nicht (`false`) ist.

## Beispiele

```js
gl.isEnabled(gl.STENCIL_TEST);
// false
```

Um eine spezifische Fähigkeit zu aktivieren oder zu deaktivieren, verwenden Sie die
Methoden [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) und
[`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable):

```js
gl.enable(gl.STENCIL_TEST);
gl.disable(gl.STENCIL_TEST);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
