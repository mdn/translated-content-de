---
title: "XRProjectionLayer: textureHeight-Eigenschaft"
short-title: textureHeight
slug: Web/API/XRProjectionLayer/textureHeight
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureHeight`**-Eigenschaft der {{domxref("XRProjectionLayer")}}-Schnittstelle gibt die Höhe in Pixeln der Farbtexturen dieser Ebene an.

Die Texturhöhe der Projektionsebene wird vom Benutzeragenten oder dem Gerät bestimmt. Sie wird in der {{domxref("XRSubImage")}} gemeldet, die nur innerhalb der Frame-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Erstellung der Ebene warten wollen, um die erforderlichen Dimensionen für diese Puffer zu bestimmen, ermöglicht die `textureHeight`-Eigenschaft den Zugriff auf die Texturhöhe der Ebene außerhalb der Frame-Schleife. Die Zuweisung dieser Puffer kann direkt nach der Erstellung der Ebene erfolgen.

## Wert

Eine Zahl, die die Höhe in Pixeln angibt.

## Beispiele

### Verwendung von `textureHeight`

Die `textureHeight` einer Ebene ist nützlich beim Erstellen von Render-Puffern für eine Ebene. Siehe auch {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}.

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
