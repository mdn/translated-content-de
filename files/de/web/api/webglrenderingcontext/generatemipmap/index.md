---
title: "WebGLRenderingContext: generateMipmap() Methode"
short-title: generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.generateMipmap()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) generiert einen Satz von Mipmaps für ein
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt.

Mipmaps werden verwendet, um Entfernungen zu Objekten darzustellen. Ein höher aufgelöstes Mipmap wird für Objekte verwendet, die näher sind, und ein niedriger aufgelöstes Mipmap wird für Objekte verwendet, die weiter entfernt sind. Es beginnt mit der Auflösung des Texturbildes und halbiert die Auflösung, bis ein Texturbild mit den Abmessungen 1x1 erstellt ist.

## Syntax

```js-nolint
generateMipmap(target)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) der aktiven Textur angibt, deren Mipmaps generiert werden. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Cube-Map-Textur.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.generateMipmap(gl.TEXTURE_2D);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
- [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
- [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
