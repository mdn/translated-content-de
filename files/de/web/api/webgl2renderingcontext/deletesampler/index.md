---
title: "WebGL2RenderingContext: deleteSampler()-Methode"
short-title: deleteSampler()
slug: Web/API/WebGL2RenderingContext/deleteSampler
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.deleteSampler()`**-Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes
[`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.

## Syntax

```js-nolint
deleteSampler(sampler)
```

### Parameter

- `sampler`
  - : Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt, das gelöscht werden soll.

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
