---
title: Komprimierte Texturformate
slug: Web/API/WebGL_API/Compressed_texture_formats
l10n:
  sourceCommit: 0db0da46e48402a50604674084e12ebfb2576c19
---

{{DefaultAPISidebar("WebGL")}}

Die WebGL-API bietet Methoden zur Verwendung komprimierter Texturformate. Diese sind nützlich, um die Texturdetails zu erhöhen, während der zusätzliche benötigte Grafikspeicher begrenzt wird. Standardmäßig sind keine komprimierten Formate verfügbar: Eine entsprechende Erweiterung für komprimierte Texturformate muss zuerst aktiviert werden.

## Nutzung

Sofern nicht anders angegeben, gilt dieser Artikel sowohl für WebGL 1- als auch für WebGL 2-Kontexte.

Wenn unterstützt, können Texturen im Videospeicher in einem komprimierten Format gespeichert werden. Dies ermöglicht zusätzliche Details, während der benötigte zusätzliche Grafikspeicher begrenzt wird. Texturen werden bei ihrer Nutzung durch einen Shader in Echtzeit dekomprimiert. Beachten Sie, dass dieser Vorteil nicht auf die Netzwerkbandbreite übertragbar ist: Während die Formate besser als unkomprimierte Daten sind, sind sie in der Regel weitaus schlechter als Standardbildformate wie PNG und JPG.

Da komprimierte Texturen eine Hardwareunterstützung erfordern, sind keine spezifischen Formate von WebGL vorgeschrieben; stattdessen kann ein Kontext abhängig von der Hardwareunterstützung verschiedene Formate verfügbar machen. [Diese Seite](https://toji.github.io/texture-tester/) zeigt, welche Formate im verwendeten Browser unterstützt werden.

Die Nutzung komprimierter Formate erfordert zunächst die Aktivierung der jeweiligen Erweiterung mit {{domxref("WebGLRenderingContext.getExtension()")}}. Wenn unterstützt, gibt es ein Erweiterungsobjekt mit Konstanten für die hinzugefügten Formate zurück, und die Formate werden auch durch Aufrufe von `gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)` zurückgegeben. (Z.B. `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT` für die {{domxref("WEBGL_compressed_texture_s3tc")}} Erweiterung.) Diese können dann mit {{domxref("WebGLRenderingContext.compressedTexImage2D()", "compressedTexImage[23]D")}} oder {{domxref("WebGLRenderingContext.compressedTexSubImage2D()", "compressedTexSubImage[23]D")}} anstelle von `texImage2D`-Aufrufen verwendet werden.

Beachten Sie, dass WebGL keine Funktionalität zur Komprimierung oder Dekomprimierung von Texturen zur Verfügung stellt: Sie müssen bereits in einem komprimierten Format vorliegen und können dann direkt in den Videospeicher hochgeladen werden.

Alle Formate unterstützen 2D-Texturen. Welche Formate die Ziele `TEXTURE_2D_ARRAY` und `TEXTURE_3D` (in Kombination mit `compressedTexImage3D`) unterstützen, ist in der folgenden Tabelle angegeben.

| Erweiterung                         | Anmerkungen                                               | TEXTURE_2D_ARRAY | TEXTURE_3D |
| ---------------------------------- | ---------------------------------------------------------- | ---------------- | ---------- |
| WEBGL_compressed_texture_astc      |                                                            | Ja               | Ja         |
| WEBGL_compressed_texture_etc       |                                                            | Ja               | Nein       |
| WEBGL_compressed_texture_etc1\*    | Nicht verwendbar mit compressedTexSubImage2D/copyTexSubImage2D. | Nein             | Nein       |
| WEBGL_compressed_texture_pvrtc     | Breite und Höhe müssen Potenzen von 2 sein.               | Nein             | Nein       |
| WEBGL_compressed_texture_s3tc      | Breite und Höhe müssen Vielfache von 4 sein.              | Ja               | Nein       |
| WEBGL_compressed_texture_s3tc_srgb | Breite und Höhe müssen Vielfache von 4 sein.              | ?                | Nein       |

## Beispiele

```js
async function getCompressedTextureIfAvailable(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture); // create texture object on GPU
  const ext = gl.getExtension("WEBGL_compressed_texture_s3tc"); // will be null if not supported
  if (ext) {
    // the file is already in the correct compressed format
    const dataArrayBuffer = await fetch(
      "/textures/foobar512x512.RGBA_S3TC_DXT1",
    ).then((response) => response.arrayBuffer());
    gl.compressedTexImage2D(
      gl.TEXTURE_2D,
      0, // set the base image level
      ext.COMPRESSED_RGBA_S3TC_DXT1_EXT, // the compressed format we are using
      512,
      512, // width, height of the image
      0, // border, always 0
      new DataView(dataArrayBuffer),
    );
    gl.generateMipMap(gl.TEXTURE_2D); // create mipmap levels, like we would for a standard image
    return texture;
  }
}
```
