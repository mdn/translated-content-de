---
title: "Range: setEnd() Methode"
short-title: setEnd()
slug: Web/API/Range/setEnd
l10n:
  sourceCommit: 374c8b9dd641d78aac11347d22e84f72420d8b16
---

{{ApiRef("DOM")}}

Die **`Range.setEnd()`**-Methode legt die Endposition eines [`Range`](/de/docs/Web/API/Range) an dem angegebenen Offset im angegebenen Knoten fest. Wenn der Endpunkt oberhalb (weiter oben im Dokument) als der Startpunkt gesetzt wird, resultiert dies in einem kollabierten Bereich, bei dem Start- und Endpunkte beide auf die angegebene Endposition gesetzt sind.

## Syntax

```js-nolint
setEnd(endNode, endOffset)
```

### Parameter

- `endNode`
  - : Der [`Node`](/de/docs/Web/API/Node), in dem der [`Range`](/de/docs/Web/API/Range) enden soll.
- `endOffset`
  - : Eine Ganzzahl größer oder gleich Null, die den Offset für das Ende des `Range` vom Anfang des `endNode` darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der durch `endNode` angegebene Knoten ist ein Doctype-Knoten; Bereichs-Endpunkte können nicht in einem Doctype-Knoten positioniert werden.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der durch `endOffset` angegebene Wert ist entweder größer oder gleich der Länge des Knotens oder kleiner als null.

## Nutzungshinweise

Wenn `endNode` ein [`Node`](/de/docs/Web/API/Node) des Typs [`Text`](/de/docs/Web/API/Text),
[`Comment`](/de/docs/Web/API/Comment) oder [`CDataSection`](/de/docs/Web/API/CDATASection) ist, dann ist `endOffset`
die Anzahl der Zeichen vom Anfang des `endNode`. Für andere
[`Node`](/de/docs/Web/API/Node)-Typen ist `endOffset` die Anzahl der Knoten zwischen
dem Anfang des `endNode`.

## Beispiele

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

> **Hinweis:** `setEnd()` wird häufig in Verbindung mit
> [`setStart()`](/de/docs/Web/API/Range/setStart) verwendet, um einen Bereich vollständig zu konfigurieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
