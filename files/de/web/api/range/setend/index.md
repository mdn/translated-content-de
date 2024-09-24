---
title: "Range: setEnd()-Methode"
short-title: setEnd()
slug: Web/API/Range/setEnd
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.setEnd()`**-Methode legt die Endposition eines {{domxref("Range")}} an einem angegebenen Offset innerhalb des angegebenen Knotens fest. Wenn der Endpunkt höher (früher im Dokument) als der Startpunkt liegt, ergibt sich ein kollapierter Bereich, bei dem sowohl Start- als auch Endpunkt auf die angegebene Endposition gesetzt werden.

## Syntax

```js-nolint
setEnd(endNode, endOffset)
```

### Parameter

- `endNode`
  - : Der {{ domxref("Node") }}, innerhalb dessen das {{ domxref("Range") }} enden soll.
- `endOffset`
  - : Eine ganze Zahl, größer oder gleich null, die den Offset für das Ende des `Range` vom Anfang des `endNode` darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : Der durch `endNode` angegebene Knoten ist ein Doctype-Knoten; Bereichs-Endpunkte können nicht innerhalb eines Doctype-Knotens positioniert werden.
- `IndexSizeError` {{domxref("DOMException")}}
  - : Der durch `endOffset` angegebene Wert ist entweder größer oder gleich der Länge des Knotens oder kleiner als null.

## Nutzungshinweise

Wenn der `endNode` ein {{domxref("Node")}} vom Typ {{domxref("Text")}},
{{domxref("Comment")}} oder {{domxref("CDataSection")}} ist, dann ist `endOffset` die Anzahl der Zeichen vom Anfang des `endNode`. Für andere
{{domxref("Node")}}-Typen ist `endOffset` die Anzahl der Kindknoten vom
Anfang des `endNode`.

## Beispiele

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

> **Note:** `setEnd()` wird häufig in Verbindung mit
> {{domxref("Range.setStart", "setStart()")}} verwendet, um einen Bereich vollständig zu konfigurieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
