---
title: "ServiceWorkerRegistration: backgroundFetch-Eigenschaft"
short-title: backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`backgroundFetch`**-Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Referenz zu einem [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, mit dem Hintergrundfetch-Operationen initiiert werden können.

## Wert

Ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt.

## Beispiele

### Initiieren eines Hintergrundfetchs

Der folgende Code greift auf die `backgroundFetch`-Eigenschaft zu und verwendet sie, um eine Hintergrundfetch-Operation zu initiieren.

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
  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
