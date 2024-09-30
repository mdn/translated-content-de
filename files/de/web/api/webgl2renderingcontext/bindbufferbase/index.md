---
title: "WebGL2RenderingContext: bindBufferBase()-Methode"
short-title: bindBufferBase()
slug: Web/API/WebGL2RenderingContext/bindBufferBase
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bindBufferBase()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen gegebenen Bindungspunkt (`target`) bei einem bestimmten `index`.

## Syntax

```js-nolint
bindBufferBase(target, index, buffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel für die Bindungsoperation angibt. Mögliche Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des `target` angibt.
- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der an den Bindungspunkt (`target`) gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter)
