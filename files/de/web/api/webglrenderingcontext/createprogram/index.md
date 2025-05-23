---
title: "WebGLRenderingContext: createProgram() Methode"
short-title: createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.createProgram()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
[`WebGLProgram`](/de/docs/Web/API/WebGLProgram) Objekt.

## Syntax

```js-nolint
createProgram()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) Objekt, das aus zwei kompilierten
[`WebGLShader`](/de/docs/Web/API/WebGLShader)s besteht: einem Vertex-Shader und einem Fragment-Shader (beide
geschrieben in GLSL). Diese werden dann zu einem nutzbaren Programm verknüpft.

## Beispiele

### Erstellen eines WebGL-Programms

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw new Error(`Could not compile WebGL program. \n\n${info}`);
}
```

Siehe [`WebGLShader`](/de/docs/Web/API/WebGLShader) für Informationen zur Erstellung der
`vertexShader` und `fragmentShader` im obigen Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
