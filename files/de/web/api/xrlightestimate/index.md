---
title: XRLightEstimate
slug: Web/API/XRLightEstimate
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRLightEstimate`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) liefert die geschätzten Lichtwerte für eine [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) zu dem Zeitpunkt, der durch ein [`XRFrame`](/de/docs/Web/API/XRFrame) dargestellt wird.

Um ein `XRLightEstimate`-Objekt zu erhalten, rufen Sie die Methode [`XRFrame.getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate) auf.

## Instanzeigenschaften

- [`XRLightEstimate.primaryLightDirection`](/de/docs/Web/API/XRLightEstimate/primaryLightDirection) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die Richtung zur primären Lichtquelle vom `probeSpace` einer [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) darstellt.
- [`XRLightEstimate.primaryLightIntensity`](/de/docs/Web/API/XRLightEstimate/primaryLightIntensity) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) (mit den `x`, `y`, `z` Werten auf RGB abgebildet), der die Intensität der primären Lichtquelle vom `probeSpace` einer [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) darstellt.
- [`XRLightEstimate.sphericalHarmonicsCoefficients`](/de/docs/Web/API/XRLightEstimate/sphericalHarmonicsCoefficients) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das 9 Kugeloberflächenharmonische Koeffizienten enthält.

## Instanzmethoden

Keine.

## Beispiele

### Erhalt eines `XRLightProbe`-Objekts

Verwenden Sie zunächst die Methode [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe), um eine Lichtsonde von einer Sitzung zu erhalten. Innerhalb einer [`XRFrame`](/de/docs/Web/API/XRFrame)-Schleife gibt die Methode [`getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate) ein `XRLightEstimate`-Objekt zurück, das die Lichtwerte für jeden Frame enthält.

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
