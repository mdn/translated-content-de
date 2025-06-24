---
title: "WebGL2RenderingContext: drawElementsInstanced() Methode"
short-title: drawElementsInstanced()
slug: Web/API/WebGL2RenderingContext/drawElementsInstanced
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawElementsInstanced()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) rendert Primitive aus
Array-Daten wie die [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)-Methode. Darüber hinaus kann sie mehrere Instanzen eines Elementsatzes ausführen.

> [!NOTE]
> Bei Verwendung von [WebGL 1](/de/docs/Web/API/WebGLRenderingContext) kann die [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)-Erweiterung diese Methode ebenfalls bereitstellen.

## Syntax

```js-nolint
drawElementsInstanced(mode, count, type, offset, instanceCount)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ des zu rendernden Primitives angibt. Mögliche Werte sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt zurück mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der zu rendernden Elemente angibt.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ der Werte im Elementarray-Puffer angibt. Mögliche Werte sind:
    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT` bei Verwendung der [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint)-Erweiterung.

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Versatz im Elementarray-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.
- `instanceCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen des auszuführenden Elementsatzes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `offset` ein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst.
- Wenn `count` oder `instanceCount` negativ sind, wird ein `gl.INVALID_VALUE`-Fehler ausgelöst.

## Beispiele

```js
gl.drawElementsInstanced(gl.POINTS, 2, gl.UNSIGNED_SHORT, 0, 4);
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
- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
- [`WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
