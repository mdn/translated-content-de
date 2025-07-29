---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das **`ExtendableEvent`**-Interface verlängert die Lebensdauer der [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)- und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignisse, die im globalen Geltungsbereich als Teil des Service-Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass funktionale Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) erst ausgelöst werden, nachdem Datenbankschemata aktualisiert und veraltete Cache-Einträge gelöscht wurden.

Wenn [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des `ExtendableEvent`-Handlers aufgerufen wird, sollte der Browser einen `InvalidStateError` auslösen; beachten Sie auch, dass mehrmaliges Aufrufen diese stapelt und die daraus resultierenden Versprechen zur Liste der [extend lifetime promises](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises) hinzugefügt werden.

Dieses Interface erbt vom [`Event`](/de/docs/Web/API/Event)-Interface.

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist nur verfügbar, wenn der globale Geltungsbereich ein [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ist. Es ist nicht verfügbar, wenn es sich um ein [`Window`](/de/docs/Web/API/Window) oder den Geltungsbereich einer anderen Art von Worker handelt.

## Konstruktor

- [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent)
  - : Erstellt ein neues `ExtendableEvent`-Objekt.

## Instanz-Eigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Es soll im [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) [Ereignishandler](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers) für den [`installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Worker und im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) [Ereignishandler](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers) für den [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active)-Worker aufgerufen werden.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service-Worker-Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/)). Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) in [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Workers als installiert, bis das übergebene Versprechen erfolgreich aufgelöst wird. Das Versprechen wird aufgelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden oder wenn eine Ausnahme auftritt.

Der Codeausschnitt zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service-Worker verwendet werden. Obwohl in diesem Beispiel nur ein Cache vorhanden ist, kann derselbe Ansatz für mehrere Caches verwendet werden. Es wird eine Kurzbezeichnung für einen Cache auf einen spezifischen, versionierten Cachenamen abgebildet.

> [!NOTE]
> In Chrome sind Protokollierungsanweisungen über die "Inspect"-Schnittstelle für den relevanten Service-Worker zugänglich, der über chrome://serviceworker-internals aufgerufen wird.

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
      .then((cache) =>
        cache.addAll(
          urlsToPrefetch.map(
            (urlToPrefetch) => new Request(urlToPrefetch, { mode: "no-cors" }),
          ),
        ),
      )
      .then(() => {
        console.log("All resources have been fetched and cached.");
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

- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service-Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
