---
title: XRLightEstimate
slug: Web/API/XRLightEstimate
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRLightEstimate`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) liefert die geschätzten Beleuchtungswerte für eine [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) zur Zeit, die durch ein [`XRFrame`](/de/docs/Web/API/XRFrame) repräsentiert wird.

Um ein `XRLightEstimate`-Objekt zu erhalten, rufen Sie die Methode [`XRFrame.getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate) auf.

## Instanz-Eigenschaften

- [`XRLightEstimate.primaryLightDirection`](/de/docs/Web/API/XRLightEstimate/primaryLightDirection) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die Richtung zur primären Lichtquelle vom `probeSpace` einer [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) darstellt.
- [`XRLightEstimate.primaryLightIntensity`](/de/docs/Web/API/XRLightEstimate/primaryLightIntensity) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) (mit den `x`, `y`, `z`-Werten, die auf RGB abgebildet sind), der die Intensität der primären Lichtquelle vom `probeSpace` einer [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) darstellt.
- [`XRLightEstimate.sphericalHarmonicsCoefficients`](/de/docs/Web/API/XRLightEstimate/sphericalHarmonicsCoefficients) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der 9 kugelförmige Harmonische Koeffizienten enthält.

## Instanz-Methoden

Keine.

## Beispiele

### Erhalten eines `XRLightProbe`-Objekts

Verwenden Sie zuerst die Methode [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe), um eine Lichtsonde aus einer Sitzung zu erhalten.
Dann wird innerhalb einer [`XRFrame`](/de/docs/Web/API/XRFrame)-Schleife die Methode [`getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate) ein `XRLightEstimate`-Objekt zurückgeben, das die Beleuchtungswerte für jedes Frame enthält.

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

- [`XRFrame.getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate)
