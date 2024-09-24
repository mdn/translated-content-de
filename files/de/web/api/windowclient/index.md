---
title: WindowClient
slug: Web/API/WindowClient
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `WindowClient`-Interface der [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API) repräsentiert den Bereich eines Service-Worker-Clients, der ein Dokument in einem Browserkontext ist, das von einem aktiven Worker kontrolliert wird. Der Service-Worker-Client wählt unabhängig einen Service-Worker für sein eigenes Laden und seine Subressourcen aus und verwendet diesen.

{{InheritanceDiagram}}

## Instanzmethoden

`WindowClient` erbt Methoden von seinem übergeordneten Interface, {{domxref("Client")}}.

- {{domxref("WindowClient.focus()")}}
  - : Gibt dem aktuellen Client den Eingabefokus.
- {{domxref("WindowClient.navigate()")}}
  - : Lädt eine angegebene URL auf einer kontrollierten Client-Seite.

## Instanzeigenschaften

`WindowClient` erbt Eigenschaften von seinem übergeordneten Interface, {{domxref("Client")}}.

- {{domxref("WindowClient.ancestorOrigins")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das die Vorfahrenursprünge des durch diesen `WindowClient` dargestellten Browserkontextes in umgekehrter Reihenfolge angibt.
- {{domxref("WindowClient.focused")}} {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob der aktuelle Client den Fokus hat.
- {{domxref("WindowClient.visibilityState")}} {{ReadOnlyInline}}
  - : Gibt die Sichtbarkeit des aktuellen Clients an. Dieser Wert kann einer von `"hidden"`, `"visible"` oder `"prerender"` sein.

## Beispiel

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // Dies überprüft, ob der aktuelle Client bereits geöffnet ist und
  // fokussiert, falls dies der Fall ist
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) {
            client.focus();
            break;
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

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Service-Worker-Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
