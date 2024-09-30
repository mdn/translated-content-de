---
title: WEBGL_compressed_texture_astc Erweiterung
short-title: WEBGL_compressed_texture_astc
slug: Web/API/WEBGL_compressed_texture_astc
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_astc`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht den Zugriff auf [Adaptive Scalable Texture Compression](https://en.wikipedia.org/wiki/Adaptive_Scalable_Texture_Compression) (ASTC) komprimierte Texturformate in WebGL.

Für weitere Informationen lesen Sie den Artikel [Using ASTC Texture Compression for Game Assets](https://developer.nvidia.com/astc-texture-compression-for-game-assets) von NVIDIA.

WebGL-Erweiterungen sind mittels der Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> ASTC-Kompression ist typischerweise verfügbar auf Mali ARM GPUs, Intel GPUs, und NVIDIA Tegra Chips.
>
> Diese Erweiterung ist verfügbar in beiden, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} und {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexten.

## Instanzmethoden

Diese Erweiterung stellt eine neue Methode bereit.

- [`ext.getSupportedProfiles()`](/de/docs/Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles)
  - : Gibt ein Array von Zeichenfolgen zurück, das die Namen der von der Implementierung unterstützten ASTC-Profile enthält.

## Konstanten

Die komprimierten Texturformate werden durch 28 Konstanten dargestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstanten</th>
      <th>Blöcke</th>
      <th>Bits pro Pixel</th>
      <th>{{jsxref("ArrayBuffer")}} <code>byteLength</code></th>
      <th>Bytes, wenn Höhe und Breite 512 sind</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_4x4_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR</code
        >
      </td>
      <td>4x4</td>
      <td>8,00</td>
      <td>
        <code>floor((width + 3) / 4) * floor((height + 3) / 4) * 16</code>
      </td>
      <td>262144</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_5x4_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR</code
        >
      </td>
      <td>5x4</td>
      <td>6,40</td>
      <td>
        <code>floor((width + 4) / 5) * floor((height + 3) / 4) * 16</code>
      </td>
      <td>210944</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_5x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR</code
        >
      </td>
      <td>5x5</td>
      <td>5,12</td>
      <td>
        <code>floor((width + 4) / 5) * floor((height + 4) / 5) * 16</code>
      </td>
      <td>169744</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_6x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR</code
        >
      </td>
      <td>6x5</td>
      <td>4,27</td>
      <td>
        <code>floor((width + 5) / 6) * floor((height + 4) / 5) * 16</code>
      </td>
      <td>141728</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_6x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR</code
        >
      </td>
      <td>6x6</td>
      <td>3,56</td>
      <td>
        <code>floor((width + 5) / 6) * floor((height + 5) / 6) * 16</code>
      </td>
      <td>118336</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_8x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR</code
        >
      </td>
      <td>8x5</td>
      <td>3,20</td>
      <td>
        <code>floor((width + 7) / 8) * floor((height + 4) / 5) * 16</code>
      </td>
      <td>105472</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_8x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR</code
        >
      </td>
      <td>8x6</td>
      <td>2,67</td>
      <td>
        <code>floor((width + 7) / 8) * floor((height + 5) / 6) * 16</code>
      </td>
      <td>88064</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_8x8_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR</code
        >
      </td>
      <td>8x8</td>
      <td>2,00</td>
      <td>
        <code>floor((width + 7) / 8) * floor((height + 7) / 8) * 16</code>
      </td>
      <td>65536</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_10x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR</code
        >
      </td>
      <td>10x5</td>
      <td>2,56</td>
      <td>
        <code>floor((width + 9) / 10) * floor((height + 4) / 5) * 16</code>
      </td>
      <td>85696</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_10x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code
        >
      </td>
      <td>10x6</td>
      <td>2,13</td>
      <td>
        <code>floor((width + 9) / 10) * floor((height + 5) / 6) * 16</code>
      </td>
      <td>71552</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_10x8_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR</code
        >
      </td>
      <td>10x8</td>
      <td>1,60</td>
      <td>
        <code>floor((width + 9) / 10) * floor((height + 7) / 8) * 16</code>
      </td>
      <td>53248</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_10x10_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR</code
        >
      </td>
      <td>10x10</td>
      <td>1,28</td>
      <td>
        <code>floor((width + 9) / 10) * floor((height + 9) / 10) * 16</code>
      </td>
      <td>43264</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_12x10_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR</code
        >
      </td>
      <td>12x10</td>
      <td>1,07</td>
      <td>
        <code>floor((width + 11) / 12) * floor((height + 9) / 10) * 16</code>
      </td>
      <td>35776</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.COMPRESSED_RGBA_ASTC_12x12_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR</code
        >
      </td>
      <td>12x12</td>
      <td>0,89</td>
      <td>
        <code>floor((width + 11) / 12) * floor((height + 11) / 12) * 16</code>
      </td>
      <td>29584</td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
const ext = gl.getExtension("WEBGL_compressed_texture_astc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGBA_ASTC_12x12_KHR,
  512,
  512,
  0,
  textureData,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using ASTC Texture Compression for Game Assets](https://developer.nvidia.com/astc-texture-compression-for-game-assets)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
