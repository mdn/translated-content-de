---
title: "Range: comparePoint()-Methode"
short-title: comparePoint()
slug: Web/API/Range/comparePoint
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.comparePoint()`**-Methode gibt `-1`, `0` oder `1` zurück, je nachdem, ob der `referenceNode` vor, gleich oder nach dem [`Range`](/de/docs/Web/API/Range) liegt.

Wenn der _reference node_ ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist der Offset die Anzahl der Zeichen vom Start des _reference node_. Für andere [`Node`](/de/docs/Web/API/Node)-Typen ist der Offset die Anzahl der Kindknoten vom Start des _reference node_.

## Syntax

```js-nolint
comparePoint(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der mit dem [`Range`](/de/docs/Web/API/Range) verglichen wird.
- `offset`
  - : Eine ganze Zahl, die größer oder gleich null ist und den Offset innerhalb des _referenceNode_ repräsentiert.

### Rückgabewert

Gibt `-1`, `0` oder `1` zurück.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.comparePoint(document.getElementsByTagName("p").item(0), 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
