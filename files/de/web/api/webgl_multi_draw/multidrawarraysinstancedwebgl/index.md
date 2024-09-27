---
title: "WEBGL_multi_draw: multiDrawArraysInstancedWEBGL() Methode"
short-title: multiDrawArraysInstancedWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) rendert mehrere Primitiven aus Array-Daten. Sie ist identisch mit mehreren Aufrufen der [`gl.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) Methode.

## Syntax

```js-nolint
multiDrawArraysInstancedWEBGL(mode,
    firstsList, firstsOffset,
    countsList, countsOffset,
    instanceCountsList, instanceCountsOffset,
    drawCount);
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und verbindet den letzten Vertex zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertices.

- `firstsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (von [`GLint`](/de/docs/Web/API/WebGL_API/Types)), der eine Liste von Startindizes für die Arrays von Vektor-Punkten angibt.
- `firstsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Startpunkt in das `firstsLists` Array definiert.
- `countsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (von [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)), der eine Liste von Zahlen der zu rendernden Indizes angibt.
- `countsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Startpunkt in das `countsList` Array definiert.
- `instanceCountsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (von [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)), der eine Liste von Zahlen der Instanzen des Bereichs der auszuführenden Elemente angibt.
- `instanceCountsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Startpunkt in das `instanceCountsList` Array definiert.
- `drawCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen des Bereichs der auszuführenden Elemente angibt.

### Rückgabewert

Keiner.

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Wenn `drawCount` oder Einträge in `firstsList`, `countsList` oder `instanceCountsList` negativ sind, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.
- Wenn `gl.CURRENT_PROGRAM` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird ein `gl.INVALID_OPERATION` Fehler ausgelöst.

## Beispiele

```js
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
const instanceCounts = new Int32Array(/* … */);
ext.multiDrawArraysInstancedWEBGL(
  gl.TRIANGLES,
  firsts,
  0,
  counts,
  0,
  instanceCounts,
  0,
  firsts.length,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
