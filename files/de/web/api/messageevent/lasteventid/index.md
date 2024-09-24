---
title: "MessageEvent: lastEventId-Eigenschaft"
short-title: lastEventId
slug: Web/API/MessageEvent/lastEventId
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`lastEventId`** der
{{domxref("MessageEvent")}}-Schnittstelle ist ein String, der eine
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

- {{domxref("ExtendableMessageEvent")}} — ähnlich dieser Schnittstelle, aber verwendet in
  Schnittstellen, die den Autoren mehr Flexibilität bieten müssen.
