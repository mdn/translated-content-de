---
title: "Screen: pixelDepth-Eigenschaft"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`pixelDepth`** der Schnittstelle [`Screen`](/de/docs/Web/API/Screen) gibt die Farbtiefe des Bildschirms in Bit zurück. Gemäß CSSOM geben einige Implementierungen aus Kompatibilitätsgründen `24` zurück. Welche Implementierungen davon abweichen, erfahren Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Wert

Eine Zahl.

## Beispiele

```js
// if there is not adequate bit depth
// choose a simpler color
document.style.color = window.screen.pixelDepth > 8 ? "#FAEBD7" : "white";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.colorDepth`](/de/docs/Web/API/Screen/colorDepth)
