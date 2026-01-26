---
title: "AbstractRange: collapsed-Eigenschaft"
short-title: collapsed
slug: Web/API/AbstractRange/collapsed
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die schreibgeschützte **`collapsed`**-Eigenschaft des [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Interfaces gibt `true` zurück, wenn die Startposition und Endposition des Bereichs gleich sind.

Ein zusammengeklappter Bereich ist leer (enthält keinen Inhalt) und spezifiziert einen einzelnen Punkt in einem DOM-Baum. Um einen Bereich zu kollabieren, siehe die [`Range.collapse()`](/de/docs/Web/API/Range/collapse)-Methode.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Bereich _kollabiert_ ist. Ein kollabierter Bereich ist einer, bei dem die Start- und Endpositionen identisch sind, was in einem Bereich von null Zeichen Länge resultiert.

## Beispiel

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const isCollapsed = range.collapsed;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
