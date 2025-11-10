---
title: "WebGLRenderingContext: drawElements() Methode"
short-title: drawElements()
slug: Web/API/WebGLRenderingContext/drawElements
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.drawElements()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus Array-Daten.

## Syntax

```js-nolint
drawElements(mode, count, type, offset)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und
      verbindet den letzten Scheitelpunkt wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu rendernden Elemente des gebundenen Element-Array-Puffers angibt. Zum Beispiel, um ein Drahtgitterdreieck mit `gl.LINES` zu zeichnen, sollte die Anzahl 2 Endpunkte pro Linie × 3 Linien = 6 Elemente betragen. Um jedoch dasselbe Drahtgitterdreieck mit `gl.LINE_STRIP` zu zeichnen, wiederholt der Element-Array-Puffer nicht die Indizes für das Ende der ersten Linie/den Anfang der zweiten Linie und das Ende der zweiten Linie/den Anfang der dritten Linie, daher wird `count` vier sein. Um dasselbe Dreieck mit `gl.LINE_LOOP` zu zeichnen, wiederholt der Element-Array-Puffer auch nicht den ersten/letzten Scheitelpunkt, daher wird `count` drei sein.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ der Werte im Element-Array-Puffer angibt. Mögliche Werte sind:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`

    Bei Verwendung der [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint) Erweiterung:

    - `gl.UNSIGNED_INT`

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Byte-Offset im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein
  `gl.INVALID_ENUM` Fehler ausgelöst.
- Wenn `offset` kein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein
  `gl.INVALID_OPERATION` Fehler ausgelöst.
- Wenn `count` negativ ist, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.

## Beispiele

```js
gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_BYTE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint)
- [`WEBGL_multi_draw.multiDrawElementsWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
