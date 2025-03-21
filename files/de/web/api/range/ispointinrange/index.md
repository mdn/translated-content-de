---
title: "Range: isPointInRange() Methode"
short-title: isPointInRange()
slug: Web/API/Range/isPointInRange
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ApiRef("DOM")}}

Die **`isPointInRange()`** Methode der [`Range`](/de/docs/Web/API/Range) Schnittstelle bestimmt, ob ein bestimmter Punkt innerhalb des [`Range`](/de/docs/Web/API/Range) liegt. Der Punkt wird durch einen Referenzknoten und einen Offset innerhalb dieses Knotens festgelegt. Es entspricht dem Aufrufen von [`Range.comparePoint()`](/de/docs/Web/API/Range/comparePoint) und dem Überprüfen, ob das Ergebnis `0` ist.

## Syntax

```js-nolint
isPointInRange(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), zu dem sich der `offset` relativ verhält.
- `offset`
  - : Eine ganze Zahl größer oder gleich null, die die Position des zu prüfenden Punktes innerhalb von `referenceNode` beschreibt. Wenn `referenceNode` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist `offset` die Anzahl der Zeichen vom Beginn des `referenceNode`. Bei anderen [`Node`](/de/docs/Web/API/Node) Typen ist `offset` die Anzahl der Kindknoten vom Beginn des `referenceNode`.

### Rückgabewert

Ein boolean.

## Beispiele

```js
const text = new Text("0123456789");

const thisRange = new Range();
thisRange.setStart(text, 1);
thisRange.setEnd(text, 6);

thisRange.isPointInRange(text, 3); // true
thisRange.isPointInRange(text, 0); // false
thisRange.isPointInRange(text, 6); // true
thisRange.isPointInRange(text, 7); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
