---
title: "NotificationEvent: notification-Eigenschaft"
short-title: Benachrichtigung
slug: Web/API/NotificationEvent/notification
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Die **`notification`** schreibgeschützte Eigenschaft der {{domxref("NotificationEvent")}}-Schnittstelle gibt die Instanz der {{domxref("Notification")}} zurück, die geklickt wurde, um das Ereignis auszulösen. Die {{domxref("Notification")}} bietet schreibgeschützten Zugriff auf viele Eigenschaften, die beim Erstellen der Benachrichtigung festgelegt wurden, wie die Attribute `tag` und `data`, die Ihnen ermöglichen, Informationen für die spätere Verwendung im `notificationclick`-Ereignis zu speichern.

## Wert

Ein {{domxref("Notification")}}-Objekt.

## Beispiele

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click");

  // Data can be attached to the notification so that you
  // can process it in the notificationclick handler.
  console.log(`Notification Tag: ${event.notification.tag}`);
  console.log(`Notification Data: ${event.notification.data}`);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
