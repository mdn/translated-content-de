---
title: "Node: hasChildNodes()-Methode"
short-title: hasChildNodes()
slug: Web/API/Node/hasChildNodes
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`hasChildNodes()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der gegebene [`Node`](/de/docs/Web/API/Node) [Kinderknoten](/de/docs/Web/API/Node/childNodes) hat oder nicht.

## Syntax

```js-nolint
hasChildNodes()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Knoten Kinderknoten hat, und sonst `false`.

## Beispiel

```js
let foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  // Do something with 'foo.childNodes'
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)
