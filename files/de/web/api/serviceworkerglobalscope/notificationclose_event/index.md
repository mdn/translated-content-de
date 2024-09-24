---
title: "ServiceWorkerGlobalScope: notificationclose-Ereignis"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`notificationclose`**-Ereignis des {{domxref("ServiceWorkerGlobalScope")}}-Interfaces wird ausgelöst, wenn ein Benutzer eine angezeigte Benachrichtigung schließt, die durch {{domxref("ServiceWorkerRegistration.showNotification()")}} erzeugt wurde.

Benachrichtigungen, die im Haupt-Thread oder in Workern erstellt werden, die keine Service Worker sind und den {{domxref("Notification.Notification","Notification()")}}-Konstruktor verwenden, erhalten stattdessen ein {{domxref("Notification/close_event", "close")}}-Ereignis auf dem {{domxref("Notification")}}-Objekt selbst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("notificationclose", (event) => {});

onnotificationclose = (event) => {};
```

## Ereignistyp

Ein {{domxref("NotificationEvent")}}. Erbt von {{domxref("ExtendableEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("NotificationEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Vorgänger, {{domxref("ExtendableEvent")}} und {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Notification")}}-Objekt zurück, das die Benachrichtigung repräsentiert, die geklickt wurde, um das Ereignis auszulösen.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Gibt die String-ID des Benachrichtigungsknopfes zurück, den der Benutzer geklickt hat. Dieser Wert gibt eine leere Zeichenkette zurück, wenn der Benutzer die Benachrichtigung an einer anderen Stelle als einem Aktionsknopf angeklickt hat oder die Benachrichtigung keinen Knopf hat.

## Beispiel

```js
// Innerhalb eines Service Workers.
self.onnotificationclose = (event) => {
  console.log("Bei Schließen der Benachrichtigung: ", event.notification.tag);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
