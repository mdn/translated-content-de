---
title: "XRWebGLDepthInformation: texture-Eigenschaft"
short-title: texture
slug: Web/API/XRWebGLDepthInformation/texture
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die _schreibgeschützte_ **`texture`**-Eigenschaft des [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)-Interfaces ist ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture), der Tiefenpufferinformationen als eine undurchsichtige Textur enthält.

## Wert

Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture).

## Beispiele

Verwenden Sie [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation), um die GPU-Tiefeninformation abzurufen. Das zurückgegebene `XRWebGLDepthInformation`-Objekt enthält den `texture`-Puffer, der dann an eine Textur gebunden werden kann, sodass die Tiefenpufferinformationen einem WebGL-Fragment-Shader zur Verfügung gestellt werden können.

```js
const depthInfo = glBinding.getDepthInformation(view);
const uvTransform = depthInfo.normDepthBufferFromNormView.matrix;

const u_DepthTextureLocation = gl.getUniformLocation(program, "u_DepthTexture");
const u_UVTransformLocation = gl.getUniformLocation(program, "u_UVTransform");
const u_RawValueToMeters = gl.getUniformLocation(program, "u_RawValueToMeters");

gl.bindTexture(gl.TEXTURE_2D, depthInfo.texture);
gl.activeTexture(gl.TEXTURE0);
gl.uniform1i(u_DepthTextureLocation, 0);

// UV transform to correctly index into the depth map
gl.uniformMatrix4fv(u_UVTransformLocation, false, uvTransform);

// scaling factor to convert from the raw number to meters
gl.uniform1f(u_RawValueToMeters, depthInfo.rawValueToMeters);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation)
- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
