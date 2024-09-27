---
title: "XREquirectLayer: upperVerticalAngle-Eigenschaft"
short-title: upperVerticalAngle
slug: Web/API/XREquirectLayer/upperVerticalAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`upperVerticalAngle`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle stellt den oberen vertikalen Winkel in Radiant für die Kugel dar.

## Wert

Eine Zahl, die den oberen vertikalen Winkel in Radiant für die Kugel repräsentiert. Wenn `upperVerticalAngle` auf einen Wert kleiner als -π/2 gesetzt wird, wird er auf -π/2 gesetzt, und Werte größer als π/2 werden auf π/2 gesetzt.

## Beispiele

### Abrufen des oberen vertikalen Winkels eines Layers

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt eine equireckte Ebene und ermöglicht das Festlegen eines `upperVerticalAngle`. Die Eigenschaft `XREquirectLayer.upperVerticalAngle` kann nach der Erstellung des Layers verwendet werden, um den verwendeten oberen vertikalen Winkel abzurufen oder ihn auf einen neuen Wert zu setzen.

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

equirectLayer.upperVerticalAngle; // 1.5707963267948966
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XREquirectLayer.radius`](/de/docs/Web/API/XREquirectLayer/radius)
- [`XREquirectLayer.centralHorizontalAngle`](/de/docs/Web/API/XREquirectLayer/centralHorizontalAngle)
- [`XREquirectLayer.lowerVerticalAngle`](/de/docs/Web/API/XREquirectLayer/lowerVerticalAngle)
