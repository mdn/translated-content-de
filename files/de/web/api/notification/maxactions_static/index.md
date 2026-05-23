---
title: "Notification: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`maxActions`** schreibgeschützte statische Eigenschaft der
[`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt die maximale Anzahl von Aktionen zurück, die vom Gerät und dem User-Agent unterstützt werden. Dies ist effektiv die maximale Anzahl von Elementen im
[`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array, die vom User-Agent berücksichtigt werden.

## Wert

Eine ganze Zahl, die die größte Anzahl von Benachrichtigungsaktionen angibt, die dem Benutzer durch den User-Agent und das Gerät präsentiert werden können.

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
- [`Notification.actions`](/de/docs/Web/API/Notification/actions)
