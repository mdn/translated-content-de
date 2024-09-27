---
title: "MessageEvent: Ports-Eigenschaft"
short-title: ports
slug: Web/API/MessageEvent/ports
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die **`ports`** schreibgeschützte Eigenschaft des [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces ist ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports repräsentieren, die mit dem Kanal assoziiert sind, durch den die Nachricht gesendet wird (wo zutreffend, z.B. in der Kanalnachrichtenübertragung oder beim Senden einer Nachricht an einen Shared Worker).

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich diesem Interface, aber in Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
