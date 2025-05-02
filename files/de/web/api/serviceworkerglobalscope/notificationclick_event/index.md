---
title: "ServiceWorkerGlobalScope: notificationclick-Ereignis"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclick`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, um anzuzeigen, dass eine Systembenachrichtigung, die durch [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erzeugt wurde, angeklickt wurde.

Benachrichtigungen, die im Haupt-Thread oder in anderen Arbeitern erstellt werden, die keine Service-Worker sind, und den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor verwenden, erhalten stattdessen ein [`click`](/de/docs/Web/API/Notification/click_event)-Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification)-Objekt selbst.

Dieses Ereignis ist nicht abbruchfähig und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("notificationclick", (event) => { })

onnotificationclick = (event) => { }
```

## Ereignistyp

Ein [`NotificationEvent`](/de/docs/Web/API/NotificationEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NotificationEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`NotificationEvent.notification`](/de/docs/Web/API/NotificationEvent/notification) {{ReadOnlyInline}}
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification)-Objekt zurück, das die Benachrichtigung repräsentiert, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolgen-ID der Benachrichtigungsschaltfläche zurück, die der Benutzer angeklickt hat. Dieser Wert gibt eine leere Zeichenfolge zurück, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als auf einer Aktionsschaltfläche angeklickt hat oder die Benachrichtigung keine Schaltfläche hat.

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

Sie können Ereignisaktionen innerhalb eines `notificationclick`-Ereignishandlers mit `event.action` behandeln:

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
