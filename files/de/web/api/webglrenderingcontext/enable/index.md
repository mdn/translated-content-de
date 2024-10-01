---
title: "WebGLRenderingContext: enable()-Methode"
short-title: enable()
slug: Web/API/WebGLRenderingContext/enable
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.enable()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) aktiviert spezifische WebGL-Fähigkeiten für diesen Kontext.

## Syntax

```js-nolint
enable(cap)
```

### Parameter

- `cap`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche WebGL-Fähigkeit aktiviert werden soll. Mögliche Werte:

    | Konstante                     | Beschreibung                                                                                                                                                                                    |
    | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Aktiviert das Mischen der berechneten Fragment-Farbwerte. Siehe [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).                                        |
    | `gl.CULL_FACE`                | Aktiviert das Aussondern von Polygonen. Siehe [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace).                                                            |
    | `gl.DEPTH_TEST`               | Aktiviert Tiefenvergleiche und Aktualisierungen des Tiefenpuffers. Siehe [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc).                               |
    | `gl.DITHER`                   | Aktiviert das Dithern von Farbkomponenten, bevor sie in den Farb-Puffer geschrieben werden.                                                                                                     |
    | `gl.POLYGON_OFFSET_FILL`      | Aktiviert das Hinzufügen eines Offsets zu den Tiefenwerten der Fragmente eines Polygons. Siehe [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset). |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Aktiviert die Berechnung eines temporären Deckungswertes, der durch den Alphawert bestimmt wird.                                                                                                |
    | `gl.SAMPLE_COVERAGE`          | Aktiviert das Verknüpfen der Abdeckung des Fragments mit dem temporären Deckungswert. Siehe [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage).  |
    | `gl.SCISSOR_TEST`             | Aktiviert den Scherentest, der Fragmente verwirft, die außerhalb des Scherrechtecks liegen. Siehe [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor).          |
    | `gl.STENCIL_TEST`             | Aktiviert das Schablonentesten und Aktualisierungen des Schablonenpuffers. Siehe [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc).                   |

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    | Konstante               | Beschreibung                                                                                                                                                         |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitive werden sofort vor der Rasterisierungsstufe verworfen, jedoch nach der optionalen Transformationsrückkopplungsstufe. `gl.clear()`-Befehle werden ignoriert. |

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
gl.enable(gl.DITHER);
```

Um zu prüfen, ob eine Fähigkeit aktiviert ist, verwenden Sie die
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
