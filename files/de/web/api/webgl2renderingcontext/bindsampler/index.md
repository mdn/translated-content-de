---
title: "WebGL2RenderingContext: Methode bindSampler()"
short-title: bindSampler()
slug: Web/API/WebGL2RenderingContext/bindSampler
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bindSampler()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes {{domxref("WebGLSampler")}}-Objekt an die Textureinheit bei dem übergebenen Index.

## Syntax

```js-nolint
bindSampler(unit, sampler)
```

### Parameter

- `unit`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index der Textureinheit angibt, an die der Sampler gebunden werden soll.
- `sampler`
  - : Ein {{domxref("WebGLSampler")}}-Objekt, das gebunden werden soll.

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

- {{domxref("WebGLSampler")}}
