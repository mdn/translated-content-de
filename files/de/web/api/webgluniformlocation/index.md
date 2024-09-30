---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLUniformLocation**-Schnittstelle ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und repräsentiert die Position einer Uniform-Variablen in einem Shader-Programm.

## Beschreibung

Das `WebGLUniformLocation`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Wenn Sie mit `WebGLUniformLocation`-Objekten arbeiten, sind die folgenden Methoden des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) nützlich:

- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
- [`WebGLRenderingContext.uniform()`](/de/docs/Web/API/WebGLRenderingContext/uniform)

## Beispiele

### Abrufen eines Uniform-Standorts

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
