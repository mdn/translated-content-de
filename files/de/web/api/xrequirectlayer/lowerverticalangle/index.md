---
title: "XREquirectLayer: lowerVerticalAngle-Eigenschaft"
short-title: lowerVerticalAngle
slug: Web/API/XREquirectLayer/lowerVerticalAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`lowerVerticalAngle`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle repräsentiert den unteren vertikalen Winkel in Radiant für die Kugel.

## Wert

Eine Zahl, die den unteren vertikalen Winkel in Radiant für die Kugel darstellt. Wenn `lowerVerticalAngle` auf einen Wert kleiner als -π/2 gesetzt wird, wird er auf -π/2 gesetzt, und wenn er auf einen größeren Wert als π/2 gesetzt wird, wird er auf π/2 gesetzt.

## Beispiele

### Den unteren vertikalen Winkel einer Schicht abrufen

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt eine equirect Schicht und ermöglicht die Angabe eines `lowerVerticalAngle`. Die `XREquirectLayer.lowerVerticalAngle`-Eigenschaft kann nach der Schichterstellung verwendet werden, um den verwendeten unteren vertikalen Winkel zu erhalten oder um ihn auf einen neuen Wert zu setzen.

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

equirectLayer.lowerVerticalAngle; // -1.5707963267948966
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XREquirectLayer.radius`](/de/docs/Web/API/XREquirectLayer/radius)
- [`XREquirectLayer.centralHorizontalAngle`](/de/docs/Web/API/XREquirectLayer/centralHorizontalAngle)
- [`XREquirectLayer.upperVerticalAngle`](/de/docs/Web/API/XREquirectLayer/upperVerticalAngle)
