---
title: "Event: Eigenschaft cancelBubble"
short-title: cancelBubble
slug: Web/API/Event/cancelBubble
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`cancelBubble`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces ist veraltet. Verwenden Sie stattdessen [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation). Wenn der Wert vor der Rückkehr aus einem Ereignis-Handler auf `true` gesetzt wird, wird die Weiterleitung des Ereignisses verhindert. In späteren Implementierungen hat das Setzen auf `false` keine Wirkung. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Wert

Ein boolescher Wert. Der Wert `true` bedeutet, dass das Ereignis nicht weiter propagiert werden darf.

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
