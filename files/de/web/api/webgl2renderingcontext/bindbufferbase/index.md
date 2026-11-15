---
title: "WebGL2RenderingContext: bindBufferBase()-Methode"
short-title: bindBufferBase()
slug: Web/API/WebGL2RenderingContext/bindBufferBase
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bindBufferBase()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet einen angegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen angegebenen Bindungspunkt (`target`) mit einem angegebenen `index`.

## Syntax

```js-nolint
bindBufferBase(target, index, buffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Bindungsoperation angibt. Mögliche Werte:
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index von `target` angibt.
- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der an den Bindungspunkt (`target`) gebunden werden soll, oder `null`, um die indizierte und die allgemeine Bindung für das angegebene Ziel aufzuheben.

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
