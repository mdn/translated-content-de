---
title: "OES_draw_buffers_indexed: blendEquationiOES() Methode"
short-title: blendEquationiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `blendEquationiOES()`-Methode der `OES_draw_buffers_indexed` WebGL-Erweiterung setzt sowohl die RGB- als auch die Alpha-Blending-Gleichungen für einen bestimmten Draw-Buffer.

Siehe {{DOMxRef("OES_draw_buffers_indexed.blendEquationSeparateiOES()")}} um RGB und Alpha separat zu setzen und {{DOMxRef("WebGLRenderingContext.blendEquation()")}} für die WebGL 1-Version dieser Methode.

## Syntax

```js-nolint
blendEquationiOES(buf, mode)
```

### Parameter

- `buf`
  - : Eine ganze Zahl `i`, die den mit der Konstante `gl.DRAW_BUFFERi` verbundenen Draw-Buffer angibt, siehe [WebGL draw buffer constants](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `mode`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, wie Quell- und Ziel-Farben kombiniert werden. Akzeptiert die gleichen Enums wie der `mode` Parameter in {{DOMxRef("WebGLRenderingContext.blendEquation()")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `mode` nicht einer der möglichen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Setzen und Abrufen von Blending-Gleichungen

Sie können die Blending-Gleichungen für die `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` Draw-Buffers wie folgt setzen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationiOES(0, gl.FUNC_ADD);
ext.blendEquationiOES(1, gl.FUNC_SUBTRACT);
```

Um die Blending-Gleichungen für die `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` Draw-Buffers abzurufen, fragen Sie die Konstanten `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` mit {{domxref("WebGL2RenderingContext.getIndexedParameter()")}} ab:

```js
// Für gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);

// Für gl.DRAW_BUFFER1
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("OES_draw_buffers_indexed.blendEquationSeparateiOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendEquation()")}}
