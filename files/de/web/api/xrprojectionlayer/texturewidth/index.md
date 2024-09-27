---
title: "XRProjectionLayer: textureWidth-Eigenschaft"
short-title: textureWidth
slug: Web/API/XRProjectionLayer/textureWidth
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureWidth`**-Eigenschaft des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Interfaces gibt die Breite in Pixeln der Farbtexturen dieser Ebene an.

Die Texturbreite der Projektionsebene wird durch den Benutzeragenten oder das Gerät bestimmt. Sie wird in der [`XRSubImage`](/de/docs/Web/API/XRSubImage) gemeldet, die nur innerhalb der Rahmen-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Rahmen nach der Erstellung der Ebene warten möchten, um die erforderlichen Abmessungen für diese Puffer zu bestimmen, ermöglicht die `textureWidth`-Eigenschaft den Zugriff auf die Texturbreite der Ebene außerhalb der Rahmen-Schleife. Die Zuordnung dieser Puffer kann direkt nach der Erstellung der Ebene erfolgen.

## Wert

Eine Zahl, die die Breite in Pixeln angibt.

## Beispiele

### Verwendung von `textureWidth`

Die `textureWidth` einer Ebene ist nützlich bei der Erstellung von Renderpuffern für eine Ebene. Siehe auch [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample).

```js
let glLayer = xrGLBinding.createProjectionLayer();

let color_rb = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, color_rb);
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
