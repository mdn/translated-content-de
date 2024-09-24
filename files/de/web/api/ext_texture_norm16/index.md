---
title: EXT_texture_norm16 Erweiterung
short-title: EXT_texture_norm16
slug: Web/API/EXT_texture_norm16
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_texture_norm16`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet eine Reihe neuer 16-Bit signierter und unsignierter normalisierter Formate (Feste-Punkt-Textur, Renderbuffer und Texturpuffer).

Wenn diese Erweiterung aktiviert ist:

- Die Methoden {{domxref("WebGLRenderingContext.texImage2D()")}} und {{domxref("WebGLRenderingContext.texSubImage2D()")}} akzeptieren neue Formate, die von dieser Erweiterung bereitgestellt werden.
- Die 16-Bit-normalisierten Feste-Punkt-Typen `ext.R16_EXT`, `ext.RG16_EXT` und `ext.RGBA16_EXT` werden als farbrenderbare Formate verfügbar, und Renderbuffer können in diesen Formaten erstellt werden.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} Kontexte verfügbar.

## Konstanten

- `ext.R16_EXT`
  - : Rot 16-Bit unsigniertes Format. Farbrenderbar.
- `ext.RG16_EXT`
  - : RG 16-Bit unsigniertes Format. Farbrenderbar.
- `ext.RGB16_EXT`
  - : RGB 16-Bit unsigniertes Format.
- `ext.RGBA16_EXT`
  - : RGBA 16-Bit unsigniertes Format. Farbrenderbar.
- `ext.R16_SNORM_EXT`
  - : Rot 16-Bit signiertes normalisiertes Format.
- `ext.RG16_SNORM_EXT`
  - : RG 16-Bit signiertes normalisiertes Format.
- `ext.RGB16_SNORM_EXT`
  - : RGB 16-Bit signiertes normalisiertes Format.
- `ext.RGBA16_SNORM_EXT`
  - : RGBA 16-Bit signiertes normalisiertes Format.

## Beispiele

### Aktivierung der Erweiterung

```js
let ext = gl.getExtension("EXT_texture_norm16");
```

### Texturformate

Die Methode {{domxref("WebGLRenderingContext.texImage2D()")}} akzeptiert neue Formate, wenn `EXT_texture_norm16` aktiviert ist. Beispielaufrufe:

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

Die Methode {{domxref("WebGLRenderingContext.renderbufferStorage()")}} akzeptiert `ext.R16_EXT`, `ext.RG16_EXT` und `ext.RGBA16_EXT` als interne Formate, um Renderbuffer in diesen Formaten zu erstellen. Beispielaufrufe:

```js
gl.renderbufferStorage(gl.RENDERBUFFER, ext.R16_EXT, 1, 1);
gl.renderbufferStorage(gl.RENDERBUFFER, ext.RG16_EXT, 1, 1);
gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA16_EXT, 1, 1);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
