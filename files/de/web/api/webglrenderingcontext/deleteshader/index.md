---
title: "WebGLRenderingContext: deleteShader()-Methode"
short-title: deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteShader()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) markiert ein angegebenes [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt zur Löschung. Es wird dann gelöscht, sobald der Shader nicht mehr verwendet wird. Diese Methode hat keine Wirkung, wenn der Shader bereits gelöscht wurde, und der [`WebGLShader`](/de/docs/Web/API/WebGLShader) wird automatisch zur Löschung markiert, wenn er vom Garbage Collector zerstört wird.

## Syntax

```js-nolint
deleteShader(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Shaders

```js
gl.deleteShader(shader);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
