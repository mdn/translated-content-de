---
title: "WebGLRenderingContext: validateProgram()-Methode"
short-title: validateProgram()
slug: Web/API/WebGLRenderingContext/validateProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.validateProgram()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) validiert ein {{domxref("WebGLProgram")}}. Sie prüft, ob es erfolgreich verknüpft wurde und im aktuellen WebGL-Zustand verwendet werden kann.

## Syntax

```js-nolint
validateProgram(program)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}} zur Validierung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.validateProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}

gl.useProgram(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
