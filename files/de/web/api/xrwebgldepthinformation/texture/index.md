---
title: "XRWebGLDepthInformation: texture-Eigenschaft"
short-title: texture
slug: Web/API/XRWebGLDepthInformation/texture
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die _schreibgeschützte_ **`texture`**-Eigenschaft des [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)-Interfaces ist ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), das Tiefenpufferinformationen als undurchsichtige Textur enthält.

## Wert

Eine [`WebGLTexture`](/de/docs/Web/API/WebGLTexture).

## Beispiele

Verwenden Sie [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation), um GPU-Tiefeninformationen zu erhalten. Das zurückgegebene `XRWebGLDepthInformation`-Objekt enthält den `texture`-Puffer, der dann an eine Textur gebunden werden kann, und Tiefenpufferinformationen können einem WebGL-Fragment-Shader zur Verfügung gestellt werden.

```js
const depthInfo = glBinding.getDepthInformation(view);
const uvTransform = depthInfo.normDepthBufferFromNormView.matrix;

const uDepthTextureLocation = gl.getUniformLocation(program, "u_DepthTexture");
const uUVTransformLocation = gl.getUniformLocation(program, "u_UVTransform");
const uRawValueToMeters = gl.getUniformLocation(program, "u_RawValueToMeters");

gl.bindTexture(gl.TEXTURE_2D, depthInfo.texture);
gl.activeTexture(gl.TEXTURE0);
gl.uniform1i(uDepthTextureLocation, 0);

// UV transform to correctly index into the depth map
gl.uniformMatrix4fv(uUVTransformLocation, false, uvTransform);

// scaling factor to convert from the raw number to meters
gl.uniform1f(uRawValueToMeters, depthInfo.rawValueToMeters);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
