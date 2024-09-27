---
title: "OES_draw_buffers_indexed: blendEquationiOES()-Methode"
short-title: blendEquationiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die `blendEquationiOES()`-Methode der `OES_draw_buffers_indexed` WebGL-Erweiterung setzt sowohl die RGB- als auch die Alpha-Blending-Gleichungen für einen bestimmten Zeichnungs-Puffer.

Siehe [`OES_draw_buffers_indexed.blendEquationSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES) zum separaten Setzen von RGB und Alpha und [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation) für die WebGL 1-Version dieser Methode.

## Syntax

```js-nolint
blendEquationiOES(buf, mode)
```

### Parameter

- `buf`
  - : Ein ganzzahliger `i`, der den Zeichnungs-Puffer angibt, der mit der Konstante `gl.DRAW_BUFFERi` assoziiert ist. Siehe [WebGL Zeichnungs-Puffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie Quell- und Ziel-Farben kombiniert werden. Akzeptiert dieselben Enums wie der `mode`-Parameter in [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein Fehler `gl.INVALID_VALUE` ausgelöst.
- Wenn `mode` nicht einer der möglichen Werte ist, wird ein Fehler `gl.INVALID_ENUM` ausgelöst.

## Beispiele

### Setzen und Abrufen von Blending-Gleichungen

Sie können die Blending-Gleichungen für die Zeichnungs-Puffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` so festlegen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationiOES(0, gl.FUNC_ADD);
ext.blendEquationiOES(1, gl.FUNC_SUBTRACT);
```

Um die Blending-Gleichungen für die Zeichnungs-Puffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstanten `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);

// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OES_draw_buffers_indexed.blendEquationSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES)
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
