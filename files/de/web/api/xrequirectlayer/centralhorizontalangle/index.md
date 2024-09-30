---
title: "XREquirectLayer: centralHorizontalAngle-Eigenschaft"
short-title: centralHorizontalAngle
slug: Web/API/XREquirectLayer/centralHorizontalAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`centralHorizontalAngle`**-Eigenschaft des [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Interfaces repräsentiert den zentralen horizontalen Winkel in Radiant für die Kugel.

## Wert

Eine Zahl, die den zentralen horizontalen Winkel in Radiant für die Kugel darstellt. Wenn `centralHorizontalAngle` auf einen Wert kleiner als 0 gesetzt wird, wird er auf 0 gesetzt, und wenn er auf einen Wert größer als 2π gesetzt wird, wird er auf 2π gesetzt.

## Beispiele

### Den zentralen horizontalen Winkel eines Layers abrufen

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt einen equirekten Layer und ermöglicht die Angabe eines `centralHorizontalAngle`. Die Eigenschaft `XREquirectLayer.centralHorizontalAngle` kann nach der Erstellung des Layers verwendet werden, um den verwendeten zentralen horizontalen Winkel abzurufen oder ihn auf einen neuen Wert zu setzen.

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

equirectLayer.centralHorizontalAngle; // 6.283185307179586
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XREquirectLayer.radius`](/de/docs/Web/API/XREquirectLayer/radius)
- [`XREquirectLayer.lowerVerticalAngle`](/de/docs/Web/API/XREquirectLayer/lowerVerticalAngle)
- [`XREquirectLayer.upperVerticalAngle`](/de/docs/Web/API/XREquirectLayer/upperVerticalAngle)
