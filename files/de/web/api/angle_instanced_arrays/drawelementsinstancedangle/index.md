---
title: "ANGLE_instanced_arrays: drawElementsInstancedANGLE() Methode"
short-title: drawElementsInstancedANGLE()
slug: Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("WebGL")}}

Die **`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) rendert Primitiven aus Array-Daten ähnlich wie die Methode {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}. Zusätzlich kann sie mehrere Instanzen eines Satzes von Elementen ausführen.

> [!NOTE]
> Bei Verwendung von {{domxref("WebGL2RenderingContext", "WebGL2")}} ist diese Methode standardmäßig als {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}} verfügbar.

## Syntax

```js-nolint
drawElementsInstancedANGLE(mode, count, type, offset, primcount)
```

### Parameter

- `mode`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den zu rendernden Primitivtyp angibt. Mögliche Werte sind:

    - `gl.POINTS`: Zeichnet einen einzelnen Punkt.
    - `gl.LINE_STRIP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt.
    - `gl.LINE_LOOP`: Zeichnet eine gerade Linie zum nächsten Scheitelpunkt und verbindet den letzten Scheitelpunkt zurück zum ersten.
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
    - `gl.UNSIGNED_INT` bei Verwendung der {{domxref("OES_element_index_uint")}} Erweiterung.

- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Offset im Element-Array-Puffer angibt. Muss ein gültiges Vielfaches der Größe des angegebenen `type` sein.
- `primcount`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Anzahl der Instanzen des auszuführenden Elementsatzes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `mode` nicht einer der akzeptierten Werte ist, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.
- Wenn `offset` ein ungültiges Vielfaches der Größe des angegebenen Typs ist, wird ein `gl.INVALID_OPERATION` Fehler ausgelöst.
- Wenn `count` oder `primcount` negativ sind, wird ein `gl.INVALID_VALUE` Fehler ausgelöst.

## Beispiele

```js
const ext = gl.getExtension("ANGLE_instanced_arrays");
ext.drawElementsInstancedANGLE(gl.POINTS, 2, gl.UNSIGNED_SHORT, 0, 4);
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
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
- {{domxref("WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()")}}
