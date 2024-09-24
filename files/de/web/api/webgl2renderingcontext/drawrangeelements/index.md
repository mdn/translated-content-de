---
title: "WebGL2RenderingContext: drawRangeElements()-Methode"
short-title: drawRangeElements()
slug: Web/API/WebGL2RenderingContext/drawRangeElements
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.drawRangeElements()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus Array-Daten in einem gegebenen Bereich.

## Syntax

```js-nolint
drawRangeElements(mode, start, end, count, type, offset)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `start`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den minimalen Array-Index angibt, der in `offset` enthalten ist.
- `end`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den maximalen Array-Index angibt, der in `offset` enthalten ist.
- `count`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der zu rendernden Elemente angibt.
- `type`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ der Werte im Element-Array-Puffer angibt. Mögliche Werte sind:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT`

- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Offset im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein Fehler `gl.INVALID_ENUM` ausgelöst.
- Wenn `offset` ein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein Fehler `gl.INVALID_OPERATION` ausgelöst.
- Wenn `count` negativ ist, wird ein Fehler `gl.INVALID_VALUE` ausgelöst.

## Beispiele

```js
gl.drawRangeElements(gl.POINTS, 0, 7, 8, gl.UNSIGNED_BYTE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.drawElements()")}}
