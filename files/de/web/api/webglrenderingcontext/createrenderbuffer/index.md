---
title: "WebGLRenderingContext: Methode createRenderbuffer()"
short-title: createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.createRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt.

## Syntax

```js-nolint
createRenderbuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt, das Daten wie ein Bild speichert oder Quelle oder Ziel eines Rendering-Vorgangs sein kann.

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

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
