---
title: "WEBGL_multi_draw: multiDrawArraysInstancedWEBGL() Methode"
short-title: multiDrawArraysInstancedWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}

Die **`WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) rendert mehrere Primitive aus Array-Daten. Sie ist identisch mit mehrfachen Aufrufen der [`gl.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) Methode.

## Syntax

```js-nolint
multiDrawArraysInstancedWEBGL(mode,
    firstsList, firstsOffset,
    countsList, countsOffset,
    instanceCountsList, instanceCountsOffset,
    drawCount)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ des Primitivs zum Rendern angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `firstsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (von [`GLint`](/de/docs/Web/API/WebGL_API/Types)), der eine Liste von Startindizes für die Arrays von Vectorpunkten angibt.
- `firstsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Startpunkt im `firstsLists` Array definiert.
- `countsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (von [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)), der eine Liste von Anzahlen von Indizes, die gerendert werden sollen, angibt.
- `countsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Startpunkt im `countsList` Array definiert.
- `instanceCountsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (von [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)), der eine Liste von Anzahlen von Instanzen des Bereichs von Elementen, die ausgeführt werden sollen, angibt.
- `instanceCountsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Startpunkt im `instanceCountsList` Array definiert.
- `drawCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen des Bereichs von Elementen, die ausgeführt werden sollen, angibt.

### Rückgabewert

Keiner.

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Wenn `drawCount` oder Elemente in `firstsList`, `countsList` oder `instanceCountsList` negativ sind, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.
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
