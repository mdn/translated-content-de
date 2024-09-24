---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ExtendableEvent`**-Schnittstelle verlängert die Lebensdauer von den auf dem globalen Gültigkeitsbereich ausgelösten [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignissen als Teil des Lebenszyklus eines Service Workers. Dies stellt sicher, dass keine funktionalen Ereignisse (wie {{domxref("FetchEvent")}}) ausgelöst werden, bis es Datenbankschemata aktualisiert und veraltete Cache-Einträge löscht.

Wenn {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} außerhalb des `ExtendableEvent`-Handlers aufgerufen wird, sollte der Browser einen `InvalidStateError` auslösen; beachten Sie auch, dass mehrere Aufrufe sich ansammeln, und die resultierenden Promises zur Liste der [verlängerten Lebensdauer-Promises](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises) hinzugefügt werden.

Diese Schnittstelle erbt von der {{domxref("Event")}} Schnittstelle.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist nur verfügbar, wenn der globale Gültigkeitsbereich ein {{domxref("ServiceWorkerGlobalScope")}} ist. Sie ist nicht verfügbar, wenn es sich um ein {{domxref("Window")}} oder den Gültigkeitsbereich einer anderen Art von Worker handelt.

## Konstruktor

- {{domxref("ExtendableEvent.ExtendableEvent()", "ExtendableEvent()")}}
  - : Erstellt ein neues `ExtendableEvent`-Objekt.

## Instanz-Eigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, {{domxref("Event")}}_.

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : Verlängert die Lebensdauer des Ereignisses. Es ist beabsichtigt, im [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-[Ereignishandler](/de/docs/Web/Events/Event_handlers) für den {{domxref("ServiceWorkerRegistration.installing", "installing")}} Worker und im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-[Ereignishandler](/de/docs/Web/Events/Event_handlers) für den {{domxref("ServiceWorkerRegistration.active", "active")}} Worker aufgerufen zu werden.

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker Prefetch Sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch-Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft {{domxref("ExtendableEvent.waitUntil()")}} in {{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}} auf und verzögert die Behandlung des {{domxref("ServiceWorkerRegistration.installing")}} Workers als installiert, bis das übergebene Promise erfolgreich gelöst wird. Das Promise wird aufgelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden, oder wenn eine Ausnahme auftritt.

Das Codebeispiel zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl in diesem Beispiel nur ein Cache vorhanden ist, kann der gleiche Ansatz für mehrere Caches verwendet werden. Es ordnet einem Cache eine abgekürzte Kennung zu einem spezifischen, versionierten Cachenamen zu.

> [!NOTE]
> In Chrome sind Protokollierungsanweisungen über die "Inspect"-Oberfläche für den relevanten Service Worker sichtbar, auf die über chrome://serviceworker-internals zugegriffen wird.

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
> Beim Abrufen von Ressourcen ist es sehr wichtig, `{mode: 'no-cors'}` zu verwenden, wenn die Möglichkeit besteht, dass die Ressourcen von einem Server bereitgestellt werden, der {{glossary("CORS")}} nicht unterstützt. In diesem Beispiel unterstützt [www.chromium.org](https://www.chromium.org/) kein CORS.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Arbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
