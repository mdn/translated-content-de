---
title: "XRFrame: getLightEstimate()-Methode"
short-title: getLightEstimate()
slug: Web/API/XRFrame/getLightEstimate
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getLightEstimate()`**-Methode des {{domxref("XRFrame")}}-Interfaces gibt ein {{domxref("XRLightEstimate")}}-Objekt zurück, das geschätzte Beleuchtungswerte für eine gegebene {{domxref("XRLightProbe")}} enthält.

## Syntax

```js-nolint
getLightEstimate(lightProbe)
```

### Parameter

- `lightProbe`
  - : Ein {{domxref("XRLightProbe")}}-Objekt, das den aktuellen Beleuchtungszustand für den Frame enthält.

### Rückgabewert

Ein {{domxref("XRLightEstimate")}}-Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn das Gerät die Beleuchtung für diesen Frame nicht schätzen kann.

## Beispiele

### Beleuchtungsschätzungen für jeden Frame erhalten

Angesichts der {{domxref("XRLightProbe")}} einer Sitzung holt die `getLightEstimate()`-Methode ein {{domxref("XRLightEstimate")}}-Objekt, das die Beleuchtungswerte für jeden Frame enthält.

```js
const lightProbe = await xrSession.requestLightProbe();

// Frame-Schleife
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Beleuchtungsschätzungsdaten verwenden, um die Szene zu beleuchten

  // Verfügbare Eigenschaften
  lightEstimate.sphericalHarmonicsCoefficients;
  lightEstimate.primaryLightDirection;
  lightEstimate.primaryLightIntensity;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLightEstimate")}}
- {{domxref("XRLightProbe")}}
