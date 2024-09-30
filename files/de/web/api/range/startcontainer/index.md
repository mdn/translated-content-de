---
title: "Range: startContainer-Eigenschaft"
short-title: startContainer
slug: Web/API/Range/startContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Range.startContainer`** gibt den [`Node`](/de/docs/Web/API/Node) zurück, innerhalb dessen der `Range` beginnt. Um die Startposition eines Knotens zu ändern, verwenden Sie eine der Methoden [`Range.setStart()`](/de/docs/Web/API/Range/setStart).

## Wert

Ein [`Node`](/de/docs/Web/API/Node) Objekt.

## Beispiele

```js
range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
startRangeNode = range.startContainer;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
