---
title: "InputEvent: isComposing-Eigenschaft"
short-title: isComposing
slug: Web/API/InputEvent/isComposing
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`InputEvent.isComposing`** gibt einen booleschen Wert zurück, der anzeigt, ob das Ereignis nach {{domxref("Element/compositionstart_event", "compositionstart")}} und vor {{domxref("Element/compositionend_event", "compositionend")}} ausgelöst wird.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputEvent = new InputEvent("syntheticInput", false);
console.log(inputEvent.isComposing); // gibt false zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element/compositionstart_event", "compositionstart")}} und {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("InputEvent")}}
