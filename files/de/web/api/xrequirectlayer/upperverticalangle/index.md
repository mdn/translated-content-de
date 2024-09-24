---
title: "XREquirectLayer: upperVerticalAngle-Eigenschaft"
short-title: upperVerticalAngle
slug: Web/API/XREquirectLayer/upperVerticalAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`upperVerticalAngle`**-Eigenschaft der {{domxref("XREquirectLayer")}}-Schnittstelle repräsentiert den oberen vertikalen Winkel in Bogenmaß für die Kugel.

## Wert

Eine Zahl, die den oberen vertikalen Winkel in Bogenmaß für die Kugel darstellt. Wenn `upperVerticalAngle` auf einen Wert kleiner als -π/2 gesetzt wird, wird es auf -π/2 gesetzt und bei einem Wert größer als π/2 wird es auf π/2 gesetzt.

## Beispiele

### Den oberen vertikalen Winkel eines Layers abrufen

Die Methode {{domxref("XRWebGLBinding.createEquirectLayer()")}} erstellt ein equirektes Layer und ermöglicht die Angabe eines `upperVerticalAngle`. Die Eigenschaft `XREquirectLayer.upperVerticalAngle` kann nach der Erstellung des Layers verwendet werden, um den verwendeten oberen vertikalen Winkel abzurufen oder auf einen neuen Wert zu setzen.

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

- {{domxref("XREquirectLayer.radius")}}
- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
