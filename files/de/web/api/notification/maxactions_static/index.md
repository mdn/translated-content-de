---
title: "Notification: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: 66be0a23be754791266009f1044e2238c27332b4
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`maxActions`** schreibgeschützte statische Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt die maximale Anzahl von Aktionen zurück, die in einer Benachrichtigung angezeigt werden können.

## Wert

Eine Ganzzahl.

## Beschreibung

Benachrichtigungsaktionen sind Schaltflächen oder Steuerungen, die innerhalb von [persistent notifications](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications) erscheinen. Aktionen werden mit der [`actions`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#actions)-Option des zweiten Arguments der [`showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)-Methode festgelegt.

Browser begrenzen typischerweise die maximale Anzahl von Aktionen, die sie für eine bestimmte Benachrichtigung anzeigen. Die `maxActions`-Eigenschaft gibt dieses Limit zurück, welches die maximale Anzahl von Elementen im [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array darstellt, die vom Benutzeragenten beachtet werden.

## Beispiele

### Protokollieren der maximal möglichen Anzahl von Aktionen

Der folgende Codeausschnitt protokolliert die maximale Anzahl unterstützter Aktionen.

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
