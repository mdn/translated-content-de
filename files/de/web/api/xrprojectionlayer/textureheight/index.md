---
title: "XRProjectionLayer: textureHeight-Eigenschaft"
short-title: textureHeight
slug: Web/API/XRProjectionLayer/textureHeight
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureHeight`**-Eigenschaft der [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Schnittstelle gibt die Höhe in Pixeln der Farbtexturen dieser Ebene an.

Die Texturhöhe der Projektionsebene wird durch den Benutzeragenten oder das Gerät bestimmt. Sie wird in der [`XRSubImage`](/de/docs/Web/API/XRSubImage) gemeldet, auf die nur innerhalb der Frame-Schleife zugegriffen werden kann. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf den ersten Frame nach der Erstellung der Ebene warten möchten, um die erforderlichen Abmessungen für diese Puffer zu bestimmen, ermöglicht die `textureHeight`-Eigenschaft den Zugriff auf die Texturhöhe der Ebene außerhalb der Frame-Schleife. Die Zuordnung dieser Puffer kann direkt nach der Erstellung der Ebene erfolgen.

## Wert

Eine Zahl, die die Höhe in Pixeln angibt.

## Beispiele

### Verwendung von `textureHeight`

Die `textureHeight` einer Ebene ist nützlich, wenn Renderpuffer für eine Ebene erstellt werden. Siehe auch [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample).

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
