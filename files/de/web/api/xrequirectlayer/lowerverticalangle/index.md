---
title: "XREquirectLayer: Eigenschaft lowerVerticalAngle"
short-title: lowerVerticalAngle
slug: Web/API/XREquirectLayer/lowerVerticalAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`lowerVerticalAngle`**-Eigenschaft der {{domxref("XREquirectLayer")}}-Schnittstelle repräsentiert den unteren vertikalen Winkel in Radiant für die Kugel.

## Wert

Eine Zahl, die den unteren vertikalen Winkel in Radiant für die Kugel darstellt. Wenn `lowerVerticalAngle` auf einen Wert kleiner als -π/2 gesetzt wird, wird er auf -π/2 gesetzt. Wenn er auf einen Wert größer als π/2 gesetzt wird, wird er auf π/2 gesetzt.

## Beispiele

### Den unteren vertikalen Winkel einer Schicht erhalten

Die {{domxref("XRWebGLBinding.createEquirectLayer()")}}-Methode erstellt eine equirect-Schicht und ermöglicht es, einen `lowerVerticalAngle` anzugeben. Die `XREquirectLayer.lowerVerticalAngle`-Eigenschaft kann nach der Erstellung der Schicht verwendet werden, um den verwendeten unteren vertikalen Winkel zu erhalten oder ihn auf einen neuen zu setzen.

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

- {{domxref("XREquirectLayer.radius")}}
- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
