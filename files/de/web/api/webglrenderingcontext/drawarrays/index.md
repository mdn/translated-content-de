---
title: "WebGLRenderingContext: drawArrays()-Methode"
short-title: drawArrays()
slug: Web/API/WebGLRenderingContext/drawArrays
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.drawArrays()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus Array-Daten.

## Syntax

```js-nolint
drawArrays(mode, first, count)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und
      verbindet den letzten Scheitelpunkt zurück mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck aus einer Gruppe von drei Scheitelpunkten.

    > [!NOTE]
    > Wenn `mode` `POINTS` ist, muss eventuell [`gl_PointSize`](https://registry.khronos.org/OpenGL-Refpages/gl4/html/gl_PointSize.xhtml) gesetzt werden, damit `drawArrays` rendert, da sein Wert unbekannt ist, wenn er nicht explizit geschrieben wird. Nur einige GPUs setzen seinen Standardwert auf `1.0`.

- `first`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu rendernden Indizes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `first` oder `count` negativ sind, wird ein
  `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `gl.CURRENT_PROGRAM` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird ein
  `gl.INVALID_OPERATION`-Fehler ausgelöst.

## Beispiele

```js
gl.drawArrays(gl.POINTS, 0, 8);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
- [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
- [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
- [`ext.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
- [`WEBGL_multi_draw.multiDrawArraysWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
