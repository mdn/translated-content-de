---
title: "NotificationEvent: action-Eigenschaft"
short-title: action
slug: Web/API/NotificationEvent/action
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Die **`action`**-Eigenschaft des schreibgeschützten [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)-Interfaces gibt die Zeichenfolgen-ID des Benachrichtigungsbuttons zurück, den der Benutzer geklickt hat. Dieser Wert gibt eine leere Zeichenfolge zurück, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als einem Aktionsbutton geklickt hat oder die Benachrichtigung keinen Button hat. Die Benachrichtigungs-ID wird während der Erstellung der Notification über das actions-Array-Attribut gesetzt und kann nicht geändert werden, es sei denn, die Benachrichtigung wird ersetzt.

## Wert

Eine Zeichenfolge.

## Beispiele

```js
self.registration.showNotification("New articles available", {
  actions: [{ action: "get", title: "Get now." }],
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "get") {
      synchronizeReader();
    } else {
      clients.openWindow("/reader");
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
