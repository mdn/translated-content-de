---
title: "WebGL2RenderingContext: Methode drawElementsInstanced()"
short-title: drawElementsInstanced()
slug: Web/API/WebGL2RenderingContext/drawElementsInstanced
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.drawElementsInstanced()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) rendert Primitive aus Array-Daten wie die {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}-Methode. Zusätzlich kann sie mehrere Instanzen eines Satzes von Elementen ausführen.

> [!NOTE]
> Bei Verwendung von {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} kann die {{domxref("ANGLE_instanced_arrays")}}-Erweiterung diese Methode ebenfalls bereitstellen.

## Syntax

```js-nolint
drawElementsInstanced(mode, count, type, offset, instanceCount)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ des zu rendernden Primitivs angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt wieder mit dem ersten.
    - `gl.LINES`: Zeichnet eine Linie zwischen einem Paar von Scheitelpunkten.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Zeichnet ein Dreieck für eine Gruppe von drei Scheitelpunkten.

- `count`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der zu renderten Elemente angibt.
- `type`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ der Werte im Element-Array-Puffer angibt. Mögliche Werte sind:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT` bei Verwendung der {{domxref("OES_element_index_uint")}}-Erweiterung.

- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Versatz im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.
- `instanceCount`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der Instanzen des auszuführenden Element-Satzes angibt.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
- {{domxref("WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()")}}
