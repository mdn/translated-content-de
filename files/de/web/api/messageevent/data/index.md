---
title: "MessageEvent: data Eigenschaft"
short-title: data
slug: Web/API/MessageEvent/data
l10n:
  sourceCommit: 6a0f22ee0b3a854ed37271373cbc1d1099c0d361
---

{{APIRef("HTML DOM")}}

Die **`data`**-Eigenschaft des schreibgeschützten [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interfaces repräsentiert die Daten, die vom Nachrichtensender gesendet werden.

## Wert

Die Daten, die vom Nachrichtensender gesendet werden; diese können jeden Datentyp haben, abhängig davon, was dieses Ereignis ausgelöst hat.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich wie dieses Interface, aber in Interfaces verwendet, die den Autoren mehr Flexibilität bieten müssen.
