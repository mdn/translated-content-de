---
title: "OES_draw_buffers_indexed: Methode colorMaskiOES()"
short-title: colorMaskiOES()
slug: Web/API/OES_draw_buffers_indexed/colorMaskiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die Methode `colorMaskiOES()` der {{DOMxRef("OES_draw_buffers_indexed")}} WebGL-Erweiterung legt fest, welche Farbkomponenten beim Zeichnen oder Rendering für einen bestimmten Ausgabepuffer aktiviert oder deaktiviert werden. Es handelt sich um die indizierte Version der Methode {{domxref("WebGLRenderingContext.colorMask()")}} von WebGL 1.

## Syntax

```js-nolint
colorMaskiOES(buf, r, g, b, a)
```

### Parameter

- `buf`
  - : Eine ganze Zahl `i`, die den Ausgabepuffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` verbunden ist, siehe [WebGL draw buffer constants](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `r`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die rote Farbkomponente in den Ausgabepuffer geschrieben werden soll.
- `g`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die grüne Farbkomponente in den Ausgabepuffer geschrieben werden soll.
- `b`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die blaue Farbkomponente in den Ausgabepuffer geschrieben werden soll.
- `a`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die rote Alpha-Komponente (Transparenz) in den Ausgabepuffer geschrieben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf`, `r`, `b`, `g` oder `a` keine gültigen Werte sind, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

### Setzen und Abrufen von Farbmasken

Sie können die Farbmasken für die Ausgabepuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` folgendermaßen setzen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.colorMaskiOES(0, 1, 0, 0, 0);
ext.colorMaskiOES(1, 0, 1, 0, 0);
```

Um die Farbmasken für die Ausgabepuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstante `COLOR_WRITEMASK` mit {{domxref("WebGL2RenderingContext.getIndexedParameter()")}} ab:

```js
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 0);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
- {{domxref("WebGLRenderingContext.colorMask()")}}
