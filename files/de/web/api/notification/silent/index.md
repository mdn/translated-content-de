---
title: "Notification: silent-Eigenschaft"
short-title: silent
slug: Web/API/Notification/silent
l10n:
  sourceCommit: e011d5695b264ced5a3f4bb822ca7904e23b7e83
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`silent`** des
[`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt an, ob die Benachrichtigung lautlos sein soll, d.h. keine Töne oder Vibrationen ausgegeben werden, unabhängig von den Geräteeinstellungen. Dies wird in der `silent`-Option des
[`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

## Wert

Ein boolescher Wert oder `null`. Wenn `true`, ist die Benachrichtigung lautlos; wenn `null`, werden die Standardgeräte-Einstellungen respektiert.

## Beispiele

Das folgende Code-Snippet soll eine lautlose Benachrichtigung auslösen; es wird ein einfaches
`options`-Objekt erstellt und dann die Benachrichtigung mit dem
[`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor ausgelöst.

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
