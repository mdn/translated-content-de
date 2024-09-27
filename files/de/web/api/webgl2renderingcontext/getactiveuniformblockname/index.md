---
title: "WebGL2RenderingContext: Methode getActiveUniformBlockName()"
short-title: getActiveUniformBlockName()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockName
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.getActiveUniformBlockName()`** des [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft den Namen des aktiven Uniform-Blocks an einem bestimmten Index innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

## Syntax

```js-nolint
getActiveUniformBlockName(program, uniformBlockIndex)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das den Uniform-Block enthält.
- `uniformBlockIndex`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Uniform-Blocks angibt, dessen Name abgerufen werden soll.

### Rückgabewert

Ein String, der den Namen des aktiven Uniform-Blocks angibt.

## Beispiele

```js
const blockName = gl.getActiveUniformBlockName(program, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.getUniformBlockIndex()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex)
