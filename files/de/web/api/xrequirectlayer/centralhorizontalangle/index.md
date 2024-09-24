---
title: "XREquirectLayer: centralHorizontalAngle-Eigenschaft"
short-title: centralHorizontalAngle
slug: Web/API/XREquirectLayer/centralHorizontalAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`centralHorizontalAngle`**-Eigenschaft der {{domxref("XREquirectLayer")}}-Schnittstelle repräsentiert den zentralen horizontalen Winkel in Bogenmaß für die Kugel.

## Wert

Eine Zahl, die den zentralen horizontalen Winkel in Bogenmaß für die Kugel repräsentiert. Wenn `centralHorizontalAngle` auf einen Wert kleiner als 0 gesetzt wird, wird es auf 0 gesetzt, und wenn es auf einen Wert größer als 2π gesetzt wird, wird es auf 2π gesetzt.

## Beispiele

### Abrufen des zentralen horizontalen Winkels einer Schicht

Die Methode {{domxref("XRWebGLBinding.createEquirectLayer()")}} erstellt eine equirektanguläre Schicht und ermöglicht das Festlegen eines `centralHorizontalAngle`. Die `XREquirectLayer.centralHorizontalAngle`-Eigenschaft kann nach der Erstellung der Schicht verwendet werden, um den verwendeten zentralen horizontalen Winkel zu ermitteln oder um ihn auf einen neuen Wert zu setzen.

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

- {{domxref("XREquirectLayer.radius")}}
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
