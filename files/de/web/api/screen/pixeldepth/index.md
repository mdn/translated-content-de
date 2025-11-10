---
title: "Screen: pixelDepth-Eigenschaft"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Gibt die Farbtiefe des Bildschirms zurück. Laut CSSOM geben einige Implementierungen `24` aus Kompatibilitätsgründen zurück. Siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für diejenigen, die dies nicht tun.

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
