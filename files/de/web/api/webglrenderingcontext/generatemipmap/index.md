---
title: "WebGLRenderingContext: generateMipmap() Methode"
short-title: generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.generateMipmap()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) generiert eine Reihe von Mipmaps für ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt.

Mipmaps werden verwendet, um Entfernung mit Objekten zu schaffen. Eine Mipmap mit höherer Auflösung wird für Objekte verwendet, die näher sind, und eine Mipmap mit niedrigerer Auflösung wird für Objekte verwendet, die weiter entfernt sind. Es beginnt mit der Auflösung des Texturbildes und halbiert die Auflösung, bis ein Texturbild mit den Abmessungen 1x1 erzeugt ist.

## Syntax

```js-nolint
generateMipmap(target)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) der aktiven Textur angibt, deren Mipmaps generiert werden. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Würfelkarten-Textur.

    Beim Verwenden eines [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext),
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
