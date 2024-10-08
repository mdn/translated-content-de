---
title: "WebGL2RenderingContext: createSampler()-Methode"
short-title: createSampler()
slug: Web/API/WebGL2RenderingContext/createSampler
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.createSampler()`**-Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert
[`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekte.

## Syntax

```js-nolint
createSampler()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sampler = gl.createSampler();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
