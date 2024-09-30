---
title: "Range: setStartAfter()-Methode"
short-title: setStartAfter()
slug: Web/API/Range/setStartAfter
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.setStartAfter()`**-Methode legt die Startposition eines [`Range`](/de/docs/Web/API/Range) relativ zu einem [`Node`](/de/docs/Web/API/Node) fest. Der übergeordnete [`Node`](/de/docs/Web/API/Node) des Anfangs des [`Range`](/de/docs/Web/API/Range) ist derselbe wie der des `referenceNode`.

## Syntax

```js-nolint
setStartAfter(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), nach dem der [`Range`](/de/docs/Web/API/Range) beginnt.

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

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
