---
title: "Event: cancelBubble Eigenschaft"
short-title: cancelBubble
slug: Web/API/Event/cancelBubble
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

Die **`cancelBubble`** Eigenschaft des {{domxref("Event")}} Interfaces ist veraltet. Verwenden Sie stattdessen {{domxref("Event.stopPropagation()")}}. Wenn der Wert vor der Rückgabe aus einem Ereignishandler auf `true` gesetzt wird, verhindert dies die Weiterleitung des Ereignisses. In späteren Implementierungen hat das Setzen auf `false` keine Auswirkungen. Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

## Wert

Ein boolescher Wert. Der Wert `true` bedeutet, dass das Ereignis nicht weitergeleitet werden darf.

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
