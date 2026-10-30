---
title: "ANGLE_instanced_arrays: Methode drawElementsInstancedANGLE()"
short-title: drawElementsInstancedANGLE()
slug: Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten, ähnlich wie die Methode [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements). Zusätzlich kann sie mehrere Instanzen einer Menge von Elementen rendern.

> [!NOTE]
> Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext) ist diese Methode standardmäßig als [`gl.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced) verfügbar.

## Syntax

```js-nolint
drawElementsInstancedANGLE(mode, count, type, offset, primcount)
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

- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der zu rendernden Elemente angibt.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ der Werte im Element-Array-Buffer angibt. Mögliche Werte sind:
    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT` bei Verwendung der Erweiterung [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint).

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das einen Offset im Element-Array-Buffer angibt. Der Wert muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.
- `primcount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der zu rendernden Instanzen der Elementmenge angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` keiner der zulässigen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `offset` kein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.
- Wenn `count` oder `primcount` negativ ist, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

```js
const ext = gl.getExtension("ANGLE_instanced_arrays");
ext.drawElementsInstancedANGLE(gl.POINTS, 2, gl.UNSIGNED_SHORT, 0, 4);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
- [`ext.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
- [`WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
