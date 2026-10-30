---
title: EXT_texture_norm16-Erweiterung
short-title: EXT_texture_norm16
slug: Web/API/EXT_texture_norm16
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`EXT_texture_norm16`** ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt neue 16-Bit-Formate für vorzeichenbehaftete und vorzeichenlose normalisierte Werte bereit (Festkommaformate für Texturen, Renderbuffer und Textur-Buffer).

Wenn diese Erweiterung aktiviert ist:

- Akzeptieren die Methoden [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D) die neuen Formate dieser Erweiterung.
- Stehen die 16-Bit-normalisierten Festkommaformate `ext.R16_EXT`, `ext.RG16_EXT` und `ext.RGBA16_EXT` als Formate zur Verfügung, in die Farben gerendert werden können. In diesen Formaten können auch Renderbuffer erstellt werden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL-2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Konstanten

- `ext.R16_EXT`
  - : Vorzeichenloses 16-Bit-Format für Rot. Geeignet als Renderziel für Farben.
- `ext.RG16_EXT`
  - : Vorzeichenloses 16-Bit-Format für RG. Geeignet als Renderziel für Farben.
- `ext.RGB16_EXT`
  - : Vorzeichenloses 16-Bit-Format für RGB.
- `ext.RGBA16_EXT`
  - : Vorzeichenloses 16-Bit-Format für RGBA. Geeignet als Renderziel für Farben.
- `ext.R16_SNORM_EXT`
  - : Vorzeichenbehaftetes normalisiertes 16-Bit-Format für Rot.
- `ext.RG16_SNORM_EXT`
  - : Vorzeichenbehaftetes normalisiertes 16-Bit-Format für RG.
- `ext.RGB16_SNORM_EXT`
  - : Vorzeichenbehaftetes normalisiertes 16-Bit-Format für RGB.
- `ext.RGBA16_SNORM_EXT`
  - : Vorzeichenbehaftetes normalisiertes 16-Bit-Format für RGBA.

## Beispiele

### Die Erweiterung aktivieren

```js
let ext = gl.getExtension("EXT_texture_norm16");
```

### Texturformate

Die Methode [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) akzeptiert neue Formate, wenn `EXT_texture_norm16` aktiviert ist. Beispielaufrufe:

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

Die Methode [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage) akzeptiert `ext.R16_EXT`, `ext.RG16_EXT` und `ext.RGBA16_EXT` als interne Formate, um Renderbuffer in diesen Formaten zu erstellen. Beispielaufrufe:

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
