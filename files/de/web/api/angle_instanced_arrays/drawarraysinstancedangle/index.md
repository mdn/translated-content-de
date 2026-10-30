---
title: "ANGLE_instanced_arrays: Methode drawArraysInstancedANGLE()"
short-title: drawArraysInstancedANGLE()
slug: Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`** der [WebGL API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten, ähnlich wie die Methode [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays). Zusätzlich kann sie mehrere Instanzen des angegebenen Elementbereichs verarbeiten.

> [!NOTE]
> Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext) ist diese Methode standardmäßig als [`gl.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) verfügbar.

## Syntax

```js-nolint
drawArraysInstancedANGLE(mode, first, count, primcount)
```

### Parameter

- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und verbindet den letzten Vertex wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Vertex-Paar.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertices.

- `first`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu rendernden Indizes angibt.
- `primcount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu verarbeitenden Instanzen des Elementbereichs angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` keiner der zulässigen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `first`, `count` oder `primcount` negativ sind, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.
- Wenn `gl.CURRENT_PROGRAM` den Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) hat, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.

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

- [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
- [`ext.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
- [`WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
