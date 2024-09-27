---
title: "Range: collapsed-Eigenschaft"
short-title: collapsed
slug: Web/API/Range/collapsed
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

Die **`Range.collapsed`** schreibgeschützte Eigenschaft gibt einen booleschen Wert zurück, der anzeigt, ob die Anfangs- und Endpunkte des [`Range`](/de/docs/Web/API/Range) an derselben Position liegen. Sie gibt `true` zurück, wenn die Anfangs- und Endgrenzpunkte des [`Range`](/de/docs/Web/API/Range) derselbe Punkt im DOM sind, andernfalls `false`.

Ein zusammengefallener [`Range`](/de/docs/Web/API/Range) ist leer (beinhaltet keinen Inhalt) und spezifiziert einen einzigen Punkt in einem DOM-Baum. Um einen Bereich zu verkleinern, siehe die Methode [`Range.collapse()`](/de/docs/Web/API/Range/collapse).

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

- [Das DOM-Interfaces-Verzeichnis](/de/docs/Web/API/Document_Object_Model)
