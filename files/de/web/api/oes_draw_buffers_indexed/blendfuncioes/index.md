---
title: "OES_draw_buffers_indexed: blendFunciOES() Methode"
short-title: blendFunciOES()
slug: Web/API/OES_draw_buffers_indexed/blendFunciOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `blendFunciOES()` Methode der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung definiert, welche Funktion verwendet wird, wenn Pixel für einen bestimmten Zeichenpuffer gemischt werden.

Siehe [`OES_draw_buffers_indexed.blendFuncSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES) zum separaten Setzen von RGB- und Alphakomponenten und [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc) für die WebGL 1-Version dieser Methode.

## Syntax

```js-nolint
blendFunciOES(buf, src, dst)
```

### Parameter

- `buf`
  - : Ein ganzzahliger `i`, der den Zeichenpuffer angibt, der mit der Konstanten `gl.DRAW_BUFFERi` assoziiert ist, siehe [WebGL-Zeichenpuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `src`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Multiplikator für die Quellmischungsfaktoren angibt. Akzeptiert dieselben Enums wie der `sfactor`-Parameter in [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).
- `dst`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Multiplikator für die Zielmischungsfaktoren angibt. Akzeptiert dieselben Enums wie der `dfactor`-Parameter in [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.
- Wenn `src` oder `dst` nicht einer der möglichen Werte sind, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Die gleichen Einschränkungen für Mischungen wie bei [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc) gelten: Wenn eine konstante Farbe und ein konstanter Alphawert zusammen als Quell- und Zielfaktoren verwendet werden, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

### Setzen und Abrufen von Mischfunktionen

Sie können die Mischfunktionen für die `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` Zeichenpuffer wie folgt festlegen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendFunciOES(0, gl.ONE, gl.ONE);
ext.blendFunciOES(1, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
```

Um die Mischfunktionen für die `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` Zeichenpuffer abzurufen, fragen Sie die `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA` Konstanten mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 0);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 0);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 0);

// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 1);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 1);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 1);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.blendFuncSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES)
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
