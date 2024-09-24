---
title: "ANGLE_instanced_arrays: drawArraysInstancedANGLE()-Methode"
short-title: drawArraysInstancedANGLE()
slug: Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("WebGL")}}

Die **`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus Array-Daten ähnlich wie die {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}}-Methode. Zusätzlich kann sie mehrere Instanzen des Elementbereichs ausführen.

> [!NOTE]
> Bei Verwendung von {{domxref("WebGL2RenderingContext", "WebGL2")}} ist diese Methode standardmäßig als {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} verfügbar.

## Syntax

```js-nolint
drawArraysInstancedANGLE(mode, first, count, primcount)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ des zu rendernden Primitivs spezifiziert. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `first`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der zu rendernden Indizes angibt.
- `primcount`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der Instanzen des auszuführenden Elementbereichs angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `first`, `count` oder `primcount` negativ sind, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `gl.CURRENT_PROGRAM` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.

## Beispiele

```js
const ext = gl.getExtension("ANGLE_instanced_arrays");
ext.drawArraysInstancedANGLE(gl.POINTS, 0, 8, 4);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
- {{domxref("WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()")}}
