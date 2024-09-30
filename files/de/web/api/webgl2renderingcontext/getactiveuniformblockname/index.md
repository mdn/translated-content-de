---
title: "WebGL2RenderingContext: getActiveUniformBlockName()-Methode"
short-title: getActiveUniformBlockName()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockName
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getActiveUniformBlockName()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft den Namen des aktiven Uniform-Blocks an einem gegebenen Index innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

## Syntax

```js-nolint
getActiveUniformBlockName(program, uniformBlockIndex)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das den Uniform-Block enthält.
- `uniformBlockIndex`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Uniform-Blocks angibt, dessen Namen abgerufen werden soll.

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
