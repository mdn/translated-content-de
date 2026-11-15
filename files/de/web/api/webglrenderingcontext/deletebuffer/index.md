---
title: "WebGLRenderingContext: Methode deleteBuffer()"
short-title: deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.deleteBuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)-Objekt. Wenn der Buffer bereits gelöscht wurde, hat die Methode keine Wirkung. Normalerweise müssen Sie diese Methode nicht selbst aufrufen: Wenn keine Referenz mehr auf das Buffer-Objekt besteht, wird es zur Freigabe vorgemerkt.

## Syntax

```js-nolint
deleteBuffer(buffer)
```

### Parameter

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)-Objekt, das gelöscht werden soll. Die Übergabe von `null` hat keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Buffer löschen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

// …

gl.deleteBuffer(buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
- Andere Buffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
