---
title: "Benachrichtigung: navigate-Eigenschaft"
short-title: navigate
slug: Web/API/Notification/navigate
l10n:
  sourceCommit: 8a6e8b53625bddb3af2cf2fb927cb3e430b12ba2
---

{{APIRef("Web Notifications")}}{{securecontext_header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`navigate`**-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle enthält die URL, zu der der User-Agent navigiert, wenn der Benutzer die Benachrichtigung aktiviert.

Dies ist der aufgelöste Wert der URL, falls eine angegeben wurde, die in der `navigate`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors oder in [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurde.

Normalerweise löst das Aktivieren einer nicht persistenten Benachrichtigung das [`click`](/de/docs/Web/API/Notification/click_event) Ereignis auf ihrem [`Notification`](/de/docs/Web/API/Notification)-Objekt aus, und das Aktivieren einer persistenten Benachrichtigung löst das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus.

Wenn eine Benachrichtigung mit einer Navigations-URL vom Benutzer aktiviert wird, navigiert der User-Agent zu der angegebenen URL anstatt eines dieser Ereignisse auszulösen. Dies ermöglicht es Benachrichtigungen, Benutzer zu einer bestimmten Seite zu leiten, ohne dass ein Ereignishandler erforderlich ist.

## Wert

Ein String, der eine {{Glossary("URL", "URL")}} enthält, oder ein leerer String, falls keine Navigations-URL gesetzt wurde.

## Beispiele

### Lesen des navigate-Eigenschaftswerts

Die `navigate`-Eigenschaft gibt den aufgelösten URL-String zurück, wenn eine Navigations-URL gesetzt wurde, oder einen leeren String andernfalls.

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

### Verwendung von navigate mit einem Service Worker

Bei der Verwendung von persistenten Benachrichtigungen über einen Service Worker erlaubt die `navigate`-Option der Benachrichtigung, beim Aktivieren eine Seite zu öffnen, ohne dass das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)-Ereignis behandelt werden muss.

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
- [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
