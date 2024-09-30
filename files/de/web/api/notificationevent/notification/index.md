---
title: "NotificationEvent: Benachrichtigungseigenschaft"
short-title: notification
slug: Web/API/NotificationEvent/notification
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`notification`**-Eigenschaft des [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)-Interfaces gibt die Instanz der [`Notification`](/de/docs/Web/API/Notification) zurück, die angeklickt wurde, um das Ereignis auszulösen. Die [`Notification`](/de/docs/Web/API/Notification) bietet schreibgeschützten Zugriff auf viele Eigenschaften, die zum Zeitpunkt der Instanziierung der Benachrichtigung festgelegt wurden, wie beispielsweise die Attribute `tag` und `data`, die es Ihnen ermöglichen, Informationen für eine spätere Verwendung im `notificationclick`-Ereignis zu speichern.

## Wert

Ein [`Notification`](/de/docs/Web/API/Notification)-Objekt.

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
