---
title: "NodeIterator: detach() Methode"
short-title: detach()
slug: Web/API/NodeIterator/detach
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}{{deprecated_header}}

Die **`NodeIterator.detach()`** Methode ist ein No-Op, der nur aus Gründen der Rückwärtskompatibilität beibehalten wird.

Ursprünglich trennte sie den [`NodeIterator`](/de/docs/Web/API/NodeIterator) von der Menge, über die er iteriert, setzte alle von der Menge genutzten Ressourcen frei und setzte den Zustand des Iterators auf `INVALID`. Sobald diese Methode aufgerufen worden war, führten Aufrufe anderer Methoden auf `NodeIterator` zur Auslösung der Ausnahme `INVALID_STATE_ERR`.

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

- Das Interface, zu dem es gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
