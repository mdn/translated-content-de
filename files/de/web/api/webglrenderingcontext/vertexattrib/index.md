---
title: "WebGLRenderingContext: vertexAttrib[1234]f[v]() Methode"
short-title: vertexAttrib[1234]f[v]()
slug: Web/API/WebGLRenderingContext/vertexAttrib
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.vertexAttrib[1234]f[v]()`**-Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) legen konstanten
Werte für generische Vertex-Attribute fest.

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
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Position des zu ändernden Vertex-Attributs angibt.
- `v0`, `v1`, `v2`, `v3`
  - : Ein Fließkommawert ({{jsxref("Number")}}) für den Vertex-Attributwert.
- `value`
  - : Ein {{jsxref("Float32Array")}} für Fließkomma-Vektor-Vertex-Attributswerte.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beschreibung

Während Vertex-Attribute üblicherweise verwendet werden, um Werte anzugeben, die sich für jeden
Vertex unterscheiden (mithilfe von [`vertexAttribPointer`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)), kann es nützlich sein, einen konstanten Wert festzulegen.
Zum Beispiel, wenn Sie einen Shader haben, der ein `color`-Vertex-Attribut hat, aber alles in einer einzigen Farbe zeichnen möchten, können Sie `vertexAttrib` verwenden, um dies zu erreichen, ohne einen Puffer mit nur einem Wert zu erstellen oder einen separaten Shader zu erstellen, der eine Uniform für die Farbe verwendet.

Dieser Wert wird verwendet, wenn ein gebundener Array-Puffer nicht mit
[`enableVertexAttribArray`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aktiviert wurde.

Attribute können Matrizen sein, in diesem Fall müssen die Spalten der Matrix in
aufeinanderfolgende Vertex-Attribut-Slots geladen werden.

Die mit `vertexAttrib` gesetzten Werte sind kontext-global; das heißt, sie sind nicht Teil des Shader-Zustands
(wie generische Vertex-Attribut-Indizes zu Shader-Variablenbindungen) und nicht Teil des
Vertex-Array-Objekt-Zustands (wie aktivierte Vertex-Attribut-Arrays). Der einzige Weg, die Werte zu
ändern, besteht darin, diese Funktion erneut aufzurufen.

## Beispiele

```js
const a_foobar = gl.getAttribLocation(shaderProgram, "foobar");
//either set each component individually:
gl.vertexAttrib3f(a_foobar, 10.0, 5.0, 2.0);
//or provide a Float32Array:
const floatArray = new Float32Array([10.0, 5.0, 2.0]);
gl.vertexAttrib3fv(a_foobar, floatArray);
```

```js
// we want to load the following 3x3 matrix into attribute named "matrix3x3"
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

- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
