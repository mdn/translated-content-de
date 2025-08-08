---
title: "Screen: pixelDepth-Eigenschaft"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("CSSOM")}}

Gibt die Farbtiefe des Bildschirms zurück. Gemäß CSSOM geben einige Implementierungen `24` aus Kompatibilitätsgründen zurück. Siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für diejenigen, die das nicht tun.

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
