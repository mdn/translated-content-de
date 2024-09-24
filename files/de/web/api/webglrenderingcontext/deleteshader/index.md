---
title: "WebGLRenderingContext: deleteShader()-Methode"
short-title: deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteShader()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) markiert ein angegebenes {{domxref("WebGLShader")}}-Objekt zur Löschung. Es wird dann gelöscht, wenn der Shader nicht mehr verwendet wird. Diese Methode hat keinen Effekt, wenn der Shader bereits gelöscht wurde, und das {{domxref("WebGLShader")}} wird automatisch zur Löschung markiert, wenn es vom Garbage Collector zerstört wird.

## Syntax

```js-nolint
deleteShader(shader)
```

### Parameter

- `shader`
  - : Ein {{domxref("WebGLShader")}}-Objekt, das gelöscht werden soll.

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

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
