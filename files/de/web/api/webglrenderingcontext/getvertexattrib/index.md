---
title: "WebGLRenderingContext: getVertexAttrib() Methode"
short-title: getVertexAttrib()
slug: Web/API/WebGLRenderingContext/getVertexAttrib
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getVertexAttrib()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über ein Vertex-Attribut an einer angegebenen Position zurück.

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
      - : Gibt den derzeit gebundenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) zurück.
    - `gl.VERTEX_ATTRIB_ARRAY_ENABLED`
      - : Gibt einen [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der `true` ist, wenn das Vertex-Attribut bei diesem `index` aktiviert ist. Andernfalls `false`.
    - `gl.VERTEX_ATTRIB_ARRAY_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Größe eines Elements des Vertex-Arrays angibt.
    - `gl.VERTEX_ATTRIB_ARRAY_STRIDE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Anzahl der Bytes zwischen aufeinanderfolgenden Elementen im Array angibt. 0 bedeutet, dass die Elemente aufeinanderfolgend sind.
    - `gl.VERTEX_ATTRIB_ARRAY_TYPE`

      - : Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Array-Typ repräsentiert. Einer von

        - `gl.BYTE`
        - `gl.UNSIGNED_BYTE`
        - `gl.SHORT`,
        - `gl.UNSIGNED_SHORT`
        - `gl.FLOAT`

    - `gl.VERTEX_ATTRIB_ARRAY_NORMALIZED`
      - : Gibt einen [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der true ist, wenn Festkomma-Datentypen für das Vertex-Attribut-Array am angegebenen `index` normalisiert sind.
    - `gl.CURRENT_VERTEX_ATTRIB`

      - : Gibt ein {{jsxref("Float32Array")}} (mit 4 Elementen) zurück, das den aktuellen Wert des Vertex-Attributs am angegebenen `index` darstellt.

    Wenn ein [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext) verwendet wird, sind zusätzlich die folgenden Werte verfügbar:

    - `gl.VERTEX_ATTRIB_ARRAY_INTEGER`
      - : Gibt einen [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der angibt, ob ein ganzzahliger Datentyp im Vertex-Attribut-Array am angegebenen `index` vorliegt.
    - `gl.VERTEX_ATTRIB_ARRAY_DIVISOR`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Frequenz-Divisor beschreibt, der für instanzbasiertes Rendering verwendet wird.

    Bei Verwendung der [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays) Erweiterung:

    - `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Frequenz-Divisor beschreibt, der für instanzbasiertes Rendering verwendet wird.

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
