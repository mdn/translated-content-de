---
title: "WebGL2RenderingContext: Methode vertexAttribIPointer()"
short-title: vertexAttribIPointer()
slug: Web/API/WebGL2RenderingContext/vertexAttribIPointer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.vertexAttribIPointer()`** Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die Integer-Datenformate und Positionen von Vertex-Attributen in einem Vertex-Attribut-Array an.

## Syntax

```js-nolint
vertexAttribIPointer(index, size, type, stride, offset)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des zu modifizierenden Vertex-Attributs angibt.
- `size`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Anzahl der Komponenten pro Vertex-Attribut angibt. Muss 1, 2, 3 oder 4 sein.
- `type`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp jeder Komponente im Array angibt. Muss einer der folgenden sein: `gl.BYTE`, `gl.UNSIGNED_BYTE`, `gl.SHORT`, `gl.UNSIGNED_SHORT`, `gl.INT` oder `gl.UNSIGNED_INT`.
- `stride`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der den Offset in Bytes zwischen dem Anfang aufeinanderfolgender Vertex-Attribute angibt.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Offset in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches von `type` sein.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beschreibung

Sehr ähnlich zu {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}. Der Hauptunterschied ist, dass während die durch `vertexAttribPointer` angegebenen Werte im Shader immer als Gleitkommawerte interpretiert werden (auch wenn sie ursprünglich als Integer im Puffer angegeben wurden), diese Methode es ermöglicht, Werte anzugeben, die im Shader als Integer interpretiert werden.

## Beispiele

### Lineares Mischhaut-Skinning

```js
// Beschreiben Sie das Layout des Puffers:
// 1. Position
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
// 2. Knochengewichte, normalisiert auf [0, 1]
gl.vertexAttribPointer(1, 4, gl.UNSIGNED_BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
// 3. Knochenindizes, als Integer interpretiert
gl.vertexAttribIPointer(2, 4, gl.UNSIGNED_BYTE, 20, 16);
gl.enableVertexAttribArray(2);

// Verbinden zu Attributen aus dem Vertex-Shader
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
  in uvec4 boneIndices;//als 4-Komponenten-unsigned-Integer gelesen

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

- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
