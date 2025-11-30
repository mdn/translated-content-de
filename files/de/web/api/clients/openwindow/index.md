---
title: "Clients: openWindow() Methode"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`openWindow()`** Methode des [`Clients`](/de/docs/Web/API/Clients)
Interface erstellt einen neuen obersten Browsing-Kontext und lädt eine gegebene URL. Falls das aufrufende Skript nicht die Berechtigung hat, Popups anzuzeigen, wird `openWindow()` einen `InvalidAccessError` auslösen.

In Firefox darf die Methode nur dann Popups anzeigen, wenn sie als Ergebnis eines
Benachrichtigungs-Klickevents aufgerufen wird.

In Chrome für Android kann die Methode stattdessen die URL in einem bereits vorhandenen Browsing-Kontext öffnen, der von einer zuvor auf den Startbildschirm des Nutzers hinzugefügten [standalone web app](/de/docs/Web/Progressive_web_apps) bereitgestellt wird. Kürzlich funktioniert dies auch in Chrome für Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Ein String, der die URL des Clients repräsentiert, den Sie im Fenster öffnen möchten. Im Allgemeinen muss dieser Wert eine URL aus dem gleichen Ursprung wie das aufrufende Skript sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WindowClient`](/de/docs/Web/API/WindowClient) Objekt aufgelöst wird, wenn die URL vom gleichen Ursprung wie der Service Worker stammt, oder andernfalls ein {{Glossary("null", "null Wert")}}.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster im Ursprungsbereich der App eine [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) aufweist.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprungsbereich der App muss eine [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) haben.

## Beispiele

```js
// Send notification to OS if applicable
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "Click here to view your messages.",
    data: { url: `${self.location.origin}/some/path` },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification(
    "You've got messages!",
    notificationObject,
  );
}

// Notification click event listener
self.addEventListener("notificationclick", (e) => {
  // Close the notification popout
  e.notification.close();
  // Get all the Window clients
  e.waitUntil(
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
