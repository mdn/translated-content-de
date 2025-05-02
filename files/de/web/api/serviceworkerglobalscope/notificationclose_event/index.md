---
title: "ServiceWorkerGlobalScope: notificationclose Ereignis"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclose`** Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Schnittstelle wird ausgelöst, wenn ein Benutzer eine im Vordergrund angezeigte Benachrichtigung schließt, die durch [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern, die keine Service Worker sind, mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor erstellt wurden, werden stattdessen ein [`close`](/de/docs/Web/API/Notification/close_event) Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification) Objekt selbst erhalten.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("notificationclose", (event) => { })

onnotificationclose = (event) => { }
```

## Ereignistyp

Ein [`NotificationEvent`](/de/docs/Web/API/NotificationEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NotificationEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`NotificationEvent.notification`](/de/docs/Web/API/NotificationEvent/notification) {{ReadOnlyInline}}
  - : Gibt ein [`Notification`](/de/docs/Web/API/Notification) Objekt zurück, das die Benachrichtigung darstellt, die angeklickt wurde, um das Ereignis auszulösen.
- [`NotificationEvent.action`](/de/docs/Web/API/NotificationEvent/action) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolgen-ID der Benachrichtigungsschaltfläche zurück, die der Benutzer angeklickt hat. Dieser Wert ist eine leere Zeichenfolge, wenn der Benutzer irgendwo auf die Benachrichtigung geklickt hat, außer auf eine Aktionsschaltfläche, oder die Benachrichtigung keine Schaltfläche besitzt.

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
