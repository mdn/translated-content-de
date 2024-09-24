---
title: "Range: comparePoint() Methode"
short-title: comparePoint()
slug: Web/API/Range/comparePoint
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.comparePoint()`** Methode gibt `-1`, `0` oder `1` zurück, je nachdem, ob der `referenceNode` vor, gleich oder nach dem {{domxref("Range")}} liegt.

Wenn der _Referenzknoten_ ein {{domxref("Node")}} vom Typ {{domxref("Text")}}, {{domxref("Comment")}} oder {{domxref("CDATASection")}} ist, dann ist der Offset die Anzahl der Zeichen vom Anfang des _Referenzknotens_. Für andere {{domxref("Node")}}-Typen ist der Offset die Anzahl der Kindknoten vom Beginn des _Referenzknotens_.

## Syntax

```js-nolint
comparePoint(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, der mit dem {{domxref("Range")}} verglichen wird.
- `offset`
  - : Eine ganze Zahl größer oder gleich null, die den Offset innerhalb des _referenceNode_ darstellt.

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

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
