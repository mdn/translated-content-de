---
title: "WindowClient: visibilityState-Eigenschaft"
short-title: visibilityState
slug: Web/API/WindowClient/visibilityState
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`visibilityState`**-Eigenschaft des {{domxref("WindowClient")}}-Interfaces gibt die Sichtbarkeit des aktuellen Clients an. Dieser Wert kann `"hidden"`, `"visible"` oder `"prerender"` sein.

## Wert

Ein String (siehe {{domxref("Document.visibilityState")}} für Werte).

## Beispiele

```js
event.waitUntil(
  clients
    .matchAll({
      type: "window",
    })
    .then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) {
          if (client.visibilityState === "hidden") return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
