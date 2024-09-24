---
title: "OES_draw_buffers_indexed: blendFuncSeparateiOES() Methode"
short-title: blendFuncSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die `blendFuncSeparateiOES()` Methode der {{DOMxRef("OES_draw_buffers_indexed")}} WebGL-Erweiterung definiert, welche Funktion verwendet wird, wenn Pixel für die RGB- und Alphakomponenten separat für einen bestimmten Zeichenpuffer gemischt werden.

Siehe {{DOMxRef("OES_draw_buffers_indexed.blendFunciOES()")}} zum Setzen von RGB und Alpha zusammen sowie {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}} für die WebGL 1-Version dieser Methode.

## Syntax

```js-nolint
blendFuncSeparateiOES(buf, srcRGB, dstRGB, srcAlpha, dstAlpha)
```

### Parameter

- `buf`
  - : Eine ganze Zahl `i`, die den Zeichenpuffer spezifiziert, der mit der Konstante `gl.DRAW_BUFFERi` assoziiert ist, siehe [WebGL-Zeichenpuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `srcRGB`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Multiplikator für die roten, grünen und blauen (RGB) Quell-Mischfaktoren angibt. Akzeptiert die gleichen Enums wie der `srcRGB` Parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.
- `dstRGB`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Multiplikator für die roten, grünen und blauen (RGB) Ziel-Mischfaktoren angibt. Akzeptiert die gleichen Enums wie der `dstRGB` Parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.
- `srcAlpha`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Multiplikator für den Alpha-Quell-Mischfaktor angibt. Akzeptiert die gleichen Enums wie der `srcAlpha` Parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.
- `dstAlpha`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Multiplikator für den Alpha-Ziel-Mischfaktor angibt. Akzeptiert die gleichen Enums wie der `srcAlpha` Parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.
- Wenn `srcRGB`, `dstRGB`, `srcAlpha` oder `dstAlpha` nicht einer der möglichen Werte sind, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Die gleichen Mischbeschränkungen wie für {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}} gelten: Wenn eine konstante Farbe und ein konstanter Alphawert zusammen als Quellen- und Ziel-Faktoren verwendet werden, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

### Festlegen und Abrufen von Mischfunktionen

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

Um die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstanten `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA` mit {{domxref("WebGL2RenderingContext.getIndexedParameter()")}} ab:

```js
// Für gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 0);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 0);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 0);

// Für gl.DRAW_BUFFER1
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

- {{DOMxRef("OES_draw_buffers_indexed.blendFunciOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}
