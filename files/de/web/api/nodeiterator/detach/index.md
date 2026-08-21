---
title: "NodeIterator: detach() Methode"
short-title: detach()
slug: Web/API/NodeIterator/detach
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die **`NodeIterator.detach()`**-Methode ist eine No-op, die nur aus Gründen der Rückwärtskompatibilität beibehalten wurde.

Ursprünglich trennte sie den [`NodeIterator`](/de/docs/Web/API/NodeIterator) von der Menge, über die er iteriert, und gab dabei alle von der Menge verwendeten Ressourcen frei, indem sie den Zustand des Iterators auf `INVALID` setzte. Sobald diese Methode aufgerufen worden war, führten Aufrufe anderer Methoden auf `NodeIterator` zu der Ausnahme `INVALID_STATE_ERR`.

## Syntax

```js-nolint
detach()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
nodeIterator.detach(); // detaches the iterator

nodeIterator.nextNode(); // throws an INVALID_STATE_ERR exception
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, zu der sie gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
