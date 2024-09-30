---
title: "XRProjectionLayer: textureWidth-Eigenschaft"
short-title: textureWidth
slug: Web/API/XRProjectionLayer/textureWidth
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`textureWidth`**-Eigenschaft der [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Schnittstelle gibt die Breite in Pixeln der Farbtexturen dieser Ebene an.

Die Breite der Textur der Projektionsschicht wird vom Benutzeragenten oder dem Gerät bestimmt. Sie wird im [`XRSubImage`](/de/docs/Web/API/XRSubImage) gemeldet, auf das nur innerhalb der Frame-Schleife zugegriffen werden kann. Wenn Sie Ihre eigenen Tiefenpuffer verwalten möchten und nicht auf das erste Frame nach der Schichterstellung warten wollen, um die erforderlichen Dimensionen für diese Puffer zu bestimmen, ermöglicht die `textureWidth`-Eigenschaft den Zugriff auf die Breite der Schichttextur außerhalb der Frame-Schleife. Die Zuweisung dieser Puffer kann direkt nach der Erstellung der Schicht erfolgen.

## Wert

Eine Zahl, die die Breite in Pixeln angibt.

## Beispiele

### Verwendung von `textureWidth`

Die `textureWidth` einer Ebene ist nützlich, wenn Sie Renderpuffer für eine Ebene erstellen möchten. Siehe auch [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample).

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
