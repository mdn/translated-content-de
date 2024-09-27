---
title: "XRLightEstimate: primaryLightDirection-Eigenschaft"
short-title: primaryLightDirection
slug: Web/API/XRLightEstimate/primaryLightDirection
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`primaryLightDirection`**-Eigenschaft des [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Interfaces gibt ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) zurück, das die Richtung zur primären Lichtquelle vom `probeSpace` eines [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) darstellt.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt. Wenn im Umfeld des Benutzers keine geschätzten Werte verfügbar sind, wird der Punkt `{ x: 0.0, y: 1.0, z: 0.0, w: 0.0 }` sein, was eine Lichtquelle darstellt, die direkt von oben nach unten scheint.

## Beispiele

Innerhalb einer [`XRFrame`](/de/docs/Web/API/XRFrame)-Schleife können Sie die Eigenschaften `primaryLightDirection` und `primaryLightIntensity` verwenden, um zum Beispiel Schatten basierend auf der hervorstechendsten Lichtquelle zu rendern.

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

- [`XRLightEstimate.primaryLightIntensity`](/de/docs/Web/API/XRLightEstimate/primaryLightIntensity)
- [`XRLightProbe.probeSpace`](/de/docs/Web/API/XRLightProbe/probeSpace)
