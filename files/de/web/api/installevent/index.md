---
title: InstallEvent
slug: Web/API/InstallEvent
l10n:
  sourceCommit: b9632758ad47d74645941614c67b1f047d16bed9
---

{{APIRef("Service Workers API")}}

Das in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignishandlerfunktion übergebene Parameter, das `InstallEvent`-Interface, stellt eine Installationsaktion dar, die an das [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht ausgelöst werden.

Dieses Interface erbt vom [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Interface.

{{InheritanceDiagram}}

## Konstruktor

- [`InstallEvent()`](/de/docs/Web/API/InstallEvent/InstallEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `InstallEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) {{experimental_inline}}
  - : Gibt eine oder mehrere statische Routen an, die Regeln für das Abrufen spezifizierter Ressourcen definieren, welche bereits vor dem Start des Service Workers verwendet werden.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel für Service Worker Prefetch](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch live ausführen](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der Code ruft [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) im [`ServiceWorkerGlobalScope.oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) auf und verzögert die Behandlung des [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Workers als installiert, bis das übergebene Promise erfolgreich aufgelöst wird. Das Promise wird aufgelöst, wenn alle Ressourcen abgerufen und zwischengespeichert wurden oder wenn eine Ausnahme auftritt.

Der Codeausschnitt zeigt auch eine bewährte Methode für die Versionskontrolle von Caches, die vom Service Worker genutzt werden. Obwohl dieses Beispiel nur einen Cache hat, können Sie diesen Ansatz für mehrere Caches verwenden. Der Code ordnet einen Kurzbezeichner für einen Cache einem spezifischen, versionierten Cachnamen zu.

> [!NOTE]
> Protokollaussagen sind in Google Chrome über die "Inspect"-Schnittstelle für den relevanten Service Worker sichtbar, die über chrome://serviceworker-internals zugänglich ist.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`install`-Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
