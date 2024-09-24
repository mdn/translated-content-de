---
title: "WebGLRenderingContext: Methode generateMipmap()"
short-title: generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.generateMipmap()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erzeugt eine Reihe von Mipmaps für ein {{domxref("WebGLTexture")}}-Objekt.

Mipmaps werden verwendet, um Distanzen mit Objekten zu erzeugen. Ein Mipmap mit höherer Auflösung wird für Objekte verwendet, die näher sind, und ein Mipmap mit niedrigerer Auflösung wird für Objekte verwendet, die weiter entfernt sind. Es beginnt mit der Auflösung des Texturbildes und halbiert die Auflösung, bis ein Texturbild mit den Dimensionen 1x1 erstellt wird.

## Syntax

```js-nolint
generateMipmap(target)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) der aktiven Textur angibt, deren Mipmaps generiert werden. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Cube-Map-Textur.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
    sind zusätzlich folgende Werte verfügbar:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
gl.generateMipmap(gl.TEXTURE_2D);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
