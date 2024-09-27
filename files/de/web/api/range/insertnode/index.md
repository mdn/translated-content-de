---
title: "Range: insertNode()-Methode"
short-title: insertNode()
slug: Web/API/Range/insertNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.insertNode()`**-Methode fügt einen Knoten am Anfang
des [`Range`](/de/docs/Web/API/Range) ein.

Der neue Knoten wird am Startpunkt des `Range` eingefügt. Wenn der
neue Knoten zu einem Text-`Node` hinzugefügt werden soll, wird dieser `Node` an der Einfügestelle geteilt,
und die Einfügung erfolgt zwischen den beiden Textknoten.

Wenn der neue Knoten ein Dokumentfragment ist, werden stattdessen die Kinder des Dokumentfragments eingefügt.

## Syntax

```js-nolint
insertNode(newNode)
```

### Parameter

- `newNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der am Anfang des `range` eingefügt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
range = document.createRange();
newNode = document.createElement("p");
newNode.appendChild(document.createTextNode("New Node Inserted Here"));
range.selectNode(document.getElementsByTagName("div").item(0));
range.insertNode(newNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
