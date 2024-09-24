---
title: "Range: collapsed-Eigenschaft"
short-title: collapsed
slug: Web/API/Range/collapsed
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`Range.collapsed`**-Eigenschaft gibt einen booleschen Wert zurück, der anzeigt, ob die Start- und Endpunkte des {{domxref("Range")}} an der gleichen Position liegen. Sie gibt `true` zurück, wenn die Start- und Endgrenzpunkte des {{domxref("Range")}} derselbe Punkt im DOM sind, andernfalls `false`.

Ein kollabierter {{domxref("Range")}} ist leer (enthält keinen Inhalt) und spezifiziert einen einzigen Punkt in einem DOM-Baum. Um einen Bereich zu kollabieren, siehe die Methode {{domxref("Range.collapse()")}}.

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

- [DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
