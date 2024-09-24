---
title: "WebGLRenderingContext: Methode drawElements()"
short-title: drawElements()
slug: Web/API/WebGLRenderingContext/drawElements
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.drawElements()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten.

## Syntax

```js-nolint
drawElements(mode, count, type, offset)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den zu rendernden Primitive-Typ angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und
      verbindet den letzten Scheitelpunkt mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `count`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der zu rendernden Elemente des gebundenen Element-Array-Puffers angibt. Zum Beispiel sollte die Anzahl, um ein Drahtgitter-Dreieck mit `gl.LINES` zu zeichnen, 2 Endpunkte pro Linie × 3 Linien = 6 Elemente betragen. Um jedoch dasselbe Drahtgitter-Dreieck mit `gl.LINE_STRIP` zu zeichnen, wiederholt der Element-Array-Puffer die Indizes für das Ende der ersten Linie/den Anfang der zweiten Linie und das Ende der zweiten Linie/den Anfang der dritten Linie nicht, sodass `count` vier sein wird. Um dasselbe Dreieck mit `gl.LINE_LOOP` zu zeichnen, wiederholt der Element-Array-Puffer den ersten/letzten Scheitelpunkt ebenfalls nicht, sodass `count` drei sein wird.
- `type`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ der Werte im Element-Array-Puffer angibt. Mögliche Werte sind:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`

    Bei Verwendung der {{domxref("OES_element_index_uint")}}-Erweiterung:

    - `gl.UNSIGNED_INT`

- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Byte-Offset im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `offset` kein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein
  `gl.INVALID_OPERATION`-Fehler ausgelöst.
- Wenn `count` negativ ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

```js
gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_BYTE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("WEBGL_multi_draw.multiDrawElementsWEBGL()")}}
