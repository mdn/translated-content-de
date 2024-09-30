---
title: "WebGLRenderingContext: deleteShader()-Methode"
short-title: deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.deleteShader()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) markiert ein angegebenes [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt zur Löschung. Es wird dann gelöscht, wann immer der Shader nicht mehr verwendet wird. Diese Methode hat keine Wirkung, wenn der Shader bereits gelöscht wurde, und das [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt wird automatisch zur Löschung markiert, wenn es vom Garbage Collector zerstört wird.

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
