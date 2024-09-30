---
title: "HashChangeEvent: oldURL-Eigenschaft"
short-title: oldURL
slug: Web/API/HashChangeEvent/oldURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

Die **`oldURL`**-Eigenschaft des [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)-Interfaces gibt die vorherige URL zurück, von der das Fenster navigiert wurde.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("hashchange", (event) => {
  console.log(`Hash changed from ${event.oldURL}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
