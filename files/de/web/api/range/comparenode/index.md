---
title: "Range: compareNode()-Methode"
short-title: compareNode()
slug: Web/API/Range/compareNode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_Header}}

Die **`compareNode()`**-Methode des [`Range`](/de/docs/Web/API/Range)-Interfaces gibt eine Konstante zurück, die die Position des [`Node`](/de/docs/Web/API/Node) angibt.

## Syntax

```js-nolint
compareNode(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der mit dem `Range` verglichen wird.

### Rückgabewert

Eine Konstante, die die Position des [`Node`](/de/docs/Web/API/Node) angibt. Die möglichen Werte sind:

- `NODE_BEFORE` (`0`)
  - : Knoten beginnt vor dem Range.
- `NODE_AFTER` (`1`)
  - : Knoten endet nach dem Range.
- `NODE_BEFORE_AND_AFTER` (`2`)
  - : Knoten beginnt vor und endet nach dem Range.
- `NODE_INSIDE` (`3`)
  - : Knoten beginnt nach und endet vor dem Range, d.h. der Knoten ist vollständig durch den Range ausgewählt.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.compareNode(document.getElementsByTagName("p").item(0));
```

## Anmerkungen

Diese Methode ist nicht standardisiert. Die folgende Funktion kann als Ersatz verwendet werden:

```js
function rangeCompareNode(range, node) {
  const nodeRange = node.ownerDocument.createRange();
  try {
    nodeRange.selectNode(node);
  } catch (e) {
    nodeRange.selectNodeContents(node);
  }
  const nodeIsBefore =
    range.compareBoundaryPoints(Range.START_TO_START, nodeRange) === 1;
  const nodeIsAfter =
    range.compareBoundaryPoints(Range.END_TO_END, nodeRange) === -1;

  if (nodeIsBefore && !nodeIsAfter) return 0;
  if (!nodeIsBefore && nodeIsAfter) return 1;
  if (nodeIsBefore && nodeIsAfter) return 2;

  return 3;
}
```

## Spezifikationen

Diese Methode ist nicht standardisiert und daher nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interface-Verzeichnis](/de/docs/Web/API/Document_Object_Model)
