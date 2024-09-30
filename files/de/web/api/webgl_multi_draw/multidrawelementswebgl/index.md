---
title: "WEBGL_multi_draw: multiDrawElementsWEBGL()-Methode"
short-title: multiDrawElementsWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WEBGL_multi_draw.multiDrawElementsWEBGL()`**-Methode des
[WebGL API](/de/docs/Web/API/WebGL_API) rendert mehrere Primitiven aus
Array-Daten. Sie ist identisch mit mehreren Aufrufen der
[`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)-Methode.

## Syntax

```js-nolint
multiDrawElementsWEBGL(mode,
    countsList, countsOffset,
    type,
    firstsList, firstsOffset,
    drawCount);
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types),
    der den Typ des zu renderten Primitivs angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und
      verbindet den letzten Vertex mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Vertexen.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertexen.

- `countsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (von [`GLint`](/de/docs/Web/API/WebGL_API/Types)),
    das eine Liste von Anzahlen von zu rendernden Indizes angibt.
- `countsOffset`
  - : Ein [`GLUint`](/de/docs/Web/API/WebGL_API/Types),
    das den Startpunkt im `countsList`-Array definiert.
- type

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das
    den Typ der Werte im Element-Array-Buffer angibt. Mögliche Werte sind:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - Bei Verwendung der [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint)-Erweiterung:

      - `gl.UNSIGNED_INT`

- `offsetsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (von [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)),
    das eine Liste von Startindizes für die Arrays von Vektorpunkten angibt.
- `offsetsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types),
    das den Startpunkt im `offsetsList`-Array definiert.
- `drawCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types),
    das die Anzahl der Instanzen des Bereichs von Elementen angibt, die ausgeführt werden sollen.

### Rückgabewert

Keiner.

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `drawCount` oder Elemente in `countsList` oder
  `offsetsList` negativ sind,
  wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

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
