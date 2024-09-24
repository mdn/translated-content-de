---
title: "WebGLRenderingContext: isEnabled()-Methode"
short-title: isEnabled()
slug: Web/API/WebGLRenderingContext/isEnabled
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isEnabled()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) prüft, ob eine bestimmte WebGL-Funktionalität für diesen Kontext aktiviert ist oder nicht.

Standardmäßig sind alle Funktionalitäten außer `gl.DITHER` **deaktiviert**.

## Syntax

```js-nolint
isEnabled(cap)
```

### Parameter

- `cap`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welche WebGL-Funktionalität getestet werden soll. Mögliche Werte:

    | Konstante                    | Beschreibung                                                                                                                         |
    | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
    | `gl.BLEND`                   | Mischen der berechneten Fragmentfarbwerte. Siehe {{domxref("WebGLRenderingContext.blendFunc()")}}.                                  |
    | `gl.CULL_FACE`               | Aussondern von Polygonen. Siehe {{domxref("WebGLRenderingContext.cullFace()")}}.                                                     |
    | `gl.DEPTH_TEST`              | Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe {{domxref("WebGLRenderingContext.depthFunc()")}}.                     |
    | `gl.DITHER`                  | Verrauschen der Farbkomponenten, bevor sie in den Farbzwischenspeicher geschrieben werden.                                           |
    | `gl.POLYGON_OFFSET_FILL`     | Hinzufügen eines Versatzes zu den Tiefenwerten der Fragmente eines Polygons. Siehe {{domxref("WebGLRenderingContext.polygonOffset()")}}. |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE`| Berechnung eines temporären Abdeckungswertes basierend auf dem Alphawert.                                                            |
    | `gl.SAMPLE_COVERAGE`         | UND-Verknüpfung der Fragmentabdeckung mit dem temporären Abdeckungswert. Siehe {{domxref("WebGLRenderingContext.sampleCoverage()")}}. |
    | `gl.SCISSOR_TEST`            | Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe {{domxref("WebGLRenderingContext.scissor()")}}.  |
    | `gl.STENCIL_TEST`            | Stencil-Tests und Aktualisierungen des Stencil-Zwischenspeichers. Siehe {{domxref("WebGLRenderingContext.stencilFunc()")}}.          |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    | Konstante                | Beschreibung                                                                                                                                              |
    | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD`  | Primitive werden unmittelbar vor der Rasterisationsphase, aber nach der optionalen Transform-Feedback-Phase verworfen. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der anzeigt, ob die Funktionalität _cap_ aktiviert (`true`) oder nicht (`false`) ist.

## Beispiele

```js
gl.isEnabled(gl.STENCIL_TEST);
// false
```

Um eine bestimmte Funktionalität zu aktivieren oder zu deaktivieren, verwenden Sie die
{{domxref("WebGLRenderingContext.enable()")}}- und
{{domxref("WebGLRenderingContext.disable()")}}-Methoden:

```js
gl.enable(gl.STENCIL_TEST);
gl.disable(gl.STENCIL_TEST);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
