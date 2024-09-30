---
title: "ServiceWorkerGlobalScope: notificationclick-Ereignis"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclick`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, um anzuzeigen, dass eine Systembenachrichtigung, die von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erzeugt wurde, angeklickt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern erstellt werden, die keine Service-Worker sind und den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor verwenden, erhalten stattdessen ein [`click`](/de/docs/Web/API/Notification/click_event)-Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification)-Objekt selbst.

Dieses Ereignis ist nicht abbrechbar und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("notificationclick", (event) => {});

onnotificationclick = (event) => {};
```

## Ereignistyp

Ein [`NotificationEvent`](/de/docs/Web/API/NotificationEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NotificationEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`NotificationEvent.notification`](/de/docs/Web/API/NotificationEvent/notification) {{ReadOnlyInline}}
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification)-Objekt zurück, das die Benachrichtigung darstellt, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die string-ID des Benachrichtigungsknopfes zurück, den der Benutzer angeklickt hat. Dieser Wert ist ein leerer String, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als an einem Aktion-Button angeklickt hat oder die Benachrichtigung keinen Button hat.

## Beispiele

Sie können das `notificationclick`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
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

Oder verwenden Sie die `onnotificationclick`-Ereignishandler-Eigenschaft:

```js
self.onnotificationclick = (event) => {
  console.log("On notification click: ", event.notification.tag);
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
};
```

Sie können Ereignisaktionen mit `event.action` innerhalb eines `notificationclick`-Ereignishandlers behandeln:

```js
navigator.serviceWorker.register("sw.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      // Show a notification that includes an action titled Archive.
      registration.showNotification("New mail from Alice", {
        actions: [
          {
            action: "archive",
            title: "Archive",
          },
        ],
      });
    });
  }
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "archive") {
      // User selected the Archive action.
      archiveEmail();
    } else {
      // User selected (e.g., clicked in) the main body of notification.
      clients.openWindow("/inbox");
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)
