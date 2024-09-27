---
title: "WebGL2RenderingContext: drawArraysInstanced() Methode"
short-title: drawArraysInstanced()
slug: Web/API/WebGL2RenderingContext/drawArraysInstanced
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.drawArraysInstanced()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten ähnlich der [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)-Methode. Zusätzlich kann sie mehrere Instanzen des Bereichs von Elementen ausführen.

> [!NOTE]
> Wenn Sie {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} verwenden, kann die [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)-Erweiterung diese Methode ebenfalls bereitstellen.

## Syntax

```js-nolint
drawArraysInstanced(mode, first, count, instanceCount)
```

### Parameter

- `mode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den zu rendernden Primitivtyp angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und verbindet den letzten Vertex zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertices.

- `first`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu rendernden Indizes angibt.
- `instanceCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen des Bereichs von Elementen angibt, die ausgeführt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.drawArraysInstanced(gl.POINTS, 0, 8, 4);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
- [`WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()`](/de/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
