---
title: "WebGL2RenderingContext: getActiveUniformBlockName()-Methode"
short-title: getActiveUniformBlockName()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockName
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getActiveUniformBlockName()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft den Namen des aktiven Uniform-Blocks an einem angegebenen Index innerhalb eines {{domxref("WebGLProgram")}} ab.

## Syntax

```js-nolint
getActiveUniformBlockName(program, uniformBlockIndex)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das den Uniform-Block enthält.
- `uniformBlockIndex`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des Uniform-Blocks angibt, dessen Name abgerufen werden soll.

### Rückgabewert

Eine Zeichenkette, die den Namen des aktiven Uniform-Blocks angibt.

## Beispiele

```js
const blockName = gl.getActiveUniformBlockName(program, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
