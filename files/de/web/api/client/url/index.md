---
title: "Client: url Eigenschaft"
short-title: url
slug: Web/API/Client/url
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`url`** schreibgeschützte Eigenschaft der [`Client`](/de/docs/Web/API/Client)-Schnittstelle gibt die URL des aktuellen Service-Worker-Clients zurück.

Beachten Sie, dass die `url`-Eigenschaft nicht aktualisiert wird, es sei denn, eine neue Seite wird tatsächlich geladen. Das bedeutet, dass sie nicht aktualisiert wird, wenn der Benutzer innerhalb derselben Seite mit einem URL-Fragment navigiert oder wenn eine {{Glossary("SPA", "Single-Page-Anwendung (SPA)")}} ein Navigationsevent abfängt (zum Beispiel unter Verwendung der [Navigation API](/de/docs/Web/API/Navigation_API)) und den Seiteninhalt mit clientseitigem Code aktualisiert.

## Wert

Ein String.

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
          if (client.url === "/" && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow("/");
        }
      }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
