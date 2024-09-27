---
title: "WebGLRenderingContext: Methode getVertexAttrib()"
short-title: getVertexAttrib()
slug: Web/API/WebGLRenderingContext/getVertexAttrib
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getVertexAttrib()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) liefert Informationen über ein Vertex-Attribut an einer gegebenen Position zurück.

## Syntax

```js-nolint
getVertexAttrib(index, pname)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Vertex-Attributs angibt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die abzufragende Information angibt. Mögliche Werte:

    - `gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING`
      - : Gibt den aktuell gebundenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) zurück.
    - `gl.VERTEX_ATTRIB_ARRAY_ENABLED`
      - : Gibt einen [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der `true` ist, wenn das Vertex-Attribut an diesem `index` aktiviert ist. Andernfalls `false`.
    - `gl.VERTEX_ATTRIB_ARRAY_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Größe eines Elements des Vertex-Arrays angibt.
    - `gl.VERTEX_ATTRIB_ARRAY_STRIDE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Anzahl der Bytes zwischen aufeinanderfolgenden Elementen im Array angibt. 0 bedeutet, dass die Elemente sequentiell sind.
    - `gl.VERTEX_ATTRIB_ARRAY_TYPE`

      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Array-Typ darstellt. Einer der folgenden Werte:

        - `gl.BYTE`
        - `gl.UNSIGNED_BYTE`
        - `gl.SHORT`,
        - `gl.UNSIGNED_SHORT`
        - `gl.FLOAT`

    - `gl.VERTEX_ATTRIB_ARRAY_NORMALIZED`
      - : Gibt einen
        [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der `true` ist, wenn Festkomma-Datentypen für das Vertex-Attribut-Array am angegebenen `index` normalisiert sind.
    - `gl.CURRENT_VERTEX_ATTRIB`

      - : Gibt eine {{jsxref("Float32Array")}} (mit 4 Elementen) zurück, die den aktuellen Wert des Vertex-Attributs am angegebenen `index` darstellt.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.VERTEX_ATTRIB_ARRAY_INTEGER`
      - : Gibt einen
        [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der anzeigt, ob ein ganzzahliger Datentyp im Vertex-Attribut-Array am angegebenen `index` vorhanden ist.
    - `gl.VERTEX_ATTRIB_ARRAY_DIVISOR`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Frequenzdivisor beschreibt, der für instanziertes Rendering verwendet wird.

    Bei Verwendung der [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)-Erweiterung:

    - `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
      - : Gibt einen
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Frequenzdivisor beschreibt, der für instanziertes Rendering verwendet wird.

### Rückgabewert

Gibt die angeforderten Informationen zum Vertex-Attribut zurück (wie mit `pname` angegeben).

## Beispiele

```js
gl.getVertexAttrib(0, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
- [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)
