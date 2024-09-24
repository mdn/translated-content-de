---
title: "WebGL2RenderingContext: bindBufferRange()-Methode"
short-title: bindBufferRange()
slug: Web/API/WebGL2RenderingContext/bindBufferRange
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bindBufferRange()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen Bereich eines gegebenen {{domxref("WebGLBuffer")}} an einen bestimmten Bindungspunkt (`target`) bei einem bestimmten `index`.

## Syntax

```js-nolint
bindBufferRange(target, index, buffer, offset, size)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Ziel für die Bindungsoperation angibt. Mögliche
    Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des `target` angibt.
- `buffer`
  - : Ein {{domxref("WebGLBuffer")}}, der an den Bindungspunkt
    (`target`) gebunden werden soll.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der den Startversatz angibt.
- `size`
  - : Ein {{domxref("WebGL_API/Types", "GLsizeiptr")}}, der die Menge an Daten angibt, die aus dem
    Puffer gelesen werden können.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, 1, buffer, 0, 4);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
