---
title: "XRCubeLayer: Orientierungseigenschaft"
short-title: Orientierung
slug: Web/API/XRCubeLayer/orientation
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`orientation`**-Eigenschaft der {{domxref("XRCubeLayer")}}-Schnittstelle repräsentiert die Orientierung relativ zur `space`-Eigenschaft.

## Wert

Ein {{domxref("DOMPointReadOnly")}}.

## Beispiele

### Aktuell die Orientierung der Würfelschicht aktualisieren

Die {{domxref("XRWebGLBinding.createCubeLayer()")}}-Methode erstellt eine Würfelschicht und ermöglicht das Angeben einer `orientation`. Die `XRCubeLayer.orientation`-Eigenschaft kann nach der Schichterstellung verwendet werden, um die aktuelle Orientierung abzurufen oder sie auf eine neue zu setzen.

```js
const cubeLayer = xrGlBinding.createCubeLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
  orientation: DOMPointReadOnly.fromPoint({ x: 0.0, y: 0.0, z: 0.0, w: 1.0 }),
});

cubeLayer.orientation = someOtherPoint;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMPointReadOnly")}}
- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}
