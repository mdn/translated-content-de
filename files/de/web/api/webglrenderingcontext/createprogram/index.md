---
title: "WebGLRenderingContext: createProgram() Methode"
short-title: createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.createProgram()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
[`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt.

## Syntax

```js-nolint
createProgram()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt, das eine Kombination aus zwei kompilierten
[`WebGLShader`](/de/docs/Web/API/WebGLShader)-Shadern ist, bestehend aus einem Vertex Shader und einem Fragment Shader (beide in GLSL geschrieben). Diese werden dann in ein nutzbares Programm verlinkt.

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
  throw `Could not compile WebGL program. \n\n${info}`;
}
```

Siehe [`WebGLShader`](/de/docs/Web/API/WebGLShader) für Informationen zur Erstellung des
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
