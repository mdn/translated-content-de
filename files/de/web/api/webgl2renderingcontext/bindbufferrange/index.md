---
title: "WebGL2RenderingContext: bindBufferRange()-Methode"
short-title: bindBufferRange()
slug: Web/API/WebGL2RenderingContext/bindBufferRange
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bindBufferRange()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen Bereich eines bestimmten [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen Bindungspunkt (`target`) mit einem bestimmten `index`.

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
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das den Index von `target` angibt.
- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der an den Bindungspunkt (`target`) gebunden werden soll, oder `null`, um die indizierte Bindung und die allgemeine Bindung für das angegebene Ziel aufzuheben.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das den Anfangsversatz angibt.
- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Datenmenge angibt, die aus dem Buffer gelesen werden kann.

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
