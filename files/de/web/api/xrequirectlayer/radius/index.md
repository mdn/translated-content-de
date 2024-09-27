---
title: "XREquirectLayer: radius-Eigenschaft"
short-title: radius
slug: Web/API/XREquirectLayer/radius
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`radius`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle repräsentiert den Radius der Kugel.

## Wert

Eine Zahl, die den nicht-negativen Radius (in Metern) der Kugel darstellt. Werte von Null oder Unendlichkeit werden als Darstellung einer unendlichen Kugel behandelt. Wenn `radius` auf einen Wert kleiner als 0 gesetzt wird, wird er auf 0 gesetzt.

## Beispiele

### Abrufen des Radius eines Layers

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt einen equirectangular Layer und ermöglicht die Angabe eines `radius`. Die `XREquirectLayer.radius`-Eigenschaft kann nach der Erstellung des Layers verwendet werden, um den verwendeten Radius zu erhalten oder um ihn auf einen neuen Wert zu setzen.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 1200,
  viewPixelHeight: 600,
  centralHorizontalAngle: 2 * Math.PI,
  upperVerticalAngle: Math.PI / 2.0,
  lowerVerticalAngle: -Math.PI / 2.0,
  radius: 0,
});

equirectLayer.radius; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XREquirectLayer.centralHorizontalAngle`](/de/docs/Web/API/XREquirectLayer/centralHorizontalAngle)
- [`XREquirectLayer.lowerVerticalAngle`](/de/docs/Web/API/XREquirectLayer/lowerVerticalAngle)
- [`XREquirectLayer.upperVerticalAngle`](/de/docs/Web/API/XREquirectLayer/upperVerticalAngle)
