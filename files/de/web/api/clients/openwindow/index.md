---
title: "Clients: openWindow()-Methode"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die Methode **`openWindow()`** des Interfaces [`Clients`](/de/docs/Web/API/Clients)
erstellt einen neuen Browsing-Kontext der obersten Ebene und lädt eine angegebene URL. Wenn das aufrufende
Skript keine Berechtigung zum Anzeigen von Pop-ups hat, löst `openWindow()` einen
`InvalidAccessError` aus.

In Firefox darf die Methode Pop-ups nur anzeigen, wenn sie als Ergebnis eines
Klickereignisses auf eine Benachrichtigung aufgerufen wird.

In Chrome für Android kann die Methode stattdessen die URL in einem vorhandenen Browsing-Kontext
einer [eigenständigen Web-App](/de/docs/Web/Progressive_web_apps) öffnen, die zuvor zum Startbildschirm des Benutzers hinzugefügt wurde. Seit Kurzem funktioniert dies auch in
Chrome für Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Ein String, der die URL des Clients darstellt, den Sie im
    Fenster öffnen möchten. Im Allgemeinen muss dieser Wert eine URL derselben Origin wie das aufrufende
    Skript sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WindowClient`](/de/docs/Web/API/WindowClient)-Objekt aufgelöst wird, wenn die
URL dieselbe Origin wie der Service Worker hat, oder andernfalls zu einem {{Glossary("null", "null-Wert")}}.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster in der Origin der App über eine [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) verfügt.

## Sicherheitsanforderungen

- Mindestens ein Fenster in der Origin der App muss über eine [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) verfügen.

## Beispiele

### Öffnen eines Fensters bei einem Klick auf eine Benachrichtigung

In diesem Beispiel erstellt ein Service Worker eine Benachrichtigung mit einer zugeordneten URL, die innerhalb des Geltungsbereichs des Service Workers liegt, und zeigt sie anschließend an. Wenn der Benutzer auf die Benachrichtigung klickt:

- Wenn die Seite unter der URL der Benachrichtigung bereits geöffnet ist, fokussiert der Service Worker sie.
- Andernfalls öffnet der Service Worker die Seite in einem neuen Fenster.

Beachten Sie, dass die Eigenschaft [`Client.url`](/de/docs/Web/API/Client/url) nicht aktualisiert wird, sofern nicht tatsächlich eine neue Seite geladen wird. Das bedeutet, dass sie nicht aktualisiert wird, wenn der Benutzer innerhalb derselben Seite mithilfe eines URL-Fragments navigiert oder wenn eine {{Glossary("SPA", "Single-Page-App (SPA)")}} ein Navigationsereignis abfängt (beispielsweise mithilfe der [Navigation API](/de/docs/Web/API/Navigation_API)) und den Seiteninhalt mithilfe von clientseitigem Code aktualisiert. Daher ist diese Technik nicht für SPAs geeignet.

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
