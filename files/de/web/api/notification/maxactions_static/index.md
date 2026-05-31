---
title: "Benachrichtigung: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: d8fc2b7782ba35a3f2708ffe5b5b4b9c44c8715f
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte, statische Eigenschaft **`maxActions`** der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt die maximale Anzahl von Aktionen zurück, die in einer Benachrichtigung angezeigt werden können.

## Wert

Ein Ganzzahlwert.

## Beschreibung

Benachrichtigungsaktionen sind Schaltflächen oder Steuerungselemente, die innerhalb von [persistenten Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications) erscheinen.
Aktionen werden mit der [`actions`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#actions)-Option des zweiten Arguments der Methode [`showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt.

Browser begrenzen typischerweise die maximale Anzahl an Aktionen, die sie für eine bestimmte Benachrichtigung anzeigen werden.
Die `maxActions`-Eigenschaft gibt dieses Limit zurück, welches die maximale Anzahl von Elementen im [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array darstellt, die vom Benutzeragenten berücksichtigt werden.

## Beispiele

### Protokollieren der maximal möglichen Anzahl von Aktionen

Das folgende Snippet protokolliert die maximale Anzahl unterstützter Aktionen.

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
