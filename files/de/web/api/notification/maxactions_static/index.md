---
title: "Notification: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`maxActions`** schreibgeschützte statische Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt die maximale Anzahl von Aktionen zurück, die vom Gerät und dem User Agent unterstützt werden. Tatsächlich ist dies die maximale Anzahl von Elementen im [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array, die vom User Agent berücksichtigt werden.

## Wert

Eine ganze Zahl, die die größte Anzahl von Benachrichtigungsaktionen angibt, die dem Benutzer durch den User Agent und das Gerät präsentiert werden können.

## Beispiele

Das folgende Codebeispiel protokolliert die maximale Anzahl der unterstützten Aktionen.

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

- [Verwendung der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.actions`](/de/docs/Web/API/Notification/actions)
