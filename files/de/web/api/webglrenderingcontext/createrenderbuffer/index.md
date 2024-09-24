---
title: "WebGLRenderingContext: Methode createRenderbuffer()"
short-title: createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.createRenderbuffer()`** der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein {{domxref("WebGLRenderbuffer")}}-Objekt.

## Syntax

```js-nolint
createRenderbuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLRenderbuffer")}}-Objekt, das Daten wie ein Bild speichert oder Quelle oder Ziel einer Renderoperation sein kann.

## Beispiele

### Erstellen eines Renderpuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderBuffer = gl.createRenderbuffer();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
