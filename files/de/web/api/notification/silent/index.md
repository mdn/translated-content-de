---
title: "Benachrichtigung: Eigenschaft „silent“"
short-title: silent
slug: Web/API/Notification/silent
l10n:
  sourceCommit: e011d5695b264ced5a3f4bb822ca7904e23b7e83
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`silent`** schreibgeschützte Eigenschaft der {{domxref("Notification")}}-Schnittstelle gibt an, ob die Benachrichtigung stumm sein soll, d.h., dass keine Geräusche oder Vibrationen ausgegeben werden sollen, unabhängig von den Geräteeinstellungen. Dies wird in der `silent`-Option des {{domxref("Notification.Notification","Notification()")}}-Konstruktors festgelegt.

## Wert

Ein boolescher Wert oder `null`. Wenn `true`, ist die Benachrichtigung stumm; wenn `null`, werden die Standardeinstellungen des Geräts beachtet.

## Beispiele

Das folgende Code-Snippet soll eine stille Benachrichtigung auslösen; ein einfaches `options`-Objekt wird erstellt und dann die Benachrichtigung mit dem {{DOMxRef("Notification.Notification","Notification()")}}-Konstruktor ausgelöst.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
