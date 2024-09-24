---
title: "MessageEvent: Dateneigenschaft"
short-title: Daten
slug: Web/API/MessageEvent/data
l10n:
  sourceCommit: 6a0f22ee0b3a854ed37271373cbc1d1099c0d361
---

{{APIRef("HTML DOM")}}

Die **`data`** schreibgeschützte Eigenschaft des {{domxref("MessageEvent")}} Interfaces repräsentiert die Daten, die vom Nachrichtensender gesendet wurden.

## Wert

Die vom Nachrichtensender gesendeten Daten; dies kann jeder Datentyp sein, abhängig davon, was dieses Ereignis ausgelöst hat.

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

- {{domxref("ExtendableMessageEvent")}} — ähnlich zu diesem Interface, wird jedoch in Schnittstellen verwendet, die mehr Flexibilität für Autoren bieten müssen.
