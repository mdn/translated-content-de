---
title: "WebGL2RenderingContext: bindBufferBase() Methode"
short-title: bindBufferBase()
slug: Web/API/WebGL2RenderingContext/bindBufferBase
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bindBufferBase()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen gegebenen {{domxref("WebGLBuffer")}} an einen bestimmten Bindungspunkt (`target`) an einem gegebenen `index`.

## Syntax

```js-nolint
bindBufferBase(target, index, buffer)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel für die Bindungsoperation angibt. Mögliche Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des `target` angibt.
- `buffer`
  - : Ein {{domxref("WebGLBuffer")}}, der an den Bindungspunkt (`target`) gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffer);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
