---
title: "XRLightEstimate: Eigenschaft primaryLightIntensity"
short-title: primaryLightIntensity
slug: Web/API/XRLightEstimate/primaryLightIntensity
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`primaryLightIntensity`** des [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Interfaces gibt einen [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) zurück, der die Intensität der primären Lichtquelle aus dem `probeSpace` einer [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) repräsentiert.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt, bei dem ein RGB-Wert den `x`-, `y`- und `z`-Werten zugeordnet ist. Der `w`-Wert ist immer `1.0`. Wenn keine geschätzten Werte aus der Umgebung des Benutzers verfügbar sind, ist der Punkt `{x: 0.0, y: 0.0, z: 0.0, w: 1.0}`, was keine Beleuchtung darstellt.

## Beispiele

Innerhalb einer [`XRFrame`](/de/docs/Web/API/XRFrame)-Schleife können Sie die Eigenschaften `primaryLightDirection` und `primaryLightIntensity` verwenden, um beispielsweise Schatten basierend auf der prominentesten Lichtquelle zu rendern.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Render lights

  // Available properties
  lightEstimate.primaryLightDirection;
  lightEstimate.primaryLightIntensity;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLightEstimate.primaryLightDirection`](/de/docs/Web/API/XRLightEstimate/primaryLightDirection)
- [`XRLightProbe.probeSpace`](/de/docs/Web/API/XRLightProbe/probeSpace)
