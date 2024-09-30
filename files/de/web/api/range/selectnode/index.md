---
title: "Range: Methode selectNode()"
short-title: selectNode()
slug: Web/API/Range/selectNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die Methode **`Range.selectNode()`** setzt den [`Range`](/de/docs/Web/API/Range), um den [`Node`](/de/docs/Web/API/Node) und dessen Inhalt zu enthalten. Der übergeordnete [`Node`](/de/docs/Web/API/Node) des Anfangs und Endes des [`Range`](/de/docs/Web/API/Range) wird derselbe sein wie der übergeordnete Knoten des _referenceNode_.

## Syntax

```js-nolint
selectNode(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der innerhalb eines [`Range`](/de/docs/Web/API/Range) auszuwählende [`Node`](/de/docs/Web/API/Node).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let range = document.createRange();
let referenceNode = document.getElementsByTagName("div").item(0);

range.selectNode(referenceNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
