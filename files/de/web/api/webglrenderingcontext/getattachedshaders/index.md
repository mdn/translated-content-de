---
title: "WebGLRenderingContext: Methode getAttachedShaders()"
short-title: getAttachedShaders()
slug: Web/API/WebGLRenderingContext/getAttachedShaders
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getAttachedShaders()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) gibt eine Liste von
{{domxref("WebGLShader")}}-Objekten zurück, die an ein {{domxref("WebGLProgram")}} angehängt sind.

## Syntax

```js-nolint
getAttachedShaders(program)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}-Objekt, für das die angehängten Shader ermittelt werden sollen.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("WebGLShader")}}-Objekten, die an das
angegebene `WebGLProgram` angehängt sind.

## Beispiele

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.getAttachedShaders(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
