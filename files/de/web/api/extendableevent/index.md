---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das **`ExtendableEvent`**-Interface verlängert die Lebensdauer der [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)- und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignisse, die im globalen Kontext als Teil des Service Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie zum Beispiel [`FetchEvent`](/de/docs/Web/API/FetchEvent)) ausgelöst werden, bis Datenbankschemas aktualisiert und veraltete Cache-Einträge gelöscht wurden.

Wenn [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) außerhalb des `ExtendableEvent`-Handlers aufgerufen wird, sollte der Browser einen `InvalidStateError` auslösen; beachten Sie auch, dass mehrere Aufrufe aufgestapelt werden und die resultierenden Versprechen zur Liste der [erweiterten Lebensdauerversprechen](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises) hinzugefügt werden.

Dieses Interface erbt vom [`Event`](/de/docs/Web/API/Event)-Interface.

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist nur verfügbar, wenn der globale Kontext eine [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ist. Es ist nicht verfügbar, wenn es sich um ein [`Window`](/de/docs/Web/API/Window) oder den Kontext eines anderen Arbeitskontexts handelt.

## Konstruktor

- [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent)
  - : Erstellt ein neues `ExtendableEvent`-Objekt.

## Instanzeigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem übergeordneten Interface [`Event`](/de/docs/Web/API/Event)._

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface [`Event`](/de/docs/Web/API/Event)_.

- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Es soll im [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) [Ereignishandler](/de/docs/Web/Events/Event_handlers) für den [`installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Worker und im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) [Ereignishandler](/de/docs/Web/Events/Event_handlers) für den [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active)-Worker aufgerufen werden.

## Beispiele

Dieser Code-Schnipsel stammt aus dem [Beispiel zum Service Worker-Prefetching](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch-Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) in [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Workers bis zum erfolgreichen Abschluss des übergebenen Versprechens. Das Versprechen wird aufgelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden, oder anderweitig, wenn eine Ausnahme auftritt.

Der Code-Schnipsel zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl in diesem Beispiel nur ein Cache vorhanden ist, kann derselbe Ansatz für mehrere Caches verwendet werden. Es ordnet einem Cache eine Kurzidentifikation einem spezifischen, versionierten Cachenamen zu.

> [!NOTE]
> In Chrome sind Protokollierungsanweisungen über die "Inspect"-Oberfläche des relevanten Service Workers zugänglich, die über chrome://serviceworker-internals aufgerufen wird.

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
> Beim Abrufen von Ressourcen ist es äußerst wichtig, `{mode: 'no-cors'}` zu verwenden, wenn die Möglichkeit besteht, dass die Ressourcen von einem Server bereitgestellt werden, der {{Glossary("CORS", "CORS")}} nicht unterstützt. In diesem Beispiel unterstützt [www.chromium.org](https://www.chromium.org/) kein CORS.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
