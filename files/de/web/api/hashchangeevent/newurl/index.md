---
title: "HashChangeEvent: newURL-Eigenschaft"
short-title: newURL
slug: Web/API/HashChangeEvent/newURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

Die **`newURL`**-Eigenschaft des [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)-Interfaces ist eine schreibgeschützte Eigenschaft, die die neue URL zurückgibt, zu der das Fenster navigiert.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("hashchange", (event) => {
  console.log(`Hash changed to ${event.newURL}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
