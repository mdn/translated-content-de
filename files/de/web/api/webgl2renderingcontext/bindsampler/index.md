---
title: "WebGL2RenderingContext: bindSampler()-Methode"
short-title: bindSampler()
slug: Web/API/WebGL2RenderingContext/bindSampler
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bindSampler()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt an die Textureinheit am übergebenen Index.

## Syntax

```js-nolint
bindSampler(unit, sampler)
```

### Parameter

- `unit`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index der Textureinheit angibt, an die der Sampler gebunden werden soll.
- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt, das gebunden werden soll.

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
