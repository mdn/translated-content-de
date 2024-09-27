---
title: "XRSession: depthUsage-Eigenschaft"
short-title: depthUsage
slug: Web/API/XRSession/depthUsage
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`depthUsage`**-Eigenschaft einer `immersive-ar`-[`XRSession`](/de/docs/Web/API/XRSession) beschreibt, welche Tiefenerkennungsnutzung verwendet wird.

## Wert

Diese Eigenschaft kann die folgenden Werte zurückgeben:

- `cpu-optimized`
  - : Die Tiefendaten sind zur Verwendung auf der CPU vorgesehen; siehe das [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)-Interface.
- `gpu-optimized`
  - : Die Tiefendaten sind zur Verwendung auf der GPU vorgesehen; siehe das [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)-Interface.

## Beispiele

Um die gewünschte Nutzungsmethode anzufordern, müssen Sie eine `usagePreference` angeben, wenn Sie eine Sitzung mit [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern. Hier kann der Anrufer sowohl CPU- als auch GPU-optimierte Nutzung behandeln. Die Reihenfolge zeigt die Präferenz für die CPU:

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
console.log(session.depthUsage); // either "cpu-optimized" or "gpu-optimized"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
