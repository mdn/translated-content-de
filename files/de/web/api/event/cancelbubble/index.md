---
title: "Event: Eigenschaft cancelBubble"
short-title: cancelBubble
slug: Web/API/Event/cancelBubble
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

Die **`cancelBubble`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces ist veraltet. Verwenden Sie stattdessen [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation). Indem ihr Wert vor der Rückkehr von einem Ereignishandler auf `true` gesetzt wird, wird die Weiterverbreitung des Ereignisses verhindert. In späteren Implementierungen bewirkt das Setzen auf `false` nichts. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Wert

Ein boolescher Wert. Der Wert `true` bedeutet, dass das Ereignis nicht weiterverbreitet werden darf.

## Beispiel

```js
elem.onclick = (event) => {
  // Do cool things here
  event.cancelBubble = true;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
