---
title: "Clients: openWindow() Methode"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: ff42d1f779857392d9c9c339c0b8916a9e08c030
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`openWindow()`** Methode der [`Clients`](/de/docs/Web/API/Clients)
Schnittstelle erstellt einen neuen, obersten Browsing-Kontext und lädt eine gegebene URL. Wenn das aufrufende Skript keine Berechtigung zum Anzeigen von Pop-ups hat, wird `openWindow()` einen `InvalidAccessError` auslösen.

In Firefox darf die Methode nur Pop-ups anzeigen, wenn sie als Ergebnis eines Benachrichtigungsklickereignisses aufgerufen wird.

In Chrome für Android kann die Methode stattdessen die URL in einem vorhandenen Browsing-Kontext öffnen, der durch eine zuvor auf dem Startbildschirm des Benutzers hinzugefügte [Standalone-Web-App](/de/docs/Web/Progressive_web_apps) bereitgestellt wird. Seit Kurzem funktioniert dies auch in Chrome für Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Ein String, der die URL des Clients darstellt, den Sie im Fenster öffnen möchten. In der Regel muss dieser Wert eine URL aus demselben Ursprungsort wie das aufrufende Skript sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WindowClient`](/de/docs/Web/API/WindowClient)-Objekt aufgelöst wird, wenn die URL aus demselben Ursprung wie der Service Worker stammt, oder andernfalls ein {{Glossary("null", "Null-Wert")}}.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster im Ursprung der App [vorübergehende Aktivierung](/de/docs/Web/Security/Defenses/User_activation) hat.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprung der App muss [vorübergehende Aktivierung](/de/docs/Web/Security/Defenses/User_activation) haben.

## Beispiele

### Öffnen eines Fensters bei einem Benachrichtigungsklick

In diesem Beispiel erstellt und zeigt ein Service Worker eine Benachrichtigung an, die eine zugehörige URL enthält, die unter den Geltungsbereich des Service Workers fällt. Wenn der Benutzer auf die Benachrichtigung klickt:

- Wenn die Seite mit der URL der Benachrichtigung bereits geöffnet ist, fokussiert sie der Service Worker.
- Andernfalls öffnet der Service Worker die Seite in einem neuen Fenster.

Beachten Sie, dass die [`Client.url`](/de/docs/Web/API/Client/url) Eigenschaft nicht aktualisiert wird, es sei denn, eine neue Seite wird tatsächlich geladen. Dies bedeutet, dass sie nicht aktualisiert wird, wenn der Benutzer innerhalb derselben Seite mit einem URL-Fragment navigiert oder wenn eine {{Glossary("SPA", "Single-Page-App (SPA)")}} ein Navigationsevent abfängt (zum Beispiel mit der [Navigation API](/de/docs/Web/API/Navigation_API)) und den Seiteninhalt mit clientseitigem Code aktualisiert. Folglich ist diese Technik nicht für SPAs geeignet.

```js
// Create and show notification
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "Click here to view your messages.",
    data: { url: `${self.location.origin}/some/path` },
  };
  self.registration.showNotification(
    "You've got messages!",
    notificationObject,
  );
}

// Handle notification click
self.addEventListener("notificationclick", (e) => {
  // Close the notification popout
  e.notification.close();
  e.waitUntil(
    // Get all the Window clients
    clients.matchAll({ type: "window" }).then((clientsArr) => {
      const windowToFocus = clientsArr.find(
        (windowClient) => windowClient.url === e.notification.data.url,
      );
      if (windowToFocus) {
        // If a Window tab matching the targeted URL already exists, focus that;
        windowToFocus.focus();
      } else {
        // Otherwise, open a new tab to the applicable URL and focus it.
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
      }
    }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
