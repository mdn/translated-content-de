---
title: "Notification: silent-Eigenschaft"
short-title: silent
slug: Web/API/Notification/silent
l10n:
  sourceCommit: e011d5695b264ced5a3f4bb822ca7904e23b7e83
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`silent`**-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces ist eine schreibgeschützte Eigenschaft, die angibt, ob die Benachrichtigung lautlos erfolgen soll, d. h. ohne Ton oder Vibrationen, unabhängig von den Geräteeinstellungen. Dies wird in der `silent`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

## Wert

Ein boolescher Wert oder `null`. Wenn `true`, erfolgt die Benachrichtigung lautlos; wenn `null`, werden die Standardeinstellungen des Geräts berücksichtigt.

## Beispiele

Das folgende Snippet soll eine lautlose Benachrichtigung auslösen; ein einfaches `options`-Objekt wird erstellt und dann die Benachrichtigung mithilfe des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors ausgelöst.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  silent: true,
};

const n = new Notification("New review activity", options);

console.log(n.silent); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
