---
title: WindowClient
slug: Web/API/WindowClient
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `WindowClient`-Interface der [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API) repräsentiert den Umfang eines Service-Worker-Clients, der ein Dokument in einem Browser-Kontext ist und von einem aktiven Worker gesteuert wird. Der Service-Worker-Client wählt unabhängig einen Service-Worker aus und verwendet ihn für seine eigene Lade- und Unterressourcen.

{{InheritanceDiagram}}

## Instanzmethoden

_`WindowClient` erbt Methoden von seinem Elterninterface, [`Client`](/de/docs/Web/API/Client)._

- [`WindowClient.focus()`](/de/docs/Web/API/WindowClient/focus)
  - : Gibt dem aktuellen Client den Fokus für Benutzereingaben.
- [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate)
  - : Lädt eine angegebene URL in eine kontrollierte Client-Seite.

## Instanzeigenschaften

_`WindowClient` erbt Eigenschaften von seinem Elterninterface, [`Client`](/de/docs/Web/API/Client)._

- [`WindowClient.ancestorOrigins`](/de/docs/Web/API/WindowClient/ancestorOrigins) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das die Ursprünge der Vorfahren des durch dieses `WindowClient` repräsentierten Browser-Kontextes in umgekehrter Reihenfolge angibt.
- [`WindowClient.focused`](/de/docs/Web/API/WindowClient/focused) {{ReadOnlyInline}}
  - : Ein Boolean, das angibt, ob der aktuelle Client den Fokus hat.
- [`WindowClient.visibilityState`](/de/docs/Web/API/WindowClient/visibilityState) {{ReadOnlyInline}}
  - : Gibt die Sichtbarkeit des aktuellen Clients an. Dieser Wert kann `"hidden"`, `"visible"` oder `"prerender"` sein.

## Beispiel

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
- [Beispielcode für grundlegende Service-Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
