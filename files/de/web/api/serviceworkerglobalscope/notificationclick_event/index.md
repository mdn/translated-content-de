---
title: "ServiceWorkerGlobalScope: notificationclick-Ereignis"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclick`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn auf eine Systembenachrichtigung geklickt wird, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern, die keine Service Worker sind, mit dem Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) erstellt wurden, erhalten stattdessen ein [`click`](/de/docs/Web/API/Notification/click_event)-Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification)-Objekt selbst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("notificationclick", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onnotificationclick = (event) => { }
```

## Ereignistyp

Ein [`NotificationEvent`](/de/docs/Web/API/NotificationEvent). Es erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NotificationEvent")}}

## Beispiele

Sie können das `notificationclick`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

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
          if (
            client.url === new URL("/", self.location.origin).href &&
            "focus" in client
          ) {
            return client.focus();
          }
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onnotificationclick` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onnotificationclick` hinzugefügte Event-Listener ersetzt werden):

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
          if (
            client.url === new URL("/", self.location.origin).href &&
            "focus" in client
          ) {
            return client.focus();
          }
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
};
```

Sie können Aktionen innerhalb eines Event-Handlers für `notificationclick` über `event.action` verarbeiten:

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

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.action === "archive") {
    // User selected the Archive action.
    archiveEmail();
  } else {
    // User selected (e.g., clicked in) the main body of notification.
    clients.openWindow("/inbox");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)
