---
title: "WebGL2RenderingContext: vertexAttribI4[u]i[v]() Methode"
short-title: vertexAttribI4[u]i[v]()
slug: Web/API/WebGL2RenderingContext/vertexAttribI
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`** Methoden der [WebGL 2 API](/de/docs/Web/API/WebGL_API) spezifizieren Integer-Werte für generische Vertex-Attribute.

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
  - : Eine ganze Zahl {{jsxref("Number")}} für den Wert des Vertex-Attributs.
- `value`
  - : Ein {{jsxref("Uint32Array")}}/{{jsxref("Int32Array")}} oder Sequenzen von [`GLuint`](/de/docs/Web/API/WebGL_API/Types)/ [`GLint`](/de/docs/Web/API/WebGL_API/Types) für ganzzahlige Vektor-Vertex-Attributwerte.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.vertexAttribI4i(index, 10);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
