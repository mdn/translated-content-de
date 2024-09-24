---
title: "WebGL2RenderingContext: uniformBlockBinding()-Methode"
short-title: uniformBlockBinding()
slug: Web/API/WebGL2RenderingContext/uniformBlockBinding
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.uniformBlockBinding()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) weist Bindepunkte
für aktive Uniformblöcke zu.

## Syntax

```js-nolint
uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das den aktiven Uniformblock enthält, dessen Bindung zugewiesen werden soll.
- `uniformBlockIndex`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des aktiven Uniformblocks innerhalb des Programms angibt.
- `uniformBlockBinding`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Bindepunkt angibt, an den der Uniformblock gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.uniformBlockBinding(program, 0, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
