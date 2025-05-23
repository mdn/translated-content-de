---
title: Clients
slug: Web/API/Clients
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `Clients`-Interface bietet Zugriff auf [`Client`](/de/docs/Web/API/Client)-Objekte. Greifen Sie darauf mit `[`self`](/de/docs/Web/API/ServiceWorkerGlobalScope).clients` innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) zu.

## Instanzmethoden

- [`Clients.get()`](/de/docs/Web/API/Clients/get)
  - : Gibt ein {{jsxref("Promise")}} für einen [`Client`](/de/docs/Web/API/Client) zurück, der mit einer gegebenen [`id`](/de/docs/Web/API/Client/id) übereinstimmt.
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll)
  - : Gibt ein {{jsxref("Promise")}} für ein Array von [`Client`](/de/docs/Web/API/Client)-Objekten zurück. Ein Optionsargument ermöglicht es Ihnen, die Typen der zurückgegebenen Clients zu steuern.
- [`Clients.openWindow()`](/de/docs/Web/API/Clients/openWindow)
  - : Öffnet ein neues Browserfenster für eine gegebene URL und gibt ein {{jsxref("Promise")}} für den neuen [`WindowClient`](/de/docs/Web/API/WindowClient) zurück.
- [`Clients.claim()`](/de/docs/Web/API/Clients/claim)
  - : Ermöglicht einem aktiven Service Worker, sich selbst als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für alle Clients innerhalb seines [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) zu setzen.

## Beispiele

Das folgende Beispiel zeigt ein vorhandenes Chat-Fenster oder erstellt ein neues, wenn der Benutzer auf eine Benachrichtigung klickt.

```js
addEventListener("notificationclick", (event) => {
  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({
        includeUncontrolled: true,
      });

      let chatClient;

      // Let's see if we already have a chat window open:
      for (const client of allClients) {
        const url = new URL(client.url);

        if (url.pathname === "/chat/") {
          // Excellent, let's use it!
          client.focus();
          chatClient = client;
          break;
        }
      }

      // If we didn't find an existing chat window,
      // open a new one:
      chatClient ??= await clients.openWindow("/chat/");

      // Message the client:
      chatClient.postMessage("New chat messages!");
    })(),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
