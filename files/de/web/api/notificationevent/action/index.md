---
title: "NotificationEvent: action-Eigenschaft"
short-title: action
slug: Web/API/NotificationEvent/action
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Die **`action`**-Eigenschaft der {{domxref("NotificationEvent")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Zeichenfolgen-ID der Benachrichtigungsschaltfläche zurückgibt, die der Benutzer geklickt hat. Dieser Wert gibt eine leere Zeichenfolge zurück, wenn der Benutzer die Benachrichtigung an einer Stelle klickte, die keine Schaltfläche ist, oder wenn die Benachrichtigung keine Schaltfläche hat. Die ID der Benachrichtigung wird während der Erstellung der Benachrichtigung über das actions-Array-Attribut festgelegt und kann nicht geändert werden, es sei denn, die Benachrichtigung wird ersetzt.

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
