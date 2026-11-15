---
title: "WebGL2RenderingContext: bindSampler()-Methode"
short-title: bindSampler()
slug: Web/API/WebGL2RenderingContext/bindSampler
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bindSampler()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt an die Textureinheit mit dem angegebenen Index.

## Syntax

```js-nolint
bindSampler(unit, sampler)
```

### Parameter

- `unit`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index der Textureinheit angibt, an die der Sampler gebunden werden soll.
- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt, das gebunden werden soll, oder `null`, um die Bindung des Samplers an die Textureinheit aufzuheben und stattdessen die Sampling-Parameter der Textur zu verwenden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const sampler = gl.createSampler();
gl.bindSampler(0, sampler);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
