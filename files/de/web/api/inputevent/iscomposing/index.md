---
title: "InputEvent: isComposing-Eigenschaft"
short-title: isComposing
slug: Web/API/InputEvent/isComposing
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`InputEvent.isComposing`** gibt einen booleschen Wert zurück, der angibt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wurde.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputEvent = new InputEvent("syntheticInput", false);
console.log(inputEvent.isComposing); // return false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
- [`InputEvent`](/de/docs/Web/API/InputEvent)
