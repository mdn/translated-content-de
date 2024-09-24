---
title: "NodeIterator: detach()-Methode"
short-title: detach()
slug: Web/API/NodeIterator/detach
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}{{deprecated_header}}

Die **`NodeIterator.detach()`**-Methode ist eine No-Op, die nur aus Gründen der Abwärtskompatibilität erhalten geblieben ist.

Ursprünglich trennte sie den {{domxref("NodeIterator")}} von der Menge, über die er iteriert, und gab dabei alle von der Menge genutzten Ressourcen frei und setzte den Zustand des Iterators auf `INVALID`. Sobald diese Methode aufgerufen wurde, führten Aufrufe anderer Methoden auf `NodeIterator` zu einer `INVALID_STATE_ERR`-Ausnahme.

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
nodeIterator.detach(); // trennt den Iterator

nodeIterator.nextNode(); // wirft eine INVALID_STATE_ERR-Ausnahme
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, zu dem es gehört: {{domxref("NodeIterator")}}.
