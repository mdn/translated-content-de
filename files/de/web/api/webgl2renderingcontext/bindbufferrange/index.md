---
title: "WebGL2RenderingContext: Methode bindBufferRange()"
short-title: bindBufferRange()
slug: Web/API/WebGL2RenderingContext/bindBufferRange
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **Methode `WebGL2RenderingContext.bindBufferRange()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen Bereich eines gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen gegebenen Bindungspunkt (`target`) an einem gegebenen `index`.

## Syntax

```js-nolint
bindBufferRange(target, index, buffer, offset, size)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), welches das Ziel für die Bindungsoperation angibt. Mögliche Werte:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), welches den Index des `target` angibt.
- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der an den Bindungspunkt (`target`) gebunden werden soll.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), welches den Startversatz angibt.
- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), welches die Menge an Daten angibt, die aus dem Puffer gelesen werden kann.

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
