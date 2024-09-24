---
title: "AbstractRange: endOffset-Eigenschaft"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

Die **`endOffset`**-Eigenschaft des {{domxref("AbstractRange")}}-Interfaces gibt den Versatz in das Endknoten des Bereichs für die Endposition zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Zeichen im {{domxref("Node")}} angibt, die durch {{domxref("AbstractRange.endContainer", "endContainer")}} angezeigt werden und bei dem sich das letzte Zeichen des Bereichs befindet.

## Beispiel

```js
let endOffset = range.endOffset;
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
