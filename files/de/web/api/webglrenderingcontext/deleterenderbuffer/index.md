---
title: "WebGLRenderingContext: deleteRenderbuffer()-Methode"
short-title: deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.deleteRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt. Diese Methode hat keine Wirkung, wenn der Render-Puffer bereits gelöscht wurde.

## Syntax

```js-nolint
deleteRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Renderbuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

// …

gl.deleteRenderbuffer(renderbuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
