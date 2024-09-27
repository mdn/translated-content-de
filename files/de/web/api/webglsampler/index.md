---
title: WebGLSampler
slug: Web/API/WebGLSampler
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Das **`WebGLSampler`**-Interface ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und speichert Abtastparameter für den Zugriff auf [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) innerhalb eines Shaders.

{{InheritanceDiagram}}

Bei der Arbeit mit `WebGLSampler`-Objekten sind die folgenden Methoden des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) nützlich:

- [`WebGL2RenderingContext.createSampler()`](/de/docs/Web/API/WebGL2RenderingContext/createSampler)
- [`WebGL2RenderingContext.deleteSampler()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSampler)
- [`WebGL2RenderingContext.isSampler()`](/de/docs/Web/API/WebGL2RenderingContext/isSampler)
- [`WebGL2RenderingContext.bindSampler()`](/de/docs/Web/API/WebGL2RenderingContext/bindSampler)
- [`WebGL2RenderingContext.getSamplerParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSamplerParameter)

## Beispiele

### Erstellen eines `WebGLSampler`-Objekts

In diesem Beispiel muss `gl` ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sampler = gl.createSampler();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
