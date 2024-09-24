---
title: "XRWebGLDepthInformation: texture-Eigenschaft"
short-title: texture
slug: Web/API/XRWebGLDepthInformation/texture
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die _schreibgeschützte_ **`texture`**-Eigenschaft des {{DOMxRef("XRWebGLDepthInformation")}}-Interfaces ist eine {{domxref("WebGLTexture")}}, die Tiefenpufferinformationen als eine undurchsichtige Textur enthält.

## Wert

Eine {{domxref("WebGLTexture")}}.

## Beispiele

Verwenden Sie {{domxref("XRWebGLBinding.getDepthInformation()")}}, um GPU-Tiefeninformationen zu erhalten. Das zurückgegebene `XRWebGLDepthInformation`-Objekt wird den `texture`-Puffer enthalten, der dann an eine Textur gebunden werden kann, sodass Tiefenpufferinformationen einem WebGL-Fragment-Shader zur Verfügung gestellt werden können.

```js
const depthInfo = glBinding.getDepthInformation(view);
const uvTransform = depthInfo.normDepthBufferFromNormView.matrix;

const u_DepthTextureLocation = gl.getUniformLocation(program, "u_DepthTexture");
const u_UVTransformLocation = gl.getUniformLocation(program, "u_UVTransform");
const u_RawValueToMeters = gl.getUniformLocation(program, "u_RawValueToMeters");

gl.bindTexture(gl.TEXTURE_2D, depthInfo.texture);
gl.activeTexture(gl.TEXTURE0);
gl.uniform1i(u_DepthTextureLocation, 0);

// UV-Transformation zur korrekten Indizierung in die Tiefenkarte
gl.uniformMatrix4fv(u_UVTransformLocation, false, uvTransform);

// Skalierungsfaktor zur Umrechnung vom Rohwert in Meter
gl.uniform1f(u_RawValueToMeters, depthInfo.rawValueToMeters);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRWebGLBinding.getDepthInformation()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
