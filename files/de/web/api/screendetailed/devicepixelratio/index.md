---
title: "ScreenDetailed: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/ScreenDetailed/devicePixelRatio
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`devicePixelRatio`**-Eigenschaft des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist eine Zahl, die das {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnis des Bildschirms darstellt.

Dies entspricht dem Wert, der von [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) zurückgegeben wird, außer dass `Window.devicePixelRatio`:

- immer das Geräte-Pixel-Verhältnis für den [aktuellen Bildschirm](/de/docs/Web/API/ScreenDetails/currentScreen) zurückgibt.
- außerdem die Skalierung des Fensters selbst umfasst, also die Seitenskala (zumindest in einigen Browser-Implementierungen).

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
