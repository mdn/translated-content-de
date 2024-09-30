---
title: "Range: Methode setEnd()"
short-title: setEnd()
slug: Web/API/Range/setEnd
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.setEnd()`**-Methode setzt die Endposition eines [`Range`](/de/docs/Web/API/Range) auf die angegebene Verschiebung in den spezifizierten Knoten. Wenn der Endpunkt höher (weiter oben im Dokument) als der Startpunkt gesetzt wird, führt dies zu einem zusammengeklappten Bereich, bei dem die Start- und Endpunkte beide auf die angegebene Endposition gesetzt werden.

## Syntax

```js-nolint
setEnd(endNode, endOffset)
```

### Parameter

- `endNode`
  - : Der [`Node`](/de/docs/Web/API/Node), in dem der [`Range`](/de/docs/Web/API/Range) enden soll.
- `endOffset`
  - : Eine ganze Zahl, die größer als oder gleich null ist und den Versatz für das Ende des `Range` vom Start des `endNode` darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der durch `endNode` angegebene Knoten ist ein Doctype-Knoten; Bereichs-Endpunkte können nicht innerhalb eines Doctype-Knotens liegen.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der durch `endOffset` angegebene Wert ist entweder größer als oder gleich der Länge des Knotens oder kleiner als null.

## Gebrauchshinweise

Wenn das `endNode` ein [`Node`](/de/docs/Web/API/Node) des Typs [`Text`](/de/docs/Web/API/Text),
[`Comment`](/de/docs/Web/API/Comment) oder [`CDataSection`](/de/docs/Web/API/CDataSection) ist, dann ist `endOffset`
die Anzahl der Zeichen vom Start von `endNode`. Für andere
[`Node`](/de/docs/Web/API/Node)-Typen ist `endOffset` die Anzahl der Kindknoten zwischen
dem Start des `endNode`.

## Beispiele

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

> **Note:** `setEnd()` wird häufig in Verbindung mit
> [`setStart()`](/de/docs/Web/API/Range/setStart) verwendet, um einen Bereich vollständig zu konfigurieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
