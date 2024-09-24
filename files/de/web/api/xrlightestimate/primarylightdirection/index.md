---
title: "XRLightEstimate: Eigenschaft primaryLightDirection"
short-title: primaryLightDirection
slug: Web/API/XRLightEstimate/primaryLightDirection
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`primaryLightDirection`** des {{DOMxRef("XRLightEstimate")}}-Interfaces gibt einen {{domxref("DOMPointReadOnly")}} zurück, der die Richtung zur primären Lichtquelle vom `probeSpace` eines {{domxref("XRLightProbe")}} darstellt.

## Wert

Ein {{domxref("DOMPointReadOnly")}}-Objekt. Wenn keine geschätzten Werte aus der Umgebung des Benutzers verfügbar sind, wird der Punkt `{ x: 0.0, y: 1.0, z: 0.0, w: 0.0 }` sein, was ein Licht darstellt, das direkt von oben herab scheint.

## Beispiele

Innerhalb einer {{domxref("XRFrame")}}-Schleife können Sie die Eigenschaften `primaryLightDirection` und `primaryLightIntensity` verwenden, um beispielsweise Schatten basierend auf der dominantesten Lichtquelle zu rendern.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Render Lights

  // Verfügbare Eigenschaften
  lightEstimate.primaryLightDirection;
  lightEstimate.primaryLightIntensity;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLightEstimate.primaryLightIntensity")}}
- {{domxref("XRLightProbe.probeSpace")}}
