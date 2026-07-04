---
title: InstallEvent
slug: Web/API/InstallEvent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Service Workers API")}}

Der Parameter, der an eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignishandler-Funktion übergeben wird, die `InstallEvent`-Schnittstelle, repräsentiert eine Installationsaktion, die im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt sie sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.

Diese Schnittstelle erbt von der [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- [`InstallEvent()`](/de/docs/Web/API/InstallEvent/InstallEvent)
  - : Erstellt ein neues `InstallEvent`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes)
  - : Gibt eine oder mehrere statische Routen an, die Regeln für das Abrufen bestimmter Ressourcen definieren, die sogar vor dem Start des Service Workers verwendet werden.

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch live ausführen](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) in [`ServiceWorkerGlobalScope.oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Workers als installiert, bis das übergebene Versprechen erfolgreich aufgelöst wird. Das Versprechen wird aufgelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden oder wenn eine Ausnahme auftritt.

Der Codeausschnitt zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl dieses Beispiel nur einen Cache hat, können Sie diesen Ansatz für mehrere Caches verwenden. Der Code ordnet einem Cache einen kürzeren Bezeichner einem bestimmten, versionierten Cachename zu.

> [!NOTE]
> Protokollaussagen sind in Google Chrome über die "Inspect"-Schnittstelle für den relevanten Service Worker sichtbar, auf den über chrome://serviceworker-internals zugegriffen wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`install`-Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
