---
title: "Notification: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`maxActions`** schreibgeschützte statische Eigenschaft des
{{domxref("Notification")}} Interfaces gibt die maximale Anzahl von Aktionen zurück, die vom Gerät und dem Benutzeragenten unterstützt werden. Tatsächlich ist dies die maximale Anzahl von Elementen im
{{domxref("Notification.actions")}} Array, die vom Benutzeragenten berücksichtigt werden.

## Wert

Eine ganze Zahl, die die größte Anzahl von Benachrichtigungsaktionen angibt, die dem Benutzer vom Benutzeragenten und dem Gerät präsentiert werden können.

## Beispiele

Das folgende Beispiel protokolliert die maximale Anzahl unterstützter Aktionen.

```js
const maxActions = Notification.maxActions;
console.log(
  `This device can display at most ${maxActions} actions on each notification.`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
