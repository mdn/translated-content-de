---
title: "WEBGL_multi_draw: multiDrawArraysWEBGL()-Methode"
short-title: multiDrawArraysWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`WEBGL_multi_draw.multiDrawArraysWEBGL()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) rendert mehrere Primitive aus
Array-Daten. Sie ist identisch mit mehreren Aufrufen der
[`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
Methode.

## Syntax

```js-nolint
multiDrawArraysWEBGL(mode,
    firstsList, firstsOffset,
    countsList, countsOffset,
    drawCount);
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types),
    das den Typ des Primitives angibt, das gerendert werden soll. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und
      verbindet den letzten Scheitelpunkt zurück mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `firstsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (von [`GLint`](/de/docs/Web/API/WebGL_API/Types)),
    das eine Liste der Startindizes für die Arrays der Vektorpunkte angibt.
- `firstsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types),
    das den Startpunkt in das `firstsLists`-Array definiert.
- `countsList`
  - : Ein [`Int32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    oder [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (von [`GLsizei`](/de/docs/Web/API/WebGL_API/Types)),
    das eine Liste von Indizes angibt, die gerendert werden sollen.
- `countsOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types),
    das den Startpunkt in das `countsList`-Array definiert.
- `drawCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types),
    der die Anzahl der Instanzen des Bereichs der auszuführenden Elemente angibt.

### Rückgabewert

Keiner.

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `drawCount` oder Elemente in `firstsList` und
  `countsList` negativ sind,
  wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `gl.CURRENT_PROGRAM`
  [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist,
  wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.

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
