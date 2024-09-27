---
title: "WebGLRenderingContext: disable()-Methode"
short-title: disable()
slug: Web/API/WebGLRenderingContext/disable
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.disable()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) deaktiviert bestimmte WebGL-Funktionen für diesen Kontext.

## Syntax

```js-nolint
disable(capability)
```

### Parameter

- `capability`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche WebGL-Funktion deaktiviert werden soll. Mögliche Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                                       |
    | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Deaktiviert das Mischen der berechneten Fragmentfarbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                          |
    | `gl.CULL_FACE`                | Deaktiviert das Aussortieren von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                           |
    | `gl.DEPTH_TEST`               | Deaktiviert Tiefenvergleiche und Updates des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                                         |
    | `gl.DITHER`                   | Deaktiviert das Dithern von Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                                                                                      |
    | `gl.POLYGON_OFFSET_FILL`      | Deaktiviert das Hinzufügen eines Offsets zu Tiefenwerten der Fragmente eines Polygons. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset).      |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Deaktiviert die Berechnung eines temporären Deckungswertes, der durch den Alphawert bestimmt wird.                                                                                                 |
    | `gl.SAMPLE_COVERAGE`          | Deaktiviert das UND-Verknüpfen der Deckung des Fragments mit dem temporären Deckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage). |
    | `gl.SCISSOR_TEST`             | Deaktiviert den Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).           |
    | `gl.STENCIL_TEST`             | Deaktiviert Stencil-Test und Updates des Stencil-Puffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                                       |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}, sind zusätzlich folgende Werte verfügbar:

    | Konstante               | Beschreibung                                                                                                                                                                      |
    | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Deaktiviert, dass Primitiven unmittelbar vor der Rasterisierungsstufe verworfen werden, aber nach der optionalen Transform-Feedback-Stufe. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.disable(gl.DITHER);
```

Um zu prüfen, ob eine Funktion deaktiviert ist, verwenden Sie die
[`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)-Methode:

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
