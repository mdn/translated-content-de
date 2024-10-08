---
title: "WebGL2RenderingContext: Methode uniformBlockBinding()"
short-title: uniformBlockBinding()
slug: Web/API/WebGL2RenderingContext/uniformBlockBinding
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.uniformBlockBinding()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) weist Binding-Punkte
für aktive Uniformblöcke zu.

## Syntax

```js-nolint
uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das den aktiven Uniformblock enthält, dessen Binding zugewiesen wird.
- `uniformBlockIndex`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des aktiven Uniformblocks innerhalb des Programms angibt.
- `uniformBlockBinding`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Binding-Punkt angibt, an den der Uniformblock gebunden wird.

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

- [`WebGL2RenderingContext.getUniformIndices()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
