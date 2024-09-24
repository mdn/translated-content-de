---
title: XRLightEstimate
slug: Web/API/XRLightEstimate
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRLightEstimate`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) bietet die geschätzten Beleuchtungswerte für eine {{domxref("XRLightProbe")}} zu dem Zeitpunkt, der durch ein {{domxref("XRFrame")}} repräsentiert wird.

Um ein `XRLightEstimate`-Objekt zu erhalten, rufen Sie die Methode {{domxref("XRFrame.getLightEstimate()")}} auf.

## Instanzattribute

- {{domxref("XRLightEstimate.primaryLightDirection")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMPointReadOnly")}}, das die Richtung zur primären Lichtquelle vom `probeSpace` einer {{domxref("XRLightProbe")}} darstellt.
- {{domxref("XRLightEstimate.primaryLightIntensity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMPointReadOnly")}} (mit den `x`, `y`, `z` Werten, die auf RGB abgebildet sind), das die Intensität der primären Lichtquelle vom `probeSpace` einer {{domxref("XRLightProbe")}} darstellt.
- {{domxref("XRLightEstimate.sphericalHarmonicsCoefficients")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das 9 sphärische Harmonische Koeffizienten enthält.

## Instanzmethoden

Keine.

## Beispiele

### Ein `XRLightProbe`-Objekt erhalten

Verwenden Sie zuerst die Methode {{domxref("XRSession.requestLightProbe()")}}, um eine Lichtsonde von einer Sitzung zu erhalten. Dann gibt innerhalb einer {{domxref("XRFrame")}}-Schleife die Methode {{domxref("XRFrame.getLightEstimate", "getLightEstimate()")}} ein `XRLightEstimate`-Objekt zurück, das die Beleuchtungswerte für jedes Frame enthält.

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

- {{domxref("XRFrame.getLightEstimate()")}}
