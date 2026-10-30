---
title: "WEBGL_multi_draw: Methode multiDrawElementsWEBGL()"
short-title: multiDrawElementsWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WEBGL_multi_draw.multiDrawElementsWEBGL()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) rendert mehrere Primitive aus Array-Daten. Sie entspricht mehreren Aufrufen der Methode [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements).

## Syntax

```js-nolint
multiDrawElementsWEBGL(mode,
    countsList, countsOffset,
    type,
    firstsList, firstsOffset,
    drawCount)
```

### Parameter

- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und verbindet den letzten Vertex wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen zwei Vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertices.

- `countsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) aus [`GLint`](/de/docs/Web/API/WebGL_API/Types)-Werten, das eine Liste mit der Anzahl der jeweils zu rendernden Indizes angibt.
- `countsOffset`
  - : Ein [`GLUint`](/de/docs/Web/API/WebGL_API/Types), das die Startposition im Array `countsList` festlegt.
- type
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ der Werte im Element-Array-Buffer angibt. Mögliche Werte sind:
    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - Bei Verwendung der Erweiterung [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint):
      - `gl.UNSIGNED_INT`

- `offsetsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) aus [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)-Werten, das eine Liste von Startindizes für die Arrays der Vektorpunkte angibt.
- `offsetsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das die Startposition im Array `offsetsList` festlegt.
- `drawCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der auszuführenden Instanzen des Elementbereichs angibt.

### Rückgabewert

Keiner.

### Ausnahmen

- Wenn `mode` keiner der zulässigen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `drawCount` oder Einträge in `countsList` oder `offsetsList` negativ sind, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

```js
const counts = new Int32Array(/* … */);
const offsets = new Int32Array(/* … */);
ext.multiDrawElementsWEBGL(
  gl.TRIANGLES,
  counts,
  0,
  gl.UNSIGNED_SHORT,
  offsets,
  0,
  counts.length,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
