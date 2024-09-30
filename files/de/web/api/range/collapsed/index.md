---
title: "Range: collapsed-Eigenschaft"
short-title: collapsed
slug: Web/API/Range/collapsed
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Range.collapsed`** gibt ein boolesches Flag zurück, das angibt, ob die Start- und Endpunkte des [`Range`](/de/docs/Web/API/Range) an derselben Position liegen. Sie gibt `true` zurück, wenn die Start- und Endgrenzpunkte des [`Range`](/de/docs/Web/API/Range) denselben Punkt im DOM darstellen, `false` andernfalls.

Ein zusammengeklappter [`Range`](/de/docs/Web/API/Range) ist leer (enthält keinen Inhalt) und gibt einen einzelnen Punkt in einem DOM-Baum an. Um einen Bereich zu kollabieren, beachten Sie die Methode [`Range.collapse()`](/de/docs/Web/API/Range/collapse).

## Wert

Ein boolescher Wert.

## Beispiele

```js
let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
isCollapsed = range.collapsed;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
