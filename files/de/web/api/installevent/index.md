---
title: Installations-Ereignis
slug: Web/API/InstallEvent
l10n:
  sourceCommit: b9632758ad47d74645941614c67b1f047d16bed9
---

{{APIRef("Service Workers API")}}

Der Parameter, der an eine {{DOMxRef("ServiceWorkerGlobalScope.install_event", "install")}}-Ereignishandlerfunktion übergeben wird, die `InstallEvent`-Schnittstelle, repräsentiert eine Installationsaktion, die auf dem {{domxref("ServiceWorkerGlobalScope")}} eines {{domxref("ServiceWorker")}} ausgelöst wird. Als Kind von {{domxref("ExtendableEvent")}} stellt sie sicher, dass funktionale Ereignisse wie {{domxref("FetchEvent")}} während der Installation nicht ausgelöst werden.

Diese Schnittstelle erbt von der {{domxref("ExtendableEvent")}}-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("InstallEvent.InstallEvent", "InstallEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `InstallEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

- {{domxref("InstallEvent.addRoutes()", "addRoutes()")}} {{experimental_inline}}
  - : Gibt eine oder mehrere statische Routen an, die Regeln für das Abrufen bestimmter Ressourcen definieren, die sogar vor dem Start des Service Workers verwendet werden.

## Beispiele

Dieses Code-Snippet stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch live in Aktion](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} in {{domxref("ServiceWorkerGlobalScope.install_event", "ServiceWorkerGlobalScope.oninstall")}} auf und verzögert die Behandlung des {{domxref("ServiceWorkerRegistration.installing")}} Workers als installiert, bis das übergebene Versprechen erfolgreich aufgelöst wurde. Das Versprechen wird gelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden oder wenn ein Fehler auftritt.

Das Code-Snippet zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl dieses Beispiel nur einen Cache hat, können Sie diesen Ansatz für mehrere Caches verwenden. Der Code ordnet einer Kurzkennung für einen Cache einen spezifischen, versionierten Cache-Namen zu.

> [!NOTE]
> Protokollierungsanweisungen sind in Google Chrome über die "Inspect"-Schnittstelle für den betreffenden Service Worker sichtbar, aufgerufen über chrome://serviceworker-internals.

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

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`install`-Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- {{domxref("NotificationEvent")}}
- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
