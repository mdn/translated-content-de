---
title: WindowClient
slug: Web/API/WindowClient
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die `WindowClient`-Schnittstelle der [ServiceWorker API](/de/docs/Web/API/Service_Worker_API) repräsentiert einen Service-Worker-Client, der ein Dokument in einem Browsing-Kontext ist und von einem aktiven Worker gesteuert wird. Der Service-Worker-Client wählt unabhängig einen Service Worker aus und verwendet ihn zum Laden seiner eigenen Inhalte und Unterressourcen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`WindowClient` erbt Eigenschaften von seiner übergeordneten Schnittstelle [`Client`](/de/docs/Web/API/Client)._

- [`WindowClient.ancestorOrigins`](/de/docs/Web/API/WindowClient/ancestorOrigins) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das die Origins der übergeordneten Browsing-Kontexte des durch diesen `WindowClient` repräsentierten Browsing-Kontexts in umgekehrter Reihenfolge angibt.
- [`WindowClient.focused`](/de/docs/Web/API/WindowClient/focused) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der aktuelle Client den Fokus hat.
- [`WindowClient.visibilityState`](/de/docs/Web/API/WindowClient/visibilityState) {{ReadOnlyInline}}
  - : Gibt die Sichtbarkeit des aktuellen Clients an. Der Wert kann `"hidden"` oder `"visible"` sein.

## Instanzmethoden

_`WindowClient` erbt Methoden von seiner übergeordneten Schnittstelle [`Client`](/de/docs/Web/API/Client)._

- [`WindowClient.focus()`](/de/docs/Web/API/WindowClient/focus)
  - : Setzt den Eingabefokus auf den aktuellen Client.
- [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate)
  - : Lädt eine angegebene URL in eine gesteuerte Client-Seite.

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

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
