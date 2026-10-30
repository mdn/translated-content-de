---
title: "OES_draw_buffers_indexed: Methode blendFunciOES()"
short-title: blendFunciOES()
slug: Web/API/OES_draw_buffers_indexed/blendFunciOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `blendFunciOES()` der WebGL-Erweiterung [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) legt fest, welche Funktion beim Mischen von Pixeln für einen bestimmten Zeichenpuffer verwendet wird.

Informationen zum getrennten Festlegen der RGB- und Alpha-Komponenten finden Sie unter [`OES_draw_buffers_indexed.blendFuncSeparateiOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES). Die WebGL-1-Version dieser Methode ist [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).

## Syntax

```js-nolint
blendFunciOES(buf, src, dst)
```

### Parameter

- `buf`
  - : Eine Ganzzahl `i`, die den mit der Konstante `gl.DRAW_BUFFERi` verknüpften Zeichenpuffer angibt. Siehe [WebGL-Zeichenpufferkonstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `src`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die Mischfaktoren der Quelle angibt. Akzeptiert dieselben Enum-Werte wie der Parameter `sfactor` in [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).
- `dst`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die Mischfaktoren des Ziels angibt. Akzeptiert dieselben Enum-Werte wie der Parameter `dfactor` in [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `src` oder `dst` keiner der zulässigen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Es gelten dieselben Einschränkungen für das Mischen wie bei [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc): Wenn eine konstante Farbe und ein konstanter Alpha-Wert gemeinsam als Quell- und Zielfaktoren verwendet werden, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Mischfunktionen festlegen und abfragen

Sie können die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` wie folgt festlegen:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendFunciOES(0, gl.ONE, gl.ONE);
ext.blendFunciOES(1, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
```

Um die Mischfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzufragen, fragen Sie die Konstanten `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

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
