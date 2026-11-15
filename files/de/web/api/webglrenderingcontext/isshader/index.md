---
title: "WebGLRenderingContext: isShader()-Methode"
short-title: isShader()
slug: Web/API/WebGLRenderingContext/isShader
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isShader()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene [`WebGLShader`](/de/docs/Web/API/WebGLShader) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isShader(shader)
```

### Parameter

- `shader`
  - : Ein zu prüfender [`WebGLShader`](/de/docs/Web/API/WebGLShader). Wird `null` übergeben, gibt die Methode `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Shader gültig ist.

## Beispiele

### Einen Shader prüfen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const shader = gl.createShader(gl.VERTEX_SHADER);

// …

gl.isShader(shader);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
