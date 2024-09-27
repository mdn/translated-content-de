---
title: NotificationEvent
slug: Web/API/NotificationEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Das **`NotificationEvent`**-Interface der [Notifications API](/de/docs/Web/API/Notifications_API) repräsentiert ein Benachrichtigungsereignis, das auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird.

Dieses Interface erbt vom [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) Interface.

> [!NOTE]
> Nur persistente Benachrichtigungsereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Objekt ausgelöst werden, implementieren das `NotificationEvent`-Interface. Nicht persistente Benachrichtigungsereignisse, die auf dem [`Notification`](/de/docs/Web/API/Notification)-Objekt ausgelöst werden, implementieren das `Event`-Interface.

{{InheritanceDiagram}}

## Konstruktor

- [`NotificationEvent()`](/de/docs/Web/API/NotificationEvent/NotificationEvent)
  - : Erstellt ein neues `NotificationEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`NotificationEvent.notification`](/de/docs/Web/API/NotificationEvent/notification) {{ReadOnlyInline}}
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification)-Objekt zurück, das die Benachrichtigung repräsentiert, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die String-ID des Benachrichtigungsbuttons zurück, den der Benutzer angeklickt hat. Dieser Wert gibt einen leeren String zurück, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als einem Aktionsbutton angeklickt hat oder wenn die Benachrichtigung keinen Button hat.

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
> Dieses Interface ist in der [Notifications API](/de/docs/Web/API/Notifications_API) spezifiziert, wird jedoch über [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen.

## Browser-Kompatibilität

{{Compat}}
