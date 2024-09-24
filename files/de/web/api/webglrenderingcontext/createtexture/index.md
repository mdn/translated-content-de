---
title: "WebGLRenderingContext: Methode createTexture()"
short-title: createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.createTexture()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein {{domxref("WebGLTexture")}}-Objekt.

## Syntax

```js-nolint
createTexture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLTexture")}}-Objekt, an das Bilder gebunden werden können.

## Beispiele

Siehe auch das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) zum [Verwenden von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

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

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
