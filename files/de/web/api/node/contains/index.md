---
title: "Node: contains()-Methode"
short-title: contains()
slug: Web/API/Node/contains
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}

Die **`contains()`**-Methode des {{domxref("Node")}}-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob ein Knoten ein Nachfahre eines bestimmten Knotens ist, also der Knoten selbst, eines seiner direkten Kinder ({{domxref("Node.childNodes", "childNodes")}}), eines der direkten Kinder der Kinder und so weiter.

> [!NOTE]
> Ein Knoten ist _in sich selbst enthalten_.

## Syntax

```js-nolint
contains(otherNode)
```

### Parameter

- `otherNode`
  - : Der zu testende {{domxref("Node")}}.
    > **Hinweis:** `otherNode` ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `otherNode` im Knoten enthalten ist, andernfalls `false`.

Wenn der `otherNode`-Parameter `null` ist, gibt `contains()` immer `false` zurück.

## Beispiel

Diese Funktion prüft, ob ein Element im Body der Seite ist. Da `contains` inklusive ist und das Bestimmen, ob der Body sich selbst enthält, nicht die Absicht von `isInPage` ist, gibt dieser Fall ausdrücklich `false` zurück.

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

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
