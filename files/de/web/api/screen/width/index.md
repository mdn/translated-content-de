---
title: "Screen: width-Eigenschaft"
short-title: width
slug: Web/API/Screen/width
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`Screen.width`** gibt die Breite des Bildschirms in CSS-Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
// Crude way to check that the screen is at least 1024x768
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // Resolution is 1024x768 or above
}
```

## Hinweise

Beachten Sie, dass nicht die gesamte Breite, die durch diese Eigenschaft angegeben wird, für das Fenster selbst verfügbar sein könnte. Wenn andere Widgets Platz beanspruchen, der vom `window`-Objekt nicht genutzt werden kann, gibt es einen Unterschied zwischen `window.screen.width` und `window.screen.availWidth`. Siehe auch [`screen.height`](/de/docs/Web/API/Screen/height).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
