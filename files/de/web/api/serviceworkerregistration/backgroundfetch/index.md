---
title: "ServiceWorkerRegistration: backgroundFetch-Eigenschaft"
short-title: backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`backgroundFetch`**-Eigenschaft des schreibgeschützten
[`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt eine Referenz auf ein
[`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das verwendet werden kann, um Hintergrundabruffunktionen zu starten.

## Wert

Ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt.

## Beispiele

### Initiierung eines Hintergrundabrufs

Der folgende Code greift auf die `backgroundFetch`-Eigenschaft zu und verwendet sie, um einen Hintergrundabruf zu starten.

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
