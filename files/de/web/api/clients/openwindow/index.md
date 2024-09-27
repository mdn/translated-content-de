---
title: "Clients: openWindow()-Methode"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`openWindow()`**-Methode der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle erstellt einen neuen übergeordneten Browsing-Kontext und lädt eine angegebene URL. Wenn das aufrufende Skript nicht die Berechtigung hat, Popups anzuzeigen, wirft `openWindow()` einen `InvalidAccessError`.

In Firefox darf die Methode Popups nur anzeigen, wenn sie als Ergebnis eines Benachrichtigungs-Klickereignisses aufgerufen wird.

In Chrome für Android kann die Methode stattdessen die URL in einem bestehenden Browsing-Kontext öffnen, der von einer zuvor auf dem Startbildschirm des Benutzers hinzugefügten [Standalone-Web-App](/de/docs/Web/Progressive_web_apps) bereitgestellt wird. Kürzlich funktioniert dies auch auf Chrome für Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Ein String, der die URL des Clients darstellt, den Sie im Fenster öffnen möchten. Im Allgemeinen muss dieser Wert eine URL aus demselben Ursprung sein wie das aufrufende Skript.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WindowClient`](/de/docs/Web/API/WindowClient)-Objekt aufgelöst wird, wenn die URL aus demselben Ursprung wie der Service Worker stammt oder andernfalls ein [null-Wert](/de/docs/Glossary/null).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster im Ursprung der App eine [vorübergehende Aktivierung](/de/docs/Web/Security/User_activation) hat.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprung der App muss eine [vorübergehende Aktivierung](/de/docs/Web/Security/User_activation) haben.

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
      // If a Window tab matching the targeted URL already exists, focus that;
      const hadWindowToFocus = clientsArr.some((windowClient) =>
        windowClient.url === e.notification.data.url
          ? (windowClient.focus(), true)
          : false,
      );
      // Otherwise, open a new tab to the applicable URL and focus it.
      if (!hadWindowToFocus)
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
    }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
