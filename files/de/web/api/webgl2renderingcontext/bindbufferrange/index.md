---
title: "WebGL2RenderingContext: bindBufferRange()-Methode"
short-title: bindBufferRange()
slug: Web/API/WebGL2RenderingContext/bindBufferRange
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bindBufferRange()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen Bereich eines gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen bestimmten Bindungspunkt (`target`) bei einem bestimmten `index`.

## Syntax

```js-nolint
bindBufferRange(target, index, buffer, offset, size)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Bindungsoperation angibt. Mögliche Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das den Index des `target` angibt.
- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der an den Bindungspunkt (`target`) gebunden wird.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Startoffset angibt.
- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), der die Menge an Daten angibt, die aus dem Puffer gelesen werden können.

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
