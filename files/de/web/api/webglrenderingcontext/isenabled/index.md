---
title: "WebGLRenderingContext: isEnabled() Methode"
short-title: isEnabled()
slug: Web/API/WebGLRenderingContext/isEnabled
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isEnabled()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) prüft, ob eine bestimmte WebGL-Funktionalität in diesem Kontext aktiviert ist oder nicht.

Standardmäßig sind alle Funktionalitäten, mit Ausnahme von `gl.DITHER`, **deaktiviert**.

## Syntax

```js-nolint
isEnabled(cap)
```

### Parameter

- `cap`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche WebGL-Funktionalität getestet werden soll. Mögliche Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                            |
    | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Mischen der berechneten Fragmentfarbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                               |
    | `gl.CULL_FACE`                | Ausblenden von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                                  |
    | `gl.DEPTH_TEST`               | Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                                 |
    | `gl.DITHER`                   | Dithering von Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                                                                                         |
    | `gl.POLYGON_OFFSET_FILL`      | Hinzufügen eines Offsets zu den Tiefenwerten der Fragmenten eines Polygons. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset).      |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Berechnung eines temporären Abdeckungswerts, der durch den Alphawert bestimmt wird.                                                                                                     |
    | `gl.SAMPLE_COVERAGE`          | AND-Verknüpfung der Abdeckung des Fragments mit dem temporären Abdeckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage). |
    | `gl.SCISSOR_TEST`             | Der Scherentest verwirft Fragmente, die außerhalb des Scherrechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).                 |
    | `gl.STENCIL_TEST`             | Schablonentests und Aktualisierungen des Schablonenpuffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                          |

    Bei der Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}} stehen zusätzlich die folgenden Werte zur Verfügung:

    | Konstante               | Beschreibung                                                                                                                                                          |
    | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitive werden unmittelbar vor der Rasterisierungsphase, aber nach der optionalen Transformations-Feedback-Phase, verworfen. `gl.clear()` Befehle werden ignoriert. |

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Funktionalität _cap_ aktiviert (`true`) oder nicht (`false`) ist.

## Beispiele

```js
gl.isEnabled(gl.STENCIL_TEST);
// false
```

Um eine spezifische Funktionalität zu aktivieren oder zu deaktivieren, verwenden Sie die
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
