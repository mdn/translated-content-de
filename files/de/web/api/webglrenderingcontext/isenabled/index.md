---
title: "WebGLRenderingContext: isEnabled() Methode"
short-title: isEnabled()
slug: Web/API/WebGLRenderingContext/isEnabled
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isEnabled()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) überprüft, ob eine bestimmte WebGL-Fähigkeit für diesen Kontext aktiviert ist oder nicht.

Standardmäßig sind alle Fähigkeiten, außer `gl.DITHER`, **deaktiviert**.

## Syntax

```js-nolint
isEnabled(cap)
```

### Parameter

- `cap`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche WebGL-Fähigkeit getestet werden soll. Mögliche Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                            |
    | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Mischen der berechneten Fragmentfarbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                               |
    | `gl.CULL_FACE`                | Aussortieren von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                                |
    | `gl.DEPTH_TEST`               | Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                                 |
    | `gl.DITHER`                   | Zufällige Anpassungen der Farbkomponenten, bevor sie in den Farbpuffer geschrieben werden.                                                                                              |
    | `gl.POLYGON_OFFSET_FILL`      | Hinzufügen eines Offsets zu den Tiefenwerten der Fragmente eines Polygons. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset).       |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Berechnung eines temporären Abdeckungswertes, der durch den Alphawert bestimmt wird.                                                                                                    |
    | `gl.SAMPLE_COVERAGE`          | AND-Verknüpfung der Abdeckung des Fragments mit dem temporären Abdeckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage). |
    | `gl.SCISSOR_TEST`             | Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).                |
    | `gl.STENCIL_TEST`             | Stencil-Tests und Aktualisierungen des Stencil-Puffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                              |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}} stehen zusätzlich folgende Werte zur Verfügung:

    | Konstante               | Beschreibung                                                                                                                                                |
    | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitive werden sofort vor der Rasterisierungsphase verworfen, jedoch nach der optionalen Transform-Feedback-Phase. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Fähigkeit _cap_ aktiviert (`true`) oder nicht (`false`) ist.

## Beispiele

```js
gl.isEnabled(gl.STENCIL_TEST);
// false
```

Um eine bestimmte Fähigkeit zu aktivieren oder zu deaktivieren, verwenden Sie die
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
