---
title: Komprimierte Texturformate
slug: Web/API/WebGL_API/Compressed_texture_formats
l10n:
  sourceCommit: 0db0da46e48402a50604674084e12ebfb2576c19
---

{{DefaultAPISidebar("WebGL")}}

Die WebGL-API bietet Methoden zur Nutzung von komprimierten Texturformaten. Diese sind nützlich, um den Detailgrad von Texturen zu erhöhen, während der zusätzliche Videoarbeitsspeicher begrenzt wird. Standardmäßig sind keine komprimierten Formate verfügbar: Es muss zuerst eine entsprechende Erweiterung für komprimierte Texturformate aktiviert werden.

## Nutzung

Sofern nicht anders angegeben, gilt dieser Artikel sowohl für WebGL 1- als auch 2-Kontexte.

Wenn unterstützt, können Texturen im Videoarbeitsspeicher in einem komprimierten Format gespeichert werden. Dies erlaubt zusätzlichen Detailreichtum, während der benötigte zusätzliche Videoarbeitsspeicher begrenzt wird. Texturen werden während des Zugriffs durch einen Shader automatisch dekomprimiert. Beachten Sie, dass sich dieser Vorteil nicht auf die Netzwerkauslastung bezieht: Während die Formate besser als unkomprimierte Daten sind, sind sie im Allgemeinen weit schlechter als Standardbildformate wie PNG und JPG.

Da komprimierte Texturen Hardware-Unterstützung erfordern, sind von WebGL keine spezifischen Formate erforderlich; stattdessen kann ein Kontext je nach Hardware-Unterstützung verschiedene Formate verfügbar machen. [Diese Seite](https://toji.github.io/texture-tester/) zeigt, welche Formate im verwendeten Browser unterstützt werden.

Die Nutzung von komprimierten Formaten erfordert zuerst die Aktivierung der jeweiligen Erweiterung mit [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension). Wenn unterstützt, gibt es ein Erweiterungsobjekt mit Konstanten für die hinzugefügten Formate zurück, und die Formate werden auch durch Aufrufe von `gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)` zurückgegeben. (Zum Beispiel `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT` für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)-Erweiterung.) Diese können dann mit [`compressedTexImage[23]D`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) oder [`compressedTexSubImage[23]D`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) anstelle von `texImage2D`-Aufrufen verwendet werden.

Beachten Sie, dass WebGL keine Funktionalitäten zur Komprimierung oder Dekomprimierung von Texturen bereitstellt: Sie müssen bereits in einem komprimierten Format vorliegen und können dann direkt in den Videoarbeitsspeicher hochgeladen werden.

Alle Formate unterstützen 2D-Texturen. Welche Formate `TEXTURE_2D_ARRAY` und `TEXTURE_3D` Ziele (in Kombination mit `compressedTexImage3D`) unterstützen, sind in der folgenden Tabelle vermerkt.

| Erweiterung                        | Hinweise                                                   | TEXTURE_2D_ARRAY | TEXTURE_3D |
| ---------------------------------- | ---------------------------------------------------------- | ---------------- | ---------- |
| WEBGL_compressed_texture_astc      |                                                            | Ja               | Ja         |
| WEBGL_compressed_texture_etc       |                                                            | Ja               | Nein       |
| WEBGL_compressed_texture_etc1\*    | Nicht nutzbar mit compressedTexSubImage2D/copyTexSubImage2D. | Nein             | Nein       |
| WEBGL_compressed_texture_pvrtc     | Breite und Höhe müssen Potenzen von 2 sein.                | Nein             | Nein       |
| WEBGL_compressed_texture_s3tc      | Breite und Höhe müssen Vielfache von 4 sein.               | Ja               | Nein       |
| WEBGL_compressed_texture_s3tc_srgb | Breite und Höhe müssen Vielfache von 4 sein.               | ?                | Nein       |

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
