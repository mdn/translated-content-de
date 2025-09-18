---
title: "NotificationEvent: action-Eigenschaft"
short-title: action
slug: Web/API/NotificationEvent/action
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`action`**-Eigenschaft des [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)-Interfaces gibt die String-ID des Benachrichtigungsknopfes zurück, den der Benutzer angeklickt hat. Dieser Wert gibt einen leeren String zurück, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als einem Aktionsknopf angeklickt hat oder die Benachrichtigung keinen Knopf hat. Die Benachrichtigungs-ID wird während der Erstellung der Benachrichtigung über das actions-Array-Attribut festgelegt und kann nicht geändert werden, es sei denn, die Benachrichtigung wird ersetzt.

## Wert

Ein String.

## Beispiele

```js
self.registration.showNotification("New articles available", {
  actions: [{ action: "get", title: "Get now." }],
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.action === "get") {
    synchronizeReader();
  } else {
    clients.openWindow("/reader");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
