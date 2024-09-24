---
title: "WebGL2RenderingContext: isSampler()-Methode"
short-title: isSampler()
slug: Web/API/WebGL2RenderingContext/isSampler
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isSampler()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges {{domxref("WebGLSampler")}}-Objekt ist.

## Syntax

```js-nolint
isSampler(sampler)
```

### Parameter

- `sampler`
  - : Ein zu testendes {{domxref("WebGLSampler")}}-Objekt.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob das gegebene Objekt ein gültiges
{{domxref("WebGLSampler")}}-Objekt (`true`) ist oder nicht (`false`).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
`WebGLSampler`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sampler = gl.createSampler();

// …

gl.isSampler(sampler);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLSampler")}}
