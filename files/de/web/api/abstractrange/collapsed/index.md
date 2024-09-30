---
title: "AbstractRange: collapsed-Eigenschaft"
short-title: collapsed
slug: Web/API/AbstractRange/collapsed
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

Die schreibgeschützte **`collapsed`**-Eigenschaft des [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Interfaces gibt `true` zurück, wenn die Startposition und die Endposition des Bereichs identisch sind.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Bereich _zusammengefallen_ ist. Ein zusammengefallener Bereich ist einer, bei dem Start- und Endposition identisch sind, was zu einem Bereich mit null Zeichen führt.

## Beispiel

```js
let isCollapsed = range.collapsed;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
