---
title: "OES_draw_buffers_indexed: blendFuncSeparateiOES()-Methode"
short-title: blendFuncSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die `blendFuncSeparateiOES()`-Methode der [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) WebGL-Erweiterung definiert, welche Funktion verwendet wird, wenn RGB- und Alphakomponenten eines bestimmten Zeichenpuffers getrennt gemischt werden.

Siehe [`OES_draw_buffers_indexed.blendFunciOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES) für das gleichzeitige Setzen von RGB und Alpha und [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) für die WebGL 1-Version dieser Methode.

## Syntax

```js-nolint
blendFuncSeparateiOES(buf, srcRGB, dstRGB, srcAlpha, dstAlpha)
```

### Parameter

- `buf`
  - : Ein ganzzahliger `i`, der den Zeichenpuffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` verbunden ist. Siehe [WebGL-Zeichenpuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `srcRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Multiplikator für die Rot-, Grün- und Blau- (RGB) Quell-Mischfaktoren angibt. Akzeptiert die gleichen Enums wie der `srcRGB`-Parameter in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).
- `dstRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Multiplikator für die Rot-, Grün- und Blau- (RGB) Ziel-Mischfaktoren angibt. Akzeptiert die gleichen Enums wie der `dstRGB`-Parameter in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).
- `srcAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Multiplikator für den Alpha-Quell-Mischfaktor angibt. Akzeptiert die gleichen Enums wie der `srcAlpha`-Parameter in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).
- `dstAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Multiplikator für den Alpha-Ziel-Mischfaktor angibt. Akzeptiert die gleichen Enums wie der `srcAlpha`-Parameter in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `srcRGB`, `dstRGB`, `srcAlpha` oder `dstAlpha` nicht einer der möglichen Werte sind, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Die gleichen Einschränkungen des Blendings wie für [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) gelten: Wenn eine konstante Farbe und ein konstanter Alphawert gemeinsam als Quell- und Zielfaktoren verwendet werden, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Setzen und Abfragen der Mischfunktionen

Das folgende Beispiel setzt die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` (Aufruf, bei dem `buf` 0 ist) und `gl.DRAW_BUFFER1` (Aufruf, bei dem `buf` 1 ist).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendFuncSeparateiOES(0, gl.ONE, gl.ONE, gl.ZERO, gl.ZERO);
ext.blendFuncSeparateiOES(
  1,
  gl.SRC_ALPHA,
  gl.ONE_MINUS_SRC_ALPHA,
  gl.ZERO,
  gl.ZERO,
);
```

Um die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` zu erhalten, verwenden Sie die Abfrage der Konstanten `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter):

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

- [`OES_draw_buffers_indexed.blendFunciOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES)
- [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
