---
title: "ScreenDetailed: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/ScreenDetailed/devicePixelRatio
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`devicePixelRatio`**-Eigenschaft der [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Schnittstelle ist eine schreibgeschützte Eigenschaft und gibt die Geräte-Pixel-Ratio des Bildschirms als Zahl zurück.

Dies ist dasselbe wie der Wert, der von [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) zurückgegeben wird. Dabei unterscheidet sich jedoch `Window.devicePixelRatio` dadurch, dass es:

- immer die Geräte-Pixel-Ratio für den [aktuellen Bildschirm](/de/docs/Web/API/ScreenDetails/currentScreen) zurückgibt.
- auch die Skalierung des Fensters selbst, also das Seitenzoom (zumindest in einigen Browser-Implementierungen), einbezieht.

## Wert

Eine Zahl.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Return the device pixel ratio of the first screen
const screen1DPR = screenDetails.screens[0].devicePixelRatio;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
