---
title: "XRLightEstimate: sphericalHarmonicsCoefficients-Eigenschaft"
short-title: sphericalHarmonicsCoefficients
slug: Web/API/XRLightEstimate/sphericalHarmonicsCoefficients
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`sphericalHarmonicsCoefficients`**-Eigenschaft der [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Schnittstelle gibt ein {{jsxref("Float32Array")}} zurück, das neun Sphärische-Harmonische-Koeffizienten enthält.

Die Beleuchtung mit sphärischen Harmonischen ist eine Technik, die sphärische Funktionen anstelle von Standard-Beleuchtungsgleichungen verwendet. Weitere Informationen finden Sie auf [Wikipedia](https://en.wikipedia.org/wiki/Spherical_harmonic_lighting).

## Wert

Ein {{jsxref("Float32Array")}}, das neun Sphärische-Harmonische-Koeffizienten enthält. Das Array hat insgesamt 27 Elemente, wobei alle drei Elemente die Rot-, Grün- und Blaukomponenten für jeden Koeffizienten definieren.

Die ersten drei Elemente müssen eine gültige Beleuchtungskompone enthalten; die restlichen Elemente können 0 sein, aufgrund von Datenschutzeinstellungen oder Einschränkungen des Geräts, mehr Daten bereitzustellen.

## Beispiele

Innerhalb einer [`XRFrame`](/de/docs/Web/API/XRFrame)-Schleife können Sie die Eigenschaft `sphericalHarmonicsCoefficients` verwenden, um die Szene zu beleuchten.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Render lights using lightEstimate.sphericalHarmonicsCoefficients
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRFrame.getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate)
