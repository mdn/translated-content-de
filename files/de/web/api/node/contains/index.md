---
title: "Node: contains() Methode"
short-title: contains()
slug: Web/API/Node/contains
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`contains()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle
gibt einen booleschen Wert zurück, der angibt,
ob ein Knoten ein Nachfahre eines bestimmten Knotens ist, also der Knoten selbst,
einer seiner direkten Kinder ([`childNodes`](/de/docs/Web/API/Node/childNodes)),
eines der direkten Kinder der Kinder, und so weiter.

> [!NOTE]
> Ein Knoten ist _in_ sich selbst enthalten.

## Syntax

```js-nolint
contains(otherNode)
```

### Parameter

- `otherNode`
  - : Der zu testende [`Node`](/de/docs/Web/API/Node).
    > [!NOTE] > `otherNode` ist nicht optional, kann jedoch auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `otherNode` im Knoten enthalten ist,
und `false`, wenn nicht.

Wenn der `otherNode` Parameter `null` ist,
gibt `contains()` immer `false` zurück.

## Beispiel

Diese Funktion überprüft, ob ein Element im Body der Seite ist. Da
`contains` inklusive ist und die Überprüfung, ob der Body sich selbst enthält,
nicht die Absicht von `isInPage` ist, wird dieser Fall ausdrücklich `false`
zurückgegeben.

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.compareDocumentPosition`](/de/docs/Web/API/Node/compareDocumentPosition)
- [`Node.hasChildNodes`](/de/docs/Web/API/Node/hasChildNodes)
