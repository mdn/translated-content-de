---
title: "WindowClient: Sichtbarkeitsstatus-Eigenschaft"
short-title: visibilityState
slug: Web/API/WindowClient/visibilityState
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`visibilityState`**-Eigenschaft des [`WindowClient`](/de/docs/Web/API/WindowClient)-Interfaces gibt die Sichtbarkeit des aktuellen Clients an. Dieser Wert kann einer der folgenden sein: `"hidden"`, `"visible"` oder `"prerender"`.

## Wert

Ein String (siehe [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) für mögliche Werte).

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
