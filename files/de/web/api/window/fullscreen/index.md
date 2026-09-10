---
title: "Window: fullScreen-Eigenschaft"
short-title: fullScreen
slug: Web/API/Window/fullScreen
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{APIRef}}{{Non-standard_Header}}

Die **`fullScreen`**-Eigenschaft der `Window`-Schnittstelle gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.

## Wert

Ein boolescher Wert, wobei `true` bedeutet, dass sich das Fenster im Vollbildmodus befindet, und `false`, dass dies nicht der Fall ist.

## Hinweise

- Das Umschalten zwischen normalem Fenster und Vollbild löst das Ereignis „resize“ für das entsprechende Fenster aus.

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
