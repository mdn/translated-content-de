---
title: "XRProjectionLayer: textureWidth-Eigenschaft"
short-title: textureWidth
slug: Web/API/XRProjectionLayer/textureWidth
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureWidth`**-Eigenschaft der {{domxref("XRProjectionLayer")}}-Schnittstelle gibt die Breite in Pixeln der Farbtexturen dieser Ebene an.

Die Texturbreite der Projektionsebene wird vom Benutzeragenten oder dem Gerät bestimmt. Sie wird in der {{domxref("XRSubImage")}} gemeldet, die nur innerhalb der Frame-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Erstellung der Ebene warten möchten, um die erforderlichen Abmessungen für diese Puffer zu ermitteln, ermöglicht die `textureWidth`-Eigenschaft den Zugriff auf die Texturbreite der Ebene außerhalb der Frame-Schleife. Die Zuordnung dieser Puffer kann direkt nach der Erstellung der Ebene erfolgen.

## Wert

Eine Zahl, die die Breite in Pixeln angibt.

## Beispiele

### Verwendung von `textureWidth`

Die `textureWidth` einer Ebene ist nützlich beim Erstellen von Renderpuffern für eine Ebene. Siehe auch {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}.

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

- {{domxref("XRWebGLBinding.createProjectionLayer()")}}
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
- {{domxref("XRSubImage")}}
