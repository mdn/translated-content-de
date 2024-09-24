---
title: "WindowClient: focus()-Methode"
short-title: focus()
slug: Web/API/WindowClient/focus
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`focus()`**-Methode der {{domxref("WindowClient")}}-Schnittstelle gibt dem aktuellen Client den Benutzerfokus und gibt ein {{jsxref("Promise")}} zurück, das auf das bestehende {{domxref("WindowClient")}} aufgelöst wird.

## Syntax

```js-nolint
focus()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf das bestehende {{domxref("WindowClient")}} aufgelöst wird.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Das Promise wird mit dieser Ausnahme abgelehnt, wenn keines der Fenster im Ursprungsbereich der App [flüchtige Aktivierung](/de/docs/Web/Security/User_activation) hat.

## Sicherheitsanforderungen

- Mindestens ein Fenster im Ursprungsbereich der App muss [flüchtige Aktivierung](/de/docs/Web/Security/User_activation) haben.

## Beispiele

```js
self.addEventListener("notificationclick", (event) => {
  console.log("Bei Klick auf Benachrichtigung: ", event.notification.tag);
  event.notification.close();

  // Dies prüft, ob das aktuelle Fenster bereits geöffnet ist und
  // fokussiert es, wenn dies der Fall ist.
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
