---
title: "Notification: Eigenschaft navigate"
short-title: navigate
slug: Web/API/Notification/navigate
l10n:
  sourceCommit: 74b73e8310d2ecfecd3e4a2aa21e5b54f43d7387
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`navigate`** der Schnittstelle [`Notification`](/de/docs/Web/API/Notification) enthält die URL, zu der der User Agent navigiert, wenn der Benutzer die Benachrichtigung aktiviert.

Dies ist der aufgelöste Wert der URL, sofern eine URL in der Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) oder von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) angegeben wurde.

Normalerweise löst das Aktivieren einer nicht dauerhaften Benachrichtigung das Ereignis [`click`](/de/docs/Web/API/Notification/click_event) auf ihrem [`Notification`](/de/docs/Web/API/Notification)-Objekt aus. Das Aktivieren einer dauerhaften Benachrichtigung löst dagegen das Ereignis [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus.

Wenn der Benutzer eine Benachrichtigung mit einer Navigations-URL aktiviert, navigiert der User Agent zur angegebenen URL, statt eines dieser Ereignisse auszulösen. So können Benachrichtigungen Benutzer zu einer bestimmten Seite führen, ohne dass ein Event-Handler erforderlich ist.

## Wert

Ein String, der eine {{Glossary("URL", "URL")}} enthält, oder ein leerer String, wenn keine Navigations-URL festgelegt wurde.

## Beispiele

### Den Wert der Eigenschaft navigate auslesen

Die Eigenschaft `navigate` gibt den aufgelösten URL-String zurück, wenn eine Navigations-URL festgelegt wurde, andernfalls einen leeren String.

```js
const notification = new Notification("New message from Alice", {
  body: "Hey, are you free for lunch?",
  navigate: "/messages/alice",
});

// The property contains the resolved absolute URL
console.log(notification.navigate); // e.g. "https://example.com/messages/alice"

// Without a navigate option, the property is an empty string
const basic = new Notification("Hello!");
console.log(basic.navigate); // ""
```

### navigate mit einem Service Worker verwenden

Bei dauerhaften Benachrichtigungen über einen Service Worker ermöglicht die Option `navigate`, dass beim Aktivieren der Benachrichtigung eine Seite geöffnet wird, ohne dass das Ereignis [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) behandelt werden muss.

```js
// Inside a service worker
self.registration.showNotification("Order shipped!", {
  body: "Your order #1234 has been shipped.",
  navigate: "/orders/1234",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification)
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
