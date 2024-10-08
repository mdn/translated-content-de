---
title: "WebGLRenderingContext: createTexture()-Methode"
short-title: createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.createTexture()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt.

## Syntax

```js-nolint
createTexture()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, an das Bilder gebunden werden können.

## Beispiele

Siehe auch das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) zur [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

### Erstellen einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
