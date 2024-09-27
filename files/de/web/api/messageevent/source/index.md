---
title: "MessageEvent: source-Eigenschaft"
short-title: source
slug: Web/API/MessageEvent/source
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`source`**-Eigenschaft der [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle ist ein `MessageEventSource` (welches ein [WindowProxy](/de/docs/Glossary/WindowProxy), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), das den Nachrichtenabsender darstellt.

## Wert

Ein `MessageEventSource` (welches ein [WindowProxy](/de/docs/Glossary/WindowProxy), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), das den Nachrichtenabsender darstellt.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich dieser Schnittstelle, wird jedoch in Schnittstellen verwendet, die den Autoren mehr Flexibilität bieten müssen.
