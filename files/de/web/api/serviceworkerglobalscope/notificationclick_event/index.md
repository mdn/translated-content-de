---
title: "ServiceWorkerGlobalScope: notificationclick-Ereignis"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclick`**-Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird ausgelöst, um anzuzeigen, dass eine Systembenachrichtigung, die durch {{domxref("ServiceWorkerRegistration.showNotification()")}} erzeugt wurde, angeklickt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern erstellt werden, die keine Service-Worker sind und den {{domxref("Notification.Notification","Notification()")}}-Konstruktor verwenden, erhalten stattdessen ein {{domxref("Notification/click_event", "click")}}-Ereignis auf dem {{domxref("Notification")}}-Objekt selbst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("notificationclick", (event) => {});

onnotificationclick = (event) => {};
```

## Ereignistyp

Ein {{domxref("NotificationEvent")}}. Erbt von {{domxref("ExtendableEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("NotificationEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinen Vorfahren, {{domxref("ExtendableEvent")}} und {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Notification")}}-Objekt zurück, das die Benachrichtigung darstellt, die angeklickt wurde, um das Ereignis auszulösen.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Gibt die Zeichenfolgen-ID der Benachrichtigungsschaltfläche zurück, die der Benutzer angeklickt hat. Dieser Wert gibt eine leere Zeichenfolge zurück, wenn der Benutzer die Benachrichtigung außerhalb eines Aktionsknopfs angeklickt hat oder die Benachrichtigung keine Schaltfläche hat.

## Beispiele

Sie können das `notificationclick`-Ereignis in einer {{domxref("EventTarget/addEventListener", "addEventListener")}}-Methode verwenden:

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // Dies prüft, ob das aktuelle Fenster bereits geöffnet ist
  // und fokussiert es, falls ja
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

Oder verwenden Sie die `onnotificationclick`-Ereignis-Handler-Eigenschaft:

```js
self.onnotificationclick = (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // Dies prüft, ob das aktuelle Fenster bereits geöffnet ist
  // und fokussiert es, falls ja
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

Sie können Ereignisaktionen innerhalb eines `notificationclick`-Ereignis-Handlers mit `event.action` verarbeiten:

```js
navigator.serviceWorker.register("sw.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      // Zeigen Sie eine Benachrichtigung an, die eine Aktion mit dem Titel Archiv enthält.
      registration.showNotification("Neue Nachricht von Alice", {
        actions: [
          {
            action: "archive",
            title: "Archiv",
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
      // Benutzer hat die Aktion Archiv ausgewählt.
      archiveEmail();
    } else {
      // Benutzer hat (z. B. innerhalb des Hauptbereichs der Benachrichtigung) ausgewählt.
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
