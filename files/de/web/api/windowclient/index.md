---
title: WindowClient
slug: Web/API/WindowClient
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `WindowClient`-Interface der [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API) repräsentiert den Gültigkeitsbereich eines Service-Worker-Clients, der ein Dokument in einem Browsing-Kontext ist, das von einem aktiven Worker gesteuert wird. Der Service-Worker-Client wählt und verwendet unabhängig einen Service Worker für sein eigenes Laden und seine Unterressourcen.

{{InheritanceDiagram}}

## Instanzmethoden

_`WindowClient` erbt Methoden von seinem Eltern-Interface, [`Client`](/de/docs/Web/API/Client)._

- [`WindowClient.focus()`](/de/docs/Web/API/WindowClient/focus)
  - : Gibt dem aktuellen Client den Benutzereingabefokus.
- [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate)
  - : Lädt eine angegebene URL in eine kontrollierte Client-Seite.

## Instanzeigenschaften

_`WindowClient` erbt Eigenschaften von seinem Eltern-Interface, [`Client`](/de/docs/Web/API/Client)._

- [`WindowClient.ancestorOrigins`](/de/docs/Web/API/WindowClient/ancestorOrigins) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das die Vorfahrenursprünge des vom `WindowClient` dargestellten Browsing-Kontexts in umgekehrter Reihenfolge angibt.
- [`WindowClient.focused`](/de/docs/Web/API/WindowClient/focused) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob der aktuelle Client den Fokus hat.
- [`WindowClient.visibilityState`](/de/docs/Web/API/WindowClient/visibilityState) {{ReadOnlyInline}}
  - : Gibt die Sichtbarkeit des aktuellen Clients an. Dieser Wert kann `"hidden"` oder `"visible"` sein.

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
- [Grundlegendes Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
