---
title: "WebGLRenderingContext: linkProgram()-Methode"
short-title: linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`linkProgram()`**-Methode der {{domxref("WebGLRenderingContext")}}-Schnittstelle verknüpft ein gegebenes {{domxref("WebGLProgram")}} und vervollständigt den Prozess der Vorbereitung des GPU-Codes für die Fragment- und Vertex-Shader des Programms.

## Syntax

```js-nolint
linkProgram(program)
```

### Parameter

- `program`
  - : Das zu verknüpfende {{domxref("WebGLProgram")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw new Error(`Could not compile WebGL program. \n\n${info}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
