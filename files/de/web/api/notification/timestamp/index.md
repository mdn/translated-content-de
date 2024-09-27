---
title: "Benachrichtigung: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/Notification/timestamp
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`timestamp`**-Eigenschaft der
[`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt eine Zahl zurück, wie sie in der `timestamp`-Option des
[`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben ist.

Der Zeitstempel der Benachrichtigung kann die Zeit in Millisekunden seit 00:00:00 UTC
am 1. Januar 1970 für das Ereignis darstellen, für das die Benachrichtigung erstellt wurde, oder es kann ein beliebiger Zeitstempel sein, den Sie mit der Benachrichtigung verknüpfen möchten. Beispielsweise könnte ein Zeitstempel für ein bevorstehendes Meeting in der Zukunft gesetzt werden, während ein Zeitstempel für eine verpasste Nachricht in der Vergangenheit gesetzt werden könnte.

## Wert

Eine Zahl, die einen Zeitstempel darstellt, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden.

## Beispiele

Der folgende Ausschnitt löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird erstellt und dann wird die Benachrichtigung mithilfe des `Notification()`
Konstruktors ausgelöst.

```js
const dts = Math.floor(Date.now());

const options = {
  body: "Your code submission has received 3 new review comments.",
  timestamp: dts,
};

const n = new Notification("New review activity", options);

console.log(n.timestamp); // Logs the timestamp
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
