---
title: "XRLightEstimate: Eigenschaft sphericalHarmonicsCoefficients"
short-title: sphericalHarmonicsCoefficients
slug: Web/API/XRLightEstimate/sphericalHarmonicsCoefficients
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`sphericalHarmonicsCoefficients`**-Eigenschaft der {{DOMxRef("XRLightEstimate")}}-Schnittstelle gibt ein {{jsxref("Float32Array")}} zurück, das 9 sphärische Harmonische Koeffizienten enthält.

Sphärische harmonische Beleuchtung ist eine Technik, die sphärische Funktionen anstelle von Standard-Beleuchtungsgleichungen verwendet. Weitere Informationen finden Sie auf [Wikipedia](https://de.wikipedia.org/wiki/Spherische_Harmonische_Beleuchtung).

## Wert

Ein {{jsxref("Float32Array")}}, das 9 sphärische harmonische Koeffizienten enthält. Das Array umfasst insgesamt 27 Elemente, wobei jeweils 3 Elemente die Rot-, Grün- und Blaukomponenten für jeden Koeffizienten definieren.

Die ersten 3 Elemente müssen eine gültige Beleuchtungskomponente sein; der Rest kann aufgrund von Datenschutzeinstellungen oder Einschränkungen des Geräts, mehr Daten bereitzustellen, 0 sein.

## Beispiele

Innerhalb einer {{domxref("XRFrame")}} Schleife können Sie die `sphericalHarmonicsCoefficients`-Eigenschaft verwenden, um die Szene zu beleuchten.

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

- {{domxref("XRFrame.getLightEstimate()")}}
