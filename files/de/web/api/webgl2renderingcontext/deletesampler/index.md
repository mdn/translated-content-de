---
title: "WebGL2RenderingContext: Methode deleteSampler()"
short-title: deleteSampler()
slug: Web/API/WebGL2RenderingContext/deleteSampler
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.deleteSampler()`** der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes
{{domxref("WebGLSampler")}}-Objekt.

## Syntax

```js-nolint
deleteSampler(sampler)
```

### Parameter

- `sampler`
  - : Ein {{domxref("WebGLSampler")}}-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
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

- {{domxref("WebGLSampler")}}
