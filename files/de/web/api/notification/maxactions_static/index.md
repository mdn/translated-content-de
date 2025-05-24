---
title: "Benachrichtigung: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: caa4012f6c46e355ad9840a3603ab69cb436d36f
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`maxActions`** schreibgeschützte statische Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt die maximale Anzahl von Aktionen zurück, die vom Gerät und dem Benutzeragenten unterstützt werden. Praktisch gesehen ist dies die maximale Anzahl von Elementen im [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array, die vom Benutzeragenten respektiert werden.

## Wert

Eine ganze Zahl, die die größte Anzahl von Benachrichtigungsaktionen angibt, die dem Benutzer vom Benutzeragenten und dem Gerät präsentiert werden können.

## Beispiele

Der folgende Ausschnitt protokolliert die maximale Anzahl der unterstützten Aktionen.

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
