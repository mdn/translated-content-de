---
title: NotificationEvent
slug: Web/API/NotificationEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Das **`NotificationEvent`** Interface der [Notifications API](/de/docs/Web/API/Notifications_API) repräsentiert ein Benachrichtigungsereignis, das im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird.

Dieses Interface erbt vom [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) Interface.

> [!NOTE]
> Nur persistente Benachrichtigungsereignisse, die im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Objekt ausgelöst werden, implementieren das `NotificationEvent` Interface. Nicht-persistente Benachrichtigungsereignisse, die im [`Notification`](/de/docs/Web/API/Notification) Objekt ausgelöst werden, implementieren das `Event` Interface.

{{InheritanceDiagram}}

## Konstruktor

- [`NotificationEvent()`](/de/docs/Web/API/NotificationEvent/NotificationEvent)
  - : Erstellt ein neues `NotificationEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`NotificationEvent.notification`](/de/docs/Web/API/NotificationEvent/notification) {{ReadOnlyInline}}
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification)-Objekt zurück, das die Benachrichtigung repräsentiert, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolgen-ID des Benachrichtigungsschalters zurück, den der Benutzer angeklickt hat. Dieser Wert gibt eine leere Zeichenfolge zurück, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als auf einer Aktionstaste angeklickt hat oder die Benachrichtigung keine Taste hat.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

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
> Dieses Interface ist in der [Notifications API](/de/docs/Web/API/Notifications_API) spezifiziert, wird aber über [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen.

## Browser-Kompatibilität

{{Compat}}
