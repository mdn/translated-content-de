---
title: "MessageEvent: origin-Eigenschaft"
short-title: origin
slug: Web/API/MessageEvent/origin
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`origin`**-Eigenschaft der [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle ist ein String, der den Ursprung des Nachrichtenabsenders darstellt.

## Wert

Ein String, der den Ursprung darstellt.

## Beispiele

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.origin);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu dieser Schnittstelle, aber in Schnittstellen verwendet, die den Autoren mehr Flexibilität geben müssen.
