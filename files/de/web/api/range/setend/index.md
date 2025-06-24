---
title: "Range: setEnd() Methode"
short-title: setEnd()
slug: Web/API/Range/setEnd
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ApiRef("DOM")}}

Die **`Range.setEnd()`** Methode setzt die Endposition eines [`Range`](/de/docs/Web/API/Range) an den angegebenen Offset innerhalb des spezifizierten Knotens. Das Setzen des Endpunkts oberhalb (weiter oben im Dokument) als der Startpunkt führt zu einem zusammengeklappten Bereich, bei dem Start- und Endpunkt beide auf die angegebene Endposition gesetzt werden.

## Syntax

```js-nolint
setEnd(endNode, endOffset)
```

### Parameter

- `endNode`
  - : Der [`Node`](/de/docs/Web/API/Node) innerhalb dessen der [`Range`](/de/docs/Web/API/Range) enden soll.
- `endOffset`
  - : Eine Ganzzahl, die größer oder gleich null ist und den Offset für das Ende des `Range` vom Anfang von `endNode` darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der durch `endNode` angegebene Knoten ist ein Doctype-Knoten; Bereichsendpunkte können nicht innerhalb eines Doctype-Knotens festgelegt werden.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der durch `endOffset` angegebene Wert ist entweder größer oder gleich der Länge des Knotens oder kleiner als null.

## Verwendungshinweise

Wenn der `endNode` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text),
[`Comment`](/de/docs/Web/API/Comment) oder [`CDataSection`](/de/docs/Web/API/CDATASection) ist, dann ist `endOffset`
die Anzahl der Zeichen vom Anfang des `endNode`. Für andere
[`Node`](/de/docs/Web/API/Node) Typen ist `endOffset` die Anzahl der Kindknoten zwischen
dem Anfang des `endNode`.

## Beispiele

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

> [!NOTE] > `setEnd()` wird häufig in Verbindung mit
> [`setStart()`](/de/docs/Web/API/Range/setStart) verwendet, um einen Bereich vollständig zu konfigurieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
