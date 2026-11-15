---
title: "WebGL2RenderingContext: isSampler()-Methode"
short-title: isSampler()
slug: Web/API/WebGL2RenderingContext/isSampler
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.isSampler()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt ist.

## Syntax

```js-nolint
isSampler(sampler)
```

### Parameter

- `sampler`
  - : Ein zu prüfendes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt. Wird `null` übergeben, gibt die Methode `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das übergebene Objekt ein gültiges [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt ist (`true`) oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

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
