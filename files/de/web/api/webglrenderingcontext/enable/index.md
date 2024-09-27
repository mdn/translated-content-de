---
title: "WebGLRenderingContext: enable()-Methode"
short-title: enable()
slug: Web/API/WebGLRenderingContext/enable
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.enable()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) aktiviert bestimmte WebGL-Fähigkeiten
für diesen Kontext.

## Syntax

```js-nolint
enable(cap)
```

### Parameter

- `cap`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche WebGL-Fähigkeit aktiviert werden soll. Mögliche
    Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                                       |
    | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Aktiviert das Mischen der berechneten Fragmentfarbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                            |
    | `gl.CULL_FACE`                | Aktiviert das Entfernen von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                                |
    | `gl.DEPTH_TEST`               | Aktiviert Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                                  |
    | `gl.DITHER`                   | Aktiviert das Rastern von Farbkomponenten, bevor diese in den Farb-Puffer geschrieben werden.                                                                                                      |
    | `gl.POLYGON_OFFSET_FILL`      | Aktiviert das Hinzufügen eines Versatzes zu den Tiefenwerten der Fragmenten eines Polygons. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset). |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Aktiviert die Berechnung eines temporären Abdeckungswerts, der durch den Alphawert bestimmt wird.                                                                                                  |
    | `gl.SAMPLE_COVERAGE`          | Aktiviert das logische UND von Fragmentabdeckung mit dem temporären Abdeckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage).       |
    | `gl.SCISSOR_TEST`             | Aktiviert den Scherentest, der Fragmente außerhalb des Schereckrechtecks verwirft. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).                      |
    | `gl.STENCIL_TEST`             | Aktiviert das Schablonentesten und Aktualisierungen des Schablonenpuffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                      |

    Bei der Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    | Konstante               | Beschreibung                                                                                                                                              |
    | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitive werden direkt vor der Rasterisierungsphase, aber nach der optionalen Transform-Feedback-Phase verworfen. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.enable(gl.DITHER);
```

Um zu überprüfen, ob eine Fähigkeit aktiviert ist, verwenden Sie die
[`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)-Methode:

```js
gl.isEnabled(gl.DITHER);
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
- [`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)
