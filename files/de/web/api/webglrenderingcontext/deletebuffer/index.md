---
title: "WebGLRenderingContext: Methode deleteBuffer()"
short-title: deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteBuffer()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) löscht einen angegebenen
{{domxref("WebGLBuffer")}}. Diese Methode hat keine Wirkung, wenn der Buffer bereits gelöscht wurde. Normalerweise müssen Sie diese Methode nicht selbst aufrufen, da das Buffer-Objekt als frei markiert wird, wenn es dereferenziert wird.

## Syntax

```js-nolint
deleteBuffer(buffer)
```

### Parameter

- `buffer`
  - : Ein {{domxref("WebGLBuffer")}}-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Buffers

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

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Andere Buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
