---
title: "OES_draw_buffers_indexed: Methode blendEquationSeparateiOES()"
short-title: blendEquationSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("WebGL")}}

Die Methode `blendEquationSeparateiOES()` der {{DOMxRef("OES_draw_buffers_indexed")}} WebGL-Erweiterung legt die RGB- und Alpha-Blendgleichungen separat für einen bestimmten Zeichnungspuffer fest.

Siehe {{DOMxRef("OES_draw_buffers_indexed.blendEquationiOES()")}} für das gemeinsame Setzen von RGB und Alpha und {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}} für die WebGL-1-Version dieser Methode.

## Syntax

```js-nolint
blendEquationSeparateiOES(buf, modeRGB, modeAlpha)
```

### Parameter

- `buf`
  - : Ein ganzzahliger Wert `i`, der den mit der Konstanten `gl.DRAW_BUFFERi` verbundenen Zeichnungspuffer angibt, siehe [WebGL-Zeichnungspuffer-Konstanten](/de/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `modeRGB`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das bestimmt, wie Quell- und Ziel-RGB-Farbkomponenten kombiniert werden. Akzeptiert die gleichen Enums wie der Parameter `modeRGB` in {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}}.
- `modeAlpha`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das bestimmt, wie Quell- und Ziel-Alpha-Farbkomponenten kombiniert werden. Akzeptiert die gleichen Enums wie der Parameter `modeAlpha` in {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `buf` keinen gültigen Wert darstellt, wird ein Fehler `gl.INVALID_VALUE` ausgelöst.
- Wenn `modeRGB` oder `modeAlpha` nicht auf einen der möglichen Werte gesetzt sind, wird ein Fehler `gl.INVALID_ENUM` ausgelöst.

## Beispiele

### Festlegen und Abfragen von Blendgleichungen

Das folgende Beispiel setzt die Blendgleichungen für die Zeichnungspuffer `gl.DRAW_BUFFER0` (Aufruf, bei dem `buf` 0 ist) und `gl.DRAW_BUFFER1` (Aufruf, bei dem `buf` 1 ist).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationSeparateiOES(0, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
ext.blendEquationSeparateiOES(1, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

Um die Blendgleichungen für `gl.DRAW_BUFFER0` und `gl.DRAW_BUFFER1` abzufragen, verwenden Sie die Konstanten `BLEND_EQUATION_RGB` und `BLEND_EQUATION_ALPHA` mit {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}:

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

- {{DOMxRef("OES_draw_buffers_indexed.blendEquationiOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}}
