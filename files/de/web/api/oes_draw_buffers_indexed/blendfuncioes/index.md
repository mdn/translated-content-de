---
title: "OES_draw_buffers_indexed: blendFunciOES()-Methode"
short-title: blendFunciOES()
slug: Web/API/OES_draw_buffers_indexed/blendFunciOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `blendFunciOES()`-Methode der {{DOMxRef("OES_draw_buffers_indexed")}} WebGL-Erweiterung definiert, welche Funktion beim Mischen von Pixeln für einen bestimmten Zeichenpuffer verwendet wird.

Siehe {{DOMxRef("OES_draw_buffers_indexed.blendFuncSeparateiOES()")}} zum separaten Festlegen von RGB- und Alphakomponenten und {{DOMxRef("WebGLRenderingContext.blendFunc()")}} für die WebGL-1-Version dieser Methode.

## Syntax

```js-nolint
blendFunciOES(buf, src, dst)
```

### Parameter

- `buf`
  - : Ein ganzzahliger `i`, der den Zeichenpuffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` verbunden ist, siehe [WebGL-Zeichenpuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `src`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Multiplikator für die Quellmischfaktoren angibt. Akzeptiert die gleichen Enums wie der `sfactor`-Parameter in {{DOMxRef("WebGLRenderingContext.blendFunc()")}}.
- `dst`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Multiplikator für die Zielmischfaktoren angibt. Akzeptiert die gleichen Enums wie der `dfactor`-Parameter in {{DOMxRef("WebGLRenderingContext.blendFunc()")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `src` oder `dst` nicht einer der möglichen Werte sind, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Die gleichen Mischbeschränkungen wie für {{DOMxRef("WebGLRenderingContext.blendFunc()")}} gelten: Wenn eine konstante Farbe und ein konstanter Alphawert zusammen als Quell- und Ziel-Faktoren verwendet werden, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Festlegen und Abrufen von Mischfunktionen

Sie können die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` wie folgt festlegen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendFunciOES(0, gl.ONE, gl.ONE);
ext.blendFunciOES(1, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
```

Um die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstanten `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA` mittels {{domxref("WebGL2RenderingContext.getIndexedParameter()")}} ab:

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

- {{DOMxRef("OES_draw_buffers_indexed.blendFuncSeparateiOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendFunc()")}}
