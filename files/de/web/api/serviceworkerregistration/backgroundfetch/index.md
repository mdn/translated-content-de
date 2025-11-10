---
title: "ServiceWorkerRegistration: backgroundFetch-Eigenschaft"
short-title: backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`backgroundFetch`**-Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das verwendet werden kann, um Hintergrundabrufoperationen zu starten.

## Wert

Ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt.

## Beispiele

### Starten eines Hintergrundabrufs

Der folgende Code greift auf die `backgroundFetch`-Eigenschaft zu und verwendet sie, um eine Hintergrundabrufoperation zu starten.

```js
// main.js
async function requestBackgroundFetch(movieData) {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "download-movie",
    ["/my-movie-part-1.webm", "/my-movie-part-2.webm"],
    {
      icons: movieIcons,
      title: "Downloading my movie",
      downloadTotal: 60 * 1024 * 1024,
      label: "Downloading a show",
    },
  );
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
