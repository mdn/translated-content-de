---
title: "XRLightEstimate: Eigenschaft sphericalHarmonicsCoefficients"
short-title: sphericalHarmonicsCoefficients
slug: Web/API/XRLightEstimate/sphericalHarmonicsCoefficients
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`sphericalHarmonicsCoefficients`** der Schnittstelle [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate) gibt ein {{jsxref("Float32Array")}} zurück, das 9 Kugelharmonische-Koeffizienten enthält.

Sphärische harmonische Beleuchtung ist eine Technik, die Kugelfunktionen anstelle von Standardbeleuchtungsgleichungen verwendet. Weitere Informationen finden Sie auf [Wikipedia](https://en.wikipedia.org/wiki/Spherical_harmonic_lighting).

## Wert

Ein {{jsxref("Float32Array")}}, das 9 sphärische harmonische Koeffizienten enthält. Das Array enthält insgesamt 27 Elemente, wobei jeweils 3 Elemente rote, grüne und blaue Komponenten für jeden Koeffizienten definieren.

Die ersten 3 Elemente müssen eine gültige Beleuchtungsschätzungskomponente sein; die restlichen können aufgrund von Datenschutzeinstellungen oder Einschränkungen des Geräts, um mehr Daten bereitzustellen, 0 sein.

## Beispiele

Innerhalb einer [`XRFrame`](/de/docs/Web/API/XRFrame)-Schleife können Sie die `sphericalHarmonicsCoefficients`-Eigenschaft verwenden, um die Szene zu beleuchten.

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
