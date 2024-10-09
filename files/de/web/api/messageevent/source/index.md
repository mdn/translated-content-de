---
title: "MessageEvent: source-Eigenschaft"
short-title: source
slug: Web/API/MessageEvent/source
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`source`** schreibgeschützte Eigenschaft des [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces ist ein `MessageEventSource` (das ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), das den Nachrichtenabsender darstellt.

## Wert

Ein `MessageEventSource` (das ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), das den Nachrichtenabsender darstellt.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich wie dieses Interface, wird jedoch in Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
