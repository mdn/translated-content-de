---
title: "WebGL2RenderingContext: getUniformBlockIndex()-Methode"
short-title: getUniformBlockIndex()
slug: Web/API/WebGL2RenderingContext/getUniformBlockIndex
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getUniformBlockIndex()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft den Index eines Uniform-Blocks innerhalb eines {{domxref("WebGLProgram")}} ab.

## Syntax

```js-nolint
getUniformBlockIndex(program, uniformBlockName)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das den Uniform-Block enthält.
- `uniformName`
  - : Ein String, der den Namen des Uniform-Blocks angibt, dessen Index abgerufen werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des Uniform-Blocks angibt.

## Beispiele

```js
// Angenommen, ein Shader mit folgender Deklaration:
// uniform UBOData {
//   mat4 foo;
// } instanceName;

// Verwenden Sie den Blocknamen, nicht den Instanznamen:
const blockIndex = gl.getUniformBlockIndex(program, "UBOData");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
