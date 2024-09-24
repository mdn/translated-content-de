---
title: "Range: setEndAfter()-Methode"
short-title: setEndAfter()
slug: Web/API/Range/setEndAfter
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setEndAfter()`**-Methode setzt die Endposition eines
{{domxref("Range")}} relativ zu einem anderen {{domxref("Node")}}. Der übergeordnete
`Node` des Endes des `Range` wird derselbe sein wie der für den
`referenceNode`.

## Syntax

```js-nolint
setEndAfter(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, nach dem der {{domxref("Range")}} enden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setEndAfter(referenceNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
