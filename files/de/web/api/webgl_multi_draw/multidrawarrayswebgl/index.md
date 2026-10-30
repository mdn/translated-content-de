---
title: "WEBGL_multi_draw: Methode multiDrawArraysWEBGL()"
short-title: multiDrawArraysWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WEBGL_multi_draw.multiDrawArraysWEBGL()`** der [WebGL API](/de/docs/Web/API/WebGL_API) rendert mehrere Primitive aus Array-Daten. Sie entspricht mehreren Aufrufen der Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays).

## Syntax

```js-nolint
multiDrawArraysWEBGL(mode,
    firstsList, firstsOffset,
    countsList, countsOffset,
    drawCount)
```

### Parameter

- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und verbindet den letzten Vertex wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen zwei Vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck aus einer Gruppe von drei Vertices.

- `firstsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) aus [`GLint`](/de/docs/Web/API/WebGL_API/Types)-Werten, das eine Liste von Startindizes für die Arrays mit Vektorpunkten angibt.
- `firstsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Startposition im Array `firstsLists` festlegt.
- `countsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) aus [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)-Werten, das eine Liste mit der Anzahl der zu rendernden Indizes angibt.
- `countsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Startposition im Array `countsList` festlegt.
- `drawCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der angibt, wie oft der Elementbereich verarbeitet werden soll.

### Rückgabewert

Keiner.

### Ausnahmen

- Wenn `mode` keiner der zulässigen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `drawCount` oder Einträge in `firstsList` und `countsList` negativ sind, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `gl.CURRENT_PROGRAM` den Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) hat, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.

## Beispiele

```js
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
ext.multiDrawArraysWEBGL(gl.TRIANGLES, firsts, 0, counts, 0, firsts.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
