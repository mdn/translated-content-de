---
title: "MessageEvent: ports-Eigenschaft"
short-title: ports
slug: Web/API/MessageEvent/ports
l10n:
  sourceCommit: ec8d6cfcaae740f7dfad264b797eebe448085a2b
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`ports`**-Eigenschaft des [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten enthält. Diese beinhalten alle mit der Nachricht gesendeten [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte in der entsprechenden Reihenfolge.

## Wert

Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten.

## Beispiele

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu diesem Interface, jedoch verwendet in Schnittstellen, die den Autoren mehr Flexibilität bieten müssen.
