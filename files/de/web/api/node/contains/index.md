---
title: "Node: contains() Methode"
short-title: contains()
slug: Web/API/Node/contains
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}

Die **`contains()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob ein Knoten ein Nachfahre eines gegebenen Knotens ist, also der Knoten selbst, einer seiner direkten Kinder ([`childNodes`](/de/docs/Web/API/Node/childNodes)), eines der direkten Kinder dieser Kinder und so weiter.

> [!NOTE]
> Ein Knoten ist _in sich selbst enthalten_.

## Syntax

```js-nolint
contains(otherNode)
```

### Parameter

- `otherNode`
  - : Der zu testende [`Node`](/de/docs/Web/API/Node).
    > **Hinweis:** `otherNode` ist nicht optional, kann jedoch auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `otherNode` in dem Knoten enthalten ist, `false` wenn nicht.

Wenn der Parameter `otherNode` `null` ist, gibt `contains()` immer `false` zurück.

## Beispiel

Diese Funktion prüft, ob ein Element im Body der Seite ist. Da `contains` inklusiv ist und feststellen soll, ob der Body sich selbst enthält, was nicht im Sinne von `isInPage` ist, gibt dieser Fall explizit `false` zurück.

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
