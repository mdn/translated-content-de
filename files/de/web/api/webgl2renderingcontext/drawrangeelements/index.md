---
title: "WebGL2RenderingContext: drawRangeElements()-Methode"
short-title: drawRangeElements()
slug: Web/API/WebGL2RenderingContext/drawRangeElements
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawRangeElements()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten in einem gegebenen Bereich.

## Syntax

```js-nolint
drawRangeElements(mode, start, end, count, type, offset)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `start`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den minimalen Array-Index angibt, der in `offset` enthalten ist.
- `end`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den maximalen Array-Index angibt, der in `offset` enthalten ist.
- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu rendernden Elemente angibt.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ der Werte im Element-Array-Puffer angibt. Mögliche Werte sind:
    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT`

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `offset` ein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.
- Wenn `count` negativ ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

```js
gl.drawRangeElements(gl.POINTS, 0, 7, 8, gl.UNSIGNED_BYTE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
