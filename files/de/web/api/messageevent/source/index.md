---
title: "MessageEvent: source-Eigenschaft"
short-title: source
slug: Web/API/MessageEvent/source
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

Die **`source`** schreibgeschützte Eigenschaft des [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces ist ein `MessageEventSource` (dies kann ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein), das den Nachrichtenabsender darstellt.

## Wert

ein `MessageEventSource` (dies kann ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein), das den Nachrichtenabsender darstellt.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu diesem Interface, aber in Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
