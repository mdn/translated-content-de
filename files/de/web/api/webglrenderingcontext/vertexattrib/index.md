---
title: "WebGLRenderingContext: vertexAttrib[1234]f[v]() Methode"
short-title: vertexAttrib[1234]f[v]()
slug: Web/API/WebGLRenderingContext/vertexAttrib
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.vertexAttrib[1234]f[v]()`**
Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) legen konstante Werte für generische Vertex-Attribute fest.

## Syntax

```js-nolint
vertexAttrib1f(index, v0)
vertexAttrib2f(index, v0, v1)
vertexAttrib3f(index, v0, v1, v2)
vertexAttrib4f(index, v0, v1, v2, v3)

vertexAttrib1fv(index, value)
vertexAttrib2fv(index, value)
vertexAttrib3fv(index, value)
vertexAttrib4fv(index, value)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der die Position des zu ändernden Vertex-Attributs angibt.
- `v0`, `v1`, `v2`, `v3`
  - : Eine Gleitkommazahl ({{jsxref("Number")}}) für den Wert des Vertex-Attributs.
- `value`
  - : Ein {{jsxref("Float32Array")}} für Gleitkomma-Vektor-Vertex-Attributwerte.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Während Vertex-Attribute normalerweise verwendet werden, um Werte anzugeben, die sich für jeden Vertex unterscheiden (mittels {{domxref("WebGLRenderingContext.vertexAttribPointer()", "vertexAttribPointer")}}), kann es nützlich sein, einen konstanten Wert anzugeben. Wenn Sie beispielsweise einen Shader haben, der ein `color` Vertex-Attribut hat, aber alles in einer einzigen Farbe zeichnen möchten, können Sie `vertexAttrib` verwenden, um dies zu erreichen, ohne einen Puffer zu erstellen, der nur einen Wert enthält, oder einen separaten Shader, der eine Uniform für die Farbe verwendet.

Dieser Wert wird verwendet, wenn ein gebundener Array-Puffer nicht mit {{domxref("WebGLRenderingContext.enableVertexAttribArray()", "enableVertexAttribArray")}} aktiviert wurde.

Attribute können Matrizen sein, in diesem Fall müssen die Spalten der Matrix in aufeinanderfolgende Vertex-Attribut-Slots geladen werden.

Die mit `vertexAttrib` gesetzten Werte sind kontext-global; das heißt, sie sind nicht Teil des Shader-Status (wie generische Vertex-Attribut-Indizes zu Shader-Variablenbindungen) und sind nicht Teil des Vertex-Array-Objekt-Status (wie aktivierte Vertex-Attribut-Arrays). Die einzige Möglichkeit, die Werte zu ändern, besteht darin, diese Funktion erneut aufzurufen.

## Beispiele

```js
const a_foobar = gl.getAttribLocation(shaderProgram, "foobar");
// entweder jede Komponente einzeln festlegen:
gl.vertexAttrib3f(a_foobar, 10.0, 5.0, 2.0);
// oder ein Float32Array bereitstellen:
const floatArray = new Float32Array([10.0, 5.0, 2.0]);
gl.vertexAttrib3fv(a_foobar, floatArray);
```

```js
// wir möchten die folgende 3x3-Matrix in das Attribut namens "matrix3x3" laden
// 0 1 2
// 3 4 5
// 6 7 8
const matrix3x3Location = gl.getAttribLocation(shaderProgram, "matrix3x3");
gl.vertexAttrib3f(matrix3x3Location, 0, 3, 6);
gl.vertexAttrib3f(matrix3x3Location + 1, 1, 4, 7);
gl.vertexAttrib3f(matrix3x3Location + 2, 2, 5, 8);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
