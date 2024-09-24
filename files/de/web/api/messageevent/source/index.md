---
title: "MessageEvent: source-Eigenschaft"
short-title: source
slug: Web/API/MessageEvent/source
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`source`** der {{domxref("MessageEvent")}}-Schnittstelle ist ein `MessageEventSource` (das ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}}-Objekt sein kann), das den Nachrichtensender darstellt.

## Wert

ein `MessageEventSource` (das ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}}-Objekt sein kann), das den Nachrichtensender darstellt.

## Beispiele

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.source);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ExtendableMessageEvent")}} — ähnlich wie diese Schnittstelle, wird jedoch in Schnittstellen verwendet, die den Autoren mehr Flexibilität bieten müssen.
