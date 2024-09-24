---
title: "ScreenDetailed: Eigenschaft devicePixelRatio"
short-title: devicePixelRatio
slug: Web/API/ScreenDetailed/devicePixelRatio
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`devicePixelRatio`**-Eigenschaft des {{domxref("ScreenDetailed")}}-Interfaces ist eine Zahl, die das Device Pixel Ratio des Bildschirms darstellt.

Dies ist dasselbe wie der Wert, der von {{domxref("Window.devicePixelRatio")}} zurückgegeben wird, außer dass `Window.devicePixelRatio`:

- immer das Device Pixel Ratio für den {{domxref("ScreenDetails.currentScreen", "aktuellen Bildschirm", "", "nocode")}} zurückgibt.
- auch die Skalierung des Fensters selbst einschließt, d. h. das Seitenzoom (zumindest in einigen Browser-Implementierungen).

## Wert

Eine Zahl.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Gibt das Device Pixel Ratio des ersten Bildschirms zurück
const screen1DPR = screenDetails.screens[0].devicePixelRatio;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
