---
title: "XRFrame: getLightEstimate() Methode"
short-title: getLightEstimate()
slug: Web/API/XRFrame/getLightEstimate
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getLightEstimate()`**-Methode der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle gibt ein [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekt zurück, das geschätzte Beleuchtungswerte für eine gegebene [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) enthält.

## Syntax

```js-nolint
getLightEstimate(lightProbe)
```

### Parameter

- `lightProbe`
  - : Ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)-Objekt, das den aktuellen Beleuchtungszustand für den Rahmen enthält.

### Rückgabewert

Ein [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn das Gerät die Beleuchtung für diesen Rahmen nicht abschätzen kann.

## Beispiele

### Lichtschätzungen für jeden Rahmen erhalten

Gegeben einer Sitzung's [`XRLightProbe`](/de/docs/Web/API/XRLightProbe), erhält die `getLightEstimate()`-Methode ein [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekt, das die Beleuchtungswerte für jeden Rahmen enthält.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Use light estimate data to light the scene

  // Available properties
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

- [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)
- [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)
