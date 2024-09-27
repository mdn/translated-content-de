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

Eine Nummer, die den zentralen horizontalen Winkel in Radiant für die Kugel darstellt. Wird `centralHorizontalAngle` auf einen Wert kleiner als 0 gesetzt, wird es auf 0 gesetzt, und bei einem Wert größer als 2π wird es auf 2π gesetzt.

## Beispiele

### Ermitteln des zentralen horizontalen Winkels einer Ebene

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt eine equirektere Ebene und ermöglicht die Angabe eines `centralHorizontalAngle`. Die Eigenschaft `XREquirectLayer.centralHorizontalAngle` kann nach Erstellung der Ebene verwendet werden, um den verwendeten zentralen horizontalen Winkel zu ermitteln oder um ihn auf einen neuen Wert zu setzen.

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
