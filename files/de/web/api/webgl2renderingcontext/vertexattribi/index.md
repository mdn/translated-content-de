---
title: "WebGL2RenderingContext: vertexAttribI4[u]i[v]() Methode"
short-title: vertexAttribI4[u]i[v]()
slug: Web/API/WebGL2RenderingContext/vertexAttribI
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`** Methoden der [WebGL 2 API](/de/docs/Web/API/WebGL_API) spezifizieren ganzzahlige Werte für generische Vertex-Attribute.

## Syntax

```js-nolint
vertexAttribI4i(index, v0, v1, v2, v3)
vertexAttribI4ui(index, v0, v1, v2, v3)
vertexAttribI4iv(index, value)
vertexAttribI4uiv(index, value)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Position des zu modifizierenden Vertex-Attributs angibt.
- `v0`, `v1`, `v2`, `v3`
  - : Ein ganzzahliger {{jsxref("Number")}} für den Vertex-Attributwert.
- `value`
  - : Ein {{jsxref("Uint32Array")}}/{{jsxref("Int32Array")}} oder Sequenzen von
    [`GLuint`](/de/docs/Web/API/WebGL_API/Types)/ [`GLint`](/de/docs/Web/API/WebGL_API/Types) für Vektor-Vertex-Attributwerte.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.vertexAttribI4i(a_foobar, 10);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
