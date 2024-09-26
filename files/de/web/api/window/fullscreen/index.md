---
title: "Fenster: fullScreen-Eigenschaft"
short-title: fullScreen
slug: Web/API/Window/fullScreen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

Die **`fullScreen`**-Eigenschaft des `Window`-Interfaces gibt an, ob das Fenster im Vollbildmodus angezeigt wird oder nicht.

## Wert

Ein boolescher Wert, bei dem `true` bedeutet, dass das Fenster im Vollbildmodus ist, und `false`, dass es nicht im Vollbildmodus ist.

## Hinweise

- Das Wechseln zwischen einem normalen Fenster und Vollbild löst das "resize"-Ereignis auf dem entsprechenden Fenster aus.

## Beispiele

```js
if (window.fullScreen) {
  // it's fullscreen!
} else {
  // not fullscreen!
}
```

## Kompatibilität der Browser

{{Compat}}