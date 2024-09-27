---
title: "ServiceWorkerGlobalScope: notificationclose-Ereignis"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclose`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein Nutzer eine angezeigte Benachrichtigung schließt, die durch [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erzeugt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern, die keine Service-Worker sind, mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor erzeugt werden, erhalten stattdessen ein [`close`](/de/docs/Web/API/Notification/close_event)-Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification)-Objekt selbst.

Dieses Ereignis ist nicht abbrechbar und löst keine Ereigniskette (bubbling) aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("notificationclose", (event) => {});

onnotificationclose = (event) => {};
```

## Ereignistyp

Ein [`NotificationEvent`](/de/docs/Web/API/NotificationEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NotificationEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`NotificationEvent.notification`](/de/docs/Web/API/NotificationEvent/notification) {{ReadOnlyInline}}
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification)-Objekt zurück, das die Benachrichtigung darstellt, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolgen-ID des Benachrichtigungsbuttons zurück, den der Nutzer angeklickt hat. Dieser Wert gibt einen leeren String zurück, wenn der Nutzer die Benachrichtigung an einer anderen Stelle als einem Aktionsbutton angeklickt hat oder die Benachrichtigung keinen Button hat.

## Beispiel

```js
// Inside a service worker.
self.onnotificationclose = (event) => {
  console.log("On notification close: ", event.notification.tag);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
