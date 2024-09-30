---
title: "Range: setEndBefore()-Methode"
short-title: setEndBefore()
slug: Web/API/Range/setEndBefore
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setEndBefore()`**-Methode setzt die Endposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node). Der übergeordnete `Node` des Endes des `Range` wird derselbe wie der für den `referenceNode`.

## Syntax

```js-nolint
setEndBefore(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), vor dem das `Range` enden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setEndBefore(referenceNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
