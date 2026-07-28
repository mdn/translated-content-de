---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **WebGLUniformLocation** Interface ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert die Position einer Uniform-Variablen in einem Shader-Programm.

## Beschreibung

Das `WebGLUniformLocation`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLUniformLocation`-Objekten sind die folgenden Methoden des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) nützlich:

- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
- [`WebGLRenderingContext.uniform()`](/de/docs/Web/API/WebGLRenderingContext/uniform)

## Beispiele

### Abrufen der Uniform-Position

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
