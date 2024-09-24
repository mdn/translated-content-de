---
title: "HashChangeEvent: newURL-Eigenschaft"
short-title: newURL
slug: Web/API/HashChangeEvent/newURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

Die **`newURL`** schreibgeschützte Eigenschaft der
{{domxref("HashChangeEvent")}}-Schnittstelle gibt die neue URL zurück, zu der das Fenster navigiert.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("hashchange", (event) => {
  console.log(`Hash geändert zu ${event.newURL}`);
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
