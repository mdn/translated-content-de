---
title: "XRSession: depthUsage-Eigenschaft"
short-title: depthUsage
slug: Web/API/XRSession/depthUsage
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`depthUsage`**-Eigenschaft einer `immersive-ar` {{DOMxRef("XRSession")}} beschreibt, welche Tiefenerkennungsnutzung verwendet wird.

## Wert

Diese Eigenschaft kann die folgenden Werte zurückgeben:

- `cpu-optimized`
  - : Die Tiefendaten sind zur Verwendung auf der CPU bestimmt; siehe die {{domxref("XRCPUDepthInformation")}} Schnittstelle.
- `gpu-optimized`
  - : Die Tiefendaten sind zur Verwendung auf der GPU bestimmt; siehe die {{domxref("XRWebGLDepthInformation")}} Schnittstelle.

## Beispiele

Um die gewünschte Nutzungsart anzufordern, müssen Sie eine `usagePreference` angeben, wenn Sie eine Sitzung mit {{domxref("XRSystem.requestSession()")}} anfordern. Hier kann der Anrufer sowohl CPU- als auch GPU-optimierte Nutzung verarbeiten. Die Reihenfolge gibt die Präferenz für die CPU an:

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});
```

Um zu überprüfen, welche Nutzung vom Benutzeragenten ausgewählt wurde, können Sie die `depthUsage`-Eigenschaft aufrufen:

```js
console.log(session.depthUsage); // entweder "cpu-optimized" oder "gpu-optimized"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
