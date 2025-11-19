---
title: "WebGLRenderingContext: generateMipmap() Methode"
short-title: generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.generateMipmap()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) generiert eine Reihe von Mipmaps für ein
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt.

Mipmaps werden verwendet, um Entfernungen zu Objekten zu simulieren. Eine höher aufgelöste Mipmap wird für Objekte verwendet, die näher sind, und eine niedriger aufgelöste Mipmap für weiter entfernte Objekte. Es beginnt mit der Auflösung des Texturbildes und halbiert die Auflösung, bis ein Texturbild mit den Abmessungen 1x1 erstellt wird.

## Syntax

```js-nolint
generateMipmap(target)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Ziel) der aktiven Textur angibt, deren Mipmaps generiert werden. Mögliche Werte:
    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Cube-Map-Textur.

    Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
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
