---
title: "MessageEvent: ports-Eigenschaft"
short-title: ports
slug: Web/API/MessageEvent/ports
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`ports`**-Eigenschaft der schreibgeschützten [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle ist ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (sofern zutreffend, z.B. bei der Kanalkommunikation oder beim Senden einer Nachricht an einen Shared Worker).

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich dieser Schnittstelle, wird jedoch in Schnittstellen verwendet, die den Autoren mehr Flexibilität geben müssen.
