---
title: Clients
slug: Web/API/Clients
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `Clients`-Interface bietet Zugriff auf {{domxref("Client")}}-Objekte. Sie können darauf über `{{domxref("ServiceWorkerGlobalScope", "self")}}.clients` innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) zugreifen.

## Instanzmethoden

- {{domxref("Clients.get()")}}
  - : Gibt ein {{jsxref("Promise")}} für ein {{domxref("Client")}} zurück, das mit einer gegebenen {{domxref("Client.id", "id")}} übereinstimmt.
- {{domxref("Clients.matchAll()")}}
  - : Gibt ein {{jsxref("Promise")}} für ein Array von {{domxref("Client")}}-Objekten zurück. Ein Optionsargument ermöglicht es Ihnen, die Arten von Clients zu steuern, die zurückgegeben werden.
- {{domxref("Clients.openWindow()")}}
  - : Öffnet ein neues Browserfenster für eine gegebene URL und gibt ein {{jsxref("Promise")}} für das neue {{domxref("WindowClient")}} zurück.
- {{domxref("Clients.claim()")}}
  - : Ermöglicht einem aktiven Service Worker, sich selbst als {{domxref("ServiceWorkerContainer.controller", "Controller")}} für alle Clients innerhalb seines {{domxref("ServiceWorkerRegistration.scope", "Bereichs")}} festzulegen.

## Beispiele

Das folgende Beispiel zeigt ein vorhandenes Chatfenster oder erstellt ein neues, wenn der Benutzer auf eine Benachrichtigung klickt.

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
      if (!chatClient) {
        chatClient = await clients.openWindow("/chat/");
      }

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
