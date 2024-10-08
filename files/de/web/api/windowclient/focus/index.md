---
title: "WindowClient: focus()-Methode"
short-title: focus()
slug: Web/API/WindowClient/focus
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`focus()`**-Methode des [`WindowClient`](/de/docs/Web/API/WindowClient)-Interfaces gibt dem aktuellen Client den Benutzereingabefokus und gibt ein {{jsxref("Promise")}} zurück, das auf den bestehenden [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Syntax

```js-nolint
focus()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf den bestehenden [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit dieser Ausnahme zurückgewiesen, wenn keines der Fenster im Ursprung der App eine [vorübergehende Aktivierung](/de/docs/Web/Security/User_activation) aufweist.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprung der App muss eine [vorübergehende Aktivierung](/de/docs/Web/Security/User_activation) aufweisen.

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
