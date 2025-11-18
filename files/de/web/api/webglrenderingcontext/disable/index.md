---
title: "WebGLRenderingContext: disable()-Methode"
short-title: disable()
slug: Web/API/WebGLRenderingContext/disable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.disable()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) deaktiviert spezifische WebGL-Funktionen für diesen Kontext.

## Syntax

```js-nolint
disable(capability)
```

### Parameter

- `capability`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche WebGL-Funktion deaktiviert werden soll. Mögliche Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                                           |
    | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `gl.BLEND`                    | Deaktiviert das Mischen der berechneten Fragmentfarbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                              |
    | `gl.CULL_FACE`                | Deaktiviert das Entfernen (Culling) von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                        |
    | `gl.DEPTH_TEST`               | Deaktiviert Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                                    |
    | `gl.DITHER`                   | Deaktiviert Dithering der Farbkomponenten, bevor sie in den Farbpuffer geschrieben werden.                                                                                                             |
    | `gl.POLYGON_OFFSET_FILL`      | Deaktiviert das Hinzufügen einer Verschiebung zu den Tiefenwerten der Fragmente eines Polygons. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset). |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Deaktiviert die Berechnung eines temporären Deckungswertes basierend auf dem Alphawert.                                                                                                                |
    | `gl.SAMPLE_COVERAGE`          | Deaktiviert das AND-Verknüpfen der Fragmentabdeckung mit dem temporären Deckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage).         |
    | `gl.SCISSOR_TEST`             | Deaktiviert den Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).               |
    | `gl.STENCIL_TEST`             | Deaktiviert Schablonentests und Aktualisierungen des Schablonenpuffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                             |

    Bei Verwendung eines [WebGL 2-Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

    | Konstante               | Beschreibung                                                                                                                                                                        |
    | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Deaktiviert, dass Primitiven unmittelbar vor der Rasterisierungsphase, jedoch nach der optionalen Transform-Feedback-Phase verworfen werden. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.disable(gl.DITHER);
```

Um zu überprüfen, ob eine Funktion deaktiviert ist, verwenden Sie die
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
