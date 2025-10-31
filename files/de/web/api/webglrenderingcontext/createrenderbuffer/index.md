---
title: "WebGLRenderingContext: createRenderbuffer()-Methode"
short-title: createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.createRenderbuffer()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt.

## Syntax

```js-nolint
createRenderbuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt, das Daten wie ein Bild speichert oder Quelle oder Ziel einer Rendering-Operation sein kann.

## Beispiele

### Erstellen eines Renderbuffers

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

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
