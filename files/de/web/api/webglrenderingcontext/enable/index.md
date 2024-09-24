---
title: "WebGLRenderingContext: enable()-Methode"
short-title: enable()
slug: Web/API/WebGLRenderingContext/enable
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.enable()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) aktiviert bestimmte WebGL-Fähigkeiten für diesen Kontext.

## Syntax

```js-nolint
enable(cap)
```

### Parameter

- `cap`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welche WebGL-Fähigkeit aktiviert werden soll. Mögliche Werte:

    | Konstante                   | Beschreibung                                                                                                                                   |
    | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                  | Aktiviert das Blending der berechneten Fragmentfarbwerte. Siehe {{domxref("WebGLRenderingContext.blendFunc()")}}.                              |
    | `gl.CULL_FACE`              | Aktiviert das Entfernen von Polygonflächen. Siehe {{domxref("WebGLRenderingContext.cullFace()")}}.                                              |
    | `gl.DEPTH_TEST`             | Aktiviert Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe {{domxref("WebGLRenderingContext.depthFunc()")}}.                      |
    | `gl.DITHER`                 | Aktiviert das Dithering von Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                                  |
    | `gl.POLYGON_OFFSET_FILL`    | Aktiviert das Hinzufügen eines Offsets zu den Tiefenwerten von Polygonfragmenten. Siehe {{domxref("WebGLRenderingContext.polygonOffset()")}}.   |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Aktiviert die Berechnung eines temporären Deckungswertes, der durch den Alphawert bestimmt wird.                                               |
    | `gl.SAMPLE_COVERAGE`        | Aktiviert das UND-Verknüpfen der Deckung des Fragments mit dem temporären Deckungswert. Siehe {{domxref("WebGLRenderingContext.sampleCoverage()")}}. |
    | `gl.SCISSOR_TEST`           | Aktiviert den Scherentest, der Fragmente verwirft, die sich außerhalb des Scherrechtecks befinden. Siehe {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`           | Aktiviert den Stencil-Test und Aktualisierungen des Stencil-Puffers. Siehe {{domxref("WebGLRenderingContext.stencilFunc()")}}.                  |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    | Konstante              | Beschreibung                                                                                                                                          |
    | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `gl.RASTERIZER_DISCARD` | Primitive werden unmittelbar vor der Rasterisierungsstufe, aber nach der optionalen Transform-Feedback-Stufe verworfen. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.enable(gl.DITHER);
```

Um zu überprüfen, ob eine Fähigkeit aktiviert ist, verwenden Sie die
Methode {{domxref("WebGLRenderingContext.isEnabled()")}}:

```js
gl.isEnabled(gl.DITHER);
// true
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
