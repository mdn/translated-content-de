---
title: "Range: Methode selectNode()"
short-title: selectNode()
slug: Web/API/Range/selectNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.selectNode()`**-Methode setzt den
{{domxref("Range")}} so, dass er den {{domxref("Node")}} und dessen Inhalt enthält. Der Eltern-{{domxref("Node")}} des Anfangs und Endes des {{domxref("Range")}} wird derselbe sein wie der Elternteil des _referenceNode_.

## Syntax

```js-nolint
selectNode(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, der innerhalb eines {{domxref("Range")}} ausgewählt werden soll.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
