---
title: "Screen: Farbeigenschaft colorDepth"
short-title: colorDepth
slug: Web/API/Screen/colorDepth
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die **`Screen.colorDepth`** schreibgeschützte Eigenschaft gibt die Farbtiefe des Bildschirms zurück. Laut CSSOM geben einige Implementierungen `24` zurück, um die Kompatibilität zu gewährleisten. Siehe den Abschnitt zur Browserkompatibilität für diejenigen, die dies nicht tun.

## Wert

Eine Zahl.

## Beispiele

```js
// Überprüfen der Farbtiefe des Bildschirms
if (window.screen.colorDepth < 8) {
  // Verwende die Version der Seite mit reduzierter Farbtiefe
} else {
  // Verwende die reguläre, farbenfrohe Seite
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Screen.pixelDepth")}}
