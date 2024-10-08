---
title: "WEBGL_debug_shaders: getTranslatedShaderSource() Methode"
short-title: getTranslatedShaderSource()
slug: Web/API/WEBGL_debug_shaders/getTranslatedShaderSource
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WEBGL_debug_shaders.getTranslatedShaderSource()`** Methode ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht Ihnen das Debuggen eines übersetzten Shaders.

## Syntax

```js-nolint
getTranslatedShaderSource(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader), von dem der übersetzte Quellcode abgerufen werden soll.

### Rückgabewert

Ein {{jsxref("String")}}, der den übersetzten Shader-Quellcode enthält. Ein leerer String wird zurückgegeben, wenn:

- kein Quellcode definiert wurde oder,
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader) noch nicht aufgerufen wurde oder,
- die Übersetzung für den Shader fehlgeschlagen ist.

## Beispiele

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const shader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(
  shader,
  "void main() { gl_FragColor = vec4(gl_FragCoord.x, 0.0, 0.0, 1.0); }",
);
gl.compileShader(shader);

const src = gl
  .getExtension("WEBGL_debug_shaders")
  .getTranslatedShaderSource(shader);
console.log(src);
// "void main(){
// (gl_FragColor = vec4(gl_FragCoord.x, 0.0, 0.0, 1.0));
// }"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLShader`](/de/docs/Web/API/WebGLShader)
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader)
