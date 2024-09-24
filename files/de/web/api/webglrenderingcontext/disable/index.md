---
title: "WebGLRenderingContext: disable()-Methode"
short-title: disable()
slug: Web/API/WebGLRenderingContext/disable
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.disable()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) deaktiviert spezifische WebGL-Funktionen für diesen Kontext.

## Syntax

```js-nolint
disable(capability)
```

### Parameter

- `capability`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, welche WebGL-Fähigkeit deaktiviert werden soll. Mögliche Werte:

    | Konstante                    | Beschreibung                                                                                                                                         |
    | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                   | Deaktiviert das Mischen der berechneten Fragmentfarbwerte. Siehe {{domxref("WebGLRenderingContext.blendFunc()")}}.                                   |
    | `gl.CULL_FACE`               | Deaktiviert das Aussondern von Polygonen. Siehe {{domxref("WebGLRenderingContext.cullFace()")}}.                                                     |
    | `gl.DEPTH_TEST`              | Deaktiviert Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe {{domxref("WebGLRenderingContext.depthFunc()")}}.                         |
    | `gl.DITHER`                  | Deaktiviert das Rastern von Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                                        |
    | `gl.POLYGON_OFFSET_FILL`     | Deaktiviert das Hinzufügen eines Offsets zu Tiefenwerten von Polygonfragmenten. Siehe {{domxref("WebGLRenderingContext.polygonOffset()")}}.          |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE`| Deaktiviert die Berechnung eines temporären Deckungswerts, der durch den Alphawert bestimmt wird.                                                   |
    | `gl.SAMPLE_COVERAGE`         | Deaktiviert das AND-Verknüpfen der Fragmentabdeckung mit dem temporären Deckungswert. Siehe {{domxref("WebGLRenderingContext.sampleCoverage()")}}.   |
    | `gl.SCISSOR_TEST`            | Deaktiviert den Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe {{domxref("WebGLRenderingContext.scissor()")}}.  |
    | `gl.STENCIL_TEST`            | Deaktiviert Stencil-Tests und Aktualisierungen des Stencil-Puffers. Siehe {{domxref("WebGLRenderingContext.stencilFunc()")}}.                        |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} stehen zusätzlich folgende Werte zur Verfügung:

    | Konstante               | Beschreibung                                                                                                                                                                  |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Deaktiviert, dass Primitive unmittelbar vor der Rasterisierung verworfen werden, jedoch nach der optionalen Transform-Feedback-Phase. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
gl.disable(gl.DITHER);
```

Um zu überprüfen, ob eine Fähigkeit deaktiviert ist, verwenden Sie die
{{domxref("WebGLRenderingContext.isEnabled()")}}-Methode:

```js
gl.isEnabled(gl.DITHER);
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
