---
title: "WebGL2RenderingContext: Methode getUniformBlockIndex()"
short-title: getUniformBlockIndex()
slug: Web/API/WebGL2RenderingContext/getUniformBlockIndex
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getUniformBlockIndex()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft den Index eines Uniform-Blocks innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

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

Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Uniform-Blocks angibt.

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
