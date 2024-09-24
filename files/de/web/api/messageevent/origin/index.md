---
title: "MessageEvent: origin-Eigenschaft"
short-title: origin
slug: Web/API/MessageEvent/origin
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die **`origin`**-Eigenschaft (nur lesbar) der
{{domxref("MessageEvent")}}-Schnittstelle ist ein String, der den Ursprung des Nachrichtenabsenders darstellt.

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

- {{domxref("ExtendableMessageEvent")}} — ähnlich zu dieser Schnittstelle, jedoch in Schnittstellen verwendet, die den Autoren mehr Flexibilität bieten müssen.
