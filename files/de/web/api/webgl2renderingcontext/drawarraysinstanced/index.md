---
title: "WebGL2RenderingContext: drawArraysInstanced() Methode"
short-title: drawArraysInstanced()
slug: Web/API/WebGL2RenderingContext/drawArraysInstanced
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawArraysInstanced()`** Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus
Array-Daten ähnlich der [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
Methode. Zusätzlich kann sie mehrere Instanzen des Elementbereichs ausführen.

> [!NOTE]
> Bei der Verwendung von [WebGL 1](/de/docs/Web/API/WebGLRenderingContext),
> kann die [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays) Erweiterung diese Methode
> ebenfalls bereitstellen.

## Syntax

```js-nolint
drawArraysInstanced(mode, first, count, instanceCount)
```

### Parameter

- `mode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den zu rendernden Typ primitiver Formen angibt. Mögliche Werte
    sind:
    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und
      verbindet den letzten Vertex zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe aus drei Vertices.

- `first`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Indizes angibt, die gerendert werden sollen.
- `instanceCount`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Instanzen des Elementbereichs, die ausgeführt werden
    sollen, angibt.

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
