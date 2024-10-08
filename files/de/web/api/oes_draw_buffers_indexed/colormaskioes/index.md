---
title: "OES_draw_buffers_indexed: colorMaskiOES() Methode"
short-title: colorMaskiOES()
slug: Web/API/OES_draw_buffers_indexed/colorMaskiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die Methode `colorMaskiOES()` der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung legt fest, welche Farbkomponenten beim Zeichnen oder Rendern für einen bestimmten Zeichenpuffer aktiviert oder deaktiviert werden. Es ist die indizierte Version der Methode [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask) aus WebGL 1.

## Syntax

```js-nolint
colorMaskiOES(buf, r, g, b, a)
```

### Parameter

- `buf`
  - : Ein ganzzahliger Wert `i`, der den Zeichenpuffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` verbunden ist. Siehe [WebGL Zeichenpufferkonstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `r`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die rote Farbkomponente in den Zeichenpuffer geschrieben werden soll oder nicht.
- `g`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die grüne Farbkomponente in den Zeichenpuffer geschrieben werden soll oder nicht.
- `b`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die blaue Farbkomponente in den Zeichenpuffer geschrieben werden soll oder nicht.
- `a`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die rote Alpha-Komponente (Transparenz) in den Zeichenpuffer geschrieben werden soll oder nicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf`, `r`, `b`, `g` oder `a` keine gültigen Werte sind, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.

## Beispiele

### Einstellen und Abrufen von Farbmasken

Sie können die Farbmasken für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` wie folgt einstellen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.colorMaskiOES(0, 1, 0, 0, 0);
ext.colorMaskiOES(1, 0, 1, 0, 0);
```

Um die Farbmasken für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, können Sie die Konstante `COLOR_WRITEMASK` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) abfragen:

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
