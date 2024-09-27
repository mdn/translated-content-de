---
title: "Event: cancelBubble-Eigenschaft"
short-title: cancelBubble
slug: Web/API/Event/cancelBubble
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

Die **`cancelBubble`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)
Schnittstelle ist veraltet. Verwenden Sie stattdessen [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation).
Das Setzen ihres Wertes auf `true` vor der Rückkehr von einem Ereignishandler verhindert die Verbreitung
des Ereignisses. In späteren Implementierungen bewirkt das Setzen auf `false` nichts.
Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Wert

Ein boolescher Wert. Der Wert `true` bedeutet, dass das Ereignis nicht weiter verbreitet werden darf.

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
