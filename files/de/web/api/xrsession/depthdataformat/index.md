---
title: "XRSession: depthDataFormat-Eigenschaft"
short-title: depthDataFormat
slug: Web/API/XRSession/depthDataFormat
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`depthDataFormat`**-Eigenschaft einer `immersive-ar` [`XRSession`](/de/docs/Web/API/XRSession) beschreibt, welches Tiefensensor-Datenformat verwendet wird.

## Wert

Diese Eigenschaft kann die folgenden Werte zurückgeben:

- `luminance-alpha`
  - : 2-Byte-unsigned-Integer-Datenpuffer (`LUMINANCE_ALPHA` `GLEnum`).
    CPU-Nutzung: Interpretieren Sie [`XRCPUDepthInformation.data`](/de/docs/Web/API/XRCPUDepthInformation/data) als {{jsxref("Uint8Array")}}.
    GPU-Nutzung: Untersuchen Sie die Luminanz- und Alphakanäle, um einen einzelnen Wert wiederherzustellen.
- `float32`
  - : 4-Byte-Gleitkomma-Datenpuffer (`R32F` `GLEnum`).
    CPU-Nutzung: Interpretieren Sie [`XRCPUDepthInformation.data`](/de/docs/Web/API/XRCPUDepthInformation/data) als {{jsxref("Float32Array")}}.
    GPU-Nutzung: Untersuchen Sie den Rotkanal und nutzen Sie den Wert.

## Beispiele

Um das gewünschte Datenformat anzufordern, müssen Sie eine `dataFormatPreference` angeben, wenn Sie eine Sitzung mit [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern. Hier ist der Aufrufer in der Lage, sowohl das "luminance-alpha"- als auch das "float32"-Format zu verarbeiten. Die Reihenfolge gibt die Präferenz für "luminance-alpha" an:

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});
```

Um zu überprüfen, welches Datenformat vom Benutzeragenten ausgewählt wurde, können Sie die `depthDataFormat`-Eigenschaft aufrufen:

```js
console.log(session.depthDataFormat); // either "luminance-alpha" or "float32"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
