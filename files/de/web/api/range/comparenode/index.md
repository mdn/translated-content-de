---
title: "Range: compareNode()-Methode"
short-title: compareNode()
slug: Web/API/Range/compareNode
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_Header}}

Die **`Range.compareNode()`**-Methode gibt eine Konstante zurück, die die Position des [`Node`](/de/docs/Web/API/Node) angibt.

Die möglichen Werte sind:

- `NODE_BEFORE` (`0`)
  - : Der Knoten beginnt vor dem `Range`.
- `NODE_AFTER` (`1`)
  - : Der Knoten endet nach dem `Range`.
- `NODE_BEFORE_AND_AFTER` (`2`)
  - : Der Knoten beginnt vor und endet nach dem `Range`.
- `NODE_INSIDE` (`3`)
  - : Der Knoten beginnt nach und endet vor dem `Range`, d. h. der Knoten wird vollständig durch das `Range` ausgewählt.

> [!WARNING]
> Diese Methode [wurde entfernt](/de/docs/Mozilla/Firefox/Releases/3/Site_compatibility) aus [Gecko 1.9](/de/docs/Mozilla/Firefox/Releases/3) und wird in zukünftigen Versionen von Firefox, dem einzigen Browser, der sie implementierte, nicht mehr existieren; Sie sollten so bald wie möglich auf [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) umsteigen.

Die folgende Funktion kann als Ersatz verwendet werden:

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

## Syntax

```js-nolint
compareNode(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der mit dem `Range` verglichen wird.

### Rückgabewert

Eine Konstante, die die Position des [`Node`](/de/docs/Web/API/Node) angibt.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.compareNode(document.getElementsByTagName("p").item(0));
```

## Anmerkungen

Diese Methode ist veraltet; Sie sollten die W3C DOM-Methode
[`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints) verwenden.

## Spezifikationen

Diese Methode ist nicht standardisiert und daher nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
