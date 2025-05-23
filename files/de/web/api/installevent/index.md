---
title: InstallEvent
slug: Web/API/InstallEvent
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}

Der Parameter, der in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis-Handler-Funktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht ausgelöst werden.

Diese Schnittstelle erbt von der [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- [`InstallEvent()`](/de/docs/Web/API/InstallEvent/InstallEvent) {{experimental_inline}}
  - : Erstellt ein neues `InstallEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

## Instanz-Methoden

_Erbt Methoden von seinem Elternobjekt, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) {{experimental_inline}}
  - : Gibt eine oder mehrere statische Routen an, die Regeln für das Abrufen festgelegter Ressourcen definieren, die bereits vor dem Start des Service Workers verwendet werden.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [prefetch live in Aktion](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) in [`ServiceWorkerGlobalScope.oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Workers als installiert, bis das übergebene Promise erfolgreich aufgelöst wird. Das Promise wird aufgelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden oder wenn eine Ausnahme auftritt.

Der Codeausschnitt zeigt auch eine bewährte Vorgehensweise für die Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl dieses Beispiel nur einen Cache hat, können Sie diesen Ansatz für mehrere Caches verwenden. Der Code ordnet einem Cache einen verkürzten Bezeichner zu einem spezifischen, versionierten Cache-Namen zu.

> [!NOTE]
> Protokollierungsanweisungen sind in Google Chrome über die "Inspect"-Schnittstelle für den entsprechenden Service Worker sichtbar, der über chrome://serviceworker-internals aufgerufen wird.

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

- [`install` Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
