---
title: "ServiceWorkerGlobalScope: notificationclick Ereignis"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclick`** Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Interfaces wird ausgelöst, um anzuzeigen, dass eine durch [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erzeugte Systembenachrichtigung angeklickt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern, die keine Service Worker sind, mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor erstellt werden,
erhalten stattdessen ein [`click`](/de/docs/Web/API/Notification/click_event) Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification) Objekt selbst.

Dieses Ereignis ist nicht abfangbar und wird nicht fortgepflanzt.

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
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification) Objekt zurück, das die Benachrichtigung darstellt, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolgen-ID des Benachrichtigungsbuttons zurück, den der Benutzer angeklickt hat. Dieser Wert gibt eine leere Zeichenfolge zurück, wenn der Benutzer die Benachrichtigung irgendwo anders als auf einem Aktionsbutton angeklickt hat oder die Benachrichtigung keinen Button hat.

## Beispiele

Sie können das `notificationclick` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

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

Oder die `onnotificationclick` Ereignishandler-Eigenschaft verwenden:

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

Sie können Ereignisaktionen mithilfe von `event.action` innerhalb eines `notificationclick` Ereignishandlers behandeln:

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
- [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API)
