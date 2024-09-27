---
title: EXT_texture_norm16 Erweiterung
short-title: EXT_texture_norm16
slug: Web/API/EXT_texture_norm16
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_texture_norm16`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet eine Reihe neuer 16-Bit signierter und unsignierter normalisierter Formate (Fixed-Point-Textur, Renderbuffer und Texture Buffer).

Wenn diese Erweiterung aktiviert ist:

- Die Methoden [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D) akzeptieren neue Formate, die von dieser Erweiterung bereitgestellt werden.
- Die 16-Bit normalisierten Fixed-Point-Typen `ext.R16_EXT`, `ext.RG16_EXT` und `ext.RGBA16_EXT` werden als farb-darstellbare Formate verfügbar, und Renderbuffer können in diesen Formaten erstellt werden.

WebGL-Erweiterungen sind mit der Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} Kontexten verfügbar.

## Konstanten

- `ext.R16_EXT`
  - : 16-Bit unsigniertes Rotes Format. Farb-darstellbar.
- `ext.RG16_EXT`
  - : 16-Bit unsigniertes RG-Format. Farb-darstellbar.
- `ext.RGB16_EXT`
  - : 16-Bit unsigniertes RGB-Format.
- `ext.RGBA16_EXT`
  - : 16-Bit unsigniertes RGBA-Format. Farb-darstellbar.
- `ext.R16_SNORM_EXT`
  - : 16-Bit signiertes normalisiertes Rotes Format.
- `ext.RG16_SNORM_EXT`
  - : 16-Bit signiertes normalisiertes RG-Format.
- `ext.RGB16_SNORM_EXT`
  - : 16-Bit signiertes normalisiertes RGB-Format.
- `ext.RGBA16_SNORM_EXT`
  - : 16-Bit signiertes normalisiertes RGBA-Format.

## Beispiele

### Aktivieren der Erweiterung

```js
let ext = gl.getExtension("EXT_texture_norm16");
```

### Texturformate

Die [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) Methode akzeptiert neue Formate, wenn `EXT_texture_norm16` aktiviert ist. Beispielaufrufe:

```js-nolint
// imageData = Uint16Array
gl.texImage2D(gl.TEXTURE_2D, 0, ext.R16_EXT, 1, 1, 0, gl.RED, gl.UNSIGNED_SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RG16_EXT, 1, 1, 0, gl.RG, gl.UNSIGNED_SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGB16_EXT, 1, 1, 0, gl.RGB, gl.UNSIGNED_SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGBA16_EXT, 1, 1, 0, gl.RGBA, gl.UNSIGNED_SHORT, imageData);

// imageData = Int16Array
gl.texImage2D(gl.TEXTURE_2D, 0, ext.R16_SNORM_EXT, 1, 1, 0, gl.RED, gl.SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RG16_SNORM_EXT, 1, 1, 0, gl.RG, gl.SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGB16_SNORM_EXT, 1, 1, 0, gl.RGB, gl.SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGBA16_SNORM_EXT, 1, 1, 0, gl.RGBA, gl.SHORT, imageData);
```

### Renderbuffer-Formate

Die [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage) Methode akzeptiert `ext.R16_EXT`,
`ext.RG16_EXT` und `ext.RGBA16_EXT` als interne Formate, um Renderbuffer in diesen Formaten zu erstellen. Beispielaufrufe:

```js
gl.renderbufferStorage(gl.RENDERBUFFER, ext.R16_EXT, 1, 1);
gl.renderbufferStorage(gl.RENDERBUFFER, ext.RG16_EXT, 1, 1);
gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA16_EXT, 1, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
