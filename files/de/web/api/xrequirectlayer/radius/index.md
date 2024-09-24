---
title: "XREquirectLayer: Radius-Eigenschaft"
short-title: Radius
slug: Web/API/XREquirectLayer/radius
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`radius`**-Eigenschaft der {{domxref("XREquirectLayer")}}-Schnittstelle repräsentiert den Radius der Kugel.

## Wert

Eine Zahl, die den nicht-negativen Radius (in Metern) der Kugel darstellt. Werte von null oder unendlich werden als unbeendliche Kugel behandelt. Wenn `radius` auf einen Wert kleiner als 0 gesetzt wird, wird er auf 0 gesetzt.

## Beispiele

### Den Radius einer Schicht abrufen

Die Methode {{domxref("XRWebGLBinding.createEquirectLayer()")}} erstellt eine equirektangulare Schicht und ermöglicht das Angeben eines `radius`. Die Eigenschaft `XREquirectLayer.radius` kann nach der Schichterstellung verwendet werden, um den verwendeten Radius abzurufen oder um einen neuen zu setzen.

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

- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
