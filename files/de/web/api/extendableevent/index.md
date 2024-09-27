---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das **`ExtendableEvent`**-Interface verlängert die Lebensdauer der [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)- und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignisse, die im globalen Gültigkeitsbereich als Teil des Service Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) ausgelöst werden, bevor Datenbankschemata aktualisiert und veraltete Cache-Einträge gelöscht werden.

Wenn [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des `ExtendableEvent`-Handlers aufgerufen wird, sollte der Browser einen `InvalidStateError` auslösen; beachten Sie auch, dass sich mehrere Aufrufe stapeln, und die resultierenden Versprechen zur Liste der [Erweiterten-Lebensdauer-Versprechen](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises) hinzugefügt werden.

Dieses Interface erbt vom [`Event`](/de/docs/Web/API/Event)-Interface.

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist nur verfügbar, wenn der globale Gültigkeitsbereich eine [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ist. Es ist nicht verfügbar, wenn es sich um ein [`Window`](/de/docs/Web/API/Window) oder den Gültigkeitsbereich eines anderen Arbeitertyps handelt.

## Konstruktor

- [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent)
  - : Erstellt ein neues `ExtendableEvent`-Objekt.

## Instanz-Eigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Es soll im [Ereignishandler](/de/docs/Web/Events/Event_handlers) von [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) für den [`installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Worker und im [Ereignishandler](/de/docs/Web/Events/Event_handlers) von [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) für den [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active)-Worker aufgerufen werden.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch-Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) in [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Workers als installiert, bis das übergebene Versprechen erfolgreich aufgelöst wird. Das Versprechen wird aufgelöst, wenn alle Ressourcen abgerufen und im Cache gespeichert wurden oder wenn ein Ausnahmefall auftritt.

Der Codeausschnitt zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl in diesem Beispiel nur ein Cache vorhanden ist, kann derselbe Ansatz für mehrere Caches verwendet werden. Er ordnet einem Cache einen spezifischen, versionierten Cachename zu.

> [!NOTE]
> In Chrome sind Protokollierungsaussagen über die "Untersuchen"-Schnittstelle für den entsprechenden Service Worker zugänglich unter chrome://serviceworker-internals.

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
> Beim Abrufen von Ressourcen ist es sehr wichtig, `{mode: 'no-cors'}` zu verwenden, wenn die Möglichkeit besteht, dass die Ressourcen von einem Server bereitgestellt werden, der [CORS](/de/docs/Glossary/CORS) nicht unterstützt. In diesem Beispiel unterstützt [www.chromium.org](https://www.chromium.org/) kein CORS.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
