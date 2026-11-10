---
title: "Window: fullScreen-Eigenschaft"
short-title: fullScreen
slug: Web/API/Window/fullScreen
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef}}{{Non-standard_Header}}

Die **`fullScreen`**-Eigenschaft der `Window`-Schnittstelle gibt an, ob das Fenster im Vollbildmodus angezeigt wird.

Beim Wechsel zwischen dem normalen Fenstermodus und dem Vollbildmodus wird auf dem entsprechenden Fenster das Ereignis „resize“ ausgelöst.

## Wert

Ein boolescher Wert: `true` bedeutet, dass sich das Fenster im Vollbildmodus befindet, `false`, dass dies nicht der Fall ist.

## Beispiele

```js
if (window.fullScreen) {
  // it's fullscreen!
} else {
  // not fullscreen!
}
```

## Browser-Kompatibilität

{{Compat}}
