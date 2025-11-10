---
title: "KeyboardEvent: isComposing-Eigenschaft"
short-title: isComposing
slug: Web/API/KeyboardEvent/isComposing
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.isComposing`** gibt einen booleschen Wert zurück, der anzeigt, ob das Ereignis innerhalb einer Kompositionssitzung ausgelöst wird, d.h. nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event).

## Wert

Ein boolescher Wert.

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

- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
