---
title: "WebGL2RenderingContext: vertexAttribIPointer() Methode"
short-title: vertexAttribIPointer()
slug: Web/API/WebGL2RenderingContext/vertexAttribIPointer
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.vertexAttribIPointer()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) spezifiziert Ganzzahldatenformate und die Positionen von Vertex-Attributen in einem Array von Vertex-Attributen.

## Syntax

```js-nolint
vertexAttribIPointer(index, size, type, stride, offset)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des zu modifizierenden Vertex-Attributs angibt.
- `size`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Komponenten pro Vertex-Attribut spezifiziert. Muss 1, 2, 3 oder 4 sein.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp jeder Komponente im Array angibt. Muss einer der folgenden sein: `gl.BYTE`, `gl.UNSIGNED_BYTE`, `gl.SHORT`, `gl.UNSIGNED_SHORT`, `gl.INT` oder `gl.UNSIGNED_INT`.
- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der den Versatz in Bytes zwischen dem Beginn aufeinanderfolgender Vertex-Attribute angibt.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset in Bytes für die erste Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Sehr ähnlich zu [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer). Der Hauptunterschied ist, dass während die von `vertexAttribPointer` spezifizierten Werte im Shader immer als Gleitkommawerte interpretiert werden (auch wenn sie ursprünglich als Ganzzahlen im Puffer angegeben wurden), diese Methode das Spezifizieren von Werten ermöglicht, die im Shader als Ganzzahlen interpretiert werden.

## Beispiele

### Lineares Blend-Skinning

```js
// Describe the layout of the buffer:
// 1. position
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
// 2. bone weights, normalized to [0, 1]
gl.vertexAttribPointer(1, 4, gl.UNSIGNED_BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
// 3. bone indices, interpreted as integer
gl.vertexAttribIPointer(2, 4, gl.UNSIGNED_BYTE, 20, 16);
gl.enableVertexAttribArray(2);

// Connect to attributes from the vertex shader
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "boneWeights");
gl.bindAttribLocation(shaderProgram, 2, "boneIndices");
```

```html
<script id="shader-vs" type="x-shader/x-vertex">
  #version 300 es

  uniform mat4 mvMatrix;
  uniform mat4 bones[120];

  in vec3 position;
  in vec4 boneWeights;
  in uvec4 boneIndices;//read as 4-component unsigned integer

  void main() {
      vec4 skinnedPosition =
          bones[boneIndices.s] * vec4(position, 1.0) * boneWeights.s +
          bones[boneIndices.t] * vec4(position, 1.0) * boneWeights.t +
          bones[boneIndices.p] * vec4(position, 1.0) * boneWeights.p +
          bones[boneIndices.q] * vec4(position, 1.0) * boneWeights.q;
      gl_Position = mvMatrix * skinnedPosition;
  }
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
