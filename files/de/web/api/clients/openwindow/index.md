---
title: "Clients: openWindow()-Methode"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`openWindow()`**-Methode des [`Clients`](/de/docs/Web/API/Clients)-Interfaces erstellt einen neuen Top-Level-Browsing-Kontext und lädt eine gegebene URL. Wenn das aufrufende Skript keine Berechtigung zum Anzeigen von Popups hat, wirft `openWindow()` einen `InvalidAccessError`.

In Firefox ist die Methode nur erlaubt, Popups anzuzeigen, wenn sie als Ergebnis eines Benachrichtigungsklick-Ereignisses aufgerufen wird.

In Chrome für Android kann die Methode stattdessen die URL in einem bestehenden Browsing-Kontext öffnen, der von einer zuvor zum Startbildschirm des Nutzers hinzugefügten [eigenständigen Webanwendung](/de/docs/Web/Progressive_web_apps) bereitgestellt wird. Seit Kurzem funktioniert dies auch in Chrome für Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Ein String, der die URL des Clients darstellt, den Sie im Fenster öffnen möchten. In der Regel muss dieser Wert eine URL aus demselben Ursprung wie das aufrufende Skript sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`WindowClient`](/de/docs/Web/API/WindowClient)-Objekt aufgelöst wird, wenn die URL aus demselben Ursprung wie der Service Worker stammt, oder andernfalls auf einen {{Glossary("null", "Nullwert")}}.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster im Ursprung der App [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) hat.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprung der App muss [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) aufweisen.

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
