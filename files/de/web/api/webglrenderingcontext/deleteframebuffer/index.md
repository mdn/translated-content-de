---
title: "WebGLRenderingContext: Methode deleteFramebuffer()"
short-title: deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.deleteFramebuffer()`** der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt. Wenn der Framebuffer bereits gelöscht wurde, hat die Methode keine Wirkung.

## Syntax

```js-nolint
deleteFramebuffer(framebuffer)
```

### Parameter

- `framebuffer`
  - : Das zu löschende [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt. Die Übergabe von `null` hat keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Framebuffer löschen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

// …

gl.deleteFramebuffer(framebuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
