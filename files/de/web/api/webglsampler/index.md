---
title: WebGLSampler
slug: Web/API/WebGLSampler
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **`WebGLSampler`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und speichert Abtastparameter für den Zugriff auf {{domxref("WebGLTexture")}} innerhalb eines Shaders.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLSampler`-Objekten sind die folgenden Methoden des {{domxref("WebGL2RenderingContext")}} nützlich:

- {{domxref("WebGL2RenderingContext.createSampler()")}}
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
- {{domxref("WebGL2RenderingContext.isSampler()")}}
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}

## Beispiele

### Erstellen eines `WebGLSampler`-Objekts

In diesem Beispiel muss `gl` ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sampler = gl.createSampler();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
