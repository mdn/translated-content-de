---
title: "ServiceWorkerGlobalScope: notificationclose-Ereignis"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclose`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein Benutzer eine angezeigte Benachrichtigung schließt, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellt wurde.

Benachrichtigungen, die im Hauptthread oder in Workern, die keine Service Worker sind, mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor erstellt wurden, empfangen stattdessen ein [`close`](/de/docs/Web/API/Notification/close_event)-Ereignis auf dem [`Notification`](/de/docs/Web/API/Notification)-Objekt selbst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("notificationclose", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle festlegen:

```js-nolint
onnotificationclose = (event) => { }
```

## Ereignistyp

Ein [`NotificationEvent`](/de/docs/Web/API/NotificationEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NotificationEvent")}}

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
