---
title: "Benachrichtigung: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Read-only statische Eigenschaft **`maxActions`** der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt die maximale Anzahl an Aktionen zurück, die von dem Gerät und dem User-Agent unterstützt wird. Effektiv ist dies die maximale Anzahl von Elementen im [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array, die vom User-Agent beachtet werden.

## Wert

Eine ganze Zahl, die die größte Anzahl von Benachrichtigungsaktionen anzeigt, die dem Benutzer vom User-Agent und dem Gerät präsentiert werden können.

## Beispiele

Das folgende Beispiel protokolliert die maximale Anzahl der unterstützten Aktionen.

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

- [Verwendung der Notifications-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.actions`](/de/docs/Web/API/Notification/actions)
