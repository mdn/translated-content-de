---
title: "WebGLRenderingContext: getVertexAttrib()-Methode"
short-title: getVertexAttrib()
slug: Web/API/WebGLRenderingContext/getVertexAttrib
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getVertexAttrib()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über ein Vertex-Attribut an einer gegebenen Position zurück.

## Syntax

```js-nolint
getVertexAttrib(index, pname)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des Vertex-Attributs angibt.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die abzufragenden Informationen spezifiziert. Mögliche Werte:

    - `gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING`
      - : Gibt den aktuell gebundenen {{domxref("WebGLBuffer")}} zurück.
    - `gl.VERTEX_ATTRIB_ARRAY_ENABLED`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das `true` ist, wenn das Vertex-Attribut an diesem `index` aktiviert ist. Andernfalls `false`.
    - `gl.VERTEX_ATTRIB_ARRAY_SIZE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Größe eines Elements des Vertex-Arrays angibt.
    - `gl.VERTEX_ATTRIB_ARRAY_STRIDE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Anzahl der Bytes zwischen aufeinanderfolgenden Elementen im Array angibt. 0 bedeutet, dass die Elemente aufeinander folgend sind.
    - `gl.VERTEX_ATTRIB_ARRAY_TYPE`

      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Array-Typ darstellt. Einer von

        - `gl.BYTE`
        - `gl.UNSIGNED_BYTE`
        - `gl.SHORT`,
        - `gl.UNSIGNED_SHORT`
        - `gl.FLOAT`

    - `gl.VERTEX_ATTRIB_ARRAY_NORMALIZED`
      - : Gibt ein
        {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das true ist, wenn Festkomma-Datentypen für
        das Vertex-Attribut-Array am angegebenen `index` normalisiert sind.
    - `gl.CURRENT_VERTEX_ATTRIB`

      - : Gibt ein {{jsxref("Float32Array")}}
        (mit 4 Elementen) zurück, das den aktuellen Wert des Vertex-Attributs am
        angegebenen `index` darstellt.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.VERTEX_ATTRIB_ARRAY_INTEGER`
      - : Gibt ein
        {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob ein Integer-Datentyp im
        Vertex-Attribut-Array am angegebenen `index` vorliegt.
    - `gl.VERTEX_ATTRIB_ARRAY_DIVISOR`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLint")}} zurück, das den Frequenzteiler für instanzierte Renderung beschreibt.

    Bei Verwendung der {{domxref("ANGLE_instanced_arrays")}}-Erweiterung:

    - `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
      - : Gibt ein
        {{domxref("WebGL_API/Types", "GLint")}} zurück, das den Frequenzteiler für instanzierte
        Renderung beschreibt.

### Rückgabewert

Gibt die angeforderten Informationen zum Vertex-Attribut (wie mit
`pname` angegeben) zurück.

## Beispiele

```js
gl.getVertexAttrib(0, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
- {{domxref("ANGLE_instanced_arrays")}}
