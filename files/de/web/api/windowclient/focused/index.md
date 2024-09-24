---
title: "WindowClient: focused-Eigenschaft"
short-title: focused
slug: Web/API/WindowClient/focused
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`focused`**-Schreibgeschützte Eigenschaft des
{{domxref("WindowClient")}}-Interface ist ein boolescher Wert, der angibt, ob der aktuelle Client den Fokus hat.

## Wert

Ein boolescher Wert.

## Beispiele

```js
self.addEventListener("notificationclick", (event) => {
  console.log("Bei Benachrichtigungsklick: ", event.notification.tag);
  event.notification.close();

  // Dies prüft, ob das aktuelle Fenster bereits geöffnet ist und
  // fokussiert es, falls es geöffnet ist
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) {
            if (!client.focused) return client.focus();
          }
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
