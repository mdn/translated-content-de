---
title: "Window: fullScreen-Eigenschaft"
short-title: fullScreen
slug: Web/API/Window/fullScreen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

Die **`fullScreen`**-Eigenschaft des `Window`-Interfaces zeigt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.

## Wert

Ein boolescher Wert, wobei `true` bedeutet, dass das Fenster im Vollbildmodus ist, und `false`, dass es nicht der Fall ist.

## Hinweise

- Der Wechsel zwischen normalem Fenster und Vollbild löst das "resize"-Ereignis im entsprechenden Fenster aus.

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
