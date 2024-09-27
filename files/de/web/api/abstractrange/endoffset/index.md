---
title: "AbstractRange: endOffset-Eigenschaft"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

Die **`endOffset`**-Eigenschaft des [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Interfaces gibt den Offset im Endknoten der Endposition des Bereichs zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Zeichen im [`Node`](/de/docs/Web/API/Node) angibt, die durch [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) angegeben sind, an dem sich das letzte Zeichen des Bereichs befindet.

## Beispiel

```js
let endOffset = range.endOffset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
