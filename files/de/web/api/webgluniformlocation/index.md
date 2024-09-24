---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

Die **WebGLUniformLocation**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert die Position einer Uniform-Variable in einem Shader-Programm.

## Beschreibung

Das `WebGLUniformLocation`-Objekt definiert keine eigenen Methoden oder Eigenschaften und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLUniformLocation`-Objekten sind die folgenden Methoden des {{domxref("WebGLRenderingContext")}} nützlich:

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
- {{domxref("WebGLRenderingContext.uniform()")}}

## Beispiele

### Erhalten eines Uniform-Standorts

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

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
