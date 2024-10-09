---
title: "MessageEvent: lastEventId-Eigenschaft"
short-title: lastEventId
slug: Web/API/MessageEvent/lastEventId
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lastEventId`** des
[`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces ist ein String, der eine
eindeutige ID für das Ereignis darstellt.

## Wert

Ein String, der die ID darstellt.

## Beispiele

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.lastEventId);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich diesem Interface, wird jedoch in
  Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
