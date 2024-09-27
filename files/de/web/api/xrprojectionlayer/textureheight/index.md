---
title: "XRProjectionLayer: textureHeight-Eigenschaft"
short-title: textureHeight
slug: Web/API/XRProjectionLayer/textureHeight
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureHeight`**-Eigenschaft der Schnittstelle [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) gibt die Höhe in Pixeln der Farbtexturen dieser Ebene an.

Die Texturhöhe der Projektionsebene wird durch den User-Agent oder das Gerät bestimmt. Sie wird im [`XRSubImage`](/de/docs/Web/API/XRSubImage) angegeben, das nur innerhalb der Frame-Schleife zugänglich ist. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Erstellung der Ebene warten wollen, um die erforderlichen Abmessungen für diese Puffer zu bestimmen, ermöglicht die `textureHeight`-Eigenschaft den Zugriff auf die Texturhöhe der Ebene außerhalb der Frame-Schleife. Die Zuweisung dieser Puffer kann direkt nach der Erstellung der Ebene erfolgen.

## Wert

Eine Zahl, die die Höhe in Pixeln angibt.

## Beispiele

### Verwendung von `textureHeight`

Die `textureHeight` einer Ebene ist nützlich, wenn Renderpuffer für eine Ebene erstellt werden. Siehe auch [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample).

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
