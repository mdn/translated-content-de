---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das **`ExtendableEvent`**-Interface verlängert die Lebensdauer der [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse, die im globalen Kontext als Teil des Service-Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) gesendet werden, bis Datenbankschemata aktualisiert und veraltete Cache-Einträge gelöscht wurden.

Wenn [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des `ExtendableEvent`-Handlers aufgerufen wird, sollte der Browser einen `InvalidStateError` werfen; beachten Sie auch, dass mehrfache Aufrufe gestapelt werden, und die resultierenden Versprechen der Liste der [Lebenszeit-Verlängerungsversprechen](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises) hinzugefügt werden.

Dieses Interface erbt vom [`Event`](/de/docs/Web/API/Event)-Interface.

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist nur verfügbar, wenn der globale Kontext ein [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ist. Es ist nicht verfügbar, wenn es ein [`Window`](/de/docs/Web/API/Window) oder der Kontext einer anderen Art von Worker ist.

## Konstruktor

- [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent)
  - : Erstellt ein neues `ExtendableEvent`-Objekt.

## Instanz-Eigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt aber Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Es soll im [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) [Ereignishandler](/de/docs/Web/Events/Event_handlers) für den [`installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Worker und im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) [Ereignishandler](/de/docs/Web/Events/Event_handlers) für den [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker aufgerufen werden.

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker Prefetch Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) in [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Workers als installiert, bis das übergebene Versprechen erfolgreich aufgelöst wird. Das Versprechen wird aufgelöst, wenn alle Ressourcen abgerufen und im Cache gespeichert wurden oder wenn eine Ausnahme auftritt.

Der Code zeigt auch eine bewährte Methode zur Versionsverwaltung von Caches, die vom Service Worker verwendet werden. Obwohl es in diesem Beispiel nur einen Cache gibt, kann derselbe Ansatz für mehrere Caches verwendet werden. Es ordnet eine Kurzbezeichnung für einen Cache einem bestimmten, versionierten Cache-Namen zu.

> [!NOTE]
> In Chrome sind Protokollierungsaussagen über die "Inspect"-Schnittstelle für den relevanten Service Worker zugänglich unter chrome://serviceworker-internals sichtbar.

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: `prefetch-cache-v${CACHE_VERSION}`,
};

self.addEventListener("install", (event) => {
  const urlsToPrefetch = [
    "./static/pre_fetched.txt",
    "./static/pre_fetched.html",
    "https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif",
  ];

  console.log(
    "Handling install event. Resources to pre-fetch:",
    urlsToPrefetch,
  );

  event.waitUntil(
    caches
      .open(CURRENT_CACHES["prefetch"])
      .then((cache) => {
        return cache
          .addAll(
            urlsToPrefetch.map((urlToPrefetch) => {
              return new Request(urlToPrefetch, { mode: "no-cors" });
            }),
          )
          .then(() => {
            console.log("All resources have been fetched and cached.");
          });
      })
      .catch((error) => {
        console.error("Pre-fetching failed:", error);
      }),
  );
});
```

> [!NOTE]
> Beim Abrufen von Ressourcen ist es sehr wichtig, `{mode: 'no-cors'}` zu verwenden, wenn die Möglichkeit besteht, dass die Ressourcen von einem Server bereitgestellt werden, der {{Glossary("CORS", "CORS")}} nicht unterstützt. In diesem Beispiel unterstützt [www.chromium.org](https://www.chromium.org/) kein CORS.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
