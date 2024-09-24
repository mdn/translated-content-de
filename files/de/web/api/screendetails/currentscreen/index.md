---
title: "ScreenDetails: currentScreen-Eigenschaft"
short-title: currentScreen
slug: Web/API/ScreenDetails/currentScreen
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`currentScreen`** schreibgeschützte Eigenschaft der
{{domxref("ScreenDetails")}}-Schnittstelle enthält ein einzelnes {{domxref("ScreenDetailed")}}-Objekt, das detaillierte Informationen über den Bildschirm repräsentiert, auf dem das aktuelle Browserfenster angezeigt wird.

## Wert

Ein {{domxref("ScreenDetailed")}}-Objekt.

## Beispiele

```js
// Hilfsfunktion zum Öffnen neuer Fenster
function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  return window.open(url, "_blank", windowFeatures);
}

// Öffnen Sie ein neues Fenster, das den verfügbaren Bereich des aktuellen Bildschirms ausfüllt.
const currentScreen = (await window.getScreenDetails()).currentScreen;
console.log(`Öffne ein Fenster, um Bildschirm ${currentScreen.label} auszufüllen`);
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
