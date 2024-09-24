---
title: "Clients: openWindow()-Methode"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`openWindow()`**-Methode der {{domxref("Clients")}}-Schnittstelle erstellt einen neuen obersten Browsing-Kontext und lädt eine gegebene URL. Wenn das aufrufende Skript nicht die Erlaubnis hat, Popups anzuzeigen, wirft `openWindow()` einen `InvalidAccessError`.

In Firefox ist die Methode nur erlaubt, Popups anzuzeigen, wenn sie als Ergebnis eines Benachrichtigungsklickereignisses aufgerufen wird.

In Chrome für Android kann die Methode stattdessen die URL in einem bestehenden Browsing-Kontext öffnen, der von einer zuvor dem Startbildschirm des Benutzers hinzugefügten [Stand-Alone-Web-App](/de/docs/Web/Progressive_web_apps) bereitgestellt wird. Seit kurzem funktioniert dies auch in Chrome für Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Ein String, der die URL des Clients darstellt, den Sie im Fenster öffnen möchten. Im Allgemeinen muss dieser Wert eine URL aus demselben Ursprung wie das aufrufende Skript sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in ein {{domxref("WindowClient")}}-Objekt auflöst, wenn die URL aus demselben Ursprung wie der Service-Worker stammt, oder andernfalls ein {{Glossary("null", "null value")}}.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Das Versprechen wird mit dieser Ausnahme zurückgewiesen, wenn keines der Fenster im Ursprungs der App eine [vorübergehende Aktivierung](/de/docs/Web/Security/User_activation) hat.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprungs der App muss [vorübergehende Aktivierung](/de/docs/Web/Security/User_activation) haben.

## Beispiele

```js
// Senden Sie eine Benachrichtigung an das Betriebssystem, wenn zutreffend
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "Klicken Sie hier, um Ihre Nachrichten anzusehen.",
    data: { url: `${self.location.origin}/some/path` },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification(
    "Sie haben Nachrichten!",
    notificationObject,
  );
}

// Benachrichtigungsklick-Ereignislistener
self.addEventListener("notificationclick", (e) => {
  // Schließen Sie das Benachrichtigungs-Popout
  e.notification.close();
  // Holen Sie sich alle Fenster-Clients
  e.waitUntil(
    clients.matchAll({ type: "window" }).then((clientsArr) => {
      // Wenn ein Fenster-Tab existiert, der die Ziel-URL bereits hat, fokussieren Sie diesen;
      const hadWindowToFocus = clientsArr.some((windowClient) =>
        windowClient.url === e.notification.data.url
          ? (windowClient.focus(), true)
          : false,
      );
      // Andernfalls öffnen Sie einen neuen Tab zur entsprechenden URL und fokussieren ihn.
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
