---
title: "Node: hasChildNodes() Methode"
short-title: hasChildNodes()
slug: Web/API/Node/hasChildNodes
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`hasChildNodes()`** Methode des {{domxref("Node")}} Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob der gegebene {{domxref("Node")}} [Kindknoten](/de/docs/Web/API/Node/childNodes) hat oder nicht.

## Syntax

```js-nolint
hasChildNodes()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Knoten Kindknoten hat, andernfalls `false`.

## Beispiel

```js
let foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  // Machen Sie etwas mit 'foo.childNodes'
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.childNodes")}}
