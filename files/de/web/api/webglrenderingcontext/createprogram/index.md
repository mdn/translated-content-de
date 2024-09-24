---
title: "WebGLRenderingContext: createProgram()-Methode"
short-title: createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.createProgram()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
{{domxref("WebGLProgram")}}-Objekt.

## Syntax

```js-nolint
createProgram()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLProgram")}}-Objekt, das eine Kombination von zwei kompilierten
{{domxref("WebGLShader")}}s, bestehend aus einem Vertex-Shader und einem Fragment-Shader (beide
in GLSL geschrieben), darstellt. Diese werden anschließend zu einem nutzbaren Programm verknüpft.

## Beispiele

### Erstellen eines WebGL-Programms

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

Siehe {{domxref("WebGLShader")}} für Informationen zur Erstellung des
`vertexShader` und `fragmentShader` im obigen Beispiel.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
