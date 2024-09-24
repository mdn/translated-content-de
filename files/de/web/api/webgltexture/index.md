---
title: WebGLTexture
slug: Web/API/WebGLTexture
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

Die **WebGLTexture**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert ein undurchsichtiges Texturobjekt, das Speicher und Status für Texturoperationen bereitstellt.

{{InheritanceDiagram}}

## WebGL-Texturen

Das `WebGLTexture`-Objekt definiert keine eigenen Methoden oder Eigenschaften und sein Inhalt ist nicht direkt zugänglich. Beim Arbeiten mit `WebGLTexture`-Objekten sind die folgenden Methoden des {{domxref("WebGLRenderingContext")}} nützlich:

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}

Siehe auch das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) zu [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

## WebXR undurchsichtige Texturen

Bei der Verwendung von [WebXR](/de/docs/Web/API/WebXR_Device_API)-Layern gibt das {{domxref("XRWebGLBinding")}}-Objekt Instanzen einer _undurchsichtigen_ `WebGLTexture` für die Farb- und Tiefen/Stencil-Anhänge zurück.

WebXR-Methoden, die _undurchsichtige_ `WebGLTexture`-Objekte zurückgeben:

- {{domxref("XRWebGLBinding.getSubImage()")}}
- {{domxref("XRWebGLBinding.getViewSubImage()")}}

Die WebXR _undurchsichtige Textur_ ist identisch mit der Standard-`WebGLTexture` mit den folgenden Ausnahmen:

- Eine WebXR undurchsichtige Textur ist außerhalb eines WebXR [`requestAnimationFrame()`-Callbacks](/de/docs/Web/API/XRSession/requestAnimationFrame) für ihre Sitzung ungültig.
- Eine WebXR undurchsichtige Textur ist ungültig, bis sie von {{domxref("XRWebGLBinding.getSubImage()")}} oder {{domxref("XRWebGLBinding.getViewSubImage()")}} zurückgegeben wird.
- Eine WebXR undurchsichtige Textur für den Farbanhang enthält Farben mit vorab multipliziertem Alpha.
- Am Ende eines [`requestAnimationFrame()`-Callbacks](/de/docs/Web/API/XRSession/requestAnimationFrame) ist eine WebXR undurchsichtige Textur ungebunden und von allen {{domxref("WebGLShader")}}-Objekten getrennt.
- Eine WebXR undurchsichtige Textur verhält sich, als ob sie mit {{domxref("WebGL2RenderingContext.texStorage2D", "texStorage2D")}} oder {{domxref("WebGL2RenderingContext.texStorage3D", "texStorage3D")}}, wie angemessen, auch bei Verwendung eines WebGL 1.0-Kontexts, zugewiesen wurde.
- Wenn eine WebXR undurchsichtige Textur {{domxref("WebGLRenderingContext.deleteTexture()")}} aufruft, wird ein `INVALID_OPERATION`-Fehler ausgelöst.
- Änderungen an den Dimensionen oder dem Format einer WebXR undurchsichtigen Textur sind nicht erlaubt. GL-Funktionen dürfen nur die Texelwerte und Texturparameter ändern.

## Beispiele

### Erstellen einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameteri()")}}
