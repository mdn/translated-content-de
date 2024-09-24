---
title: NotificationEvent
slug: Web/API/NotificationEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Die **`NotificationEvent`**-Schnittstelle der {{domxref("Notifications API", "", "", "nocode")}} repräsentiert ein Benachrichtigungsereignis, das im {{domxref("ServiceWorkerGlobalScope")}} eines {{domxref("ServiceWorker")}} ausgelöst wird.

Diese Schnittstelle erbt von der {{domxref("ExtendableEvent")}}-Schnittstelle.

> [!NOTE]
> Nur persistente Benachrichtigungsereignisse, die am {{domxref("ServiceWorkerGlobalScope")}}-Objekt ausgelöst werden, implementieren die `NotificationEvent`-Schnittstelle. Nicht-persistente Benachrichtigungsereignisse, die am {{domxref("Notification")}}-Objekt ausgelöst werden, implementieren die `Event`-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : Erstellt ein neues `NotificationEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle {{domxref("ExtendableEvent")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Notification")}}-Objekt zurück, das die Benachrichtigung darstellt, die durch Klicken ausgelöst wurde.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Gibt die Zeichenketten-ID der Benachrichtigungsschaltfläche zurück, die der Benutzer angeklickt hat. Dieser Wert gibt eine leere Zeichenkette zurück, wenn der Benutzer irgendwo anders auf die Benachrichtigung geklickt hat als auf eine Aktionstaste oder die Benachrichtigung keine Schaltfläche hat.

## Instanz-Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle {{domxref("ExtendableEvent")}}_.

## Beispiel

```js
self.addEventListener("notificationclick", (event) => {
  console.log(`On notification click: ${event.notification.tag}`);
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

> [!NOTE]
> Diese Schnittstelle wird in der [Notifications API](/de/docs/Web/API/Notifications_API) spezifiziert, aber über {{domxref("ServiceWorkerGlobalScope")}} aufgerufen.

## Browser-Kompatibilität

{{Compat}}
