---
title: WebGLTexture
slug: Web/API/WebGLTexture
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLTexture**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert ein undurchsichtiges Texturobjekt, das Speicher und Zustand für Texturoperationen bereitstellt.

{{InheritanceDiagram}}

## WebGL-Texturen

Das `WebGLTexture`-Objekt definiert keine eigenen Methoden oder Eigenschaften, und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLTexture`-Objekten sind die folgenden Methoden des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) nützlich:

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)

Siehe auch das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) zur [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

## WebXR undurchsichtige Texturen

Beim Verwenden von [WebXR](/de/docs/Web/API/WebXR_Device_API)-Layern gibt das [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Objekt Instanzen einer _undurchsichtigen_ `WebGLTexture` für die Farb- und Tiefen/Stencil-Anhänge zurück.

WebXR-Methoden, die _undurchsichtige_ `WebGLTexture`-Objekte zurückgeben:

- [`XRWebGLBinding.getSubImage()`](/de/docs/Web/API/XRWebGLBinding/getSubImage)
- [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage)

Die WebXR _undurchsichtige Textur_ ist identisch mit der Standard-`WebGLTexture` mit folgenden Ausnahmen:

- Eine WebXR undurchsichtige Textur ist außerhalb eines WebXR-[`requestAnimationFrame()`-Callbacks](/de/docs/Web/API/XRSession/requestAnimationFrame) für ihre Sitzung ungültig.
- Eine WebXR undurchsichtige Textur ist ungültig, bis sie von [`XRWebGLBinding.getSubImage()`](/de/docs/Web/API/XRWebGLBinding/getSubImage) oder [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage) zurückgegeben wird.
- Eine WebXR undurchsichtige Textur für den Farb-Anhang enthält Farben mit prämultipliziertem Alpha.
- Am Ende eines [`requestAnimationFrame()`-Callbacks](/de/docs/Web/API/XRSession/requestAnimationFrame) ist eine WebXR undurchsichtige Textur nicht gebunden und von allen [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekten getrennt.
- Eine WebXR undurchsichtige Textur verhält sich so, als wäre sie mit [`texStorage2D`](/de/docs/Web/API/WebGL2RenderingContext/texStorage2D) oder [`texStorage3D`](/de/docs/Web/API/WebGL2RenderingContext/texStorage3D) zugewiesen worden, je nach Bedarf, selbst wenn ein WebGL 1.0-Kontext verwendet wird.
- Wenn bei einer WebXR undurchsichtigen Textur [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture) aufgerufen wird, wird ein `INVALID_OPERATION`-Fehler ausgelöst.
- Änderungen an Dimension oder Format einer WebXR undurchsichtigen Textur sind nicht erlaubt. GL-Funktionen dürfen nur die Texelwerte und Texturparameter ändern.

## Beispiele

### Erstellen einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
- [`WebGLRenderingContext.copyTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
- [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap)
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
- [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
