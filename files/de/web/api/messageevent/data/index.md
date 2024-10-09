---
title: "MessageEvent: data-Eigenschaft"
short-title: data
slug: Web/API/MessageEvent/data
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`data`**-Eigenschaft des [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces stellt die vom Nachrichtenemitter gesendeten Daten dar.

## Wert

Die vom Nachrichtenemitter gesendeten Daten; dies kann jeder Datentyp sein, abhängig davon, was dieses Ereignis ausgelöst hat.

## Beispiele

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu diesem Interface, aber verwendet in Interfaces, die den Autoren mehr Flexibilität geben müssen.
