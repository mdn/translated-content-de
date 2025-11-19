---
title: "WebGL2RenderingContext: bindBufferRange() Methode"
short-title: bindBufferRange()
slug: Web/API/WebGL2RenderingContext/bindBufferRange
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bindBufferRange()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen Bereich eines gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen angegebenen Bindungspunkt (`target`) an einem bestimmten `index`.

## Syntax

```js-nolint
bindBufferRange(target, index, buffer, offset, size)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel für die Bindungsoperation angibt. Mögliche Werte:
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des `target` angibt.
- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der an den Bindungspunkt
    (`target`) gebunden werden soll.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Startoffset angibt.
- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), der die Datenmenge angibt, die aus dem Buffer gelesen werden kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, 1, buffer, 0, 4);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.bindBufferBase()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferBase)
