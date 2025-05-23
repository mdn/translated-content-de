---
title: WebGLShader
slug: Web/API/WebGLShader
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Der **WebGLShader** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und kann entweder ein Vertex- oder ein Fragment-Shader sein. Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) erfordert beide Shader-Typen.

{{InheritanceDiagram}}

## Beschreibung

Um einen **WebGLShader** zu erstellen, verwenden Sie [`WebGLRenderingContext.createShader`](/de/docs/Web/API/WebGLRenderingContext/createShader), dann binden Sie den GLSL-Quellcode mit [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource) an, und rufen Sie schließlich [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) auf, um den Shader zu vervollständigen und zu kompilieren. Zu diesem Zeitpunkt befindet sich der **WebGLShader** noch nicht in einer verwendbaren Form und muss noch an ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) angehängt werden.

```js
function createShader(gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  const shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw new Error(`Could not compile WebGL program. \n\n${info}`);
  }
  return shader;
}
```

Weitere Informationen zum Anhängen der Shader finden Sie unter [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).

## Beispiele

### Erstellen eines Vertex-Shaders

Beachten Sie, dass es viele andere Strategien zum Schreiben und Zugreifen auf Shader-Quellcodes gibt. Diese Beispiele dienen nur zu Illustrationszwecken.

```js
const vertexShaderSource =
  "attribute vec4 position;\n" +
  "void main() {\n" +
  "  gl_Position = position;\n" +
  "}\n";

// Use the createShader function from the example above
const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
```

### Erstellen eines Fragment-Shaders

```js
const fragmentShaderSource = `void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

// Use the createShader function from the example above
const fragmentShader = createShader(
  gl,
  fragmentShaderSource,
  gl.FRAGMENT_SHADER,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)
- [`WebGLRenderingContext.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader)
- [`WebGLRenderingContext.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader)
- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
- [`WebGLRenderingContext.detachShader()`](/de/docs/Web/API/WebGLRenderingContext/detachShader)
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
