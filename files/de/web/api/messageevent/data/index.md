---
title: "MessageEvent: data-Eigenschaft"
short-title: data
slug: Web/API/MessageEvent/data
l10n:
  sourceCommit: 6a0f22ee0b3a854ed37271373cbc1d1099c0d361
---

{{APIRef("HTML DOM")}}

Die **`data`**-Eigenschaft der schreibgeschützten [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle repräsentiert die Daten, die vom Nachrichtenemitter gesendet wurden.

## Wert

Die Daten, die vom Nachrichtenemitter gesendet wurden; dies kann jeder Datentyp sein, abhängig davon, was dieses Ereignis ausgelöst hat.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich wie diese Schnittstelle, aber verwendet in Schnittstellen, die den Autoren mehr Flexibilität bieten müssen.
