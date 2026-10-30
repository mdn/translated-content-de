---
title: "OES_draw_buffers_indexed: Methode colorMaskiOES()"
short-title: colorMaskiOES()
slug: Web/API/OES_draw_buffers_indexed/colorMaskiOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `colorMaskiOES()` der WebGL-Erweiterung [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) legt für einen bestimmten Zeichenpuffer fest, welche Farbkomponenten beim Zeichnen oder Rendern aktiviert oder deaktiviert werden. Sie ist die indizierte Version der WebGL-1-Methode [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask).

## Syntax

```js-nolint
colorMaskiOES(buf, r, g, b, a)
```

### Parameter

- `buf`
  - : Eine Ganzzahl `i`, die den Zeichenpuffer angibt, der der Konstante `gl.DRAW_BUFFERi` zugeordnet ist; siehe [WebGL-Konstanten für Zeichenpuffer](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `r`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die rote Farbkomponente in den Zeichenpuffer geschrieben werden soll.
- `g`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die grüne Farbkomponente in den Zeichenpuffer geschrieben werden soll.
- `b`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die blaue Farbkomponente in den Zeichenpuffer geschrieben werden soll.
- `a`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die Alphakomponente (Transparenz) in den Zeichenpuffer geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf`, `r`, `b`, `g` oder `a` keinen gültigen Wert haben, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

### Farbmasken festlegen und abrufen

Sie können die Farbmasken für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` wie folgt festlegen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.colorMaskiOES(0, 1, 0, 0, 0);
ext.colorMaskiOES(1, 0, 1, 0, 0);
```

Um die Farbmasken für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstante `COLOR_WRITEMASK` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

```js
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 0);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
