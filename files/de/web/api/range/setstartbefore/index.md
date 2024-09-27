---
title: "Range: setStartBefore() Methode"
short-title: setStartBefore()
slug: Web/API/Range/setStartBefore
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setStartBefore()`**-Methode setzt die Startposition
eines [`Range`](/de/docs/Web/API/Range) relativ zu einem anderen [`Node`](/de/docs/Web/API/Node). Der übergeordnete
[`Node`](/de/docs/Web/API/Node) des Starts des [`Range`](/de/docs/Web/API/Range) wird derselbe wie der des
`referenceNode` sein.

## Syntax

```js-nolint
setStartBefore(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), vor dem der [`Range`](/de/docs/Web/API/Range) beginnen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartBefore(referenceNode);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
