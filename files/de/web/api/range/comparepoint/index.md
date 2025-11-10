---
title: "Range: comparePoint() Methode"
short-title: comparePoint()
slug: Web/API/Range/comparePoint
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ApiRef("DOM")}}

Die **`comparePoint()`** Methode der [`Range`](/de/docs/Web/API/Range) Schnittstelle bestimmt, ob ein spezifizierter Punkt vor, innerhalb oder nach dem [`Range`](/de/docs/Web/API/Range) liegt. Der Punkt wird durch einen Referenzknoten und einen Offset innerhalb dieses Knotens spezifiziert.

## Syntax

```js-nolint
comparePoint(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), zu dem der `offset` relativ ist.
- `offset`
  - : Eine natürliche Zahl größer oder gleich null, die die Position innerhalb von `referenceNode` des zu überprüfenden Punktes beschreibt. Wenn `referenceNode` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist `offset` die Anzahl der Zeichen vom Anfang von `referenceNode`. Für andere [`Node`](/de/docs/Web/API/Node) Typen ist `offset` die Anzahl der Kindknoten vom Anfang des `referenceNode`.

### Rückgabewert

Eine Zahl.

- `-1`, wenn der durch den `referenceNode` und `offset` spezifizierte Punkt vor dem Beginn dieses `Range` liegt.
- `0`, wenn der durch den `referenceNode` und `offset` spezifizierte Punkt innerhalb dieses `Range` liegt (einschließlich der Start- und Endpunkte des Bereichs).
- `1`, wenn der durch den `referenceNode` und `offset` spezifizierte Punkt nach dem Ende dieses `Range` liegt.

## Beispiele

```js
const text = new Text("0123456789");

const thisRange = new Range();
thisRange.setStart(text, 1);
thisRange.setEnd(text, 6);

thisRange.comparePoint(text, 3); // 0
thisRange.comparePoint(text, 0); // -1
thisRange.comparePoint(text, 6); // 0
thisRange.comparePoint(text, 7); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
