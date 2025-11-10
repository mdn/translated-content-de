---
title: "XRProjectionLayer: textureWidth-Eigenschaft"
short-title: textureWidth
slug: Web/API/XRProjectionLayer/textureWidth
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureWidth`**-Eigenschaft des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Interfaces gibt die Breite in Pixeln der Farbtexturen dieser Ebene an.

Die Texturbreite der Projektebene wird durch den User Agent oder das Gerät bestimmt. Sie wird in der [`XRSubImage`](/de/docs/Web/API/XRSubImage) gemeldet, die nur innerhalb der Frame-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Erstellung der Ebene warten möchten, um die erforderlichen Dimensionen für diese Puffer zu bestimmen, erlaubt die `textureWidth`-Eigenschaft den Zugriff auf die Texturbreite der Ebene außerhalb der Frame-Schleife. Die Zuweisung dieser Puffer kann direkt nach der Erstellung der Ebene erfolgen.

## Wert

Eine Zahl, die die Breite in Pixeln angibt.

## Beispiele

### Verwendung von `textureWidth`

Die `textureWidth` einer Ebene ist nützlich, wenn Sie Renderpuffer für eine Ebene erstellen. Siehe auch [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample).

```js
let glLayer = xrGLBinding.createProjectionLayer();

let colorRB = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, colorRB);
gl.renderbufferStorageMultisample(
  gl.RENDERBUFFER,
  samples,
  gl.RGBA8,
  glLayer.textureWidth,
  glLayer.textureHeight,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLBinding.createProjectionLayer()`](/de/docs/Web/API/XRWebGLBinding/createProjectionLayer)
- [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample)
- [`XRSubImage`](/de/docs/Web/API/XRSubImage)
