---
title: "Screen: width-Eigenschaft"
short-title: Breite
slug: Web/API/Screen/width
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`Screen.width`** gibt die Breite des Bildschirms in CSS-Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
// Grobe Methode, um zu überprüfen, ob der Bildschirm mindestens 1024x768 ist
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // Auflösung ist 1024x768 oder höher
}
```

## Hinweise

Beachten Sie, dass möglicherweise nicht die gesamte von dieser Eigenschaft angegebene Breite für das Fenster selbst verfügbar ist. Wenn andere Widgets Platz beanspruchen, der vom `window`-Objekt nicht genutzt werden kann, gibt es einen Unterschied zwischen `window.screen.width` und `window.screen.availWidth`. Siehe auch {{DOMxRef("screen.height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
