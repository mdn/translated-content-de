---
title: WebGLShader
slug: Web/API/WebGLShader
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Der **WebGLShader** ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und kann entweder ein Vertex- oder ein Fragment-Shader sein. Ein {{domxref("WebGLProgram")}} benötigt beide Arten von Shadern.

{{InheritanceDiagram}}

## Beschreibung

Um einen **WebGLShader** zu erstellen, verwenden Sie {{domxref("WebGLRenderingContext.createShader")}}, binden Sie dann den GLSL-Quellcode mit {{domxref("WebGLRenderingContext.shaderSource()")}} ein und rufen Sie schließlich {{domxref("WebGLRenderingContext.compileShader()")}} auf, um den Shader zu finalisieren und zu kompilieren. Zu diesem Zeitpunkt ist der **WebGLShader** noch nicht in einer nutzbaren Form und muss noch an ein {{domxref("WebGLProgram")}} angehängt werden.

```js
function createShader(gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  const shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw `Could not compile WebGL program. \n\n${info}`;
  }
  return shader;
}
```

Sehen Sie {{domxref("WebGLProgram")}} für Informationen über das Anhängen der Shader.

## Beispiele

### Erstellen eines Vertex-Shaders

Beachten Sie, dass es viele andere Strategien gibt, um Quellcode-Strings von Shadern zu schreiben und zuzugreifen. Diese Beispiele dienen nur zu Illustrationszwecken.

```js
const vertexShaderSource =
  "attribute vec4 position;\n" +
  "void main() {\n" +
  "  gl_Position = position;\n" +
  "}\n";

//Use the createShader function from the example above
const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
```

### Erstellen eines Fragment-Shaders

```js
const fragmentShaderSource =
  "void main() {\n" + "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" + "}\n";

//Use the createShader function from the example above
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

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
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
