---
title: "WebGL2RenderingContext: Methode deleteSampler()"
short-title: deleteSampler()
slug: Web/API/WebGL2RenderingContext/deleteSampler
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.deleteSampler()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.

## Syntax

```js-nolint
deleteSampler(sampler)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt, das gelöscht werden soll. Die Übergabe von `null` bewirkt nichts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sampler = gl.createSampler();

// …

gl.deleteSampler(sampler);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
