---
title: "XRLightEstimate: Eigenschaft primaryLightIntensity"
short-title: primaryLightIntensity
slug: Web/API/XRLightEstimate/primaryLightIntensity
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`primaryLightIntensity`**-Eigenschaft der {{DOMxRef("XRLightEstimate")}}-Schnittstelle gibt ein {{domxref("DOMPointReadOnly")}} zurück, das die Intensität der primären Lichtquelle aus dem `probeSpace` einer {{domxref("XRLightProbe")}} darstellt.

## Wert

Ein {{domxref("DOMPointReadOnly")}}-Objekt, bei dem ein RGB-Wert auf die `x`, `y` und `z` Werte abgebildet wird. Der `w`-Wert ist immer `1.0`. Wenn keine geschätzten Werte aus der Umgebung des Benutzers verfügbar sind, wird der Punkt als `{x: 0.0, y: 0.0, z: 0.0, w: 1.0}` dargestellt, was keine Beleuchtung bedeutet.

## Beispiele

Innerhalb einer {{domxref("XRFrame")}}-Schleife können Sie die Eigenschaften `primaryLightDirection` und `primaryLightIntensity` verwenden, um z.B. Schatten basierend auf der prominentesten Lichtquelle zu rendern.

```js
const lightProbe = await xrSession.requestLightProbe();

// Frame-Schleife
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Lichter rendern

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

- {{domxref("XRLightEstimate.primaryLightDirection")}}
- {{domxref("XRLightProbe.probeSpace")}}
