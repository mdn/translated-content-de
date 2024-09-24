---
title: "WebGL2RenderingContext: drawArraysInstanced()-Methode"
short-title: drawArraysInstanced()
slug: Web/API/WebGL2RenderingContext/drawArraysInstanced
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.drawArraysInstanced()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus Array-Daten, ähnlich wie die Methode {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}}. Zusätzlich kann sie mehrere Instanzen des Bereichs der Elemente ausführen.

> [!NOTE]
> Bei der Verwendung von {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} kann die {{domxref("ANGLE_instanced_arrays")}}-Erweiterung ebenfalls diese Methode bereitstellen.

## Syntax

```js-nolint
drawArraysInstanced(mode, first, count, instanceCount)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Vertex.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Vertex und verbindet den letzten Vertex zurück zum ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Vertices.

- `first`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Startindex im Array der Vektorpunkte angibt.
- `count`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der zu rendernden Indizes angibt.
- `instanceCount`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der Instanzen des Bereichs der auszuführenden Elemente angibt.

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

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()")}}
- {{domxref("WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()")}}
