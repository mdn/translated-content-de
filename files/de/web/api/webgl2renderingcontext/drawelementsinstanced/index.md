---
title: "WebGL2RenderingContext: Methode drawElementsInstanced()"
short-title: drawElementsInstanced()
slug: Web/API/WebGL2RenderingContext/drawElementsInstanced
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawElementsInstanced()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten wie die Methode [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements). Zusätzlich kann sie mehrere Instanzen eines Satzes von Elementen ausführen.

> [!NOTE]
> Bei Verwendung von [WebGL 1](/de/docs/Web/API/WebGLRenderingContext) kann die Erweiterung [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays) diese Methode auch bereitstellen.

## Syntax

```js-nolint
drawElementsInstanced(mode, count, type, offset, instanceCount)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den zu rendernden Primitive-Typ angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu rendernden Elemente angibt.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Typ der Werte im Element-Array-Puffer angibt. Mögliche Werte sind:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT` Bei Verwendung der [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint) Erweiterung.

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.
- `instanceCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen des auszuführenden Elementsatzes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` keiner der akzeptierten Werte ist, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn `offset` ein gültiges Vielfaches der Größe des angegebenen Typs ist, wird ein
  `gl.INVALID_OPERATION`-Fehler ausgelöst.
- Wenn `count` oder `instanceCount` negativ sind, wird ein
  `gl.INVALID_VALUE`-Fehler ausgelöst.

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
