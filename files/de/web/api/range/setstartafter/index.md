---
title: "Range: Methode setStartAfter()"
short-title: setStartAfter()
slug: Web/API/Range/setStartAfter
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setStartAfter()`**-Methode legt die Startposition eines {{domxref("Range")}} relativ zu einem {{domxref("Node")}} fest. Der Eltern-{{domxref("Node")}} des Anfangs des {{domxref("Range")}} wird derselbe sein wie der des `referenceNode`.

## Syntax

```js-nolint
setStartAfter(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, nach dem der {{domxref("Range")}} beginnen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartAfter(referenceNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
