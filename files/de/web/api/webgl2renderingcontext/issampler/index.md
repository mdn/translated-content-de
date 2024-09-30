---
title: "WebGL2RenderingContext: isSampler()-Methode"
short-title: isSampler()
slug: Web/API/WebGL2RenderingContext/isSampler
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.isSampler()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt ist.

## Syntax

```js-nolint
isSampler(sampler)
```

### Parameter

- `sampler`
  - : Ein zu testendes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein gültiges [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt (`true`) ist oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sampler = gl.createSampler();

// …

gl.isSampler(sampler);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
