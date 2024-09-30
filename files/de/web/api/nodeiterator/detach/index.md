---
title: "NodeIterator: detach()-Methode"
short-title: detach()
slug: Web/API/NodeIterator/detach
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}{{deprecated_header}}

Die Methode **`NodeIterator.detach()`** ist eine Nicht-Operation, die nur aus Gründen der Rückwärtskompatibilität erhalten bleibt.

Ursprünglich hat sie den [`NodeIterator`](/de/docs/Web/API/NodeIterator) von der Menge getrennt, über die er iteriert, indem sie alle von der Menge genutzten Ressourcen freigegeben und den Zustand des Iterators auf `INVALID` gesetzt hat. Nachdem diese Methode aufgerufen wurde, hätten Aufrufe anderer Methoden auf `NodeIterator` die Ausnahme `INVALID_STATE_ERR` ausgelöst.

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

- Das zugehörige Interface: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
