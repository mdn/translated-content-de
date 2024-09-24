---
title: "WebGL2RenderingContext: Methoden vertexAttribI4[u]i[v]()"
short-title: vertexAttribI4[u]i[v]()
slug: Web/API/WebGL2RenderingContext/vertexAttribI
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`** Methoden der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legen ganzzahlige Werte für generische Vertex-Attribute fest.

## Syntax

```js-nolint
vertexAttribI4i(index, v0, v1, v2, v3)
vertexAttribI4ui(index, v0, v1, v2, v3)
vertexAttribI4iv(index, value)
vertexAttribI4uiv(index, value)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der die Position des zu ändernden Vertex-Attributs angibt.
- `v0`, `v1`, `v2`, `v3`
  - : Eine ganze {{jsxref("Number")}} für den Vertex-Attributwert.
- `value`
  - : Ein {{jsxref("Uint32Array")}}/{{jsxref("Int32Array")}} oder Sequenzen von {{domxref("WebGL_API/Types", "GLuint")}}/ {{domxref("WebGL_API/Types", "GLint")}} für Werte von integer-Vektor-Vertex-Attributen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.vertexAttribI4i(a_foobar, 10);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
