---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

Die **WebGLUniformLocation**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert die Position einer Uniform-Variablen in einem Shader-Programm.

## Beschreibung

Das `WebGLUniformLocation`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Bei der Arbeit mit `WebGLUniformLocation`-Objekten sind die folgenden Methoden des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) nützlich:

- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
- [`WebGLRenderingContext.uniform()`](/de/docs/Web/API/WebGLRenderingContext/uniform)

## Beispiele

### Erhalten einer Uniform-Position

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const location = gl.getUniformLocation(WebGLProgram, "uniformName");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
