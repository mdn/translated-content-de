---
title: "OES_draw_buffers_indexed: Methode blendFuncSeparateiOES()"
short-title: blendFuncSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode `blendFuncSeparateiOES()` der WebGL-Erweiterung [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed) legt fest, welche Funktion beim Überblenden von Pixeln für die RGB- und Alpha-Komponenten eines bestimmten Zeichenpuffers jeweils verwendet wird.

Informationen zum gemeinsamen Festlegen von RGB und Alpha finden Sie unter [`OES_draw_buffers_indexed.blendFunciOES()`](/de/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES). Die WebGL-1-Version dieser Methode ist [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).

## Syntax

```js-nolint
blendFuncSeparateiOES(buf, srcRGB, dstRGB, srcAlpha, dstAlpha)
```

### Parameter

- `buf`
  - : Eine Ganzzahl `i`, die den mit der Konstante `gl.DRAW_BUFFERi` verknüpften Zeichenpuffer angibt. Siehe [WebGL-Konstanten für Zeichenpuffer](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `srcRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die Quell-Überblendfaktoren der roten, grünen und blauen (RGB-)Komponenten angibt. Akzeptiert dieselben Enum-Werte wie der Parameter `srcRGB` in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).
- `dstRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die Ziel-Überblendfaktoren der roten, grünen und blauen (RGB-)Komponenten angibt. Akzeptiert dieselben Enum-Werte wie der Parameter `dstRGB` in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).
- `srcAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für den Alpha-Quell-Überblendfaktor angibt. Akzeptiert dieselben Enum-Werte wie der Parameter `srcAlpha` in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).
- `dstAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für den Alpha-Ziel-Überblendfaktor angibt. Akzeptiert dieselben Enum-Werte wie der Parameter `srcAlpha` in [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` kein gültiger Wert ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `srcRGB`, `dstRGB`, `srcAlpha` oder `dstAlpha` keiner der möglichen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Es gelten dieselben Einschränkungen für das Überblenden wie bei [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate): Wenn eine konstante Farbe und ein konstanter Alpha-Wert gemeinsam als Quell- und Zielfaktoren verwendet werden, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

### Überblendfunktionen festlegen und abrufen

Im folgenden Beispiel werden die Überblendfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` (Aufruf mit `buf` gleich 0) und `gl.DRAW_BUFFER1` (Aufruf mit `buf` gleich 1) festgelegt.

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

Um die Überblendfunktionen für die Zeichenpuffer `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzurufen, fragen Sie die Konstanten `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA` mit [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) ab:

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
