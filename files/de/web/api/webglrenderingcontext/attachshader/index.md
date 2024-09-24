---
title: "WebGLRenderingContext: Methode attachShader()"
short-title: attachShader()
slug: Web/API/WebGLRenderingContext/attachShader
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebGL")}}

Die **WebGLRenderingContext.attachShader()**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) fügt entweder einen Fragment- oder
Vertex-{{domxref("WebGLShader")}} zu einem {{domxref("WebGLProgram")}} hinzu.

## Syntax

```js-nolint
attachShader(program, shader)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}.
- `shader`
  - : Ein Fragment- oder Vertex-{{domxref("WebGLShader")}}.

## Beispiele

Der folgende Code fügt einem {{domxref("WebGLProgram")}} bereits vorhandene Shader hinzu.

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
