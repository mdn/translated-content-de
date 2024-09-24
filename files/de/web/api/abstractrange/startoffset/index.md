---
title: "AbstractRange: Eigenschaft startOffset"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

Die schreibgeschützte **`startOffset`**-Eigenschaft des {{domxref("AbstractRange")}} Interfaces gibt den Offset im Startknoten der Startposition des Bereichs zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Zeichen im {{domxref("Node")}}, angegeben durch {{domxref("AbstractRange.startContainer", "startContainer")}}, angibt, an der sich das erste Zeichen des Bereichs befindet.

## Beispiel

```js
let startOffset = range.startOffset;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
