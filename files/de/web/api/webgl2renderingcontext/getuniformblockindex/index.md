---
title: "WebGL2RenderingContext: getUniformBlockIndex() Methode"
short-title: getUniformBlockIndex()
slug: Web/API/WebGL2RenderingContext/getUniformBlockIndex
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getUniformBlockIndex()`** Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ermittelt den Index eines Uniform-Blocks innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).

## Syntax

```js-nolint
getUniformBlockIndex(program, uniformBlockName)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das den Uniform-Block enthält.
- `uniformName`
  - : Ein String, der den Namen des Uniform-Blocks angibt, dessen Index abgerufen werden soll.

### Rückgabewert

Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Uniform-Block-Index angibt.

## Beispiele

```js
// Assuming a shader with the following declaration:
// uniform UBOData {
//   mat4 foo;
// } instanceName;

// use the block name, not the instance name:
const blockIndex = gl.getUniformBlockIndex(program, "UBOData");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.getUniformIndices()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
