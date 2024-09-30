---
title: "ScreenDetailed: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/ScreenDetailed/devicePixelRatio
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`devicePixelRatio`**-Eigenschaft des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist eine Zahl, die das Device-Pixel-Verhältnis des Bildschirms darstellt.

Dies entspricht dem Wert, der von [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) zurückgegeben wird, außer dass `Window.devicePixelRatio`:

- immer das Device-Pixel-Verhältnis für den [aktuellen Bildschirm](/de/docs/Web/API/ScreenDetails/currentScreen) zurückgibt.
- auch das Skalieren des Fensters selbst einschließt, d.h. Seitenzoom (zumindest in einigen Browserimplementierungen).

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
