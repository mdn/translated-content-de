---
title: "ScreenDetailed: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/ScreenDetailed/devicePixelRatio
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`devicePixelRatio`**-Eigenschaft der [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Schnittstelle ist eine Zahl, die das {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnis des Bildschirms darstellt.

Dies ist dasselbe wie der Wert, der von [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) zurückgegeben wird, mit der Ausnahme, dass `Window.devicePixelRatio`:

- immer das Gerätepixelverhältnis des [aktuellen Bildschirms](/de/docs/Web/API/ScreenDetails/currentScreen) zurückgibt.
- auch die Skalierung des Fensters selbst einbezieht, d.h. Seitenzoom (zumindest in einigen Browser-Implementierungen).

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
