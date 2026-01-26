---
title: "WindowClient: focus() method"
short-title: focus()
slug: Web/API/WindowClient/focus
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`focus()`**-Methode der [`WindowClient`](/de/docs/Web/API/WindowClient)-Schnittstelle gibt dem aktuellen Client den Benutzereingabefokus und gibt ein {{jsxref("Promise")}} zurück, das auf den vorhandenen [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Syntax

```js-nolint
focus()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf den vorhandenen [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster im Ursprung der App eine [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) hat.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprung der App muss eine [transiente Aktivierung](/de/docs/Web/Security/Defenses/User_activation) haben.

## Beispiele

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
