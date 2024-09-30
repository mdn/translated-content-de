---
title: "XREquirectLayer: radius-Eigenschaft"
short-title: radius
slug: Web/API/XREquirectLayer/radius
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`radius`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle repräsentiert den Radius der Sphäre.

## Wert

Eine Zahl, die den nicht-negativen Radius (in Metern) der Sphäre darstellt. Werte von null oder unendlich werden als Darstellung einer unendlichen Sphäre behandelt. Wenn `radius` auf einen Wert kleiner als 0 gesetzt wird, wird er auf 0 gesetzt.

## Beispiele

### Den Radius einer Ebene abrufen

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt eine equirektanguläre Ebene und ermöglicht die Angabe eines `radius`. Die Eigenschaft `XREquirectLayer.radius` kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Radius abzurufen oder ihn auf einen neuen Wert zu setzen.

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
