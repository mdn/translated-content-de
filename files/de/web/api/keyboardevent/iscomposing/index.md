---
title: "KeyboardEvent: isComposing-Eigenschaft"
short-title: isComposing
slug: Web/API/KeyboardEvent/isComposing
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.isComposing`** gibt einen booleschen Wert zurück, der angibt, ob das Ereignis innerhalb einer Kompositionssitzung ausgelöst wird, d.h. nach {{domxref("Element/compositionstart_event", "compositionstart")}} und vor {{domxref("Element/compositionend_event", "compositionend")}}.

## Wert

Ein Boolescher Wert.

## Beispiele

```js
const kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // return false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element/compositionstart_event", "compositionstart")}} und {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("KeyboardEvent")}}
