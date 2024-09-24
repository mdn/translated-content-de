---
title: "Benachrichtigung: timestamp Eigenschaft"
short-title: timestamp
slug: Web/API/Notification/timestamp
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`timestamp`** schreibgeschützte Eigenschaft der
{{domxref("Notification")}} Schnittstelle gibt eine Zahl zurück, die in der `timestamp`-Option des
{{domxref("Notification.Notification","Notification()")}} Konstruktors angegeben ist.

Der Zeitstempel der Benachrichtigung kann die Zeit in Millisekunden seit 00:00:00 UTC
am 1. Januar 1970 repräsentieren, für das Ereignis, für das die Benachrichtigung erstellt wurde, oder es kann ein
beliebiger Zeitstempel sein, den Sie mit der Benachrichtigung verknüpfen möchten. Zum Beispiel kann ein
Zeitstempel für eine bevorstehende Besprechung in der Zukunft festgelegt werden, während ein Zeitstempel für eine
verpasste Nachricht in der Vergangenheit festgelegt werden könnte.

## Wert

Eine Zahl, die einen Zeitstempel darstellt, angegeben als {{Glossary("Unix time")}} in Millisekunden.

## Beispiele

Das folgende Beispiel löst eine Benachrichtigung aus; ein einfaches `options`-Objekt wird
erstellt, dann wird die Benachrichtigung mit dem `Notification()`
Konstruktor ausgelöst.

```js
const dts = Math.floor(Date.now());

const options = {
  body: "Your code submission has received 3 new review comments.",
  timestamp: dts,
};

const n = new Notification("New review activity", options);

console.log(n.timestamp); // Gibt den Zeitstempel aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
