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

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den zu rendernden Primitiventyp angibt. Mögliche Werte
    sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und
      verbindet den letzten Vertex zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Vertexen.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertexen.

    > [!NOTE]
    > Wenn `mode` `POINTS` ist, muss möglicherweise [`gl_PointSize`](https://registry.khronos.org/OpenGL-Refpages/gl4/html/gl_PointSize.xhtml) gesetzt werden, damit `drawArrays` rendert, da der Wert unbekannt ist, wenn er nicht explizit geschrieben wird. Nur einige GPUs setzen dessen Standardwert auf `1.0`.

- `first`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der zu rendernden Indizes angibt.

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

- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
- {{domxref("WEBGL_multi_draw.multiDrawArraysWEBGL()")}}
