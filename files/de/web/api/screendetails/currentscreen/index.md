---
title: "ScreenDetails: currentScreen-Eigenschaft"
short-title: currentScreen
slug: Web/API/ScreenDetails/currentScreen
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`currentScreen`**-Eigenschaft des [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Interfaces enthält ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt, das detaillierte Informationen über den Bildschirm darstellt, auf dem das aktuelle Browserfenster angezeigt wird.

## Wert

Ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt.

## Beispiele

```js
// Utility function for opening new windows
function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  return window.open(url, "_blank", windowFeatures);
}

// Open a new window that fills the available area of the current screen.
const currentScreen = (await window.getScreenDetails()).currentScreen;
console.log(`Opening a window to fill screen ${currentScreen.label}`);
const windowRef = openWindow(
  currentScreen.availLeft,
  currentScreen.availTop,
  currentScreen.availWidth,
  currentScreen.availHeight,
  url,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
